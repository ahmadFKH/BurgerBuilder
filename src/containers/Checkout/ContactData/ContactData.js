import React , {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux'
import withErrorHandler from '../../../hoc/ErrorHandler/ErrorHandler'
import * as actions from '../../../store/actions/index'

class ContactData extends Component {
    state = {
       orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
       },
        formIsValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData ={}

        for (let elementIDT in this.state.orderForm) {
            formData[elementIDT] = this.state.orderForm[elementIDT].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userID: this.props.userID
        }
        this.props.onOrderBurger(order, this.props.token);
    }

    checkValidity(value, rules) {
        let isValid = false
        if (rules.required) {
            isValid = value.trim() !== ''
                }
        return isValid
    } 

    inputChangedHandler = (event, inputIDT) => {
        // console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIDT]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIDT] = updatedFormElement;

        let formIsValid = true
        for (let key in updatedOrderForm) {
            formIsValid = updatedOrderForm[key].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType= {formElement.config.elementType}
                    elementConfig = {formElement.config.elementConfig}
                    inValid={!formElement.config.valid}
                    value={formElement.config.value}
                    touched = {formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}></Input>
            ))}
            <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
        </form>)
        if (this.props.loading) {
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

const mapStatetoProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userID: state.auth.userID
    }
}

const mapDispatchtoProps = dispatch => {
return{
    onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
}   
}

export default connect(mapStatetoProps, mapDispatchtoProps)(withErrorHandler(ContactData, axios));