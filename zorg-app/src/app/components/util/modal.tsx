import React, { ReactNode } from 'react';

class Modal extends React.Component<{
  children: ReactNode;
  onClose: Function;
}> {
  render() {
    let { children, onClose } = this.props;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
        <div className="relative w-full max-w-md p-6 mx-auto my-10 bg-white rounded shadow-lg">
          <button
            onClick={() => onClose()}
            className="absolute top-0 right-0 p-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Close
          </button>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;