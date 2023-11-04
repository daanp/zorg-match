import React, { useState } from "react";
import { CareRequest } from "@zorg-match/graphql-codegen-react";

const CareRequestList = ({ careRequests }: {careRequests: CareRequest[]}) => {
  const [selectedRow, setSelectedRow] = useState<number>(-1);
  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Care Requests</h2>
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
          <tr key={careRequest.id} className={`hover:bg-slate-50 border-b cursor-pointer hover:bg-gray-100 ${
            selectedRow === index ? 'bg-blue-200' : ''
          }`}
              onClick={() => handleRowClick(index)}
          >
            <td className="py-2">{careRequest.id}</td>
            <td className="py-2">{careRequest.type}</td>
            <td className="py-2">{new Date(careRequest.start).toDateString()}</td>
            <td className="py-2">{new Date(careRequest.end).toDateString()}</td>
            <td className="py-2">{careRequest.clientName}</td>
            <td className="py-2">{careRequest.remarks}</td>
            <td className="py-2">{careRequest.status}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default CareRequestList;
