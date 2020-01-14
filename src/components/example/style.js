import Styled from 'styled-components';


const Header = Styled.header`
    width: 100%;
    height: 54px;
    background: #ee6200;
    display: flex;
    justify-content: center;
    align-items: center;
    nav:nth-child(1){
        position: relative;
        width: 140px;
        height: 36px;
        background: #fff;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        background: #ee6200;
        align-items: center;
        border:1px solid #fff;
        div:nth-child(1){
            width: 50%;
            height: 100%;
            background: #ee6200;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items:center;
            background:#ee6200;
        }
        div:nth-child(2){
            width: 50%;
            height: 100%;
            background: #ee6200;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ee6200;
        }
        div:nth-child(3){
            z-index: 1000;
            width: 70px;
            height: 36px; 
            border-radius: 30px;
            background: #fff;
            position:absolute;
            left:${ proprs => proprs.move === 'left' ? 0 : '50%'};
            top:0;
            transition: all 300ms ease-in;
            
        }
    }
`





export {
    Header
}
