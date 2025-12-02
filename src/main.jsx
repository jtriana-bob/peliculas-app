import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listado from "./components/listado.jsx";
import DetallesPelicula from "./components/detalles.jsx";
import { Navigate } from "react-router-dom";
import {PeliculasFavoritasContext} from "./providers/PeliculasFavoritasContext.js";
import PeliculasFavoritasProvider from "./providers/PeliculasFavoritasProvider.jsx";

const router = createBrowserRouter([
    {
        path: '/listado',
        element: <Listado />
    },
    {
        path: '/listado/:id',
        element: <DetallesPelicula />
    },
]);

createRoot(document.getElementById('root')).render(
    <PeliculasFavoritasProvider>
        <RouterProvider router={router}/>
    </PeliculasFavoritasProvider>

);
