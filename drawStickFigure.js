import { V3 } from "./V3.js";
import { V2 } from "./V2.js";
import { drawCircle, drawLine } from "./drawutil.js";

export const drawStickFigure = (g, p, opt) => {
  const w = g.canvas.width;
  const h = g.canvas.height;
  g.strokeStyle = opt.color;
  g.lineWidth = opt.lineWidth;

  // face
  const r = V3.distance(p[8], p[7]) * 2.0 * w / 2;
  drawCircle(g, p[0].x * w, p[0].y * h, r);
  // neck
  const p1 = V3.center(p[12], p[11]);
  const dx = (p1.x - p[0].x) * w;
  const dy = (p1.y - p[0].y) * h;
  const th1 = Math.atan2(dy, dx);
  const p2x = p[0].x * w + Math.cos(th1) * r;
  const p2y = p[0].y * h + Math.sin(th1) * r;
  const r2 = V2.distance(V2.mul(p[0], w, h), V2.mul(p1, w, h));
  const p1a = r2 > r ? { x: p1.x * w, y: p1.y * h } : { x: p2x, y: p2y };
  drawLine(g, p1a.x, p1a.y, p2x, p2y);
  // spine
  const p3 = V3.center(p[24], p[23]);
  drawLine(g, p1a.x, p1a.y, p3.x * w, p3.y * h);
  // right leg
  const p4r = V3.center(p[32], p[30]);
  drawLine(g, p3.x * w, p3.y * h, p[26].x * w, p[26].y * h);
  drawLine(g, p[26].x * w, p[26].y * h, p4r.x * w, p4r.y * h);
  // left leg
  const p4l = V3.center(p[29], p[31]);
  drawLine(g, p3.x * w, p3.y * h, p[25].x * w, p[25].y * h);
  drawLine(g, p[25].x * w, p[25].y * h, p4l.x * w, p4l.y * h);
  // right hand
  drawLine(g, p1a.x, p1a.y, p[14].x * w, p[14].y * h);
  drawLine(g, p[14].x * w, p[14].y * h, p[20].x * w, p[20].y * h);
  // left hand
  drawLine(g, p1a.x, p1a.y, p[13].x * w, p[13].y * h);
  drawLine(g, p[13].x * w, p[13].y * h, p[19].x * w, p[19].y * h);
};
