import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use useQuery hook to make query request
  // Basically: `data` is what is returned from the query, but `loading` is a placeholder of nothingness to be used before the data is returned; it's basically nothing, but tells whatever is waiting for the data that it should expect data soon
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // Whenever the home component in the app is loaded, the query above is executed and the data--as it comes in--is stored in the data property above, for use below

  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
