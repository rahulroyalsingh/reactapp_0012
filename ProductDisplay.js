import React from 'react';
import './Product.css'
const Display = (props) => {
    console.log(props)

    const renderProduct = props.prodData.map((item) => {

        return (
            <div className='card'>
                <img src={item.image} alt={item.name} />
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>Rs.{item.cost}</p>
                    <p>{item.uses}</p>
                </div>

            </div>
        )
    })
    return (
        <div className='main'>
            {renderProduct}
        </div>

    )

}
export default Display