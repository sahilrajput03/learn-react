const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// const getTokenFrom = (request) => {
//   const authorization = request.get("authorization");
//   if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
//     return authorization.substring(7);
//   }
//   return null;
// };

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs.map((blog) => blog.toJSON()));

  //# PromisesThenChaniningMethod
  // Blog.find({}).then(blogs => {response.json(blogs)})
});

blogsRouter.post("/", async (request, response) => {
  const body = request.body;
  //   const blog = new Blog(request.body)
  //   const blog = new Blog({blogTitle: request.body})

  if (body.title === undefined || body.url === undefined) {
    return response.status(400).json({ error: "••Bad•Request••" });
  }

  //newgencode
  // const token = getTokenFrom(request);

  try {
    const token = request.token;

    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    const user = await User.findById(decodedToken.id);

    const blogg = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id
    });

    const savedBlog = await blogg.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();
    response.json(savedBlog.toJSON());
  } catch (exception) {
    // console.error("EXCEPTION CAUGHT: ", exception);
    // next(exception);
  }

  //# PromisesThenChaniningMethod
  // blogg.save().then(result => {response.status(201).json(result)})
  //   response.json(savedBlog.toJSON());
});

blogsRouter.delete("/:id", async (request, response) => {
  try {
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch (exception) {}
});

blogsRouter.put("/:id", (request, response) => {
  const body = request.body;
  console.log("••••BOOMBOOOM•••• BOOMBOOM••••");
  console.log(body.likes);
  const blog = {
    likes: body.likes
  };

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote.toJSON());
    })
    .catch((error) => console.log(error));
});

module.exports = blogsRouter;
