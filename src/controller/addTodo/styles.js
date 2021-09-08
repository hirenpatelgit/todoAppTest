import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../reso/themes/colors';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnAdd: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10
    },
    inputField: {
        borderColor: COLORS.GRAY,
        borderWidth: 1,
        borderRadius: scale(5),
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),
        height: verticalScale(40)
    },
    viewInner: {
        marginLeft: moderateScale(10),
        marginRight: moderateScale(10),
    },
    inputArea: {
        height: verticalScale(70)
    },
    viewPriority: {
        justifyContent: 'center'
    },
    txtErrorMsg: {
        textAlign: 'center',
        width: '100%',
        color: 'red',
        paddingTop: moderateScale(20)
    }
})

export {
    styles
}