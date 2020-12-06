import $ from "./helpers/jq-helpers";

const portfolioItem = $(".portfolio-item.has-modal");
const _default = { innerHTML: "" };

portfolioItem.on("click", function() {
  window.syna.showModal({
    title: (this.querySelector(".title") || _default).innerHTML,
    subtitle: (this.querySelector(".subtitle") || _default).innerHTML,
    content: (this.querySelector(".content") || _default).innerHTML,
    background: (this.querySelector(".portfolio-background") || _default).src,
    image: (this.querySelector(".portfolio-image") || _default).src,
    icon: (this.querySelector(".portfolio-icon") || _default).innerHTML,
    labels: (this.querySelector(".badge-container") || _default).innerHTML,
    size: "md"
  });
});
