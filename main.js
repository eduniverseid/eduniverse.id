//register//
function showForm(formType) {
  const loginBtn = document.getElementById("btnLogin");
  const registerBtn = document.getElementById("btnRegister");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (formType === "login") {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
  } else {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
    loginBtn.classList.remove("active");
    registerBtn.classList.add("active");
  }
}
//komentar on//
function kirimKomentar() {
  const isi = document.getElementById("isiKomentar").value;
  const nama = localStorage.getItem("username") || "Anonim";
  db.collection("komentar")
    .add({
      nama: nama,
      isi: isi,
      waktu: new Date(),
    })
    .then(() => {
      document.getElementById("isiKomentar").value = "";
      tampilkanKomentar();
    });
}

function tampilkanKomentar() {
  komentarDiv.innerHTML = "";
  db.collection("komentar")
    .orderBy("waktu", "desc")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        komentarDiv.innerHTML += `<p><b>${data.nama}:</b> ${data.isi}</p>`;
      });
    });
}

window.onload = tampilkanKomentar;
//komentar off//
