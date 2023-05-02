import styled from '@emotion/styled';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Loader() {
  return <StyledLoader>Loading...</StyledLoader>;
}
