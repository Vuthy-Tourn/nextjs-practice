import { RecipeType } from "@/types/RecipeType";
import Image from "next/image";
import React from "react";

export default function RecipeCard({id,image, name, ingredients, instructions}: RecipeType) {
  return (
    <div key={id} className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden w-ful grid md:grid-cols-2">
      {/* <!-- Recipe Image --> */}
      <div className="h-64 md:h-auto">
        <Image
          src={image}
          alt="Delicious Recipe"
          className="w-full h-full object-cover"
          width={300}
          height={300}
          unoptimized
        />
      </div>

      {/* <!-- Recipe Content --> */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold font-serif text-gray-800 dark:text-white mb-2">
            {name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A rich and savory chicken recipe perfect for dinner nights.
          </p>

          {/* <!-- Ingredients --> */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Ingredients
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200 text-sm">
                {
                ingredients.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
          </div>

          {/* <!-- Instructions --> */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">
              Instructions
            </h3>
            <ol className="list-decimal pl-5 space-y-1 text-gray-700 dark:text-gray-200 text-sm">
             {
                instructions.map((step, index) => (
                <li key={index}>{step}</li>
                ))
             }
            </ol>
          </div>
        </div>

        {/* <!-- Footer CTA --> */}
        <div className="mt-6 text-right">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}
