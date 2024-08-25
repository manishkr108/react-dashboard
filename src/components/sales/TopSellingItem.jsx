import React from 'react'

function TopSellingItem({item}) {
  return (
    <tr>
        {/* <th scope='col'>{item._id}</th> */}
        <th scope='row'>
            <a href='#'>
                <img src={item.preview} alt="preview" />
            </a>
        </th>

        <td>
            <a href='#' className='text-primary fw-bold'>
                {item.name}
            </a>
        </td>
    <td>${item.price.toFixed(2)}</td>
    <td className='fw-bold'>{item.sold}</td>
    <td>${(item.price * item.sold).toLocaleString('en-us')}</td>

    </tr>
  )
}

export default TopSellingItem