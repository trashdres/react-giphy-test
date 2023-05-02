import { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

	const [inputValue, setInputValue] = useState('');

	const onInputChanged = ( event ) => {
		setInputValue( event.target.value );
	}
	
	const onSubmitForm = ( event ) => {
		event.preventDefault();
		const newValue = inputValue.trim();
		if( newValue.length <= 1 ) return;

		// setCategories( categorias => [inputValue, ...categorias]);
		onNewCategory( newValue );
		setInputValue('');
	}

	return (
		<form onSubmit={ onSubmitForm }>
			<input
				type="text"
				placeholder="Buscar Gifs"
				value={inputValue}
				onChange={ onInputChanged }
			/>
		</form>
	)
}
