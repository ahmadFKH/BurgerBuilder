import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './buildControls.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map( ctr => (
            <BuildControl 
            key={ctr.type}
            label={ctr.label}
            added = {() => props.ingredientAdded(ctr.type)}
            removed = {() => props.ingredientRemoved(ctr.type)}
            disabled={props.disabled[ctr.type]}>
            </BuildControl>
        ))}
        <button 
        onClick={props.ordered}
        className={classes.OrderButton} 
        disabled={!props.purchasable}>Order Now</button>
    </div>
)
export default buildControls;