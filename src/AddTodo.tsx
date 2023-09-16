import React, { useState } from 'react';

interface IAddTodoProps {
	addItemFn: (t: string) => void;
}

const AddTodo: React.FC<IAddTodoProps> = ({ addItemFn }) => {
	const [inputValue, setInputValue] = useState('');

	const handleAddItem = () => {
		addItemFn(inputValue);
		setInputValue('');
	};

	return (
		<section className='add-todo'>
			<article className='add-input'>
				<input
					type='text'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Add new item here'
				/>
			</article>
			<div className='add-btn' onClick={handleAddItem}>
				+
			</div>
		</section>
	);
};

export default AddTodo;
