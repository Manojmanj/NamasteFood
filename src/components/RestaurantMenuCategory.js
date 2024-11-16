import AccordianItemList from "./AccordianItemList";
import { useState } from "react";

const RestaurantMenuCategory = ({data,showItems,setShowIndex})=> {

    // const [showItems, setShowItems] = useState(false);
    // console.log(data)
    const handleClick = ()=>{
    setShowIndex();
    }

    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                 <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                     <span className="font-bold text-lg">{data.title} - ({data?.itemCards?.length})</span>
                     <span>⬇️</span>
                 </div>
                {/* Accordian Body */}
                {showItems && <AccordianItemList items={data?.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantMenuCategory;