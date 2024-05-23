"use client";
import { useRouter } from "next/navigation"; // Correct import for `useRouter`
import axios from "axios";
import React, { useEffect, useState } from "react";
import PostitemOne from "@/components/PostitemOne";

export type PostItemtype = {
  Img: string;
  _id: any;
  category: string;
  author: string;
  title: string;
  brief: string;
  avatar: string;
  top: boolean;
  trending: boolean;
};

const Post = () => {
  const router = useRouter();
  const [items, setItems] = useState<PostItemtype[]>([]);
  const [singleItem, setSingleItem] = useState<PostItemtype | {}>({});

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/postItem");
      setItems(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const getsingleItem = async (id: string) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/postItem/${id}`);
      setSingleItem(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchItems();
    getsingleItem("6649e8e9f3ad2a706db9159f");
  }, []);

  return (
    <section className="mt-5 flex flex-col lg:flex-row w-full justify-center  overflow-hidden  ">
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 overflow-hidden"  >
        {items.length > 0 &&
          items
            .filter((item: { top: Boolean }) => item.top)
            .map((item: PostItemtype, index) => {
              //const isFullDisplay = index === 0; // Use index === 0 for first element
              return (
                <>
                  <div
                    key={item._id}
                    className="flex w-96"
                  >
                    <PostitemOne item={item}  />
                  </div>
                </>
              );
            })}
      </div>
      <div className="flex p-2">
        <div className="flex border p-2  rounded-lg  flex-col">
          <div className="justify-center text-center items-center">
            <h1> Trending</h1>
          </div>
          {items
            .filter((item: { trending: Boolean }) => item.trending)
            .map((item, index) => (
              <ul key={item._id}>
               <div className=" p-5 justify-center">
               <li> {item.title}</li>
                <small> {item.author}</small>
                <hr />
               </div>
              </ul>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Post;
