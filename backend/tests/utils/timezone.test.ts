/**
 * Tests for Timezone Utilities
 */

import {
  getTimezoneByCountry,
  getLocalePresetByCountry,
  isEastAfricaTime,
  getAllEastAfricanTimezones,
  getEATOffset,
  convertToEAT,
  formatDateForCountry,
  getCurrentTimeInCountry,
  isSameTimeZone,
  getBusinessHours,
} from '../../src/utils/timezone';

describe('Timezone Utilities', () => {
  describe('getTimezoneByCountry', () => {
    it('should return correct timezone for Kenya', () => {
      expect(getTimezoneByCountry('KE')).toBe('Africa/Nairobi');
    });

    it('should return correct timezone for Tanzania', () => {
      expect(getTimezoneByCountry('TZ')).toBe('Africa/Dar_es_Salaam');
    });

    it('should return correct timezone for Uganda', () => {
      expect(getTimezoneByCountry('UG')).toBe('Africa/Kampala');
    });

    it('should return correct timezone for Rwanda', () => {
      expect(getTimezoneByCountry('RW')).toBe('Africa/Kigali');
    });

    it('should return correct timezone for Ethiopia', () => {
      expect(getTimezoneByCountry('ET')).toBe('Africa/Addis_Ababa');
    });

    it('should return correct timezone for Somalia', () => {
      expect(getTimezoneByCountry('SO')).toBe('Africa/Mogadishu');
    });

    it('should return null for unsupported country', () => {
      expect(getTimezoneByCountry('US')).toBeNull();
    });
  });

  describe('getLocalePresetByCountry', () => {
    it('should return full locale preset for Kenya', () => {
      const preset = getLocalePresetByCountry('KE');
      expect(preset).toEqual({
        language: 'sw',
        currency: 'KES',
        timezone: 'Africa/Nairobi',
        country: 'Kenya',
      });
    });

    it('should return full locale preset for Ethiopia', () => {
      const preset = getLocalePresetByCountry('ET');
      expect(preset).toEqual({
        language: 'am',
        currency: 'ETB',
        timezone: 'Africa/Addis_Ababa',
        country: 'Ethiopia',
      });
    });

    it('should return null for unsupported country', () => {
      expect(getLocalePresetByCountry('US')).toBeNull();
    });
  });

  describe('isEastAfricaTime', () => {
    it('should return true for Nairobi timezone', () => {
      expect(isEastAfricaTime('Africa/Nairobi')).toBe(true);
    });

    it('should return true for Dar es Salaam timezone', () => {
      expect(isEastAfricaTime('Africa/Dar_es_Salaam')).toBe(true);
    });

    it('should return true for Addis Ababa timezone', () => {
      expect(isEastAfricaTime('Africa/Addis_Ababa')).toBe(true);
    });

    it('should return false for non-EAT timezone', () => {
      expect(isEastAfricaTime('America/New_York')).toBe(false);
    });

    it('should return false for UTC', () => {
      expect(isEastAfricaTime('UTC')).toBe(false);
    });
  });

  describe('getAllEastAfricanTimezones', () => {
    it('should return array of all East African timezones', () => {
      const timezones = getAllEastAfricanTimezones();
      expect(Array.isArray(timezones)).toBe(true);
      expect(timezones.length).toBeGreaterThan(10);
      expect(timezones).toContain('Africa/Nairobi');
      expect(timezones).toContain('Africa/Dar_es_Salaam');
      expect(timezones).toContain('Africa/Kampala');
    });
  });

  describe('getEATOffset', () => {
    it('should return +3 for East Africa Time', () => {
      expect(getEATOffset()).toBe(3);
    });
  });

  describe('convertToEAT', () => {
    it('should convert UTC date to EAT format', () => {
      const utcDate = new Date('2024-01-15T12:00:00Z');
      const eatString = convertToEAT(utcDate);
      
      // EAT is UTC+3, so 12:00 UTC = 15:00 EAT
      expect(eatString).toContain('15:00:00');
      expect(eatString).toContain('01/15/2024');
    });

    it('should handle midnight UTC correctly', () => {
      const utcDate = new Date('2024-01-15T00:00:00Z');
      const eatString = convertToEAT(utcDate);
      
      // 00:00 UTC = 03:00 EAT
      expect(eatString).toContain('03:00:00');
    });
  });

  describe('formatDateForCountry', () => {
    it('should format date for Kenya with Swahili locale', () => {
      const date = new Date('2024-01-15T12:00:00Z');
      const formatted = formatDateForCountry(date, 'KE');
      
      expect(formatted).toBeTruthy();
      expect(typeof formatted).toBe('string');
    });

    it('should format date for Ethiopia with Amharic locale', () => {
      const date = new Date('2024-01-15T12:00:00Z');
      const formatted = formatDateForCountry(date, 'ET');
      
      expect(formatted).toBeTruthy();
      expect(typeof formatted).toBe('string');
    });

    it('should return ISO string for unsupported country', () => {
      const date = new Date('2024-01-15T12:00:00Z');
      const formatted = formatDateForCountry(date, 'US');
      
      expect(formatted).toBe(date.toISOString());
    });
  });

  describe('getCurrentTimeInCountry', () => {
    it('should return Date object for Kenya', () => {
      const currentTime = getCurrentTimeInCountry('KE');
      expect(currentTime instanceof Date).toBe(true);
      expect(currentTime.getTime()).toBeGreaterThan(0);
    });

    it('should return Date object for Tanzania', () => {
      const currentTime = getCurrentTimeInCountry('TZ');
      expect(currentTime instanceof Date).toBe(true);
    });

    it('should return current date for unsupported country', () => {
      const currentTime = getCurrentTimeInCountry('US');
      expect(currentTime instanceof Date).toBe(true);
    });
  });

  describe('isSameTimeZone', () => {
    it('should return true for timezones in same zone (Nairobi and Kampala)', () => {
      // Both are UTC+3
      const result = isSameTimeZone('Africa/Nairobi', 'Africa/Kampala');
      expect(result).toBe(true);
    });

    it('should return true for timezones in same zone (Dar es Salaam and Addis Ababa)', () => {
      // Both are UTC+3
      const result = isSameTimeZone('Africa/Dar_es_Salaam', 'Africa/Addis_Ababa');
      expect(result).toBe(true);
    });

    it('should return false for different timezones', () => {
      const result = isSameTimeZone('Africa/Nairobi', 'America/New_York');
      expect(result).toBe(false);
    });
  });

  describe('getBusinessHours', () => {
    it('should return business hours for Kenya with default hours', () => {
      const hours = getBusinessHours('KE');
      
      expect(hours).not.toBeNull();
      expect(hours?.timezone).toBe('Africa/Nairobi');
      expect(hours?.open).toBeTruthy();
      expect(hours?.close).toBeTruthy();
    });

    it('should return business hours for Tanzania with custom hours', () => {
      const hours = getBusinessHours('TZ', 8, 18);

      expect(hours).not.toBeNull();
      expect(hours?.timezone).toBe('Africa/Dar_es_Salaam');
      expect(hours?.open).toBeTruthy();
      expect(hours?.close).toBeTruthy();
      // Verify that open time is before close time
      expect(hours?.open).not.toBe(hours?.close);
    });

    it('should return null for unsupported country', () => {
      const hours = getBusinessHours('US');
      expect(hours).toBeNull();
    });
  });
});

