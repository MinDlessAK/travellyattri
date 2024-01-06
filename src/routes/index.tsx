import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImgTravel1 from '~/media/travel1.jpg?jsx';
import ImgBeach from '~/media/beach.jpg?jsx';
import ImgMountain from '~/media/mountain.jpg?jsx';

export default component$(() => {  
  return (
    <>
    {/* Navbar section-1*/}
<div class="flex flex-col min-h-screen w-full bg-gradient-to-r from-slate-900 to-slate-700">

  {/* Navbar section-1.1*/}
<div class="h-14 w-full flex justify-between items-center p-3 px-16 gap-3   shadow-6xl  bg-opacity-0  backdrop-blur-xl ">
      <div class="">
        <a href="#" class="text-cyan-300 font-extrabold text-2xl ">TravelYatri</a>
      </div>
      <div class="">
        <ul>
          <li class="lg:space-x-5 space-x-6 text-xl lg:flex hidden">
            <a href="/" class="text-white hover:underline-offset-4 hover:underline hover:text-cyan-400 font-bold">Home</a>
            <a href="#trips" class="text-white hover:underline hover:underline-offset-4 hover:text-cyan-400 font-bold">Trips</a>
            <a href="#services" class="text-white hover:underline hover:underline-offset-4 hover:text-cyan-400 font-bold">Service</a>
          </li>
        </ul>
      </div>
</div>
 
      {/* Navbar section-1.1*/}
<div class="flex grow justify-center items-center flex-col gap-10 ">
        {/* Getting Started */}
        <div class="flex grow justify-center items-center flex-col gap-10 ">


<div class=" text-cyan-400 text-6xl font-extrabold ">
  Getting Started
</div>
<div class="space-x-5">
  <Link href="/demo/signup"
    class=" font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out "
  >
    Register as Host
  </Link>
  <Link
    href="/demo/signup"
    class=" font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out "
  >
    Registration as User
  </Link>
</div>


</div>
</div>
</div>
{/*  section-2*/}
<div  class=" min-h-screen w-full  bg-slate-950 ">
    {/*  section-2.1*/}
        {/* Htrips */}
        <div class="flex flex-col min-h-screen w-full justify-center items-center gap-10">
    <div id="trips">
      <h1 class="text-cyan-500 text-4xl font-extrabold mt-10 ">Our Top Trips</h1>
    </div>

    <div>
      <p class="text-white font-serif   ">We have a few specail premotion for our faithfull trip</p>
    </div>

    <div class="flex  gap-20  flex-col lg:flex-row ">

       <div class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow">
            <ImgTravel1 class="w-full h-full rounded-lg  " />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Travel</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>

       <div class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow ">
           <ImgBeach class="h-full w-full  rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Beach</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>

       <div class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow ">
          <ImgMountain  class="h-full  w-full rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Mountain</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>
    </div>

    <div >
        <Link href="demo/trips"  class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold">See All</Link>
    </div>
   </div>
        {/*  section-2.2*/}
        {/* Service */}
        <div class="flex flex-col min-h-screen w-full   justify-center items-center p-10 gap-20">
          <div id="services">
            <h1 class="font-extrabold text-cyan-400 text-4xl ">Our Services</h1>
          </div>
          
        <div class="flex lg:gap-80 grow items-center justify-center flex-col lg:flex-row gap-10">


<div class="h-72 lg:w-72 w-full ">
    <ImgBeach alt="" class="h-full w-full rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
</div>
 
 <div class="">
    <div>
      <h2 class=" font-serif text-white text-lg">Service 1</h2>
    </div>
    <div class="space-x-3">
      <h3 class="text-white font-serif text-4xl lg:text-6xl inline-block">Resturent</h3>
      <h4 class="text-cyan-400 font-serif text-4xl lg:text-6xl inline-block">Service</h4>
   </div>
   <div class="pt-6">
     <span class="text-white font-serif text-4xl  block">Lorem ipsum, dolor sit   </span>
     <span class="text-white font-serif text-4xl  block">consectetur adipisicing elit.</span>
     <span class="text-white font-serif text-4xl  block">Amet, cum!</span>
   </div>
   <div class="pt-4">
     <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold" >Read More</button>
   </div>
</div>
</div>

<div class="flex lg:gap-80 grow items-center justify-center flex-col-reverse lg:flex-row gap-10">
           
           <div class="">
              <div>
                <h2 class=" font-serif text-white text-lg">Service 2</h2>
              </div>
              <div class="space-x-3">
                <h3 class="text-white font-serif text-6xl inline-block">Ocean </h3>
                <h4 class="text-cyan-400 font-serif text-6xl inline-block">Side</h4>
             </div>
             <div class="pt-6">
               <span class="text-white font-serif text-4xl  block">Lorem ipsum, dolor sit amet  </span>
               <span class="text-white font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-white font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold" >Read More</button>
             </div>
          </div>

          <div class="h-72 lg:w-72 w-full ">
          <ImgMountain alt="" class="h-full w-full rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </div>

        </div>
    </div>
</div>

{/*  section-3*/}
<div class="bg-slate-700 flex justify-center gap-8 p-5 w-full" >
    <div>
       <p class="text-white">
           travelyatri@gmail.com
       </p>
    </div>
    <div class=" ">
    <p class="text-white ">+91 9832838742</p>
    </div>
</div>

    </>
  );
});


