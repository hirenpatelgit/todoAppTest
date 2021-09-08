import 'react-native';
import React from 'react';
import Index from '../App';
import addTodo from '../src/controller/addTodo/index';
import { render, cleanup } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers()

it('renders correctly', () => {
    console.log('success file')
    const tree = renderer.create(
        <Index />
    );
});

it('Renders snapshot as expected', async () => {
    const tree = render(<addTodo />);
    // console.log('get id-----',getByTestId)
    expect(tree).toMatchSnapshot();
});