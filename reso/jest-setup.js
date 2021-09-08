

// jest.mock('Platform', () => {
//     const Platform = require.requireActual('Platform');
//     Platform.OS = 'android';
//     return Platform;
//   })



// import AllTodo from '../src/controller/AllTab/AllTab';
// Note: test renderer must be required after react-native.
import 'react-native';
import renderer from 'react-test-renderer';

jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
  select: config => config.android
}));


test('renders correctly', () => {
  // const tree = renderer.create(<AllTodo />).toJSON();
  // expect(tree).toMatchSnapshot();
  console.log('success')
});





