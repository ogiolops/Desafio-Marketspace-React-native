import { DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'


export function Routes(){

  const { colors } = useTheme();

  const theme = DefaultTheme;

  return(
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  )
}