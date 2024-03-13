import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ShopStack from '../navigation/ShopStack'
import CartStack from './CartStack';
import { StyleSheet, Text, View } from "react-native"
import { colors } from '../global/colors';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';
import OrdersStack from './OrderStack';


const TapNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>
                <Tab.Screen name="ShockStack" component={ShopStack
                } options={{
                    tabBarIcon: ({focused})=> {
                    return (
                        <View style={styles.tabContainer}>
                          <Entypo name="shop" size={30} color={focused ? "black" : "grey"} />
                          <Text style={{ color: focused ? "black" : "grey" }}>S H O P</Text>
                        </View>
                    )
                }}}
                />
                <Tab.Screen 
                name="CarStack" 
                component={CartStack} 
                options={{
                    tabBarIcon: ({focused})=> {
                    return (
                        <View style={styles.tabContainer}>
                            <Feather name="shopping-cart" size={28} color={focused ? 'black' : 'grey'} />
                            <Text style={{color:
                                focused ?
                                 'black' :
                                  'grey'
                                  }}>C A R T</Text>
                        </View>
                    )
                }}}
                />
                <Tab.Screen
                  name="OrdersTab"
                  component={OrdersStack}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                        <View style={styles.tabContainer}>
                          <FontAwesome
                            name="list-ul"
                            size={30}
                            color={focused ? "black" : "grey"}
                          />
                          <Text style={{ color: focused ? "black" : "grey" }}>Orders</Text>
                        </View>
                      );
                    },
                  }}
                />
            </Tab.Navigator>
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