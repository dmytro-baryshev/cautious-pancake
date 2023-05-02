import { MouseEventHandler, ReactNode } from 'react';
import { StyledSwitch, SwitchContainer, SwitchLabel } from './styled';

type SwitchProps = {
  label: ReactNode;
  checked: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Switch({ label, checked, onClick }: SwitchProps) {
  return (
    <SwitchContainer>
      <StyledSwitch
        className={checked ? 'active' : undefined}
        onClick={onClick}
      />
      <SwitchLabel>{label}</SwitchLabel>
    </SwitchContainer>
  );
}
