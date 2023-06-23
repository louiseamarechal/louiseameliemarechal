export default function PlayerStats(ctx, player, canvas) {
    
    // // Name
    // ctx.font = "20px Arial";
    // ctx.fillStyle = "white";
    // ctx.fillText(`Name: ${player.name}`, 20, 30);
  
    // Lives
    (window.innerHeight < 900 || window.innerWidth < 900) ? (ctx.font = "15px Arial") : (ctx.font = "20px Arial");
    // ctx.font = "20px Arial";
    // ctx.fillStyle = "white";
    let gap = 0;
    for (let i = 0; i < player.lives; i++) {
      if (window.innerHeight < 900 || window.innerWidth < 900) {
        ctx.fillText("❤️", canvas.width / 2.5 + gap, 30);
      }
      else
        ctx.fillText("❤️", canvas.width / 3 + gap, 30);
      gap += 30;
    }
  
    // Score
    (window.innerHeight < 900 || window.innerWidth < 900) ? (ctx.font = "15px Arial") : (ctx.font = "20px Arial");
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${player.score}`, canvas.width - 65, 30);
    
    // Level
    (window.innerHeight < 900 || window.innerWidth < 900) ? (ctx.font = "15px Arial") : (ctx.font = "20px Arial");
    // ctx.font = "20px Arial";
    ctx.fillText(`Level: ${player.level}`, 20, 30);

}