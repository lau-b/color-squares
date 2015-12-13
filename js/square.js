$(document).ready(function() {
  drawCube(16);

  $('.square').mouseenter(function() {
		$(this).css("background", "#f0f0f0");
	});

  $('.clear').click(function() {
		clearCube();
	});

	$(".normal").click(function() {
		setCube();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			$(this).css("background", "#f0f0f0");
		});
	});

	$(".color").click(function() {
		setCube();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			$(this).css("background", randomColor());
		});
	});

	$(".opacity").click(function() {
		setCube();
		$(".square").unbind();
    $('.square').css('background', '#369').css('border', '1px solid #000');
		$(".square").mouseenter(function() {
			reduceOpacity($(this));
		})
	});

	$(".trail").click(function () {
		setCube();
    $('.square').css('background', '#369').css('border','1px solid #000');
		$(".square").unbind();
		$(".square").hover(function() {
			$(this).css('opacity', 0);
		}, function () {
			$(this).fadeTo('slow', 1);
		});
	});
});

function setCube() {
  drawCube(prompt('Enter rows x colums! Remember the total size of the grid stays the same!'));
  clearCube();
}

function clearCube() {
  $('.square').css('background', '#369').css('opacity', '1');
}

function drawCube(size) {
  var box = 960;
  var squareSize = (box - 4*size)/size;
  var cube = $('.cube').html("");
  for (var x = 0; x < size; x++) {
    for (var i = 0; i < size; i++) {
      cube.append($('<div></div>').addClass('square').height(squareSize).width(squareSize));
    }
    cube.append($('<div></div>').css('clear', 'both'));
  }
}

function reduceOpacity(elem) {
	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1
	if (nextOpacity > 0) { elem.css('opacity', nextOpacity); }
	else { elem.css('opacity', '0'); }
}

function randomColor() {
	var red = Math.floor(Math.random()*256)
	var blue = Math.floor(Math.random()*256)
	var green = Math.floor(Math.random()*256)
	return "#" + red.toHex() + blue.toHex() + green.toHex();
}

Number.prototype.toHex = function() {
	if (this < 16) { return '0' + this.toString(16); }
	return this.toString(16);
}
