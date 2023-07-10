import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;

  font-size: 20px;

  @media (max-width: 1023.98px) {
    gap: 6px;
    margin-bottom: 8px;

    font-size: 16px;
  }

  @media (max-width: 767.98px) {
    gap: 4px;
    margin-bottom: 6px;

    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 24px;
  padding-left: 12px;

  border: 1px solid black;
  border-radius: 10px;

  &:hover {
    background-color: #5995f4;
    border-color: #5995f4;
    color: #fff;
  }

  &:focus {
    background-color: transparent;
    border-color: #5995f4 !important;
    color: #000;
  }

  @media (max-width: 1023.98px) {
    width: 260px;
    height: 20px;
    padding-left: 10px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    width: 220px;
    height: 16px;
    padding-left: 8px;

    border-radius: 6px;
  }
`;