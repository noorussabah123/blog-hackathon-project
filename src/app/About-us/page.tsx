import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* About Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              WELCOME TO<br />
              MY CULINARY<br />
              HAVEN!
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/aboutimage.png" 
              alt="Chef" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>

        {/* Featured Recipes Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">FEATURED RECIPES</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Recipe 1 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <Image src="/recipe1.png" alt='recipe1' width={800} height={500} className="rounded-lg shadow-lg w-full h-48 object-cover" />
              <h3 className="text-xl sm:text-2xl mt-4 font-bold text-gray-800">Savory Herb-Infused Chicken</h3>
              <p className="text-gray-600 mt-2">Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken.</p>
              <Link href="/recipe-1">
                <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW RECIPE
                </button>
              </Link>
            </div>

            {/* Recipe 2 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <Image src="/recipe3.png" alt='recipe3' width={800} height={500} className="rounded-lg shadow-lg w-full h-48 object-cover" />
              <h3 className="text-xl sm:text-2xl mt-4 font-bold text-gray-800">Quinoa Veggie Stir-Fry</h3>
              <p className="text-gray-600 mt-2">Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.</p>
              <Link href="/recipe-3">
                <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW RECIPE
                </button>
              </Link>
            </div>

            {/* Recipe 3 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <Image src="/recipe4.png" alt='recipe4' width={800} height={500} className="rounded-lg shadow-lg w-full h-48 object-cover" />
              <h3 className="text-xl sm:text-2xl mt-4 font-bold text-gray-800">Berry Bliss Smoothie Bowl</h3>
              <p className="text-gray-600 mt-2">This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.</p>
              <Link href="/recipe-4">
                <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW RECIPE
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}






































// import Image from 'next/image';
// import Link from 'next/link';

// export default function About() {
//   return (
//     <div className="bg-white py-20">
//       <div className="container mx-auto"> {/* Removed text-left here */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-10"> {/* Flexbox container */}
//           <div className="md:w-1/2"> {/* Width for the heading and paragraph */}
//             <h1 className="text-6xl font-bold text-gray-800 mb-4">
//               WELCOME TO
//               <br />
//               MY CULINARY
//               <br />
//               HAVEN!
//             </h1>
//             <p className="text-gray-600 text-lg"> {/* Added paragraph styling */}
//             Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste.
//             </p>
//           </div>
//           <div className="md:w-1/2"> {/* Width for the image */}
//             <Image src="/aboutimage.png" alt="Chef" width={800} height={500} className="rounded-lg overflow-hidden shadow-lg" />
//           </div>
//         </div>



//         {/* Featured Recipes Section */}
//         <div className="mt-20"> {/* Added margin-top for spacing */}
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">FEATURED RECIPES</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-100 rounded-lg p-6 shadow-md">
//             <Image src="/recipe1.png" alt='recipe1' width={800} height={500} className="rounded-lg overflow-hidden shadow-lg"></Image>
//                <h3 className="text-2xl mt-6 font-bold text-gray-800 mb-2">Savory Herb-Infused Chicken</h3>
//               <p className="text-gray-600">Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</p>
//               <Link href="/recipe-1">
//               <button className="w-32 h-10 rounded-full mt-6 bg-white border border-black hover:bg-orange-400 hover:border-none transition-all">
//                   VIEW RECIPE
//                 </button>
//                 </Link>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-6 shadow-md">
//                 <Image src="/recipe3.png" alt='recipe3' width={800} height={500} className="rounded-lg overflow-hidden shadow-lg"></Image>
//              <h3 className="text-2xl mt-6 font-bold text-gray-800 mb-2">Quinoa Veggie Stir-Fry</h3>
//               <p className="text-gray-600">Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.</p>
//               <Link href="/recipe-3">
//               <button className="w-32 h-10 rounded-full mt-6 bg-white border border-black hover:bg-orange-400 hover:border-none transition-all">
//                   VIEW RECIPE
//                 </button>
//                 </Link>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-6 shadow-md">
//               <Image src="/recipe4.png" alt='recipe4' width={800} height={500} className="rounded-lg overflow-hidden shadow-lg"></Image>
//               <h3 className="text-2xl mt-6 font-bold text-gray-800 mb-2">Berry Bliss Smoothie Bowl</h3>
//               <p className="text-gray-600">This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.</p>
//               <Link href="/recipe-4">
//               <button className="w-32 h-10 rounded-full mt-6 bg-white border border-black hover:bg-orange-400 hover:border-none transition-all">
//                   VIEW RECIPE
//                 </button>
//                 </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


































// import Image from 'next/image'

// export default function About() {
//   return (
//     <div className="bg-white py-20">
//       <div className="container mx-auto text-left">
//         <h1 className="text-6xl font-bold text-gray-800 mb-4">
//           WELCOME TO
//           <br />
//           MY CULINARY
//           <br />
//           HAVEN!
//         </h1>

//         {/* Image */}
//         <div className="mx-auto rounded-lg overflow-hidden shadow-lg mb-10">
//           <Image src="/aboutimage.png" alt="Chef" width={800} height={500} />
//         </div>

//         {/* Featured Recipes Section */}
//         <div>
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">FEATURED RECIPES</h2>
//           {/* Recipe Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Replace with your actual recipe data */}
//             <div className="bg-gray-100 rounded-lg p-6 shadow-md">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Recipe Title 1</h3>
//               <p className="text-gray-600">Short description or ingredients.</p>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-6 shadow-md">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Recipe Title 2</h3>
//               <p className="text-gray-600">Short description or ingredients.</p>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-6 shadow-md">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Recipe Title 3</h3>
//               <p className="text-gray-600">Short description or ingredients.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }