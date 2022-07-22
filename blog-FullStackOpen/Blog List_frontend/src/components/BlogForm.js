import React from "react";

const BlogForm = ({
  onSubmit,
  handleChangeBlog,
  handleChangeAuthor,
  handleChangeUrl,
  valueBlog,
  valueAuthor,
  valueUrl,
}) => {
  return (
    <div>
      <h2>Create a new blogpost</h2>

      <form onSubmit={onSubmit}>
        Title:
        <input value={valueBlog} onChange={handleChangeBlog} /><br></br>
        Author:
        <input value={valueAuthor} onChange={handleChangeAuthor} /><br></br>
        Url:
        <input value={valueUrl} onChange={handleChangeUrl} /><br></br>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BlogForm;
