import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Fav';


function App() {
   const { pathname } = useLocation();
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const email = 'juan53@live.com.ar';
   const password = 'pass123';

   const login = (userData) => {
      if(email === userData.email && password === userData.password){
         setAccess(true);
         navigate('/home');
      }
   }

   const logout = () => {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => 
         character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   const onSearch = (id) => {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }


   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
            
      </div>
   );
}

export default App;
