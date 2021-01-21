import Terminal from '../components/Terminal';
import { TerminalWrapper, Wrapper } from '../components/TerminalWrapper'
import _ from 'lodash';


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


//animate ellipse

const wait = (ms: number) =>
new Promise((resolve) => setTimeout(resolve, ms));

const animEllipsis = async () => {
const terminalEmitter = TerminalEmitter.getInstance();
const delay = 0; // TODOPR 250
for (const _i in _.range(3)) {
  await wait(delay).then(() => terminalEmitter.print('.'));
}
await wait(delay * 2.5);
return;
};

//


const LandingPage = () => {

  let initState = InitState.NONE


  const advanceStateFromNone = async () => {
    const terminalEmitter = TerminalEmitter.getInstance();
    terminalEmitter.bashShell('otc init');
    terminalEmitter.println('Initializing otc...');
    terminalEmitter.print('Summoning the degen gods');
    await animEllipsis();
    await wait(1000);
    terminalEmitter.AnimateEmoji(' 👹');
    await wait(2000);
    terminalEmitter.print(' Degen gods arrived', TerminalTextStyle.Blue);
    terminalEmitter.newline();
    terminalEmitter.print('Checking for Metamask');
    await animEllipsis();
    terminalEmitter.print(' ');
    terminalEmitter.println(
      'ERROR: Could not find Metamask, Please install Metamask',
      TerminalTextStyle.Red
    )

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