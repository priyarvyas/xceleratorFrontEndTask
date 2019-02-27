import React, {Component} from 'react';
import Card from "../components/Card/Card";
import {data} from '../dummy'
import {find} from 'lodash'


class DetailRoute extends Component {

  getDetail() {
    return find(data, {id: this.props.match.params.id})
  }

  render() {
    return (
      <Card item={this.getDetail()}/>
    )
  }
}


export default DetailRoute
