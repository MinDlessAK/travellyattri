import { Link } from "@builder.io/qwik-city";
import ImgTravel1 from '~/media/travel1.jpg?jsx';
import ImgBeach from '~/media/beach.jpg?jsx';
import ImgMountain from '~/media/mountain.jpg?jsx';
function index() {
  return (
    <>
      <div class=" w-full rounded-3xl bg-white p-4 shadow-xl">
        
          <div class="flex h-16 w-full items-center justify-between rounded-t-3xl p-4">
            <h1 class="text-3xl font-semibold">My trips</h1>
            <Link
              href="forms"
              class="rounded-md border-2 bg-gray-50 p-3 px-9 transition-all duration-200 ease-in-out hover:bg-rose-500 hover:text-white"
            >
              Create trips
            </Link>
          </div>

          <div class="  flex  w-full grow justify-between gap-2 ">
            <input
              type="search"
              class="w-full rounded-md border-2  p-2 mx-4  bg-gray-100  "
              placeholder="Search Trips"
            />
            <button class="rounded-md border-2 bg-gray-50 px-5  hover:bg-rose-500 hover:text-white">
              Search
            </button>
          </div>

          <div class="flex gap-3 p-4">
            <button class="rounded-md border-2 bg-gray-50 p-3 hover:bg-rose-500 hover:text-white">
              All Trips
            </button>
            <button class="rounded-md border-2 bg-gray-50 p-3 hover:bg-rose-500 hover:text-white">
              Delete Trips
            </button>
          </div>
        </div>



        <div class=" w-full rounded-3xl bg-white p-4 mt-4 shadow-xl">
        <div class="flex  gap-10  flex-col lg:flex-row justify-center ">

    <Link class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <div class="grow">
            <ImgTravel1 class="w-full h-full rounded-lg  " />
          </div>
          <div>
            <h1 class="text-rose-500 font-serif text-2xl">Travel</h1>
          </div>
          <div>
            <p class="text-black font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
          <div>
            <p class="text-black font-bold text-lg">5000</p>
          </div>
       </Link>

       <Link class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <div class="grow">
            <ImgBeach class="w-full h-full rounded-lg  " />
          </div>
          <div>
            <h1 class="text-rose-500 font-serif text-2xl">Travel</h1>
          </div>
          <div>
            <p class="text-black font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
          <div>
            <p class="text-black font-bold text-lg">5000</p>
          </div>
       </Link>

       <Link class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <div class="grow">
            <ImgMountain class="w-full h-full rounded-lg  " />
          </div>
          <div>
            <h1 class="text-rose-500 font-serif text-2xl">Travel</h1>
          </div>
          <div>
            <p class="text-black font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
          <div>
            <p class="text-black font-bold text-lg">5000</p>
          </div>
       </Link>
    </div>
    </div>
    </>
  );
}

export default index;