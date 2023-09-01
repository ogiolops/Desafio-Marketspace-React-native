import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Ads } from '@screens/Ads';
import { Home } from '@screens/Home';
import { AdsDetails } from '@screens/AdsDetails';
import { CreateAndEditAds } from '@screens/CreateAndEditAds';
import { MyAds } from '@screens/MyAds';
import { MyAdsDetails } from '@screens/MyAdsDetails';
import { PreviewAd } from '@screens/PreviewAd';
import TagIcon from '@assets/tag.svg'
import HomeIcon  from '@assets/home.svg';
import SignOut from '@assets/signout.svg';
import { TouchableOpacity } from 'react-native'


type AppRoutes = {
  home: undefined;
  ads: undefined;
  ads_details: undefined;
  create_edit_ad: undefined;
  myads: undefined;
  my_ad_details: undefined;
  preview_ad: undefined;
  signout: undefined;
}



export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){

  
  
  return(
    <Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,  
        tabBarActiveTintColor: '#3E3A40',
        
      }}>
      <Screen 
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon 
              fill={color} 
              width={24}
              height={24}
            />
          )
        }}
      />

      <Screen 
        name='ads'
        component={Ads}
        options={{
          tabBarIcon: ({color}) => (
            <TagIcon 
              fill={color} 
              width={24}
              height={24}
            />
          )
        }}
      />

      <Screen
        name="signout"
        component={SignOut}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.7}
            >
              <SignOut width={24} height={24}/>
            </TouchableOpacity>
          ),
        }}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              e.preventDefault()
              console.log('signout')
              // navigation.navigate('signin')
              
            },
          }
        }}
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