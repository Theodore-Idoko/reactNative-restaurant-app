import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { View } from 'react-native';
import Categories from './src/components/Categories';
import Header from './src/components/Header'
import Restaurant from './src/components/Restaurants';
import Search from './src/components/Search';

export default function App() {
  const [term, setTerm] = useState('Burger');

  const commonCategories = [
    {
      name:"Burger",
      imageUrl:require("./src/assets/images/burger.png") 
    },
    {
      name:"Pizza",
      imageUrl:require("./src/assets/images/pizza.png") 
    },
    {
      name:"Cake",
      imageUrl:require("./src/assets/images/cake.png") 
    },
    {
      name:"Pasta",
      imageUrl:require("./src/assets/images/pasta.png") 
    },
    {
      name:"Smoothy",
      imageUrl:require("./src/assets/images/smoothies.png") 
    },
    {
      name:"Steak",
      imageUrl:require("./src/assets/images/steak.png") 
    }
  ]
  return (
    <View >
      <Header/>
      <Search
        setTerm={setTerm}
      />
      <Categories
        categories ={commonCategories}
        setTerm = {setTerm}
        term = {term}
      />
      <Restaurant term={term}/>
      <StatusBar />
    </View>
  );
}


