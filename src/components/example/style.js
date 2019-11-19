import Styled from 'styled-components';


const Header = Styled.nav`
    width:100%;
    height:54px;
    background:#ee6200;
    display:flex;
    justify-content: center;
    align-items:center;
    
    div:nth-child(1){
        position:relative;
        width:140px;
        height:36px;
        background:#fff;
        border-radius:30px;
        div:nth-child(1){
            z-index:1000;
            width:70px;
            height:36px;
            border-radius:30px;
            background:#000;
            position:absolute;
            left:${ props => props.left};
            top:0;
            animation: all 5s ease;
        }
    }
`





export {
    Header
}
