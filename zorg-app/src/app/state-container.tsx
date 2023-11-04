import {
  useOpenCareRequestsQuery,
} from '@zorg-match/graphql-codegen-react';
import CareRequestList from './care-request-list';
import { Loader } from './loader';
import DefaultError from './default-error';

const StateContainer = () => {
  const { data, loading, error } = useOpenCareRequestsQuery();

  if (loading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <DefaultError></DefaultError>;
  }

  if (data?.careRequests?.length) {
    return (
      <CareRequestList careRequests={data?.careRequests}></CareRequestList>
    );
  }

  return <div>No requests</div>;
};

export default StateContainer;
