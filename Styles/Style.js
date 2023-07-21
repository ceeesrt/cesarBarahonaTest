import { StyleSheet, Dimensions } from 'react-native';
let fontWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'#fff'
  },
  containerDos: {
    flex:1,
    backgroundColor:'red'
  },
  header:{
    width:'100%', 
    paddingHorizontal:15, 
    paddingVertical:15, 
    justifyContent:'center', 
    alignItems:'flex-start'
  },
  wrapper:{
    paddingHorizontal:15,
  },
  ctnInidicadores:{
    width:'100%',
    padding:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  flexCtn:{
    width:'30%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textInicadores:{
    fontSize:fontWidth/18,
    fontWeight:'bold'
  },
  itemContainer:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#f3f6f4',
    marginBottom:15,
    paddingHorizontal:5,
    paddingVertical:10

  },
  tituloTxt:{
   fontSize:fontWidth/12,
   fontWeight:'bold'
  },
  fechaTxt:{
    color:'#7A2FFF',
    fontWeight:'600'
  },
  ValorTxt:{
    color:'#333333',
    fontWeight:'700'
  },
  BoxInfo:{
    width:'100%',
    height:100,
    justifyContent:'center',
    alignItems:'center',
  },
  priceText:{
    color:'#7A2FFF',
    fontWeight:'700',
    fontSize:fontWidth/8,
  },
  priceTextSmall:{
    color:'grey',
    fontWeight:'500',
    fontSize:fontWidth/20,
  },
  locationBox:{
    width:'100%',
    padding:15,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    backgroundColor:'#7A2FFF'


  },
  locationTextSmall:{
    color:'#fff',
    fontWeight:'700',
    fontSize:fontWidth/25,
  },
  iconsHeaderCtn:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  activityStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
  }
   
});

export { styles }