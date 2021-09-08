import React from 'react';
import { getDataFromLocalStorage } from '../localStorage/localStorage';
import { sTodoList } from '../localStorage/localStorageKey';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoInfo = (dict) => {
    let title = dict['title']
    let isCompleted = dict['isCompleted']
    let date = dict['date']
    let priority = dict['priority']
    let descr = dict['descr']
    return {
        title,
        isCompleted,
        date,
        priority,
        descr
    }
}

const getTodoListFromLocal = async () => {
    try {
        let data = await getDataFromLocalStorage(sTodoList);
        console.log('modal info---',data);
        if (data !== null && data.length > 0) {
            return JSON.parse(data)
        }
    } catch (e) {
        return [];
    }

    return [];

}

const getUpdatedArrayAfterCompleteFlag = (arr,index) => {
    let indeof = arr.findIndex(e => e.date === index);
    console.log('arr index----', indeof)
    let info = { ...arr[indeof] }
    if (info.isCompleted) {
      info.isCompleted = false
    }
    else {
      info.isCompleted = true
    }

    arr[indeof] = info;
    return arr;
}

const getUpdatedArrayAfterDeleteItem = (arr,index) => {
    let indeof = arr.filter(e => e.date !== index);
    return indeof;
}

export {
    TodoInfo,
    getTodoListFromLocal,
    getUpdatedArrayAfterCompleteFlag,
    getUpdatedArrayAfterDeleteItem
}