import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from "react-native-size-matters"
import AppText from '../texts/AppText'
import { AppColors } from '../../styles/colors'
import { AppFonts } from '../../styles/fonts'
import { Ionicons } from "@expo/vector-icons"
import { commonStyles } from '../../styles/sharedStyles'

interface IProductCard {
  onPress: () => void;
  title: string;
  price: string;
  imageURL: string;
}

const ProductCard: FC<IProductCard> = ({ onPress, imageURL, title, price }) => {
  return (
    <View style={styles.container}>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton} onPress={onPress}>
        <Ionicons name='cart' size={s(15)} color={AppColors.white} />
      </TouchableOpacity>

      {/* Image UI section */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageURL }} />
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.priceText}>{price}</AppText>
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
