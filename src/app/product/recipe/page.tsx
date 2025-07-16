"use client";

import RecipeCard from "@/components/recipe/RecipeCard";
import { RecipeType } from "@/types/RecipeType";
import React from "react";
import  useSWR  from "swr"; 
import Loading from "@/app/loading";

const fetcher = (url: string): Promise<RecipeType[]> =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => data.recipes);
export default function Page() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}recipes`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loading />;
  return (
    <div className="grid grid-cols-1 gap-4 p-4 max-w-7xl mx-auto">
      {(data ?? []).map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          name={recipe.name}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
}
