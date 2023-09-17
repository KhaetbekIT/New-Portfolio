import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import { IParams } from '../interface/params'
import Design from '../../designs'
import Works from '../../pages/works'
import About from '../../pages/about'
import Contacts from '../../pages/contacts'

export const ParamsArray: IParams[] = [
    {
        id: 1,
        path: "/",
        element: <Home />,
        page_name: "home"
    },

    {
        id: 2,
        path: "/design/",
        element: <Design />,
        page_name: "design"
    },
    {
        id: 3,
        path: "/works/",
        element: <Works />,
        page_name: "works"
    },
    {
        id: 4,
        path: "/about/",
        element: <About />,
        page_name: "about"
    },
    {
        id: 5,
        path: "/contacts/",
        element: <Contacts />,
        page_name: "contacts"
    },


]

const Routers: React.FC = () => {
    
    return (
        <React.Fragment>
            <Routes>
                {
                    ParamsArray.map(params => {
                        return (
                            <React.Fragment key={params.id}>
                                <Route path={params.path} element={params.element} />
                            </React.Fragment>
                        )
                    })
                }
            </Routes>
        </React.Fragment>
    )
}

export default Routers