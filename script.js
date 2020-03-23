// Generate a random subject ID and add it to jsPsych's data to be saved
var subjectID = jsPsych.randomization.randomID(10);
jsPsych.data.addProperties({'ID': subjectID});

// The consent block, which points to the consent PAGE
var consent = {
    type:'external-html',
    url: "external-consent.html",
    cont_btn: "start"
};

// Instructions --- text declared in another file
var instructions = {
    type:'instructions',
    show_clickable_nav: true,
    button_label_next: "Suite",
    button_label_previous: "Précédent",
    pages: [instruction_text_p1, instruction_text_p2]
};

// Declare the demographic questionaire block. If this gets too long one could
// put the data into yet another file.
var survey = {
    type: 'survey-dropdown',
    preamble: 'Veuillez prendre le temps de répondre à ces quelques questions démographiques supplémentaires, nécessaires pour connaître l\'échantillon étudié:',
    questions: [{prompt: "Age:",
                 options: [ "18-25 ans", "25-40 ans", "40-60 ans", "> 60 ans"],
                 labels: ["18-25","25-40","40-60","60-more"]},
                {prompt: "Sexe:",
                 options: ["Homme", "Femme"],
                 labels: ["M", "F"]}]
};

// This forces jsPsych to wait for resources to be loaded before starting the
// experiment. Otherwise unpredictable behaviour ensue.
document.addEventListener("DOMContentLoaded", function(event) {
    // This detects touch events and register them
    window.USER_IS_TOUCHING = false;
    window.addEventListener('touchstart', function registerTouch() {
        window.USER_IS_TOUCHING = true;
        window.removeEventListener('touchstart', registerTouch, false);
    }, false);

    // This is required. Check the wiki for more information as to why.
    sendData(subjectID, "testUser", "testProject", "ping");

    // There we go, we can start the experiment.
    jsPsych.init({
        timeline: [consent, survey, instructions],
        on_finish: function() {
            final_data = jsPsych.data.get().csv();
            sendData(subjectID, "testUser", "testProject", final_data);
            document.getElementById("jspsych-content").innerHTML = "Merci de votre participation !";
            document.getElementById("jspsych-content").innerHTML += "<br/><br/>data:<br/><pre>" + final_data + "</pre>";
        }
    });
});
