import { component$ } from "@builder.io/qwik";
import { Link} from '@builder.io/qwik-city';
import ImgTravel1 from '~/media/travel1.jpg?jsx';
import ImgBeach from '~/media/beach.jpg?jsx';
import ImgMountain from '~/media/mountain.jpg?jsx';

// import { createUser, getAllUser } from "~/database/user";
// import { routeLoader$ } from '@builder.io/qwik-city';

// export const useProductDetails = routeLoader$(async () => {
//   console.log("working");
  
//   //await createUser({name:"test",email:"test@gmai.com",contact:"123123123"});
//   await getAllUser();
 
//   return null;
// });

export default component$(() => {
  return (
    <>

    <div  class=" bg-white min-h-screen w-full rounded-3xl">

      {/* Welcome */}
    <div class=" flex items-center justify-center h-screen ">
    <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-6">Welcome to TravelYatri</h1>
    </div>    
    </div>


        {/* <Hometrips></Hometrips> */}
       


       <div class="flex flex-col min-h-screen w-full justify-center items-center gap-10">
    <div>
      <h1 class="text-rose-500 text-4xl font-extrabold mt-10 ">Our Top Trips</h1>
    </div>

    <div>
      <p class=" text-black font-serif ">We have a few specail permotion for our faithfull trip</p>
    </div>

    <div class="flex gap-20  flex-col lg:flex-row ">

       <Link href='/dashboard/Trips/items' class="bg-gray-200  w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
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

       <Link href='/dashboard/Trips/items' class="  bg-gray-200 w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <div class="grow ">
           <ImgBeach class="h-full w-full  rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-rose-500 font-serif text-2xl">Beach</h1>
          </div>
          <div>
            <p class="text-black font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
          <div>
            <p class="text-black font-bold text-lg">5000</p>
          </div>
       </Link>

       <Link  href='/dashboard/Trips/items' class="bg-gray-200 w-80 flex flex-col gap-3 p-3 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <div class="grow ">
          <ImgMountain  class="h-full  w-full rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-rose-500 font-serif text-2xl">Mountain</h1>
          </div>
          <div>
            <p class="text-black font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
          <div>
            <p class="text-black font-bold text-lg">5000</p>
          </div>
       </Link>
    </div>

    <div >
        <Link href="/dashboard/Trips"  class="block px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-red-500  text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold">See All</Link>
    </div>
   </div>
 








        {/* <Service></Service> */}

      <div class="flex flex-col  w-full   justify-center items-center p-10 gap-10 ">
          <div>
            <h1 class="font-extrabold text-rose-500 text-4xl ">Our Services</h1>
          </div>

        <div class="flex lg:gap-56 grow items-center justify-center flex-col-reverse lg:flex-row gap-10">
           
           <div class="">
              <div>
                <h2 class=" font-serif text-black text-lg">Service</h2>
              </div>
              <div class=" space-x-3">
                <h3 class="text-black font-serif text-6xl inline-block">Create </h3>
                <h4 class="text-rose-500 font-serif text-6xl inline-block"> Trips</h4>
             </div>
             <div class="pt-6">
               <span class="text-black font-serif text-4xl  block">Lorem ipsum, dolor sit amet  </span>
               <span class="text-black font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-black font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold" >Read More</button>
             </div>
          </div>

          <div class="h-72 lg:w-72 w-full ">
          <ImgTravel1 alt="" class="h-full w-full rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </div>

        </div>
    </div>


    <div class="flex flex-col  w-full   justify-center items-center p-10 ">
         

        <div class="flex lg:gap-56 grow items-center justify-center flex-col lg:flex-row gap-10">


          <div class="h-72 lg:w-72 w-full ">
              <ImgBeach alt="" class="h-full w-full rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </div>
           
           <div class="">
              <div>
                <h2 class=" font-serif text-black text-lg">Service</h2>
              </div>
              <div class="space-x-3">
                <h3 class="text-black font-serif text-4xl lg:text-6xl inline-block">Buy</h3>
                <h4 class="text-rose-500 font-serif text-4xl lg:text-6xl inline-block">Trips</h4>
             </div>
             <div class="pt-6">
               <span class="text-black font-serif text-4xl  block">Lorem ipsum, dolor sit   </span>
               <span class="text-black font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-black font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold" >Read More</button>
             </div>
          </div>

          

        </div>
    </div>
    
   
</div>


    </>
  );
});


