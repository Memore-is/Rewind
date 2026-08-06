const file = document.getElementById("spotifyle");

file.onchange = (e) => {
    const selected = e.target.files[0];    // select first one from the array :cry:

    // document.getElementById("filename").textContent = selected.name;

    const reader = new FileReader();        // inside bcz creates a new one for each selected file

    reader.onload = (e) => {             // after reading run this
        console.log(reader.result);     // prints what the reader read
    }

    reader.readAsText(selected);    // starts with file to be read
}