//import { Button } from "@react-navigation/elements";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#ffffffff'}}>


      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator />
        <ActivityIndicator size="small" color="#00ff00ff" />
        <ActivityIndicator size="large" color="#0000ffff" animating={false}/>
      </View>

      <Text style={{color:'#ffffff',marginTop:20}}>Hello, this is a simple app!</Text>
      <Text style={{color:'#ffffff'}}>This is a React Native application.</Text>
      <Text style={{color:'#ffffff'}}>Enjoy coding!</Text>
      <Text style={{color:'#ffffff'}}>Have a great day!</Text>

    </View>
  );
}
