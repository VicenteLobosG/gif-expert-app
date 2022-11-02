import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category, onDeleteCategory}) => {
    const {gifs, isLoading} = useFetchGifs(category);

    const handleDelete = (category) => {
        onDeleteCategory(category)
    }

    return (
        <div> 
            <h3>{ category }</h3>
            <button onClick={() => handleDelete(category)}>Borrar Categoria</button>

            {
                isLoading && ( <h2> Cargando... </h2> )
            }
            
            <div className="card-grid">
                {
                    gifs.map( (image) => 
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    )
                }
            </div>
        </div>
    )
}