import { createBrowserRouter } from "react-router-dom";

import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros"
import Planes from "../components/Planes"
import Servicios from "../components/Servicios"
import Root from "../root/Root";
import Dashboard from "../dashboard/Dashboard";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Hero />,
            },
            {
                path: "/nosotros",
                element: <Nosotros />,
            },
            {
                path: "/planes",
                element: <Planes />,
            },
            {
                path: "/servicios",
                element: <Servicios />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ]
    }
])
