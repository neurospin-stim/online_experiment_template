<?php
// get parameters from call AND escape potential attacks (?)
$project = escapeshellcmd($_POST['project']);

// This is the directery in which the data is being saved. See sava_data.php to
// decide where that should be.
$base_directory = "<path to a dir where php can write and you can read>";

$filename = $base_directory . $project . '/' . $_POST['filename'] . ".csv";
$data = $_POST['filedata'];

// Try to create the folder and give it generous permissions
if(!file_exists(dirname($filename)))
    mkdir(dirname($filename), 0777, true); // Fix permissions

if (!$handle = fopen($filename, 'w')) {
    exit;
}

// Then write the data to id
if (fwrite($handle, $data) === FALSE) {
    exit;
}

// Close and the handle to the file
fclose($handle);
?>
