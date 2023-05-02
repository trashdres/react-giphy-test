import { useState } from "react"
import { AddCategory } from "./components";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Piece']);

	const onAddCategory = (category) => {
		if (categories.includes(category)) return;
		setCategories([category.toLowerCase(), ...categories]);
	}

	return (
		<>
			<h1>Hola mundo</h1>

			<AddCategory
				onNewCategory={onAddCategory}
			/>
			
			{
				categories.map(category => (
					<GifGrid
						key={category}
						category={category}
					/>
				))
			}
		</>
	)
}

export default GifExpertApp