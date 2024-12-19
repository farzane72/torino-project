import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
function ModalLocation({ onSelect,onOPen ,isOpen}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const options = ["تهران", "رشت ", "قزوین"];

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev === null || prev === options.length - 1 ? 0 : prev + 1
      );
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((prev) =>
        prev === null || prev === 0 ? options.length - 1 : prev - 1
      );
    } else if (event.key === "Enter" && selectedIndex !== null) {
      onSelect(options[selectedIndex]);
    }
  };

  if(! isOpen) return

  return (
    <>
      <ul
        className="bg-white absolute right-0 left-0  top-10 lg:top-16 rounded-md border
             border-[#00000026] cursor-pointer z-[1000]"
        role="listbox"
        aria-activedescendant={
          selectedIndex !== null ? `option-${selectedIndex}` : undefined
        }
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <li className="text-[#282828B2] bg-[#F8F8F8] text-[13px] p-1">
          پر تردد
        </li>

        {options.map((option, index) => (
          <li
            className={` flex  items-center  gap-2 p-2   text-sm font-norml  border-b border-[#0000001F]
                   lg:text-[#2C2C2C] ${
                     selectedIndex === index
                       ? "text-[#282828B2] bg-[#F8F8F8]"
                       : "text-[#282828]  bg-inherit "
                   }
                   hover:text-[#282828B2] hover:bg-[#e9e9e9] 
                   `}
            onClick={() => {
              onSelect(option);
            }}
            //  role="option"
            key={index}
            id={`option-${index}`}
            role="option"
            aria-selected={selectedIndex === index}
          >
            {/* // setOrigin(name), */}
            <HiOutlineLocationMarker size={20} />
            <span className="">{option}</span>
          </li>
        ))}
      </ul>
      <div
        className=" fixed w-full h-screen  top-0 right-0 left-0 z-[500]  "
        onClick={() => onOPen(false)}
      ></div>
    </>
  );
}

export default ModalLocation;

// function CityName({ name, setOrigin, index }) {
//   return (
//     <li
//       className="flex   items-center  gap-2 p-2  text-[#282828]  text-sm font-norml  border-b border-[#0000001F]
//                    lg:text-[#2C2C2C] "
//       onClick={() => {
//         setOrigin(name);
//       }}
//       //  role="option"
//       key={index}
//       id={`option-${index}`}
//       role="option"
//       aria-selected={selectedIndex === index}
//     >
//       {/* // setOrigin(name), */}
//       <HiOutlineLocationMarker size={20} />
//       <span className="">{name}</span>
//     </li>
//   );
// }
