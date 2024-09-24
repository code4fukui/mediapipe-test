class V2 {
  static distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.hypot(dx, dy);
  }
  static sub(p1, p2) {
    return { x: p1.x - p2.x, y: p1.y - p2.y };
  }
  static add(p1, p2) {
    return { x: p1.x + p2.x, y: p1.y + p2.y };
  }
  static zero() {
    return { x: 0, y: 0 };
  }
  static length(p) {
    return Math.hypot(p.x, p.y);
  }
  static normalize(p) {
    const l = V2.length(p);
    return { x: p.x / l, y: p.y / l };
  }
  static mul(p, w, h) {
    if (h === undefined) h = w;
    return { x: p.x * w, y: p.y * h };
  }
  static center(p1, p2) {
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };
  }
  static cross(v1, v2) {
    return {
      x: v1.y * v2.z - v1.z * v2.y,
      y: v1.z * v2.x - v1.x * v2.z,
    };
  }
  static dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }
};

export { V2 };
