import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const CommonView = () => {
    return <View style={styles.viewContainer} />
}

const styles = StyleSheet.create({
    viewContainer: {
        marginLeft: moderateScale(10),
        marginRight: moderateScale(10),
        backgroundColor: 'red',
        height: '100%'
    }
})


export default CommonView;