import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/colors'
import { s, vs } from "react-native-size-matters"
import AppText from '../texts/AppText'
import { AppFonts } from '../../styles/fonts'
import { Ionicons } from "@expo/vector-icons"
import { commonStyles } from '../../styles/sharedStyles'

const ProductCard = () => {
  return (
    <View style={styles.container}>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Ionicons name='cart' size={s(15)} color={AppColors.white} />
      </TouchableOpacity>

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
    ...commonStyles.shadow
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
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: 5,
    top: 5,
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

})
