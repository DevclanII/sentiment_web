import React from 'react'

const QnA = ({Q, A}) => (
  <div className="my-auto">
    <h4><strong><i>Q: {Q}</i></strong></h4>
    <div>
      <p>
        {A}
      </p>
    </div>
  </div>
);

export default QnA;
