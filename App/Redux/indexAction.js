export const requestProducts = () => {
  return dispatch => {
    dispatch(notifyRequestProducts());
    return fetch('http://localvisamarket.herokuapp.com/products')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch(replaceProducts(json));
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

export const notifyRequestProducts = () => {
  return {
    type: 'REQUEST_PRODUCTS'
  }
}

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
