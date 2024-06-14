import axios from 'axios';

const BaseURL = process.env.REACT_APP_API_ENDPOINT;

export const HttpGet = async(aParams) => {
  aParams['units'] = 'metric';
  aParams['APPID'] = process.env.REACT_APP_API_APP_ID;
  const oURL = BaseURL + "?" + new URLSearchParams(aParams);
  let oResponse = await axios.get(oURL);
  return oResponse?.data;
}
