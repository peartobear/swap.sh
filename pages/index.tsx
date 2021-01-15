import Terminal from '../components/Terminal';
import { TerminalWrapper, Wrapper } from '../components/TerminalWrapper'

import React, { useState, useEffect, useRef } from 'react';
import TerminalEmitter, {
  TerminalTextStyle,
  TerminalEvent,
} from '../utils/TerminalEmitter';


export enum InitRenderState {
    NONE,
    LOADING,
    COMPLETE,
}

enum InitState {
  NONE,
}


const LandingPage = () => {

  let initState = InitState.NONE


  const advanceStateFromNone = async () => {
    const terminalEmitter = TerminalEmitter.getInstance();
    terminalEmitter.bashShell('otc init');
    terminalEmitter.println('Initializing otc trade...');
    terminalEmitter.println('doing a bit of housekeeeping...');
    terminalEmitter.println('this shit is working for real...');
  
  }
  
  // const advanceState = async () => {
  //   if (initState == InitState.NONE) {
  //     await advanceStateFromNone();
  //   }
  // }

  useEffect(() => {
    advanceStateFromNone();

    return () => {};
  }, []);
  

    const [initRenderState, setInitRenderState] = useState<InitRenderState>(
        InitRenderState.NONE
      );

    const [terminalEnabled, setTerminalEnabled] = useState(false);

    if (process.browser) {
        return (
        <div>
        <Wrapper initRender={initRenderState} terminalEnabled={terminalEnabled}>
          <TerminalWrapper
          initRender={initRenderState}
          terminalEnabled={terminalEnabled}>
          <Terminal />
          </TerminalWrapper>
      </Wrapper>
      </div> )
    }

    return <div></div>
}

export default LandingPage