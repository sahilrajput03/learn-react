import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import BlogForm from "./components/BlogForm";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  // const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loginVisible, setLoginVisible] = useState(false);
  const [readyToFetch, setreadyToFetch] = useState(false);

  useEffect(() => {
    user &&
      readyToFetch &&
      blogService.getAll().then((initialNotes) => setBlogs(initialNotes.sort((a,b)=>b.likes-a.likes))) &&
      setreadyToFetch(false);
    // console.log("useeffect executed..");
  }, [user, readyToFetch]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      console.log('user:-',user)
      setUser(user);
      blogService.setToken(user.token);
      setreadyToFetch(true);
    }
  }, []);

  // const notesToShow = blogs;

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      setErrorMessage("Welcome to blogs application :)");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      // boobsinmouth
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setreadyToFetch(true);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const likePost = (id) => {
    const blog = blogs.find((n) => n.id === id);
    const changedBlog = { ...blog, likes: blog.likes+1 };

    blogService
      .update(id, changedBlog)
      .then((returnedBlog) => {
        setBlogs(blogs.map((blog) => (blog.id !== id ? blog : returnedBlog)));
        setreadyToFetch(true)
      })
      .catch(() => {
        setErrorMessage(
          `Network failed. Turn on your mobile data.`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
        // setNotes(blogs.filter((n) => n.id !== id));
      });
  };

  const deletePost = (id)=>{
    const [toBeDeletedBlog] = blogs.filter((b)=>b.id ===id)
    // window.confirm(toBeDeletedBlog.title)
    // const confirmed = window.confirm('Do you really want to delete:',toBeDeletedBlog.title,' by ',toBeDeletedBlog.author,' ?')
    // const confirmed = window.confirm('Do you really want to delete:',toBeDeletedBlog.title)
    const confirmed = window.confirm(`Do you really want to delete - ${toBeDeletedBlog.title} It was added by ${toBeDeletedBlog.author}.`)
    confirmed && blogService.deleteWithId(id).then((t)=> console.log(t))
    setreadyToFetch(true)
  }

  const rows = () =>{
    
    return blogs.map((b) => (
      <Blog
        key={b.id}
        title={b.title}
        author={b.author}
        likes={b.likes}
        url={b.url}
        user={b.user}
        currentuser={user.id}
        id={b.id}
        likePost={()=>likePost(b.id)}
        deletePost={()=>deletePost(b.id)}
      />
    ))
  }

  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? "none" : "" };
    const showWhenVisible = { display: loginVisible ? "" : "none" };

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>Login</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>
      </div>
    );
  };

  const handleChangeBlog = (event) => {
    setNewBlog(event.target.value);
  };
  const handleChangeAuthor = (event) => {
    setNewAuthor(event.target.value);
  };
  const handleChangeUrl = (event) => {
    setNewUrl(event.target.value);
  };

  const noteFormRef = React.createRef();

  const addNote = (event) => {
    event.preventDefault();
    noteFormRef.current.toggleVisibility();

    const noteObject = {
      title: newBlog,
      author: newAuthor,
      url: newUrl,
      // id: blogs.length + 1,
    };

    blogService.create(noteObject).then((data) => {
      setBlogs(blogs.concat(data));
      setErrorMessage(`${newBlog} CREATED BY ${newAuthor} WITH URL: ${newUrl}`);
      setNewBlog("");
      setNewAuthor("");
      setNewUrl("");
      setTimeout(() => {
        setErrorMessage(null);
      }, 10000);
    });
  };

    return (
    <div>
      <h1>Blogs</h1>

      <Notification message={errorMessage} />

      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} logged in</p>
          <button
            onClick={() => {
              window.localStorage.removeItem("loggedBlogappUser");
              setErrorMessage("You are logged out.");
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
              setUser(null);
              setLoginVisible(false);
              setBlogs([]);
            }}
          >
            Logout
          </button>
          <Togglable
            buttonLabel="Add new blog to the webiste"
            ref={noteFormRef}
          >
            <BlogForm
              onSubmit={addNote}
              valueBlog={newBlog}
              valueAuthor={newAuthor}
              valueUrl={newUrl}
              handleChangeBlog={handleChangeBlog}
              handleChangeAuthor={handleChangeAuthor}
              handleChangeUrl={handleChangeUrl}
            ></BlogForm>
          </Togglable>
        </div>
      )}

      <ul>{rows()}</ul>

      <Footer />
    </div>
  );
};

export default App;
