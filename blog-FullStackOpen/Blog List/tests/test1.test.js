const listHelper = require("../utils/list_helper");

const blogslist_zero = [];
const blogslist_one = [
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  }
];

const blogslist_many = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }
];

test("dummy returns one", () => {
  const result = listHelper.dummy(blogslist_zero);
  expect(result).toBe(1);
});

describe("total likes", () => {
  test("of_empty_list_is_zero", () => {
    expect(listHelper.totalLikes(blogslist_zero)).toBe(0);
  });

  test("when_list_has_only_one_blog_equals_the_likes_of_that", () => {
    expect(listHelper.totalLikes(blogslist_one)).toBe(5);
  });

  test("of_a_blogger_list_is_calculated_right", () => {
    expect(listHelper.totalLikes(blogslist_many)).toBe(36);
  });

  const desiredBlog = {
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  };

  test("favourite_blog_test", () => {
    expect(listHelper.favouriteBlog(blogslist_many)).toEqual(desiredBlog);
  });

  const bloggist = {
    author: "Robert C. Martin",
    blogs: 3
  }
  
  test("Checking for blogger with max blogs",()=>{
    expect(listHelper.mysterious(blogslist_many)).toEqual(bloggist)
  })

  const mostlikeblogger = {
    author: "Edsger W. Dijkstra",
    likes: 12
  }

  test("author with most likes on single blogpost",()=>{
    expect(listHelper.mostLikesonsingleblog(blogslist_many)).toEqual(mostlikeblogger)
  })

  const mostlikebloggerToalLikes = {
    author: "Edsger W. Dijkstra",
    likes: 17
  }

  test("author with most likes cumulatively",()=>{
    expect(listHelper.mostLikes(blogslist_many)).toEqual(mostlikebloggerToalLikes)
  })

});
