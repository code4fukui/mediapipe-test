export const drawPointTest = (g, w, h, p, color = "red") => {
  const ew = 6;
  g.fillStyle = color;
  g.fillRect(p.x * w - ew / 2, p.y * h - ew / 2, ew, ew);
};
export const drawLineTest = (g, w, h, p1, p2, color = "red") => {
  const ew = 6;
  g.strokeStyle = color;
  g.lineWidth = ew;
  g.beginPath();
  g.moveTo(p1.x * w, p1.y * h);
  g.lineTo(p2.x * w, p2.y * h);
  g.stroke();
};
