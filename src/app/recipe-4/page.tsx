"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Recipe1() {
    // State to store comments
    const [comments, setComments] = useState<any[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const recipeId = "recipe-4";

    // Load comments from localStorage on initial render
    useEffect(() => {
        const storedComments = localStorage.getItem(`comments-${recipeId}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [recipeId]);

    // Handle form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create new comment object
        const newComment = {
            name,
            email,
            comment,
        };

        // Update comments state and localStorage
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);

        // Save comments to localStorage
        localStorage.setItem(`comments-${recipeId}`, JSON.stringify(updatedComments));

        // Reset form fields
        setName("");
        setEmail("");
        setComment("");
    };

    return (
        <>
            <div className="w-full h-auto px-[64px]">
                <div className="w-[1232px] h-[1078px] ml-[10px] flex flex-col items-center justify-center text-black">
                    <div className="mb-[50px]">
                        <h1 className="text-center text-6xl font-bold">BERRY BLISS</h1>
                        <br />
                        <h1 className="text-center text-6xl font-bold">SMOOTHY BALL</h1>

                        <p className="text-center pt-[12px]">
                            Welcome to Cooks Delight, where culinary dreams come alive <br /> Today, we embark on a journey of flavors with a dish that promises <br /> to elevate your dining experience our Citrus Infusion Delight <br /> Lemon Garlic Roasted Chicken.
                        </p>
                    </div>

                    <Image src={"/recipe4.png"} alt="recipe1" width={1232} height={640}></Image>
                </div>

                <div className="mb-[60px]">
                    <h1 className="text-4xl font-bold">INGREDIENTS</h1>
                    <br />
                    <li>1 whole chicken about 3-4 pounds</li>
                    <li>2 tablespoons butter</li>
                    <li>Fresh herbs (rosemary, thyme, sage), finely chopped</li>
                    <li>Salt and freshly ground black pepper</li>
                    <li>Optional: root vegetables (carrots, potatoes, onions) for roasting</li>
                    <br />
                    <h1 className="text-4xl font-bold">INSTRUCTIONS</h1>
                    <br />
                    <p>
                        1. <span className="font-bold">Chicken Preparation:</span> Begin by cleaning the chicken and patting it dry. Preheat your oven.
                        <br />
                        2. <span className="font-bold">Herb Mixture:</span> In a small bowl, mix together butter, minced garlic, and chopped herbs. Add salt and pepper to taste. This herb mixture will be used to infuse the chicken with flavor.
                        <br />
                        3. <span className="font-bold">Seasoning The Chicken:</span> Rub the herb mixture thoroughly over the outside and inside of the chicken.
                        <br />
                        4. <span className="font-bold">Roasting In Earthenware:</span> If youre including root vegetables, place them at the bottom of the Miriams Earthen Cookware pot. Place the seasoned chicken on top. The pots natural far-infrared cooking process ensures the chicken cooks evenly, retaining its natural juices and flavors.
                        <br />
                        5.<span className="font-bold">Cooking To Perfection:</span> Cover the pot and roast the chicken in the oven. The exact cooking time will depend on the size of the chicken but typically takes about 1 to 1½ hours. The clay pots lid ensures the chicken remains moist and tender.
                        <br />
                        6.<span className="font-bold">Serving:</span> Once the chicken is beautifully roasted and the skin is golden, remove it from the oven. Let it rest for a few minutes before carving.
                        <br />
                        7.<span className="font-bold">Enjoy:</span> Serve the herb-infused chicken with the roasted vegetables as a wholesome, flavorful main dish perfect for your holiday table.
                    </p>
                </div>

                {/* Displaying Comments */}
                <div className="comments-section">
                    <h2 className="text-3xl font-bold">Comments:</h2>
                    <div className="comments-list">
                        {comments.map((comment, index) => (
                            <div key={index} className="comment p-4 border-b border-gray-300">
                                <h3 className="font-bold">{comment.name}</h3>
                                <p className="text-gray-600">{comment.email}</p>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <br />

                {/* Comment Section */}
                <div className="mb-[60px]">
                    <h1 className="text-2xl">WRITE<span className="text-2xl font-bold"> A COMMENT</span></h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className="w-full h-40 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Write your comment here..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <br />
                        <br />
                        <h1 className="font-bold">First and Last name</h1>
                        <br />
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-[400px] p-3 border border-gray-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <br />
                        <br />
                        <h1 className="font-bold">Email Address</h1>
                        <br />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-[400px] p-3 border border-gray-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <br />
                        <button
                            type="submit"
                            className="w-[132px] h-[38px] rounded-[24px] bg-orange-400 border hover:bg-white hover:border-black"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
