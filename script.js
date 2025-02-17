document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai input
    const kodeid = document.getElementById("kodeid").value.trim();
    const password = document.getElementById("password").value.trim();

    if (kodeid === "" || password === "") {
      alert("Kode ID dan Password harus diisi!");
      return;
    }

    // Ganti URL berikut dengan URL Web App Google Apps Script Anda
    const scriptURL = "https://script.google.com/macros/s/AKfycbyqa3H9xysGUj3quFv53palb3a4XErvKmyiJHgTJX2MkmjDhP9do78M3OdSrqBzOT1M/exec";

    // Susun URL dengan parameter action, kodeid, dan password
    const url = scriptURL +
      "?action=login&kodeid=" + encodeURIComponent(kodeid) +
      "&password=" + encodeURIComponent(password);

    console.log("Request URL:", url);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok: " + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        if (data.status === "success") {
          // Jika login berhasil, alihkan ke halaman Dashboard
          window.location.href = "https://SAFF35.github.io/Dashboard";
        } else {
          alert(data.message || "Login gagal!");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat koneksi ke server.");
      });
  });

  // Tombol HOME (jika ditampilkan) menuju URL utama
  const homeBtn = document.getElementById("homeBtn");
  if (homeBtn) {
    homeBtn.addEventListener("click", function () {
      window.location.href = "https://SAFF35.github.io/";
    });
  }
});
