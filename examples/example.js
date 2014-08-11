"use strict";

var Png = require("png").Png;
var fs  = require("fs");

var gretro = require("gretro");

gretro.use(require("../"));

var grid = function() {
  this
    .noFill().stroke(8)
    .line( 0,  60, 120,   0)
    .line(30,   0,  60, 150)
    .line(90,   0, 120, 150)
    .line(30, 150, 150,  90)
    .line( 0,  60, 150,  90)
    .fill(0)
    .circle(75, 75, 25);
};

var paint = function() {
  this
    .fill([ 1,  9,  2 ]).paint(  5,  30)
    .fill([ 2, 10,  3 ]).paint( 30,  60)
    .fill([ 3, 11,  4 ]).paint(  5, 105)
    .fill([ 4, 12,  5 ]).paint( 45, 145)
    .fill([ 5, 13,  6 ]).paint( 75,  15)
    .fill([ 6, 14,  7 ]).paint( 75,  40)
    .fill([ 7, 15,  8 ]).paint( 75,  75)
    .fill([ 6,  9,  9 ]).paint( 75, 110)
    .fill([ 5, 10, 10 ]).paint( 75, 135)
    .fill([ 4, 11, 11 ]).paint(105,   5)
    .fill([ 3, 12, 12 ]).paint(145,  45)
    .fill([ 2, 13, 13 ]).paint(120,  90)
    .fill([ 1, 14, 14 ]).paint(145, 120);
};

var cnv = new gretro.Canvas(150, 150).draw(grid).draw(paint);
var png = new Png(new Buffer(cnv.toRGB()), cnv.getWidth(), cnv.getHeight(), "rgb");
var png_image = png.encodeSync();

fs.writeFileSync(__dirname + "/example.png", png_image.toString("binary"), "binary");
