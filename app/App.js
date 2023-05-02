import Connector from './Connector';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Connector />
    </Provider>
  );
}
