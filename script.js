const file = document.getElementById("spotifyle");

file.addEventListener("change", (e) => {
    const selected = e.target.files[0];

    document.getElementById("filename").textContent = selected.name;
})