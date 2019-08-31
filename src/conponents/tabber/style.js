import  Styled from 'styled-components'
const Ul =Styled.ul`
    position:fixed;
    bottom:0;
    width:100%;
    height:.66rem;
    display:flex;
    z-index:1000;
    left:0;
    li{
        width:25%;
        height:100%;
        img{
            width:.4rem;
            height:.4rem;
        }
        a{
            display:flex;
            flex-direction:column;
            justify-content: space-bettwen;
            align-items: center;
            color:#000;
            width:100%;
            height:100%;
        } 
    }
`
export {
    Ul
}