import React, { Suspense, useState } from 'react'
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom"
import PageNotFound from './pages/PageNotFound'
import LoadingPage from './components/common/LoadingPage'

const HomePage = React.lazy(() => import("./pages/client/HomePage"))
const DashboardPage = React.lazy(() => import("./pages/admin/DashboardPage"))
const LayoutAdmin = React.lazy(() => import("./components/layouts/LayOutAdmin"))
const LayOutClient = React.lazy(() => import("./components/layouts/LayOutClient"))

const ProductManagerPage = React.lazy(() => import("./pages/admin/ProductModules/ProductManagerPage"))
const ProductAddPage = React.lazy(() => import("./pages/admin/ProductModules/ProductAddPage"))
const ProductUpdatePage = React.lazy(() => import("./pages/admin/ProductModules/ProductUpdatePage"))

const CategoryManager = React.lazy(() => import("./pages/admin/CategoryModules/CategoryManager"))
const CategoryAdd = React.lazy(() => import("./pages/admin/CategoryModules/CategoryAdd"))
const CategoryUpdate = React.lazy(() => import("./pages/admin/CategoryModules/CategoryUpdate"))

const SliderManager = React.lazy(() => import("./pages/admin/SliderModules/SliderManager"))
const SliderAddPag = React.lazy(() => import("./pages/admin/SliderModules/SliderAddPag"))
const SliderUpdate = React.lazy(() => import("./pages/admin/SliderModules/SliderUpdate"))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path='/' element={<LayOutClient/>}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path='admin' element={<LayoutAdmin/>}>
            <Route path='dashboard' element={<DashboardPage />} />

            <Route path='product'>
              <Route index element={<ProductManagerPage />}/>
              <Route path='add' element={<ProductAddPage />}/>
              <Route path='update/:id' element={<ProductUpdatePage />}/>
            </Route>

            <Route path='category'>
              <Route index element={<CategoryManager />}/>
              <Route path='add' element={<CategoryAdd />}/>
              <Route path='update/:id' element={<CategoryUpdate />}/>
            </Route>

            <Route path='slider'>
              <Route index element={<SliderManager />}/>
              <Route path='add' element={<SliderAddPag />}/>
              <Route path='update/:id' element={<SliderUpdate />}/>
            </Route>

          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
