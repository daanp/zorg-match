import React, { useState } from 'react';
import {
  AcceptCareRequestInput,
  CareRequest, CareRequestInput,
  useAcceptCareRequestMutation
} from "@zorg-match/graphql-codegen-react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Loader } from './loader';
import DefaultError from "./default-error";

const CareRequestDetails = ({ careRequest }: { careRequest: CareRequest }) => {
  const [errorOnSubmit, setErrorOnSumbit] = useState(false);
  const [acceptCareRequestMutation, { data, loading, error }] =
    useAcceptCareRequestMutation();
  if (!careRequest) {
    return <Loader></Loader>;
  }

  const submitForm = async (values: AcceptCareRequestInput) => {
    // show loader
    const { data } = await acceptCareRequestMutation({
      variables: {
        acceptRequestInput: values,
      },
    });

    if (data?.acceptCareRequest) {
      //success
    } else {
      setErrorOnSumbit(true);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Care Request Details</h2>
      <p>
        <span className="font-semibold">ID:</span> {careRequest.id}
      </p>
      <p>
        <span className="font-semibold">Type:</span> {careRequest.type}
      </p>
      <p>
        <span className="font-semibold">Start Date and Time:</span>{' '}
        {careRequest.start}
      </p>
      <p>
        <span className="font-semibold">End Date and Time:</span>{' '}
        {careRequest.end}
      </p>
      <p>
        <span className="font-semibold">Client Name:</span>{' '}
        {careRequest.clientName}
      </p>
      <p>
        <span className="font-semibold">Remarks:</span>{' '}
        {careRequest.remarks || 'No remarks'}
      </p>
      <p>
        <span className="font-semibold">Status:</span> {careRequest.status}
      </p>

      {loading ? <Loader></Loader> : null}
      <Formik
        initialValues={{
          requestId: careRequest.id,
          carerName: '',
          remarks: '',
        }}
        onSubmit={submitForm}
      >
        <Form className={`mt-4 ${loading ? 'hidden' : ''}`}>
          <div className="hidden">
            <label
              htmlFor="requestId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Request ID
            </label>
            <Field
              type="text"
              id="requestId"
              name="requestId"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <ErrorMessage
              name="requestId"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="carerName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Carer Name
            </label>
            <Field
              type="text"
              id="carerName"
              name="carerName"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <ErrorMessage
              name="carerName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="remarks"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Remarks
            </label>
            <Field
              as="textarea"
              id="remarks"
              name="remarks"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="remarks"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>

      {errorOnSubmit ? (
        <DefaultError></DefaultError>
      ) : null}
    </div>
  );
};

export default CareRequestDetails;