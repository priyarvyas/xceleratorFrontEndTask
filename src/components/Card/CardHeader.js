

import React from 'react';



export default function CardHeader(props) {
  const { image } = props;
  return (
    <div className="col-md-4">
      <img src={image} className="card-img" alt="..." />
    </div>
  )
}