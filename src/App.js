import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'
import About from './components/About';
import other from './components/other';
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter ,
//   Route,

//   Routes,
// } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');
  const [text, settext] = useState('dark');
  const [alert, setAlert] = useState('');
  const showAlert = (message, type_) => {
    setAlert({
      msg: message,
      type: type_
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      settext('light')
      document.body.style.backgroundColor = 'grey'
      showAlert("you are in Dark mode now", "success")
      document.title = 'TextModifier-Dark'
    }
    else {
      setmode('light')
      settext('dark')
      document.body.style.backgroundColor = 'white'
      showAlert("you are in Light mode now", "success")
    }
  }
  return (
    <>
  
    
  
    {/* </nav> */}
    <Navbar title="TextUtils" mode={mode} text={text} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
  
    {/* <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/form" element={<Form showAlert={showAlert} mode={mode} heading="Try TextUtils - word counter, character counter, remove extra spaces"/>} /> */}
          <Form showAlert={showAlert} mode={mode} heading="Try TextUtils - word counter, character counter, remove extra spaces"/>
          {/* <Route exact path="/*" element={<other />} /> */}
           {/* <Route path="/">
            <Form showAlert={showAlert} heading= mode={mode}/>
          </Route> */}
  {/* </Routes> */}
    
    </div>
    
    
    </>
  );
};

export default App;
