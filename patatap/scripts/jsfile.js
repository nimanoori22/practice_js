myPoints = [];
function elementSize() {
    var h = window.innerHeight;
    var w = window.innerWidth;
    return [Math.round(w * Math.random()), Math.round(h * Math.random())];
}

function onKeyDown(event) {
	// When a key is pressed, set the content of the text item:
	if(event.key==='a') {
        
        var myPoint = new Point(elementSize()[0], elementSize()[1]);
        var myCircle = new Path.Circle(myPoint, 300);
        myCircle.fillColor = 'red';
        myPoints.push(myCircle);
        console.log(myPoints);
    }
}

function onFrame(event) {
    for(i = 0; i < myPoints.length; i++) {
        myPoints[i].fillColor.hue += 1;
        myPoints[i].scale(0.9);
    }
}