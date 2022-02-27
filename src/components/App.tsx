import React from 'react';
import logo from './logo.svg';
import {MyForm} from "./Form";
import Footer from "./Footer";
import GlobalStyles from '../styles/global'
import Background from "./Background"


function App() {
  return (
    <div className="App">
      <Background/>
      <header className={"App-header"}>
        <MyForm/>
      </header>
      
      <Footer/>
      <GlobalStyles />
    </div>
  );
}

export default App;
