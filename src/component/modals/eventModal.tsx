import React, { useState } from "react";
import { Button, Modal } from "antd";

const EventModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
    
      closeIcon={false}
      onCancel={handleCancel}
        title={
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={()=>handleCancel()}
            ></button>
          </div>
        }
        footer={null}
        open={isModalOpen}
      >
        <img src="/assets/images/event-banner.png" className="img-fluid" />
      </Modal>
    </>
  );
};

export default EventModal;
