document.addEventListener("DOMContentLoaded", (_) => {
  fetch("./js/works.json")
    .then((r) => r.json())
    .then((d) => {
      d["p"]
        .sort((a, b) => Math.random() - Math.random())
        .forEach((e) => {
          console.log(e);
          let cn = document.querySelector("#posterTemplate").cloneNode(true);
          cn.querySelector("img").src = "./media/" + e.f;
          cn.querySelector("img").setAttribute("data-raw", "./media/" + e.f);
          cn.querySelector("img").setAttribute("alt", e.t + "\n" + e.d);
          cn.querySelector("h4").textContent = e.t;
          cn.querySelector("h6").textContent = e.a || "匿名希望";
          cn.querySelector("h6").classList.add(e.d ? "mb-3" : "mb-0");
          e.d
            ? (cn.querySelector("p").textContent = e.d)
            : cn.querySelector("p").remove();
          cn.classList.remove("domTemplate");
          document
            .querySelector("#worksAccordion-collapseOne > .accordion-body")
            .append(cn);
        });
      $("#posterTemplate").remove();
      d["c"]
        .sort((a, b) => Math.random() - Math.random())
        .forEach((e) => {
          console.log(e);
          let cn = document.querySelector("#characterTemplate").cloneNode(true);
          cn.querySelector("img").src = "./media/" + e.f;
          cn.querySelector("img").setAttribute("data-raw", "./media/" + e.f);
          cn.querySelector("img").setAttribute("alt", e.t + "\n" + e.d);
          cn.querySelector("h4").textContent = e.t;
          cn.querySelector("h6").textContent = e.a || "匿名希望";
          cn.querySelector("h6").classList.add(e.d ? "mb-3" : "mb-0");
          e.d
            ? (cn.querySelector("p").textContent = e.d)
            : cn.querySelector("p").remove();
          cn.classList.remove("domTemplate");
          document
            .querySelector("#worksAccordion-collapseTwo > .accordion-body")
            .append(cn);
        });
      $("#characterTemplate").remove();
      d["i"]
        .sort((a, b) => Math.random() - Math.random())
        .forEach((e) => {
          console.log(e);
          let cn = document.querySelector("#illustTemplate").cloneNode(true);
          cn.querySelector("img").src = "./media/" + e.f;
          cn.querySelector("img").setAttribute("data-raw", "./media/" + e.f);
          cn.querySelector("img").setAttribute("alt", e.t + "\n" + e.d);
          cn.querySelector("h4").textContent = e.t;
          cn.querySelector("h6").textContent = e.a || "匿名希望";
          cn.querySelector("h6").classList.add(e.d ? "mb-3" : "mb-0");
          e.d
            ? (cn.querySelector("p").textContent = e.d)
            : cn.querySelector("p").remove();
          cn.classList.remove("domTemplate");
          document
            .querySelector("#worksAccordion-collapseThree > .accordion-body")
            .append(cn);
        });
      $("#illustTemplate").remove();
      setLightboxOne(".zoomNagona");
      setLightboxMany(".zoomWorksPoster");
      setLightboxMany(".zoomWorksCharacter");
      setLightboxMany(".zoomWorksIllust");
      setLightboxMany(".zoomGoods");
    });
});
