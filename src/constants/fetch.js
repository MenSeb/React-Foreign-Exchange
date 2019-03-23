const API_ID = process.env.REACT_APP_OPEN_EXCHANGE_RATES_API_KEY

export default {
  key: 'OPEN_EXCHANGE_RATES_STORAGE_KEY',
  url: 'https://openexchangerates.org/api',
  endpoint: `latest.json?app_id=${ API_ID }`,
  lifetime: 1000 * 60 * 60 * 24,
  delay: 3000,
}