import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'

export class Nav extends Component {
  render() {
    return (
      <Menu tabular inverted >
        <Menu.Header as='h1' style={{color: 'white'}}>Access-able</Menu.Header>
      </Menu>
    )
  }
}

export default Nav
