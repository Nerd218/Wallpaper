import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';


class Splash extends React.Component {
    componentDidMount() {
        console.log("this is component did mount")
        // setTimeout(() => {
        //     this.props.navigation.navigate('HomeScreen');
        // }, 3000);
    }
    render() {
        return (
            <View style={{ alignContent:'center',
            margin:50}}>
          <Image
            style ={{width: "50%", height:"50%"}}
            source={{ uri : "https://media0.giphy.com/media/7LLviNCYAmMWA/200w.webp?cid=ecf05e47y72xmyu3x48f6vstgje1q5xidrxxsx9es9bq7kkr&rid=200w.webp&ct=g"}}
          />
        </View>
        )
    }
}

export default Splash;