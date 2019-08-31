import React, { Component} from 'react'
import {Redirect} from 'react-router-dom'
import {routerEach} from '@utils/routerEach'
import {routerConfig} from '@router'

const routerlist =routerEach(routerConfig)
console.log(routerEach(routerConfig))
class Baseroute extends Component {
     render() { 
        //jsx语法不能写if判断但是可以写函数表达式
        let {meta}=this.props
        if(meta.AuthorRouter){
            return <Redirect to='/login'/>
        }
         return  routerlist 
    }
}
export default Baseroute