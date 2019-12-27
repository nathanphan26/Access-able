import React, { Component } from 'react'

export class RawHTML extends Component {
  // createHTML = () => {
  //   if (this.props.columns !== undefined && this.props.rows !== undefined) {
  //     let html = [];
  //     if (this.props.rows !== 0 && this.props.columns !== 0) html.push(`<table>`);
  //     html.push(<br/>);
  //     for (let i = 0; i < this.props.rows; i++) {
  //       html.push(<span>&nbsp;</span>);
  //       html.push(`<tr>`);
  //       html.push(<br/>);
  //       for (let j = 0; j < this.props.columns; j++) {
  //         html.push(<span>&nbsp;&nbsp;</span>);
  //         if (i === this.props.headerRow) {
  //           html.push(`<th scope="col">Column</th>`);
  //         } else if (j === this.props.headerColumn) {
  //           html.push(`<th scope="row">Column</th>`);
  //         } else {
  //           html.push(`<td>Column</td>`);
  //         }
  //         html.push(<br/>);
  //       }
  //       html.push(<span>&nbsp;</span>);
  //       html.push(`</tr>`)
  //       html.push(<br/>);
  //     }
  //     if (this.props.rows !== 0 && this.props.columns !== 0) html.push(`</table>`);
  //     return html;
  //   }
  // }

  createHTML = () => {
    if (this.props.columns !== undefined && this.props.rows !== undefined) {
    let html = [];
    html.push(`<table>`);
    for (let i = 0; i < this.props.rows; i++) {
      html.push(`
  <tr>`);
      for (let j = 0; j < this.props.columns; j++) {
        if (i === this.props.headerRow) {
          html.push(`
    <th scope="col">Row${i} Column${j}</th>`);
        } else if (j === this.props.headerColumn) {
          html.push(`
    <th scope="row">Row${i} Column${j}</th>`);
        } else {
          html.push(`
    <td>Row${i} Column${j}</td>`);
        }
      }
      html.push(`
  </tr>`)
    }
    html.push(`
</table>`);
    return html;
  }
}

  render() {
    if(this.props.rows !== undefined && this.props.columns !== undefined) {
    return (
      <pre className="language-javascript">
      <code className="language-javascript">
        {this.createHTML()}
      </code>
      </pre>
    )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default RawHTML
