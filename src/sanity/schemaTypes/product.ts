// import { defineType } from "sanity"

// export default defineType({
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Name',
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Image',
//       options: {
//         hotspot: true, // Enable image cropping
//       },
//     },
//     {
//       name: 'price',
//       type: 'number',
//       title: 'Price',
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//     },
//     {
//       name: 'discountPercentage',
//       type: 'number',
//       title: 'Discount Percentage',
//     },
//     {
//       name: 'isFeaturedProduct',
//       type: 'boolean',
//       title: 'Featured Product',
//     },
//     {
//       name: 'stockLevel',
//       type: 'number',
//       title: 'Stock Level',
//     },
//     {
//       name: 'category',
//       type: 'string',
//       title: 'Category',
//     },
//   ],
// });




export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'imagePath',
        title: 'Image Path',
        type: 'url',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
      },
      {
        name: 'isFeaturedProduct',
        title: 'Is Featured Product',
        type: 'boolean',
      },
      {
        name: 'stockLevel',
        title: 'Stock Level',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
    ],
  };
  
  
