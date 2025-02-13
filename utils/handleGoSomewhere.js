export const handleGoSomewhere = (path) => {
  const element = document.getElementById(path);

  if (element) {
    const elementBottomPosition = element.offsetTop + element.offsetHeight;
    window.scrollTo({
      top: elementBottomPosition - window.innerHeight,
      behavior: "smooth",
    });
  }
};
