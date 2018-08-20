import React from 'react'

const QnA = ({Q, A}) => (
  <div className="col-sm-8 pt-4 my-auto">
    <h4><strong><i>Q: {Q}</i></strong></h4>
    <div>
      <p>
        {A}
      </p>
    </div>
  </div>
);

export default QnA;
