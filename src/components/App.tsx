
import logo from './logo.svg';
import Footer from "./Footer";
import GlobalStyles from '../styles/global'
import Background from "./Background"
import {createBrowserHistory} from 'history'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import {MyForm} from "./Form";

function App() {
  return (
    <div className="App">
      <Background/>
      <Router>
      <Routes>
          <Route path="/" element={<MyForm />} />
          </Routes>
      </Router>
      
      <Footer/>
      <GlobalStyles />
    </div>
  );
}

export default App;
