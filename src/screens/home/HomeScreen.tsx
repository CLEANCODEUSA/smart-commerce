import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'
import { AppFonts } from '../../styles/fonts'

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <Text style={{ fontSize: 60 }}>HomeScreen</Text>
      <Text style={{ fontSize: 60, fontFamily: AppFonts.Regular }}>HomeScreen</Text>
      <Text style={{ fontSize: 60, fontFamily: AppFonts.Bold }}>HomeScreen</Text>
    </AppSaveView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})