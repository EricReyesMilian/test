const productsData = {
    'iPhone 15': Array(15).fill().map((_, i) => ({
      id: i + 1,
      name: `Cover iPhone 15 ${i + 1}`,
      price: 29.99 + i,
      image: `https://placehold.co/300x300/0071e3/white?text=Cover+${i + 1}`
    })),
    'iPhone 14': Array(8).fill().map((_, i) => ({
      id: i + 1,
      name: `Cover iPhone 14 ${i + 1}`,
      price: 24.99 + i,
      image: `https://placehold.co/300x300/0071e3/white?text=Cover+${i + 1}`
    }))
  };
  export default products