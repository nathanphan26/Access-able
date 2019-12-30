import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'

export class Nav extends Component {
  render() {
    return (
      <Menu id='mainMenu' tabular inverted >
        <Menu.Header id='mainHeader' as='h1'>AccessibleTableGenerator</Menu.Header>
      </Menu>
    )
  }
}

export default Nav
