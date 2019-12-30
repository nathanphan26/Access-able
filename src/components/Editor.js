import React, { Component } from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow";

export class Editor extends Component {
  render() {
    return (
      <AceEditor 
        height='100%' 
        width='100%' 
        mode='html' 
        placeholder='Fill in inputs on the left to generate html'
        theme="tomorrow"
        value={this.props.code}
      />
    );
  }
}

export default Editor
