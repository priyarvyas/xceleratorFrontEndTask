import React, { Component } from 'react';
import CardBody from './CardBody'
import CardHeader from './CardHeader'
import { withRouter } from 'react-router-dom'
import './Card.css';

class Card extends Component {

  goToDetail() {
    this.props.history.push(`/posts/${this.props.item.id}`)
  }
  render() {
    return (
      <div className="card mb-3 shadow">
        <div className="row no-gutters">
          <CardHeader category={this.props.item.category} image={this.props.item.image} />
          <CardBody item={this.props.item} onTitleClick={() => { this.goToDetail() }} />
        </div>
      </div>
    )
  }
}

export default withRouter(Card)