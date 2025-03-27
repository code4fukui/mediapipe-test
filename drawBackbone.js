import { V3 } from "./V3.js";
import { V2 } from "./V2.js";
import { drawPolygon, drawCircle } from "./drawutil.js";

// https://chuoling.github.io/mediapipe/solutions/pose.html

export const drawBackbone = (g, p, opt) => {
  const w = g.canvas.width;
  const h = g.canvas.height;
  g.strokeStyle = opt.color;
  g.lineWidth = opt.lineWidth;

  const calcCenter = (p1, p2) => {
    const dy = p1.y - p2.y;
    return {
      x: (p1.x + p2.x) / 2,// + dy,
      y: (p2.y + p2.y) / 2,
    };
  };
  //drawCircle(g, p[12].x * w, p[12].y * h, 10);
  //drawCircle(g, p[11].x * w, p[11].y * h, 10);

  const p2 = [];
  // face
  p2.push([p[8], p[7]]);
  //p2.push([p[10], p[9]]); // mouth
  // neck
  p2.push([p[12], p[11]]);
  p2.push([p[24], p[23]]);

  //p2.push([p[26], p[25]]);
  p2.push([p[28], p[27]]);

  p2.forEach(i => {
    for (let j = 0; j < 2; j++) {
      const p = i[j];
      p.x *= w;
      p.y *= h;
      drawCircle(g, p.x, p.y, 10);
    }
  });
  const p3 = p2.map(i => calcCenter(i[0], i[1]));
  drawPolygon(g, p3);

  let difsum = 0;
  for (let i = 0; i < p3.length - 1; i++) {
    const p1 = p3[i];
    const p2 = p3[i + 1];
    const dy = p1.y - p2.y;
    const dx = p1.x - p2.x;
    const deg = Math.atan2(dy, dx) / Math.PI * 180;
    console.log(i, deg);
    difsum += Math.abs(deg + 90);
  }
  const point = 100 - (difsum / (p3.length - 1));
  console.log("point", point);
  return point;
};
