import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Listado = () => {
    const [listado, setListado] = useState([]);

    const traerPeliculas = async () => {
        try {
            const result = await fetch("https://imdb.iamidiotareyoutoo.com/search?q=Spiderman");
            const data = await result.json();
            setListado(data.description);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        traerPeliculas();
    }, []);

    return (
        <>
            <h1 className="flex justify-center text-5xl mt-2 mb-4">Listado de Peliculas</h1>
            <div className="w-1/2 bg-gray-200 mx-auto p-4">
                <ul>
                    {listado.map((movie, i) => (
                        <li key={i} className="flex flex-col justify-center items-center border rounded-lg p-4 m-4 bg-white shadow">
                            <h2>Titulo: {movie["#TITLE"]}</h2>
                            <p>Año: {movie["#YEAR"]}</p>
                            <img src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} className="w-1/3 mb-3 rounded"/>
                            <Link to={`/listado/${movie["#IMDB_ID"]}`} className="bg-blue-600 text-white px-4 py-2 rounded">
                                Ver detalles
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Listado;
