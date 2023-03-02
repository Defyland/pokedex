import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Subheader} from '~/components/Subheader';

const FN = jest.fn();

describe('Render Subheader', () => {
  it('Should be Subheader exist', () => {
    const {getByTestId} = render(<Subheader filter="all" setFilter={FN} />);
    const currentElement = getByTestId(`Subheader`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be Subheader exist with correct props', () => {
    const {getByTestId} = render(<Subheader filter="all" setFilter={FN} />);
    const pressElementOne = getByTestId(`Subheader:Press:All`);
    const pressElementTwo = getByTestId(`Subheader:Press:Catchs`);
    expect(pressElementOne).toBeTruthy();
    fireEvent.press(pressElementOne);
    expect(FN).toBeCalled();
    expect(FN).toHaveBeenCalledWith('all');
    expect(pressElementTwo).toBeTruthy();
    fireEvent.press(pressElementTwo);
    expect(FN).toBeCalled();
    expect(FN).toHaveBeenCalledWith('catchs');
  });
});
