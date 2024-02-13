
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
      <Router> 
        <Navbar/> 
        <Routes>  
        <Route index element={<News pageSize={this.pageSize}  key="general" countr="in" category="general"/>} />
        <Route exact path="/general" element={<News pageSize={this.pageSize}  key="general" countr="in" category="general"/>} />
        <Route exact path="/business" element={<News pageSize={this.pageSize}  key="business" countr="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" countr="in" category="entertainment"/>} />
        <Route exact path="/health" element={<News pageSize={this.pageSize} key="health" countr="in" category="health"/>} />
        <Route exact path="/science" element={<News pageSize={this.pageSize} key="science"  countr="in" category="science"/>} />
        <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports"  countr="in" category="sports"/>} />
        <Route exact path="/technology" element={<News pageSize={this.pageSize} key="technology"  countr="in" category="technology"/>} />
       </Routes>
        
      </Router> 
    </div>
    )
  }
}

