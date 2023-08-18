import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAddCategoryMutation } from '../../../services/category';


const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập vào trường name"),
    image: yup.string().required("Vui lòng nhập ảnh"),
  });
const CategoryAdd = () => {

    const [addCategory] = useAddCategoryMutation();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
      mode: "onSubmit",
      resolver: yupResolver(schema),
    });

    const onhandelSubmit = async (data: any) => {
        try {
          console.log(data);
          const response = await addCategory(data);
      
          if ('error' in response) {
            console.error("Error adding product:", response.error);
            return;
          }
      
          console.log("Product added successfully:", response.data);
          navigate("/admin/category");
        } catch (error) {
          console.error("Error", error);
        }
      };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Them San Pham!</h1>
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
  )
}

export default CategoryAdd