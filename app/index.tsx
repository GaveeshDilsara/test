
//import { Button } from "@react-navigation/elements";
import React from "react";
import { Button, View } from "react-native";

export default function Index() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#e13636ff'}}>
      <View style={{backgroundColor:'#ffffff',padding:20,borderRadius:10}}>
            <Button color={'yellow'} title="Click Me" onPress={() => console.log('Button Presssed')}/>
      </View>

    </View>
  );
}
