import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import pages
import { MainPage } from "./user/pages"
import { Home } from "./user/pages/home"
import { About } from "./user/pages/about"
import { Contact } from "./user/pages/contact"
// import css
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element : <Contact />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
