import React, {useState,useEffect}from 'react';
import './resentSales.css';
import CardFilter from '../cardcomponent/CardFilter';
import RecentSalesTable from './RecentSalesTable';

function RecentSels() {
    const[items,setItems] = useState();
    const [filter,setFilter] = useState();
    const handelFilterChange = filter =>{
        setFilter(filter)
    };
    const fatchData = ()=> {
        fetch('http://localhost:4000/recentsales')
        .then(res=>res.json())
        .then(data =>{
            setItems(data);
        }).catch(e=> console.log(e.message));
    };

    useEffect(()=>{
        fatchData();
    },[]);
  return (
    <div className='card recent-sales overflow-auto'>
        <CardFilter filterChange={handelFilterChange} />

        <div className='card-body'>
            <h5 className='cart-title'>Recent Sels <span>| {filter}</span></h5>
            <RecentSalesTable items={items} />
        </div>
    </div>
  )
}

export default RecentSels