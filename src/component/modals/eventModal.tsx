import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";

const EventModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromLogin = params.get("fromLogin");

    if (fromLogin === "true") {
      setIsModalOpen(true);

      // Clean the URL by removing the query param after showing popup
    
    }
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
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
