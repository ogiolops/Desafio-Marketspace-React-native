import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Ads } from '@screens/Ads';
import { Home } from '@screens/Home';
import { AdsDetails } from '@screens/AdsDetails';
import { CreateAndEditAds } from '@screens/CreateAndEditAds';
import { MyAds } from '@screens/MyAds';
import { MyAdsDetails } from '@screens/MyAdsDetails';
import { PreviewAd } from '@screens/PreviewAd';

type AppRoutes = {
  home: undefined;
  ads: undefined;
  ads_details: undefined;
  create_edit_ad: undefined;
  myads: undefined;
  my_ad_details: undefined;
  preview_ad: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,  
      }}>
      <Screen 
        name='home'
        component={Home}
      />

      <Screen 
        name='ads'
        component={Ads}
      />

      <Screen 
        name='ads_details'
        component={AdsDetails}
        options={{
          tabBarButton: () => null ,
        }}
      />

      <Screen 
        name='create_edit_ad'
        component={CreateAndEditAds}
        options={{
          tabBarButton: () => null ,
        }}
      />

      <Screen 
        name='myads'
        component={MyAds}
        options={{
          tabBarButton: () => null ,
        }}
      />

      <Screen 
        name='my_ad_details'
        component={MyAdsDetails}
        options={{
          tabBarButton: () => null ,
        }}
      />

      <Screen 
        name='preview_ad'
        component={PreviewAd}
        options={{
          tabBarButton: () => null ,
        }}
      />

      
    </Navigator>
  );
}