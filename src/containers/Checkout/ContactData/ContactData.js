import React , {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: '',
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
        this.setState({loading:true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ahmad',
                address: 'Jaffa',
                email: 'ahmadfk90@trst.com'
            }
        }
        console.log((order));
        
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({loading: false})
        });
    }

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" placeholder="Your name" name="name"></input>
            <input className={classes.Input} type="email" placeholder="Your Mail" name="email"></input>
            <input className={classes.Input} type="text" placeholder="Your Address" name="address"></input>
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>)
        if (this.state.loading) {
            form = <Spinner></Spinner>
        }
    return (
        <div className={classes.ContactData}>
            <h4>Enter your Data</h4>
            {form}
        </div>
    );
}
}
export default ContactData;