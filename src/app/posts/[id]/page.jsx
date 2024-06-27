import { getPostDetails } from '@/Server/postApi';
import React from 'react';



const PostDetailsPage = async ({ params }) => {
    // console.log(params);
    const { title, body } = await getPostDetails(params.id)
    // console.log(postDetails);

    return (
        <div>
      
            <div>
                <h1> {title}</h1>
                <h4>Details: {body}</h4>
            </div>
        </div>
    );
};

export default PostDetailsPage;