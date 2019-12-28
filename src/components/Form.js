import React, { Component } from 'react'
import Table from './Table';
import RawHTML from './RawHTML';
import Nav from './Nav';
import Editor from './Editor';

import { Input, Dropdown, Button, Icon } from 'semantic-ui-react'
import { Container, Divider, Grid, Image, Segment } from 'semantic-ui-react'

export class Form extends Component {

  state = {
    rows: undefined,
    columns: undefined,
    headerRow: 2,
    headerColumn: 3
  }

  onChange = (e) => {
    e.preventDefault();
    const rows = document.querySelector('#rows').value !== '' ? document.querySelector('#rows').value : undefined;
    const columns = document.querySelector('#rows').value !== '' ? document.querySelector('#rows').value : undefined;
    console.log(`Rows: ${this.state.rows} Columns: ${this.state.columns}`);
    this.setState({
      rows: rows,
      columns: columns
    });
    console.log(`Rows: ${this.state.rows} Columns: ${this.state.columns}`);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const rows = document.querySelector('#rows').value;
    const columns = document.querySelector('#columns').value
    console.log(`Rows: ${this.state.rows} Columns: ${this.state.columns}`);
    this.setState({
      rows: rows,
      columns: columns
    });
    console.log(`Rows: ${this.state.rows} Columns: ${this.state.columns}`);
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
                <Input type='number' placeholder='# Rows' ref='rows' id='rows' onChange={this.onChange}/>
                <br />
                <br />
                
                <Input type='number' placeholder='# Columns' ref='columns' id='columns' onChange={this.onChange}/>
                <br />
                <br />

                <Dropdown 
                  placeholder='Header Row' 
                  search 
                  selection 
                  options={rowOptions}
                  disabled={this.state.rows === undefined} 
                />
                <br />
                <br />

                <Dropdown 
                  placeholder='Header Column' 
                  search 
                  selection 
                  options={columnOptions}
                  disabled={this.state.columns === undefined} 
                />
                <br />
                <br />
              </Grid.Column>
              <Grid.Column>
                <Editor rows={4} columns={4} headerRow={2} headerColumn={1}/>
              </Grid.Column>
            </Grid>

            <Divider vertical>
              <div onClick={this.onSubmit}>
                &#10148;
              </div>
            </Divider>

          </Segment>
        </Container>
        
      </div>
    )
  }
}

export default Form
