// =============================
// THE MASTER'S CHEMIST SETTINGS
// Replace the number below with your store's WhatsApp number.
// Use country code, without + or spaces. Example: 919876543210
// =============================
const WHATSAPP_NUMBER = "916351164012";

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

document.querySelectorAll(".nav nav a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".nav").classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

function submitOrder(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const request = document.getElementById("request").value.trim();

  if (WHATSAPP_NUMBER.includes("X")) {
    document.getElementById("form-note").textContent =
      "Please configure WHATSAPP_NUMBER in script.js before using the order button.";
    return;
  }

  const message = `Hello THE MASTER'S CHEMIST,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMedicine / Request: ${encodeURIComponent(request)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
}

// Update the phone link after configuring the number.
const phoneLink = document.getElementById("phoneLink");
if (!WHATSAPP_NUMBER.includes("X")) {
  phoneLink.href = `tel:+${WHATSAPP_NUMBER}`;
  phoneLink.textContent = `+${WHATSAPP_NUMBER}`;
}
