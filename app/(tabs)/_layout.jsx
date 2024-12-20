import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className='items-center justify-start '>
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6 mt-2"
      />
      <Text 
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{fontSize: 8, lineHeight: 14}}
        >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen 
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
        />

      <Tabs.Screen 
        name='bookmark'
        options={{
          title: 'Salvos',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon 
              icon={icons.bookmark}
              color={color}
              name="Salvos"
              focused={focused}
            />
          )
        }}
        />

        <Tabs.Screen 
        name='create'
        options={{
          title: 'Criar',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon 
              icon={icons.create}
              color={color}
              name="Criar"
              focused={focused}
            />
          )
        }}
        />

        <Tabs.Screen 
        name='profile'
        options={{
          title: 'Perfil',
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabIcon 
              icon={icons.profile}
              color={color}
              name="Perfil"
              focused={focused}
            />
          )
        }}
        />

        
      </Tabs>
    </>

  )
}

export default TabsLayout