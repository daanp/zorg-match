// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';

import { ApolloClient } from '@apollo/client';
import StateContainer from './state-container';

export function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {' '}
      <StateContainer />
    </ApolloProvider>
  );
}

export default App;
