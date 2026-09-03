const file = document.getElementById("spotifyle");

file.onchange = (e) => {
    const selected = e.target.files[0];    // select first one from the array :cry:

    // document.getElementById("filename").textContent = selected.name;

    const reader = new FileReader();        // inside bcz creates a new one for each selected file

    reader.onload = (e) => {
        const data = JSON.parse(reader.result)  // create an array of strings from read text
        
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].master_metadata_track_name);
        }

        document.getElementById("songn").textContent = data[0].master_metadata_track_name;
        //console.log(data);     // prints the array
    }

    reader.readAsText(selected);    // starts with file to be read
}