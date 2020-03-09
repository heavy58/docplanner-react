import React, { Component } from 'react';
const menu = [{name:"About Us"},{name:"Carrier"},{name : "Departements",value:["Marketing & PR ","Customer success &sales ", "IT,Product,Design & UX and Data","Finance & Administration","HR & More"]}]
class Header extends Component {
    state = { 
      display : false
     }
   Show =()=> {
     console.log("show")
     this.setState({
       display:!this.state.display
     })
   }
    render() {
      return ( 
        <div className="stylee">
        <img className="imagedoc" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt=""/>

        <div className="listeheader">
        {menu.map((el,i)=><div className="espace" key= {i}>
              {el.value ? <div className="dep">
            
               <p onClick={el.name==="Departements" ?  this.Show  : console.log()}>  {el.name}</p>
                  <div className={ this.state.display ? "display" : "hide"} 
                  >{el.name==="Departements"&&el.value.map((el)=><ul  >

                  <li className="list1">{el}</li>
                  </ul>)}
                  </div>
              </div>:
              <div>
                {el.name}
                </div>
                }
      </div>)}
            
        </div>
        </div>);
    }
  }
   
  export default Header;