import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Jojos Bizarre Adventure"]);

    const onAddCategory = (newCategory) => {
        for (const cat of categories) {
            if (cat.toLowerCase() === newCategory.toLowerCase()) return;
        }
        setCategories([newCategory, ...categories]);
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
                    />
                )) 
            }
        </>
    )
}