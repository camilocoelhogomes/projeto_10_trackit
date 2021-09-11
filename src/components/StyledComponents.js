import styled from 'styled-components';

const Button = styled.button`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    font-family: var(--font-body);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ fontSize }) => fontSize ? fontSize : '21px'};;
`;

const Input = styled.input`
    height: 45px;
    margin: 6px 0;
    width: ${({ width }) => width};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    padding: 10px;
    
    ::placeholder{
        color: #DBDBDB;
    }

`;

export { Button, Input };