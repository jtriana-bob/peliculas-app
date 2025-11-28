import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const DetallesPelicula = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cargando, setCargando] = useState(true);


        const traerDetalles = async () => {
            try {
                const res = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);
                const data = await res.json();
                setMovie(data.short);
            } catch (e) {
                console.error("Error al cargar película:", e);
                setError("Error cargando la información.");
            }
        };

    useEffect(() => {
        traerDetalles();
        setCargando(false);
    }, [id]);

    return (
        <div>
            <Link to={'/listado'}>Volver</Link>
            <h1 className=" font-bold bg-black text-white inline-block rounded-2xl w-auto py-2 px-4">{movie.name}</h1>

        </div>
    );
};

export default DetallesPelicula;
