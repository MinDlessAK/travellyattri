function index() {
    return (
      <>
        <div class=" w-full rounded-3xl bg-white p-3 shadow-2xl">
          <h1 class="text-3xl font-bold">Trip Host Information</h1>
          <form class="mt-5 space-y-4">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="flex flex-col gap-1">
                <label for="trip-name" class="p-2 px-4 text-gray-500">
                  Name of Trip
                </label>
                <input
                  type="text"
                  id="trip-name"
                  name="trip-name"
                  class="mx-4  w-[200px] rounded-md border-2  bg-gray-100 p-2  lg:w-[550px]"
                  required
                  placeholder="Trip Name"
                />
              </div>
  
              <div class="flex flex-col gap-1">
                <label for="trip-images" class="p-2 px-4 text-gray-500">
                  Images of the Place (Multiple)
                </label>
                <input
                  type="file"
                  id="trip-images"
                  name="trip-images[]"
                  class="mx-4  w-[200px] rounded-md border-2  bg-gray-100 p-2  lg:w-[550px]"
                  accept="image/*"
                  multiple
                  required
                />
              </div>
            </div>
  
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="flex flex-col gap-1">
                <label for="from-date" class="p-2 px-4 text-gray-500">
                  From Date
                </label>
                <input
                  type="date"
                  id="from-date"
                  name="from-date"
                  class="mx-4  w-[200px] rounded-md border-2  bg-gray-100 p-2  lg:w-[550px]"
                  required
                />
              </div>
  
              <div class="flex flex-col gap-1">
                <label for="to-date" class="p-2 px-4 text-gray-500">
                  To Date
                </label>
                <input
                  type="date"
                  id="to-date"
                  name="to-date"
                  class="mx-4  w-[200px] rounded-md border-2  bg-gray-100 p-2  lg:w-[550px]"
                  required
                />
              </div>
            </div>
  
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="flex flex-col gap-1">
                <label for="price" class="p-2 px-4 text-gray-500">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  class="mx-4  w-[200px] rounded-md border-2  bg-gray-100 p-2  lg:w-[550px]"
                  required
                />
              </div>
  
              <div class="flex flex-col gap-1">
                <label for="days" class="p-2 px-4 text-gray-500">
                  Number of Days
                </label>
                <input
                  type="number"
                  id="days"
                  name="days"
                  class="mx-4 w-[550px]  rounded-md border-2  bg-gray-100 p-2  "
                  required
                />
              </div>
            </div>
  
            <div class="flex flex-col gap-1">
              <label for="location" class="p-2 px-4 text-gray-500">
                Location Coverage
              </label>
              <div class="flex items-center">
                <input
                  type="text"
                  id="location"
                  name="locations[]"
                  class="mx-4  w-full rounded-md border-2  bg-gray-100 p-2  "
                />
                <button
                  type="button"
                  class="ml-2 rounded bg-rose-500 px-2 py-1 text-white hover:bg-rose-600"
                  id="addLocation"
                >
                  Add Location
                </button>
              </div>
            </div>
  
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="flex flex-col gap-1">
                <label for="price" class="p-2 px-4 text-gray-500">
                  Age criteria
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  class="mx-4  w-[200px] rounded-md border-2  bg-gray-100 p-2  lg:w-[550px]"
                  required
                />
              </div>
  
              <div class="flex flex-col gap-1">
                <label for="days" class="p-2 px-4 text-gray-500">
                 Ticket
                </label>
                <input
                  type="number"
                  id="days"
                  name="days"
                  placeholder="Available ticket"
                  class="mx-4 w-[550px]  rounded-md border-2  bg-gray-100 p-2  "
                  required
                />
              </div>
            </div>
  
            <div class="flex flex-col gap-1">
              <label for="hotels" class="p-2 px-4 text-gray-500">
                Hotels
              </label>
              <div class="flex items-center">
                <input
                  type="text"
                  id="hotels"
                  name="hotels[]"
                  class="mx-4  w-full rounded-md border-2  bg-gray-100 p-2  "
                />
                <button
                  type="button"
                  class="ml-2 rounded bg-rose-500 px-2 py-1 text-white hover:bg-rose-600"
                  id="addHotel"
                >
                  Add Hotel
                </button>
              </div>
            </div>
            <div class=" flex flex-col gap-1 ">
                <label for="Name" class=" p-2 px-4 text-gray-500">
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  class="mx-4  rounded-md border-2  bg-gray-100 p-2"
                  placeholder="about trip"
                ></textarea>
               
              </div>
  
            <div>
              <button
                type="submit"
                class="w-full rounded bg-rose-500 px-4 py-2 text-white hover:bg-rose-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default index;
  