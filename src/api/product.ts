import instance from ".";
import { ProductForm } from "src/interface/models";
export const getAll = ()=>{
    return instance.get('/product');
};

export const getById = (id:string) => {
    return instance.get('/product' + id);
};

export const addProduct = (data: ProductForm)=> {
    return instance.post('/product', data);
};

export const editProduct = (id: string, data: ProductForm)=>{
    return instance.put('/product' +id, data);
};

export const deleteProduct = (id:string)=>{
    return instance.delete('/product' + id)
}
