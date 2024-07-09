import React from 'react'
import Categories from './Blog Section Components/Categories'
import BlogCardsList from './Blog Section Components/BlogCardsList'
import SideBar from './Blog Section Components/SideBar'

const BlogsSection = () => {
    return (
        <div>
            <Categories/>

            <div className="md:flex">
                <BlogCardsList/>
                <SideBar/>
            </div>
        </div>
    )
}

export default BlogsSection
