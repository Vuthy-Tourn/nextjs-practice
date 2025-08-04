import { QuoteType } from '@/types/QuoteType';
import Image from 'next/image'
import React from 'react'

export default function QuoteCard({id,quote,author}:QuoteType) {
  return (
    <div key={id} className="flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-lg shadow-lg px-5 pt-5 pb-10 text-gray-800 max-w-3xl dark:bg-gray-900 h-full">
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <Image
              src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
              alt=""
              width={100}
              height={100}
              unoptimized
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">{quote}</p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            {author}
          </p>
          <p className="text-xs text-gray-500 text-center">@{author}</p>
        </div>
      </div>
    </div>
  );
}
