import React, { useState } from 'react';
import { CareRequest } from '@zorg-match/graphql-codegen-react';
import RequestDetails from './request-details';
import Modal from '../util/modal';
import RequestForm from './request-form';
import Calendar from './calendar';
import Table from './table';

const RequestList = ({
  careRequests,
  refetch,
}: {
  careRequests: CareRequest[];
  refetch: Function;
}) => {
  const [selectedCareRequest, setSelectedCareRequest] = useState<CareRequest>();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const select = (careRequest: CareRequest) => {
    setSelectedCareRequest(careRequest);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setSelectedCareRequest(undefined);
    setIsDetailsModalOpen(false);
    refetch();
  };

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <h2 className="text-2xl font-bold mb-4">Care Requests</h2>
        <div className="flex-grow"></div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsNewModalOpen(true)}
        >
          New care request
        </button>
      </div>
      <Calendar careRequests={careRequests} select={select}></Calendar>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <Table careRequests={careRequests} select={select}></Table>

      {isDetailsModalOpen && !!selectedCareRequest && (
        <Modal onClose={closeDetailsModal}>
          <RequestDetails
            careRequest={selectedCareRequest}
            onSubmit={() => {
              closeDetailsModal();
            }}
          />
        </Modal>
      )}

      {isNewModalOpen && (
        <Modal
          onClose={() => {
            setIsNewModalOpen(false);
          }}
        >
          <RequestForm
            onSubmit={() => {
              setIsNewModalOpen(false);
              refetch();
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default RequestList;
