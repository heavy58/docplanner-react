import React from 'react';
import imagelog from'./imagelogo.png';
const ico=[{class:"a",background:"#FFFFFF" ,img:"https://www.docplanner.com/img/flag.png",p1:"Leader in 10 countries",p2:"Poland,Turkey,Spain,Italy,Czech Republic,Mexico,Brazil,Colombia,Argentina and Chile"},{class:"b",background:"#FFFFFF" ,img:"https://www.docplanner.com/img/visits.png",p1:"1.5 million appointments",p2:"booked last month"},{class:"c",background:"#FFFFFF" ,img:"https://www.docplanner.com/img/patients.png",p1:"30 million unique patients",p2:"visit us every month"},{class:"d",background:"#FFFFFF" ,img:"https://www.docplanner.com/img/doctors.png",p1:"2 million active doctors",p2:"trust in our solutions"}]
const World =()=> {
    return (
        <div className="World">
            <div>
<h4 className="the">The world's biggest healthcare platform</h4>
<p className="wee">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
<img src={imagelog}></img>
</div>
<div className="roat1">
{ico.map((el,i)=>{return (
    <div className={el.class} key={i} style={{backgroundColor :el.background}}>
         <img className="imagefl" src={el.img} alt=""/>
        <p>{el.p1}</p>
        <p>{el.p2}</p>

        </div>
)

                
            })}
    </div>
    </div>
    
            )
        }
        export default World