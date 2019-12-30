import React, { Component } from 'react'
import Nav from './Nav';
import Editor from './Editor';

import { Container, Divider, Form, Grid, Segment } from 'semantic-ui-react'

export class Main extends Component {

  state = {
    rows: undefined,
    columns: undefined,
    headerRow: undefined,
    headerColumn: undefined,
    render: false,
    code: ''
  }

  onChange = (e) => {
    e.preventDefault();
    let rowsValue = document.querySelector('#rows').value;
    let columnsValue = document.querySelector('#columns').value;
    
    const rows = rowsValue !== '' ? rowsValue : undefined;
    const columns = columnsValue !== '' ? columnsValue : undefined;
    this.setState({
      rows: rows,
      columns: columns
    });
  }

  onChangeHeaderRow = (e, {value}) => {
    this.setState({
      headerRow: value
    });
  } 

  onChangeHeaderColumn = (e, {value}) => {
    this.setState({
      headerColumn: value
    });
  } 

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      render: true
    });
  }

  createHTML = () => {
    if (this.state.rows !== undefined && this.state.columns !== undefined) {
      let html = ``;
      if (this.state.rows !== 0 && this.state.columns !== 0) html += (`<table>`);
      for (let i = 0; i < this.state.rows; i++) {
        html += `
  <tr>`;
        for (let j = 0; j < this.state.columns; j++) {
          if (i === this.state.headerRow) {
            html += `
    <th scope="col">Column</th>`;
          } else if (j === this.state.headerColumn) {
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
      if (this.state.rows !== 0 && this.state.columns !== 0) html += (`
</table>`);
      this.setState({
        code: html
      });
    }
  }

  render() {
    let rowOptions = [];
    for (let i = 0; i < this.state.rows; i++) {
      rowOptions.push({
        key: i+1,
        text: i,
        value: i
      });
    }
    let columnOptions = [];
    for (let i = 0; i < this.state.columns; i++) {
      columnOptions.push({
        key: i+1,
        text: i,
        value: i
      });
    }
    return (
      <div>
        <Nav />
        <Container className='mainContainer'>
          <Segment className='mainContainer'>
            <Grid columns={2} relaxed='very' style={{height: '100%'}}>
              <Grid.Column>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input 
                      id='rows'
                      fluid 
                      type='number' 
                      label='# of Rows'
                      onChange={this.onChange} 
                    />
                    <Form.Dropdown 
                      id='headerRow'
                      fluid 
                      search 
                      selection 
                      label='Header Row' 
                      options={rowOptions}
                      disabled={this.state.rows === undefined} 
                      onChange={this.onChangeHeaderRow} 
                    />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input 
                      id='columns'
                      fluid 
                      type='number' 
                      label='# of Columns'
                      onChange={this.onChange} 
                    />
                    <Form.Dropdown 
                      id='headerColumn'
                      fluid 
                      search 
                      selection 
                      label='Header Column' 
                      options={columnOptions}
                      disabled={this.state.columns === undefined} 
                      onChange={this.onChangeHeaderColumn} 
                    />
                  </Form.Group>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Editor 
                  rows={this.state.rows} 
                  columns={this.state.columns} 
                  headerRow={this.state.headerRow} 
                  headerColumn={this.state.headerColumn}
                  render={this.state.render}
                  code={this.state.code}
                />
              </Grid.Column>
            </Grid>

            <Divider vertical>
              <div onClick={this.createHTML}>
                &#10148;
              </div>
            </Divider>

          </Segment>
        </Container>
        
      </div>
    )
  }
}

export default Main
