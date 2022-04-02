class V3 {
  static distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = p1.z - p2.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
    //return dx * dx + dy * dy + dz * dz;
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
    return Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
  }
  static normalize(p) {
    const l = V3.length(p);
    return { x: p.x / l, y: p.y / l, z: p.z / l };
  }
  static mul(p, n) {
    return { x: p.x * n, y: p.y * n, z: p.z * n };
  }
};

export { V3 };
