import React from 'react';

// Navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Componentes Propios
import Home from '../../screens/Home';
import Settings from '../../screens/Settings';
import AppPomodoro from '../../components/pomodoro/AppPomodoro';

const Tab = createBottomTabNavigator();

function MyBottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Pomodoro" component={AppPomodoro} />
        </Tab.Navigator>
    );
}

// mismo nombre fichero
export default function NavigationTabs() {
    return (
        <NavigationContainer>
            <MyBottomTabs />
        </NavigationContainer>
    );
}
