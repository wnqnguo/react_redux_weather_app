import axios from 'axios';
const API_KEY ='e81dac8fc944ad351d9927c3ce4ae313'
export const FETCH_WEATHER = 'FETCH_WEATHER'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export function fetchWeather(city){
	const url=`${ROOT_URL}&q={city},us`;
	const request = axios.get(url);
	return{
		type: FETCH_WEATHER,
		payload: request
	}
}