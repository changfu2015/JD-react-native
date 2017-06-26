import React,{ Component } from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View
} from 'react-native'



export default class TabBar extends Component {
	render(){
		return (
			<View style={ styles.tabBox}>
				<View style={ styles.tabFlex}>
					<Image source={ require('./images/tabs/home_normal.png')} style={ styles.tabIcon} />
				</View>
				<View style={ styles.tabFlex}>
					<Image source={ require('./images/tabs/category_normal.png')} style={ styles.tabIcon} />
				</View>
				<View style={ styles.tabFlex}>
					<Image source={ require('./images/tabs/faxian_normal.png')} style={ styles.tabIcon} />
				</View>
				<View style={ styles.tabFlex}>
					<Image source={ require('./images/tabs/cart.png')} style={ styles.tabIcon} />
				</View>
				<View style={ styles.tabFlex}>
					<Image source={ require('./images/tabs/personal_normal.png')} style={ styles.tabIcon} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabBox: {
		height: 52,
        alignItems: 'center',
        flexDirection: 'row',   // 水平排布
		backgroundColor: '#333333',
		bottom: 0,
		width: '100%',
		position: 'absolute'
	},
	tabIcon: {
		width: 30,
		height: 35,
		resizeMode: 'stretch',
		marginTop: 10
	},
	tabFlex: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center'
	}
})