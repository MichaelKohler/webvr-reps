'use strict';

const DATA = [{
  id: 1,
  name: 'Michael Kohler',
  anniversary: new Date('2012-01-01'),
  position: {
    x: -1.3,
    y: 1.5,
    z: 0
  },
  rotation: '0 90 0'
}, {
  id: 2,
  name: 'Duuu!',
  anniversary: new Date('2015-05-05'),
  position: {
    x: 1.3,
    y: 1.5,
    z: 0
  },
  rotation: '0 -90 0'
}];

const scene = document.querySelector('a-scene');

DATA.forEach((rep) => {
  console.log(rep);
  addTextElement(rep);
});

function addTextElement(rep) {
  const textElement = document.createElement('a-text');

  textElement.setAttribute('align', 'center');
  textElement.setAttribute('color', 'black');
  textElement.setAttribute('width', '5');
  textElement.setAttribute('side', 'double');

  const date = rep.anniversary;
  const dateFormatted = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  textElement.setAttribute('value', rep.name + '\n' + dateFormatted);

  scene.append(textElement);

  textElement.setAttribute('position', rep.position);
  textElement.setAttribute('rotation', rep.rotation);
}
