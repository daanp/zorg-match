import { useOpenCareRequestsQuery } from '@zorg-match/graphql-codegen-react';
import RequestList from './components/care-request/request-list';
import { Loader } from './components/util/loader';
import DefaultError from './components/util/default-error';

const StateContainer = () => {
  const { data, loading, error, refetch } = useOpenCareRequestsQuery();

  if (loading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <DefaultError></DefaultError>;
  }

  if (data?.careRequests) {
    return (
      <div>
        <RequestList
          careRequests={data.careRequests}
          refetch={refetch}
        ></RequestList>
      </div>
    );
  }

  return <DefaultError></DefaultError>;
};

export default StateContainer;
