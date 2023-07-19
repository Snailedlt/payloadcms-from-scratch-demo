import { CollectionConfig } from 'payload/types';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'Products',
  },
  fields: [
    {
      name: 'productName',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}