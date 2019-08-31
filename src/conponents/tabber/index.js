import React, { Component, Fragment } from 'react'
import { Havetabber } from '@router'
import {Ul} from './style'
import { NavLink } from 'react-router-dom'

class Tabber extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <Fragment>
        <Ul>
          {
            Havetabber.map((item,index) => (
              <li key={index} >
                <NavLink to={item.path}>
                <img src={require('../../assets/images/cookbook.png')} alt="" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))
          }
        </Ul>
      </Fragment>

    )
  }
}
export default Tabber   