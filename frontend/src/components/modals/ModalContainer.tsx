import { useContext } from 'react';
import styled from 'styled-components';
import { ModalsContext } from '../../context/modals.context';

type TProps = {
  children: JSX.Element | JSX.Element[];
};

const ModalContainer = ({ children }: TProps) => {
  const { setModals } = useContext(ModalsContext);

  const handleCloseModal = () => {
    setModals(() => ({
      editPost: false,
      confirmDeletion: false,
      addPost: false,
    }));
  };

  return (
    <Container onClick={handleCloseModal}>
      <ModalBox onClick={(event) => event.stopPropagation()}>
        {children}
      </ModalBox>
    </Container>
  );
};

export default ModalContainer;

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(54, 54, 54, 0.6);
  top: 0;
  left: 0;
  z-index: 90;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 1.5rem;
  top: 30%;
  width: 90%;
  max-width: 410px;
  z-index: 91;
  background-color: black;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
`;
