import React, {Component} from 'react'
import Aux from '../../../hoc/Auxi'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[orderSummary]');
    }

    render() {
        const ingSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span>{igKey}</span>: {this.props.ingredients[igKey]}
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
        <p>Total Price: {this.props.price.toFixed(2)}</p>
            <p>Contiue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
    
        ) 
    }
};

export default OrderSummary;