import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';
import ReactionList from '../components/ReactionList';

const SingleThought = props => {
  // useParams gets the parameter from the url and documentation says that it returns a key-value pair. So...I guess it populates the value in the key-value pair with the parameter?
  const { id: thoughtId } = useParams();
  console.log(thoughtId);

  const {loading, data} = useQuery(QUERY_THOUGHT, {
    // id = $id in the query
    // essentially, we need to query the db to get a thought by its id
    // IF SingleThought was a component of or otherwise a child of the home page or ThoughtList (like ThoughtList is a child of the home page), we could pass the thought data down from the home page to ThoughtList to SingleThought; but SingleThought is *not* a child, so the thought data--and, specifically, the _id of the thought to be shown--needs to get to SingleThought some other way so that it has the id variable to query a single thought
    // Instead, we got the id from the param in the link path and set that as the variable used for the parameter to query for the single thought
    variables: { id: thoughtId }
  });

  const thought = data?.thought || [];

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>{' '}
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}
    </div>
  );
};

export default SingleThought;
