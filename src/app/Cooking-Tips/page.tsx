import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const CookingTips = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold">OUR ESSENTIAL COOKING TIPS</h1>
        <p className="text-gray-600 mt-2">Master the art of cooking with our expert advice and easy-to-follow guides.</p>
      </header>
      
      {/* Newest Recipes */}
      <section className="mb-8">
        <h2 className="text-5xl font-bold mb-4">NEWEST RECIPES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <Image src="/recipe1.png" alt="Spicy Chicken Wings" width={400} height={300} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-semibold text-lg">Spicy Chicken Wings</h3>
              <p className="text-gray-600">A delicious and easy-to-make spicy chicken wings recipe.</p>
              <Link href="/recipe-1">
              <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW RECIPE
                </button>
                </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/recipe4.png" alt="Chocolate Fudge Cake" width={400} height={300} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-semibold text-lg">Berry Bliss Smoothie Bowl</h3>
              <p className="text-gray-600">Indulge in this rich berry bliss smoothie bowl.</p>
              <Link href="/recipe-4">
              <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW RECIPE
                </button>
                </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Mastering the Basics */}
      <section className="mb-8">
        <h2 className="text-5xl font-bold mb-4">MASTERING THE BASICS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <Image src="/knifepic.png" alt="Knife Skills" width={400} height={300} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-bold text-lg">Knife Skills</h3>
              <p className="text-gray-600">Unlock the art of precision in your kitchen with proper chopping, dicing, and slicing techniques. Elevate your culinary creations to new heights.</p>
              <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW MORE
                </button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/roastingtray.png" alt="Roasting Tary" width={400} height={300} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-bold text-lg">Roasting Tray</h3>
              <p className="text-gray-600">Ensure even cooking and unlock flavorful results with our expert roasting tips. From golden vegetables to succulent meats, master the art of roasting.</p>
              <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW MORE
                </button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/cleaning.png" alt="Boiling Eggs" width={400} height={300} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-bold text-lg">Cleaning as You Go</h3>
              <p className="text-gray-600">Maintain a tidy kitchen for stress-free cooking. Learn the art of cleaning as you go, turning every culinary endeavor into a seamless experience.</p>
              <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW MORE
                </button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Tips & Tricks */}
      <section className="mb-8">
        <h2 className="text-5xl font-bold mb-4">TIPS & TRICKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <Image src="/tips1.png" alt="Quick Marinades" width={400} height={300} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-bold text-lg">Fresh vs. Dried Herbs</h3>
              <p className="text-gray-600">Discover the nuanced world of herbs. Learn when to opt for the freshness of herbs and when dried variants can amplify your culinary creations.</p>
              <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW MORE
                </button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/tips2.png" alt="Meal Prepping" width={400} height={300} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-bold text-lg">Balancing Sweet and Savory</h3>
              <p className="text-gray-600">Achieve the perfect symphony of flavors by mastering the art of balancing sweet and savory elements in your dishes</p>
              <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW MORE
                </button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image src="/tips3.png" alt="Seasoning Hacks" width={400} height={300} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="font-bold text-lg">Choosing Produce</h3>
              <p className="text-gray-600">Selecting ripe fruits and vegetables is an art. Explore our insights to ensure optimal taste in every dish.
              </p>
              <button className="w-full sm:w-32 h-10 rounded-full mt-4 bg-white border border-black hover:bg-orange-400 transition-all">
                  VIEW MORE
                </button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CookingTips;
