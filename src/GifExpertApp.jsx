import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Jojos Bizarre Adventure"]);

    const onAddCategory = (newCategory) => {
        for (const cat of categories) {
            if (cat.toLowerCase() === newCategory.toLowerCase()) return;
        }
        setCategories([newCategory, ...categories]);
    }

    const onRemoveCategory = (removeCategory) => {
        const newCategories = categories.filter((cat) => cat !== removeCategory);
        setCategories(newCategories);
    }
    return (
        <>
            <h1> GifExpertApp </h1>
            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            { 
                categories.map( cat => (
                    <GifGrid 
                        key={cat}
                        category={cat}
                        onDeleteCategory={onRemoveCategory}
                    />
                )) 
            }
        </>
    )
}