import ImgTravel1 from '~/media/travel1.jpg?jsx';
import ImgBeach from '~/media/beach.jpg?jsx';
import ImgMountain from '~/media/mountain.jpg?jsx';
import { Link } from '@builder.io/qwik-city';

function index() {
  return (
    <>
     <div class="flex flex-col gap-5 ">
    <div class="flex  gap-10  flex-col lg:flex-row justify-center ">

<Link href='/Trips/items' class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
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

   <Link href='items' class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
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

   <Link href='items' class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
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


<div class="flex  gap-10  flex-col lg:flex-row justify-center ">

<Link href='/Trips/items' class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
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

   <Link href='items' class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
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

   <Link href='items' class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
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
  )
}

export default index







