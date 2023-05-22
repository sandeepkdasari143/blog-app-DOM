const FETCH_URL = "https://jsonplaceholder.typicode.com/posts";

let blogs = [];
let blogTitle = "";
let blogBody = "";

const blogsListingSection = document.querySelector("#blogsListing");
const blogTitleInput = document.querySelector("#blogTitle");
const blogBodyInput = document.querySelector("#blogBody");
const createBlogBTN = document.querySelector("#createBlogBTN");


(async () => {
  const response = await fetch(FETCH_URL);
  const jsonData = await response.json();
  blogs = jsonData;
  localStorage.setItem("blogs", JSON.stringify(jsonData));
  renderBlogs(blogs);

  handleBlogTitleInputChange(blogTitleInput);
  handleBlogBodyInputChange(blogBodyInput);
  createBlog(createBlogBTN);
})();


function renderBlogs(blogs) {
  blogsListingSection.setAttribute("class", "flex flex-wrap gap-7 items-center justify-center");
  blogs.map((blog) => appendEachBlog(blog));
}

function appendEachBlog(blog) {
  const eachBlog = document.createElement("article");
  eachBlog.setAttribute(
    "class",
    "w-[300px] border bg-[rgb(27,27,39)] border-[rgb(107,114,128)] rounded-lg p-3 h-[350px] flex flex-col gap-3"
  );

  eachBlog.innerHTML = `
    <h1 class="font-bold line-clamp-2 text-lg">${blog.title}</h1>
    <p class="font-md line-clamp-3">${blog.body}</p>
    <div class="flex flex-row gap-5">
      <button class="px-5 py-2 border-none outline-none bg-green-500 rounded-md font-semibold text-white">
        View Blog
      </button>
      <button class="px-5 py-2 border-none outline-none bg-red-500 rounded-md font-semibold text-white">
        Delete Blog
      </button>
    </div>
  `;

  blogsListingSection.appendChild(eachBlog);
}

function handleBlogTitleInputChange(blogTitleInput) {
  blogTitleInput.addEventListener("change", (event) => {
    blogTitle = event.target.value;
  });
}

function handleBlogBodyInputChange(blogBodyInput) {
  blogBodyInput.addEventListener("change", (event) => {
    blogBody = event.target.value;
  });
}

function createBlog(createBlogBTN) {
  function submitBlogAndRender(event) {
    event.preventDefault();
    console.log(blogTitle, blogBody)
  }
  createBlogBTN.addEventListener("click", (event)=>submitBlogAndRender(event));
}

function deleteBlog() {
  
}
