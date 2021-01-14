import styled from 'styled-components';
import dfstyles from '../styles/dfstyles';

export const Green = styled.span`
color: ${dfstyles.colors.dfgreen}
`;

export const Sub = styled.span`
color: ${dfstyles.colors.subtext}
`;

export const White = styled.span`
  color: ${dfstyles.colors.text};
`
export const Red = styled.span`
  color: ${dfstyles.colors.dfred};
`;
export const Blue = styled.span`
  color: ${dfstyles.colors.dfblue};
`;
export const Invisible = styled.span`
  color: rgba(0, 0, 0, 0);
`;

export const JSPrompt = () => (
    <span>
      <Blue>{'>'}</Blue>{' '}
    </span>
  );
  
export const BashPrompt = () => (
    <span>
      <Green>{'$'}</Green>{' '}
    </span>
  );

export const BasicLink = styled.u`
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;