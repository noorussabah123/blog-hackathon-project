import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const recipes = [
  { route: "/recipe-1", image: "/recipe1.png", title: "Savory Herb-Infused Chicken", description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken", text: "40 Min - easy prep - 3 serves" },
  { route: "/recipe-2", image: "/recipe2.png", title: "Lemon Garlic Grilled Chicken", description: "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe", text: "1 hour - hard prep - 4 serves" },
  { route: "/recipe-3", image: "/recipe3.png", title: "Quinoa Veggie Stir-Fry", description: "Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.", text: "30 Min - easy prep - 3 serves" },
  { route: "/recipe-4", image: "/recipe4.png", title: "Berry Bliss Smoothie Bowl", description: "This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.", text: "10 Min - easy prep - 2 serves" },
  { route: "/recipe-5", image: "/recipe5.png", title: "Spaghetti Aglio e Olio", description: "A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.", text: "20 min - easy prep - 2 serves" },
  { route: "/recipe-6", image: "/recipe6.png", title: "Grilled Veggies with Sauce", description: "Served with a zesty chimichurri sauce its a perfect addition to your outdoor gatherings.", text: "25 Min - medium prep - 6 serves" },
];

export default function Blog() {
  return (
    <>
      <div className="w-full h-auto px-4 sm:px-8 md:px-16 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {recipes.map((recipe, index) => (
          <Card key={index} className="bg-gray-100 p-4 rounded-md shadow-lg flex flex-col">
            <CardHeader className="w-full">
              <Image src={recipe.image} alt={recipe.title} width={427} height={234} className="w-full h-auto rounded-md" />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-black text-lg sm:text-xl font-bold mb-3">{recipe.title}</CardTitle>
              <CardDescription className="text-gray-700 text-sm sm:text-base mb-4">{recipe.description}</CardDescription>
            </CardContent>
            <div className="flex justify-between items-center text-black mt-auto">
              <p className="text-sm sm:text-base">{recipe.text}</p>
              <Link href={recipe.route}>
                <button className="w-32 h-10 rounded-full bg-white border border-black hover:bg-orange-400 hover:border-none transition-all">
                  VIEW RECIPE
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}







































// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";



// const recipes = [
//     {route: "/recipe-1", image: "/recipe1.png", title: "Savory Herb-Infused Chicken", description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken", text: "40 Min - easy prep - 3 serves"},
//     {route: "/recipe-2", image: "/recipe2.png", title: "Lemon Garlic Grilled Chicken", description: "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe", text: "1 hour - hard prep - 4 serves" },
//     {route: "/recipe-3", image: "/recipe3.png", title: "Quinoa Veggie Stir-Fry", description: "Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.", text: "30 Min - easy prep - 3 serves" },
//     {route: "/recipe-4", image: "/recipe4.png", title: "Berry Bliss Smoothie Bowl", description: "This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.", text: "10 Min - easy prep - 2 serves" },
//     {route: "/recipe-5", image: "/recipe5.png", title: "Spaghetti Aglio e Olio", description: "A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.", text: "20 min - easy prep - 2 serves" },
//     {route: "/recipe-6", image: "/recipe6.png", title: "Grilled Veggies with Sauce", description: "Served with a zesty chimichurri sauce its a perfect addition to your outdoor gatherings.", text: "25 Min - medium prep - 6 serves" },
// ];




// export default function Blog() {
//     return(
//         <>
//          <div className="w-full h-auto px-[64px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[64px] ">
//                {recipes.map((recipe, index)=> (
//                 <Card key={index} className="bg-gray-100 p-4 rounded-md shadow-lg">
//                    <CardHeader>
//                      <Image src={recipe.image} alt="recipe1" width={427} height={234}/>
//                    </CardHeader>
//                    <CardContent>
//                      <CardTitle>
//                         <h1 className="text-black mb-[12px]">{recipe.title}</h1>
//                      </CardTitle>
//                      <CardDescription>
//                         <p className="mb-[108px]">{recipe.description}</p>
//                      </CardDescription>
//                    </CardContent>
//                    <div className="flex justify-between items-center text-black">
//                     <p>{recipe.text}</p>
//                     <Link href={recipe.route}>
//                     <button className="w-[132px] h-[38px] rounded-[24px] bg-white border border-black hover:bg-orange-400 hover:border-none">
//                         VIEW RECIPE
//                     </button>
//                     </Link>
//                    </div>
//                 </Card>
//                ))} 
//          </div>
//         </>
//     )
// }