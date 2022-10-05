import React from "react";
import { View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import WallPaperManager from 'react-native-wallpaper-manager';

class CategoryScreen extends React.Component {
    setWallpaper=()=>{
        WallPaperManager.setWallpaper({ uri: this.props.route.params.image, screen: 'home/lock' },
                            res =>alert(res.msg))
    }
    render() {
        return (
            <View>
                <Text>
                    {this.props.route.params.type}
                </Text>
                <Image
                    style={{ margin: 40, width: "90%", height: "70%", alignSelf: 'center' }}
                    source={{ uri: this.props.route.params.image }} />
               <TouchableOpacity style={{alignSelf:"center",}}  onPress={() => {this.setWallpaper()}}>
                
                    <Text style={{padding:10,marginTop:5,backgroundColor:"blue",color:"white",width:200,height:50,textAlign:"center",borderRadius:20,borderWidth:1}}>Set as Wallpaper</Text>
                   
                    </TouchableOpacity>
            </View>
        )
    }

}
export default CategoryScreen;
