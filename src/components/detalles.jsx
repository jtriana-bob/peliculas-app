import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {PeliculasFavoritasContext} from "../providers/PeliculasFavoritasContext.js";

export default function PeliculaDetalle() {
    const {id} = useParams()

    const {
        addPeliculaFavorita,
        removePeliculaFavorita,
        esFavorita
    } = useContext(PeliculasFavoritasContext)

    const [pelicula, setPelicula] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchPelicula = async () => {
        const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);
        const data = await response.json();
        setPelicula(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPelicula()
    }, [id]);

    if (!pelicula) return <p>Pelicula No encontrada</p>

    if (loading) return <div>
        Cargando...
    </div>;

    return (
        <div className="mt-10">
            <div className="flex justify-center items-center mt-6">
                <div className="rounded-2xl bg-gray-200 p-2 hover:scale-105 transition-all w-[500px] relative">
                    <h2 className="text-amber-950 text-3xl">{pelicula.short.name}</h2>
                    <div className="absolute top-1 right-5">
                        {
                            esFavorita(pelicula.imdbId) ?
                                <img onClick={() => removePeliculaFavorita(pelicula.imdbId)} src="/star-on.svg"
                                     alt="Star" width="40" height="40"/>
                                : <img onClick={() => addPeliculaFavorita(pelicula)} src="/star-off.svg" alt="Star"
                                       width="40" height="40"/>
                        }
                    </div>
                    <img className="rounded-2xl" src={pelicula.short.image} alt="Imagen Pelicula"/>
                    <p className="text-center px-8 pt-4 mb-4">{pelicula.short.description}</p>
                    {pelicula.short.genre?.map((g, index) => (
                        <span key={index} className="bg-blue-500 w-[100px] h-[20px] text-white text-xl capitalize p-4 m-6 ">
                            {g}
                        </span>
                    ))}
                    <div className="flex flex-wrap justify-center m-4 gap-4">
                        <h3>Calificación</h3>
                        {pelicula.short.review?.reviewRating ? (
                            <p>{pelicula.short.review.reviewRating.ratingValue} / {pelicula.short.review.reviewRating.bestRating}</p>
                        ) : (
                            <p>No tiene calificación</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};