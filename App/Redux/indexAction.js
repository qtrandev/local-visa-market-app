export const replaceProducts = (products) => {
  return {
    type: 'REPLACE_PRODUCTS',
    payload: products
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      product: product
    }
  }
}
