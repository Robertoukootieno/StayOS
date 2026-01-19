import { Request, Response, NextFunction } from 'express';
import { localizationMiddleware } from '../../src/middleware/localization';

// Mock logger
jest.mock('../../src/config/logger', () => ({
  default: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

describe('Localization Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    mockRequest = {
      headers: {},
      path: '/test',
    };
    mockResponse = {};
    nextFunction = jest.fn();
  });

  describe('Language Extraction', () => {
    it('should extract language from Accept-Language header', () => {
      mockRequest.headers = {
        'accept-language': 'es',
      };

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.language).toBe('es');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should parse Accept-Language with quality values', () => {
      mockRequest.headers = {
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
      };

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.language).toBe('fr');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should use default language (en) if Accept-Language is not provided', () => {
      mockRequest.headers = {};

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.language).toBe('en');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should use default language (en) if Accept-Language is unsupported', () => {
      mockRequest.headers = {
        'accept-language': 'xx-YY',
      };

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.language).toBe('en');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should support all defined languages', () => {
      const supportedLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'zh', 'ar', 'ru'];

      supportedLanguages.forEach((lang) => {
        mockRequest.headers = {
          'accept-language': lang,
        };

        localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

        expect(mockRequest.locale?.language).toBe(lang);
      });
    });
  });

  describe('Timezone Extraction', () => {
    it('should extract timezone from X-Timezone header', () => {
      mockRequest.headers = {
        'x-timezone': 'America/New_York',
      };

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.timezone).toBe('America/New_York');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should use default timezone (UTC) if X-Timezone is not provided', () => {
      mockRequest.headers = {};

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.timezone).toBe('UTC');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should validate timezone format', () => {
      mockRequest.headers = {
        'x-timezone': 'Europe/London',
      };

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.timezone).toBe('Europe/London');
      expect(nextFunction).toHaveBeenCalled();
    });
  });

  describe('Currency Extraction', () => {
    it('should extract currency from X-Currency header', () => {
      mockRequest.headers = {
        'x-currency': 'EUR',
      };

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.currency).toBe('EUR');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should use default currency (USD) if X-Currency is not provided', () => {
      mockRequest.headers = {};

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.currency).toBe('USD');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should use default currency (USD) if X-Currency is unsupported', () => {
      mockRequest.headers = {
        'x-currency': 'XXX',
      };

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale?.currency).toBe('USD');
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should support all defined currencies', () => {
      const supportedCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'AUD', 'CAD', 'CHF', 'INR', 'BRL'];

      supportedCurrencies.forEach((currency) => {
        mockRequest.headers = {
          'x-currency': currency,
        };

        localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

        expect(mockRequest.locale?.currency).toBe(currency);
      });
    });
  });

  describe('Combined Localization', () => {
    it('should extract all localization parameters together', () => {
      mockRequest.headers = {
        'accept-language': 'es-ES',
        'x-timezone': 'Europe/Madrid',
        'x-currency': 'EUR',
      };

      localizationMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.locale).toEqual({
        language: 'es',
        timezone: 'Europe/Madrid',
        currency: 'EUR',
      });
      expect(nextFunction).toHaveBeenCalled();
    });
  });
});

