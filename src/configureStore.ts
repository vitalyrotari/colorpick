import { createStore, Store } from 'redux';
import { ApplicationState, reducers } from './store';

export default function configureStore(): Store<ApplicationState> {
  return createStore(reducers);
}
