import React from 'react';
import {Link} from "react-router-dom";

export default function CardPeliculas(movie) {
    return (
        <div>
            <li key={movie["#ID"]} className="flex flex-col justify-center items-center border rounded-lg p-4 m-4 bg-white shadow">
                <h2>Titulo: {movie["#TITLE"]}</h2>
                <p>Año: {movie["#YEAR"]}</p>
                <img src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} className="w-1/3 mb-3 rounded"/>
                <Link to={`/listado/${movie["#IMDB_ID"]}`} className="bg-blue-600 text-white px-4 py-2 rounded">
                    Ver detalles
                </Link>
            </li>
        </div>
    )
}


