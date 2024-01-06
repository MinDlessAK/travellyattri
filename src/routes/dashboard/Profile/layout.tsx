import { Link } from '@builder.io/qwik-city'
import ImgAkash from '~/media/akash.png?jsx'
import { component$, Slot } from "@builder.io/qwik";



export default component$(() => {
  return (
    <>
    <div class="flex flex-col gap-4 rounded-3xl bg-white min-h-screen w-full">
            <div class=" relative flex h-32 w-full rounded-t-3xl  justify-center bg-rose-500">
              <ImgAkash
                alt=""
                class="absolute top-16 h-32 w-32 rounded-full border border-black bg-blue-600 shadow-2xl "
              />
            </div>
            <div class="flex flex-col items-center justify-center gap-2 pt-16">
              <div class="cursor-pointer font-serif text-xl font-semibold ">
                Akash Mishra
              </div>
              <div class="cursor-pointer font-serif text-xl font-semibold ">
                AkashMishra@gmail.com
              </div>
            </div>

            <div class=" flex  w-full justify-evenly rounded-md border-2  bg-rose-500 p-1">
              <div>
                <Link href='/dashboard/Profile' class=" rounded-md text-xl font-semibold text-white hover:underline hover:underline-offset-4">
                  Your trips
                </Link>
              </div>
              <div>
                <Link href='/dashboard/Profile/photos' class=" rounded-md text-xl font-semibold text-white hover:underline hover:underline-offset-4">
                  Photos
                </Link>
              </div>
              <div>
                <Link href='/dashboard/Profile/reviews' class=" rounded-md text-xl font-semibold text-white  hover:underline hover:underline-offset-4">
                  Review
                </Link>
              </div>
            </div>

            <div class=" grow p-5">
           <Slot />
           </div>
            
          </div>
    </>
  );
  })