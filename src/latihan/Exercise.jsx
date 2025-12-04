import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getPosts } from "./Service";

function Exercise() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPostsData(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-red-600">
          Post Cards
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {postsData.map((post) => (
            <UserCard 
              key={post.id} 
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;

