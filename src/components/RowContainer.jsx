import React, { useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 bg-amber-100 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}>
      {data &&
        data.map((item) => (
          <div
            key={item?.id}
            className=" w-2/3 h-[230px] min-w-[300px] md:w-1/4 md:min-w-[340px] bg-white rounded-lg p-2 h-auto my-12 backdrop-blur-lg hover:drop-shadow-lg hover:bg-slate-50 flex flex-col justify-between">
            <div className="w-full flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.15 }}
                src={item?.imageUrl}
                alt=""
                className="w-40 -mt-8 drop-shadow-2xl "
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                <MdShoppingBasket className="text-white " />
              </motion.div>
            </div>
            <div className=" w-full flex flex-col  items-end justify-end">
              <p className=" font-semibold text-base md:text-lg ">
                {item?.title}
              </p>
              <p className=" mt-2 text-sm text-gray-500 "> {item?.calories}</p>
              <div className="flex items-center gap-8 ">
                {" "}
                <p className="text-lg font-semibold ">
                  <span className="text-sm text-red-500 ">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
