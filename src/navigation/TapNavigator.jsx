import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ShopStack from '../navigation/ShopStack'
import CartStack from './CartStack';
import { StyleSheet } from 'react-native'
import { colors } from '../global/colors';
import { Feather } from '@expo/vector-icons';
const TapNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>
                <Tab.Screen name="ShockStack" component={ShopStack
                } options={{tabBarIcon: ({focused})=> {}}}/>
                <Tab.Screen name="CarStack" component={CartStack
                } />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TapNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green,
        height: 60,
    },

    tabContainer: {
        justifyContent: 'center',
        alignItems:'center'
    }
})