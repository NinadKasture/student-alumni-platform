import React, { useState } from 'react';
import './Student.css';

// Header Component
const Header = () => {
  return (
    <header className="header">
      <h1>University Name</h1>
    </header>
  );
};

// Post Section Component with content, photo upload, and comments
const PostSection = () => {
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Handle post content change
  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPostImage(URL.createObjectURL(file)); // Use URL to preview the uploaded image
  };

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(''); // Clear comment input after adding
    }
  };

  return (
    <div className="post-section">
      <h2>Create a Post</h2>
      <textarea
        placeholder="Write your post here..."
        rows="4"
        value={postContent}
        onChange={handleContentChange}
      />

      {/* <div className="file-upload">
        <label htmlFor="upload-photo">Upload a Photo</label>
        <input type="file" id="upload-photo" onChange={handleImageUpload} />
      </div> */}

      {/* Preview uploaded image */}
      {postImage && <img src={postImage} alt="Uploaded" className="post-image-preview" />}
      
      <div className='post-btn'>
        <button>Post</button>
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        <textarea
          placeholder="Add a comment..."
          rows="2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className='cmt-btn'>
          <button onClick={handleAddComment}>Add Comment</button>
        </div>

        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Sidebar Section Component
const SidebarSection = () => {
  return (
    <div className="sidebar-section">
      <button>Referral</button>
      <button>Workshop</button>
      <button>Collab Projects</button>
      <button>Roadmap</button>
      <button>Mentor</button>
      <button>Financial Assistance</button>
      <button>Direct Message</button>
    </div>
  );
};

function Student() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <PostSection />
        <SidebarSection />
      </div>
    </div>
  );
}

export default Student;
