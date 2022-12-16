import { useState } from 'react'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function ToggleColorMode() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );

export function ColorModeProvider({value, children}){
    return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>
}  
  
  
    
  