import { View, Text, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants';


const SignIn = () => {

  const [form, setform] = useState({email: '', password: ''})

  return (

      <SafeAreaView className='bg-primary h-full'>
        <ScrollView>

          <View className=' bg-white w-full justify-center h-full p-4 my-6'>

          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>

          
          </View>
        </ScrollView>


      </SafeAreaView>
  )
}

export default SignIn