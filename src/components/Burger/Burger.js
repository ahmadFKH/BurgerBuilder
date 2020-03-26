import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformedIng = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIng.length === 0) {
        transformedIng = <p>Add Ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIng}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
};

export default burger;