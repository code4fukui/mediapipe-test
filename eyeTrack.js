import { V3 } from "./V3.js";
import {
  getFaceMeshPointEyeRight2,
  getFaceMeshPointEyeLeft2,
  getFaceMeshPointEyeRight,
  getFaceMeshPointEyeLeft,
} from "./FACEMESH_POLYGON.js";
import { drawPointTest } from "./drawtest.js";

export const getEyeTrack = (piris, peyer, peyel) => {
  const td = V3.pointOnLine(peyer, peyel, piris);
  const x = (td.t - 0.5) * 2 + 0.5;
  return x;
};

export const getEyeTrackRight = (landmarks) => {
  const p = getFaceMeshPointEyeRight(landmarks);
  const pr = getFaceMeshPointEyeRight2(landmarks);
  return getEyeTrack(p, pr[1], pr[0]);
};

export const getEyeTrackLeft = (landmarks) => {
  const p = getFaceMeshPointEyeLeft(landmarks);
  const pr = getFaceMeshPointEyeLeft2(landmarks);
  return getEyeTrack(p, pr[0], pr[1]);
};
export const drawEyeTrack = (g, w, h, x) => {
  const pnt = { x, y: 0.2 };
  drawPointTest(g, w, h, pnt, "purple");
};
