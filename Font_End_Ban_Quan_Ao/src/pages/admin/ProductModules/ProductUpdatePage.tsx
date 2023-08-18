import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useUpdateProductMutation, useGetProductByIdQuery } from '../../../services/product';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineLoading } from "react-icons/ai";
import { Button, Form, Input, Skeleton, message } from "antd";
import axios from 'axios';
import { IProduct } from '../../../types/Product';
import { useGetCategoryQuery } from '../../../services/category';

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập vào trường name"),
  price: yup.number().min(100).required("Vui lòng kiểm tra lại trường giá"),
  categoryId: yup.string().required("Vui lòng chọn dannh mục"),
  description: yup.string().required("Vui lòng nhập mô tả"),
  image: yup.string().required("Vui lòng nhập ảnh"),
});

const ProductUpdatePage = () => {
  const navigate = useNavigate()
  const [updateProduct] = useUpdateProductMutation();
  const { id } = useParams();
  // const {data: GetOne} = useGetProductByIdQuery(id);

  useEffect(() => {
    const handleGetProduct = async () => {
      const response = await axios.get(
        `http://localhost:8080/products/${id as string | number}`
      ); 
      const GetOne = response.data.product 
      console.log("GetOne",GetOne);
         
      reset(response.data.product)
      console.log("getProduct: ", response); 
    }
    handleGetProduct()
  },[id])


  const { register, handleSubmit, formState: { errors }, reset } = useForm<IProduct>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { data: cateData, isLoading} =  useGetCategoryQuery();
  const newCategory = cateData?.category;
  console.log("NewCatgory", newCategory);
  

  console.log("cate: ", newCategory );

  const onhandelSubmit = async (data: any) => {
    try {
      const data1: IProduct = { ...data, id};
      console.log("log data1",data1);
      
      await updateProduct(data1);
      alert("Update thanh cong")
      navigate("/admin/product");
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Sua San Pham!</h1>
        </div>
        <form onSubmit={handleSubmit(onhandelSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="Name" className="sr-only ">
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter name"
                {...register("name")}
              />
            </div>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="image" className="sr-only">
              Image
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter image"
                {...register("image")}
              />
            </div>
            {errors.image && <p className="text-red-500">{errors.image.message}</p>}
          </div>
          <div>
            <label htmlFor="price" className="sr-only">
              Price
            </label>

            <div className="relative">
              <input
                type="number"
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter price"
                {...register("price")}
              />
            </div>
            {errors.price && <p className="text-red-500">{errors.price.message}</p>}
          </div>
          <div>
            <label htmlFor="price" className="sr-only">
              Category
            </label>

            <div className="relative">
              <select id="categoryId" {...register("categoryId")} className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm" >
                {newCategory?.map((item: any) => {
                  return (
                    <option className="text-sm w-full " value={item._id} key={item._id}>{item.name}</option>
                  ) 
                })}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="description" className="sr-only">
              Description
            </label>

            <div className="relative">
              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Description"
                rows={8}
                id="description"
                {...register("description")}
              ></textarea>
            </div>
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductUpdatePage