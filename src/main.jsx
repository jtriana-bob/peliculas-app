import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listado from "./components/listado.jsx";
import DetallesPelicula from "./components/detalles.jsx";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/listado',
        element: <Listado />
    },
    {
        path: '/movie/:tt',
        element: <DetallesPelicula />
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
