import { StyleSheet ,Dimensions} from "react-native"

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    icon:{
        marginTop:30,
        flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    nomApp:{
      color:'#000000',
      fontSize:40,
      fontWeight:'bold', 
      fontStyle:'italic'
    },
    title:{
        color:'#6050DC',
        marginTop:25,
        fontSize:30,
        fontWeight:'bold',
        justifyContent:'center'
    },
    action:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    feather:{
        marginLeft:'auto'
    },
    signUp:{
        marginTop:40,
        backgroundColor: '#6050DC',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSignUp:{
        fontSize:18,
        fontWeight:'bold'
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