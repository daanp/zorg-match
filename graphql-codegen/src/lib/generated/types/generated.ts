import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
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
  carerRemarks?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['ID']['input'];
};

export type CareRequest = {
  __typename?: 'CareRequest';
  carerRemarks?: Maybe<Scalars['String']['output']>;
  clientName: Scalars['String']['output'];
  clientRemarks?: Maybe<Scalars['String']['output']>;
  end: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  start: Scalars['DateTime']['output'];
  status: Status;
  type: CareType;
};

export type CareRequestFilter = {
  status?: InputMaybe<Status>;
};

export type CareRequestInput = {
  clientName: Scalars['String']['input'];
  clientRemarks?: InputMaybe<Scalars['String']['input']>;
  end: Scalars['DateTime']['input'];
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
    carerRemarks?: string | null;
    clientRemarks?: string | null;
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
    carerRemarks?: string | null;
    clientRemarks?: string | null;
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
  carerRemarks?: string | null;
  clientRemarks?: string | null;
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
    carerRemarks?: string | null;
    clientRemarks?: string | null;
  } | null> | null;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AcceptCareRequestInput: AcceptCareRequestInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CareRequest: ResolverTypeWrapper<CareRequest>;
  CareRequestFilter: CareRequestFilter;
  CareRequestInput: CareRequestInput;
  CareType: CareType;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AcceptCareRequestInput: AcceptCareRequestInput;
  Boolean: Scalars['Boolean']['output'];
  CareRequest: CareRequest;
  CareRequestFilter: CareRequestFilter;
  CareRequestInput: CareRequestInput;
  DateTime: Scalars['DateTime']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
};

export type CareRequestResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CareRequest'] = ResolversParentTypes['CareRequest']
> = {
  carerRemarks?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  clientName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clientRemarks?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  end?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CareType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  acceptCareRequest?: Resolver<
    Maybe<ResolversTypes['CareRequest']>,
    ParentType,
    ContextType,
    Partial<MutationAcceptCareRequestArgs>
  >;
  addCareRequest?: Resolver<
    Maybe<ResolversTypes['CareRequest']>,
    ParentType,
    ContextType,
    Partial<MutationAddCareRequestArgs>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  careRequests?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CareRequest']>>>,
    ParentType,
    ContextType,
    Partial<QueryCareRequestsArgs>
  >;
};

export type Resolvers<ContextType = any> = {
  CareRequest?: CareRequestResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
