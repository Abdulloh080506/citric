import React from 'react';
import '../blog/style.css';
import BlogBanner from './blog_banner';
import BlogProducts from './blog_products';
import Pagenation from '../home/pagenation';

const Blog = () => {
  return (
    <>
    <BlogBanner/>
    <BlogProducts/>
    <Pagenation/>
    </>
  )
}

export default Blog;