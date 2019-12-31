import React, { Component } from 'react'
import Nav from './Nav';
import Editor from './Editor';
import * as MainHelper from '../helpers/Main-helper';

import { Container, Divider, Form, Grid, Segment, Button, Icon, Dropdown, Label } from 'semantic-ui-react'

export class Main extends Component {

  state = {
    rows: undefined,
    columns: undefined,
    headerRow: undefined,
    headerColumn: undefined,
    render: false,
    code: ``
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
      let code = MainHelper.createHTML(
        this.state.rows, 
        this.state.columns, 
        this.state.headerRow, 
        this.state.headerColumn
      );
      this.setState({
        code: code
      });
    }
  }

  componentDidMount() {
    const headerRow = document.querySelector('#headerRow');
    const headerColumn = document.querySelector('#headerColumn');
    headerRow.removeAttribute('role');
    headerColumn.removeAttribute('role');
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
        <Container className='heightFix' id='mainContainer'>          
          <Grid columns='equal'>
            <Grid.Column>
              <Segment className='heightFix' id='mainSegment'>
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
                      selection 
                      labeled={true}
                      label='Header Row' 
                      aria-label='Header Row'
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
                      selection 
                      label='Header Column'
                      aria-label='Header Column'
                      options={columnOptions}
                      disabled={this.state.columns === undefined} 
                      onChange={this.onChangeHeaderColumn} 
                    />
                  </Form.Group>
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column width={2} id='wrapper'>
              {/* <Segment id='secondarySegment' textAlign='center'> */}
              <Button id='mainButton' icon onClick={this.createHTML}>
                <Icon name='angle double right' aria-label='Generate HTML'/>
              </Button>
              {/* </Segment> */}
            </Grid.Column>
            <Grid.Column>
              <Segment className='heightFix' id='tertiarySegment'>
                <Editor 
                  rows={this.state.rows} 
                  columns={this.state.columns} 
                  headerRow={this.state.headerRow} 
                  headerColumn={this.state.headerColumn}
                  render={this.state.render}
                  code={this.state.code}
                />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Main
