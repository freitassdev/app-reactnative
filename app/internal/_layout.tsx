import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Home } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Text } from '@/components/Themed';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} {...props} />;
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
                tabBarStyle: { height: 80, backgroundColor: '#d9d9d9' }, //0b2344
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarItemStyle: {
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0,
                    padding: 0,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => <View style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                    }}>
                        <Ionicons name={focused ? "home" : "home-outline"} size={28} color={focused ? Colors.light.tint : '#16232f'} />
                        <Text style={{ color: focused ? Colors.light.tint : '#16232f' }}>Home</Text>
                    </View>,
                    tabBarShowLabel: false,

                    headerTransparent: true,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="warns"
                options={{
                    title: 'Avisos',
                    tabBarIcon: ({ focused }) => <View style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        
                    }}>
                        <Ionicons name={focused ? "chatbubbles" : "chatbubbles-outline"} size={28} color={focused ? Colors.light.tint : '#16232f'} />
                        <Text style={{ color: focused ? Colors.light.tint : '#16232f' }}>Avisos</Text>
                    </View>,
                    tabBarShowLabel: false,
                    headerTransparent: true,
                    headerShown: false,

                }}
            />
            <Tabs.Screen
                name="food-menu"
                options={{
                    title: 'Cardápio',
                    tabBarIcon: ({ focused }) => <View style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        
                    }}>
                        <Ionicons name={focused ? "restaurant" : "restaurant-outline"} size={28} color={focused ? Colors.light.tint : '#16232f'} />
                        <Text style={{ color: focused ? Colors.light.tint : '#16232f' }}>Cardápio</Text>
                    </View>,
                    tabBarShowLabel: false,
                    headerTransparent: true,
                    headerShown: false,

                }}
            />
            <Tabs.Screen
                name="student-area"
                options={{
                    title: 'Aluno',
                    tabBarIcon: ({ focused }) => <View style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        
                    }}>
                        <Ionicons name={focused ? "school" : "school-outline"} size={28} color={focused ? Colors.light.tint : '#16232f'} />
                        <Text style={{ color: focused ? Colors.light.tint : '#16232f' }}>Aluno</Text>
                    </View>,
                    tabBarShowLabel: false,
                    headerTransparent: true,
                    headerShown: false,

                }}
            />
        </Tabs>
    );
}
