import React from 'react'

const PackageForm = () => {
  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail. </p>
                <div className='w-full h-96 object-cover p-4 '>
                  <img src="data:image/jpeg;base64,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" alt="" />
                </div>
             
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Hotel name</label>
                      <input type="text" name="Hotel name" id="Hotel name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="Hotel address" className="block text-sm font-medium text-gray-700">Hotel address</label>
                      <input type="text" name="Hotel address" id="Hotel address" autoComplete="hotel-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="Hotel city" className="block text-sm font-medium text-gray-700">Hotel city</label>
                      <input type="text" name="Hotel city" id="Hotel city" autoComplete="Hotel city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="Hotel state" className="block text-sm font-medium text-gray-700">Hotel state</label>
                      <input type="text" name="Hotel state" id="Hotel state" autoComplete="hotel-state" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Hotel Country </label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="Hotel Postal code" className="block text-sm font-medium text-gray-700">Hotel Postal code</label>
                      <input type="number" name="Hotel Postal code" id="Hotel Postal code" autoComplete="Hotel Postal code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                      <label htmlFor="Tour name" className="block text-sm font-medium text-gray-700">Tour name</label>
                      <input type="text" name="Tour name" id=" name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label htmlFor="Tour description" className="block text-sm font-medium text-gray-700">Tour description</label>
                      <input type="text" name="Tour description" id=" description" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="Tour duration" className="block text-sm font-medium text-gray-700">Tour duration</label>
                      <input type="text" name="Tour duration" id="Tour duration" autoComplete="Tour duration" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                      <label htmlFor="Tour price" className="block text-sm font-medium text-gray-700">Tour price</label>
                      <input type="number" name="Tour price" id=" Tour price" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className='col-span-6 sm:col-span-6 lg:col-span-3'>
                    <label htmlFor="title">title:</label>
                      <label htmlFor="">Mr</label>
                      <input type="radio" name="title" id="Mr" />

                      <label htmlFor="">Mrs</label>
                      <input type="radio" name="title" id="Mrs" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageForm
