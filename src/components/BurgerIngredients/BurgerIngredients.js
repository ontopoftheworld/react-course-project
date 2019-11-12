import React, { Component } from 'react';
import styled from 'styled-components';

const BreadBottom = styled.div`
    height: 13%;
    width: 80%;
    background: linear-gradient(#F08E4A, #e27b36);
    border-radius: 0 0 30px 30px;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
}`;

const BreadTop = styled.div`
    height: 20%;
    width: 80%;
    background: linear-gradient(#bc581e, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
    position: relative;
}`;

const Meat = styled.div`
    width: 80%;
    height: 8%;
    background: linear-gradient(#7f3608, #702e05);
    margin: 2% auto;
    border-radius: 15px;
}`;

const Cheese = styled.div`
    width: 90%;
    height: 4.5%;
    margin: 2% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
}`;

const Salad = styled.div`
    width: 85%;
    height: 7%;
    margin: 2% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
}`;

const Bacon = styled.div`
    width: 80%;
    height: 3%;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 2% auto;
}`;

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;
            switch(this.props.type) {
                case ('bread-bottom'):
                    ingredient = <BreadBottom></BreadBottom>
                    break;
                case ('bread-top'):
                    ingredient = <BreadTop></BreadTop>
                    break;
                case ('meat'):
                    ingredient = <Meat></Meat>
                    break;    
                case ('cheese'):
                    ingredient = <Cheese></Cheese>
                    break;
                case ('bacon'):
                    ingredient = <Bacon></Bacon>
                    break;
                case ('salad'):
                    ingredient = <Salad></Salad>
                    break;
                default:
                    ingredient = null;
                }
        return ingredient;
    }
}

export default BurgerIngredient;