import React from 'react';
import styled from 'styled-components';

const BuildControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    color: black;
}`;   

const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
}`;

const AddB = styled.button`
    background-color: #8F5E1E;
    color: white;
}`;  

const SubB = styled.button`
    background-color: #D39952;
    color: white;
}`;   

const buildControl=  (props) => (
    <BuildControl>
        <Label>{props.label}</Label>
        <AddB onClick={props.added}>+</AddB>
        <SubB onClick={props.removed}>-</SubB>
    </BuildControl>
)

export default buildControl;