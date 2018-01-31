'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COLUMNS_GAP = 50;
var TEXT_GAP = 20;
var COLUMN_WIDTH = 40;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var COLUMNS_X = CLOUD_X + COLUMNS_GAP;
var SHADOW_GAP = 10;
var COLUMNS_Y = 125;
var COLUMNS_MAX_HEIGHT = 150;
var fontSize = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, text) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP, 'Ура вы победили!');
  renderText(ctx, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + fontSize, 'Список результатов:');


  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {

    // Render Scores
    ctx.fillStyle = '#ccc';
    ctx.fillText(Math.round(times[i]), COLUMNS_X + (COLUMNS_GAP + COLUMN_WIDTH) * i, COLUMNS_Y + (COLUMNS_Y - TEXT_GAP / 2 - COLUMNS_MAX_HEIGHT * times[i] / maxTime));

    // Render Columns
    ctx.fillStyle = (getColumnColor(names, i));
    ctx.fillRect(COLUMNS_X + (COLUMNS_GAP + COLUMN_WIDTH) * i, COLUMNS_Y + (COLUMNS_Y - COLUMNS_MAX_HEIGHT * times[i] / maxTime), COLUMN_WIDTH, (COLUMNS_MAX_HEIGHT * times[i]) / maxTime);

    // Render Names
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], COLUMNS_X + (COLUMNS_GAP + COLUMN_WIDTH) * i, COLUMNS_Y + COLUMNS_MAX_HEIGHT);
  }
};


var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getColumnColor = function (names, nameIndex) {
  var columnColor;
  if (names[nameIndex] === 'Вы') {
    columnColor = 'rgba(255, 0, 0, 1)';
  } else {
    columnColor = 'rgba(38, 26, 218, ' + Math.random() + ')';
  }
  return columnColor;
};
