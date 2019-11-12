import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import styled from 'styled-components';

const BurgerS = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem
    @media (min-width: 1000px) and (min-height: 401px) {
        width: 350px;
        height 300px;
    }
}`;

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => { return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        } );
    } );
    return(
        <BurgerS>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </BurgerS>
    );
};

export default burger;