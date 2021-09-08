import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '../../../reso/themes/colors';
import { FONT_SCALE } from '../../../reso/themes/fontStyle';

const btnPriorityClicked = (props, index) => {
    props.setPriority(index)
}

const commonRow = (props, title, index) => {
    return <TouchableOpacity onPress={() => btnPriorityClicked(props, index)} style={styles.touchOpa}>
        <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
}

const PriorityDropdown = (props) => {
    return <View style={styles.viewMain}>
        {commonRow(props, 'None', 0)}
        {commonRow(props, 'Low', 1)}
        {commonRow(props, 'Medium', 2)}
        {commonRow(props, 'High', 3)}
    </View>
}


const styles = StyleSheet.create({
    viewMain: {
        width: '100%',
        marginTop: moderateScale(5)
    },
    touchOpa: {
        height: verticalScale(30),
        borderBottomColor: COLORS.GRAY,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
        borderRadius: scale(5)
    },
    txtTitle: {
        fontSize: FONT_SCALE(0.016)
    }
})

export {
    PriorityDropdown
}