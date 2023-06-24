import data from "../data";
import ResetBallData from "./ResetBallData";

export default function AllBroken(bricks, player, ballObj) {
  let { brickObj, paddleProps } = data;
  let brokenBricks = 0;
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      brokenBricks++;
    }
  }

  if (brokenBricks === bricks.length) {
    player.level++;
    ResetBallData(ballObj, paddleProps);
    brickObj.y = 50;
  }
}
