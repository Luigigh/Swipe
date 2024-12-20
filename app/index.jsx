import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-4xl font-pblack'>Swipe!</Text>
      <StatusBar style='auto'/>
      <Link href="/home" className="color-blue-500" >Vai pra Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({


})