import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router";

const DetallePeliculas = () => {

    const {id} = useParams();

    const [peliculas, setPeliculas] = React.useState(null);
    const [cargando, setCargando] = React.useState(true);

    const getDetallePelicula =async () => {
        setCargando(true);
        const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);

        if (!response.ok) {
            throw new Error(`Detalle pelicula ${id} no se encontro`);
        }

        const data = await response.json();

        //se pone short al revisar la API no es un array sino un objeto

        setPeliculas(data.short);
        setCargando(false);
    }

    useEffect(() => {
        getDetallePelicula();
    }, [id])

    if (cargando) {
        return <div className={"absolute top-1/2 right-1/2"}><p>Cargando...</p></div>
    }

    return (

        <div className="max-w-2xl m-auto p-6 bg-gray-200 rounded-2xl">
            <Link to="/listado">Volver</Link>
            <div className="flex flex-col justify-center items-center border rounded-lg p-4 m-4 bg-white shadow">
                <div className="text-center ">
                    <h1 className=" font-bold bg-black text-white inline-block rounded-2xl w-auto p-4">{peliculas.name}</h1>
                </div>

                <div>
                    <div className="mx-4 flex justify-center">
                        {peliculas.image && (
                            <img src={peliculas.image} alt={peliculas.name} className="rounded-md mt-4 w-1/2" />
                        )}
                    </div>
                    <div className="gap-2 m-4">
                        <p className="pb-5">{peliculas.description}</p>
                        {peliculas.genre?.map((g, index) => (
                            <span key={index} className="bg-blue-500 w-1/4 text-white text-xl capitalize p-3 m-4 ">
                            {g}
                        </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    <h3>Calificación</h3>
                    {peliculas.review?.reviewRating ? (
                        <p>{peliculas.review.reviewRating.ratingValue} / {peliculas.review.reviewRating.bestRating}</p>
                    ) : (
                        <p>No tiene calificación</p>
                    )}
                </div>
            </div>
        </div>
    );

}

export default DetallePeliculas;