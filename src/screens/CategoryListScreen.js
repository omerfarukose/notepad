import { StatusBar, Text, View } from "react-native"
import { categoryColors } from "../utils/theme";
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';


export const CategoryListScreen =  ({route}) => {

    const { categoryIndex } = route.params;

    const CustomStatusBar = (
        {
          backgroundColor,
          barStyle = "dark-content",
          //add more props StatusBar
        }
      ) => { 
         
         const insets = useSafeAreaInsets();
      
         return (
           <View style={{ height: insets.top, backgroundColor }}>
              <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle} />
           </View>
         );
      }

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: categoryColors[categoryIndex]
            }}>

                <CustomStatusBar backgroundColor="yellow" />

                

            <Text>
                CategoryListScreen
            </Text>

        </View>
    )
}