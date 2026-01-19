import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

/**
 * Supported languages (ISO 639-1)
 * Includes global languages and East African languages
 */
const SUPPORTED_LANGUAGES = [
  'en', // English
  'es', // Spanish
  'fr', // French
  'de', // German
  'it', // Italian
  'pt', // Portuguese
  'ja', // Japanese
  'zh', // Chinese
  'ar', // Arabic
  'ru', // Russian
  'sw', // Swahili (Kenya, Tanzania, Uganda)
  'so', // Somali (Somalia)
  'am', // Amharic (Ethiopia)
  'rw', // Kinyarwanda (Rwanda)
];

/**
 * Supported currencies (ISO 4217)
 * Includes global currencies and East African currencies
 */
const SUPPORTED_CURRENCIES = [
  'USD', // US Dollar
  'EUR', // Euro
  'GBP', // British Pound
  'JPY', // Japanese Yen
  'CNY', // Chinese Yuan
  'AUD', // Australian Dollar
  'CAD', // Canadian Dollar
  'CHF', // Swiss Franc
  'INR', // Indian Rupee
  'BRL', // Brazilian Real
  'KES', // Kenyan Shilling
  'TZS', // Tanzanian Shilling
  'UGX', // Ugandan Shilling
  'RWF', // Rwandan Franc
  'ETB', // Ethiopian Birr
  'SOS', // Somali Shilling
];

/**
 * Parse Accept-Language header
 * Format: "en-US,en;q=0.9,es;q=0.8"
 * Returns the best matching language code
 */
const parseAcceptLanguage = (acceptLanguage: string): string => {
  if (!acceptLanguage) return 'en';

  // Parse language preferences with quality values
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const parts = lang.trim().split(';');
      const code = parts[0].split('-')[0].toLowerCase(); // Extract base language code
      const quality = parts[1] ? parseFloat(parts[1].split('=')[1]) : 1.0;
      return { code, quality };
    })
    .sort((a, b) => b.quality - a.quality); // Sort by quality (highest first)

  // Find first supported language
  for (const lang of languages) {
    if (SUPPORTED_LANGUAGES.includes(lang.code)) {
      return lang.code;
    }
  }

  return 'en'; // Default to English
};

/**
 * Validate timezone (IANA timezone database)
 * Basic validation - checks if it looks like a valid timezone
 */
const isValidTimezone = (timezone: string): boolean => {
  // Basic format check: Area/Location or Area/Location/Sublocation
  // Allow underscores and mixed case in location names (e.g., New_York, Port_of_Spain)
  const timezoneRegex = /^[A-Za-z]+\/[A-Za-z_]+(?:\/[A-Za-z_]+)?$/;
  return timezone === 'UTC' || timezoneRegex.test(timezone);
};

/**
 * Validate currency code (ISO 4217)
 */
const isValidCurrency = (currency: string): boolean => {
  return /^[A-Z]{3}$/.test(currency) && SUPPORTED_CURRENCIES.includes(currency);
};

/**
 * Localization Middleware
 * 
 * Extracts and validates localization headers:
 * - Accept-Language: Preferred language for response content (ISO 639-1)
 * - X-Timezone: Client timezone for date/time operations (IANA timezone)
 * - X-Currency: Preferred currency for monetary values (ISO 4217)
 * 
 * Sets sensible defaults if headers are not provided or invalid.
 */
export const localizationMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  try {
    // ============================================
    // Language
    // ============================================
    const acceptLanguage = req.headers['accept-language'] as string;
    const language = parseAcceptLanguage(acceptLanguage);

    // ============================================
    // Timezone
    // ============================================
    const timezoneHeader = req.headers['x-timezone'] as string;
    let timezone = 'UTC'; // Default to UTC

    if (timezoneHeader) {
      if (isValidTimezone(timezoneHeader)) {
        timezone = timezoneHeader;
      } else {
        logger.warn('Invalid timezone provided, using UTC', {
          providedTimezone: timezoneHeader,
          requestId: req.requestId,
        });
      }
    }

    // ============================================
    // Currency
    // ============================================
    const currencyHeader = req.headers['x-currency'] as string;
    let currency = 'USD'; // Default to USD

    if (currencyHeader) {
      const upperCurrency = currencyHeader.toUpperCase();
      if (isValidCurrency(upperCurrency)) {
        currency = upperCurrency;
      } else {
        logger.warn('Invalid currency provided, using USD', {
          providedCurrency: currencyHeader,
          requestId: req.requestId,
        });
      }
    }

    // ============================================
    // Attach locale context to request
    // ============================================
    req.locale = {
      language,
      timezone,
      currency,
    };

    logger.debug('Locale context extracted', {
      language: req.locale.language,
      timezone: req.locale.timezone,
      currency: req.locale.currency,
      requestId: req.requestId,
    });

    next();
  } catch (error) {
    logger.error('Localization middleware error:', error);
    // Set default locale even if there's an error
    req.locale = {
      language: 'en',
      timezone: 'UTC',
      currency: 'USD',
    };
    next();
  }
};

/**
 * Get supported languages
 */
export const getSupportedLanguages = (): string[] => SUPPORTED_LANGUAGES;

/**
 * Get supported currencies
 */
export const getSupportedCurrencies = (): string[] => SUPPORTED_CURRENCIES;

