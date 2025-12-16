import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/colors'
import { s, vs } from "react-native-size-matters"
import AppText from '../texts/AppText'
import { AppFonts } from '../../styles/fonts'

const ProductCard = () => {
  return (
    <View style={styles.container}>

      {/* Image UI section */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: "https://images.pexels.com/photos/12794494/pexels-photo-12794494.jpeg" }} />
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>iPhone 15</AppText>
        <AppText style={styles.priceText}>$1200.00 USD</AppText>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    borderWidth: 1,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%"
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
  detailsContainer: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10)
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.Regular,
    color: AppColors.primary
  },
  prictText: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(7)
  }
})
