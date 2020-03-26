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
        {controls.map( ctr => (
            <BuildControl 
            key={ctr.type}
            label={ctr.label}
            added = {() => props.ingredientAdded(ctr.type)}>
            </BuildControl>
        )
        )}
    </div>
)
export default buildControls;