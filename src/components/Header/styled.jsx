import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    min-height: 5rem;
    padding: 1.5% 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #171717;
    box-shadow: 0 .2rem 1rem #8b5dd4;
    color: #fff;
    margin-bottom: 1.5rem;

    a {
        text-decoration: none;
        color: #fff;
    }

    h2 {
        font-size: 1.5rem;
        transition: all 300ms ease-in-out;
    }

    h2:hover{
        color: #884EB0;
        cursor: pointer;
    }


    ul {
        display: flex;
        list-style: none;
    }

    ul li{
        font-size: 1.4rem;
        color: #fff;
        padding: 0 1rem;
        text-decoration: none;
        transition: all 300ms ease-in-out;
    }

    ul li:hover{
        color: #884EB0;
    }
`;

export default HeaderStyled;