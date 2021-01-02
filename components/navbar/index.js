import Menu from "./menu-black";

function Navbar() {
  return (
    <div class="p-2.5 bg-white flex flex-row justify-between items-center border-b border-gray-300">
      <div class="flex">
        <span class="w-4 lg:hidden">
          <Menu />
        </span>
        <span class="text-indigo-500 font-medium text-base ml-4">
          HEALTH EXPLORE
        </span>
      </div>
      <div class="hidden lg:block">
        <span class="mx-1 font-semibold">PROFILE</span>
        <span class="mx-1 font-semibold">JOBS</span>
        <span class="mx-1 font-semibold">PROFESSIONAL NETWORK</span>
        <span class="mx-1 font-semibold">SALARY</span>
        <span class="mx-1 font-semibold">LOUNGE</span>
      </div>
      <div class="flex items-center">
        <span class="hidden mx-2 px-2 py-1.5 text-indigo-500 font-medium sm:block border-2 border-indigo-400 rounded-lg">
          Create Job
        </span>
        <div class="relative p-2 w-12 bg-indigo-400 text-center border-2 rounded-full">
          <span class="text-white font-medium">JO</span>
        </div>
        <span class="m-2 font-bold hidden xl:block">Logout</span>
      </div>
    </div>
  );
}

export default Navbar;
