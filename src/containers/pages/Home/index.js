import React, {Component, useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BannerCarousel} from '/Users/bagasfhr/Documents/Aplikasi/TakePick/src/components';
import ReviewClientCard from '../../organism/ReviewClientCard';
import RecommendationPost from '../../organism/RecommendationPost';
import MenuBar from '../../organism/MenuBar';
import PlanWeddingBanner from '../../organism/PlanWeddingBanner';
import VendorForYou from '../../organism/VendorForYou';
import Axios from 'axios';
import RecommendationRoute from '../../../router/RecommendationRoute';
import {NavigationContainer} from '@react-navigation/native';
// import Subtitle2 from '../../utils/constant';

// const images = Image.resolveAssetSource([Banner1, Banner2, Banner3]).uri;
// const images = {Banner1, Banner2, Banner3};

const images = [
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
];

const Home = () => {
  return (
    <View>
      <ScrollView>
        <BannerCarousel images={images} style={styles.banner} />
        <MenuBar />
        <PlanWeddingBanner />

        {/* <RecommendationRoute /> */}

        <RecommendationPost />
        <ReviewClientCard />
        <VendorForYou />
      </ScrollView>
    </View>
  );
};

export default Home;

const windowHeight = Dimensions.get('window');

const styles = StyleSheet.create({});

// const Home = () => {
//   const [banners, setBanners] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     Axios.get('http://10.0.2.2:3005/banners').then((res) => {
//       console.log('res get images', res);
//       setBanners(res.data);
//     });
//   };

//   return (
//     <View>
//       <ScrollView>
//         {banners.map((banner) => {
//           return (
//             <BannerCarousel
//               images={banner.image}
//               style={styles.banner}
//               key={banner.id}
//             />
//           );
//         })}
//         <MenuBar />
//         <PlanWeddingBanner />
//         <RecommendationPost />
//         <ReviewClientCard />
//         <VendorForYou />
//       </ScrollView>
//     </View>
//   );
// };
