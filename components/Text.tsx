import styled, { keyframes } from 'styled-components';
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



const AnimateE = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
    }
    25% { /* note that rotation from 0 to 20 deg happens in 25% time = 0.45 seconds. */
        -webkit-transform: rotate(20deg);
    }
    50% {
        -webkit-transform: rotate(0deg);
    }
    75% {
        -webkit-transform: rotate(-20deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
    }    
}
`;

export const Animate = styled.span`
display: inline-block;
animation: ${AnimateE} 2s linear;

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