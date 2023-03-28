import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import dashboardsConfig from './dashboards/dashboardsConfig'
import HeaderAppConfig from './main/header/headerAppConfig'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<HeaderAppConfig />} >
                {/* <Route path='dashboards' element={dashboardsConfig} /> */}
            </Route>
        )
    )
    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ratione ad eius. Assumenda, perferendis est earum ex voluptate saepe non! Amet pariatur iusto distinctio impedit. Natus accusamus eos ex quibusdam.</>
    //     }
    // ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
