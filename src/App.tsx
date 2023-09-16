import TodoSection from './TodoSection';
import Weather from './Weather';

const App: React.FC = () => {
	return (
		<section className='mainWindow'>
			<TodoSection />
			<Weather />
		</section>
	);
};

export default App;
