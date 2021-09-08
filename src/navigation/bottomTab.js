/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllTodo from '../controller/AllTab/AllTab';
import ActiveTodo from '../controller/activeTab/activeTab';
import CompletedTodo from '../controller/completedTab/completedTab';
import { COLORS } from '../../reso/themes/colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const renderTabImage = (imgSrc, color, size) => {
    return (
      <Image
        source={imgSrc}
        style={{
          height: size,
          width: size,
          resizeMode: 'contain',
          tintColor: color,
        }}
      />
    );
  };

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: 'gray' },
      tabBarActiveTintColor: COLORS.PRIMARY,
      tabBarInactiveTintColor: COLORS.GRAY,
    }}>
      <Tab.Screen
        name="All"
        component={AllTodo}
        options={{
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) =>
            renderTabImage(
              require('../../reso/images/home.png'),
              color,
              size,
            ),
        }}
      />
      <Tab.Screen
        name="Active"
        component={ActiveTodo}
        options={{
          tabBarLabel: 'Active',
          tabBarIcon: ({ color, size }) =>
            renderTabImage(
              require('../../reso/images/active.png'),
              color,
              size,
            ),
        }}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedTodo}
        options={{
          tabBarLabel: 'Completed',
          tabBarIcon: ({ color, size }) =>
            renderTabImage(
              require('../../reso/images/completed.png'),
              color,
              size,
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
