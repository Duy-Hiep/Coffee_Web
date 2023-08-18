import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUpdateCategoryMutation } from '../../../services/category'
import { ICategory } from '../../../types/Category';

const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập vào trường name"),
    image: yup.string().required("Vui lòng nhập ảnh"),
  });

const CategoryUpdate = () => {
const navigate = useNavigate();
const [updateCategory] = useUpdateCategoryMutation();
const { id } = useParams();

const { register, handleSubmit, formState: { errors }, reset } = useForm<any>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

useEffect(() => {
    const handleGetCategory = async () => {
      const response = await axios.get(
        `http://localhost:8080/categories/${id as string | number}`
      );     
      reset(response.data.category)
      console.log("getProduct: ", response); 
    }
    handleGetCategory()
  },[id])

  const onhandelSubmit = async (data: any) => {
    try {
      const data1: ICategory = { ...data, id};
      console.log("log data1",data1);

      await updateCategory(data1);
      alert("Update thanh cong")
      navigate("/admin/category");
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

export default CategoryUpdate