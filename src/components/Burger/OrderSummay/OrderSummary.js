import React from 'react'
import Aux from '../../../hoc/Auxi'

const orderSummary = (props) => {
    const ingSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span>{igKey}</span>: {props.ingredients[igKey]}
        </li>
        );
    })
    return (
    <Aux>
        <h3>Youar order</h3>
        <p>A vfdbfnhg</p>
        <ul>
            {ingSummary}
        </ul>
        <p>Contiue to Checkout?</p>
    </Aux>
    )
};

export default orderSummary;