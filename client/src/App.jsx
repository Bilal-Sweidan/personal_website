import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import pages
import { MainPage } from "./user/pages"
import { Home } from "./user/pages/home"
import { About } from "./user/pages/about"
import { Contact } from "./user/pages/contact"
import { Services } from "./user/pages/service"
import { Projects } from "./user/pages/projects"
import { ProjectsDetails } from "./user/pages/projectsDetails"
import { Login } from "./user/pages/login"

// import css
import "./App.css"
import { Admin } from "./admin/pages"

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
      },
      {
        path : 'services',
        element : <Services />
      },
      {
        path : "projects",
        element : <Projects />
      }
    ]
  },
  {
    path : "/login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <Admin />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
