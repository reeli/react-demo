import React from 'react';
import _ from 'lodash';
import Component from './Component.jsx';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import classNames from 'classnames';

const PropTypes = React.PropTypes;

var ComponentParent = React.createClass({

  getInitialState(){
    return {
      text: '',
      showComponent: false,
      items: ['hello', 'world', 'click', 'me']
    }
  },

  _onChange(evt){
    evt.preventDefault();
    this.setState({
      text: evt.target.value
    })
  },

  _onButtonClick(evt){
    evt.preventDefault();

    this.refs.component && this.refs.component.show();

    this.setState({
      showComponent: !this.state.showComponent
    })
  },

  render(){

    console.log('ComponentParent render');

    return (
      <div className={classNames(this.props.className, 'component',{
        'component--active': this.state.showComponent
      })}>
        <input type="text" value={this.state.text} onChange={this._onChange}/>
        {this.state.showComponent
          ? <Component ref='component' className='comp' text={this.state.text}/>
          : null}
        <p>
          <button onClick={this.handleAdd}>Add Item</button>
          <div>
            <ReactCSSTransitionGroup transitionName="example">
              {this.renderItems()}
            </ReactCSSTransitionGroup>
          </div>
          <button onClick={this._onButtonClick}> toggle component</button>
        </p>
      </div>
    )
  },

  handleAdd: function () {
    var newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },

  handleRemove: function (i, evt) {
    console.log(i);
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({
      items: newItems
    });
  },

  renderItems(){
    return this.state.items.map((item, i)=> {
      return (
        <div key={i} onClick={this.handleRemove.bind(this, i)}>
          <span>{item}</span>
        </div>
      );
    });
  }

});


React.render(<ComponentParent/>, document.body);
