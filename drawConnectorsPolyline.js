export const drawConnectorsPolyline = (g, landmarks, polyline, opt) => {
  const cw = g.canvas.width;
  const ch = g.canvas.height;
  const p = landmarks[polyline[0]];
  g.beginPath();
  g.strokeStyle = opt.color;
  g.lineWidth = opt.lineWidth || 10; // y(d.lineWidth, { index: f, from: g, to: k }),
  g.moveTo(p.x * cw, p.y * ch);
  for (let i = 1; i < polyline.length; i++) {
    const p = landmarks[polyline[i]];
    g.lineTo(p.x * cw, p.y * ch);
  }
  g.stroke();
};
