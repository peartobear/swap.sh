import Terminal from '../components/Terminal';
import { TerminalWrapper } from '../components/TerminalWrapper'
import React, { useState, useEffect, useRef } from 'react';

export enum InitRenderState {
    NONE,
    LOADING,
    COMPLETE,
}

const LandingPage = () => {

    const [initRenderState, setInitRenderState] = useState<InitRenderState>(
        InitRenderState.NONE
      );

    const [terminalEnabled, setTerminalEnabled] = useState(true);

    if (process.browser) {
        return ( <div>
        <TerminalWrapper
        initRender={initRenderState}
        terminalEnabled={terminalEnabled}
      >
       <Terminal />
      </TerminalWrapper>
      </div> )
    }

    return <div></div>
}

export default LandingPage