import { useState } from 'react'
// import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("Olive")

  return (
    <>
      {/* <Header /> */}
     
    </>
  )
}

export default App

// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import HomePage from './Pages/HomePage';
// import AboutPage from './Pages/AboutPage';
// import BlogPage from './Pages/BlogPage';
// import ContactPage from './Pages/ContactPage';
// import OffersPage from './Pages/OffersPage';
// import TeamPage from './Pages/TeamPage';

// function App() {
//   return (
//     <>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/about' element={<AboutPage />} />
//         <Route path='/blog' element={<BlogPage />} />
//         <Route path='/contact' element={<ContactPage />} />
//         <Route path='/offers' element={<OffersPage />} />
//         <Route path='/team' element={<TeamPage />} />
//         <Route path='*' element={<HomePage />} />
//       </Routes>
//       <Footer />
//     </Router>
//     </>
//   );
// }
// export default App;

