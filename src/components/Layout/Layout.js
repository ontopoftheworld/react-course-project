import React from 'react';

import Aux from '../../hoc/Aux';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding-top: 10px;   
    padding-bottom: 20px;
    text-align: center;
    font-weight: bold;
}`;   

const StyledMain = styled.main`
}`;   

const layout = (props) => (
    <Aux>
        <StyledDiv>
            Neil's Burger Maker: Create your Custom Burger!
        </StyledDiv>
        <StyledMain>
            {props.children}
        </StyledMain>
    </Aux>
);

export default layout;