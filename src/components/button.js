import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FONT_SCALE } from '../../reso/themes/fontStyle';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../reso/themes/colors';

/**
 * pass 3 props
 * title
 * btnClicked = click event 
 * custStyle = if you want add extra style then pass in this props
 * @param {*} props 
 * @returns 
 */

const CommonButton = (props) => {
    return <TouchableOpacity style={[styles.touchOpa, props.custStyle]} onPress={props.btnClicked}>
        <Text style={styles.txtTitle}>{props.title}</Text>
    </TouchableOpacity>
}

/**
 * styles
 */
const styles = StyleSheet.create({
    txtTitle: {
        fontSize: FONT_SCALE(0.021),
        color: COLORS.WHITE
    },
    touchOpa: {
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(44),
        backgroundColor: COLORS.SECONDRY,
        borderRadius: scale(5),
    }
});

export {
    CommonButton
}