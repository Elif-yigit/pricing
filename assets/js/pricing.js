function handlePageViewChange() {
  pageViews.innerText = pageViewRange.value;
 }
 
 pageViewRange.addEventListener("input", handlePageViewChange);
 
 
 