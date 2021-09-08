import React, { useEffect, useRef } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import TodoItem from '../../components/todoItem';
import { getUpdatedArrayAfterCompleteFlag, getUpdatedArrayAfterDeleteItem, TodoInfo } from '../../modal/todoInfo';
import { updateList } from '../../store/reducer/addTodoReducer';

const CompletedTodoTab = ({ route, navigation }) => {

  const listTodo = useSelector((state) => state.rTodo.list)
  const dispatch = useDispatch()

  const renderTodoItem = ({ item }) => {
    let todoInfo = TodoInfo(item)
    if (todoInfo.isCompleted) {
      return <TodoItem
        info={todoInfo}
        clickDelete={(index) => btnDeleteClicked(index)}
        clickComplete={(index) => btnCompletedClicked(index)}
      />
    }
  }

  function btnCompletedClicked(index) {
    let arr = getUpdatedArrayAfterCompleteFlag([...listTodo], index)
    dispatch(updateList(arr))
  }

  function btnDeleteClicked(index) {
    // let arr = [...listTodo];
    // let indeof = arr.filter(e => e.date !== index);
    let indeof = getUpdatedArrayAfterDeleteItem([...listTodo], index)
    dispatch(updateList(indeof))
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ height: 10 }}></View>
      <FlatList
        data={listTodo}
        renderItem={renderTodoItem}
        keyExtractor={item => item.date}
      />
    </SafeAreaView>
  );
};

export default CompletedTodoTab;
