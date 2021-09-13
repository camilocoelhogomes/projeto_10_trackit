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
    font-size: ${({ fontSize }) => fontSize ? fontSize : '21px'};
    
    :disabled {
        background-color: #86CCFD;
    }
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

    :disabled {
        background-color: #F2F2F2;
        color: #AFAFAF;
    }

`;

const Day = styled.button`
    background: ${({ name, selectedDays }) => selectedDays.includes(name) ? '#DBDBDB' : '#FFFFFF'};
    color: ${({ name, selectedDays }) => selectedDays.includes(name) ? '#FFFFFF' : '#DBDBDB'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca', sans-serif;
    margin: 0 4px 0 0;
    font-size: 20px;
    padding: 0;

    :disabled{

    }
`


export { Button, Input, Day };