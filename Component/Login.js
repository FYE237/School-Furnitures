import React from 'react'
import * as Animatable from 'react-native-animatable'
import {FontAwesome5} from '@expo/vector-icons'
import {Formik} from 'formik'
import { FontAwesome,Feather } from '@expo/vector-icons'
import {Text,View,ScrollView,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler'
import { createStackNavigator,createAppContainer } from '@react-navigation/stack'
//import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/LoginStyle'



const LoginScreen = ({navigation}) => {

    const [data,setData]=React.useState({
        Email:'',
        secureTextEntry:true,
        isValid:true,
    })

    const updateSecurityTextEntry = ()=> {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return(
        <ScrollView style={styles.container}
            showVerticalScrollIndicator={false}>
            
           <View style={styles.header}>
               <View style={styles.icon}>
               <FontAwesome5 
               name="school" size={90} color="black" />
               <Text style={styles.nomApp}>EasyBuy</Text>
               </View>
           </View>
           
           <View style={styles.footer}>
                <Text style={styles.title}>
                    Bienvenue
                    </Text>
                <Text>
                    Vous n'avez pas encore de compte?
                    <Text  style={{color:'#E73E01',
                        fontStyle:'italic'}} 
                        onPress={() => navigation.navigate('CreateAccount')}
                        >
                    Inscrivez-vous maintenant
                </Text>
                </Text>
                <ScrollView style={{flex:1,backgroundColor:'#fffffff'}}>
                    <Formik
                        initialValues = {{Email: '',password:''}}
                        onSubmit={(values,actions) => {
                                actions.resetForm()
                                console.log(values)
                                //Redirection
                        }}>
                        {(props) => (  /* Champs du formulaire */
                            
                            <View style={{marginTop: 50}}>
                                {/* Email */}
                                <Text>Email</Text>
                                <View style={styles.action}> 
                                    <FontAwesome 
                                    name='user-o'
                                    color="#0000000"
                                    size={20}/>
                                    <TextInput
                                        style={{marginLeft:10}}
                                        placeholder="Entrez votre E-mail"
                                        onChangeText={props.handleChange('Email')}
                                        value={props.values.Email}
                                        keyboardType='email-address'/>
                                </View>
                                {/* Password */}
                                <View style={{marginTop:30}}>
                                    <Text>Mot de passe</Text>
                                    <View style={styles.action}>
                                        <FontAwesome 
                                        name='lock'
                                        color="#0000000"
                                        size={20}/>
                                        <TextInput
                                            style={{marginLeft:10}}
                                            placeholder="Entrez votre mot de passe"
                                            onChangeText={props.handleChange('password')}
                                            value={props.values.password}
                                            secureTextEntry={data.secureTextEntry}/>
                                        <TouchableOpacity
                                            style={{flex:1}}
                                            onPress={updateSecurityTextEntry}>
                                            {data.secureTextEntry ? 
                                            <Feather
                                            style={{marginLeft:'auto'}}
                                                name="eye-off"
                                                color="grey"
                                                size={20}/>
                                            :
                                            <Feather
                                                style={{marginLeft:'auto'}}
                                                name="eye"
                                                color="grey"
                                                size={20}/>}
                                        </TouchableOpacity>
                                    </View>
                                   {/*  button submit */}
                                    <View style={styles.button}>
                                        <TouchableHighlight
                                            colors= {['#E73E01','#DF73FF']}
                                            onPress = {props.handleSubmit}
                                            style={styles.signIn}>
                                            <Text style={styles.textSignIn}>Connection</Text>
                                        </TouchableHighlight>
                                    </View>
                                    {/* Mot de Passe Oublié */}
                                    <View 
                                        style={{alignItems:'center',
                                        justifyContent:'center'}}>
                                        
                                        <Text 
                                            style={{color:'#E73E01',
                                            marginTop:10,
                                            fontStyle:'italic',
                                            fontWeight:'bold',
                                            }} 
                                             onPress>
                                            Mot de passe oublié?
                                        </Text>
                                    </View>

                                 </View>

                            </View>
                        )}
                         </Formik>
                </ScrollView>
                
                
           </View>
        </ScrollView>
    )
}

export default LoginScreen

