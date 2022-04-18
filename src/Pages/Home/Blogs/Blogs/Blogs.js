import React from 'react';
import Answer1 from '../Answer1/Answer1';
import Answer2 from '../Answer2/Answer2';
import Answer3 from '../Answer3/Answer3';

const Blogs = () => {
    return (
        <div className='container mt-4'>
            <h2 className='text-center my-5'>Blogs</h2>
            <Answer1></Answer1>
            <Answer2></Answer2>
            <Answer3></Answer3>
        </div>
    );
};

export default Blogs;