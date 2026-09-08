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
                totalt += data[i].ms_played;
            }
            document.getElementById("ttime").textContent = totalt/3600;
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

// what counts as a stream function --> skip/no-skip or time

// function for total time would need to convert from ms to hrs, mins, and sec
// function for total songs would need an array of song names to determine if a song has been played before 
// total stream is just all listening events passed through condition
// total artists would be a 2d array --> [[artist, number of unique songs listened, number of streams, number of albums, listening time], again]

// when to count an album --> single play from that album / multiple plays? + same song found in different album?
// ignore genres for now
