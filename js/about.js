document.addEventListener("DOMContentLoaded", (_) => {
  fetch("./js/works.json")
    .then((r) => r.json())
    .then((d) => {
      d["p"].forEach((e) => {
        console.log(e);
        let cn = document.querySelector("#posterTemplate").cloneNode(true);
        cn.querySelector("img").src = "./media/" + e.f;
        cn.querySelector("img").setAttribute("data-raw", "./media/" + e.f);
        cn.querySelector("img").setAttribute("alt", e.t + "\n" + e.d);
        cn.querySelector("h4").textContent = e.t;
        cn.querySelector("h6").textContent = e.a;
        e.d
          ? (cn.querySelector("p").textContent = e.d)
          : cn.querySelector("p").remove();
        cn.classList.remove("domTemplate");
        document
          .querySelector("#worksAccordion-collapseOne > .accordion-body")
          .append(cn);
      });
      $("#posterTemplate").remove();
      setLightboxOne(".zoomNagona");
      setLightboxMany(".zoomWorksPoster");
      setLightboxMany(".zoomWorksCharacter");
      setLightboxMany(".zoomWorksIllust");
      setLightboxMany(".zoomGoods");
    });
});
