import React from "react";
import { Link } from "react-router-dom";

import { useServiceContext } from "shell/Service";

function List() {
  const serviceContext = useServiceContext();

  React.useEffect(() => {
    serviceContext.setService({ title: "Product List" });
  }, []);

  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Shoe List</h3>
        <span className="mt-3 text-sm text-gray-500">200+ Products</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {[1, 2, 3, 4].map((item, i) => (
            <Link key={item} to={{ pathname: `/detail` }}>
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80')",
                  }}
                >
                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>

                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">Nike Air</h3>
                  <span className="text-gray-500 mt-2">10$</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default List;
