import React from 'react';
import classNames from 'classnames'

const PropTypes = React.PropTypes;

const Component = React.createClass({

  propTypes: {
    text: PropTypes.string
  },

  show: function () {
    console.log('show')
  },

  componentWillMount(){
    console.log('componentWillMount')
  },
  componentDidMount(){
    console.log('componentDidMount');
    document.body.style.color = 'red';
  },
  componentWillUnmount(){
    console.log('componentWillUnmount')
    document.body.style.color = 'blue';
  },

  shouldComponentUpdate(nextProps){
    console.log('shouldComponentUpdate', nextProps, this.props)
    return true;
  },
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  },
  componentWillUpdate(){
    console.log('componentWillUpdate')
  },
  componentDidUpdate(){
    console.log('componentDidUpdate')
  },

  getDefaultProps(){
    console.log('getDefaultProps');
    return {
      text: '123'
    }
  },

  getInitialState(){
    console.log('getInitialState');
    return {
      count: this.props.text.length
    }
  },

  render(){

    console.log('render');

    var props = this.props;
    var state = this.state;
    return <h1 className={classNames(props.className, 'component')}>Hello {props.text} ! {state.count}</h1>
  }

});

export default Component;