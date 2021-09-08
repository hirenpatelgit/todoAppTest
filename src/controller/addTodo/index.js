import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput, ScrollView, Alert } from 'react-native';

import { useDispatch } from 'react-redux'
import { COLORS } from '../../../reso/themes/colors';
import { INPUT_STYLE } from '../../../reso/themes/fontStyle';
import { CommonButton } from '../../components/button';
import CommonView from '../../components/commonView';
import { addTodoList } from '../../store/reducer/addTodoReducer';
import { PriorityDropdown } from './priorityDropdown';

import { styles } from './styles';

/**
 * main
 * @param {*} param0 
 * @returns 
 */
const AddTodo = ({ route, navigation }) => {

  const [txtTitle, setTxtTitle] = useState('')
  const [selectPriority, setSelectPriority] = useState(-1)
  const [txtDescr, setTxtDescr] = useState('')
  const [isShowPriority, setIsShowPriority] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const dispatch = useDispatch()

  /**
   * btn add action
   */
  function btnAddClicked() {
    if (txtTitle.replace(/ /g, '').length > 0) {
      var currentTimeInSeconds = Math.floor(Date.now() / 1000);
      let todoInfo = {
        'title': txtTitle,
        'isCompleted': false,
        'date': currentTimeInSeconds,
        'priority': selectPriority === -1 ? 0 : selectPriority,
        'descr': txtDescr
      }
      dispatch(addTodoList(todoInfo))
      Alert.alert('Success!', 'New Todo list added successfully.', [
        {
          text: "Continue",
          onPress: () => navigation.pop(),
          style: "cancel"
        },
      ])
    }
    else {
      setErrorMsg(preview => preview = "Please enter title")
      setTimeout(() => {
        setErrorMsg(preview => preview = "")
      }, 5000)
    }
  }

  /**
   * get priority string
   * @returns 
   */
  const getPriorityTitle = () => {
    switch (selectPriority) {
      case -1:
        return 'Select Priority'
      case 0:
        return 'None'
      case 1:
        return 'Low'
      case 2:
        return 'Medium'
      case 3:
        return 'High'
      default:
        return 'Select Priority'
    }
  }

  const renderGapView = () => {
    return <View style={{ height: 10 }}></View>
  }

  const renderPriorityDropdown = () => {
    if (isShowPriority) {
      return <PriorityDropdown setPriority={(index) => {
        setSelectPriority(preview => preview = index)
        setIsShowPriority(preview => !preview)
      }} />
    }
  }

  /**
   * btn action
   */
  function btnSelectPriority() {
    setIsShowPriority(preview => !preview)
  }

  const renderErrorMessage = () => {
    if (errorMsg.length > 0) {
      return <Text style={styles.txtErrorMsg}>{errorMsg}</Text>
    }
  }

  /**
   * main
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewInner}>
          {renderGapView()}
          <TextInput
            placeholder='title'
            placeholderTextColor={COLORS.GRAY}
            style={[styles.inputField, INPUT_STYLE.textInput]}
            onChangeText={(text) => {
              setTxtTitle(preview => preview = text)
            }}
          />
          {renderGapView()}
          <TextInput
            placeholder='Description'
            placeholderTextColor={COLORS.GRAY}
            multiline={true}
            numberOfLines={5}
            style={[styles.inputField, styles.inputArea, INPUT_STYLE.textInput]}
            onChangeText={(text) => {
              setTxtDescr(preview => preview = text)
            }}
          />
          {renderGapView()}
          <TouchableOpacity onPress={() => btnSelectPriority()} style={[styles.inputField, styles.viewPriority]}>
            <Text style={INPUT_STYLE.textInput}>{getPriorityTitle()}</Text>
          </TouchableOpacity>
          {renderPriorityDropdown()}
          {renderErrorMessage()}
        </View>
      </ScrollView>
      <CommonButton title="Add" btnClicked={() => btnAddClicked()} custStyle={styles.btnAdd} />
    </SafeAreaView >
  );
};

export default AddTodo;
