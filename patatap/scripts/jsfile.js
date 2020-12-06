var keys = {
    q: {
        sound: new Howl({
          src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
          src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
          src: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
          src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
        t: {
        sound: new Howl({
          src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
          src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
          src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
          src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
          src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
          src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
          src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
        d: {
        sound: new Howl({
          src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
          src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
          src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
          src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
          src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
          src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
          src: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
          src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
          src: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
          src: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
          src: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
          src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
          src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}

myCircles = [];
function randomPoints() {
    var h = window.innerHeight;
    var w = window.innerWidth;
    return [Math.round(w * Math.random()), Math.round(h * Math.random())];
}

function onKeyDown(event) {
    
	if(keys[event.key]) {

        var myPoint = new Point(randomPoints()[0], randomPoints()[1]);
        var myCircle = new Path.Circle(myPoint, 500);
        myCircle.fillColor = keys[event.key].color;
        keys[event.key].sound.play();
        myCircles.push(myCircle);
    }
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

console.log(randomProperty(keys));

document.getElementById('myCanvas').onclick = function circleByClick() {
    var myPoint = new Point(randomPoints()[0], randomPoints()[1]);
    var myCircle = new Path.Circle(myPoint, 500);
    var chosenKey = randomProperty(keys)
    myCircle.fillColor = chosenKey.color;
    chosenKey.sound.play();
    myCircles.push(myCircle);
}

function onFrame(event) {
    for(i = 0; i < myCircles.length; i++) {
        myCircles[i].scale(0.9);
        myCircles[i].fillColor.hue += 1;

        if(myCircles[i].area < 1){
            myCircles[i].remove();
            myCircles.splice(i, 1);
        }
    }
}