import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route, Redirect} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'


class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContiuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    
    render() {
        let summary = <Redirect to='/'></Redirect>
        const purchasedRedirect = this.props.purchased ? <Redirect to='/'></Redirect> : null
        if (this.props.ings) {
            summary =
            <div>
            {purchasedRedirect}
            <CheckoutSummary 
            ingredients={this.props.ings}
            checkoutCancelled = {this.checkoutCancelledHandler}
            checkoutContinued = {this.checkoutContiuedHandler}></CheckoutSummary>
            <Route 
                path={this.props.match.path  + '/contact-data'} 
                component={ContactData}></Route>
            </div>
        }
        return (
            <div>
                {summary}
            </div>
        )
    }

}

const mapStatetoProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStatetoProps)(Checkout);