import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiService from '../../../apiServices/apiService';
import Card from '../../card/Card'
import Nav from '../../navigation/Nav'
import "../pages.css"

const Blocked = () => {
  const [data, setData] = useState("");
  const [ val, setVal ] = useState(4);


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

  return (
   
     <div>
    <Nav active="blocked" />

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
      
    { data ?
      data.filter((item, idx) => item.status== "blocked").map((data, index) => {

        return (
    
      <Card  key={index} data={data} />
    
      )})
      :
      <></>
    }
   
    </div>

    </InfiniteScroll>

    </div>
   
  )
}

export default Blocked