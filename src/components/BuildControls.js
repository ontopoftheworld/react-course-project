import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl';

const ControlPanel = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: auto;
    color: #CF8F2E
    padding: 10px 0;
}`;

const buildControls = (props) => (
    <ControlPanel>
        <p>Current Price: $ {props.price}</p>
        <BuildControl key='Salad' label='Salad' added={() => props.ingredientAdded('salad')} removed={() => props.ingredientRemoved('salad')}/>
        <BuildControl key='Bacon' label='Bacon' added={() => props.ingredientAdded('bacon')} removed={() => props.ingredientRemoved('bacon')}/>
        <BuildControl key='Cheese' label='Cheese' added={() => props.ingredientAdded('cheese')} removed={() => props.ingredientRemoved('cheese')}/>
        <BuildControl key='Meat' label='Meat' added={() => props.ingredientAdded('meat')} removed={() => props.ingredientRemoved('meat')}/>
    </ControlPanel>
)

export default buildControls;