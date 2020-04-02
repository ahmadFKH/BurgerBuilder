import React from 'react'
import classes from './Input.css'

const input = (props) => {
    
    let inputElement = null;
    const elementClasses = [classes.InputElement]

    if (props.inValid && props.touched) {
        elementClasses.push(classes.Invalid)
    }

    switch(props.elementType) {
        case ('input'):
            inputElement = <input 
                className={elementClasses.join(' ')} 
                {...props.elementConfig}
                value = {props.value}  onChange={props.changed}></input>;
            break;
        case ('textarea'):
            inputElement = <textarea 
            className={elementClasses.join(' ')} 
            {...props.elementConfig}
            value = {props.value} onChange={props.changed}></textarea>
            break;
        default:
            inputElement = <input 
            className={elementClasses.join(' ')} 
            {...props.elementConfig}
            value = {props.value} onChange={props.changed}></input>
    }
    
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

;

export default input;