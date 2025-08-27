const getCenter = (landmarks, pnt) => {
  let x = 0;
  let y = 0;
  let z = 0;
  const len = pnt.length;
  for (let i = 0; i < len; i++) {
    const p = landmarks[pnt[i]];
    x += p.x;
    y += p.y;
    z += p.z;
  }
  return { x: x / len, y: y / len, z: z / len };
};
const getLength = (landmarks, np1, np2) => {
  const p1 = landmarks[np1];
  const p2 = landmarks[np2];
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const dz = p1.z - p2.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

export const drawConnectorsIris = (g, landmarks, iris, opt) => {
  const cw = g.canvas.width;
  const ch = g.canvas.height;
  const p = getCenter(landmarks, iris);
  const r = getLength(landmarks, iris[0], iris[2]) / 2;
  g.beginPath();
  g.fillStyle = opt.color;
  g.arc(p.x * cw, p.y * ch, r * cw, 0, Math.PI * 2);
  g.fill();
};
