import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from "./helper/NavigationHelper";

// screen
import { HomeScreen } from './screens/HomeScreen';
import { CreateNoteScreen } from "./screens/CreateNoteScreen";
import { CategoryListScreen } from "./screens/CategoryListScreen";

export const Navigation  = ( ) => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer ref={navigationRef}>

            <Stack.Navigator screenOptions={{ headerShown:false }}>

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CreateNote" component={CreateNoteScreen} />
                <Stack.Screen name="CategoryList" component={CategoryListScreen} />

            </Stack.Navigator>

      </NavigationContainer>
    )
}