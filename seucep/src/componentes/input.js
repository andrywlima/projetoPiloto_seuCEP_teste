import React from 'react';
import {TextInput, StyleSheet} from 'react-native';


function Input (props) {
    

        return (
    <TextInput
          value={props.valor}
          onChangeText={props.onChangeText}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor='#c3c3c3'
          keyboardType="numeric"
          maxLength = {props.tamanho}
          editable= {props.editavel}
         />
)
        }
const styles = StyleSheet.create({

    input: {
        marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#c3c3c3',
        color : 'black'
      },
    })
    

export default Input;