import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Header} from '~/components/Header';
import {ThemeProvider} from '~/styles/theme';

jest.mock('axios', () => {
  return {
    AxiosReponse: {},
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: () => {},
    useSelector: () => {},
  };
});

const Component = () => (
  <ThemeProvider>
    <Header />
  </ThemeProvider>
);

describe('Render Header', () => {
  it('Should be Header exist', () => {
    const {getByTestId} = render(<Component />);
    const headerElement = getByTestId(`Header`);
    const titleElement = getByTestId(`Header:Title`);
    const searchElement = getByTestId(`Header:Search`);
    expect(headerElement).toBeTruthy();
    expect(titleElement).toBeTruthy();
    expect(searchElement).toBeTruthy();
  });

  it('Should be Header exist an title is OK', () => {
    const {getByTestId} = render(<Component />);
    const titleElement = getByTestId(`Header:Title`);
    expect(titleElement.props.children).toBe('Pokédex');
  });
});
