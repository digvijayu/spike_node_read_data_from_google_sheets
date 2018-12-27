import { Provider } from 'react-redux';
import { ThemeProvider, themes } from './styles/Theme';
import theme from './theme';

const Provider = ({ store, children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

export default AppProvider;
