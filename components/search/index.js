import SearchIcon from "./serachIcon";

const Search = ({ setSearchText }) => {
  return (
    <div class="h-12 p-2 flex bg-white items-center  border-b border-gray-300 xl:m-4">
      <span class="mr-2">
        <SearchIcon />
      </span>
      <input
        class="w-full h-full outline-none text-sm"
        type="text"
        placeholder="Search for any job, title, keywords or company"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
