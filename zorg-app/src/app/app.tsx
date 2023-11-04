// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { ApolloProvider, InMemoryCache } from "@apollo/react-hooks";

import Root from './root';
import { ApolloClient } from "@apollo/client";

export function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {' '}
      <Root title="zorg-app" />
    </ApolloProvider>
  );
}

export default App;
