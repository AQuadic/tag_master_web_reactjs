import { ProductOptionTypes } from "@/types/product";
import React from "react";

interface SingleProductColorPickerProps {
  options: ProductOptionTypes[];
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const SingleProductColorPicker = ({
  options,
  selectedColor,
  setSelectedColor,
}: SingleProductColorPickerProps) => {
  return (
    <div className="py-4 flex flex-wrap gap-2">
      {options.map((option) => (
        <div
          key={option.value}
          className={` cursor-pointer border rounded-sm `}
          style={{
            borderColor:
              selectedColor === option.value ? option.value : "transparent",
          }}
        >
          <button
            onClick={() => setSelectedColor(option.value)}
            style={{ backgroundColor: option.value }}
            className={`cursor-pointer w-8 h-8 rounded-sm border-2 m-px `}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default SingleProductColorPicker;
