import ProductListItem from "@/components/ProductListItem";
import products from "@assets/data/products";
import { Image, StyleSheet } from "react-native";

export default function MenuScreen() {
  return (
    <>
      <ProductListItem product={products[3]} />
      <ProductListItem product={products[1]} />
    </>
  );
}

const styles = StyleSheet.create({});
