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

    if (process.browser) {
        return 
        <div>
        <TerminalWrapper
        initRender={InitRenderState}
        terminalEnabled={terminalEnabled}
      >
        <Terminal />
      </TerminalWrapper>
      </div>
    }

    return <div></div>
}

export default LandingPage