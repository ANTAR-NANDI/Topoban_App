import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '@/constant/theme';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarShowLabel: false,
        headerShown:false,
        tabBarActiveTintColor:COLORS.primary,
        tabBarInactiveTintColor:COLORS.gray,
        tabBarStyle: { 
          borderTopWidth:0,
          position:"absolute",
          elevation:0,
          height:40,
          backgroundColor: 'black', // Optional: Customize tab bar background color
        },

      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size || 24} color={color || COLORS.primary} />
          ),
        }}
      />

      {/* Bookmarks Tab */}
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bookmarks" size={size || 24} color={color || COLORS.primary} />
          ),
        }}
      />
       {/* Create Tab */}
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-circle" size={size || 24} color={color || COLORS.primary} />
          ),
        }}
      />

      {/* Notifications Tab */}
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={size || 24} color={color || COLORS.primary} />
          ),
        }}
      />

     

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size || 24} color={color || COLORS.primary} />
          ),
        }}
      />
    </Tabs>
  );
}
