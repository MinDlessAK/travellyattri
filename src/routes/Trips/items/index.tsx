

function index() {


  return (
    <>
      <div class="flex flex-col  min-h-screen w-full bg-white shadow-xl rounded-3xl">
 

  <div class="flex flex-col px-14 mt-14 ">
    <div class="flex justify-between ">
      <div>
      <h1 class="text-black font-bold text-2xl">Shimla manali Manikaran kasol 8 Days private Tour From Chandigarh</h1>
      </div>
      <div class="flex gap-2 items-center">
        <div class="h-10 w-10 bg-rose-500"></div>
        <div class="h-10 w-10 bg-rose-500"></div>
      </div>
    </div>
   </div>
     
    <div class="flex flex-col px-14 gap-1">
       <div>
        <p class="text-black font-serif">BY Akash Mishra</p>
       </div>

       <div class="flex gap-1 items-center">
        <div class="h-3 w-3 bg-rose-500 rounded-full"></div>
        <div class="h-3 w-3 bg-rose-500 rounded-full"></div>
        <div class="h-3 w-3 bg-rose-500 rounded-full"></div>
        <div class="h-3 w-3 bg-rose-500 rounded-full"></div>
        <div class="h-3 w-3 bg-rose-500 rounded-full"></div>
        <div class="text-black font-serif">Reviews</div>
      </div>
    </div>

    <div class="flex px-14 gap-1  w-full mt-2">

      <div class="w-3/6">
        <div class=" bg-rose-500  h-96 w-full"></div>
      </div>

      <div class="flex flex-col gap-2 h-96 w-2/6">
        <div class=" bg-rose-500 h-1/2 w-full "></div>
        <div class=" bg-rose-500 h-1/2 w-full "></div>
      </div>

    </div> 
    

    <div class="flex h-full w-full gap-6 rounded-b-3xl p-14">
          {/* 1st box */}
          <div class="h-full w-[700px]  ">
            <div class="flex flex-col gap-3">
              <h1 class="text-lg font-bold">About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates ducimus quos, porro enim sed dignissimos officia
                illum animi, cupiditate eum fugiat nam ex repellat nihil dolore
                ullam asperiores odit? Nostrum, dolorem hic. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Nulla, pk jk w
              </p>
              <h1 class="cursor-pointer text-blue-500">Read more...</h1>
            </div>

            <div class="flex h-16 gap-4 ">
              <button class="font-semibold underline underline-offset-2">
                Lowest price gurantee
              </button>
              <button class="font-semibold underline underline-offset-2">
                Free cancelation
              </button>
            </div>

            <div class="flex h-56 w-full flex-col justify-center gap-6 border-b-2 border-t-2 text-sm">
              <h>Ages 1-99</h>
              <h>Duration: 8 days</h>
              <h>Start time: Check availability</h>
              <h>Mobile ticket</h>
              <h>Live Guide: English</h>
            </div>


            
          </div>

          {/* 2nd box */}

          <div class="flex grow flex-col gap-6 rounded-lg border-2 p-4">
            <div>
              <h1 class="text-2xl font-bold">Book your Slot</h1>
            </div>

            <div class="flex flex-col gap-3">
              <label for="datepicker">Select a date:</label>
              <div class="flex w-full gap-3">
                <div>
                  <input
                    type="date"
                    id="datepicker"
                    class="w-60 rounded-3xl border-2 p-3"
                  />
                </div>
                <div class="h-full w-16 rounded-full border-2 p-3">2</div>
              </div>
            </div>

            <div class="flex h-72 w-96 flex-col gap-4 rounded-xl border-2 border-black p-3">
              <div class="flex">
                <p class="text-md font-bold">
                  Shimla manali Manikaran kasol 8 Days private Tour From
                  Chandigarh
                </p>
                <div class="pr-3">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    class="h-6 w-6 "
                  />
                </div>
              </div>
              <h1>Pickup included</h1>

              <div class="flex flex-col gap-2 pt-2">
                <h1 class="text-sm">2 Adults x $24000</h1>
                <h1 class="font-semibold">Total $47000</h1>
                <h1 class="text-sm">No additional taxes or booking fees</h1>
              </div>

              <div class="flex w-full justify-evenly pr-5">
                <button class="rounded-full border-2 p-2 px-6 text-sm font-semibold hover:bg-rose-500 hover:text-white">
                  7:00 AM
                </button>
                <button class="rounded-full border-2 p-2 px-6 text-sm font-semibold hover:bg-rose-500 hover:text-white">
                  8:00 AM
                </button>
                <button class="rounded-full border-2 p-2 px-6 text-sm font-semibold hover:bg-rose-500 hover:text-white">
                  10:00 AM
                </button>
              </div>
              <h1 class="cursor-pointer text-sm font-semibold underline">
                See 1 More Time
              </h1>
            </div>

            <div class="flex justify-center">
              <button class="w-full rounded-3xl border-2 p-4 font-semibold hover:bg-rose-500 hover:text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>




</div>
    </>
  )
}

export default index
