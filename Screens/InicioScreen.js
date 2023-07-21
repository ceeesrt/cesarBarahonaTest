import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GetLocation from 'react-native-get-location'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from "../Styles/Style.js";

class InicioScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lat:'',
        lon:''
    };
  }
  componentDidMount = () =>{
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
    })
    .then(location => {
        console.log(location);
        this.setState({
            lat:location.latitude,
            lon:location.longitude
        })
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
  }
  ShowLocation = () =>{
        if(this.state.lat != '' && this.state.lon != ''){
            return(
                <View style={styles.locationBox}>
                    <Text style={styles.locationTextSmall}>Mi ubicación</Text>
                    <Text style={styles.locationTextSmall}>Latitud: {this.state.lat}</Text>
                    <Text style={styles.locationTextSmall}>longitud: {this.state.lon}</Text>
                </View>
            )
        }
  }
  render() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.tituloTxt}>Indicadores</Text>
            </View>

            <TouchableOpacity style={styles.ctnInidicadores}>
                <Text style={styles.textInicadores}>Dolar</Text>
                <View style={styles.flexCtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Graf',{Value: 'Dolar'})}>
                        <Ionicons name="information-circle" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Indicador',{Value: 'Dolar'})}>
                        <Ionicons name="chevron-forward" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.ctnInidicadores}>
                <Text style={styles.textInicadores}>Euro</Text>
                <View style={styles.flexCtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Graf',{Value: 'Euro'})}>
                        <Ionicons name="information-circle" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Indicador',{Value: 'Euro'})}>
                        <Ionicons name="chevron-forward" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                </View>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.ctnInidicadores}>
                <Text style={styles.textInicadores}>IPC</Text>
                <View style={styles.flexCtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Graf',{Value: 'IPC'})}>
                        <Ionicons name="information-circle" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Indicador',{Value: 'IPC'})}>
                        <Ionicons name="chevron-forward" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.ctnInidicadores}>
                <Text style={styles.textInicadores}>UF</Text>
                <View style={styles.flexCtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Graf',{Value: 'UF'})}>
                        <Ionicons name="information-circle" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Indicador',{Value: 'UF'})}>
                        <Ionicons name="chevron-forward" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.ctnInidicadores}>
                <Text style={styles.textInicadores}>UTM</Text>
                <View style={styles.flexCtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Graf',{Value: 'UTM'})}>
                        <Ionicons name="information-circle" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Indicador',{Value: 'UTM'})}>
                        <Ionicons name="chevron-forward" size={30} color="#7A2FFF"/>
                    </TouchableOpacity>
                </View>
                
            </TouchableOpacity>

                {this.ShowLocation()}

        </View>
    );
  }
}

export default InicioScreen;

// import React from 'react';
// import { View, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { List,Appbar, Text  } from 'react-native-paper';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign'

// const InicioScreen = ({navigation, route}) => {



 
//     return(
//         <View style={{flex:1,backgroundColor:'#fff'}}>

//             <View style={{width:'100%', paddingHorizontal:15, paddingVertical:15, justifyContent:'center', alignItems:'flex-start'}}>
//                 <Text variant="headlineLarge">Indicadores</Text>
//             </View>



//             <List.Item
//                 title="Dolar"
//                 description="Item description"
//                 right={props => <List.Icon {...props} icon="chevron-right" color="#7A2FFF"/>}
//                 onPress={() => navigation.navigate('Indicador',{Value: 'Dolar'})}
//             />
//             <List.Item
//                 title="Euro"
//                 description="Item description"
//                 right={props => <List.Icon {...props} icon="chevron-right"  color="#7A2FFF"/>}
//                 onPress={() => navigation.navigate('Indicador',{Value: 'Euro'})}
//             />
//             <List.Item
//                 title="IPC"
//                 description="Item description"
//                 right={props => <List.Icon {...props} icon="chevron-right"  color="#7A2FFF"/>}
//             />
//             <List.Item
//                 title="UF"
//                 description="Item description"
//                 right={props => <List.Icon {...props} icon="chevron-right"  color="#7A2FFF"/>}
//             />
//             <List.Item
//                 title="UTM"
//                 description="Item description"
//                 right={props => <List.Icon {...props} icon="chevron-right"  color="#7A2FFF"/>}
//             />
//         </View>
//     )
// };

// export default InicioScreen;
