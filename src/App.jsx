import Footer from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ServiceCards } from "./components/homecards";
import PersonalizedRecommendations from "./components/recommendations";
import RestaurantSearch from "./components/Search";
import FoodCategories from "./components/WhatSection";

export default function App(){
  return (
    <>
       <Header></Header>
       <Hero></Hero>
       <ServiceCards></ServiceCards>
       <RestaurantSearch></RestaurantSearch>
       <FoodCategories></FoodCategories>
       <PersonalizedRecommendations></PersonalizedRecommendations>
       <Footer></Footer>
    </>
   
  )
  
}