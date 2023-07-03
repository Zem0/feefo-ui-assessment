import React from 'react';
import {render, cleanup} from '@testing-library/react';
import VerticalSplitter from '.';

afterEach(cleanup);

describe('HorizontalSplitter component', () => {
    test('should render HorizontalSplitter component', () => {
        const result = render(<VerticalSplitter/>)
        expect(result.baseElement.getElementsByClassName('VerticalSplitter') != null).toBeTruthy()
    })
})