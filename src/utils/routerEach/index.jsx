import React from 'react'
import {Route} from 'react-router-dom'


export const routerEach= (routerlist)=>routerlist.map((item,index)=>{
    let fn=(children)=>{
        if(children.children){
            fn(children.children)
        }else{
            return children.map((item,idx)=>{
                return <Route path={item.path} key={idx} render={(props)=>(
                    <item.component />
                )}/>
            })
        }
    }
     if(item.children){
          fn(item.children)
     }else{
        return <Route path={item.path} key={index} render={(props)=>(
            <item.component/>
        )}/>
     }
})
   

    

