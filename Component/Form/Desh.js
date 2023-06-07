import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function HomeTab() {
  return (
    <View style={styles.container}>
      <Text>Home Tab</Text>
    </View>
  );
}

function SearchTab() {
  return (
    <View style={styles.container}>
      <Text>Search Tab</Text>
    </View>
  );
}

function NotificationsTab() {
  return (
    <View style={styles.container}>
      <Text>Notifications Tab</Text>
    </View>
  );
}

function ProfileTab() {
  return (
    <View style={styles.container}>
      <Text>Profile Tab</Text>
    </View>
  );
}

export default function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabPress = (index) => {
    setCurrentTab(index);
  };

  const renderTab = () => {
    switch (currentTab) {
      case 0:
        return <HomeTab />;
      case 1:
        return <SearchTab />;
      case 2:
        return <NotificationsTab />;
      case 3:
        return <ProfileTab />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
        <Image source={require('../FlexDemo/image/userlogo.jpg')} style={styles.logo} />
        <View style={{ width: 50 }} />
      </View>
      <View style={styles.tabContainer}>{renderTab()}</View>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[
            styles.bottomNavItem,
            currentTab === 0 && styles.bottomNavItemActive,
          ]}
          onPress={() => handleTabPress(0)}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomNavItem,
            currentTab === 1 && styles.bottomNavItemActive,
          ]}
          onPress={() => handleTabPress(1)}
        >
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomNavItem,
            currentTab === 2 && styles.bottomNavItemActive,
          ]}
          onPress={() => handleTabPress(2)}
        >
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomNavItem,
            currentTab === 3 && styles.bottomNavItemActive,
          ]}
          onPress={() => handleTabPress(3)}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    // backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
  },
  menuButton: {
    paddingHorizontal: 8,
  },
  menuButtonText: {
    fontSize: 16,
    color: '#333',
  },
  logo: {
    marginTop:50,
    width: 100,
    height: 100,
    borderRadius:100,
    
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})   
