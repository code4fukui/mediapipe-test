const FACEMESH_POLYGON_LIPS_BASE = [
  [0, 267, 269, 270, 409, 291, 375, 321, 405, 314, 17, 84, 181, 91, 146, 61, 185, 40, 39, 37],
  [13, 312, 311, 310, 415, 308, 324, 318, 402, 317, 14, 87, 178, 88, 95, 78, 191, 80, 81, 82],
];
export const FACEMESH_POLYGON_LIPS = [...FACEMESH_POLYGON_LIPS_BASE[0], 0, 13, ...FACEMESH_POLYGON_LIPS_BASE[1].reverse()];

const getCenter = (landmarks, pnt) => {
  let x = 0;
  let y = 0;
  let z = 0;
  const len = pnt.length;
  for (let i = 0; i < len; i++) {
    const p = landmarks[pnt[i][0]];
    x += p.x;
    y += p.y;
    z += p.z;
  }
  return { x: x / len, y: y / len, z: z / len };
};

export const getFaceMeshPointEyeRight = (landmarks) => {
  return getCenter(landmarks, FACEMESH_RIGHT_IRIS);
};
export const getFaceMeshPointEyeLeft = (landmarks) => {
  return getCenter(landmarks, FACEMESH_LEFT_IRIS);
};
