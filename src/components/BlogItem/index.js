// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogDetails} = props
  const {title, description, publishedDate} = eachBlogDetails

  return (
    <li className="blog-container">
      <div className="title-card">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
