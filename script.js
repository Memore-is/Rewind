const file = document.getElementById("spotifyle");

file.onchange = (e) => {
    const selected = e.target.files[0];    // select first one from the array :cry:
    let totalt= 0;
    let totals=0;
    let totalst= 0;

    // document.getElementById("filename").textContent = selected.name;

    const reader = new FileReader();        // inside bcz creates a new one for each selected file

    reader.onload = (e) => {
        const data = JSON.parse(reader.result)  // create an array of strings from read text
        
        for (let i = 0; i < data.length; i++) { 
            //document.getElementById("songn").textContent += data[i].master_metadata_track_name;
            //document.getElementById("ttime").textContent = (totalt + data[i].ms_played)/3600;

            if (data[i].ms_played <= 30*60) {
                totals++;
                totalt += (data[i].ms_played)/3600;
            }
            document.getElementById("ttime").textContent = totalt;
            document.getElementById("tsongs").textContent = totals;
            document.getElementById("tstreams").textContent = i;
            document.getElementById("talbums").textContent = i;
            document.getElementById("tartists").textContent = i;
            document.getElementById("tgenres").textContent = i;
        }

        //console.log(data);     // prints the array
    }

    reader.readAsText(selected);    // starts with file to be read
}