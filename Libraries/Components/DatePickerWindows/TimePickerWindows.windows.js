/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TimePickerWindows
 * @flow
 */
'use strict';

var PropTypes = require('prop-types');
var React = require('React');
var View = require('View');
var requireNativeComponent = require('requireNativeComponent');
var RCTTimePicker = requireNativeComponent('RCTTimePicker', TimePickerWindows);
var ViewPropTypes = require('ViewPropTypes');

var ReactNative = require("react-native");

class TimePickerWindows extends React.Component {
  props: {
    date: Date,
    onChange?: Function,
  };

  static proptypes = {
    ...ViewPropTypes,
    ...ReactNative.ViewPropTypes,
    /**
     * The currently selected date.
     */
    date: PropTypes.instanceOf(Date),

    /**
     * Date change handler.
     *
     * This is called when the user changes the date or time in the UI.
     * The first and only argument is a Date object representing the new
     * date and time.
     */
    onChange: PropTypes.func,
  };

  _onChange = (event) => this.props.onChange && this.props.onChange(new Date(event.nativeEvent.date));

  render() {
    return (
      <RCTTimePicker
        date={this.props.date}
        onChange={this._onChange}
      />
    );
  }
}

// var TimePickerWindows = React.createClass({
//   name: 'TimePickerWindows',
//   propTypes: {
//     ...View.PropTypes,
//     ...ReactNative.ViewPropTypes,
//     /**
//      * The currently selected date.
//      */
//     date: React.PropTypes.instanceOf(Date),
//
//     /**
//      * Date change handler.
//      *
//      * This is called when the user changes the date or time in the UI.
//      * The first and only argument is a Date object representing the new
//      * date and time.
//      */
//     onChange: React.PropTypes.func,
//   },
//   getDefaultProps: function(){
//     return {
//       date: new Date(),
//     }
//   },
//   _onChange: function(event) {
//     this.props.onChange && this.props.onChange(new Date(event.nativeEvent.date));
//   },
//   render: function(){
//     return <RCTTimePicker date={this.props.date} onChange={this._onChange} />
//   },
// })

module.exports = TimePickerWindows;
