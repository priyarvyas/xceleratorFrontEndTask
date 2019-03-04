import React, { Component } from 'react';
import Button from '../Button';
import { connect } from 'react-redux';
import { updatePostData } from '../../services/blogService';

class CardBodyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: props.item.liked,
      bookmarked: props.item.bookmarked
    }
  }

  updatePost(dataToUpdate) {
    this.setState(dataToUpdate);
  }

  componentDidUpdate(prevProps, PrevState) {
    if (this.state !== PrevState) {
      this.props.item.liked = this.state.liked;
      this.props.item.bookmarked = this.state.bookmarked;
      updatePostData(this.props.item);
    }
  }

  render() {
    const btnLinkeTitle = this.state.liked ? `Liked` : `Like`;
    return (
      <div className="col-md-8" >
        <Button title={``} faIcon={`fa-bookmark`}
          className={`btn btn-link btn-bookmark`}
          onClick={() => this.updatePost({
            bookmarked: !this.state.bookmarked
          })}
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
            onClick={() => this.updatePost({
              liked: !this.state.liked
            })}
            faSolid={this.state.liked} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const index = state.posts.findIndex((x) => x.id === props.item.id)
  const post = state.posts[index];
  post.liked = props.item.liked
  post.bookmarked = props.item.bookmarked;

  return {
    item: post
  }
}

export const CardBody = connect(mapStateToProps)(CardBodyComponent);