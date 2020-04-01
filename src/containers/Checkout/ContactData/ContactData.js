import React , {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: ''
    }

render() {
    return (
        <div className={classes.ContactData}>
            <h4>Enter your Data</h4>
            <form>
                <input className={classes.Input} type="text" placeholder="Your name" name="name"></input>
                <input className={classes.Input} type="email" placeholder="Your Mail" name="email"></input>
                <input className={classes.Input} type="text" placeholder="Your Address" name="address"></input>
                <Button btnType="Success">Order</Button>
            </form>
        </div>
    );
}
}
export default ContactData;