// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';




import {
  BrowserRouter as Router,
  Route,
  Routes
 
} from "react-router-dom";


function App() {
const [mode, setMode]=useState('light');
const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null);
    },3000 )
}

const removeBodyClass=()=>{
   document.body.classList.remove('bg-light');
   document.body.classList.remove('bg-dark');
   document.body.classList.remove('bg-warning');
   document.body.classList.remove('bg-danger');
   document.body.classList.remove('bg-success');
}

const toggleMode=(cls)=>{
  console.log(cls)
  removeBodyClass();
  document.body.classList.add('bg-' +cls)
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#0f056b';
    showAlert("Dark mode has been enabled" ,"success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled" ,"success")


  }
}
  
  return (
  
  
 <>

 
<Router>
<Navbar title="textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/ >
<div className="container my-3">
         

<Routes>
          {/* <Route exact path="/">
             <TextForm showAlert={showAlert} heading="Try TextUtils- word counter, character counter,Remove extra spaces" mode={mode}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route> */}
          <Route path="/" element={<TextForm showAlert={showAlert} heading= "Try TextUtils- word counter, character counter,Remove extra spaces "mode={mode}></TextForm>} />
        <Route path="/about" element={<About mode={mode} />} />
          </Routes>  
         
</div>
</Router>
 </>
   );
}
export default App;
