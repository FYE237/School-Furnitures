import { Children } from "react"
import { StyleSheet ,Dimensions} from "react-native"

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    header:{
        backgroundColor:'#6050DC',
        height:Dimensions.get('window').height/2.2,
    },
    icon:{
        marginTop:20,
        flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    iconModal:{
        marginTop:5, 
        marginBottom:25, 
       justifyContent:'center',
       alignItems:'center',
    },
    titleModal:{
        color:'#6050DC',
        marginBottom:15,
        fontSize:25,
        fontWeight:'bold',
        marginLeft:10,
        justifyContent:'center'
    },
    actionModal:{
        marginTop:25,
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        marginLeft:8,
        paddingBottom: 5
    },
    buttonsModal:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1
    },
    signInModal:{
        marginTop:50,
        marginLeft:25,
        backgroundColor: '#6050DC',
        width: '40%',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    exitModal:{
        marginTop:50,
        marginRight:35,
        backgroundColor: '#ffffff',
        shadowOpacity: 0.23,
         shadowRadius: 2.62,
         elevation: 4,
        width: '40%',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    containerModal:{
        marginTop:15,
        marginBottom:25,
        marginRight:25,
        marginLeft:25,
        flex:1,
         shadowColor: '#000',
         shadowOffset: {
           width: 0,
           height: 2,
         },
         shadowOpacity: 0.23,
         shadowRadius: 2.62,
         elevation: 4,
    },
    nomApp:{
      color:'black',
      fontSize:40,
      fontWeight:'bold', 
      fontStyle:'italic'
    },
    title:{
        color:'#6050DC',
        marginTop:5,
        fontSize:30,
        fontWeight:'bold',
        justifyContent:'center'
    },
    action:{
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    signIn:{
        marginTop:40,
        backgroundColor: '#6050DC',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSignIn:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        color:"white",
    },  
    textQuit:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        color:"black",
    },  
    footer:{
        flex:1.5,
        backgroundColor:'white',
        bottom:50,
        borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingVertical: 50,
      paddingHorizontal: 30
    }
})

export default styles