import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

// ==============Method 1==============

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children :[
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />      
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

// ==============Method 2==============
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
      loader={githubInfoLoader}
      // yaha par function return kerne ke bad hame loader use karna padega 
        path='github'
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//Loader : koi bhi data fetch karna he kisi bhi API se ye fir 
//database se to direct API call yaha se hi mar sakte he 

// jab ham hamara cursor late he tab fetchinng suru ho jati he
// or usko fetch karke cache me rakhte he 

// jab hm click karte he to loader ne already fetch karke rakh 
// liya hoga or usko dekh sakte he
