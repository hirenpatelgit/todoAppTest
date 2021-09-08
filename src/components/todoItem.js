import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { COLORS } from '../../reso/themes/colors';
import { FONT_SCALE } from '../../reso/themes/fontStyle';
import { TodoInfo } from '../modal/todoInfo'; 

const getCompletedIcon = (isCom) => {
    if (isCom) {
        return require('../../reso/images/fillCircle.png')
    }
    else {
        return require('../../reso/images/circle.png')
    }
}

const renderDescription = (desc) => {
    if (String(desc).length > 0) {
        return <Text style={styles.txtDesc}>{desc}</Text>
    }
}

const renderProirtyFag = (pri) => {
    if (pri === 0) {
        return <Text></Text>
    }
    else if (pri === 1) {
        return <Text style={{ color: 'blue' }}>!</Text>
    }
    else if (pri === 2) {
        return <Text style={{ color: 'green' }}>!!</Text>
    }
    else if (pri === 3) {
        return <Text style={{ color: 'red' }}>!!!</Text>
    }
}

const TodoItem = (props) => {
    let info = TodoInfo(props.info)
    return <View style={styles.viewMain}>
        <View style={styles.viewInner}>
            <TouchableOpacity style={styles.touchOpa} onPress={() => { props.clickComplete(info.date) }}>
                <Image style={styles.imgCompleted} source={getCompletedIcon(info.isCompleted)} />
            </TouchableOpacity>
            <View>
                <Text style={[styles.txtTitle, info.isCompleted ? styles.txtCompleted : {}]}>{renderProirtyFag(info.priority)} {info.title}</Text>
                {renderDescription(info.descr)}
            </View>
        </View>

        <TouchableOpacity style={styles.touchOpa} onPress={() => { props.clickDelete(info.date) }}>
            <Image style={styles.imgDelete} source={require('../../reso/images/delete.png')} />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    imgCompleted: {
        width: scale(20),
        height: scale(20),
        resizeMode: 'contain',
        tintColor: COLORS.SECONDRY
    },
    imgDelete: {
        width: scale(18),
        height: scale(18),
        resizeMode: 'contain',
        tintColor: 'red'
    },
    viewMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),
        marginBottom: moderateScale(10)
    },
    viewInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtTitle: {
        fontSize: FONT_SCALE(0.018),
        fontWeight: 'bold'
    },
    touchOpa: {
        width: scale(30),
        height: scale(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtDesc: {
        fontSize: FONT_SCALE(0.014),
        color: COLORS.LIGHT_GRAY
    },
    txtCompleted: {
        textDecorationLine: 'line-through',
        textDecorationColor: COLORS.LIGHT_GRAY
    }
})

export default TodoItem;