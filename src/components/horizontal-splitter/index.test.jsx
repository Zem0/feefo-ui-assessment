import React from 'react';
import {render, cleanup} from '@testing-library/react';
import HorizontalSplitter from '.';

afterEach(cleanup);

describe('HorizontalSplitter component', () => {
    test('should render HorizontalSplitter component', () => {
        const result = render(<HorizontalSplitter/>)
        expect(result.baseElement.getElementsByClassName('HorizontalSplitter') != null).toBeTruthy()
    })
})