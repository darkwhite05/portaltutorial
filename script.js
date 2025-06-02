const sortBtns = document.querySelectorAll(".job-id li");
const jobItems = document.querySelectorAll(".jlist");

sortBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Toggle Active Button
    sortBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // 2. Get filter value
    const filter = btn.getAttribute("data-filter");

    // 3. Filter job items
    jobItems.forEach((item) => {
      const itemType = item.getAttribute("data-item");

      if (filter === "all" || itemType === filter) {
        item.style.display = "block";
        item.classList.remove("delete"); // Optional: control fade animation
      } else {
        item.style.display = "none";
        item.classList.add("delete"); // Optional: control fade animation
      }
    });
  });
});
