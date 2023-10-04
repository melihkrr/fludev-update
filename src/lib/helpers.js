import $ from "jquery";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export const handleClickScroll = (id) => {
  console.log('adflgkad');
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section

    element.scrollIntoView({ behavior: "smooth" });
    document.body.classList.remove('mobile-menu-visible');
  }
};
