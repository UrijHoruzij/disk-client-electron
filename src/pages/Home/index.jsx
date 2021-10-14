import React from 'react'
import styled from "styled-components"
import { Sidebar, Content } from "../../modules"

const ContainerBg = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContainerGrid = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 320px 1fr;
    width: 100%;
    height: 100%;
    grid-template-areas:
        "sidebar content"; 
    background: ${props => props.theme.colors.colorBg};
    @media screen and (max-width: 751px){
        grid-template-columns: 1fr;
        grid-template-areas: 
        "sidebar"
        "content";
    }
`

const Home = () => {
    return (
        <ContainerBg>
            <ContainerGrid>
                <Content/>
                <Sidebar/>
            </ContainerGrid>
        </ContainerBg>
    )
}

export default Home