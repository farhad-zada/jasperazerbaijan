export const handleGoSomewhere = (path) => {
  const element = document.getElementById(path);

  if (element) {
    const elementTopPosition =
      window.pageYOffset + element.getBoundingClientRect().top;
    window.scrollTo({
      top: elementTopPosition,
      behavior: "smooth",
    });
  }
};
