document.getElementById("btn-buscar").addEventListener("click", function () {
    const campoBusca = document.getElementById("campo-busca");
    const resultado = document.getElementById("resultado-busca");
  
    if (campoBusca.value.trim() !== "") {
      resultado.innerHTML = `Você buscou por: <strong>${campoBusca.value}</strong>`;
    } else {
      resultado.innerHTML = "";
    }
  });

// Swiper para categorias em destaque
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".destaqueSwiper", {
    slidesPerView: 5,
    spaceBetween: 12,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".categoria-next",
      prevEl: ".categoria-prev",
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    },
  });
});
  