
//import { Button } from "@react-navigation/elements";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#e13636ff'}}>
      <View style={{backgroundColor:'#ffffff',padding:20,borderRadius:10}}>
            <Button color={'yellow'} title="Click Me" onPress={() => console.log('Button Presssed')}/>
      </View>

      <Text style={{color:'#ffffff',marginTop:20}}>Hello, this is a simple app!</Text>
      <Text style={{color:'#ffffff'}}>This is a React Native application.</Text>
      <Text style={{color:'#ffffff'}}>Enjoy coding!</Text>
      <Text style={{color:'#ffffff'}}>Have a great day!</Text>


      <Text style={{color:'#ffffff'}}>This is a simple app with a button.</Text>
      <Text style={{color:'#ffffff'}}>Click the button to see the console log.</Text>
      <Text style={{color:'#ffffff'}}>You can customize the button color.</Text>
      <Text style={{color:'#ffffff'}}>This is a React Native application.</Text>  
      <Text style={{color:'#ffffff'}}>Feel free to modify the code.</Text>
      <Text style={{color:'#ffffff'}}>Happy coding!</Text>

    </View>
  );
}
