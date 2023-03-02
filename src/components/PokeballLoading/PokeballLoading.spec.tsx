import * as React from 'react';
import {render} from '@testing-library/react-native';
import {PokeballLoading} from '~/components/PokeballLoading';

describe('Render PokeballLoading', () => {
  it('Should be PokeballLoading exist', () => {
    const {getByTestId} = render(<PokeballLoading />);
    const currentElement = getByTestId(`PokeballLoading`);
    expect(currentElement).toBeTruthy();
  });
  it('Should be PokeballLoading exist with correct props', () => {
    const {getByTestId} = render(<PokeballLoading size={50} />);
    const currentElement = getByTestId(`PokeballLoading`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.children.props.style.width).toBe(50);
    expect(currentElement.props.children.props.style.height).toBe(50);
  });
});
