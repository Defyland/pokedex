import {configureStore} from '@reduxjs/toolkit';
import {reducers} from '~/redux/reducers';
import {wacthGetPokemons} from '~/redux/sagas/PokemonSaga';

import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [saga],
});

saga.run(wacthGetPokemons);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
