import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground } from "react-native";
import Button from "../Button/index";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $65,000</Text>
      </View>

      <Button type="primary" text="Custom Order" />
      <Button type="secondary" text="Exsisting Inventory" />
    </View>
  );
};

export default CarItem;
