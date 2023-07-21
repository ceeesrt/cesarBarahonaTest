import React from 'react';
import {Text, View, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from "../Styles/Style.js";

const IndicadorScreen = ({navigation, route}) => {
    const myComponentRef = React.useRef(null)
    const [value, setValue] = React.useState(route.params.Value)
    const [load, setLoad] = React.useState(true);
    const [dataSource, setDataSource] = React.useState('');
     
change = () =>{
  if(myComponentRef.current){
    myComponentRef.current.setNativeProps({
      style:{backgroundColor:'#29b6f6'}
    })
    
  }
}
 
    React.useEffect(() => {
      console.log(value)
            fetch()
      }, []);

    fetch = () =>{
      var tolower = value.toLowerCase()
            axios.get(`https://api.cmfchile.cl/api-sbifv3/recursos_api/${tolower}/2022?apikey=cf65a29dda1d9684e12001387cf4c3d606b75d09&formato=json`)
            .then(function(response) {
                    if(value == 'Dolar'){
                      var toCut = 30;
                      toSearch = response.data.Dolares
                      var finalCut = toSearch.slice(-toCut);
                      setDataSource(prev => finalCut);
                    }
                    if(value == 'Euro'){
                      var toCut = 30;
                      toSearch = response.data.Euros
                      var finalCut = toSearch.slice(-toCut);
                      setDataSource(prev => finalCut);
                    }
                    if(value == 'UF'){
                      var toCut = 30;
                      toSearch = response.data.UFs
                      var finalCut = toSearch.slice(-toCut);
                      setDataSource(prev => finalCut);
                    }
                    if(value == 'IPC'){
                      setDataSource(prev => response.data.IPCs);
                    }
                    if(value == 'UTM'){
                      setDataSource(prev => response.data.UTMs);
                    }



                    var toCut;
                    if(value == 'Dolar' || value == 'Euro' || value == 'UF' ){
                        toCut = 30
                    }else{
                        toCut = 360
                    }
                    var finalCut = toSearch.slice(-toCut);
                    
                    setLoad(prev => false)
             
               
                    
                

            }).catch(function(error) {
                console.log(error)
            });
    }


      parsedata = () => {
        if(load == true){
            return(
             <View style={styles.activityStyle}>
               <ActivityIndicator size="large" color="#7A2FFF" />
             </View>
            )
        }else if(dataSource != ''){
             return dataSource.map((data, i) => {
               return(
                <View key={i} style={styles.itemContainer}>
                    <Text style={styles.fechaTxt}>{data.Fecha}</Text>
                    <Text style={styles.ValorTxt}>$ {data.Valor}</Text>
                </View>
                )
              })
   
   
   
        }
      }

    return(
        <ScrollView ref={myComponentRef}  style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconsHeaderCtn}>
                    <TouchableOpacity onPress={ () => navigation.goBack()}>
                        <Ionicons name="arrow-back-sharp" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => change()}>
                        <Ionicons name="color-fill" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tituloTxt}>{value}</Text>
            </View>

            <View style={styles.wrapper}>
                {parsedata()}
            </View>

           
          
        </ScrollView>
    )

};

export default IndicadorScreen;
