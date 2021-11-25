import React from "react";
import './App.css';
import Practice from "./Practice";
import RegisterForm from "./Components/RegisterForm";
import Parent from "./Parent";
import { BrowserRouter as Router ,Routes, Route,} from 'react-router-dom';
import AppHeader from "./Components/Header";
import Timer from "./reacthooks/UseEffect"
import FavoriteColor from "./reacthooks/UseState";
import Storage from "./storages/Storage";

function App() {
  return(
   <Router>
     <AppHeader />
        <Routes>
          <Route path='/practice' element={ <Practice/>}></Route>
          <Route path='/registerform' element={ <RegisterForm />}></Route>
          <Route path='/parent' element={ <Parent />}></Route>
          <Route path='/reacthooks/useeffect' element={ <Timer />}></Route>
          <Route path='/reacthooks/usestate' element={ <FavoriteColor />}></Route>
          <Route path='/storages/storage' element={ <Storage />}></Route>
        </Routes>
      
   </Router>
  );
}

export default App;