// listening for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

// create saveBookmark
function saveBookmark(e) {
  e.preventDefault();
  // get input fields
  let siteName = document.getElementById("siteName").value;
  let siteUrl = document.getElementById("siteUrl").value;

  // initiate bookmark
  let bookmark = {
    site: siteName,
    url: siteUrl
  };

  // Test if bookmark is null
  if (localStorage.getItem("bookmarks") === null) {
    // init array
    let bookmarks = [];
    // add to array
    bookmarks.push(bookmark);
    console.log(bookmark);
    // set to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    // get bookmarks from local storage
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  // clearform
  document.getElementById("myForm").reset();
}
