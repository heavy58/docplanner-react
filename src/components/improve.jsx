import React from 'react';
const Improve =(props)=> {
    return (
        <div className="zz">
            {props.arr1.map((el,i)=>{return (
                <div key={i} style={{backgroundColor :el.background}}>
                 <img src={el.img} alt=""/>
                <div className="zz1">
                    <h5>{el.p1}</h5>
                    <h2>{el.p2}</h2>
                 <button className="button">see openings</button>
                 </div>
        </div> 
    )
        
            })}
            </div> 
            )}         

export default Improve