import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({category}) => {
    useEffect(() => {
        getGifs(category);
    }, []);

    return (
        <div>   
            <li>{ category }
            </li>
            {/* { 
                gifs.data.map( img => (
                    <img src={img.source}/>
                )) 
            } */}
            
        </div>
    )
}