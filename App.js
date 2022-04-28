import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screen/HomeScreen";
import RestaurantScreen from "./src/screen/RestaurantScreen";


const navigator = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantScreen
},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title: 'Restaurant-Search'
  }
})

export default createAppContainer(navigator)