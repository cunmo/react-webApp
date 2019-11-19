import React, { Component, Fragment  } from 'react'
import { Header } from './style.js'
export default class Demo extends Component {
    constructor() {
        super()
        this.state = {
            dir:'left'
        }
        this.clickHand = this.clickHand.bind(this)
    }
    clickHand(dir) {
       this.setState({
            dir
       })
    }
    render() {
        const { dir } = this.state
        return (
            <Fragment>
                <Header move={ dir }>
                    <nav>
                        <div onClick={()=> this.clickHand('left')}></div>
                        <div onClick={()=> this.clickHand('right')}></div>
                        <div></div>
                    </nav>
                </Header>
            </Fragment>
        )
    }
}
