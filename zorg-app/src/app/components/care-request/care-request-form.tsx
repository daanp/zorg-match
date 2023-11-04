import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  CareRequestInput,
  useAddCareRequestMutation,
} from '@zorg-match/graphql-codegen-react';
import { Loader } from "../util/loader";
import DefaultError from "../util/default-error";

const CareRequestForm = ({onSubmit}) => {
  const [errorOnSubmit, setErrorOnSumbit] = useState(false);
  const [addCareRequestMutation, { data, loading, error }] =
    useAddCareRequestMutation();
  const validateForm = (values: CareRequestInput) => {
    const errors: { start?: string } = {};
    if (values.start && values.end) {
      const startTime = new Date(values.start);
      const endTime = new Date(values.end);

      if (startTime >= endTime) {
        errors.start = 'Start time must be before end time';
      }
    }

    return errors;
  };

  const submitForm = async (values: CareRequestInput) => {
    // show loader
    const { data } = await addCareRequestMutation({
      variables: {
        addRequestInput: values,
      },
    });

    if (data?.addCareRequest) {
      onSubmit();
    } else {
      setErrorOnSumbit(true);
    }
  };
  return (
    <div className="p-4">
      {loading ? (
        <Loader></Loader>
      ) : null}

      <Formik
        initialValues={{
          start: '',
          type: '',
          end: '',
          clientName: '',
          clientRemarks: '',
        }}
        validate={validateForm}
        onSubmit={submitForm}
      >
        <Form>
          <div className={`mb-4 ${loading ? 'hidden' : ''}`}>
            <label
              htmlFor="start"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Start date and time
            </label>
            <Field
              type="datetime-local"
              id="start"
              name="start"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <ErrorMessage
              name="start"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="end"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              End date and time
            </label>
            <Field
              type="datetime-local"
              id="end"
              name="end"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <ErrorMessage
              name="end"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="clientName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Client Name
            </label>
            <Field
              type="text"
              id="clientName"
              name="clientName"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <ErrorMessage
              name="clientName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Type
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <Field
                  type="radio"
                  name="type"
                  value="HOUSEHOLD"
                  className="mr-2"
                  required
                />
                Household
              </label>
              <label>
                <Field
                  type="radio"
                  name="type"
                  value="MEDICAL"
                  className="mr-2"
                  required
                />
                Medical
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="clientRemarks"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Remarks
            </label>
            <Field
              as="textarea"
              id="clientRemarks"
              name="clientRemarks"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="clientRemarks"
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

export default CareRequestForm;
