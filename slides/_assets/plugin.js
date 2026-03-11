options.plugins.push(
  RevealChalkboard,
  RevealMenu,
  RevealChart,
  RevealFullscreen,
  RevealPoll,
  RevealQnA,
  RevealSeminar,
  RevealAudioSlideshow,
  RevealAudioRecorder
);

function generateToken(length) {
  var token = "";
  while (token.length < length) {
    token += (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
  }
  return token.substr(0, length);
}

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function addParam(url, param, value) {
  var a = document.createElement('a'),
    regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g;
  var match, str = [];
  a.href = url;
  param = encodeURIComponent(param);
  while (match = regex.exec(a.search)) {
    if (param != match[1]) str.push(match[1] + (match[2] ? "=" + match[2] : ""));
  }
  str.push(param + (value ? "=" + encodeURIComponent(value) : ""));
  a.search = str.join("&");
  return a.href;
}

function logger(event) {
  //document.getElementById("seminar-status").innerHTML = event;
  console.log(event);
}

window.onload = function () {

  var room = getParameterByName("room") || generateToken(32);
  var link = addParam(window.location.href, "room", room);

  var roomElement = document.getElementById("room");

  console.log('roomElement=' + roomElement);

  if (roomElement !== null && typeof roomElement !== null && roomElement !== 'undefined') {
    console.log("room get");
    document.getElementById("room").innerHTML = link;
    document.getElementById("room").href = link;
  }

  var hostElement = document.querySelector("#host");

  console.log('hostElement=' + hostElement);

  if (hostElement !== null && typeof hostElement !== null && hostElement !== 'undefined') {
    console.log("host get");
    document.querySelector("#host").addEventListener('click', function (e) {
      e.preventDefault();
      RevealSeminar.open_or_join_room(Reveal.getConfig().seminar.password);
    });
  }

  var closeElement = document.querySelector("#close");

  console.log('closeElement=' + closeElement);

  if (closeElement !== null && typeof closeElement !== null && closeElement !== 'undefined') {
    console.log("close get");
    document.querySelector("#close").addEventListener('click', function (e) {
      e.preventDefault();
      RevealSeminar.close_room(Reveal.getConfig().seminar.password);
    });
  }

  var qrcode = new QRious({
    element: document.getElementById('qrcode'),
    level: 'H',
    size: 500,
    value: link
  });
}
