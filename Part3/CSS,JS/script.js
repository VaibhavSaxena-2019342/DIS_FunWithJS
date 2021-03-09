function jumpTo(val)
{
  document.body.scrollTop = val;
}

keyplace = 0;
document.onkeydown = function (e)
{
    var keyCode = e.keyCode;
    if(keyCode == 37)
    {
      if(keyplace==0)
        openNav();
      else if(keyplace==1)
        closeLog();
    }
    if(keyCode == 39)
    {
      if(keyplace==0)
        openLog();
      else if(keyplace==-1)
        closeNav();
    }
};

function playm()
{
  vAudio = document.getElementById("divAudio");
  if(vAudio.paused)
  {
    vAudio.play();
    document.getElementById("musictag").innerHTML = "PAUSE MUSIC";
  }
  else
  {
    vAudio.pause();
    document.getElementById("musictag").innerHTML = "PLAY MUSIC";
  }
}

topbtn = document.getElementById("topbtnelem");
h = document.body.scrollHeight-window.innerHeight;
prg = document.getElementById('progelem');
window.onscroll = function()
{
  scrlfn();
  scrlfn2();
};
function scrlfn2()
{
  prgh = (window.pageYOffset/h)*100;
  prg.style.height = prgh + "%";
}
function scrlfn()
{
  if(document.body.scrollTop>20 || document.documentElement.scrollTop>20)
  {
    topbtn.style.display = "block";
  }
  else
  {
    topbtn.style.display = "none";
  }
}
function taketotop()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function topfront()
{
  document.getElementById("topbtnelem").src = "Resources/top2.png";
  document.getElementById("topbtnelem").style.backgroundColor = "black";
  document.getElementById("topbtnelem").style.borderColor = "orange";
}
function topback()
{
  document.getElementById("topbtnelem").src = "Resources/top.png";
  document.getElementById("topbtnelem").style.backgroundColor = "orange";
  document.getElementById("topbtnelem").style.borderColor = "black";
}

function loginimg()
{
  document.getElementById("loginimg").src = "Resources/icon1black.png";
}
function loginimgback()
{
  document.getElementById("loginimg").src = "Resources/icon1.png";
}

function head2open() {
  document.getElementById("myHead").style.width = "0";
  document.getElementById("myHead2").style.width = "66%";
  document.getElementById("myHead2").style.opacity = "1";
  document.getElementById("myHead").style.opacity = "0";
}

function head2close() {
  document.getElementById("myHead2").style.width = "0";
  document.getElementById("myHead").style.width = "66%";
  document.getElementById("myHead2").style.opacity = "0";
  document.getElementById("myHead").style.opacity = "1";
}

function CatOpen() {
  document.getElementById("Cat").style.width = "100%";
  document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myHead").style.width = "66%";
  document.getElementById("blck").style.opacity = "1";
  document.getElementById("d").style.opacity = "1";
  document.getElementById("myHead").style.opacity = "1";
  document.getElementById("b").style.opacity = "1";
  document.getElementById("c").style.opacity = "1";
  document.getElementById("f").style.opacity = "1";
  document.getElementById("e").style.opacity = "1";
}

function CatClose() {
   document.getElementById("Cat").style.width = "0px";
   document.getElementById("d").style.opacity = "0";
   document.getElementById("blck").style.opacity = "0";
   document.getElementById("b").style.opacity = "0";
   document.getElementById("c").style.opacity = "0";
   document.getElementById("f").style.opacity = "0";
   document.getElementById("e").style.opacity = "0";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("myHead").style.width = "0px";
    document.getElementById("Cat").style.width = "0px";
  document.getElementById("myHead2").style.opacity = "0";
  document.getElementById("myHead2").style.width = "0";
   document.getElementById("d").style.opacity = "0";
   document.getElementById("blck").style.opacity = "0";
  document.getElementById("myHead").style.opacity = "0";
  keyplace = -1;
  document.getElementById('lefttext').style.opacity = 0;
  document.getElementById('righttext').innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbspPress Right Key to Close Nav Menu";
   document.getElementById("b").style.opacity = "0";
   document.getElementById("c").style.opacity = "0";
   document.getElementById("f").style.opacity = "0";
   document.getElementById("e").style.opacity = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myHead").style.width = "66%";
  document.getElementById("myHead").style.opacity = "1";
  keyplace = 0;
  document.getElementById('lefttext').style.opacity = 1;
  document.getElementById('righttext').innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbspPress Right Key to Open Contact Info";
}

function openLog() {
    document.getElementById("myLogin").style.width = "100%";
  keyplace = 1;
}

function closeLog() {
    document.getElementById("myLogin").style.width = "0";
  keyplace = 0;
}

//Values for Particle.js library
particlesJS('bg1',
  {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#FFA500"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFA500",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
particlesJS('bg5',
  {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#FFA500"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFA500",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);