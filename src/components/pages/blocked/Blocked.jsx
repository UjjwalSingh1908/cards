import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FilterOutlined } from '@ant-design/icons';
import apiService from '../../../apiServices/apiService';
import Card from '../../card/Card'
import Nav from '../../navigation/Nav'
import "../pages.css"
import { Input, Dropdown, Space, Checkbox, Button } from 'antd';

const {Search} = Input;

const Blocked = () => {
  const [data, setData] = useState("");
  const [ val, setVal ] = useState(4);
  const [ burn, setBurn ] = useState(false);
  const [ sub, setSub ] = useState(false);


  useEffect(() => {
    
    apiService.getcards().then((res)=>{

      console.log(res.data[0].data);
      setData(res.data[0].data);

    }).catch(err=>{
      console.log(err.response);
    })

  }, [])
  
  const fetchMoreData =  () => {
    
    apiService.getcards().then((res)=>{

      console.log(res.data[0].data);
      setData(res.data[0].data);

    }).catch(err=>{
      console.log(err.response);
    })


  } 

  let cards;

  if(data){
      if(sub && !burn){
      cards = data.filter((item, idx) => idx < val).filter((card, idx) => card.card_type == "subscription" ).map((data, index) => {

        return (
    
      <Card  key={index} data={data} />
    
      )})
        }
      else if(!sub && burn){
      cards = data.filter((item, idx) => idx < val).filter((card, idx) => card.card_type == "burner" ).map((data, index) => {

        return (
    
      <Card  key={index} data={data} />
    
      )})
        }
        else {
          cards = 
          data.filter((item, idx) => idx < val).map((data, index) => {
      
            return (
        
          <Card  key={index} data={data} />
        
          )})
        }
      }
   

  return (
   
     <div>
    <Nav active="blocked" />
    <div className='subnav' >
    <Search placeholder="input search text"  style={{ width: 200 }} />
    
    <Dropdown overlay={ 
    <div className='filter-menu' >

      <p className='fm-h1' >
        Filters
      </p>

      <p className='fm-h2' >Types</p>

       
      <Checkbox checked={burn} onChange={ ()=>setBurn(!burn) }>Burner</Checkbox>
      <Checkbox checked={sub} onChange={ ()=>setSub(!sub) }>Subscription</Checkbox>
      

      <div className='btn-container'>
      <Button type="primary" style={{width:"48%"}}>Apply</Button>
    <Button style={{width:"48%"}} onClick={ () => { setBurn(false); setSub(false) } }  >Clear</Button>
    </div>


    </div> } trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <div className='btn'>
    
    <FilterOutlined style={{ fontSize: '1rem', color: '#8d8d8d' }} /> Filter 
    
    </div>
    
      </Space>
    </a>
  </Dropdown>

    
    </div>

    <InfiniteScroll
     dataLength={val}
     next={ () => {
      setVal(val+4);
      fetchMoreData();
    }}
     hasMore={ val == data.length ? false : true}

     loader={<h4>Loading...</h4>}
     endMessage={
      <p style={{ textAlign: "center", paddingTop: "1rem" }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
    >

    <div className='cards-container' >
      
    {cards}
   
    </div>

    </InfiniteScroll>

    </div>
   
  )
}

export default Blocked