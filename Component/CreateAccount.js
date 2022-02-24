import React from 'react'
import * as Animatable from 'react-native-animatable'
import {FontAwesome5} from '@expo/vector-icons'
import {Formik} from 'formik'
import { FontAwesome,Feather } from '@expo/vector-icons'
import {Text,View,ScrollView,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler'
import { createStackNavigator,createAppContainer } from '@react-navigation/stack'
//import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/CreateAccountStyle'
import * as yup from  'yup'


const ReviewSchema = yup.object({
    email: yup.string()
              .email("Vous devez entrer un email valide")
              .required("Un Email est requis"),
            // .test('nom-variable-identifiante','Message d'érreur',(val) =>{
            //    return   true or false en fonction du test de validation
            //}
    password:yup.string()
                .required("Un mot de passe est requis")
                .min(6,"Votre mot de passe doit possédr au moins 6 caractères"),
    firstName:yup.string()
           .required("Votre nom est requis"),
    lastName:yup.string()
              .required("Votre prénom est requis")
    
})


const CreateAccount = ({navigation}) => {

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
            <View>
            {/* <FontAwesome5 
                    name="angles-left" size={10} color="black" /> */}
            </View>

           <View style={styles.footer}>
                <View style={styles.icon}>
                    <FontAwesome5 
                    name="school" size={90} color="black" />
                    <Text style={styles.nomApp}>EasyBuy</Text>
                    </View>
                <Text style={styles.title}>
                    Créez votre compte
                    </Text>
                <View>
                    <Formik
                        initialValues = {{email: '',firstName:'',lastName:'',password:''/* ,Tel:'' */}}
                        validationSchema={ReviewSchema}
                        onSubmit={(values,actions) => {
                                actions.resetForm()
                                console.log(values)
                                fetch('https://easy-buy-po.herokuapp.com/users',{ 
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept':'application/json'
                                      },
                                   body:JSON.stringify(values)
                                   
                               })
                               //.then(response => response)
                               .then(response => console.log(response.json()))
                               .then( navigation.navigate("Login"))
                               .catch(alert("ERROR"))
                               //.then(json => {entervalidEmail}) //A FAIRE
                               /*. catch(alert("ERROR")) */
                       
                                //Redirection
                               
                        }}>
                        {(props) => (  /* Champs du formulaire */
                            
                            

                            <View style={{marginTop: 45}}>
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
                                        onChangeText={props.handleChange('email')}
                                        value={props.values.email}
                                        keyboardType='email-address'
                                        onBlur={props.handleBlur('email')}/>
                                </View>
                                <Text>{props.errors.email}</Text>

                                {/* Noms */}
                                <View style={{marginTop:25}}>
                                    <Text>Noms</Text>
                                    <View style={styles.action}> 
                                        <FontAwesome 
                                        name='user-o'
                                        color="black"
                                        size={20}/>
                                        <TextInput
                                            style={{marginLeft:10}}
                                            placeholder="Entrez votre nom"
                                            onChangeText={props.handleChange('firstName')}
                                            value={props.values.firstName}
                                            onBlur={props.handleBlur('firstName')}
                                            />
                                    </View>
                                </View>
                                <Text>{props.errors.firstName}</Text>

                               {/*  {Prénoms} */}
                                <View style={{marginTop:25}}>
                                    <Text>Prénoms</Text>
                                    <View style={styles.action}> 
                                        <FontAwesome 
                                        name='user-o'
                                        color="black"
                                        size={20}/>
                                        <TextInput
                                            style={{marginLeft:10}}
                                            placeholder="Entrez votre prénom"
                                            onChangeText={props.handleChange('lastName')}
                                            value={props.values.lastName}
                                            onBlur={props.handleBlur('lastName')}
                                            />
                                    </View>
                                </View>
                                <Text>{props.errors.lastName}</Text>

                                {/* Password */}
                                <View style={{marginTop:25,display:'flex',flexDirection:'column'}}>
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
                                            secureTextEntry={data.secureTextEntry}
                                            onBlur={props.handleBlur('password')}/>
                                        <TouchableOpacity
                                            style={{flex:1}}
                                            onPress={updateSecurityTextEntry}>
                                            {data.secureTextEntry ? 
                                            <Feather
                                            style={styles.feather}
                                                name="eye-off"
                                                color="grey"
                                                size={20}/>
                                            :
                                            <Feather
                                                style={styles.feather}
                                                name="eye"
                                                color="grey"
                                                size={20}/>}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text>{props.errors.password}</Text>

                                   {/*  Numero de téléphone */}

                               {/*  <View style={{marginTop:20}}>
                                    <Text>Tel</Text>
                                    <View style={styles.action}> 
                                        <FontAwesome 
                                        name='phone'
                                        color="#0000000"
                                        size={20}/>
                                        <TextInput
                                            style={{marginLeft:10}}
                                            placeholder="Entrez votre prénom"
                                            onChangeText={props.handleChange('Tel')}
                                            value={props.values.Tel}
                                            keyboardType='keyboardType'/>
                                    </View>
                                </View> */}

                                   {/*  button submit */}
                                    <View>
                                        <TouchableHighlight
                                            colors= {['#E73E01','#DF73FF']}
                                            onPress = {props.handleSubmit}
                                            style={styles.signUp}>
                                            <Text style={styles.textSignUp}>Valider</Text>
                                        </TouchableHighlight>
                                    </View>
                                  {/*   <View 
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
                                    </View> */}

                                 

                            </View>
                        )}
                         </Formik>
                </View>
                
                
           </View>
        </ScrollView>
    )
}

export default CreateAccount

