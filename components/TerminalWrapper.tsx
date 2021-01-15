import dfstyles from '../styles/dfstyles';
import styled, { css } from 'styled-components';
import { InitRenderState } from '../pages/index';


type LandingWrapperProps = {
    children: React.ReactNode;
    initRender: InitRenderState;
    terminalEnabled: Boolean;   
}

const StyledWrapper = styled.div<{
    initRender: InitRenderState;
    terminalEnabled: boolean;
  }>`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: ${(props) =>
      props.initRender !== InitRenderState.NONE
        ? 'space-between'
        : 'space-around'};
  `;

export function TerminalWrapper({
    children,
    initRender,
    terminalEnabled,
  }: LandingWrapperProps) {
    return (
      <StyledTerminalWrapper
        initRender={initRender}
        terminalEnabled={terminalEnabled}
      >
        {children}
      </StyledTerminalWrapper>
    );
  }

  const STWNoInit = css`
  max-width: 60em;
  width: 60%;
  padding: 2em 0;
  font-size: ${dfstyles.fontSizeS};
`;



  const StyledTerminalWrapper = styled.div<{
    initRender: InitRenderState;
    terminalEnabled: boolean;
  }>`
    display: ${({ initRender, terminalEnabled }) => {
      if (initRender === InitRenderState.NONE) return 'block';
      else return terminalEnabled ? 'block' : 'none';
    }};
    border-left: ${({ terminalEnabled, initRender }) =>
      terminalEnabled && initRender !== InitRenderState.NONE
        ? `1px solid ${dfstyles.colors.text}`
        : 'none'};
    height: 100%;
    // overflow: hidden;
    background: ${dfstyles.colors.background};
    position: relative;
    ${(props) =>
      STWNoInit};
    @media (max-width: 660px) {
      width: 100%;
      padding: 1.5em 2em;
    }
  `;

  export function Wrapper({
    children,
    initRender,
    terminalEnabled,
  }: LandingWrapperProps) {
    return (
      <StyledWrapper initRender={initRender} terminalEnabled={terminalEnabled}>
        {children}
      </StyledWrapper>
    );
  }
