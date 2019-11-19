import React, { Component,Fragment } from 'react'
import { Header, Navlist, Attr} from './style'
export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            bordercolor: 'red',
            number:0
        }
        this.clickHand = this.clickHand.bind(this)
    };
    clickHand() {
        this.setState({
            number : this.state.number+1
        },()=>{
            switch(this.state.number) {
                case 1:
                    this.setState({
                        bordercolor:'blue'
                    })
                break;
                case 2:
                    this.setState({
                        bordercolor:'skyblue'
                    })
                break;
                case 3: 
                    this.setState({
                        bordercolor:'yellow'
                    })
                break;
                default:
                    this.setState({
                        bordercolor:'pink'
                    })
            }
        });
    };
    render() {
        const { bordercolor } = this.state
        return (
            <Fragment>
                <Header border={ bordercolor }>
                    <div onClick={this.clickHand}>点击改变边框</div>
                    <div></div>
                </Header>
                <Navlist>
                    <div>123</div>
                    <div></div>
                    <div className='jichen'></div>
                </Navlist>
                <Attr></Attr>
            </Fragment>
        )
    }
    
}
