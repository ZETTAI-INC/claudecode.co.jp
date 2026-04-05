/* faq */
const faq = document.getElementsByClassName("faq")[0];
const faqBtn = Array.from(faq.getElementsByClassName("f-ques"));

faqBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let parent = btn.closest(".faq-item");
    parent.classList.toggle("expanded");
  });
});
