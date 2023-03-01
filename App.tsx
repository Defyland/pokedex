import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from '~/redux/store';
import Routes from '~/routes/Routes';
import {ThemeProvider} from '~/styles';

const App: React.FC = () => (
  <NavigationContainer>
    <ThemeProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
