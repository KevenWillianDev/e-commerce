import { CiSearch } from "react-icons/ci";

export default function HeaderBar() {
  return (
    <div className="flex items-center bg-gray-100 w-full max-w-sm p-2 rounded-lg shadow-md">
      <CiSearch className="h-5 w-5 text-gray-500 shadow-xl"/>
      <input
        type="text"
        className="ml-2 w-full bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none rounded-md"
        placeholder="Busque aqui"
      />
    </div>
  );
}
