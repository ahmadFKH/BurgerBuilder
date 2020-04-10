import React, { Component } from "react";
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

    componentDidMount() {
        console.log(this.props.token);
        this.props.onFetchOrders(this.props.token, this.props.userID);
    }
    render() {
        let orders = <Spinner></Spinner>
        if (!this.props.loading) {
            orders = 
                this.props.orders.map(order => (
                    <Order 
                    key={order.id}
                    ingredients = {order.ingredients}
                    price = {order.price}></Order>
                ))
        }
        return(
            <div>
                {orders}
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userID: state.auth.userID
    }
}


const mapDipatchToProps = dispatch => {
    return {
        onFetchOrders: (token, ID) => dispatch(actions.fetchOrders(token, ID))
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(withErrorHandler(Orders,axios));