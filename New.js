const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.log('Request failed. Returned status of ' + xhr.status);
  }
};
xhr.send();
// Or
fetch('https://example.com/data')
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      console.log('Request failed. Returned status of ' + response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Request failed:', error);
  });
