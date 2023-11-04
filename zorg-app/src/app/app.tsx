// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';

import { ApolloClient } from '@apollo/client';
import CareRequestDetails from './care-request-details';
import {
  CareRequest,
  CareType,
  Status, useOpenCareRequestsQuery
} from "@zorg-match/graphql-codegen-react";
import CareRequestList from "./care-request-list";
import StateContainer from "./state-container";

export function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });


  return (
    <ApolloProvider client={client}>
      {' '}
      <StateContainer/>
    </ApolloProvider>
  );
}

export default App;
