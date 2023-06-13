import React, { useEffect, useRef } from "react";
import { BallMovement } from "./BallMovement";
import data from "./data";
import WallCollision from "./utils/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "./utils/BrickCollision";
import PaddleHit from "./utils/PaddleHit";
import PlayerStats from "./PlayerStats";

let bricks = [];

export default function Board() {
    const canvasRef = useRef(null);
    let { ballObj, paddleProps, player, brickObj } = data;
    
    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            
            // we don't have a y in the paddleProps data
            paddleProps.y = canvas.height - 30;

            // Asign bricks
            let newBrickSet = Brick(2, bricks, canvas, brickObj);

            // we handle the case where newBrickSet is undefined or empty
            if (newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet;
            }

            context.clearRect(0, 0, canvas.width, canvas.height);
            
            PlayerStats(context, player, canvas);
            
            // Display the bricks
            bricks.map((brick) => {return brick.draw(context)});

            BallMovement(context, ballObj);

            WallCollision(ballObj, canvas, player);

            let brickCollision;

            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);
        
                // if we hit the brick and it is not broke we change the direction of the ball and the remove the brock (broke = true)
                if (brickCollision.hit && !bricks[i].broke) {
                  // console.log(brickCollision);
                  if (brickCollision.axis === "X") {
                    ballObj.dx *= -1;
                    bricks[i].broke = true;
                  } else if (brickCollision.axis === "Y") {
                    ballObj.dy *= -1;
                    bricks[i].broke = true;
                  }
                  player.score += 10;
                }
              }
            Paddle(context, canvas, paddleProps);
            
            // Padlle and ball collision
            PaddleHit(ballObj, paddleProps);

            console.log('RequestAnimationFrame(render)');
            requestAnimationFrame(render); // it's calling the fct multiple times (see the console)
        }
        render();
    }, []);

    return (
        <canvas 
            id="canvas"
            ref={canvasRef}
            // onMouseMove={(e) => paddleProps.x = e.clientX} // cursor here is on the left of the paddle
            onMouseMove={(e) => paddleProps.x = e.clientX - paddleProps.width / 2 - 10} // adding the paddle width / 2 allow us to have the cursor in the middle of the paddle
            height="500"
            width={window.innerWidth - 20}
        />
    );
}