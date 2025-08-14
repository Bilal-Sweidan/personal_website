import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useContext } from "react"
// import pages
import { MainPage } from "./user/pages"
import { Home } from "./user/pages/home"
import { About } from "./user/pages/about"
import { Contact } from "./user/pages/contact"
import { Services } from "./user/pages/service"
import { Projects } from "./user/pages/projects"
import { ProjectsDetails } from "./user/pages/projectsDetails"
import { Login } from "./user/pages/login"
import { UserBlog } from "./user/pages/blog"
// admin 
import { Admin, Messages } from "./admin/pages"
import { Overview } from "./admin/pages/overview"
import { Projects as AdminProjectsPage, AddingProject, ProjectsHome } from "./admin/pages/projects"
import { Blog, BlogHome } from "./admin/pages/blog"
import { Profile } from "./admin/pages/profile"
// import css
import "./App.css"

// context
import authContext from "./context/authContext"





// query client
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// protected routes
const AdminProtected = ({ children }) => {
  const { user, isLoading } = useContext(authContext.AuthContext)
  console.log(isLoading)
  if (isLoading) {
    return null
  }
  if (!user) {
    return <Navigate to="/" />
  }
  return children
}

// block the user from back to login page
const BlockAdmin = ({ children }) => {
  const { user, isLoading } = useContext(authContext.AuthContext)
  if (isLoading) {
    return null
  }
  if (user) {
    return <Navigate to="/admin" replace />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlockAdmin><MainPage /></BlockAdmin>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "projects/:id",
        element: <ProjectsDetails />
      },
      {
        path: 'blog',
        element: <UserBlog />
      }
    ]
  },
  {
    path: "/login",
    element: <BlockAdmin><Login /></BlockAdmin>
  },
  {
    path: "/admin",
    element: <AdminProtected><Admin /></AdminProtected>,
    children: [
      {
        path: "",
        element: <Overview />,
        index: true
      },
      {
        path: 'projects',
        element: <AdminProjectsPage />,
        children: [
          {
            path: "",
            element: <ProjectsHome />,
          },
          {
            path: "new-project",
            element: <AddingProject />
          }
        ]
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            path: '',
            element: <BlogHome />
          }
        ]
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: 'messages',
        element: <Messages />
      }
    ]
  }
])



function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <authContext.AuthProvider>
        <RouterProvider router={router} />
      </authContext.AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
