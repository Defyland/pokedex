import * as React from 'react';
import {render} from '@testing-library/react-native';
import {PokeballBackground} from '~/components/PokeballBackground';
import {ThemeProvider} from '~/styles/theme';

describe('Render PokeballBackground', () => {
  it('Should be PokeballBackground exist', () => {
    const {getByTestId} = render(<PokeballBackground />);
    const currentElement = getByTestId(`PokeballBackground`);
    expect(currentElement).toBeTruthy();
  });
  it('Should be PokeballBackground exist with correct props', () => {
    const {getByTestId} = render(
      <PokeballBackground size={20} color="#00000" />
    );
    const currentElement = getByTestId(`PokeballBackground`);
    expect(currentElement).toBeTruthy();
    expect(currentElement.props.size).toBe(20);
    expect(currentElement.props.color).toBe('#00000');
  });
});
