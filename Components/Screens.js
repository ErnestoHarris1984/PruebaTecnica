import React from 'react';
import { createAppContainer}  from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';


import CadenaScreen from "./Cadena";
import MultiplosScreen from "./Multiplos";

const CadenaScreenStack = createStackNavigator({
    Cadena: {
        screen : CadenaScreen,
        navigationOptions: ({navigation}) =>({
            title : "Cadena"
        })
    }
});

const MultiplosScreenStack = createStackNavigator({
    Multiplos:{
        screen : MultiplosScreen,
        navigationOptions: ({navigation})=>({
            title : "Multiplos"
        })
    }
});

const rootStack = createBottomTabNavigator({
    Cadena:{
        screen : CadenaScreenStack,
        navigationOptions:({navigation}) => ({
            tabBarLabel : "Cadena",
        })
    },
    Multiplos :{
        screen : MultiplosScreenStack,
        navigationOptions : ({navigation})=>({
            tabBarLabel : "Multiplos",
        })
    }
    });

    export default createAppContainer(rootStack);