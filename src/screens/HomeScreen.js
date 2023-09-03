import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CategoryCard } from "../components/CategoryCard";

export const HomeScreen = ( ) => {

    return(
        <SafeAreaView>
    
            {/* card group */}
            <View
                style={{
                    height: wp(45),
                    justifyContent: "space-evenly"
                }}>

                    {/* first row */}
                    <View
                        style={{
                            width: "100%",
                            justifyContent: "space-evenly",
                            flexDirection: "row",
                        }}>

                        <CategoryCard
                            title={"okul"}
                            color={"#C8E4B2"}
                            categoryIndex={1}/>

                        <CategoryCard
                            title={"iş"}
                            color={"#EF9595"}
                            categoryIndex={2}/>

                    </View>

                    {/* second row */}
                    <View
                        style={{
                            width: "100%",
                            justifyContent: "space-evenly",
                            flexDirection: "row",
                        }}>

                        <CategoryCard
                            title={"market"}
                            color={"#DBC4F0"}
                            categoryIndex={3}/>

                        <CategoryCard
                            title={"genel"}
                            color={"#C0DBEA"}
                            categoryIndex={4}/>

                    </View>

            </View>

        </SafeAreaView>
    )
}