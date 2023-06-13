const canvas = document.getElementById('renderSurface');

let myFluid = new Fluid(canvas);

myFluid.mapBehaviors({
    paused: false,
    pressure: 0.01,
    curl: 10
})
myFluid.activate();