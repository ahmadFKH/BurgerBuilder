import React, { Component } from "react";
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then(res => {
            const fetchOrders =[]
            // console.log(res.data);
            for (let key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                     id: key});
                // console.log(fetchOrders);
                
            }
            this.setState({loading: false, orders: fetchOrders})
            console.log(this.state.orders);
        })
        .catch(err => {
            this.setState({loading: false})
        })
    }
    render() {
        return(
            <div>
                {this.state.orders.map(order => 
                    <Order 
                    key={order.id}
                    ingredients = {order.ingredients}
                    price = {order.price}></Order>
                )}
            </div>

        )
    }
}

export default withErrorHandler(Orders,axios);