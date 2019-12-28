import React, { Component } from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-kuroir";

export class Editor extends Component {

  state = {
    code: ``
  }

  onChange = (newValue) => {
    console.log("change", newValue);
  }

  createHTML = () => {
    if (this.props.columns !== undefined && this.props.rows !== undefined) {
      let html = ``;
      if (this.props.rows !== 0 && this.props.columns !== 0) html += (`<table>`);
      for (let i = 0; i < this.props.rows; i++) {
        html += `
  <tr>`;
        for (let j = 0; j < this.props.columns; j++) {
          if (i === this.props.headerRow) {
            html += `
    <th scope="col">Column</th>`;
          } else if (j === this.props.headerColumn) {
            html += `
    <th scope="row">Column</th>`;
          } else {
            html += `
    <td>Column</td>`;
          }
        }
        html += `
  </tr>`;
      }
      if (this.props.rows !== 0 && this.props.columns !== 0) html += (`
</table>`);
      this.setState({
        code: html
      });
    }
  }

  render() {
    return (
      <React.Fragment>
      <AceEditor 
        height='100%' 
        width='100%' 
        mode='html' 
        placeholder='Fill in inputs on the left to generate html'
        theme="kuroir"
        value={this.state.code}
      />
      <input type='button' onClick={this.createHTML} value='click me' />
      </React.Fragment>
    );
  }
}

export default Editor
