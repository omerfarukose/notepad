import { useContext, useState } from "react";
import { SafeAreaView, Text, View, StatusBar, TouchableOpacity, TextInput} from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { navigate } from "../helper/NavigationHelper";
import { CommonContext } from "../context/CommonContext";
import { categoryColors } from "../utils/theme";

export const CreateNoteScreen = ( ) => {

    const [selectedCategory, setSelectedCategory] = useState(0);

    const [backgroundColor, setBackgroundColor] = useState(categoryColors[0])
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const _renderCategory = (categoryIndex, title, color) => {

        let isSelected = categoryIndex === selectedCategory;

        return(
            <TouchableOpacity
                onPress={() => {
                    setSelectedCategory(isSelected ? 0 : categoryIndex)
                    setBackgroundColor(isSelected ? categoryColors[0] :  categoryColors[categoryIndex]);
                }}
                style={{
                    backgroundColor: categoryColors[categoryIndex],
                    width: wp(23),
                    height: wp(10),
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: isSelected ? 2.3 : 0,
                    borderColor: "#545B77",
                }}>

                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: hp(2),
                            color: "#545B77",
                            selectedColor: "#414b75"
                        }}>

                        { title }

                    </Text>

            </TouchableOpacity>
        )
    }

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: backgroundColor
            }}>

            {/* header */}
            <View
                style={{
                    width: wp(100),
                    height: hp(14),
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    paddingHorizontal: wp(4),
                    paddingVertical: wp(4),
                    flexDirection: "row"
                }}>

                <TouchableOpacity       
                    onPress={() => navigate("Home")}
                    style={{
                        backgroundColor: "white",
                        padding: 8,
                        borderRadius: 15,
                        width: wp(25),
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                    <Text
                        style={{
                            color: "#95BDFF",
                            fontWeight: "bold",
                            fontSize: hp(2)
                        }}>

                        Back

                    </Text>

                </TouchableOpacity>

                <TouchableOpacity   
                    style={{
                        backgroundColor: "white",
                        padding: 8,
                        borderRadius: 15,
                        width: wp(25),
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                    <Text
                        style={{
                            color: "#95BDFF",
                            fontWeight: "bold",
                            fontSize: hp(2)
                        }}>

                        Create

                    </Text>

                </TouchableOpacity>

            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                }}>

                {_renderCategory(1, "okul", "#C8E4B2")}
                {_renderCategory(2, "iş", "#C8E4B2")}
                {_renderCategory(3, "market", "#C8E4B2")}
                {_renderCategory(4, "oyun", "#C8E4B2")}

            </View>


            {/* input view */}
            <View
                style={{
                    width: wp(100),
                    alignItems: "center",
                    padding: wp(5)
                }}>

                <TextInput
                    style={{
                        backgroundColor: "white",
                        width: wp(90),
                        padding: 20,
                        borderRadius: 20,
                        fontSize: hp(2)
                    }}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="title"/>

                <TextInput
                    style={{
                        backgroundColor: "white",
                        width: wp(90),
                        padding: 20,
                        borderRadius: 20,
                        fontSize: hp(2)
                    }}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="title"/>

            </View>



        </View>
    )
}