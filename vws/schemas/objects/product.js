import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  type: 'object',
  title: 'Product',
  fields: [
    defineField({
        name: 'productName',
        title: 'Product Name',
        type: 'string',
        description: 'The name of the product specific product.'
    }),
    defineField({
        name: "productImage",
        title: "Product Photo",
        type: "image",
        description: "An image of this product. The image must be a stock image of the product with a white background.",
        options: {
            hotspot: true
        }
    })
  ]
});