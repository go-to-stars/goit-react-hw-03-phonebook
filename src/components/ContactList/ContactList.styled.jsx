import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  gap: 8px;

  list-style: inside;

  @media (max-width: 1023.98px) {
    gap: 6px;
  }

  @media (max-width: 767.98px) {
    gap: 4px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1023.98px) {
    gap: 15px;
  }

  @media (max-width: 767.98px) {
    gap: 5px;
  }
`;

export const Text = styled.p`
  width: 240px;
  height: 28px;
  margin: 0;

  font-size: 18px;
  text-transform: capitalize;
  background-color: transparent;

  @media (max-width: 1023.98px) {
    width: 210px;
    height: 24px;

    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    width: 176px;
    height: 20px;

    font-size: 10px;
  }
`;

export const Button = styled.button`
  height: 28px;

  font-size: 18px;
  text-transform: capitalize;
  background-color: transparent;
  border-radius: 10px;

  &:hover {
    background-color: #5995f4;
    border-color: #5995f4;
    color: #fff;
  }

  @media (max-width: 1023.98px) {
    height: 24px;

    font-size: 14px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    height: 20px;

    font-size: 10px;

    border-radius: 5px;
  }
`;
