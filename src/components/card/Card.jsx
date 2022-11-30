import React from 'react'
import "./Card.css"
import { FireFilled, SyncOutlined} from '@ant-design/icons'
import { Progress } from 'antd';

const Card = (props) => {
  return (
    <div className='card-container' >
       <div className="header" >
        <div>
        <p className='header-h1'>
            Apple Dev License
        </p>
        <p className='header-h2' >
            Rajest  &#x2022; Sales Singapore
        </p>
        </div>
   
        <div className='card-icon'>
        <FireFilled style={{ fontSize: '1.5rem', color: '#EB4869' }} />
        {/* <SyncOutlined /> */}
        
        </div>
       
       
        </div> 
        <div className='subheader' >
        <p className='sh-outline' >
          Burner
        </p>
        <p>
        Expires: 9 Feb
        </p>
        </div>

        <div className='progress'>
        <Progress percent={50} showInfo={false} trailColor="#499359" strokeColor="#EB4869" />
        <p><span className="dot" style={{ backgroundColor:"#eb4869" }} ></span> Spent  <span style={{float: "right"}} >50</span>  </p>
        <p><span className="dot" style={{ backgroundColor:"#499359" }} ></span> Available to spend  <span style={{float: "right"}} >50</span> </p>
        </div>
    </div>
  )
}

export default Card