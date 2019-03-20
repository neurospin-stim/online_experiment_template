<?php
// This is the directery in which the data is being saved. See sava_data.php to
// decide where that should be.
$directory = "<path to a secure place where php can write and you can read>";

// Count the files in said directory
$filecount = 0;
$files = glob($directory . "*");
if ($files){
    $filecount = count($files);
}

// Set the limit, and check against it whether you should load the experiment or
// another "thank you" page.
$limit = 150;
if ($filecount < $limit) {
    readfile('exp.html');
}
else {
    readfile('done.html');
}
?>
