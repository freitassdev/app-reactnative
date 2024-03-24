import React from 'react';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} /> ;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
                tabBarStyle: { height: 80 },
                tabBarLabelStyle: { marginTop: -12 },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Noticias',
                    tabBarIcon: ({ color }) => <TabBarIcon name="envelope" color={color} />,
                    headerTransparent: true,
                    headerShown: false,
                    
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Noticias',
                    tabBarIcon: ({ color }) => <TabBarIcon name="user-circle" color={color}/>,
                    headerTransparent: true,
                    headerShown: false,
                    
                }}
            />
            <Tabs.Screen
                name="food-menu"
                options={{
                    title: 'Cardápio',
                    tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
                    headerTransparent: true,
                    headerShown: false,
                    
                }}
            />
            <Tabs.Screen
                name="student-area"
                options={{
                    title: 'Área do Aluno',	
                    tabBarIcon: ({ color }) => <TabBarIcon name="graduation-cap" color={color} />,
                    headerTransparent: true,
                    headerShown: false,
                    
                }}
            />
        </Tabs>
    );
}
