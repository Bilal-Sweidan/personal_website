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
import { Admin } from "./admin/pages"
import { Overview } from "./admin/pages/overview"
// admin 
import { Projects as AdminProjectsPage } from "./admin/pages/projects"
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
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Overview />,
        index: true
      },
      {
        path: 'projects',
        element: <AdminProjectsPage />
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
