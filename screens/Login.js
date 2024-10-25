// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Function to generate random email and password
  const handleLogin = () => {
    // Generate random email and password for demonstration
    const randomEmail = `user${Math.floor(Math.random() * 1000)}@example.com`;
    const randomPassword = 'password123'; // Example password
    setEmail(randomEmail);
    setPassword(randomPassword);
    
    // Navigate to MainApp instead of MainPage
    navigation.replace('MainApp'); // Using replace instead of navigate
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          {/* Back Button */}
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>

          {/* Header */}
          <Text style={styles.headerText}>Log in ✨</Text>
          <Text style={styles.subHeaderText}>
            Welcome back! Please enter your details.
          </Text>

          {/* Email Input */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#666" />
            <TextInput
              placeholder="Enter your email"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" />
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Remember Me & Forgot Password */}
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity 
              style={styles.rememberMeButton}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={rememberMe ? styles.checkedBox : styles.uncheckedBox}>
                {rememberMe && <Ionicons name="checkmark" size={14} color="#FFF" />}
              </View>
              <Text style={styles.rememberMeText}>Remember for 30 days</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot password</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin} // Updated to use handleLogin function
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>Or log in with</Text>
            <View style={styles.divider} />
          </View>

          {/* Social Login */}
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-apple" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-facebook" size={24} color="#4267B2" />
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#d4480c', // Updated color
  },
  subHeaderText: {
    color: '#666',
    marginTop: 8,
    marginBottom: 30,
  },
  label: {
    color: '#666',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#000',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberMeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkedBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#1E88E5',
    backgroundColor: '#1E88E5',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF',
    marginRight: 8,
  },
  rememberMeText: {
    color: '#666',
  },
  forgotPasswordText: {
    color: '#d4480c', // Updated color
  },
  loginButton: {
    backgroundColor: '#d4480c', // Updated color
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#666',
  },
  signUpLink: {
    color: '#1E88E5',
    fontWeight: '500',
  },
});

export default Login;