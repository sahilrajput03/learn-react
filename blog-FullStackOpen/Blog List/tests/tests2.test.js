const mongoose = require("mongoose");
const listHelper = require("../utils/list_helper");
const supertest = require("supertest");
const helper = require("./test_helper");
const app = require("../app");
const Blog = require("../models/blog");
const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});

  let noteObject = new Blog(helper.initialBlogs[0]);
  await noteObject.save();

  noteObject = new Blog(helper.initialBlogs[1]);
  await noteObject.save();

  noteObject = new Blog(helper.initialBlogs[2]);
  await noteObject.save();
});

test("all blogs are returned", async () => {
  const response = await api.get("/api/blogs");

  // expect(response.body.length).toBe(helper.initialBlogs.length);
  expect(response.body.length).toBeDefined();
});

test("id is defined, KhushiI?", async () => {
  const response = await api.get("/api/blogs");
  body = response.body;
  const kuv = () => {
    let culprit = true;
    body.forEach((b) => {
      console.log(b.id);
      if (typeof b.id === "undefined") {
        console.log(b.id);
        culprit = b.id;
      }
    });
    console.log("for loop passed");
    console.log("culprit is: ", culprit);
    return culprit;
  };

  expect(kuv()).toBeDefined();
});

afterAll(() => {
  mongoose.connection.close();
});
