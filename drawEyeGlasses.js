import { V3 } from "./V3.js";
import {
  getFaceMeshPointEyeRight2,
  getFaceMeshPointEyeLeft2,
  FACEMESH_POLYGON_NOSE_TOP,
  FACEMESH_POLYGON_FACE_TOP,
  FACEMESH_POLYGON_FACE_BOTTOM,
} from "./FACEMESH_POLYGON.js";

const drawEyeGlasses2 = (g, w, h, pr, pl, top, bottom, nosetop) => {
  const facecenter = V3.add(top, V3.mul(V3.sub(bottom, top), 0.55));
  //drawLineTest(g, w, h, facecenter, nosetop);
  const normal = V3.normalize(V3.sub(nosetop, facecenter));

  const segments = 32;

  const pnts = [];
  for (const p of [pr, pl]) {
    const pc = V3.center(p[0], p[1]);
    //const vup = V3.normalize(V3.sub(p[2], pc));
    const width = V3.length(V3.sub(p[1], p[0]));
    const gap = V3.mul(normal, width * .4);
    //const vup2 = V3.mul(vup, width / 2);
    //const pup = V3.add(pc, vup2);
    //const pdown = V3.sub(pc, vup2);
    //console.log(V3.len(normal), width * 100, V3.len(vup2) * 100); // width, vup2, vup)

    //const normal = V3.mul(V3.planeNormal(p[0], p[2], p[1]), width * .3);

    /*
    drawPointTest(g, w, h, p[0]);
    drawPointTest(g, w, h, p[1]);
    drawPointTest(g, w, h, V3.add(p[0], gap));
    drawPointTest(g, w, h, V3.add(p[1], gap));
    //drawPointTest(g, w, h, pc);
    drawPointTest(g, w, h, pup);
    drawPointTest(g, w, h, pdown);
    */

    const r = width * .9;
    const pc2 = V3.add(pc, gap);
    const ps = V3.circlePoints(pc2, normal, r, segments);
    pnts.push({ ps, pc: pc2, r });
  }
  g.strokeStyle = "red";
  g.lineWidth = 10;
  for (const { ps } of pnts) {
    g.beginPath();
    g.moveTo(ps[0].x * w, ps[0].y * h);
    for (let i = 1; i < ps.length; i++) {
      g.lineTo(ps[i].x * w, ps[i].y * h);
    }
    g.stroke();
  }
  const p1 = pnts[0].pc;
  const p2 = pnts[1].pc;
  const pa1 = V3.add(p1, V3.mul(V3.normalize(V3.sub(p2, p1)), pnts[0].r));
  const pa2 = V3.add(p2, V3.mul(V3.normalize(V3.sub(p1, p2)), pnts[1].r));
  g.beginPath();
  g.moveTo(pa1.x * w, pa1.y * h);
  g.lineTo(pa2.x * w, pa2.y * h);
  g.stroke();
};
export const drawEyeGlasses = (g, w, h, landmarks) => {
  const nosetop = landmarks[FACEMESH_POLYGON_NOSE_TOP];
  const top = landmarks[FACEMESH_POLYGON_FACE_TOP];
  const bottom = landmarks[FACEMESH_POLYGON_FACE_BOTTOM];

  const pr = getFaceMeshPointEyeRight2(landmarks);
  const pl = getFaceMeshPointEyeLeft2(landmarks);
  drawEyeGlasses2(g, w, h, pr, pl, top, bottom, nosetop);
};
