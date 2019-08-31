import React, { Component,Fragment } from 'react'
import Tabber from '../conponents/tabber'
import Baseroute from '../common/baseRote'

class Layout extends Component {
     render() {
        let {meta} =this.props
        return (
            <Fragment>
                <Baseroute {...this.props}/>
                 {meta.tabberFlag ? <Tabber /> :''}
            </Fragment>
        )
    }
}
export default Layout