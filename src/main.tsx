import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.tsx'
import './styles/_main.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./views/Contact.tsx";
import Layout from "./layout/Layout.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <App/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
