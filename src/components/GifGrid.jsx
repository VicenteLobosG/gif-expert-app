import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const {gifs, isLoading} = useFetchGifs(category);
    console.log({ gifs, isLoading})

    return (
        <div>   
            <h3>{ category }</h3>

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