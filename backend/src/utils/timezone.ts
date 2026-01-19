/**
 * Timezone Utilities
 * Provides helper functions for timezone handling, especially for East African regions
 */

import { EAST_AFRICAN_TIMEZONES, EAST_AFRICAN_LOCALE_PRESETS } from '../middleware/localization';

/**
 * Get timezone by country code (ISO 3166-1 alpha-2)
 * @param countryCode - Two-letter country code (e.g., 'KE', 'TZ', 'UG')
 * @returns IANA timezone string or null if not found
 */
export const getTimezoneByCountry = (countryCode: string): string | null => {
  const preset = EAST_AFRICAN_LOCALE_PRESETS[countryCode as keyof typeof EAST_AFRICAN_LOCALE_PRESETS];
  return preset ? preset.timezone : null;
};

/**
 * Get full locale preset by country code
 * @param countryCode - Two-letter country code (e.g., 'KE', 'TZ', 'UG')
 * @returns Locale preset with language, currency, timezone, and country name
 */
export const getLocalePresetByCountry = (countryCode: string) => {
  return EAST_AFRICAN_LOCALE_PRESETS[countryCode as keyof typeof EAST_AFRICAN_LOCALE_PRESETS] || null;
};

/**
 * Check if a timezone is in East Africa Time (EAT) zone (UTC+3)
 * @param timezone - IANA timezone string
 * @returns true if timezone is in EAT zone
 */
export const isEastAfricaTime = (timezone: string): boolean => {
  const eatTimezones = Object.values(EAST_AFRICAN_TIMEZONES) as string[];
  return eatTimezones.includes(timezone);
};

/**
 * Get all East African timezones
 * @returns Array of IANA timezone strings for East Africa
 */
export const getAllEastAfricanTimezones = (): string[] => {
  return Object.values(EAST_AFRICAN_TIMEZONES);
};

/**
 * Get timezone offset in hours for East Africa Time (EAT)
 * EAT is UTC+3 (no daylight saving time)
 * @returns Offset in hours (+3)
 */
export const getEATOffset = (): number => {
  return 3; // UTC+3
};

/**
 * Convert UTC time to East Africa Time
 * @param utcDate - Date object in UTC
 * @returns Date string in EAT timezone
 */
export const convertToEAT = (utcDate: Date): string => {
  return utcDate.toLocaleString('en-US', {
    timeZone: 'Africa/Nairobi', // Representative EAT timezone
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
};

/**
 * Format date/time for a specific East African country
 * @param date - Date object
 * @param countryCode - Two-letter country code (e.g., 'KE', 'TZ', 'UG')
 * @param locale - Optional locale for formatting (defaults to country's language)
 * @returns Formatted date string
 */
export const formatDateForCountry = (
  date: Date,
  countryCode: string,
  locale?: string
): string => {
  const preset = getLocalePresetByCountry(countryCode);
  if (!preset) {
    return date.toISOString();
  }

  const formatLocale = locale || `${preset.language}-${countryCode}`;
  
  return date.toLocaleString(formatLocale, {
    timeZone: preset.timezone,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

/**
 * Get current time in a specific East African country
 * @param countryCode - Two-letter country code (e.g., 'KE', 'TZ', 'UG')
 * @returns Current date/time in that country's timezone
 */
export const getCurrentTimeInCountry = (countryCode: string): Date => {
  const preset = getLocalePresetByCountry(countryCode);
  if (!preset) {
    return new Date();
  }

  // Get current time as string in the target timezone
  const timeString = new Date().toLocaleString('en-US', {
    timeZone: preset.timezone,
  });

  return new Date(timeString);
};

/**
 * Check if two timezones are in the same time zone (same UTC offset)
 * Useful for East Africa since most countries share UTC+3
 * @param timezone1 - First IANA timezone
 * @param timezone2 - Second IANA timezone
 * @returns true if both timezones have the same offset
 */
export const isSameTimeZone = (timezone1: string, timezone2: string): boolean => {
  const date = new Date();
  
  const offset1 = new Date(date.toLocaleString('en-US', { timeZone: timezone1 })).getTime();
  const offset2 = new Date(date.toLocaleString('en-US', { timeZone: timezone2 })).getTime();
  
  return offset1 === offset2;
};

/**
 * Get business hours in local timezone
 * @param countryCode - Two-letter country code
 * @param openHour - Opening hour (0-23)
 * @param closeHour - Closing hour (0-23)
 * @returns Object with opening and closing times in local timezone
 */
export const getBusinessHours = (
  countryCode: string,
  openHour: number = 9,
  closeHour: number = 17
): { open: string; close: string; timezone: string } | null => {
  const preset = getLocalePresetByCountry(countryCode);
  if (!preset) {
    return null;
  }

  const today = new Date();
  const openTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), openHour, 0, 0, 0);
  const closeTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), closeHour, 0, 0, 0);

  return {
    open: openTime.toLocaleTimeString('en-US', {
      timeZone: preset.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
    close: closeTime.toLocaleTimeString('en-US', {
      timeZone: preset.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
    timezone: preset.timezone,
  };
};

