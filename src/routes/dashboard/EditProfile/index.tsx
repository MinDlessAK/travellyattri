
function index() {
  return (
    <>
    <div class="  bg-white  shadow-xl  rounded-3xl ">
              <div class="p-4 font-serif text-3xl font-semibold">
                Edit profile
              </div>

              <div class="flex h-24 w-full   ">
                <div class="flex flex-col">
                  <label for="Name" class="p-2 px-4 text-gray-500">
                    Name
                  </label>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="mx-4  w-[200px] rounded-md border-2  bg-gray-100 p-2  lg:w-[550px]"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="flex flex-col">
                  <label for="Name" class="p-2 px-4 text-gray-500">
                    Last Name
                  </label>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="mx-4  w-[550px] rounded-md border-2  bg-gray-100 p-2"
                    placeholder="Enter your Last name"
                  />
                </div>
              </div>

              <div class="flex h-24 w-full ">
                <div class="flex flex-col">
                  <label for="Name" class="p-2 px-4 text-gray-500">
                    Contact
                  </label>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="mx-4  w-[550px] rounded-md border-2  bg-gray-100 p-2"
                    placeholder="Enter your Contact"
                  />
                </div>
                <div class="flex flex-col">
                  <label for="Name" class="p-2 px-4 text-gray-500">
                    Email
                  </label>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="mx-4  w-[550px] rounded-md border-2  bg-gray-100 p-2"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div class="flex h-24 w-full ">
                <div class="flex flex-col">
                  <label for="Name" class="p-2 px-4 text-gray-500">
                    Address
                  </label>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="mx-4  w-[550px] rounded-md border-2  bg-gray-100 p-2"
                    placeholder="Enter your Address"
                  />
                </div>
                <div class="flex flex-col">
                  <label for="Name" class="p-2 px-4 text-gray-500">
                    City
                  </label>
                  <input
                    type="search"
                    name=""
                    id=""
                    class="mx-4  w-[550px] rounded-md border-2  bg-gray-100 p-2"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
              <div class="flex h-56 w-full flex-col gap-2 ">
                <label for="Name" class=" p-2 px-4 text-gray-500">
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  class="mx-4 h-16 w-[1136px] rounded-md border-2  bg-gray-100 p-2"
                  placeholder="Tell us about your self"
                ></textarea>
                <button class="mx-4 w-[1136px] rounded-md border-2 bg-rose-500  p-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-rose-600">
                  Submit
                </button>
              </div>
            </div>
      
    </>
  )
}

export default index
