/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';
// import AllTodo from '../src/controller/AllTab/AllTab';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { Platform } from 'react-native';

// if (Platform.OS !== 'ios') {
//   // ✅ Works in tests!
//   console.log('Everything is great! 😁')
//   it('renders correctly', () => {
//     renderer.create(<App />);
//   });


//   test('renders correctly', () => {
//     const tree = renderer.create(<AllTodo />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// }


// jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
//   OS: 'android',
//   select: config => config.android,
// }));

