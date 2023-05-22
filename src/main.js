const FETCH_URL = "https://jsonplaceholder.typicode.com/posts";
let blogs = [];
const blogsListingSection = document.querySelector("#blogs");

(async () => {
  const response = await fetch(FETCH_URL);
  const jsonData = await response.json();
  blogs = jsonData;
  localStorage.setItem("blogs", JSON.stringify(jsonData))
  renderBlogs(blogs);
})();

function renderBlogs(blogs) {
  blogsListingSection.setAttribute("class", "flex flex-wrap gap-3 items-center justify-center");
  blogs.map((blog) => appendEachBlog(blog));
}

function appendEachBlog(blog) {
  const eachBlog = document.createElement("article");
  eachBlog.setAttribute("class", "w-[300px] border p-3 h-[350px] flex flex-col gap-3");

  eachBlog.innerHTML = `
    <h1 class="font-bold text-2xl">${blog.title}</h1>
    <p class="font-semibold line-clamp-3">${blog.body}</p>
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
