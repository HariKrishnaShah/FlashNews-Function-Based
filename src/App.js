import './App.css';
import React, {useState } from 'react';
import News from './components/News';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import {
  Routes,
  Route
} from "react-router-dom";
const App = ()=>
{
  const apiKeyString = process.env.REACT_APP_API_KEYS;
  const apiKeyarr = apiKeyString.split(',');
  const randomNumber = Math.floor(Math.random() * ((apiKeyarr.length-1) - 0 + 1)) + 0;
  let apiKey = apiKeyarr[randomNumber];
  let pageSize = 10;
  const[progress, setProgress] = useState(0);

  let changeProgress = (newProgress)=>
  {
    setProgress(newProgress);
  }
    return(
      <>
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={()=>changeProgress(0)}
      />
      <Routes>
      <Route exact path = "/" element = {<News apiKey ={apiKey} setProgress = {changeProgress}  key = "general"  pageSize = {pageSize} category = "general" />}  />
      <Route exact path = "/science" element = {<News apiKey ={apiKey} setProgress = {changeProgress}  key = "science" pageSize = {pageSize} category = "science"/>} />
      <Route exact path = "/entertainment" element = {<News apiKey ={apiKey} setProgress = {changeProgress}  key = "entertainment" pageSize = {pageSize} category = "entertainment"/>} />
      <Route exact path = "/health" element = {<News apiKey ={apiKey} setProgress = {changeProgress}   key = "health"  pageSize = {pageSize} category = "health"/>} />
      <Route exact path = "/technology" element = {<News apiKey ={apiKey} setProgress = {changeProgress}  key = "technology" pageSize = {pageSize} category = "technology"/>} />
      <Route exact path = "/sports"  element = {<News apiKey ={apiKey} setProgress = {changeProgress}  key = "sports" pageSize = {pageSize} category = "sports"/>} />
      <Route exact path = "*" element = {<News apiKey ={apiKey} setProgress = {changeProgress}  key = "general"  pageSize = {pageSize} category = "general" />}  />
      </Routes>
      </>
    );
  }

  export default App;
