
// ===================================
// NEXORA BUSINESS - JAVASCRIPT
// ===================================

// GANTI NOMOR INI DENGAN NOMOR WHATSAPP
// Format: 62 + nomor HP tanpa angka 0 di depan
const whatsappNumber = "6281234567890";

// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// TUTUP MENU SETELAH LINK DIKLIK
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// FORM KONTAK WHATSAPP
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Mohon lengkapi semua formulir!");
    return;
  }

  if (whatsappNumber === "6281234567890") {
    alert("Silakan ganti nomor WhatsApp pada file script.js terlebih dahulu.");
    return;
  }

  const text = `Halo Nexora Business!

Nama: ${name}
Email: ${email}

Pesan:
${message}

Saya ingin mendapatkan informasi lebih lanjut.`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

// TOMBOL WHATSAPP FLOATING
const whatsappFloat = document.getElementById("whatsappFloat");

whatsappFloat.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Halo Nexora Business, saya ingin bertanya mengenai layanan Anda."
)}`;

// TAHUN OTOMATIS
document.getElementById("year").textContent =
  new Date().getFullYear();

console.log("Nexora Business Website berhasil dijalankan!");
