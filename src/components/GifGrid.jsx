import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

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
            
            <ol>
                {
                    gifs.map( ({ id, title }) => 
                        <li key={ id }>{ title }</li>
                    )
                }
            </ol>
        </div>
    )
}