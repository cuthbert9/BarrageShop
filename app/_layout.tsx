import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const colorTheme=Appearance.getColorScheme();
  const theme= colorTheme==="dark"?Colors.dark:Colors.light;
 

  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack  screenOptions={{headerStyle:{backgroundColor:theme.headerBackground},headerTintColor:theme.text,headerShadowVisible:false}} >
        {/* <Stack.Screen name="(barrage)" options={{title:"Home", headerShown: true ,headerTitleAlign:"center"}}>*/}
        <Stack.Screen name="index" options={ {title:"Home", headerShown: true,headerTitleAlign:"center"}} />
        <Stack.Screen name="contact" options={{title:"contact us", headerShown: true }} />
        <Stack.Screen name="products" options={{title:"Our Products", headerShown: true }} />
        <Stack.Screen name="+not-found"  options={{headerShown:false}}/>
      </Stack>
      
   
  );
}
