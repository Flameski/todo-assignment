import React, { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

interface IAddTodoProps {
	addItemFn: (t: string) => void;
}

const AddTodo: React.FC<IAddTodoProps> = ({ addItemFn }) => {
	const [inputValue, setInputValue] = useState('');

	const handleAddItem = () => {
		if (!inputValue) return;
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
					maxLength={70}
				/>
			</article>
			<div className='add-btn' onClick={handleAddItem}>
				<MdAddCircleOutline />
			</div>
		</section>
	);
};

export default AddTodo;
