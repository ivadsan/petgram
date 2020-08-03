import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`{
    ${fadeIn()};
    max-width:400px;
    background: #FFF;
    position: fixed;
    left:0;
    right:0;
    margin:0 auto;
    border-radius:60px;
    box-shadow: 0 0 20px rgba(0,0,0,.3);
    z-index: 1;
    padding: 5px;
    top: -20px;
    transform: scale(.5);
  }`}
`
export const Item = styled.li`
  padding: 0 8px;
`
