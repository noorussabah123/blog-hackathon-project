"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Comment {
    name: string;
    email: string;
    comment: string;
}

export default function Recipe1() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        const storedComments = localStorage.getItem("comments");
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newComment = {
            name,
            email,
            comment,
        };

        const updatedComments = [...comments, newComment];
        setComments(updatedComments);

        localStorage.setItem("comments", JSON.stringify(updatedComments));

        setName("");
        setEmail("");
        setComment("");
    };

    return (
        <>
            <div className="w-full h-auto px-4 sm:px-8 md:px-12 lg:px-16">
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-black mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                        Quinoa Veggie Stir-Fry
                    </h1>
                    <p className="text-center mt-4 text-sm sm:text-base lg:text-lg">
                        Welcome to Cooks Delight, where culinary dreams come alive. Today, we embark on a journey of flavors with a dish that promises to elevate your dining experience – our Citrus Infusion Delight Lemon Garlic Roasted Chicken.
                    </p>
                </div>

                {/* Recipe Image */}
                <div className="w-full max-w-[1232px] mx-auto mb-12">
                    <Image src="/recipe3.png" alt="recipe1" width={1232} height={640} />
                </div>

                {/* Ingredients Section */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">INGREDIENTS</h1>
                    <ul className="list-disc pl-6 text-sm sm:text-base lg:text-lg">
                        <li>1 whole chicken about 3-4 pounds</li>
                        <li>2 tablespoons butter</li>
                        <li>Fresh herbs (rosemary, thyme, sage), finely chopped</li>
                        <li>Salt and freshly ground black pepper</li>
                        <li>Optional: root vegetables (carrots, potatoes, onions) for roasting</li>
                    </ul>
                </div>

                {/* Instructions Section */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">INSTRUCTIONS</h1>
                    <p className="text-sm sm:text-base lg:text-lg">
                        1. <span className="font-bold">Chicken Preparation:</span> Begin by cleaning the chicken and patting it dry. Preheat your oven.<br />
                        2. <span className="font-bold">Herb Mixture:</span> In a small bowl, mix together butter, minced garlic, and chopped herbs. Add salt and pepper to taste.<br />
                        3. <span className="font-bold">Seasoning The Chicken:</span> Rub the herb mixture thoroughly over the chicken.<br />
                        4. <span className="font-bold">Roasting In Earthenware:</span> If using root vegetables, place them at the bottom of the pot.<br />
                        5. <span className="font-bold">Cooking To Perfection:</span> Cover the pot and roast the chicken for 1 to 1½ hours.<br />
                        6. <span className="font-bold">Serving:</span> Let the chicken rest for a few minutes before carving.<br />
                        7. <span className="font-bold">Enjoy:</span> Serve with roasted vegetables and enjoy!
                    </p>
                </div>

                {/* Comments Section */}
                <div className="comments-section mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comments:</h2>
                    <div className="comments-list space-y-4">
                        {comments.map((comment, index) => (
                            <div key={index} className="comment p-4 border-b border-gray-300">
                                <h3 className="font-bold">{comment.name}</h3>
                                <p className="text-gray-600">{comment.email}</p>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comment Form */}
                <div className="mb-12">
                    <h1 className="text-2xl sm:text-3xl">WRITE<span className="font-bold"> A COMMENT</span></h1>
                    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                        <textarea
                            className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Write your comment here..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>

                        <div className="space-y-4">
                            <div>
                                <h1 className="font-bold">First and Last name</h1>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full sm:w-[400px] p-3 border border-gray-300 rounded-md"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <h1 className="font-bold">Email Address</h1>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full sm:w-[400px] p-3 border border-gray-300 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-2 rounded-md bg-orange-400 text-white hover:bg-white hover:border-black transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}