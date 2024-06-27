import React from 'react';
// import img from '';
import Image from 'next/image';

const AlbumPage = () => {
    // const images = [img1, img2, img3, img4, img5, img6, img7, img8]
    // console.log(images);
    return (
        <div>
       
            {
                [1,2,3,4,5,6,7,8]?.map((img)=> <Image key={img} src={`/images/${img}.jpg`} width='1920' height='1080'/>)
            }
        </div>
    );
};

export default AlbumPage;