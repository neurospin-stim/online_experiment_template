// Function to POST the data and save it
function SaveData(project, filename, filedata) {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'save-data.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText !== "GOT IT") {
            // This means that all went fine, in theory.
        }
        else if (xhr.status !== 200) {
            // alert('Request failed.  Returned status of ' + xhr.status);
        }
    };

    xhr.send(encodeURI('project=' + project+'&filename=' + filename+'&filedata=' + filedata));
    // document.body.innerHTML = filedata;
    document.getElementById("jspsych-content").innerHTML = "Merci de votre participation !";

    // Remove this when publishing
    document.getElementById("jspsych-content").innerHTML += "<br/><br/>data:<br/><pre>" + filedata + "</pre>"; 
}

