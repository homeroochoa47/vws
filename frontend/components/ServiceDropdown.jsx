import Link from "next/link";
import { useState } from "react";

export default function ServiceDropdown(props) {
  const {data} = props
  console.log(data)

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center mx-1 text-center text-md xl:text-lg font-semibold px-2 hover:text-green transition duration-50 ease-out"
        type="button"
        id="dropdownMenuSmallButton"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        Services
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 -mr-2"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu */}
      <ul
        className={`absolute w-72 mt-1 z-[1000] float-left ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-[-8px] pointer-events-none"
        } list-none overflow-hidden rounded-lg border-none bg-dark-grey/95 bg-clip-padding text-left shadow-lg transition-all duration-100 ease-in transform`}
        aria-labelledby="dropdownMenuSmallButton"
      >
        {data.map((item, index) => (
          <li>
          <Link
            className="block w-full bg-transparent px-4 py-2 text-lg font-actor font-normal hover:bg-charcoal hover:text-green transition duration-50 ease-out"
            href={`/vehicle-wrap-services/${item.slug.current}`}
            onClick={closeDropdown}
          >
            {item.serviceName}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}
