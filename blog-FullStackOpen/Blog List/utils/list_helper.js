// import _ from "lodash";
var _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (bloglist) => {
  const function32 = (blist) => blist.map((i) => i.likes);
  const listOfLikes = function32(bloglist);
  const reducer = (sum, item) => {
    return sum + item;
  };

  return bloglist.length === 0 ? 0 : listOfLikes.reduce(reducer, 0);
};

const favouriteBlog = (bloglist) => {
  const function32 = (blist) => blist.map((i) => i.likes);
  const listOfLikes = function32(bloglist);
  const favBlogLikesfun = () => {
    let max = listOfLikes[0];
    for (i = 0; i < listOfLikes.length; i++) {
      if (listOfLikes[i] > max) {
        max = listOfLikes[i];
      }
    }
    return max;
  };
  const favBlogLikes = favBlogLikesfun();
  const fav = bloglist.filter((t) => t.likes === favBlogLikes);
  const [blog] = fav;
  // delete blog._id
  // delete blog.__v
  // delete blog.url
  // the above method works too...

  // below method is @ https://stackoverflow.com/questions/40329742/removing-object-properties-with-lodash
  let model = {
    title: null,
    author: null,
    likes: null
  };

  //  var credentials = {
  //      fname:"xyz",
  //      lname:"abc",
  //      age:23
  //  };

  var nblog = _.pick(blog, _.keys(model));

  // console.log(nblog);

  // console.log(
  //   "List of all likes: ",
  //   listOfLikes,
  //   "Maximumlikes: ",
  //   favBlogLikes,
  //   "MaximulikesBlog: ",
  //   nblog
  // );
  return nblog;
};

const mysterious = (bloglist) => {
  const allauthorslist = bloglist.map((t) => t.author);

  function mode(array) {
    if (array.length == 0) return null;
    var modeMap = {};
    var maxEl = array[0],
      maxCount = 1;
    for (var i = 0; i < array.length; i++) {
      var el = array[i];
      if (modeMap[el] == null) modeMap[el] = 1;
      else modeMap[el]++;
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
  }
  const mostblogsauthor = mode(allauthorslist);
  const countofmostblogsauthor = allauthorslist.filter(
    (t) => t === mostblogsauthor
  ).length;
  // console.log("---------MY LOGGING SAHIL", mostblogsauthor);
  // console.log(countofmostblogsauthor);
  return { author: mostblogsauthor, blogs: countofmostblogsauthor };
};

const mostLikesonsingleblog = (bloglist) => {
  const alllikesarray = bloglist.map((t) => t.likes);

  function maxValue(arr) {
    let max = arr[0];

    for (let val of arr) {
      if (val > max) {
        max = val;
      }
    }
    return max;
  }

  let maxLikes = maxValue(alllikesarray);
  let maxLikesAuthors = bloglist.filter((t) => t.likes === maxLikes);
  let authorName = maxLikesAuthors[0].author;
  // console.log("AAAUUUTTTHHHOOORRRR: ", authorName, "LLIIIKKEEESS: ", maxLikes);
  return { author: authorName, likes: maxLikes };
};

const mostLikes = (bloglist) => {
  const allauthorslist = bloglist.map((t) => t.author);
  const uniqueAllAuthors = [...new Set(allauthorslist)];
  const authorsWithLikesCumutatively = [];
  console.log("uniqueAllAuthors: ", uniqueAllAuthors);

  let currentLikes;
  let blogsofoneauthor;
  let totalLikesCalculated = [];
  for (i = 0; i < uniqueAllAuthors.length; i++) {
    totalLikesCalculated[i] = 0;
    blogsofoneauthor = bloglist.filter((t) => t.author === uniqueAllAuthors[i]);
    // console.log("blogsofoneauthor", blogsofoneauthor);
    let mo = 0;
    for (let j = 0; j < blogsofoneauthor.length; j++) {
      mo = mo + blogsofoneauthor[j].likes;
      // console.log(`blogsofoneauthor[${i}].likes: `, blogsofoneauthor[j].likes);
    }

    console.log(`AFTER ITERATIONS:mo: `, mo);
    // console.log("BLOGLIST", bloglist);
    authorsWithLikesCumutatively.push({
      author: uniqueAllAuthors[i],
      likes: mo
    });
    totalLikesCalculated = 0;
  }

  // console.log("authorsWithLikesCumutatively: ", authorsWithLikesCumutatively)

  let likesArrayBlueMagic = authorsWithLikesCumutatively.map((t) => t.likes);
  function maxValue(arr) {
    let max = arr[0];

    for (let val of arr) {
      if (val > max) {
        max = val;
      }
    }
    return max;
  }

  let maxLikedAuthorCount = maxValue(likesArrayBlueMagic);
  let onlyman = authorsWithLikesCumutatively.filter(
    (t) => t.likes === maxLikedAuthorCount
  );
  let maxLikedAuthorCountName = onlyman[0].author;

  console.log("name:", maxLikedAuthorCountName, "count", maxLikedAuthorCount);
  return {
    author: maxLikedAuthorCountName,
    likes: maxLikedAuthorCount
  };
};

const fetchNonExistingId = ()=>{
  
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mysterious,
  mostLikesonsingleblog,
  mostLikes,
  fetchNonExistingId
};
