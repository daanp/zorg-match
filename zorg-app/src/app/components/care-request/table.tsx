import React, { useState } from 'react';
import { CareRequest } from '@zorg-match/graphql-codegen-react';
import { formatDate } from "../util/date-formatters";

const Table = ({ careRequests, select }: { careRequests: CareRequest[]; select: Function }) => {
  const [selectedRow, setSelectedRow] = useState<number>(-1);
  const handleRowClick = (index: number, careRequest: CareRequest) => {
    setSelectedRow(index);
    select(careRequest);
  };

  return (
    <table className="min-w-full">
      <thead>
        <tr>
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
            <td className="py-2">{careRequest.type}</td>
            <td className="py-2">
              {formatDate(careRequest.start)}
            </td>
            <td className="py-2">{formatDate(careRequest.end)}</td>
            <td className="py-2">{careRequest.clientName}</td>
            <td className="py-2 truncate">{careRequest.clientRemarks}</td>
            <td className="py-2">{careRequest.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
