import React from 'react';
import styled from 'styled-components';
import data from '../../data/main';
import MenuCard from '../MenuCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function Main() {
    return (<Container>
    {
        data.options.map(option => {
            return <MenuCard key={option.title} {...option} />;
        })
    }
    </Container>);
    
}

export default Main;