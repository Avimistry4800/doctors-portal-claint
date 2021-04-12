import React from 'react';
import dr1 from '../../../images/Ellipse 1.png';
import dr2 from '../../../images/Ellipse 2.png';
import dr3 from '../../../images/Ellipse 3.png';
import BlogPost from '../BlogPost/BlogPost';

const Blog = () => {
    const blogData=[
        {
            title: `Check at least a doctor in a yer for your teeth`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil, fugiat neque nemo corporis odit.`,
            author: 'Dr. Harami',
            img : dr1,
            date : '22 March 2020'
        },
        {
            title: `Two times of brush in a day can keep your teeth healthy`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil, fugiat neque nemo corporis odit.`,
            author: 'Dr. Napa',
            img : dr2,
            date : '22 March 2020'
        },
        {
            title: `The tooth cancer is taking a challenge`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil, fugiat neque nemo corporis odit.`,
            author: 'Dr. Napa Extra',
            img : dr3,
            date : '22 March 2020'
        },
        
    ]

    return (
        <section className="blogs my-5 py-5 mt-5">
        <div className="container">
        <div className="section-header text-center">
        <h4 style={{color:'#51DDDA'}}>OUR BLOGS</h4>
        <h2 style={{color:'#3F475B'}}>Form Our Blog News</h2>
        </div>
        <div className="card-deck mt-5 row"> 
        {
            blogData.map(blog => <BlogPost blog ={blog}></BlogPost>)
        }
    </div>
        </div>
    </section>
    );
};

export default Blog;