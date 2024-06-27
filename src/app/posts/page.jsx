import { getPosts } from '@/Server/postApi';
import Link from 'next/link';
import React from 'react';

// const getTime = async () => {
//     const res = await fetch('http://localhost:3000/time');
//     const data = await res.json();
//     console.log(data);
//     return data.currentTime;
// }

const PostsPage = async () => {
    const posts = await getPosts();
    // const currentTime = await getTime();
    const currentTime = new Date().toLocaleTimeString()
    // console.log(currentTime);

    return (
        <div>
            <h1>Time: {currentTime}</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    posts.slice(0, 20).map(({ title, id }) => <Link href={`/posts/${id}`}><div key={id} className='border-2 border-purple-700 p-4'>
                        <h1 className='text-3xl font-semibold '>{title}</h1>
                    </div></Link>)
                }
            </div>
        </div>
    );
};

export default PostsPage;