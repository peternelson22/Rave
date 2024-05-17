import ProductListItem from "@/components/ProductListItem";
import products from "@assets/data/products";
import { Image, StyleSheet } from "react-native";

const product = products[0];

export default function MenuScreen() {
  return (
    <>
      <ProductListItem
        name={product.name}
        image={product.image}
        price={product.price}
      />
    </>
  );
}

const styles = StyleSheet.create({});
