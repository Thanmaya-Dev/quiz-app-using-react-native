import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    console.log('Password reset requested for:', email);
    navigation.navigate('Login');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Your Password?</Text>
      <Text style={styles.subText}>
        Enter your email to receive a password reset link.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={handlePasswordReset}
      >
        <Text style={styles.buttonText}>SEND LINK</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.linkText}>Back to Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DC143C',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  subText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#DC143C',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  loginContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
});

export default ForgotPasswordScreen;
