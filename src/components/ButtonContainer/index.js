import styled from 'styled-components';

const ButtonContianer = styled.div`
  text-align: center;
  margin-top: ${props => (props.top ? props.top + 'px' : '100px')};
`;

export default ButtonContianer;
