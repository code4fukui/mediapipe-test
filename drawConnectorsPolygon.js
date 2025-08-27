export const drawConnectorsPolygon = (g, landmarks, polygon, opt) => {
  const cw = g.canvas.width;
  const ch = g.canvas.height;
  const p = landmarks[polygon[0]];
  g.beginPath();
  g.fillStyle = opt.color;
  //g.lineWidth = y(d.lineWidth, { index: f, from: g, to: k }),
  g.moveTo(p.x * cw, p.y * ch);
  for (let i = 1; i < polygon.length; i++) {
    const p = landmarks[polygon[i]];
    g.lineTo(p.x * cw, p.y * ch);
  }
  if (opt.clip) {
    g.clip();
  } else {
    g.fill();
  }
};
