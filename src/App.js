import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/textForms';
import Alert from './components/Alert';
// import About from './components/About';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {
  const[mode,setMode]=useState('light');
  const toggle=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Enabled','success');
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='#113047';
      showAlert('Dark Mode Enabled','success');
    }
  }
  //for alert
  const[alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  return (
    <>
    <Navbar title='TEXTUTILS' mode={mode} toggle={toggle} />
    <Alert alert={alert} />
    <TextForms heading='Enter text here:' mode={mode} sAlert={showAlert}/>
    </>
  );
}

export default App;



    
