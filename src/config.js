/**
 * Config values.
 */

export const cityName =  'London';
export const countryCode =  'uk';
export const forecastTotalDays = 5;
export const apiKey =  '09c43e9a72bb993a34a787f3f96754c3';
export const apiUrl =  `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&mode=json&q=${cityName},${countryCode}`;
