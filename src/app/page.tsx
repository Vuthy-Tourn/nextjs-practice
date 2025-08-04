"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Code, Server, CheckCircle } from "react-feather";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NextJSHome() {
  const [count, setCount] = useState(0);
  const [activeModule, setActiveModule] = useState("fundamentals");
  const router = useRouter();

  const modules = [
    {
      id: "fundamentals",
      title: "Next.js Fundamentals",
      icon: <BookOpen size={20} />,
      description: "Master the core concepts of Next.js routing and rendering",
    },
    {
      id: "data-fetching",
      title: "Data Fetching",
      icon: <Server size={20} />,
      description: "Learn SSR, SSG, ISR and API routes",
    },
    {
      id: "styling",
      title: "Styling",
      icon: <Code size={20} />,
      description: "CSS Modules, Tailwind, and CSS-in-JS",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 rounded-full">
            <span className="text-sm font-medium">Learn Next.js 15.3.4</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Modern Web Apps
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Interactive learning platform to master Next.js concepts through
            hands-on examples
          </p>
          <Button className="m-4 cursor-pointer" onClick={()=> router.push("/user-profile")}>User Profile</Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Learning Modules */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`p-6 rounded-xl cursor-pointer transition-all ${
                activeModule === module.id
                  ? "shadow-lg border-2 border-blue-500"
                  : "shadow-md hover:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold">{module.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {module.description}
              </p>
              {activeModule === module.id && (
                <div className="mt-4 flex items-center text-sm text-green-600">
                  <CheckCircle size={16} className="mr-1" />
                  <span>Currently viewing</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Playground */}
        <div className="rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              {modules.find((l) => l.id === activeModule)?.title}
            </h2>
            <p className="text-gray-700 mb-6 dark:text-gray-400">
              {modules.find((l) => l.id === activeModule)?.description}
            </p>
          </div>

          <div className="p-8">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="text-6xl font-bold text-gray-800 bg-gray-100 px-8 py-6 rounded-lg">
                {count}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setCount((c) => c + 1)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>+</span>
                  <span>Increment</span>
                </button>

                <button
                  onClick={() => setCount((c) => c - 1)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>-</span>
                  <span>Decrement</span>
                </button>
              </div>

              <button
                onClick={() => setCount(0)}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors"
              >
                Reset Counter
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to dive deeper?</h3>
          <Link
            href="/photos"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors"
          >
            Start Learning Journey
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className=" py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Next.js Learning Platform</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/resources" className="hover:text-blue-600">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
