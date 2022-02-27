import ReactModal from "react-modal";
import { useEffect } from "react";

import { serverRequest } from "common/utils";
import { useUploadMedia } from "common/utils";

interface IUpdateAvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateAvatarModal = ({ isOpen, onClose }: IUpdateAvatarModalProps) => {
  const { UploadArea, uploadStatus, media } = useUploadMedia();

  useEffect(() => {
    if (uploadStatus === 'complete' && media) {
      updateUserProfile()
    }
  }, [uploadStatus, media])

  const updateUserProfile = async () => {
    await serverRequest.PUT('/me', { picture: media?.url });
    onClose();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 9999,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #4D4D4D",
          borderRadius: "0",
          padding: "0",
          backgroundColor: "rgb(17, 17, 17)",
          maxWidth: "400px",
        },
      }}
    >
      <div>
        Update Avatar
        <UploadArea />
      </div>
    </ReactModal>
  );
};

export default UpdateAvatarModal;
