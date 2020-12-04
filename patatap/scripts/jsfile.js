// Create a circle shaped path at the center of the view,
// with a radius of 70:

// var path = new Path.Circle({
// 	center: view.center,
// 	radius: 70,
// 	fillColor: 'red'
// });

myPoints = [];
function elementSize() {
    var h = window.innerHeight;
    var w = window.innerWidth;
    return [Math.round(w * Math.random()), Math.round(h * Math.random())];
}

console.log(typeof elementSize()[0]);

function onKeyDown(event) {
	// When a key is pressed, set the content of the text item:
	if(event.key==='a') {
        
        console.log(elementSize());
        
        var myPoint = new Point(elementSize()[0], elementSize()[1]);
        var myCircle = new Path.Circle(myPoint, 10);
        myCircle.fillColor = 'red';
    }
}

// function onFrame(event) {
// 	// Each frame, change the fill color of the path slightly by
// 	// adding 1 to its hue:
// 	// path.fillColor.hue += 1;
// }