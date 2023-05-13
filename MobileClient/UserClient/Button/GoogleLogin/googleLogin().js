import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const User = () => {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      console.log('Google sign in error', error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.log('Google sign out error', error);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Welcome {user.user.name}!</Text>
          <TouchableOpacity style={styles.button} onPress={signOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Please Sign In</Text>
          <GoogleSigninButton style={styles.button} onPress={signIn} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 30,
  },
  button: {
    width: 192,
    height: 48,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 48,
  },
});

export default User;