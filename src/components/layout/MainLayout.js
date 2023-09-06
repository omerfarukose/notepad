import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { MyStatusBar } from "../MyStatusBar";
import PropTypes from 'prop-types';
import { categoryColors } from "../../utils/theme";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const MainLayout = (props) => {

    const { statusBar, containerStyle, statusBarColor } = props;

    return(
        <View
            style={{
                flex: 1,
                ...containerStyle
            }}>

            {
                statusBar &&
                <MyStatusBar backgroundColor={statusBarColor}/>
            }

            {props.children}

            <TouchableOpacity
                style={{
                    backgroundColor: "#C4D7E0",
                    position: "absolute",
                    zIndex: 999,
                    width: wp(15),
                    height: wp(15),
                    alignSelf: "center",
                    bottom: hp(5),
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: hp(5),
                        textAlign: "center",
                        textAlignVertical: "center",
                    }}>

                    +
                    
                </Text>

            </TouchableOpacity>

        </View>
    )
}

MainLayout.propTypes = {
    statusbar: PropTypes.bool,
    containerStyle: PropTypes.object,
    statusBarColor: PropTypes.string
}

MainLayout.defaultProps = {
    statusBar: true,
    statusBarColor: categoryColors[0]
}

