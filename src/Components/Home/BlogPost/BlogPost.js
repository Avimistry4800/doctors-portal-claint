import React from 'react';
import './BlogPost.css'

const BlogPost = ({blog}) => {
    return (
        <section className="blog-post col-md-4 col-sm-12 mt-4" >
            <div className="d-flex blog-data">
                <img src={blog.img} alt=""/>
                <div className=" justify-content-start">
                    <h5 style={{color:'#51DDDA'}}>{blog.author}</h5>
                    <p className="text-secondary">{blog.date}</p>
                </div>
            </div>
            <div className='blog-text'>
                <h4>{blog.title}</h4>
                <p className='blog-description'>{blog.description}</p>
            </div>
        </section>
    );
};

export default BlogPost;