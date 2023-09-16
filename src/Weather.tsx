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

const backgroundImages = [
	{
		id: 'nighttime-sky',
		img: require('../src/img/cloudy-1869753_640.jpg'),
	},
	{
		id: 'daytime-clear-sky',
		img: require('../src/img/sun-3588618_640.jpg'),
	},
	{
		id: 'daytime-cloudy-sky',
		img: require('../src/img/sky-1494656_640.jpg'),
	},
	{
		id: 'daytime-snowy-ground',
		img: require('../src/img/snow-5707452_640.jpg'),
	},
];

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

	const displayBackgroundImage = () => {
		let imageId = '';
		if (currentWeather?.is_day !== 1) {
			imageId = 'nighttime-sky';
		} else {
			if (currentWeather?.temperature > 18) {
				imageId = 'daytime-clear-sky';
			} else if (currentWeather?.temperature < 0) {
				imageId = 'daytime-snowy-ground';
			} else {
				imageId = 'daytime-cloudy-sky';
			}
		}
		const imageToDisplay = backgroundImages.find((item) => item.id === imageId);
		return <img alt={imageToDisplay?.id} src={imageToDisplay?.img}></img>;
	};

	return (
		<section className='weather'>
			{displayBackgroundImage()}
			<div className='temp'>{currentWeather?.temperature}&#176;</div>
		</section>
	);
};

export default Weather;
