import styled from 'styled-components';

export const InputPassword = styled.div<{theme:boolean}>`
text-align: center;
align-items: center;
border: 1px solid ${({theme})=> theme===true? 'red':'blue'};
border-radius: ${({theme})=> theme===true? '10px':'3px'};
width: 100%;
display: flex;
justify-content: space-between;
box-sizing:border-box;
width:100%;
height:40px;
padding:1px;
`