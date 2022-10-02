import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  margin: 0 0.4rem;
  width: 80px;
`;

export const StyledTextArea = styled.textarea`
  background-color: inherit;
  color: #fff;
  padding: 0.5rem;
  font-size: 1rem;
  width: 280px;
  min-height: 145px;
  resize: none;
  border: 1px solid #ff7a41;

  ::placeholder {
    color: #8d8d8d;
    text-align: center;
  }
`;
