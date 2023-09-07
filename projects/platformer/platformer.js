$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    
    createPlatform(900, 590, 300, 10)
    //bottom bait platform horizontal
    createPlatform(800, 200, 20, 400)
    //walljump right
    createPlatform(1380, 0, 15, 800)
    //BEEG WALL
    createPlatform(1200, 600, 20, 60)
    //walljump left
    createPlatform(140, 700, 22, 80) 
    //cheater ramp

    //walljump right
    createPlatform(1010, 0, 30, 400) 
    //top platform to clip
    createPlatform(510, 200, 370, 10)
    // top platform left
    createPlatform(0, 110, 360, 70) 
    //blocker box
    createPlatform(1000, 100, 390, 100)
    //fake blocker
    createPlatform(270, 0, 4, 180)
    //this platform uses a fault in the collision detection to essentially be cosmetic
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
      createCollectable("max", 990, 0, 0,)
      createCollectable("gunther", 910, 0, 0,)
      createCollectable("database", 500, 90, 0)
      createCollectable("diamond", 100, 60, 0)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    
    //normal cannons
    createCannon("top", 500, 1300 );
    createCannon("left", 400, 240);
    createCannon("left", 500, 240);
    // insta death cannon
    createCannon( 'left' ,0, 2000 , 2 , 10000);


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
