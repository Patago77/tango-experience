document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      const moreInfo = card.querySelector('.more-info');
      const toggleBtn = card.querySelector('.toggle-info');

      if (toggleBtn && moreInfo) {
        toggleBtn.addEventListener('click', () => {
          moreInfo.classList.toggle('d-none');
          toggleBtn.textContent = moreInfo.classList.contains('d-none') ? 'Más información' : 'Menos información';
        });
      }
    });

    const bioButtons = document.querySelectorAll("#biografia .toggle-info");
    bioButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const moreInfo = btn.parentElement.nextElementSibling;
        if (moreInfo && moreInfo.classList.contains("more-info")) {
          moreInfo.classList.toggle("d-none");
          btn.textContent = moreInfo.classList.contains("d-none") ? "Leer más" : "Leer menos";
        }
      });
    });
    });
    document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const phone = form.querySelector("input[name='phone']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (!name) errors.push("El nombre es obligatorio.");
    if (!email || !emailRegex.test(email)) errors.push("Ingresá un correo electrónico válido.");
    if (!phone) errors.push("El teléfono es obligatorio.");
    if (!message) errors.push("El mensaje no puede estar vacío.");

    if (errors.length > 0) {
      e.preventDefault(); // Cancela el envío
      alert(errors.join("\n")); // Podés reemplazar esto con SweetAlert si preferís
    }
  });
});

 
