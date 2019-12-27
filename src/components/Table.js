import React, { Component } from 'react';

export class Table extends Component {

  createTable = () => {
    let table = [];
    for (let i = 0; i < this.props.rows; i++) {
      let children = []
      for (let j = 0; j < this.props.columns; j++) {
        if (i === this.props.headerRow) {
          children.push(<th scope="col" style={{border: '1px solid black'}}>{`Column ${j + 1}`}</th>);
        } else if (j === this.props.headerColumn) {
          children.push(<th scope="row" style={{border: '1px solid black'}}>{`Column ${j + 1}`}</th>);
        } else {
          children.push(<td style={{border: '1px solid black'}}>{`Column ${j + 1}`}</td>);
        }
      }
      table.push(<tr style={{border: '1px solid black'}}>{children}</tr>)
    }
    return table
  }

  render() {
    return (
      <table style={{border: '1px solid black'}}>
        {this.createTable()}
      </table>
    )
  }
}

export default Table
