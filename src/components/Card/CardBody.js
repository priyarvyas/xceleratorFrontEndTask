import React, { Component } from 'react';
import Button from '../Button';

export default class CardBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: props.item.liked,
      bookmarked: props.item.bookmarked
    }
  }

  render() {
    const btnLinkeTitle = this.state.liked ? `Liked` : `Like`;
    return (
      <div className="col-md-8" >
        <Button title={``} faIcon={`fa-bookmark`}
          className={`btn btn-link btn-bookmark`}
          faSolid={this.state.bookmarked} />
        <div className="card-body">
          <p className="card-text"><small className="text-muted">{this.props.item.date}</small></p>
          <h5 onClick={this.props.onTitleClick} className="card-title">{this.props.item.title}</h5>
          <p className="card-text">{this.props.item.text}</p>
        </div>
        <div>
          <Button title={btnLinkeTitle}
            className={`btn btn-link`}
            faIcon={`fa-thumbs-up`}
            faSolid={this.state.liked} />
        </div>
      </div>
    )
  }
}