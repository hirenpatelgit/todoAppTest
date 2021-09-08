import React, { useEffect, useRef } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import TodoItem from '../../components/todoItem';
import { removeValueFromLocal, setDataToLocalStorage } from '../../localStorage/localStorage';
import { sTodoList } from '../../localStorage/localStorageKey';
import { getTodoListFromLocal, getUpdatedArrayAfterCompleteFlag, getUpdatedArrayAfterDeleteItem, TodoInfo } from '../../modal/todoInfo';
import { updateList } from '../../store/reducer/addTodoReducer';

const AllTodoTab = ({ route, navigation }) => {

  const listTodo = useSelector((state) => state.rTodo.list)
  const dispatch = useDispatch()

  const isFirstTime = useRef(true)

  useEffect(async () => {
    // console.log('all list---->', listTodo)
    if (isFirstTime.current) {
      /**
       * get inital value
       */
      getDataForInit()
      // await removeValueFromLocal(sTodoList)
    }
    else {
      /**
       * set data to storage
       */
      await setDataToLocalStorage(sTodoList, JSON.stringify(listTodo))
    }

  }, [listTodo])

  async function getDataForInit() {
    let arrList = await getTodoListFromLocal()
    dispatch(updateList(Object.values(arrList)))
    isFirstTime.current = false;
  }

  const renderTodoItem = ({ item }) => {
    let todoInfo = TodoInfo(item)
    return <TodoItem
      info={todoInfo}
      clickDelete={(index) => btnDeleteClicked(index)}
      clickComplete={(index) => btnCompletedClicked(index)}
    />
  }

  function btnCompletedClicked(index) {
    // let arr = [...listTodo];
    // let indeof = arr.findIndex(e => e.date === index);
    // console.log('arr index----', indeof)
    // let info = { ...arr[indeof] }
    // if (info.isCompleted) {
    //   info.isCompleted = false
    // }
    // else {
    //   info.isCompleted = true
    // }

    // arr[indeof] = info;
    let arr = getUpdatedArrayAfterCompleteFlag([...listTodo],index)
    dispatch(updateList(arr))
  }

  function btnDeleteClicked(index) {
    // let arr = [...listTodo];
    // let indeof = arr.filter(e => e.date !== index);
    let indeof = getUpdatedArrayAfterDeleteItem([...listTodo],index)
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

export default AllTodoTab;
