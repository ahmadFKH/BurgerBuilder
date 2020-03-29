import React from 'react'
import classes from './Button.css'

const button = (props) => {
    console.log(classes[props.btnType])
    console.log(classes.Button)
    return (
        <button
        className= {[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
    )
    }

export default button;