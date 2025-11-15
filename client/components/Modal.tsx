import { Dispatch, ReactElement, SetStateAction } from "react";

type ModalProps = {
  content: ReactElement;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({content, modalOpen, setModalOpen}: ModalProps) => {

  return (
    <>
      {modalOpen && (
        <div id="myModal" className="modal" onClick={() => setModalOpen(false)}>
          <div className="modal-content">
            <button className="close" onClick={() => setModalOpen(false)}>&times;</button>
            {content}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;