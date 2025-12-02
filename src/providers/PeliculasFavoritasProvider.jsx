import React, {useState} from 'react';
import {PeliculasFavoritasContext} from "./PeliculasFavoritasContext.js";

// const peliculaFavoritaExample = {
//     id: 1,
//     title: "Spiderman",
//     poster: "iamgen.png"
// }

export default function PeliculasFavoritasProvider({children}) {

    const [peliculasFavoritas, setPeliculasFavoritas] = useState([])

    const addPeliculaFavorita = (pelicula) => {

        const peliculaFavorita = {
            id: pelicula.imdbId,
            title: pelicula.short.name,
            poster: pelicula.short.image
        };
        setPeliculasFavoritas([...peliculasFavoritas, peliculaFavorita])
    }

    const removePeliculaFavorita = (id) => {
        const peliculasFiltradas = peliculasFavoritas.filter(pelicula => pelicula.id !== id)
        setPeliculasFavoritas(peliculasFiltradas)
    }

    const esFavorita = (id) => {
        return peliculasFavoritas.some(pelicula => pelicula.id === id)
    }

    return (
        <PeliculasFavoritasContext.Provider value={{
            peliculasFavoritas, addPeliculaFavorita, removePeliculaFavorita, esFavorita
        }}>
            {children}
        </PeliculasFavoritasContext.Provider>
    );
};