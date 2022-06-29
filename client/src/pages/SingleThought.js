import React from 'react';
import { useParams } from 'react-router-dom';

const SingleThought = props => {
  // useParams gets the parameter from the url and documentation says that it returns a key-value pair. So...I guess it populates the value in the key-value pair with the parameter?
  const { id: thoughtId } = useParams();
  console.log(thoughtId);

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{' '}
          thought on createdAt
        </p>
        <div className="card-body">
          <p>Thought Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleThought;
