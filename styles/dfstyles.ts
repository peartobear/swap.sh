import {css} from 'styled-components';

export const ARTFACT_ROW_H = 48;

const dfstyles = {
    colors: {
        text: '#ffffff',
        subtext: '#a0a0a0',
        subbertext: '#565656',
        subbesttext: '#383838',
        background: '#000000',
        backgrounddark: '#000000',
        backgroundlight: '#282834',
        dfblue: '#00ADE1',
        dfgreen: '#00DC82',
        dfred: '#FF6492',
        icons: {
            twitter: '#1DA1F2',
            github: '#8e65db',
            telegram: '#0088CC',
            email: '#D44638',
            blog: '#ffcb1f',
          },
        },
      
        fontSize: '16pt',
        fontSizeS: '12pt',
        fontSizeXS: '10pt',
        fontH1: '42pt',
        fontH1S: '36pt',
        fontH2: '24pt',
      
        titleFont: 'perfect_dos_vga_437regular',
      
        screenSizeS: '660px',
      
      
        prefabs: {
          // https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting
          noselect: css`
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
          `,
        },
      };
      export default dfstyles;