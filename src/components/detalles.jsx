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
        return <div><p>Cargando</p></div>
    }

    return (

        <div className="max-w-2xl m-auto p-6 bg-gray-200 rounded-2xl">
            <Link to="/peliculas">Volver</Link>
            <div className="text-center">
                <h1 className=" font-bold bg-black text-white inline-block rounded-2xl w-auto py-2 px-4">{peliculas.name}</h1>
            </div>

            <div className="flex p-5">
                <div className="mx-4">
                    {peliculas.image && (
                        <img src={peliculas.image} alt={peliculas.name} className="rounded-xl mt-4" />
                    )
                    }
                </div>
                {/*se pone entre parentesis cuando son objetos*/}

                <div className="inline-block gap-2 mx-4">
                    <p className="pb-5">{peliculas.description}</p>
                    {/*pone el signo de ? para que si existe el genre dentro de esta pelicula ejecute el map sino*/}
                    {/*vuelve indefinido y no falla*/}
                    {peliculas.genre?.map((g, index) => (
                        <span key={index} className="bg-blue-500 text-white px-4 py-1 rounded capitalize gap-4">
                        {g}
                    </span>
                    ))}
                </div>
            </div>


        </div>
    );

}

export default DetallePeliculas;