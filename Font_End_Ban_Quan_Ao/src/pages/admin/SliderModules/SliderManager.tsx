import React from 'react'
import { useGetSliderQuery, useRemoveSliderMutation } from '../../../services/slider';
import LoadingPage from '../../../components/common/LoadingPage';
import { Link } from 'react-router-dom';

const SliderManager = () => {
    const {data: NewSlider, isLoading } = useGetSliderQuery();
    const SliderNew = NewSlider?.slider
    console.log("Slider",SliderNew);
    
    const [RemoveSlider] = useRemoveSliderMutation();
    
    const handleDelete = (id: any) => {
        
        RemoveSlider(id)
    }
  return (
    <div className="overflow-x-auto content">
    <h1 className="grid h-10 w-32 place-content-center rounded-lg bg-[#7c3a00] text-white text-xs ">
      SLIDER LIST
    </h1>
    {isLoading ? (
      <LoadingPage />
    ) : SliderNew ? (
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="">
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Image
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Ratio
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Description
            </th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {SliderNew?.map((item: any) => {
            return (
              <tr className="text-center" key={item._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <img className="max-w-[100px] m-auto" src={item.image} alt="" />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.ratio}
                </td><td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.description}
                </td>
                
                <td className="whitespace-nowrap px-4 py-2">
                  <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                    <button
                      className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                      title="Edit Category"
                    >
                      <Link to={`update/${item._id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                    </button>

                    <button
                      className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                      title="Delete Category"
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : null}
  </div>
  )
}

export default SliderManager