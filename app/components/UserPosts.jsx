import React from 'react';

export default async function UserPosts({ promise }) {
  const posts = await promise;
  return (
    <div>
      <ul className="m-10">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="capitalize text-2xl mb-2">{post.title}</h2>
            <p className="capitalize text-xl mb-5">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
