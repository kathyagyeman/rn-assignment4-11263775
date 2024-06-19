import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Popularjob = ({ route }) => {
  

  return (
   
        <View>
            <View style={{marginBottom:30,marginTop:30}}>
         <View style={{flexDirection: 'row', fontSize:18,fontWeight:"bold"}}>
        <Text style={styles.featured}>Popular Jobs</Text>
        </View>
        
        <Text style={styles.seeall}>See all</Text></View>

<ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalscrollContainer} > 

   <View style={{flexDirection:'column', }}>

        <View style={{backgroundColor: '#FBFFFF',marginBottom:30 , padding:10, borderRadius: 12,  height:160 }}>
          <View style= {{flexDirection: 'row', marginBottom:'auto'}}>
            <View style={{backgroundColor: 'white', width: 30, borderRadius: 7, height:30, alignItems:'center', justifyContent: 'center' }}>
                <Image style={styles.instagram} source={require('./assets/instagram.jpeg')} />
            </View>
            <View style={styles.facebook}>
            <Text>Backend Developer</Text>
            <Text>Instagram</Text>
            </View>
            </View>

            <View style= {{flexDirection: 'row',}}>
            <Text style={styles.money}>$180,000</Text>
            <Text style={styles.location}>Peckham, UK </Text>
            </View>

        </View>

        
        <View style={{backgroundColor: '#FBFFFF',marginBottom:30 , padding:10, borderRadius: 12,  height:160 }}>
          <View style= {{flexDirection: 'row', marginBottom:'auto'}}>
            <View style={{backgroundColor: 'white', width: 30, borderRadius: 7, height:30, alignItems:'center', justifyContent: 'center' }}>
                <Image  source={require('./assets/google.png')} />
            </View>
            <View style={styles.facebook}>
            <Text>Project Manager</Text>
            <Text>Google</Text>
            </View>
            </View>

            <View style= {{flexDirection: 'row',}}>
            <Text style={styles.money}>$400,000</Text>
            <Text style={styles.location}>Mumbai, India </Text>
            </View>

        </View>

        <View style={{backgroundColor: '#FBFFFF',marginBottom:30 , padding:10, borderRadius: 12,  height:160 }}>
          <View style= {{flexDirection: 'row', marginBottom:'auto'}}>
            <View style={{backgroundColor: 'white', width: 30, borderRadius: 7, height:30, alignItems:'center', justifyContent: 'center' }}>
                <Image style={styles.pinterest} source={require('./assets/pinterest.png')} />
            </View>
            <View style={styles.facebook}>
            <Text>Database Analyst</Text>
            <Text>Pinterest</Text>
            </View>
            </View>

            <View style= {{flexDirection: 'row',}}>
            <Text style={styles.money}>$300,000</Text>
            <Text style={styles.location}>Atlanta, America </Text>
            </View>

        </View>

        <View style={{backgroundColor: '#FBFFFF',marginBottom:30 , padding:10, borderRadius: 12,  height:160 }}>
          <View style= {{flexDirection: 'row', marginBottom:'auto'}}>
            <View style={{backgroundColor: 'white', width: 30, borderRadius: 7, height:30, alignItems:'center', justifyContent: 'center' }}>
                <Image style={styles.github} source={require('./assets/github.png')} />
            </View>
            <View style={styles.facebook}>
            <Text>Quality Tester</Text>
            <Text>GitHub</Text>
            </View>
            </View>

            <View style= {{flexDirection: 'row',}}>
            <Text style={styles.money}>$160,000</Text>
            <Text style={styles.location}>Lagos, Nigeria </Text>
            </View>

        </View>

        <View style={{backgroundColor: '#FBFFFF',marginBottom:30 , padding:10, borderRadius: 12,  height:160 }}>
          <View style= {{flexDirection: 'row', marginBottom:'auto'}}>
            <View style={{backgroundColor: 'white', width: 30, borderRadius: 7, height:30, alignItems:'center', justifyContent: 'center' }}>
                <Image style={styles.klm} source={require('./assets/klm.png')} />
            </View>
            <View style={styles.facebook}>
            <Text>Mechanic</Text>
            <Text>KLM</Text>
            </View>
            </View>

            <View style= {{flexDirection: 'row',}}>
            <Text style={styles.money}>$480,000</Text>
            <Text style={styles.location}> Manchester,UK </Text>
            </View>

        </View>

        <View style={{backgroundColor: '#FBFFFF',marginBottom:30 , padding:10, borderRadius: 12,  height:160 }}>
          <View style= {{flexDirection: 'row', marginBottom:'auto'}}>
            <View style={{backgroundColor: 'white', width: 30, borderRadius: 7, height:30, alignItems:'center', justifyContent: 'center' }}>
                <Image style={styles.mattel} source={require('./assets/mattel.jpeg')} />
            </View>
            <View style={styles.facebook}>
            <Text>Marketing Manager</Text>
            <Text>Mattel</Text>
            </View>
            </View>

            <View style= {{flexDirection: 'row',}}>
            <Text style={styles.money}>$250,000</Text>
            <Text style={styles.location}>New York, America </Text>
            </View>

        </View>
        <View style={{backgroundColor: '#FBFFFF',marginBottom:30 , padding:10, borderRadius: 12,  height:160 }}>
          <View style= {{flexDirection: 'row', marginBottom:'auto'}}>
            <View style={{backgroundColor: 'white', width: 30, borderRadius: 7, height:30, alignItems:'center', justifyContent: 'center' }}>
                <Image source={require('./assets/Vector.png')} />
            </View>
            <View style={styles.facebook}>
            <Text>Software Engineer</Text>
            <Text>Facebook</Text>
            </View>
            </View>

            <View style= {{flexDirection: 'row',}}>
            <Text style={styles.money}>$180,000</Text>
            <Text style={styles.location}>Accra, Ghana </Text>
            </View>

        </View>

        <View style={{backgroundColor: '#FBFFFF',marginBottom:30 , padding:10, borderRadius: 12,  height:160 }}>
          <View style= {{flexDirection: 'row', marginBottom:'auto'}}>
            <View style={{backgroundColor: 'white', width: 30, borderRadius: 7, height:30, alignItems:'center', justifyContent: 'center' }}>
                <Image style={styles.honda} source={require('./assets/honda.png')} />
            </View>
            <View style={styles.facebook}>
            <Text>Sales Person</Text>
            <Text>Honda</Text>
            </View>
            </View>

            <View style= {{flexDirection: 'row',}}>
            <Text style={styles.money}>$300,000</Text>
            <Text style={styles.location}>Kumasi, Ghana </Text>
            </View>

        </View>
        </View>
        </ScrollView>
        </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flex:1,
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
 profileImage: {
    width: '100%',
    height: '100%',
    resizeMode:'cover',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input:{
    flex: 1,
    padding: 9,
    marginLeft: 10, 
    backgroundColor: "#E1E2E6",
    borderRadius: 15,
    borderColor: "#E1E2E6",
 },
 filterButton: {
    backgroundColor: "#E1E2E6",
    borderRadius: 12,
    padding: 15,
    marginLeft: 10,
  },

featured: {
    fontWeight: 'bold',
     fontSize: 15,
     marginLeft: 10,
     
},
seeall:{
     fontSize: 10,
     color: 'gray',
     flexDirection: 'row',
     alignSelf: 'flex-end',
     marginRight: 20,
  },
  facebook: {
    marginLeft: 20
  },
  
  location: {
marginLeft: 'auto'
  },

  instagram:{
    width: 30,
    height: 30,
    borderRadius: 10,
},

pinterest: {
    width: 30,
    height: 30,
},
github: {
    width: 30,
    height: 30,
    borderRadius: 10,
},
klm: {
    width: 30,
    height: 30,
},
mattel: {
    width: 30,
    height: 30,
    borderRadius: 10,
},

honda: {
    width: 20,
    height: 20,
},





});

export default Popularjob;