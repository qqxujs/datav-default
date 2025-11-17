var b = /* @__PURE__ */ ((e) => (e.single = "single", e.double = "double", e))(b || {}), w = /* @__PURE__ */ ((e) => (e.single = "single", e.double = "double", e))(w || {}), f = /* @__PURE__ */ ((e) => (e.flat = "flat", e.linearGradient = "linearGradient", e.image = "image", e))(f || {}), ue = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(ue || {}), le = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(le || {}), ae = /* @__PURE__ */ ((e) => (e.width = "width", e.curve = "curve", e.style = "style", e.color = "color", e))(ae || {}), fe = /* @__PURE__ */ ((e) => (e.fontFamily = "fontFamily", e.fontWeight = "fontWeight", e.fontSize = "fontSize", e.color = "color", e))(fe || {}), D = /* @__PURE__ */ ((e) => (e.single = "single", e.multiple = "multiple", e))(D || {}), r = /* @__PURE__ */ ((e) => (e.string = "string", e.options = "options", e.lineSelect = "lineSelect", e.iconfontSelect = "iconfontSelect", e.text = "text", e.number = "number", e.select = "select", e.search = "search", e.color = "color", e.multicolor = "multicolor", e.array = "array", e.hidden = "hidden", e.boolean = "boolean", e.radio = "radio", e.checkbox = "checkbox", e.buttonRadio = "buttonRadio", e.iconRadio = "iconRadio", e.percent = "percent", e.image = "image", e.imageSelect = "imageSelect", e.switch = "switch", e.stepper = "stepper", e.slider = "slider", e.keyBoard = "keyBoard", e.fill = "fill", e.margin = "margin", e.padding = "padding", e.line = "line", e.font = "font", e.suite = "suite", e.tabs = "tabs", e.menu = "menu", e.group = "group", e.menuChild = "menuChild", e.object = "object", e.datePicker = "datePicker", e.timePicker = "timePicker", e))(r || {}), de = /* @__PURE__ */ ((e) => (e["Microsoft Yahei"] = "微软雅黑", e.SimSun = "宋体", e.SimHei = "黑体", e.KaiTi = "楷体", e.FangSong = "仿宋", e.YouYuan = "幼圆", e.Arial = "Arial", e["Arial Black"] = "Arial Black", e.Impact = "Impact", e.Tahoma = "Tahoma", e.Verdana = "Verdana", e["Times New Roman"] = "Times New Roman", e.Georgia = "Georgia", e["Courier New"] = "Courier New", e["Brush Script MT"] = "Brush Script MT", e["Comic Sans MS"] = "Comic Sans MS", e["Lucida Console"] = "Lucida Console", e["Lucida Sans Unicode"] = "Lucida Sans Unicode", e))(de || {}), ie = /* @__PURE__ */ ((e) => (e.NOT = "$not", e.EQ = "$eq", e.NE = "$ne", e.GT = "$gt", e.LT = "$lt", e.GTE = "$gte", e.LTE = "$lte", e.IN = "$in", e.NIN = "$nin", e))(ie || {}), ne = /* @__PURE__ */ ((e) => (e.AND = "$and", e.OR = "$or", e))(ne || {});
const s = (e) => typeof e == "string" || e instanceof String, d = (e) => typeof e == "number" && !isNaN(e), n = (e) => Array.isArray(e), k = (e) => typeof e == "boolean", l = (e) => e !== null && typeof e == "object" && !n(e), v = (e) => e == null || n(e) && e.length === 0 || l(e) && Object.keys(e).length === 0, i = (e) => e == null, p = (e, t) => {
  e = Object(e);
  for (const u in e)
    Object.prototype.hasOwnProperty.call(e, u) && t(e[u], u, e);
  return e;
}, g = (e) => {
  const t = [];
  return p(e, (u) => {
    t.push(u);
  }), t;
}, ee = (e, ...t) => {
  e = Object(e);
  for (let u = 0; u < t.length; u++) {
    const a = t[u];
    p(a, (h, m) => {
      i(e[m]) && (e[m] = h);
    });
  }
  return e;
};
function R(e) {
  return n(e.default) ? e.default : [];
}
function V(e) {
  return k(e.default) ? !!e.default : e.default == "true" ? !0 : e.default == "false" ? !1 : e.default == "1" ? !0 : e.default != "0";
}
function x(e) {
  return s(e.default) ? e.default : d(e.default) ? `${e.default}` : "";
}
function $(e) {
  return n(e.default) ? e.default : [];
}
function N(e) {
  return s(e.default) ? e.default : "#000";
}
function B(e) {
  return e.default || "";
}
const G = function(e) {
  return d(e.default) ? e.default : 16;
};
function P(e) {
  return n(e.default) ? e.default : [16, 38];
}
function A(e) {
  return typeof (e.default - 0) == "number" ? e.default : 0;
}
function I(e) {
  return s(e.default) ? e.default : d(e.default) ? `${e.default}` : "";
}
function z(e) {
  return e.default || "";
}
function H(e) {
  return s(`${e.default}`) ? e.default : "";
}
function y(e) {
  return v(e.default) ? "" : e.default;
}
function O(e) {
  let t = "";
  if (!v(e.default))
    t = e.default;
  else if (!i(e.range) && e.range.length > 0)
    s(e.range[0]) ? t = e.range[0] : l(e.range[0]) && !i(e.range[0].value) ? t = e.range[0].value : g(e.range[0]).length == 1 && (t = g(e.range[0])[0]);
  else if (!i(e.searches))
    return e.searches[0];
  return t;
}
function X(e) {
  let t = "";
  return v(e.default) ? !i(e.options) && e.options.length > 0 && (t = e.options[0].value) : t = e.default, t;
}
function E(e) {
  return k(e.default) ? e.default : e.default == "true" ? !0 : e.default == "false" ? !1 : e.default == "1" ? !0 : (e.default == "0", !1);
}
function K(e) {
  return e.default || "00:00:00";
}
function Y(e) {
  let t = {
    width: 1,
    curve: "polyline",
    style: "solid",
    color: "#fff"
  };
  return l(e.default) && (t = { ...t, ...e.default }), e.enableHide == !0 && (t.show = !0), t;
}
function j(e) {
  return e.mode == w.single ? d(e.default) ? e.default : 0 : e.mode == w.double ? n(e.default) && e.default.length == 2 && d(e.default[0]) && d(e.default[1]) ? e.default : [0, 0] : 0;
}
function F(e) {
  return d(e.default - 0) ? e.default : 0;
}
function L(e) {
  const t = e.components || [f.flat], u = e.default;
  if (t.length == 1) {
    if (t[0] == f.flat)
      return u || "#000";
    if (t[0] == f.linearGradient && l(u))
      return ee({
        angle: 0,
        stops: [
          {
            offset: 0,
            color: "#000"
          },
          {
            offset: 1,
            color: "#000"
          }
        ]
      }, u);
    if (t[0] == f.image && l(u))
      return ee({
        fillType: "stretch",
        url: "https://img.alicdn.com/tfs/TB19njRJ7zoK1RjSZFlXXai4VXa-16-16.png",
        tileSize: 100
      }, u);
  } else
    return u && u.type && u.value ? u : t.indexOf(f.flat) > -1 ? {
      type: "flat",
      value: "#000"
    } : t.indexOf(f.linearGradient) > -1 ? {
      type: "linearGradient",
      value: {
        angle: 0,
        stops: [
          {
            offset: 0,
            color: "#000"
          },
          {
            offset: 100,
            color: "rgba(0,0,0,0.5)"
          }
        ]
      }
    } : t.indexOf(f.image) > -1 ? {
      type: "linearGradient",
      value: {
        fillType: "stretch",
        url: "https://img.alicdn.com/tfs/TB19njRJ7zoK1RjSZFlXXai4VXa-16-16.png",
        tileSize: 100
      }
    } : u;
  return "#000";
}
function M(e) {
  const t = {
    fontFamily: "Microsoft Yahei",
    fontWeight: "normal",
    color: "#fff",
    fontSize: 12
  };
  return l(e.default) ? { ...t, ...e.default } : (e.enableHide == !0 && (t.show = !0), t);
}
function W(e) {
  return s(e.default) ? e.default : "";
}
function J(e) {
  const t = {
    style: b.single,
    value: "#000"
  };
  if (l(e.default)) {
    if (e.default.style == b.single && e.default.value)
      return e.default;
    if (t.style == b.double && e.default.from && e.default.to && d(e.default.angle))
      return e.default;
  }
  return t;
}
function U(e) {
  return n(e.default) ? e.default : [];
}
function Z(e) {
  const t = S(e.children);
  return l(e.default) ? { ...t, ...e.default } : t;
}
function _(e) {
  return e.default;
}
function q(e) {
  let t = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  return l(e.default) && (t = { ...t, ...e.default }), e.enableHide == !0 && (t.show = !0), t;
}
function Q(e) {
  let t = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  return l(e.default) && (t = { ...t, ...e.default }), e.enableHide == !0 && (t.show = !0), t;
}
function o(e) {
  let t = e.default || {};
  return e.children && (t = { ...S(e.children), ...t }), e.enableHide && (t.show = !0), t;
}
function C(e) {
  const t = e.default || e._simplified_show;
  return k(t) ? !!e.default : t == "true" ? !0 : t == "false" ? !1 : t == "1" ? !0 : t == "0" ? !1 : t != "0";
}
function S(e) {
  const t = {};
  for (const u in e)
    e.hasOwnProperty(u) && (t[u] = se(e[u]));
  return t;
}
function se(e) {
  if (e.type === r.boolean) return V(e);
  if (e.type === r.keyBoard) return P(e);
  if (e.type === r.number) return G(e);
  if (e.type === r.percent) return A(e);
  if (e.type === r.text) return B(e);
  if (e.type === r.buttonRadio) return x(e);
  if (e.type === r.checkbox) return $(e);
  if (e.type === r.iconRadio) return I(e);
  if (e.type === r.imageSelect) return H(e);
  if (e.type === r.menu) return c(e);
  if (e.type === r.radio) return y(e);
  if (e.type === r.search) return O(e);
  if (e.type === r.select) return X(e);
  if (e.type === r.switch) return E(e);
  if (e.type === r.timePicker) return K(e);
  if (e.type === r.datePicker) return z(e);
  if (e.type === r.line) return Y(e);
  if (e.type === r.slider) return j(e);
  if (e.type === r.stepper) return F(e);
  if (e.type === r.color) return N(e);
  if (e.type === r.fill) return L(e);
  if (e.type === r.font) return M(e);
  if (e.type === r.image) return W(e);
  if (e.type === r.multicolor) return J(e);
  if (e.type === r.tabs) return U(e);
  if (e.type === r.array) return R(e);
  if (e.type === r.group) return Z(e);
  if (e.type === r.margin) return q(e);
  if (e.type === r.padding) return Q(e);
  if (e.type === r.suite) return o(e);
  if (e.type === r.hidden) return _(e);
  if (!e.type) return C(e);
  console.log("Type not found:", e.type);
}
function c(e) {
  const t = e.default || {};
  return l(e.default) ? e.default : (p(e.children, (u, a) => {
    const h = u.mode || D.single;
    h === D.single ? i(t[a]) && (t[a] = S(u.children)) : h === D.multiple && (l(t[a]) || (t[a] = {}), p(u.children, (m, T) => {
      i(t[a][T]) && (t[a][T] = S(m.children));
    }));
  }), t);
}
function te(e) {
  const t = {};
  for (const u in e)
    e.hasOwnProperty(u) && (t[u] = re(e[u]));
  return t;
}
const he = te;
function re(e) {
  if (e.type === r.boolean) return V(e);
  if (e.type === r.keyBoard) return P(e);
  if (e.type === r.number) return G(e);
  if (e.type === r.percent) return A(e);
  if (e.type === r.text) return B(e);
  if (e.type === r.buttonRadio) return x(e);
  if (e.type === r.checkbox) return $(e);
  if (e.type === r.iconRadio) return I(e);
  if (e.type === r.imageSelect) return H(e);
  if (e.type === r.menu) return c(e);
  if (e.type === r.radio) return y(e);
  if (e.type === r.search) return O(e);
  if (e.type === r.select) return X(e);
  if (e.type === r.switch) return E(e);
  if (e.type === r.timePicker) return K(e);
  if (e.type === r.datePicker) return z(e);
  if (e.type === r.line) return Y(e);
  if (e.type === r.slider) return j(e);
  if (e.type === r.stepper) return F(e);
  if (e.type === r.color) return N(e);
  if (e.type === r.fill) return L(e);
  if (e.type === r.font) return M(e);
  if (e.type === r.image) return W(e);
  if (e.type === r.multicolor) return J(e);
  if (e.type === r.tabs) return U(e);
  if (e.type === r.array) return R(e);
  if (e.type === r.group) return Z(e);
  if (e.type === r.margin) return q(e);
  if (e.type === r.padding) return Q(e);
  if (e.type === r.suite) return o(e);
  if (e.type === r.hidden) return _(e);
  if (!e.type) return C(e);
  console.log("Type not found:", e.type);
}
const me = {
  getDefaultConfig: he,
  getDefaultConfigForObject: te,
  getDefaultConfigForItem: re,
  getDefaultConfigForText: B,
  getDefaultConfigForNumber: G,
  getDefaultConfigForKeyBoard: P,
  getDefaultConfigForBoolean: V,
  getDefaultConfigForPercent: A,
  getDefaultConfigForButtonRadio: x,
  getDefaultConfigForCheckbox: $,
  getDefaultConfigForIconRadio: I,
  getDefaultConfigForDatePicker: z,
  getDefaultConfigForImageSelect: H,
  getDefaultConfigForMenu: c,
  getDefaultConfigForRadio: y,
  getDefaultConfigForSearch: O,
  getDefaultConfigForSelect: X,
  getDefaultConfigForSwitch: E,
  getDefaultConfigForTimePicker: K,
  getDefaultConfigForLine: Y,
  getDefaultConfigForSlider: j,
  getDefaultConfigForStepper: F,
  getDefaultConfigForColor: N,
  getDefaultConfigForFill: L,
  getDefaultConfigForFont: M,
  getDefaultConfigForImage: W,
  getDefaultConfigForMulticolor: J,
  getDefaultConfigForTabs: U,
  getDefaultConfigForArray: R,
  getDefaultConfigForGroup: Z,
  getDefaultConfigForHidden: _,
  getDefaultConfigForMargin: q,
  getDefaultConfigForPadding: Q,
  getDefaultConfigForSuite: o,
  getDefaultConfigForShow: C
};
export {
  f as TypeConfigFillComponents,
  fe as TypeConfigFontComponents,
  D as TypeConfigFontComponentsMode,
  ae as TypeConfigLineComponents,
  ue as TypeConfigMarginComponents,
  b as TypeConfigMulticolorStyle,
  le as TypeConfigPaddingComponents,
  ne as TypeConfigShowInPanelLogicalType,
  w as TypeConfigSliderMode,
  r as TypeControl,
  de as TypeFontFamily,
  ie as TypeOperator,
  me as default,
  he as getDefaultConfig,
  R as getDefaultConfigForArray,
  V as getDefaultConfigForBoolean,
  x as getDefaultConfigForButtonRadio,
  $ as getDefaultConfigForCheckbox,
  N as getDefaultConfigForColor,
  z as getDefaultConfigForDatePicker,
  L as getDefaultConfigForFill,
  M as getDefaultConfigForFont,
  Z as getDefaultConfigForGroup,
  _ as getDefaultConfigForHidden,
  I as getDefaultConfigForIconRadio,
  W as getDefaultConfigForImage,
  H as getDefaultConfigForImageSelect,
  re as getDefaultConfigForItem,
  P as getDefaultConfigForKeyBoard,
  Y as getDefaultConfigForLine,
  q as getDefaultConfigForMargin,
  c as getDefaultConfigForMenu,
  J as getDefaultConfigForMulticolor,
  G as getDefaultConfigForNumber,
  Q as getDefaultConfigForPadding,
  A as getDefaultConfigForPercent,
  y as getDefaultConfigForRadio,
  O as getDefaultConfigForSearch,
  X as getDefaultConfigForSelect,
  C as getDefaultConfigForShow,
  j as getDefaultConfigForSlider,
  F as getDefaultConfigForStepper,
  o as getDefaultConfigForSuite,
  E as getDefaultConfigForSwitch,
  U as getDefaultConfigForTabs,
  B as getDefaultConfigForText,
  K as getDefaultConfigForTimePicker
};
