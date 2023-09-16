import { useEffect, useState } from 'react';

interface IWeatherData {
	current_weather: {
		is_day: number;
		temperature: number;
		time: string;
		weathercode: number;
		winddirection: number;
		windspeed: number;
	};
	elevation: number;
	generationtime_ms: number;
	latitude: number;
	longitude: number;
	timezone: string;
	timezone_abbreviation: string;
	utc_offset_seconds: number;
}

const Weather: React.FC = () => {
	const [weatherData, setWeatherData] = useState<IWeatherData | undefined>();

	const getWeatherData = async () => {
		const response = await fetch(
			'https://api.open-meteo.com/v1/forecast?latitude=42.6975&longitude=23.3241&current_weather=true'
		);
		const newWeatherData = await response.json();
		setWeatherData(newWeatherData);
	};

	useEffect(() => {
		getWeatherData();
	}, []);

	const currentWeather = weatherData?.current_weather;

	return <section className='weather'>{currentWeather?.temperature}</section>;
};

export default Weather;
