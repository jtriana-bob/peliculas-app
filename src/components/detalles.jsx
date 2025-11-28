import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const DetallesPelicula = () => {
    const { tt } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchDetalles = async () => {
            try {
                const res = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${tt}`);
                const data = await res.json();
                console.log("Respuesta API:", data);
                let info = data;
                setMovie(info.short);
            } catch (e) {
                console.error("Error al cargar película:", e);
            }
        };
        fetchDetalles();
    }, [tt]);

    if (!movie) return <h2>Cargando...</h2>;

    return (
        <div>

        </div>
    );
};

export default DetallesPelicula;
