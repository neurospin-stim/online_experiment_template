// This sends a well-formated request to save the data on the server
sendData = function(uuid, user, project, data) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://neurospin-data.cea.fr/experiments", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("uuid="+uuid+"&user="+user+"&project="+project+"&data="+data);
}
