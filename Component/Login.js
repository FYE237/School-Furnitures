import React from 'react'
import * as Animatable from 'react-native-animatable'
import {FontAwesome5} from '@expo/vector-icons'
import {Formik} from 'formik'
import { FontAwesome,Feather } from '@expo/vector-icons'
import {Text,View,ScrollView,TouchableOpacity,Modal,Image, Dimensions} from 'react-native'
import { TextInput, TouchableHighlight } from 'react-native'
import { createStackNavigator,createAppContainer } from '@react-navigation/stack'
//import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/LoginStyle'
import * as yup from  'yup'


const ReviewSchema = yup.object({
    Email: yup.string()
              .email("Vous devez entrer un email valide")
              .required("Un Email est requis"),
            // .test('nom-variable-identifiante','Message d'érreur',(val) =>{
            //    return   true or false en fonction du test de validation
            //}
    password:yup.string()
                .required("Un mot de passe est requis")
                .min(8,"Votre mot de passe doit possédr au moins 8 caractères")
    
})


const LoginScreen = ({navigation}) => {

    const [data,setData]=React.useState({
        Email:'',
        secureTextEntry:true,
        isValid:true,
        modalOpen:false,
        validEmail:true
    })

    const updateSecurityTextEntry = ()=> {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const handleEmail = (text) => {
        setData({
            ...data,
            Email: text
        })
    }

    const enterValidEmail = () => {
        setData({
            ...data,
            validEmail: !data.validEmail
        })
    }

    const closeModal = () => {
        setData({
            ...data,
            modalOpen: !data.modalOpen
        })   
    }

    const sendEmail = () => {
        if(data.Email != '') 
            {   
                console.log(data.Email)
               /*  fetch('',{ 
                     method: "POST",
                    body:JSON.stringify({
                        Email: data.Email
                    }),
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      }
                })
                .then(response => response.json())
                .then(json => {entervalidEmail}) //A FAIRE
                .catch() *///A FAIRE
                setData({
                    ...data,
                    modalOpen: !data.modalOpen
                })
            }
        else {
            alert("Veuillez remplir le champ email")
        }
    }

    return(

        <ScrollView style={styles.container}
            showVerticalScrollIndicator={false}>
            <Modal 
                transparent={true}
                visible={data.modalOpen}>
                    <View style={{backgroundColor:'#000000aa',flex:1,}}>
                        <View style={{backgroundColor:"#ffffff",alignSelf:"center",
                                borderRadius:10,flexDirection:'column',
                                 marginTop:Dimensions.get('window').height/3.5,
                                 width:Dimensions.get('window').height/2,
                                 height:Dimensions.get('window').height/2}}>
                            <View style={{justifyContent:'center',alignSelf:'stretch',marginRight:10}}>
                                <View style={{alignItems:'center'}}>
                                    <FontAwesome5
                                        name="lock" 
                                        size={100}
                                        color='black'
                                        style= {{alignSelf:'center'}}
                                    />
                                    <Text style={styles.titleModal}>Réinitialiser votre mot de passe</Text>
                                </View>
                            </View>
                                <View style={styles.containerModal}>
                                    <Text style={{marginLeft:10}}>
                                        Entrez votre  adresse email. Un mail contenant la procédure à suivre vous y sera envoyé  
                                    </Text>
                                    <View style={styles.actionModal}> 
                                        <FontAwesome 
                                            name='user-o'
                                            color="black"
                                            size={20}/>
                                        <TextInput
                                            style={{marginLeft:10}}
                                            placeholder="Entrez votre E-mail"
                                            onChangeText={handleEmail}
                                            keyboardType='email-address'/>
                                    </View>
                                        {/*  buttons */}
                                    <View style={styles.buttonsModal}>
                                        <TouchableHighlight
                                            colors= {['#E73E01','#DF73FF']}
                                            style={styles.signInModal}
                                            onPress={sendEmail}>
                                            <Text style={styles.textSignIn}>Envoyer</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            colors= {['#E73E01','#DF73FF']}
                                            style={styles.exitModal}
                                            onPress={closeModal}>
                                            <Text style={styles.textQuit}>Annuler</Text>
                                        </TouchableHighlight>
                                    </View> 
                            
                                </View>
                            
                        </View>
                    </View>
            </Modal>
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
                        validationSchema={ReviewSchema}
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
                                    color="black"
                                    size={20}/>
                                    <TextInput
                                        style={{marginLeft:10}}
                                        placeholder="Entrez votre E-mail"
                                        onChangeText={props.handleChange('Email')}
                                        value={props.values.Email}
                                        keyboardType='email-address'/>
                                </View>
                                <Text>{props.errors.Email}</Text>
                                
                                {/* Password */}
                                <View style={{marginTop:30}}>
                                    <Text>Mot de passe</Text>
                                    <View style={styles.action}>
                                        <FontAwesome 
                                        name='lock'
                                        color="black"
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
                                    <Text>{props.errors.password}</Text>
                                    
                                     {/* Mot de Passe Oublié */}
                                     <View 
                                        style={{alignItems:'flex-end',
                                        justifyContent:'flex-end'}}>
                                        
                                        <Text 
                                            style={{color:'#E73E01',
                                            marginTop:10,
                                            fontStyle:'italic',
                                            fontWeight:'bold',
                                            }} 
                                             onPress={()=>setData({
                                                ...data,
                                                modalOpen: !data.modalOpen
                                            })}>
                                            Mot de passe oublié?
                                        </Text>
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

