import Modal from 'react-modal';
import { Container } from './styles';

interface uploadModalProps {
  modalIsOpen: boolean,
  handleCloseModal: () => void,
}

export const ModalExample = ({
  modalIsOpen,
  handleCloseModal,
}: uploadModalProps) => {
  Modal.setAppElement('body');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      contentLabel="Example Modal"
    >
      <Container />
    </Modal>
  );
};
