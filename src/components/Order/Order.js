import React from 'react'
import classes from './Order.css'

const order = (props) => {
    const ingredients = []
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig => {
    return <span 
    key={ig.name}
    style = {{
        display: 'inline-block',
        textTransform: 'capitalize',
        margin: '0 8px',
        padding: '10px',
        border: '1px solid black'
    }}>{ig.name} ({ig.amount})</span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: {Number.parseFloat(props.price).toFixed(2)}</p>
        </div>
    )
}
    
;

export default order;