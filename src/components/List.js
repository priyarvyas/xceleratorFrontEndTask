import React, { Component } from 'react';
import Card from './Card/Card.js';
import { getBlogPostList } from '../services/blogService.js';
import { connect } from 'react-redux';



class List extends Component {

  componentWillMount() {
    getBlogPostList();
  }

  render() {
    return (
      <div className='card-list-container'>
        {this.props.posts && this.props.posts.map((post) => {
          return (
            <Card key={post.id} item={post} expnad={false} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

export const ListConatiner = connect(mapStateToProps)(List);
