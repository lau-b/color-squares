var htmlCube = '';
var size;

drawCube = function(size) {
  size = prompt('Enter the size of your cube [Heigt = Width]');
  for (var x = 0; x < size; x++) {
    for (var i = 0; i < size; i++) {
      htmlCube += '<div class="square"></div>';
    }
    htmlCube += '<br />';
  }
  $('#cube').append(htmlCube);
  htmlCube = '';
}
