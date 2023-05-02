import styled from '@emotion/styled';
import { gray, pink, white } from 'view/theme/colors';

export const StyledSwitch = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 25px;
  border: none;
  background: ${gray};
  position: relative;
  transition: background-color 0.2s;

  &::before {
    content: '';
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: ${white};
    transition: transform 0.2s;
  }

  &.active {
    background: ${pink};

    &::before {
      transform: translateX(25px);
    }
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SwitchLabel = styled.div`
  margin-left: 12px;
`
