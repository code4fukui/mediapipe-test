export const drawCircle = (g, x, y, r) => {
  g.beginPath();
  g.arc(x, y, r, 0, 2 * Math.PI);
  g.stroke();
};
export const drawLine = (g, x1, y1, x2, y2) => {
  g.beginPath();
  g.moveTo(x1, y1);
  g.lineTo(x2, y2);
  g.stroke();
};
export const drawPolygon = (g, points) => {
  g.beginPath();
  const p0 = points[0];
  g.moveTo(p0.x, p0.y);
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    g.lineTo(p.x, p.y);
  }
  g.stroke();
};
