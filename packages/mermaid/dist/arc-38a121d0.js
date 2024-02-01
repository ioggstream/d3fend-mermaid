import { w as ln, c as B } from "./path-428ebac9.js";
import { a6 as an, a7 as H, a8 as O, a9 as rn, aa as g, O as on, ab as L, ac as _, ad as un, ae as t, af as sn, ag as tn, ah as fn } from "./mermaid-b08fd25b.js";
function cn(l) {
  return l.innerRadius;
}
function gn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function mn(l) {
  return l.endAngle;
}
function dn(l) {
  return l && l.padAngle;
}
function pn(l, h, E, q, v, A, C, a) {
  var I = E - l, i = q - h, n = C - v, m = a - A, r = m * I - n * i;
  if (!(r * r < g))
    return r = (n * (h - A) - m * (l - v)) / r, [l + r * I, h + r * i];
}
function W(l, h, E, q, v, A, C) {
  var a = l - E, I = h - q, i = (C ? A : -A) / L(a * a + I * I), n = i * I, m = -i * a, r = l + n, s = h + m, f = E + n, c = q + m, F = (r + f) / 2, o = (s + c) / 2, d = f - r, y = c - s, R = d * d + y * y, T = v - A, P = r * c - f * s, S = (y < 0 ? -1 : 1) * L(fn(0, T * T * R - P * P)), j = (P * y - d * S) / R, z = (-P * d - y * S) / R, w = (P * y + d * S) / R, p = (-P * d + y * S) / R, x = j - F, e = z - o, u = w - F, G = p - o;
  return x * x + e * e > u * u + G * G && (j = w, z = p), {
    cx: j,
    cy: z,
    x01: -n,
    y01: -m,
    x11: j * (v / T - 1),
    y11: z * (v / T - 1)
  };
}
function vn() {
  var l = cn, h = gn, E = B(0), q = null, v = yn, A = mn, C = dn, a = null, I = ln(i);
  function i() {
    var n, m, r = +l.apply(this, arguments), s = +h.apply(this, arguments), f = v.apply(this, arguments) - rn, c = A.apply(this, arguments) - rn, F = un(c - f), o = c > f;
    if (a || (a = n = I()), s < r && (m = s, s = r, r = m), !(s > g))
      a.moveTo(0, 0);
    else if (F > on - g)
      a.moveTo(s * H(f), s * O(f)), a.arc(0, 0, s, f, c, !o), r > g && (a.moveTo(r * H(c), r * O(c)), a.arc(0, 0, r, c, f, o));
    else {
      var d = f, y = c, R = f, T = c, P = F, S = F, j = C.apply(this, arguments) / 2, z = j > g && (q ? +q.apply(this, arguments) : L(r * r + s * s)), w = _(un(s - r) / 2, +E.apply(this, arguments)), p = w, x = w, e, u;
      if (z > g) {
        var G = sn(z / r * O(j)), M = sn(z / s * O(j));
        (P -= G * 2) > g ? (G *= o ? 1 : -1, R += G, T -= G) : (P = 0, R = T = (f + c) / 2), (S -= M * 2) > g ? (M *= o ? 1 : -1, d += M, y -= M) : (S = 0, d = y = (f + c) / 2);
      }
      var J = s * H(d), K = s * O(d), N = r * H(T), Q = r * O(T);
      if (w > g) {
        var U = s * H(y), V = s * O(y), X = r * H(R), Y = r * O(R), D;
        if (F < an)
          if (D = pn(J, K, X, Y, U, V, N, Q)) {
            var Z = J - D[0], $ = K - D[1], b = U - D[0], k = V - D[1], nn = 1 / O(tn((Z * b + $ * k) / (L(Z * Z + $ * $) * L(b * b + k * k))) / 2), en = L(D[0] * D[0] + D[1] * D[1]);
            p = _(w, (r - en) / (nn - 1)), x = _(w, (s - en) / (nn + 1));
          } else
            p = x = 0;
      }
      S > g ? x > g ? (e = W(X, Y, J, K, s, x, o), u = W(U, V, N, Q, s, x, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), x < w ? a.arc(e.cx, e.cy, x, t(e.y01, e.x01), t(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, x, t(e.y01, e.x01), t(e.y11, e.x11), !o), a.arc(0, 0, s, t(e.cy + e.y11, e.cx + e.x11), t(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, x, t(u.y11, u.x11), t(u.y01, u.x01), !o))) : (a.moveTo(J, K), a.arc(0, 0, s, d, y, !o)) : a.moveTo(J, K), !(r > g) || !(P > g) ? a.lineTo(N, Q) : p > g ? (e = W(N, Q, U, V, r, -p, o), u = W(J, K, X, Y, r, -p, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), p < w ? a.arc(e.cx, e.cy, p, t(e.y01, e.x01), t(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, p, t(e.y01, e.x01), t(e.y11, e.x11), !o), a.arc(0, 0, r, t(e.cy + e.y11, e.cx + e.x11), t(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, p, t(u.y11, u.x11), t(u.y01, u.x01), !o))) : a.arc(0, 0, r, T, R, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return i.centroid = function() {
    var n = (+l.apply(this, arguments) + +h.apply(this, arguments)) / 2, m = (+v.apply(this, arguments) + +A.apply(this, arguments)) / 2 - an / 2;
    return [H(m) * n, O(m) * n];
  }, i.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : B(+n), i) : l;
  }, i.outerRadius = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : B(+n), i) : h;
  }, i.cornerRadius = function(n) {
    return arguments.length ? (E = typeof n == "function" ? n : B(+n), i) : E;
  }, i.padRadius = function(n) {
    return arguments.length ? (q = n == null ? null : typeof n == "function" ? n : B(+n), i) : q;
  }, i.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : B(+n), i) : v;
  }, i.endAngle = function(n) {
    return arguments.length ? (A = typeof n == "function" ? n : B(+n), i) : A;
  }, i.padAngle = function(n) {
    return arguments.length ? (C = typeof n == "function" ? n : B(+n), i) : C;
  }, i.context = function(n) {
    return arguments.length ? (a = n ?? null, i) : a;
  }, i;
}
export {
  vn as d
};
