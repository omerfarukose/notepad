import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CommonContext } from "../context/CommonContext";

export const CategoryCard = (props) => {

    const {categoryIndex, title, color} = props;

    const {selectedCategory, setSelectedCategory} = useContext(CommonContext)

    let isSelected = categoryIndex === selectedCategory;

    return(
        <TouchableOpacity
            onPress={() => setSelectedCategory(isSelected ? 0 : categoryIndex)}
            style={{
                backgroundColor: color,
                width: wp(45),
                height: wp(20),
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: isSelected ? 3.5 : 0,
                borderColor: "#545B77",
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