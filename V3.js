class V3 {
  static distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = p1.z - p2.z;
    return Math.hypot(dx, dy, dz);
  }
  static sub(p1, p2) {
    return { x: p1.x - p2.x, y: p1.y - p2.y, z: p1.z - p2.z };
  }
  static add(p1, p2) {
    return { x: p1.x + p2.x, y: p1.y + p2.y, z: p1.z + p2.z };
  }
  static zero() {
    return { x: 0, y: 0, z: 0 };
  }
  static length(p) {
    return Math.hypot(p.x, p.y, p.z);
  }
  static normalize(p) {
    const l = V3.length(p);
    return { x: p.x / l, y: p.y / l, z: p.z / l };
  }
  static mul(p, n) {
    return { x: p.x * n, y: p.y * n, z: p.z * n };
  }
  static center(p1, p2) {
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
      z: (p1.z + p2.z) / 2,
    };
  }
  static cross(v1, v2) {
    return {
      x: v1.y * v2.z - v1.z * v2.y,
      y: v1.z * v2.x - v1.x * v2.z,
      z: v1.x * v2.y - v1.y * v2.x,
    };
  }
  static dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }
  static planeNormal(p1, p2, p3) {
    const v1 = V3.sub(p2, p1);
    const v2 = V3.sub(p3, p1);
    const normal = V3.cross(v1, v2);
    return V3.normalize(normal);
  }
  static circlePoints(center, normal, radius, segments = 32) {
    const w = { x: 1, y: 0, z: 0 };
    if (Math.abs(normal.x) === 1) {
      w.x = 0;
      w.y = 1;
    }
    const u = V3.normalize(V3.cross(normal, w));
    const v = V3.normalize(V3.cross(normal, u));
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const theta = 2 * Math.PI * i / segments;
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);
      const x = center.x + radius * (cosTheta * u.x + sinTheta * v.x);
      const y = center.y + radius * (cosTheta * u.y + sinTheta * v.y);
      const z = center.z + radius * (cosTheta * u.z + sinTheta * v.z);
      points.push({ x, y, z });
    }
    return points;
  }
  static pointOnLine(a, b, c) {
    const ab = V3.sub(b, a);
    const ac = V3.sub(c, a);
    const t = V3.dot(ac, ab) / V3.dot(ab, ab);
    const pt = V3.add(a, V3.mul(V3.sub(b, a), t));
    const d = V3.length(V3.sub(c, pt));
    return { t, d };
  }
};

export { V3 };
