import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { styles } from "../Styles/Style.js";
import {
    LineChart,
  } from "react-native-chart-kit";

const GrafScreen = ({navigation,route}) => {
    
    const [value, setValue] = React.useState(route.params.Value);
    const [load, setLoad] = React.useState(true);
    const [dataSource, setDataSource] = React.useState('');
    
    const [price, setPrice] = React.useState(true);
    const [fecha, setFecha] = React.useState(true);

    const [labels, setLabels] = React.useState('');
    const [valores, setValores] = React.useState('');
    

    React.useEffect(() => {
        console.log(value)
            fetch()
    }, []);

    fetch = () =>{
        var toAdd = [];
        var toAddValues = [];
        var tolower = value.toLowerCase()
            axios.get(`https://api.cmfchile.cl/api-sbifv3/recursos_api/${tolower}/2022?apikey=cf65a29dda1d9684e12001387cf4c3d606b75d09&formato=json`)
            .then(function(response) {
                    
                    var toSearch;
                    if(value == 'Dolar'){
                        var toSearch = response.data.Dolares
                    }
                    if(value == 'Euro'){
                        var toSearch = response.data.Euros
                    }
                    if(value == 'IPC'){
                        var toSearch = response.data.IPCs
                    }
                    if(value == 'UF'){
                        var toSearch = response.data.UFs
                    }
                    if(value == 'UTM'){
                        var toSearch = response.data.UTMs
                    }

                    var lastData = toSearch.pop()

                    

                    var toCut;
                    if(value == 'IPC'|| value == 'UTM' ){
                        toCut = 12
                    }else{
                        toCut = 10
                    }
                   
                    var finalCut = toSearch.slice(-toCut);
                    for(i = 0; i < finalCut.length; i++){
                        toAdd.push(finalCut[i].Fecha)
                        toAddValues.push(parseFloat(finalCut[i].Valor))
                    }
                    console.log(finalCut)
                    setValores(prev => toAddValues)
                    setLabels(prev => toAdd)
                    setPrice(prev=> lastData.Valor)
                    setFecha(prev=> lastData.Fecha)
                    setDataSource(prev => response.data.Dolares);
                    setLoad(prev => false)
                    
                    
                

            }).catch(function(error) {
                console.log('2')
                console.log(error)
            });
            

    }

    parsedata = () => {
        if(load == true){
            return(
             <View style={{flex: 1,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor:'#fff',}}>
               <ActivityIndicator size="large" color="#7A2FFF" />
             </View>
            )
        }else if(dataSource != ''){
            return(
                <View>
                <View style={styles.BoxInfo}>
                    <Text style={styles.priceText}>$ {price}</Text>
                    <View>
                        <Text style={styles.priceTextSmall}>{fecha}</Text>
                    </View>
                </View>
                <LineChart
                data={{
                  labels:  labels,
                  datasets: [
                    {

                       data: valores
                    //data: [20, 45, 28, 80, 99, 43]
                    }
                  ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={320}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
            
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 0
                }}
              />
                    
                </View>
            )
        }
      }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={ () => navigation.goBack()}>
                    <Ionicons name="arrow-back-sharp" size={30} color="#7A2FFF"/>
                </TouchableOpacity>
                <Text style={styles.tituloTxt}>{value}</Text>
            </View>
            <View>
                {parsedata()}
            </View>


        </View>
    )
};

export default GrafScreen;
