export const linking = {
  prefixes: ['newpack://'],
  config: {
    screens: {
      ProductsTab: {
        screens: {
          ProductDetails: {
            path: 'Products/:id',
            parse: {
              id: (id) => id,
            },
          },
        },
      },
    },
  },
};