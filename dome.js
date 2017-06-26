import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Navigator
} from 'react-native'; 

class navigatorProject extends Component{
    render(){
        let defaultName = 'firstPageName';
        let defaultComponent = FirstPageComponent;
        return(
        <Navigator
            initialRoute = {{name: defaultName, component: defaultComponent}}　　//初始化导航器Navigator,指定默认的页面
            configureScene = {
            (route) => {
            return Navigator.SceneConfigs.FloatFromRight;　　//配置场景动画，页面之间跳转时候的动画
                }
            }
            renderScene = {
                (route, navigator) =>{
                let Component = route.component;
                return <Component{route.params} navigator = {navigator} />　　//渲染场景
            }
            }
        />
        );
    } 
} 
//第一个页面
class FirstPageComponent extends Component{
clickJump(){
const{navigator} = this.props;
if(navigator){
navigator.push({　　//navigator.push 传入name和你想要跳的组件页面
name: "SecondPageComponent",
component: SecondPageComponent
});
} 
}
render(){
return(
<View style = {styles.container}>
<Text>我是第一个页面</Text>
<TouchableHighlight
underlayColor = "rgb(180,135,250)"
activeOpacity = {0.5}
style = {{
borderRadius: 8,
padding: 8,
marginTop: 8,
backgroundColor: "#F30"
}}
onPress = {this.clickJump.bind(this)}>
<Text>点击进入第二个页面</Text>
</TouchableHighlight>
</View>
);
}
} 
//第二个页面
class SecondPageComponent extends Component{
clickJump(){
const{navigator} = this.props;
if(navigator){
navigator.pop();　　//navigator.pop 使用当前页面出栈, 显示上一个栈内页面.
}
}
render(){
return(
<View style = {styles.container}>
<Text>我是第二个页面</Text>
<TouchableHighlight
underlayColor = "rgb(180, 135, 250)"
activeOpacity = {0.5}
style = {{
borderRadius: 8,
padding: 8,
marginTop: 5,
backgroundColor: "#F30"
}}
onPress = {this.clickJump.bind(this)}>
<Text>点击返回第一个页面</Text>
</TouchableHighlight>
</View>
);
}
} 
const styles = StyleSheet.create({
　container: {
　　flex: 1,
　　justifyContent: 'center',
　　alignItems: 'center',
　　backgroundColor: '#FFFFFF',
　},
});
AppRegistry.registerComponent('navigatorProject', () => navigatorProject);