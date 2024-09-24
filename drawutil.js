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
