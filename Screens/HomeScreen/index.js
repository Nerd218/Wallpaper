import React from "react";
import { View, Text, Button, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from "./Stylesheet";

class HomeScreen extends React.Component {

    state = {
        currentIndex: 0,
        entries: [
            { image: "https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943__340.png" },
            { image: "https://cdn.pixabay.com/photo/2020/06/06/19/23/lgbt-5267848_960_720.png" },
            { image: "https://cdn.pixabay.com/photo/2022/06/18/16/55/cute-7270285__340.png" },
            { image: "https://cdn.pixabay.com/photo/2021/09/17/11/32/flowers-6632403__340.png" },
            { image: "https://cdn.pixabay.com/photo/2022/05/16/11/01/pugs-7200102__340.png" },
            { image: "https://cdn.pixabay.com/photo/2022/04/17/07/33/frame-7137533__340.png" },
            { image: "https://cdn.pixabay.com/photo/2022/03/28/18/41/hatching-7098132__340.png" },
        ],
        flower: [
            { image: "https://cdn.pixabay.com/photo/2021/11/22/10/14/floral-6816295__340.png" },
            { image: "https://cdn.pixabay.com/photo/2021/09/13/21/06/floral-background-6622475__340.png" },
            { image: "https://cdn.pixabay.com/photo/2019/11/18/06/43/flowers-4634053__340.png" },
            { image: "https://cdn.pixabay.com/photo/2021/09/17/11/32/flowers-6632403__340.png" },
            { image: "https://cdn.pixabay.com/photo/2019/03/03/20/23/flowers-4032775__340.png" },
            { image: "https://cdn.pixabay.com/photo/2018/09/05/09/33/flowers-3655833__340.png" },
            { image: "https://cdn.pixabay.com/photo/2017/02/15/20/33/floral-2069810__340.png" },
        ],
        frames: [
            { image: "https://cdn.pixabay.com/photo/2021/11/22/10/14/floral-6816295__340.png" },
            { image: "https://cdn.pixabay.com/photo/2021/09/13/21/06/floral-background-6622475__340.png" },
            { image: "https://cdn.pixabay.com/photo/2019/11/18/06/43/flowers-4634053__340.png" },
            { image: "https://cdn.pixabay.com/photo/2021/09/17/11/32/flowers-6632403__340.png" },
            { image: "https://cdn.pixabay.com/photo/2019/03/03/20/23/flowers-4032775__340.png" },
            { image: "https://cdn.pixabay.com/photo/2018/09/05/09/33/flowers-3655833__340.png" },
            { image: "https://cdn.pixabay.com/photo/2017/02/15/20/33/floral-2069810__340.png" },
        ]
    }

    _renderItem = (item, index) => {

        return (
            <View style={styles.view}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('CategoryScreen', { "image": item.item.image, "Title": "Category screen" }) }}>
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={{ uri: item.item.image }} />
                </TouchableOpacity>
            </View>
        )
    }


    render() {
        return (
            <SafeAreaView>
               <ScrollView>
               <View style={{ backgroundColor: "#a29592" }}>
                <Text style={styles.textStyle}>
                    Pet
                </Text>
                <View>
                    <Carousel
                        layout={'default'}
                        data={this.state.entries}
                        sliderWidth={350}
                        itemWidth={260}
                        itemHeight={300}
                        renderItem={this._renderItem}
                        autoplay
                        loop
                        autoplayDelay={300}
                        inactiveSlideScale={.90}
                        onSnapToItem={(item) => {
                            this.setState({ currentIndex: item })
                        }} />
                </View>




               <View style={{marginTop:40}}>
               <Carousel
                   
                    layout={'default'}
                    data={this.state.flower}
                    sliderWidth={350}
                    itemWidth={260}
                    itemHeight={300}
                    renderItem={this._renderItem}
                    autoplay
                    loop
                    autoplayDelay={300}
                    inactiveSlideScale={.90}
                    onSnapToItem={(item) => {
                        this.setState({ currentIndex: item })
                    }} />
                
               </View>


              < View style={{marginTop:40}}>
               <Carousel
                   
                    layout={'default'}
                    data={this.state.frames}
                    sliderWidth={350}
                    itemWidth={260}
                    itemHeight={300}
                    renderItem={this._renderItem}
                    autoplay
                    loop
                    autoplayDelay={300}
                    inactiveSlideScale={.90}
                    onSnapToItem={(item) => {
                        this.setState({ currentIndex: item })
                    }} />
                
               </View>

            </View>
               </ScrollView>
            </SafeAreaView>
        )
    }

}
export default HomeScreen;
