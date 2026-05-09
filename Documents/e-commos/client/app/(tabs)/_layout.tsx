import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather, Ionicons } from '@expo/vector-icons'
import{COLORS} from '@/constants'
import { useCart } from '@/context/CartContext'

export default function TabLayout() {

  const { cartItems } = useCart()

  return (
  <Tabs
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: '#bcbce4',
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        height: 40,
        paddingBottom: 8,
    },
  }}
  >
    <Tabs.Screen name='index' options={{ 
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean })=> <Ionicons name={focused ? 'home' : 'home-outline'} size={21} color={color}/>
    }} />
     <Tabs.Screen name='cart' options={{ 
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean })=> 
          <View className='relative'>
            <Feather name={focused ? 'shopping-cart' : 'shopping-cart'} size={21} color={color}/>

             {cartItems?.length > 0 &&
            <View className='absolute -top-2 -right-2 bg-accent size-3 rounded-full items-center justify-center'>
              <Ionicons name='ellipse' size={6} color="white"/>
            </View>
            }
            
          </View>
    }} />
     <Tabs.Screen name='favorites' options={{ 
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean })=> <Feather name={focused ? 'heart' : 'heart'} size={21} color={color}/>
    }} />
     <Tabs.Screen name='profile' options={{ 
        tabBarIcon: ({ color, focused }: { color: string; focused: boolean })=> <Ionicons name={focused ? 'person' : 'person-outline'} size={21} color={color}/>
    }} />
  </Tabs>
  )
}