const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

$(window).on("load", () => {
  setTimeout(() => {
    shuffleArray($(".carousel-inner .carousel-item")).each((i, e) => {
      const el = $(e);
      const imgUrl = el.data("url");
      if (imgUrl) {
        const w = Math.floor((el.width() * 1) / 100) * 100;
        const h = Math.floor((el.height() * 1) / 100) * 100;
        el.css({
          "background-image": `url('${imgUrl}?w=${w}&h=${h}&fit=crop&fm=webp&q=80')`,
          "background-size": "cover",
          "background-size": "cover",
          "background-position-x": "center",
          "background-position-y": "center"
        });
        if (i === 0) {
          el.addClass('active')
        }
      }
    });
  }, 500)
});
