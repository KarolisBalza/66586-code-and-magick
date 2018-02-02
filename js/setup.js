'use strict';

var wizardsInfo = [{
  'name': {
    'firstName': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    'secondName': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  },

  'coatColor': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],

  'eyeColor': ['black', 'red', 'blue', 'yellow', 'green'],
}
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomName();
  wizardElement.querySelector('.wizard-coat').setAttribute('fill', getCoatColor());
  wizardElement.querySelector('.wizard-eyes').setAttribute('fill', getEyeColor());

  return wizardElement;
};

var getRandomName = function () {
  var name = wizardsInfo[0].name.firstName;
  var surname = wizardsInfo[0].name.secondName;
  var randomName = name[Math.floor(Math.random() * name.length)];
  var randomSurname = surname[Math.floor(Math.random() * surname.length)];

  return randomName + ' ' + randomSurname;
};

var getCoatColor = function () {
  var coatColor = wizardsInfo[0].coatColor;
  var randomColor = coatColor[Math.floor(Math.random() * coatColor.length)];

  return randomColor;
};

var getEyeColor = function () {
  var eyeColor = wizardsInfo[0].eyeColor;
  var randomColor = eyeColor[Math.floor(Math.random() * eyeColor.length)];

  return randomColor;
};

var fragment = document.createDocumentFragment();
for (var i = 1; i <= 4; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment);
