import React from 'react';
import './progmming.css'

const value= [
  {
    text: "javasScript",
    percentage: 80
  },
  {
    text: "Node.js",
    percentage: 60
  },
  {
    text: "React.js",
    percentage: 50
  },
  {
    text: "MongoDb",
    percentage: 65
  },
  {
    text: "Html",
    percentage: 90
  },
  {
    text: "Css",
    percentage: 80
  },
];
const Programming = () => {
  return (
    <>
      <div>
        <div className="row my-5">
          {value.map((value, index) => {
            return <>
           <div className="col-lg-6 col-mg-6 col-sm-12 my-2">
            <span className="language">
              {value.text}
            </span>
            <div className="progress-some">
              <div className="progress-new" style={{width: `${value.percentage}%`}}></div>
              </div>
            </div>   
          </>
          })}
        </div>
      </div>
      
    </>
  )
}

export default Programming