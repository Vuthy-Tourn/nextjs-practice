import React from "react";
import { QuoteType } from "@/types/QuoteType";
import QuoteCard from "@/components/quote/QuoteCard";
export default async function page() {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  const BASE_URL = `${process.env.BASE_URL}quotes`;
  const res = await fetch(BASE_URL, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch quotes");
  }
  const data = await res.json();
  const quotes: QuoteType[] = data.quotes;
  return (
    <section className="min-h-screen py-16 px-6">
      {/* <!-- Product Grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {quotes.map((quote) => (
          <QuoteCard 
            key={quote.id}
          id ={quote.id}
          quote={quote.quote}
          author={quote.author} />
        ))}
      </div>
    </section>
  );
}
