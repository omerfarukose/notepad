import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const MyStatusBar = (props)  => {

    const { backgroundColor, barStyle = "dark-content" } = props;

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