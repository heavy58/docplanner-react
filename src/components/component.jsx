import React from 'react';
const Section2 = (props) => {
    return (
        <div className="hh">
            {props.arr.map((el,i)=>{return (
                <div className=" jjj" key={i} style={{backgroundColor :el.background}}>
                    <p className="p11">{el.p1}</p>
                    <p className="p12">{el.p2}</p>
                    {el.background ==='#00CCB1'?< select name="" id="" className="buttonselect">
                       <option value="">SELECT</option>
                       <option value="">ARGENTINA</option>
                       <option value="">AUSTRALIA</option>
                       <option value="">BRAZIL</option>
                       <option value="">CHILIE</option>
                       <option value="">COLOMBIA</option>
                       <option value="">CZECH</option>
                       <option value="">FRANCE</option>
                       <option value="">ITALY</option>
                       <option value="">MEXICO</option>
                       <option value="">PERU</option>
                       <option value="">POLAND</option>
                       <option value="">PORTUGAL</option>
                       <option value="">SPAIN</option>
                       <option value="">TURKEY</option>
                       <option value="">UK</option>
                   </ select>:console.log("NN") }
                 <img className="imggg" src={el.img} alt=""/>
                   
                </div>
            )
                
            })}
            
        </div>
    )
}
export default Section2
