import styled from '@emotion/styled';
import { MouseEventHandler, ReactNode } from 'react';
import { gray } from 'view/theme/colors';

const StyledButton = styled.button`
  all: unset;
  outline: revert;
  cursor: pointer;

  &:disabled {
    cursor: default;
    svg path {
      fill: ${gray};
    }
  }
`;

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
