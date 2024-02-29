import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import TapNavigator from './src/navigation/TapNavigator';
import { Provider } from 'react-redux';
import store from './src/store/index'

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

return ( 
  <Provider store={store}>
    <TapNavigator /> 
  </Provider>

  )
}
