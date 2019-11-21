import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, Button } from "react-native";
import { useSelector } from "react-redux";
import Colors from '../../constants/Colors';

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  return (
    <ScrollView>
        <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam("productTitle")
  };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 320
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
       fontSize: 14,
       textAlign: 'center' 
    }
});

export default ProductDetailScreen;
