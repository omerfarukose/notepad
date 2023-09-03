import * as React from 'react';
import { Navigation } from './navigation';
import { CommonContextProvider } from './context/CommonContext';

export const App = ( ) => {

  return (
    <CommonContextProvider>
      <Navigation/>
    </CommonContextProvider>
  )
}