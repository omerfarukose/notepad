import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CategoryCard } from "../components/CategoryCard";
import { navigate } from "../helper/NavigationHelper";
import { categoryColors } from "../utils/theme";
import { MyStatusBar } from "../components/MyStatusBar";
import { MainLayout } from "../components/layout/MainLayout";

export const HomeScreen = ( ) => {

    let item1 = {
        category: 4,
        title: "test title one",
        date: "10.10.2010 10:10"
    }

    let item2 = {
        category: 1,
        title: "test title two",
        date: "23.06.2013 23:20"
    }

    let item3 = {
        category: 2,
        title: "test title one",
        date: "12.35.2045 15:54"
    }

    let item4 = {
        category: 3,
        title: "test title one",
        date: "08.23.2123 45:43"
    }

    let noteList = [item1, item2, item3, item4, item1, item3, item2, item4, item2];

    const [backgroundColor, setBackgroundColor] = useState(categoryColors[0]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [myNoteList, setMyNoteList] = useState(noteList);
    
    useEffect(() => {
      console.log("new list : ", myNoteList);
    }, [myNoteList])
    

    const _handleCategoryPress = (categoryIndex, isSelected) => {
        setSelectedCategory(isSelected ? 0 : categoryIndex);
        setBackgroundColor(isSelected ? categoryColors[0] :  categoryColors[categoryIndex]);

        if (isSelected) {
            setMyNoteList(noteList)
        } else {
            let newArray = noteList.filter(function (note) {
                console.log("item : ", note.category);
                console.log("categoryIndex : ", categoryIndex);
    
                return note.category === categoryIndex
            });

            setMyNoteList(newArray)
        }
    }
    
    const _renderCategoryCardGroup = ( ) => {

        return(
            <View
                style={{
                    height: wp(35),
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
                            onPress={_handleCategoryPress}
                            selectedCategory={selectedCategory}
                            categoryIndex={1}/>

                        <CategoryCard
                            onPress={_handleCategoryPress}
                            selectedCategory={selectedCategory}
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
                            onPress={_handleCategoryPress}
                            selectedCategory={selectedCategory}
                            categoryIndex={3}/>

                        <CategoryCard
                            onPress={_handleCategoryPress}
                            selectedCategory={selectedCategory}
                            categoryIndex={4}/>

                    </View>

            </View>
        )
    }

    const _renderButton = ( ) => {

        return(
            <View
                style={{
                    width: wp(100),
                    alignItems: "center",
                    marginTop: hp(5)
                }}>

                <TouchableOpacity
                    onPress={() => navigate("CreateNote")}
                    style={{
                        backgroundColor: "#95BDFF",
                        borderRadius: 15,
                        padding: 15
                    }}>

                    <Text
                        style={{
                            color: "white",
                            fontSize: hp(2),
                            fontWeight: "bold"
                        }}>
                        Create
                    </Text>

                </TouchableOpacity>

            </View>
        )
    }

    const _renderNoteItem  = (item) => {

        let categoryIndex = item?.category;
        let title = item?.title;
        let date = item?.date;

        return(
            <TouchableOpacity
                style={{
                    width: wp(93),
                    height: hp(8),
                    backgroundColor: "white",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: hp(1),
                    alignSelf: "center"
                }}>

                <View
                    style={{
                        backgroundColor: categoryColors[categoryIndex],
                        width: wp(6),
                        height: hp(8),
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                    }}/>

                <View
                    style={{
                        justifyContent: "space-evenly",
                        flex: 1,
                        height: "100%",
                    }}>

                    <View
                        style={{
                            flex: 1.5,
                            justifyContent: "center",
                            paddingTop: hp(1)
                        }}>

                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: hp(2),
                                marginHorizontal: wp(3),
                            }}>

                            {title}

                        </Text>

                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                        }}>

                        <Text
                            style={{
                                fontWeight: "400",
                                fontSize: hp(1.5),
                                color: "#7895B2",
                                marginHorizontal: wp(3),
                            }}>
                            
                            {date}

                        </Text>

                    </View>

                </View>

            </TouchableOpacity>
        )
    }

    return(
        <MainLayout
            containerStyle={{
                backgroundColor: "#B4E4FF"
            }}>
    
            {/* card group */}
            { _renderCategoryCardGroup() }

            <FlatList
                data={myNoteList}
                extraData={myNoteList}
                renderItem={({item}) => _renderNoteItem(item)}/>

        </MainLayout>
    )
}