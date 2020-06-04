import React, { FunctionComponent } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import NavBar from '../components/NavBar';

const BaseLayout: FunctionComponent = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>{children}</ScrollView>
      <View>
        <NavBar />
      </View>
    </SafeAreaView>
  );
};

export default BaseLayout;
