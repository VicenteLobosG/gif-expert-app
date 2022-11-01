import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const [gifs, setGifs] = useState([]);
    
    const getImages = async () => {
        const newGifs = await getGifs(category);
        setGifs(newGifs)
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div>   
            <h3>{ category }</h3>
            
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