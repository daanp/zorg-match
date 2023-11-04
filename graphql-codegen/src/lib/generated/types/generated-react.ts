import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type AcceptCareRequestInput = {
  carerName: Scalars['String']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['ID']['input'];
};

export type CareRequest = {
  __typename?: 'CareRequest';
  clientName: Scalars['String']['output'];
  end: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
  start: Scalars['DateTime']['output'];
  status: Status;
  type: CareType;
};

export type CareRequestFilter = {
  status?: InputMaybe<Status>;
};

export type CareRequestInput = {
  clientName: Scalars['String']['input'];
  end: Scalars['DateTime']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
  start: Scalars['DateTime']['input'];
  type: CareType;
};

export enum CareType {
  Household = 'HOUSEHOLD',
  Medical = 'MEDICAL',
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptCareRequest?: Maybe<CareRequest>;
  addCareRequest?: Maybe<CareRequest>;
};

export type MutationAcceptCareRequestArgs = {
  input?: InputMaybe<AcceptCareRequestInput>;
};

export type MutationAddCareRequestArgs = {
  input?: InputMaybe<CareRequestInput>;
};

export type Query = {
  __typename?: 'Query';
  careRequests?: Maybe<Array<Maybe<CareRequest>>>;
};

export type QueryCareRequestsArgs = {
  where?: InputMaybe<CareRequestFilter>;
};

export enum Status {
  Closed = 'CLOSED',
  Open = 'OPEN',
}

export type AddCareRequestMutationVariables = Exact<{
  addRequestInput: CareRequestInput;
}>;

export type AddCareRequestMutation = {
  __typename?: 'Mutation';
  addCareRequest?: {
    __typename?: 'CareRequest';
    id: string;
    clientName: string;
    start: any;
    end: any;
    type: CareType;
    status: Status;
  } | null;
};

export type AcceptCareRequestMutationVariables = Exact<{
  acceptRequestInput: AcceptCareRequestInput;
}>;

export type AcceptCareRequestMutation = {
  __typename?: 'Mutation';
  acceptCareRequest?: {
    __typename?: 'CareRequest';
    id: string;
    clientName: string;
    start: any;
    end: any;
    type: CareType;
    status: Status;
  } | null;
};

export type CareRequestItemFragment = {
  __typename?: 'CareRequest';
  id: string;
  clientName: string;
  start: any;
  end: any;
  type: CareType;
  status: Status;
};

export type OpenCareRequestsQueryVariables = Exact<{ [key: string]: never }>;

export type OpenCareRequestsQuery = {
  __typename?: 'Query';
  careRequests?: Array<{
    __typename?: 'CareRequest';
    id: string;
    clientName: string;
    start: any;
    end: any;
    type: CareType;
    status: Status;
  } | null> | null;
};

export const CareRequestItemFragmentDoc = gql`
  fragment CareRequestItem on CareRequest {
    id
    clientName
    start
    end
    type
    status
  }
`;
export const AddCareRequestDocument = gql`
  mutation AddCareRequest($addRequestInput: CareRequestInput!) {
    addCareRequest(input: $addRequestInput) {
      ...CareRequestItem
    }
  }
  ${CareRequestItemFragmentDoc}
`;
export type AddCareRequestMutationFn = Apollo.MutationFunction<
  AddCareRequestMutation,
  AddCareRequestMutationVariables
>;

/**
 * __useAddCareRequestMutation__
 *
 * To run a mutation, you first call `useAddCareRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCareRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCareRequestMutation, { data, loading, error }] = useAddCareRequestMutation({
 *   variables: {
 *      addRequestInput: // value for 'addRequestInput'
 *   },
 * });
 */
export function useAddCareRequestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddCareRequestMutation,
    AddCareRequestMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddCareRequestMutation,
    AddCareRequestMutationVariables
  >(AddCareRequestDocument, options);
}
export type AddCareRequestMutationHookResult = ReturnType<
  typeof useAddCareRequestMutation
>;
export type AddCareRequestMutationResult =
  Apollo.MutationResult<AddCareRequestMutation>;
export type AddCareRequestMutationOptions = Apollo.BaseMutationOptions<
  AddCareRequestMutation,
  AddCareRequestMutationVariables
>;
export const AcceptCareRequestDocument = gql`
  mutation AcceptCareRequest($acceptRequestInput: AcceptCareRequestInput!) {
    acceptCareRequest(input: $acceptRequestInput) {
      ...CareRequestItem
    }
  }
  ${CareRequestItemFragmentDoc}
`;
export type AcceptCareRequestMutationFn = Apollo.MutationFunction<
  AcceptCareRequestMutation,
  AcceptCareRequestMutationVariables
>;

/**
 * __useAcceptCareRequestMutation__
 *
 * To run a mutation, you first call `useAcceptCareRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptCareRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptCareRequestMutation, { data, loading, error }] = useAcceptCareRequestMutation({
 *   variables: {
 *      acceptRequestInput: // value for 'acceptRequestInput'
 *   },
 * });
 */
export function useAcceptCareRequestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AcceptCareRequestMutation,
    AcceptCareRequestMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AcceptCareRequestMutation,
    AcceptCareRequestMutationVariables
  >(AcceptCareRequestDocument, options);
}
export type AcceptCareRequestMutationHookResult = ReturnType<
  typeof useAcceptCareRequestMutation
>;
export type AcceptCareRequestMutationResult =
  Apollo.MutationResult<AcceptCareRequestMutation>;
export type AcceptCareRequestMutationOptions = Apollo.BaseMutationOptions<
  AcceptCareRequestMutation,
  AcceptCareRequestMutationVariables
>;
export const OpenCareRequestsDocument = gql`
  query OpenCareRequests {
    careRequests(where: { status: OPEN }) {
      ...CareRequestItem
    }
  }
  ${CareRequestItemFragmentDoc}
`;

/**
 * __useOpenCareRequestsQuery__
 *
 * To run a query within a React component, call `useOpenCareRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOpenCareRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOpenCareRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOpenCareRequestsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    OpenCareRequestsQuery,
    OpenCareRequestsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OpenCareRequestsQuery, OpenCareRequestsQueryVariables>(
    OpenCareRequestsDocument,
    options
  );
}
export function useOpenCareRequestsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OpenCareRequestsQuery,
    OpenCareRequestsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    OpenCareRequestsQuery,
    OpenCareRequestsQueryVariables
  >(OpenCareRequestsDocument, options);
}
export function useOpenCareRequestsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    OpenCareRequestsQuery,
    OpenCareRequestsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    OpenCareRequestsQuery,
    OpenCareRequestsQueryVariables
  >(OpenCareRequestsDocument, options);
}
export type OpenCareRequestsQueryHookResult = ReturnType<
  typeof useOpenCareRequestsQuery
>;
export type OpenCareRequestsLazyQueryHookResult = ReturnType<
  typeof useOpenCareRequestsLazyQuery
>;
export type OpenCareRequestsSuspenseQueryHookResult = ReturnType<
  typeof useOpenCareRequestsSuspenseQuery
>;
export type OpenCareRequestsQueryResult = Apollo.QueryResult<
  OpenCareRequestsQuery,
  OpenCareRequestsQueryVariables
>;
