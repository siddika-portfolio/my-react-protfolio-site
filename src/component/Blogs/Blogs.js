import React, { useState } from 'react';
import BlogsItem from './BlogsItem/BlogsItem';
import './Blog.css'

const blogsData = [
    {
        key: '1',
        title: 'Javascript Some important property',
        img: 'https://i.ibb.co/qkxdTy9/javascript-basic-blog.png',
        description: 'This function converts capital letters to their equivalent lowercase letters.This is what we use when we need lowercase letters in a function.....',
        link: 'https://siddika-tas28.medium.com/javascript-some-important-property-4bfe3ee16ded',
    },
    {
        key: '2',
        title: 'Getting started 10 ES6 topics',
        img: 'https://i.ibb.co/0D90W6K/block-biniding.png',
        description: 'When I started learning JavaScript language I found it very difficult. Then I started practising but I understood JavaScript less......',
        link: 'https://siddika-tas28.medium.com/getting-started-10-es6-topics-2d62e3768e6e',
    },
    {
        key: '3',
        title: 'Beginner for react js some fundamental topics',
        img: 'https://i.ibb.co/RhRFhgn/react.jpg',
        description: 'React.js is a declarative, component-based JavaScript library for building user interfaces.React.js allows to build encapsulated components that manage their own state......',
        link: 'https://siddika-tas28.medium.com/beginner-for-react-js-some-fundamental-topics-4fe02433ee90',
    },
    {
        key: '4',
        title: 'Javascript some important tricky tips',
        img: 'https://i.ibb.co/sCygPCJ/javascript-blog.png',
        description: 'If you want to be a good web developer, you don’t just have to know to code. You must also know some important tricky tips......',
        link: 'https://siddika-tas28.medium.com/javascript-some-important-tricky-tips-aec91b303770',
    },
    

]

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData)
    return (
        <div className="blog-bg">
            <div className="container">
                <div className="project-div" id="project">
                    <div className=" py-5 ">
                        <h2 className="text-center py-4">My Blogs</h2>
                        <div className="row">
                            {
                                blogs.map(blog => <BlogsItem blog={blog}></BlogsItem>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;