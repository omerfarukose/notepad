import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen
import { HomeScreen } from './screens/HomeScreen';

export const Navigation  = ( ) => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
      </NavigationContainer>
    )
}