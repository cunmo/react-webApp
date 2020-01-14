import Styled from 'styled-components'
// 定义参数
const borderstyle = 'dotted'

const Header = Styled.div`
    width: 100px;
    height: 200px;
    background: skyblue;
    /* 传参数 */
    border: 5px ${borderstyle === 'dotted' ? borderstyle : 'solid'}   ${props => props.border};
    div:nth-child(1) {
        width:100px;
        height:100px;
        background:red;
    }
    div:nth-child(2) {
        width:40px;
        height:40px;
        background:papayawhip;
    }
`


// 自定义类名
const Attr =Styled.div.attrs({
    title:'nihao'
 })
 `
    color:red;
    span{
        color:blue;
    }
`
// 继承
const Navlist = Styled(Header)`
     div{
         color:#0f0;
     }
    .jichen{
        weight:20px;
        height:40px;
        background:#0f0;
    }

`
export {
    Header,
    Navlist,
    Attr
}