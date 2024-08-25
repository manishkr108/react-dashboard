import React,{useState} from 'react';
import './card.css';
import CardFilter from './CardFilter';

function Cards(card) {

    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);
    };
  return (
    <div className='col-xxl-4 col-md-6'>
        <div className='card info-card sales-card'>
            <CardFilter filterChange={handleFilterChange} />
            <div className='card-body'>
                <h5 className='card-title'>
                    {card.card.name} <span>{filter}</span>
                </h5>

                <div className='d-flex align-item-center'>
                    <div className='card-icon rounded-circle d-flex align-item-center justify-content-center'>
                        <i className={card.card.icon}></i>
                        </div> 
                        <div className='ps-3'>
                            <h6>
                                {card.card.name== "Revenue" ? '$' + card.card.amount.toLocaleString('en-us') : card.card.amount.toLocaleString('en-us')}
                            </h6>
                            <span className={`${card.card.percentage >0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`}>
                                {card.card.percentage >0 ? card.card.percentage * 100 : -card.card.percentage * 100}%
                            </span>

                            <span className='text-muted small pt-2 ps-1'>
                                {card.card.percentage >0 ? 'increase' : 'decrese'}
                            </span>

                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards