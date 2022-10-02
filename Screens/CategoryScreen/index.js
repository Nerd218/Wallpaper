import React from "react";
import { View, Text, Image, Button, ScrollView } from 'react-native';
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
                    style={{ margin: 40, width: "80%", height: "60%", alignContent: 'center' }}
                    source={{ uri: this.props.route.params.image }} />
                <Button
                    title="Set as Wallpaper"
                    onPress={() => {this.setWallpaper()}}
                      
                />
            </View>
        )
    }

}
export default CategoryScreen;
