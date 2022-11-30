import React from 'react'
import "./Card.css"
import { FireFilled, SyncOutlined} from '@ant-design/icons'
import { Progress } from 'antd';

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];

const Card = (props) => {

  const spent = parseInt(props.data.spent.value);
  const available = parseInt(props.data.available_to_spend.value);
  const percent = spent/(spent+available) *100 ;

  


  return (
    <div className='card-container' >
       <div className="header" >
        <div>
        <p className='header-h1'>
           {props.data.name}
        </p>
        <p className='header-h2' >
           { props.data.owner_name } &#x2022; {props.data.budget_name}
        </p>
        </div>
   
        
        <div className='card-icon'>
        {props.data.card_type == "burner"?(
        <FireFilled style={{ fontSize: '1.5rem', color: '#EB4869' }} />) :
       ( <SyncOutlined style={{ fontSize: '1.5rem', color: '#EB4869' }} />)}
        
        </div>
       
       
        </div> 
        <div className='subheader' >
        <p className='sh-outline' >
          {props.data.card_type}
        </p>
        <p>
        {props.data.card_type == "burner" ?(
          <>
          Expires : {props.data.expiry}
          </>
        ):(
          <>
           {name} Limit : {props.data.limit}
           </>
        )}
        
        </p>
        </div>

        <div className='progress'>
        <Progress percent={percent} showInfo={false} trailColor="#499359" strokeColor="#EB4869" />
        <p><span className="dot" style={{ backgroundColor:"#eb4869" }} ></span> Spent  <span style={{float: "right"}} > {spent} {props.data.spent.currency} </span>  </p>
        <p><span className="dot" style={{ backgroundColor:"#499359" }} ></span> Available to spend  <span style={{float: "right"}} >{available} {props.data.spent.currency}</span> </p>
        </div>
    </div>
  )
}

export default Card