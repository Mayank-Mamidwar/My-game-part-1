//PRO-C44: MAKE YOUR OWN GAME - 2, by mayank
//goals:
//creating 1 character, of a game.
//giving that characte, an image and sprite.

//creating variables
var player;

function preload() {}

function setup() {
  createCanvas(800, 500);

  player = createSprite(200, 200, 10, 10);
  
}

function draw() {
  background(255, 0, 0);

  //condition for moving to the left
  if (keyDown(LEFT_ARROW)) {
    player.x = player.x - 10;
  }

  //condition for moving to the right
  if (keyDown(RIGHT_ARROW)) {
    player.x = player.x + 10;
  }

  //condition for moving to the down
  if (keyDown(DOWN_ARROW)) {
    player.y = player.y + 10;
  }

    //condition for moving to the up
    if (keyDown(UP_ARROW)) {
        player.y = player.y - 10;
      }

  drawSprites();
}
