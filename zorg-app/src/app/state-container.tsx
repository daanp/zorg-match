import {
  useOpenCareRequestsQuery,
} from '@zorg-match/graphql-codegen-react';
import CareRequestList from './components/care-request/care-request-list';
import { Loader } from './components/util/loader';
import DefaultError from './components/util/default-error';
import Calendar from "./components/calendar/calendar";

const StateContainer = () => {
  const { data, loading, error, refetch } = useOpenCareRequestsQuery();

  if (loading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <DefaultError></DefaultError>;
  }

  if (data?.careRequests?.length) {
    return (
      <div>
        <Calendar careRequests={data?.careRequests}></Calendar>
      <CareRequestList careRequests={data?.careRequests} refetch={refetch}></CareRequestList>
      </div>
    );
  }

  return <div>No requests</div>;
};

export default StateContainer;
