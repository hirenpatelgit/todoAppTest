import React, { useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { SCREEN_ADD_TODO } from '../../navigation/screenName';

/***
 * bottom tab
 */
import BottomTab from '../../navigation/bottomTab';

/**
 * navigation container for add tab
 */
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

/**
 * styles
 */
import { Styles } from './styles';

/**
 * main
 * @param {*} param0 
 * @returns 
 */
const Dashboard = ({ route, navigation }) => {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  /**
   * navigate to add todo
   */
  function btnAddTodoClickd() {
    navigation.push(SCREEN_ADD_TODO);
  }

  /**
   * main
   */
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <BottomTab />
      <TouchableOpacity
        style={Styles.touchOpaAdd}
        onPress={() => btnAddTodoClickd()}>
        <Image source={require('../../../reso/images/plus.png')} style={Styles.imgPlus} />
      </TouchableOpacity>
    </NavigationContainer>
  );
};

export default Dashboard;
