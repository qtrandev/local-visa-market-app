const items = [
  {
    id: '1',
    productName: 'iPhone 6s Plus 64GB',
    productDescription: 'The iPhone is an engineering marvel.',
    productPrice: '$699',
    productImage: 'http://www.qtrandev.com/thriftee/iphone.png',
    sellerName: 'Zac Thomas'
  },
  {
    id: '2',
    productName: 'Nike Jordan',
    productDescription: 'The best shoes money can buy.',
    productPrice: '$149',
    productImage: 'http://www.qtrandev.com/thriftee/nike.png',
    sellerName: 'Michael Jardyn'
  },
  {
    id: '3',
    productName: 'Fixed Bike',
    productDescription: 'Fixed-speed bikes are the best bikes for casual riding.',
    productPrice: '$130',
    productImage: 'http://www.qtrandev.com/thriftee/bike.png',
    sellerName: 'Lance Sharapova'
  }
];

const products = (state = items, action) => {
  switch (action.type) {
    case 'REPLACE_PRODUCTS':
      return action.payload;
    case 'ADD_PRODUCT':
      return Object.assign([
        ...state, {
          treetype: action.payload.treetype,
          fulltype: action.payload.fulltype,
          verified: action.payload.verified,
          publiclocation: action.payload.publiclocation,
          allowpick: action.payload.allowpick,
          season: action.payload.season,
          source: action.payload.source,
          marker: action.payload.marker,
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      ]);
    default:
      return state
  }
}

export default products