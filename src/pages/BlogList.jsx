import {Link} from 'react-router-dom';

const BlogList = ({blogs, title}) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
    {
        blogs.map(blog=>{
            <div className='blog-preview' key={blog.id}>
             <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>developed by:{blog.author}</p>
              <p>in the year{blog.year}</p>
             </Link>
            </div>
        })
    }
    </div>
  )
}

export default BlogList
