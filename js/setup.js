'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardsInfo = [{
  'name': {
    'firstName': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    'secondName': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  },

  'coatColor': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],

  'eyeColor': ['black', 'red', 'blue', 'yellow', 'green'],

  'fireballColor': ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
}
];

var userDialog = document.querySelector('.setup');
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

var getFireballColor = function () {
  var fireballColor = wizardsInfo[0].fireballColor;
  var randomColor = fireballColor[Math.floor(Math.random() * fireballColor.length)];

  return randomColor;
};

var fragment = document.createDocumentFragment();
for (var i = 1; i <= 4; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment);

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (!evt.target.classList.contains('setup-user-name')) {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var changeCoatColor = function () {
  wizardCoat.removeAttribute('style');
  wizardCoat.setAttribute('fill', getCoatColor());
};

var changeEyeColor = function () {
  wizardEyes.setAttribute('fill', getEyeColor());
};

var changeFireballColor = function () {
  wizardFireball.setAttribute('style', 'background-color:' + getFireballColor());
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  changeCoatColor();
});

wizardEyes.addEventListener('click', function () {
  changeEyeColor();
});

wizardFireball.addEventListener('click', function () {
  changeFireballColor();
});
