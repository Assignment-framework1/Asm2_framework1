import * as Yup from 'yup';

// Product
export interface IProduct {
  message: string;
  data: [
    _id: string,
    name: string,
    price: number,
    origin_price: number,
    image: string,
    description: string,
    size: [string],
    category_id: string,
    brand: string,
    quantity: number,
    status: string
  ];
}

export const productSchema = Yup.object({
  name: Yup.string().required('( Không được bỏ trống )'),
  price: Yup.number().required('( Không được bỏ trống )'),
  origin_price: Yup.number().required('( Không được bỏ trống )'),
  image: Yup.string().required('( Không được bỏ trống )'),
  description: Yup.string().required('( Không được bỏ trống )'),
  size: Yup.array().of(Yup.string()),
  category_id: Yup.string().required('( Không được bỏ trống )'),
  brand: Yup.string().required('( Không được bỏ trống )'),
  quantity: Yup.number().required('( Không được bỏ trống )'),
  status: Yup.string().required('( Không được bỏ trống )'),
  _id: Yup.string(),
  __v: Yup.string(),
});

export type ProductForm = Yup.InferType<typeof productSchema>;

// Size
export interface ISize {
  message: string;
  data: [_id: string, name: string, description: string];
}

export const sizeSchema = Yup.object({
  name: Yup.string().required('( Không được bỏ trống )'),
  description: Yup.string().required('( Không được bỏ trống )'),
  _id: Yup.string(),
  __v: Yup.string(),
});

export type SizeForm = Yup.InferType<typeof sizeSchema>;

// Category
export interface ICategory {
  _id: string;
  name: string;
  description: string;
}

export const categorySchema = Yup.object({
  name: Yup.string().required('( Không được bỏ trống )'),
  description: Yup.string().required('( Không được bỏ trống )'),
  _id: Yup.string(),
  __v: Yup.string(),
});

export type CategoryForm = Yup.InferType<typeof categorySchema>;

export interface ICart {
  _id: string;
  user_id: string;
  products: [string];
  quantity: number;
}

export interface ICheckout {
  _id: string;
  user_id: string;
  cart_id: string;
  status: string;
  address: string;
  total: number;
}
