import React from 'react';
import Header from './components/Header'
import './App.css';
import Section1 from './components/Section';
import Section2 from'./components/component';
import Petitcomponent from'./components/petit component';
import World from './components/theworld';
import Improve from'./components/improve';
import Improve1 from './components/little component';
import Footer from './components/footer';


const paragraphe1=[{background:"#00CCB1" ,p1:"For patients",p2:" Find a doctor book a visit and solve any health-related doubt",  img:"https://www.docplanner.com/img/screen-marketplace@2x.png" },{background:"#3D83DF" ,p1:"For doctors",p2:" Save time managing visits and cut no-shows by half",img:"https://www.docplanner.com/img/screen-saas@2x.png"}]
const tab=[{img:"https://www.docplanner.com/images/warsaw.png",p1:"warsaw",button:"see openings"},{img:"https://www.docplanner.com/images/barcelona.png",p1:"barcelona",button:"see openings"},{img:"https://www.docplanner.com/images/istanbul.png",p1:"istanbul",button:"see openings"},{img:"https://www.docplanner.com/images/rome.png",p1:"rome",button:"see openings"},{img:"https://www.docplanner.com/images/mexico-city.png",p1:"Mexico city",button:"see openings"},{img:"https://www.docplanner.com/images/curitiba.png",p1:"Curitiba",button:"see openings"}]
function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2 arr={paragraphe1}/>
      <Petitcomponent/>
      <World/>
      <Improve1/>
      <Improve arr1={tab}/>
      <Footer/>
    </div>
  );
}

export default App;
