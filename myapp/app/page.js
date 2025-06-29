import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/*Button */}
      <button className="bg-green-700 text-white px-6 py-2 rounded shadow text-xl font-bold mb-6">
        Tailwind CSS Overview
      </button>

      {/* Para*/}
      <p className="text-gray-800 text-base leading-relaxed mb-6 max-w-2xl">
        Tailwind CSS is a utility-first CSS framework that allows developers to create responsive, customizable UIs directly in their markup. It speeds up development, reduces context switching, and enables consistent design without writing custom CSS.
      </p>

      {/*Square Boxes */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Box 1 */}
        <div className="w-60 h-60 bg-amber-300 rounded p-4 shadow">
          <p className="text-gray-800">
            Tailwind CSS provides utility classes that help you style elements quickly. Just add classes like <code>text-center</code> or <code>bg-blue-500</code> directly to your HTML.
          </p>
        </div>

        {/* Box 2 */}
        <div className="w-60 h-60 bg-blue-800 rounded p-4 shadow">
          <p className="text-white">
            It's mobile-first, customizable, and works well with frameworks like React, Vue, and Next.js. Tailwind promotes fast development and clean code.
          </p>
        </div>
      </div>
    </div>
  );
}
