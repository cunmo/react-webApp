import React, { Component, Fragment  } from 'react'
import { Header } from './style.js'
export default class Demo extends Component {
    constructor() {
        super()
        this.state = {
            left:0
        }
        this.clickHand = this.clickHand.bind(this)
    }
    clickHand() {
        this.setState({
            left:'70px'
        })
    }
    render() {
        const {left} = this.state
        return (
            <Fragment>
                <Header left={left}>
                    <div onClick={this.clickHand}>
                        <div></div>
                    </div>
                </Header>
            </Fragment>
        )
    }
}
