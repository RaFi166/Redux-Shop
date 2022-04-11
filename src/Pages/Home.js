import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductQuery } from "../Redux/PostApi";
import { addProduct } from "../Redux/PostSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { data } = useGetProductQuery();

  return (
    <div className="grid grid-cols-3 mt-12">
      {data?.map((alldata) => (
        <div className="h-auto w-56 mb-10 shadow-lg px-4 py-4" key={alldata.id}>
          <img className="h-24" src={alldata.image} alt="" />
          <h1 className="pt-4">{alldata.title}</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded pt-2 pr-4"
            onClick={() => dispatch(addProduct(alldata.title))}
          >
            Add
          </button>
          <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded pt-2">
            Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
