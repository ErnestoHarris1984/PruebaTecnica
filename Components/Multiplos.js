import React, { Component } from 'react';
import { View, Text, ScrollView  } from 'react-native';

export default class Multiplos extends Component{
    constructor(){
        super(),
        this.state={
            numeros : [],
            multiplosCinco : [],
            multiplosSiete : [],
            multiplosCincoSiete : []
        }
    }

    arrayFunction(){
        for(var x=50; x<=150; x++ ){
            let numeros = this.state.numeros;
            if((parseInt(x) % 5) == 0  &&   (parseInt(x) % 7) == 0){
                numeros.push(x+ " = FooBar");
            }else{
                if( (parseInt(x) % 5) == 0){
                    numeros.push(x+ " = Foo");
                }else if( (parseInt(x) % 7) == 0  ){
                    numeros.push(x + "= Bar");
                }else{
                    numeros.push(x);
                }
            }
            
            
        }
        
    }
    iguales(){
        for(var i=0;i<this.state.multiplosCinco.length;i++){
            for(var j=0;j<this.state.multiplosSiete.length;j++){
                if(this.state.multiplosCinco[i]=this.state.multiplosSiete[j]){
                    let multiplosCincoSiete = this.state.multiplosCincoSiete;
                    multiplosCincoSiete.push("FooBar"+x);
                }
            }
        }
        return this.multiplosCincoSiete;
        
    }

    render(){
        this.arrayFunction()
        return(
            <ScrollView>
                <View>
                    { 
                    this.state.numeros.map((item, key)=>(
                    <Text key={key}> { item } </Text>)
                    )}
                </View>
            </ScrollView>
            
        )
    }
}