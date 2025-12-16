import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSaveView from '../../components/views/AppSaveView'

const ProfileScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <Text>ProfileScreen</Text>
    </AppSaveView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})