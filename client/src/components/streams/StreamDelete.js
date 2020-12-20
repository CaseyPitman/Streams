import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title='Delete Stream'
        content='Confirm stream delete'
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
