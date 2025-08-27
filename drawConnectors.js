// from https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js

export const drawConnectors = (a, c, b, d, numon) => {
  const q = (a) => {
    var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return c ? c.call(a) : { next: h(a) };
  };
  const x = (a) => {
    const w = {
      color: "white",
      lineWidth: 4,
      radius: 6,
      visibilityMin: .5,
    };
    a = a || {};
    return Object.assign({}, w, { fillColor: a.color }, a);
  };
  const y = (a, c) => {
    return a instanceof Function ? a(c) : a;
  };
  if (c && b) {
    d = x(d);
    a.save();
    const e = a.canvas;
    let f = 0;
    const b2 = q(b);
    for (let g = b2.next(); !g.done; g = b2.next()) {
      let k = g.value;
      a.beginPath();
      g = c[k[0]];
      k = c[k[1]];
      g && k && (
        void 0 === g.visibility || g.visibility > d.visibilityMin
      ) && (
        void 0 === k.visibility || k.visibility > d.visibilityMin
      ) && (
        a.strokeStyle = y(d.color, { index: f, from: g, to: k }),
        a.lineWidth = y(d.lineWidth, { index: f, from: g, to: k }),
        a.moveTo(g.x * e.width, g.y * e.height),
        a.lineTo(k.x * e.width, k.y * e.height)
      );
      a.stroke();
      ++f;
    }
    if (numon) {
      const pos = [];
      for (const n of b) {
        if (!pos.includes(n[0])) pos.push(n[0]);
        if (!pos.includes(n[1])) pos.push(n[1]);
      }
      a.fillStyle = "black";
      a.lineWidth = 1;
      a.font = "normal 8px sans-serif";
      pos.sort();
      for (let i = 0; i < pos.length; i++) {
        const p = pos[i];
        const g = c[p];
        //if (p == 362 || p == 263) // 263 left inner, 362 left outer
        //if (p == 33 || p == 133) // 133 right inner, 33 right outer
        a.fillText(p, g.x * e.width, g.y * e.height);
      }
    }
    a.restore();
  }
};
