var image1;
var image2;

function upload() {
    var fileinput = document.getElementById("finput");
    var canvas = document.getElementById("d1");
    var canvas2 = document.getElementById("d2");
    image1 = new SimpleImage(fileinput);
    image2 = new SimpleImage(fileinput);
    image1.drawTo(canvas);
    image2.drawTo(canvas2);
}

function Gray() {

    for (var pixel of image2.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var canimg = document.getElementById("d2");
    image2.drawTo(canimg);
}