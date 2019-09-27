import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Button, Alert } from 'react-native';

export default class Multiplos extends Component{
    constructor(){
        super(),
        this.state={
            cadena : '',
            estado : "False"

        }
    }

    onChangeText(text){
        this.setState({
            cadena : text,
        })
    }

    Dots(){
        var cadenaArray =  this.state.cadena.split('...');
            for(x=0;x< cadenaArray.length; x++){
                if(x>0){
                    var primerCaracter = cadenaArray[x].charAt(0);
                    var ultimoCaracter = cadenaArray[x-1].charAt(cadenaArray[x-1].length - 1);
                    sum = parseInt(primerCaracter) + parseInt(ultimoCaracter);
                    if(sum == 10){
                        console.log(sum);
                        this.setState({
                            estado : "True"
                        })
                    }else{
                        this.setState({
                            estado : "Felse"
                        })
                    }
                    
                }
            }
            return this.state.estado;
    }

    render(){
        return(
    
            <View style={{marginLeft:40,marginRight:40,alignContent:'center',marginTop:50}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5, }}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.state.cadena}
                    />
                <Button
                    title="Comprobar"
                    onPress={() => (this.Dots())}
                    />
                <Text  style={{marginTop: 30, fontSize:30 }}>
                    {this.state.estado}
                </Text>
            </View>
        );
        
    }
}