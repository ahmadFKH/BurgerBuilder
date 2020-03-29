import React from 'react'
import Aux from '../../../hoc/Auxi'
import Button from '../../UI/Button/Button'
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
        <h3>Your Order</h3>
        <p>Ingredients:</p>
        <ul>
            {ingSummary}
        </ul>
    <p>Total Price: {props.price}</p>
        <p>Contiue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
    )
};

export default orderSummary;