import React, { useState } from 'react';
import { CareRequest } from '@zorg-match/graphql-codegen-react';
import CareRequestDetails from './care-request-details';
import Modal from '../util/modal';
import CareRequestForm from './care-request-form';

const CareRequestList = ({
  careRequests,
  refetch,
}: {
  careRequests: CareRequest[];
  refetch: Function;
}) => {
  const [selectedRow, setSelectedRow] = useState<number>(-1);
  const [selectedCareRequest, setSelectedCareRequest] =
    useState<CareRequest | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const handleRowClick = (index: number, careRequest: CareRequest) => {
    setSelectedRow(index);
    setSelectedCareRequest(careRequest);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setSelectedCareRequest(null);
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
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Type</th>
            <th className="text-left">Start Date</th>
            <th className="text-left">End Date</th>
            <th className="text-left">Client Name</th>
            <th className="text-left">Remarks</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {careRequests.map((careRequest: CareRequest, index) => (
            <tr
              key={careRequest.id}
              className={`hover:bg-slate-50 border-b cursor-pointer hover:bg-gray-100 ${
                selectedRow === index ? 'bg-blue-200' : ''
              }`}
              onClick={() => handleRowClick(index, careRequest)}
            >
              <td className="py-2 truncate">{careRequest.id}</td>
              <td className="py-2">{careRequest.type}</td>
              <td className="py-2">
                {new Date(careRequest.start).toDateString()}
              </td>
              <td className="py-2">
                {new Date(careRequest.end).toDateString()}
              </td>
              <td className="py-2">{careRequest.clientName}</td>
              <td className="py-2 truncate">{careRequest.clientRemarks}</td>
              <td className="py-2">{careRequest.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDetailsModalOpen && (
        <Modal onClose={closeDetailsModal}>
          <CareRequestDetails
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
          <CareRequestForm
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

export default CareRequestList;
