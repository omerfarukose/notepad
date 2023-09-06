import * as React from 'react';
import { Navigation } from './navigation';
import { CommonContextProvider } from './context/CommonContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = ( ) => {

  return (
    <CommonContextProvider>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </CommonContextProvider>
  )
}