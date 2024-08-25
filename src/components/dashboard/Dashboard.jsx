import React, {useState,useEffect} from 'react';
import './dashboard.css';
import Cards from '../cardcomponent/Cards';
import Report from '../report/Report';
import RecentSels from '../sales/RecentSels';
import TopSellingProduct from '../sales/TopSellingProduct';

function Dashboard() {
    const [cards,setCards] =  useState([]);
    const fatchData = ()=> {
        fetch('http://localhost:4000/cards')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        }).catch(e=> console.log(e.message));
    };

    useEffect(()=>{
        fatchData();
    },[]);

  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    {
                        
                        cards && cards.length >0 &&
                        cards.map(card => <Cards key={card._id} card={card}/>)

                    }
                    <div className="col-12">
                        <Report />
                    </div>
                    <div className='col-12'>
                        <RecentSels />
                    </div>
                    <div className='col-12'>
                        <TopSellingProduct />
                    </div>
                </div>
            </div>
            <div className="col-lg-4">

            </div>
        </div>
    </section>
  )
}

export default Dashboard