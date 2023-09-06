import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CommonContext } from "../context/CommonContext";
import { categoryColors } from "../utils/theme";
import { navigate } from "../helper/NavigationHelper";

export const CategoryCard = (props) => {

    const {categoryIndex, title, color, onPress, selectedCategory} = props;

    let isSelected = categoryIndex === selectedCategory;

    return(
        <TouchableOpacity
            onPress={() => onPress(categoryIndex, isSelected)}
            style={{
                backgroundColor: categoryColors[categoryIndex],
                width: wp(45),
                height: wp(15),
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: isSelected ? 2 : 0,
                borderColor: "#7895B2",
            }}>

                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: hp(2.4),
                        color: "#545B77",
                        selectedColor: "#414b75"
                    }}>

                    { title }

                </Text>

        </TouchableOpacity>
    )
}