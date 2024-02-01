import { d as xp, c as sn, l as Wr, K as Da, L as Yl, j as ni, r as Tp, a3 as Cp, a4 as Dp, a5 as Lp } from "./mermaid-50853933.js";
import { a as Sp } from "./createText-5016ff4d.js";
var ji = function() {
  var me = function(j, Y, te, S) {
    for (te = te || {}, S = j.length; S--; te[j[S]] = Y)
      ;
    return te;
  }, he = [1, 4], ee = [1, 13], de = [1, 12], H = [1, 15], N = [1, 16], T = [1, 20], w = [1, 19], L = [6, 7, 8], z = [1, 26], U = [1, 24], P = [1, 25], Z = [6, 7, 11], D = [1, 6, 13, 15, 16, 19, 22], $ = [1, 33], _ = [1, 34], Q = [1, 6, 7, 11, 13, 15, 16, 19, 22], ne = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: function(Y, te, S, V, R, W, ce) {
      var pe = W.length - 1;
      switch (R) {
        case 6:
        case 7:
          return V;
        case 8:
          V.getLogger().trace("Stop NL ");
          break;
        case 9:
          V.getLogger().trace("Stop EOF ");
          break;
        case 11:
          V.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          V.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          V.getLogger().info("Node: ", W[pe].id), V.addNode(W[pe - 1].length, W[pe].id, W[pe].descr, W[pe].type);
          break;
        case 16:
          V.getLogger().trace("Icon: ", W[pe]), V.decorateNode({ icon: W[pe] });
          break;
        case 17:
        case 21:
          V.decorateNode({ class: W[pe] });
          break;
        case 18:
          V.getLogger().trace("SPACELIST");
          break;
        case 19:
          V.getLogger().trace("Node: ", W[pe].id), V.addNode(0, W[pe].id, W[pe].descr, W[pe].type);
          break;
        case 20:
          V.decorateNode({ icon: W[pe] });
          break;
        case 25:
          V.getLogger().trace("node found ..", W[pe - 2]), this.$ = { id: W[pe - 1], descr: W[pe - 1], type: V.getType(W[pe - 2], W[pe]) };
          break;
        case 26:
          this.$ = { id: W[pe], descr: W[pe], type: V.nodeType.DEFAULT };
          break;
        case 27:
          V.getLogger().trace("node found ..", W[pe - 3]), this.$ = { id: W[pe - 3], descr: W[pe - 1], type: V.getType(W[pe - 2], W[pe]) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: he }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: he }, { 6: ee, 7: [1, 10], 9: 9, 12: 11, 13: de, 14: 14, 15: H, 16: N, 17: 17, 18: 18, 19: T, 22: w }, me(L, [2, 3]), { 1: [2, 2] }, me(L, [2, 4]), me(L, [2, 5]), { 1: [2, 6], 6: ee, 12: 21, 13: de, 14: 14, 15: H, 16: N, 17: 17, 18: 18, 19: T, 22: w }, { 6: ee, 9: 22, 12: 11, 13: de, 14: 14, 15: H, 16: N, 17: 17, 18: 18, 19: T, 22: w }, { 6: z, 7: U, 10: 23, 11: P }, me(Z, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: T, 22: w }), me(Z, [2, 18]), me(Z, [2, 19]), me(Z, [2, 20]), me(Z, [2, 21]), me(Z, [2, 23]), me(Z, [2, 24]), me(Z, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: z, 7: U, 10: 32, 11: P }, { 1: [2, 7], 6: ee, 12: 21, 13: de, 14: 14, 15: H, 16: N, 17: 17, 18: 18, 19: T, 22: w }, me(D, [2, 14], { 7: $, 11: _ }), me(Q, [2, 8]), me(Q, [2, 9]), me(Q, [2, 10]), me(Z, [2, 15]), me(Z, [2, 16]), me(Z, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, me(D, [2, 13], { 7: $, 11: _ }), me(Q, [2, 11]), me(Q, [2, 12]), { 21: [1, 37] }, me(Z, [2, 25]), me(Z, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: function(Y, te) {
      if (te.recoverable)
        this.trace(Y);
      else {
        var S = new Error(Y);
        throw S.hash = te, S;
      }
    },
    parse: function(Y) {
      var te = this, S = [0], V = [], R = [null], W = [], ce = this.table, pe = "", Oe = 0, Me = 0, Ye = 2, at = 1, dt = W.slice.call(arguments, 1), ke = Object.create(this.lexer), Ve = { yy: {} };
      for (var Ze in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Ze) && (Ve.yy[Ze] = this.yy[Ze]);
      ke.setInput(Y, Ve.yy), Ve.yy.lexer = ke, Ve.yy.parser = this, typeof ke.yylloc > "u" && (ke.yylloc = {});
      var nt = ke.yylloc;
      W.push(nt);
      var ht = ke.options && ke.options.ranges;
      typeof Ve.yy.parseError == "function" ? this.parseError = Ve.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function it() {
        var er;
        return er = V.pop() || ke.lex() || at, typeof er != "number" && (er instanceof Array && (V = er, er = V.pop()), er = te.symbols_[er] || er), er;
      }
      for (var tt, yt, wt, Pt, gt = {}, dr, Wt, ln, Zr; ; ) {
        if (yt = S[S.length - 1], this.defaultActions[yt] ? wt = this.defaultActions[yt] : ((tt === null || typeof tt > "u") && (tt = it()), wt = ce[yt] && ce[yt][tt]), typeof wt > "u" || !wt.length || !wt[0]) {
          var La = "";
          Zr = [];
          for (dr in ce[yt])
            this.terminals_[dr] && dr > Ye && Zr.push("'" + this.terminals_[dr] + "'");
          ke.showPosition ? La = "Parse error on line " + (Oe + 1) + `:
` + ke.showPosition() + `
Expecting ` + Zr.join(", ") + ", got '" + (this.terminals_[tt] || tt) + "'" : La = "Parse error on line " + (Oe + 1) + ": Unexpected " + (tt == at ? "end of input" : "'" + (this.terminals_[tt] || tt) + "'"), this.parseError(La, {
            text: ke.match,
            token: this.terminals_[tt] || tt,
            line: ke.yylineno,
            loc: nt,
            expected: Zr
          });
        }
        if (wt[0] instanceof Array && wt.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + yt + ", token: " + tt);
        switch (wt[0]) {
          case 1:
            S.push(tt), R.push(ke.yytext), W.push(ke.yylloc), S.push(wt[1]), tt = null, Me = ke.yyleng, pe = ke.yytext, Oe = ke.yylineno, nt = ke.yylloc;
            break;
          case 2:
            if (Wt = this.productions_[wt[1]][1], gt.$ = R[R.length - Wt], gt._$ = {
              first_line: W[W.length - (Wt || 1)].first_line,
              last_line: W[W.length - 1].last_line,
              first_column: W[W.length - (Wt || 1)].first_column,
              last_column: W[W.length - 1].last_column
            }, ht && (gt._$.range = [
              W[W.length - (Wt || 1)].range[0],
              W[W.length - 1].range[1]
            ]), Pt = this.performAction.apply(gt, [
              pe,
              Me,
              Oe,
              Ve.yy,
              wt[1],
              R,
              W
            ].concat(dt)), typeof Pt < "u")
              return Pt;
            Wt && (S = S.slice(0, -1 * Wt * 2), R = R.slice(0, -1 * Wt), W = W.slice(0, -1 * Wt)), S.push(this.productions_[wt[1]][0]), R.push(gt.$), W.push(gt._$), ln = ce[S[S.length - 2]][S[S.length - 1]], S.push(ln);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, le = function() {
    var j = {
      EOF: 1,
      parseError: function(te, S) {
        if (this.yy.parser)
          this.yy.parser.parseError(te, S);
        else
          throw new Error(te);
      },
      // resets the lexer, sets new input
      setInput: function(Y, te) {
        return this.yy = te || this.yy || {}, this._input = Y, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var Y = this._input[0];
        this.yytext += Y, this.yyleng++, this.offset++, this.match += Y, this.matched += Y;
        var te = Y.match(/(?:\r\n?|\n).*/g);
        return te ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), Y;
      },
      // unshifts one char (or a string) into the input
      unput: function(Y) {
        var te = Y.length, S = Y.split(/(?:\r\n?|\n)/g);
        this._input = Y + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - te), this.offset -= te;
        var V = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), S.length - 1 && (this.yylineno -= S.length - 1);
        var R = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: S ? (S.length === V.length ? this.yylloc.first_column : 0) + V[V.length - S.length].length - S[0].length : this.yylloc.first_column - te
        }, this.options.ranges && (this.yylloc.range = [R[0], R[0] + this.yyleng - te]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(Y) {
        this.unput(this.match.slice(Y));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var Y = this.matched.substr(0, this.matched.length - this.match.length);
        return (Y.length > 20 ? "..." : "") + Y.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var Y = this.match;
        return Y.length < 20 && (Y += this._input.substr(0, 20 - Y.length)), (Y.substr(0, 20) + (Y.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var Y = this.pastInput(), te = new Array(Y.length + 1).join("-");
        return Y + this.upcomingInput() + `
` + te + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(Y, te) {
        var S, V, R;
        if (this.options.backtrack_lexer && (R = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (R.yylloc.range = this.yylloc.range.slice(0))), V = Y[0].match(/(?:\r\n?|\n).*/g), V && (this.yylineno += V.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: V ? V[V.length - 1].length - V[V.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + Y[0].length
        }, this.yytext += Y[0], this.match += Y[0], this.matches = Y, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(Y[0].length), this.matched += Y[0], S = this.performAction.call(this, this.yy, this, te, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), S)
          return S;
        if (this._backtrack) {
          for (var W in R)
            this[W] = R[W];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var Y, te, S, V;
        this._more || (this.yytext = "", this.match = "");
        for (var R = this._currentRules(), W = 0; W < R.length; W++)
          if (S = this._input.match(this.rules[R[W]]), S && (!te || S[0].length > te[0].length)) {
            if (te = S, V = W, this.options.backtrack_lexer) {
              if (Y = this.test_match(S, R[W]), Y !== !1)
                return Y;
              if (this._backtrack) {
                te = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return te ? (Y = this.test_match(te, R[V]), Y !== !1 ? Y : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var te = this.next();
        return te || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(te) {
        this.conditionStack.push(te);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var te = this.conditionStack.length - 1;
        return te > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(te) {
        return te = this.conditionStack.length - 1 - Math.abs(te || 0), te >= 0 ? this.conditionStack[te] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(te) {
        this.begin(te);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(te, S, V, R) {
        switch (V) {
          case 0:
            return te.getLogger().trace("Found comment", S.yytext), 6;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 16;
          case 4:
            this.popState();
            break;
          case 5:
            te.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return te.getLogger().trace("SPACELINE"), 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            te.getLogger().trace("end icon"), this.popState();
            break;
          case 10:
            return te.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
          case 11:
            return te.getLogger().trace("Cloud"), this.begin("NODE"), 19;
          case 12:
            return te.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
          case 13:
            return te.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
          case 14:
            return this.begin("NODE"), 19;
          case 15:
            return this.begin("NODE"), 19;
          case 16:
            return this.begin("NODE"), 19;
          case 17:
            return this.begin("NODE"), 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            te.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 25:
            return te.getLogger().trace("description:", S.yytext), "NODE_DESCR";
          case 26:
            this.popState();
            break;
          case 27:
            return this.popState(), te.getLogger().trace("node end ))"), "NODE_DEND";
          case 28:
            return this.popState(), te.getLogger().trace("node end )"), "NODE_DEND";
          case 29:
            return this.popState(), te.getLogger().trace("node end ...", S.yytext), "NODE_DEND";
          case 30:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), te.getLogger().trace("node end (-"), "NODE_DEND";
          case 32:
            return this.popState(), te.getLogger().trace("node end (-"), "NODE_DEND";
          case 33:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 34:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 35:
            return te.getLogger().trace("Long description:", S.yytext), 20;
          case 36:
            return te.getLogger().trace("Long description:", S.yytext), 20;
        }
      },
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: !1 }, ICON: { rules: [8, 9], inclusive: !1 }, NSTR2: { rules: [22, 23], inclusive: !1 }, NSTR: { rules: [25, 26], inclusive: !1 }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: !0 } }
    };
    return j;
  }();
  ne.lexer = le;
  function J() {
    this.yy = {};
  }
  return J.prototype = ne, ne.Parser = J, new J();
}();
ji.parser = ji;
const Ap = ji, on = (me) => xp(me, sn());
let jt = [], Hl = 0, es = {};
const Op = () => {
  jt = [], Hl = 0, es = {};
}, Np = function(me) {
  for (let he = jt.length - 1; he >= 0; he--)
    if (jt[he].level < me)
      return jt[he];
  return null;
}, Mp = () => jt.length > 0 ? jt[0] : null, Ip = (me, he, ee, de) => {
  Wr.info("addNode", me, he, ee, de);
  const H = sn(), N = {
    id: Hl++,
    nodeId: on(he),
    level: me,
    descr: on(ee),
    type: de,
    children: [],
    width: sn().mindmap.maxNodeWidth
  };
  switch (N.type) {
    case mt.ROUNDED_RECT:
      N.padding = 2 * H.mindmap.padding;
      break;
    case mt.RECT:
      N.padding = 2 * H.mindmap.padding;
      break;
    case mt.HEXAGON:
      N.padding = 2 * H.mindmap.padding;
      break;
    default:
      N.padding = H.mindmap.padding;
  }
  const T = Np(me);
  if (T)
    T.children.push(N), jt.push(N);
  else if (jt.length === 0)
    jt.push(N);
  else {
    let w = new Error(
      'There can be only one root. No parent could be found for ("' + N.descr + '")'
    );
    throw w.hash = {
      text: "branch " + name,
      token: "branch " + name,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"checkout ' + name + '"']
    }, w;
  }
}, mt = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, Rp = (me, he) => {
  switch (Wr.debug("In get type", me, he), me) {
    case "[":
      return mt.RECT;
    case "(":
      return he === ")" ? mt.ROUNDED_RECT : mt.CLOUD;
    case "((":
      return mt.CIRCLE;
    case ")":
      return mt.CLOUD;
    case "))":
      return mt.BANG;
    case "{{":
      return mt.HEXAGON;
    default:
      return mt.DEFAULT;
  }
}, Xl = (me, he) => {
  es[me] = he;
}, kp = (me) => {
  const he = jt[jt.length - 1];
  me && me.icon && (he.icon = on(me.icon)), me && me.class && (he.class = on(me.class));
}, Kr = (me) => {
  switch (me) {
    case mt.DEFAULT:
      return "no-border";
    case mt.RECT:
      return "rect";
    case mt.ROUNDED_RECT:
      return "rounded-rect";
    case mt.CIRCLE:
      return "circle";
    case mt.CLOUD:
      return "cloud";
    case mt.BANG:
      return "bang";
    case mt.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
};
let ql;
const Pp = (me) => {
  ql = me;
}, Bp = () => Wr, Fp = (me) => jt[me], ts = (me) => es[me], Gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addNode: Ip,
  clear: Op,
  decorateNode: kp,
  getElementById: ts,
  getLogger: Bp,
  getMindmap: Mp,
  getNodeById: Fp,
  getType: Rp,
  nodeType: mt,
  get parseError() {
    return ql;
  },
  sanitizeText: on,
  setElementForId: Xl,
  setErrorHandler: Pp,
  type2Str: Kr
}, Symbol.toStringTag, { value: "Module" })), Wl = 12, zp = function(me, he, ee) {
  me.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Kr(he.type)).attr(
    "d",
    `M0 ${he.height - 5} v${-he.height + 2 * 5} q0,-5 5,-5 h${he.width - 2 * 5} q5,0 5,5 v${he.height - 5} H0 Z`
  ), me.append("line").attr("class", "node-line-" + ee).attr("x1", 0).attr("y1", he.height).attr("x2", he.width).attr("y2", he.height);
}, Vp = function(me, he) {
  me.append("rect").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Kr(he.type)).attr("height", he.height).attr("width", he.width);
}, $p = function(me, he) {
  const ee = he.width, de = he.height, H = 0.15 * ee, N = 0.25 * ee, T = 0.35 * ee, w = 0.2 * ee;
  me.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Kr(he.type)).attr(
    "d",
    `M0 0 a${H},${H} 0 0,1 ${ee * 0.25},${-1 * ee * 0.1}
      a${T},${T} 1 0,1 ${ee * 0.4},${-1 * ee * 0.1}
      a${N},${N} 1 0,1 ${ee * 0.35},${1 * ee * 0.2}

      a${H},${H} 1 0,1 ${ee * 0.15},${1 * de * 0.35}
      a${w},${w} 1 0,1 ${-1 * ee * 0.15},${1 * de * 0.65}

      a${N},${H} 1 0,1 ${-1 * ee * 0.25},${ee * 0.15}
      a${T},${T} 1 0,1 ${-1 * ee * 0.5},0
      a${H},${H} 1 0,1 ${-1 * ee * 0.25},${-1 * ee * 0.15}

      a${H},${H} 1 0,1 ${-1 * ee * 0.1},${-1 * de * 0.35}
      a${w},${w} 1 0,1 ${ee * 0.1},${-1 * de * 0.65}

    H0 V0 Z`
  );
}, _p = function(me, he) {
  const ee = he.width, de = he.height, H = 0.15 * ee;
  me.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Kr(he.type)).attr(
    "d",
    `M0 0 a${H},${H} 1 0,0 ${ee * 0.25},${-1 * de * 0.1}
      a${H},${H} 1 0,0 ${ee * 0.25},0
      a${H},${H} 1 0,0 ${ee * 0.25},0
      a${H},${H} 1 0,0 ${ee * 0.25},${1 * de * 0.1}

      a${H},${H} 1 0,0 ${ee * 0.15},${1 * de * 0.33}
      a${H * 0.8},${H * 0.8} 1 0,0 0,${1 * de * 0.34}
      a${H},${H} 1 0,0 ${-1 * ee * 0.15},${1 * de * 0.33}

      a${H},${H} 1 0,0 ${-1 * ee * 0.25},${de * 0.15}
      a${H},${H} 1 0,0 ${-1 * ee * 0.25},0
      a${H},${H} 1 0,0 ${-1 * ee * 0.25},0
      a${H},${H} 1 0,0 ${-1 * ee * 0.25},${-1 * de * 0.15}

      a${H},${H} 1 0,0 ${-1 * ee * 0.1},${-1 * de * 0.33}
      a${H * 0.8},${H * 0.8} 1 0,0 0,${-1 * de * 0.34}
      a${H},${H} 1 0,0 ${ee * 0.1},${-1 * de * 0.33}

    H0 V0 Z`
  );
}, Up = function(me, he) {
  me.append("circle").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Kr(he.type)).attr("r", he.width / 2);
};
function Yp(me, he, ee, de, H) {
  return me.insert("polygon", ":first-child").attr(
    "points",
    de.map(function(N) {
      return N.x + "," + N.y;
    }).join(" ")
  ).attr("transform", "translate(" + (H.width - he) / 2 + ", " + ee + ")");
}
const Hp = function(me, he) {
  const ee = he.height, H = ee / 4, N = he.width - he.padding + 2 * H, T = [
    { x: H, y: 0 },
    { x: N - H, y: 0 },
    { x: N, y: -ee / 2 },
    { x: N - H, y: -ee },
    { x: H, y: -ee },
    { x: 0, y: -ee / 2 }
  ];
  Yp(me, N, ee, T, he);
}, Xp = function(me, he) {
  me.append("rect").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + Kr(he.type)).attr("height", he.height).attr("rx", he.padding).attr("ry", he.padding).attr("width", he.width);
}, qp = function(me, he, ee, de) {
  const H = de.htmlLabels, N = ee % (Wl - 1), T = me.append("g");
  he.section = N;
  let w = "section-" + N;
  N < 0 && (w += " section-root"), T.attr("class", (he.class ? he.class + " " : "") + "mindmap-node " + w);
  const L = T.append("g"), z = T.append("g"), U = he.descr.replace(/(<br\/*>)/g, `
`);
  Sp(z, U, {
    useHtmlLabels: H,
    width: he.width,
    classes: "mindmap-node-label"
  }), H || z.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  const P = z.node().getBBox(), Z = de.fontSize.replace ? de.fontSize.replace("px", "") : de.fontSize;
  if (he.height = P.height + Z * 1.1 * 0.5 + he.padding, he.width = P.width + 2 * he.padding, he.icon)
    if (he.type === mt.CIRCLE)
      he.height += 50, he.width += 50, T.append("foreignObject").attr("height", "50px").attr("width", he.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + N + " " + he.icon), z.attr(
        "transform",
        "translate(" + he.width / 2 + ", " + (he.height / 2 - 1.5 * he.padding) + ")"
      );
    else {
      he.width += 50;
      const D = he.height;
      he.height = Math.max(D, 60);
      const $ = Math.abs(he.height - D);
      T.append("foreignObject").attr("width", "60px").attr("height", he.height).attr("style", "text-align: center;margin-top:" + $ / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + N + " " + he.icon), z.attr(
        "transform",
        "translate(" + (25 + he.width / 2) + ", " + ($ / 2 + he.padding / 2) + ")"
      );
    }
  else if (H) {
    const D = (he.width - P.width) / 2, $ = (he.height - P.height) / 2;
    z.attr("transform", "translate(" + D + ", " + $ + ")");
  } else {
    const D = he.width / 2, $ = he.padding / 2;
    z.attr("transform", "translate(" + D + ", " + $ + ")");
  }
  switch (he.type) {
    case mt.DEFAULT:
      zp(L, he, N);
      break;
    case mt.ROUNDED_RECT:
      Xp(L, he);
      break;
    case mt.RECT:
      Vp(L, he);
      break;
    case mt.CIRCLE:
      L.attr("transform", "translate(" + he.width / 2 + ", " + +he.height / 2 + ")"), Up(L, he);
      break;
    case mt.CLOUD:
      $p(L, he);
      break;
    case mt.BANG:
      _p(L, he);
      break;
    case mt.HEXAGON:
      Hp(L, he);
      break;
  }
  return Xl(he.id, T), he.height;
}, Wp = function(he, ee, de, H, N) {
  const T = N % (Wl - 1), w = de.x + de.width / 2, L = de.y + de.height / 2, z = ee.x + ee.width / 2, U = ee.y + ee.height / 2, P = z > w ? w + Math.abs(w - z) / 2 : w - Math.abs(w - z) / 2, Z = U > L ? L + Math.abs(L - U) / 2 : L - Math.abs(L - U) / 2, D = z > w ? Math.abs(w - P) / 2 + w : -Math.abs(w - P) / 2 + w, $ = U > L ? Math.abs(L - Z) / 2 + L : -Math.abs(L - Z) / 2 + L;
  he.append("path").attr(
    "d",
    de.direction === "TB" || de.direction === "BT" ? `M${w},${L} Q${w},${$} ${P},${Z} T${z},${U}` : `M${w},${L} Q${D},${L} ${P},${Z} T${z},${U}`
  ).attr("class", "edge section-edge-" + T + " edge-depth-" + H);
}, Kp = function(me) {
  const he = ts(me.id), ee = me.x || 0, de = me.y || 0;
  he.attr("transform", "translate(" + ee + "," + de + ")");
}, Kl = { drawNode: qp, positionNode: Kp, drawEdge: Wp };
var Zl = { exports: {} };
(function(me, he) {
  (function(ee, de) {
    me.exports = de();
  })(Da, function() {
    function ee(t) {
      "@babel/helpers - typeof";
      return ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, ee(t);
    }
    function de(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function H(t, e) {
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }
    function N(t, e, r) {
      return e && H(t.prototype, e), r && H(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }
    function T(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t;
    }
    function w(t, e) {
      return L(t) || z(t, e) || U(t, e) || Z();
    }
    function L(t) {
      if (Array.isArray(t))
        return t;
    }
    function z(t, e) {
      var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (r != null) {
        var a = [], n = !0, i = !1, s, o;
        try {
          for (r = r.call(t); !(n = (s = r.next()).done) && (a.push(s.value), !(e && a.length === e)); n = !0)
            ;
        } catch (u) {
          i = !0, o = u;
        } finally {
          try {
            !n && r.return != null && r.return();
          } finally {
            if (i)
              throw o;
          }
        }
        return a;
      }
    }
    function U(t, e) {
      if (t) {
        if (typeof t == "string")
          return P(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
          return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return P(t, e);
      }
    }
    function P(t, e) {
      (e == null || e > t.length) && (e = t.length);
      for (var r = 0, a = new Array(e); r < e; r++)
        a[r] = t[r];
      return a;
    }
    function Z() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var D = typeof window > "u" ? null : window, $ = D ? D.navigator : null;
    D && D.document;
    var _ = ee(""), Q = ee({}), ne = ee(function() {
    }), le = typeof HTMLElement > "u" ? "undefined" : ee(HTMLElement), J = function(e) {
      return e && e.instanceString && Y(e.instanceString) ? e.instanceString() : null;
    }, j = function(e) {
      return e != null && ee(e) == _;
    }, Y = function(e) {
      return e != null && ee(e) === ne;
    }, te = function(e) {
      return !pe(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
    }, S = function(e) {
      return e != null && ee(e) === Q && !te(e) && e.constructor === Object;
    }, V = function(e) {
      return e != null && ee(e) === Q;
    }, R = function(e) {
      return e != null && ee(e) === ee(1) && !isNaN(e);
    }, W = function(e) {
      return R(e) && Math.floor(e) === e;
    }, ce = function(e) {
      if (le !== "undefined")
        return e != null && e instanceof HTMLElement;
    }, pe = function(e) {
      return Oe(e) || Me(e);
    }, Oe = function(e) {
      return J(e) === "collection" && e._private.single;
    }, Me = function(e) {
      return J(e) === "collection" && !e._private.single;
    }, Ye = function(e) {
      return J(e) === "core";
    }, at = function(e) {
      return J(e) === "stylesheet";
    }, dt = function(e) {
      return J(e) === "event";
    }, ke = function(e) {
      return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
    }, Ve = function(e) {
      return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
    }, Ze = function(e) {
      return S(e) && R(e.x1) && R(e.x2) && R(e.y1) && R(e.y2);
    }, nt = function(e) {
      return V(e) && Y(e.then);
    }, ht = function() {
      return $ && $.userAgent.match(/msie|trident|edge/i);
    }, it = function(e, r) {
      r || (r = function() {
        if (arguments.length === 1)
          return arguments[0];
        if (arguments.length === 0)
          return "undefined";
        for (var i = [], s = 0; s < arguments.length; s++)
          i.push(arguments[s]);
        return i.join("$");
      });
      var a = function n() {
        var i = this, s = arguments, o, u = r.apply(i, s), l = n.cache;
        return (o = l[u]) || (o = l[u] = e.apply(i, s)), o;
      };
      return a.cache = {}, a;
    }, tt = it(function(t) {
      return t.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase();
      });
    }), yt = it(function(t) {
      return t.replace(/(-\w)/g, function(e) {
        return e[1].toUpperCase();
      });
    }), wt = it(function(t, e) {
      return t + e[0].toUpperCase() + e.substring(1);
    }, function(t, e) {
      return t + "$" + e;
    }), Pt = function(e) {
      return ke(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
    }, gt = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", dr = "rgb[a]?\\((" + gt + "[%]?)\\s*,\\s*(" + gt + "[%]?)\\s*,\\s*(" + gt + "[%]?)(?:\\s*,\\s*(" + gt + "))?\\)", Wt = "rgb[a]?\\((?:" + gt + "[%]?)\\s*,\\s*(?:" + gt + "[%]?)\\s*,\\s*(?:" + gt + "[%]?)(?:\\s*,\\s*(?:" + gt + "))?\\)", ln = "hsl[a]?\\((" + gt + ")\\s*,\\s*(" + gt + "[%])\\s*,\\s*(" + gt + "[%])(?:\\s*,\\s*(" + gt + "))?\\)", Zr = "hsl[a]?\\((?:" + gt + ")\\s*,\\s*(?:" + gt + "[%])\\s*,\\s*(?:" + gt + "[%])(?:\\s*,\\s*(?:" + gt + "))?\\)", La = "\\#[0-9a-fA-F]{3}", er = "\\#[0-9a-fA-F]{6}", rs = function(e, r) {
      return e < r ? -1 : e > r ? 1 : 0;
    }, tu = function(e, r) {
      return -1 * rs(e, r);
    }, He = Object.assign != null ? Object.assign.bind(Object) : function(t) {
      for (var e = arguments, r = 1; r < e.length; r++) {
        var a = e[r];
        if (a != null)
          for (var n = Object.keys(a), i = 0; i < n.length; i++) {
            var s = n[i];
            t[s] = a[s];
          }
      }
      return t;
    }, ru = function(e) {
      if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
        var r = e.length === 4, a, n, i, s = 16;
        return r ? (a = parseInt(e[1] + e[1], s), n = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (a = parseInt(e[1] + e[2], s), n = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [a, n, i];
      }
    }, au = function(e) {
      var r, a, n, i, s, o, u, l;
      function f(v, y, p) {
        return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? v + (y - v) * 6 * p : p < 1 / 2 ? y : p < 2 / 3 ? v + (y - v) * (2 / 3 - p) * 6 : v;
      }
      var h = new RegExp("^" + ln + "$").exec(e);
      if (h) {
        if (a = parseInt(h[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(h[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(h[3]), i < 0 || i > 100) || (i = i / 100, s = h[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
          return;
        if (n === 0)
          o = u = l = Math.round(i * 255);
        else {
          var c = i < 0.5 ? i * (1 + n) : i + n - i * n, d = 2 * i - c;
          o = Math.round(255 * f(d, c, a + 1 / 3)), u = Math.round(255 * f(d, c, a)), l = Math.round(255 * f(d, c, a - 1 / 3));
        }
        r = [o, u, l, s];
      }
      return r;
    }, nu = function(e) {
      var r, a = new RegExp("^" + dr + "$").exec(e);
      if (a) {
        r = [];
        for (var n = [], i = 1; i <= 3; i++) {
          var s = a[i];
          if (s[s.length - 1] === "%" && (n[i] = !0), s = parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255)
            return;
          r.push(Math.floor(s));
        }
        var o = n[1] || n[2] || n[3], u = n[1] && n[2] && n[3];
        if (o && !u)
          return;
        var l = a[4];
        if (l !== void 0) {
          if (l = parseFloat(l), l < 0 || l > 1)
            return;
          r.push(l);
        }
      }
      return r;
    }, iu = function(e) {
      return ou[e.toLowerCase()];
    }, su = function(e) {
      return (te(e) ? e : null) || iu(e) || ru(e) || nu(e) || au(e);
    }, ou = {
      // special colour names
      transparent: [0, 0, 0, 0],
      // NB alpha === 0
      // regular colours
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      grey: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    }, as = function(e) {
      for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
        var s = a[i];
        if (S(s))
          throw Error("Tried to set map with object key");
        i < a.length - 1 ? (r[s] == null && (r[s] = {}), r = r[s]) : r[s] = e.value;
      }
    }, ns = function(e) {
      for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
        var s = a[i];
        if (S(s))
          throw Error("Tried to get map with object key");
        if (r = r[s], r == null)
          return r;
      }
      return r;
    };
    function lu(t) {
      var e = typeof t;
      return t != null && (e == "object" || e == "function");
    }
    var kr = lu, Sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Da < "u" ? Da : typeof self < "u" ? self : {};
    function uu(t, e) {
      return e = { exports: {} }, t(e, e.exports), e.exports;
    }
    var fu = typeof Sa == "object" && Sa && Sa.Object === Object && Sa, hu = fu, cu = typeof self == "object" && self && self.Object === Object && self, vu = hu || cu || Function("return this")(), un = vu, du = function() {
      return un.Date.now();
    }, ii = du, gu = /\s/;
    function pu(t) {
      for (var e = t.length; e-- && gu.test(t.charAt(e)); )
        ;
      return e;
    }
    var yu = pu, mu = /^\s+/;
    function bu(t) {
      return t && t.slice(0, yu(t) + 1).replace(mu, "");
    }
    var Eu = bu, wu = un.Symbol, Qr = wu, is = Object.prototype, xu = is.hasOwnProperty, Tu = is.toString, Aa = Qr ? Qr.toStringTag : void 0;
    function Cu(t) {
      var e = xu.call(t, Aa), r = t[Aa];
      try {
        t[Aa] = void 0;
        var a = !0;
      } catch {
      }
      var n = Tu.call(t);
      return a && (e ? t[Aa] = r : delete t[Aa]), n;
    }
    var Du = Cu, Lu = Object.prototype, Su = Lu.toString;
    function Au(t) {
      return Su.call(t);
    }
    var Ou = Au, Nu = "[object Null]", Mu = "[object Undefined]", ss = Qr ? Qr.toStringTag : void 0;
    function Iu(t) {
      return t == null ? t === void 0 ? Mu : Nu : ss && ss in Object(t) ? Du(t) : Ou(t);
    }
    var os = Iu;
    function Ru(t) {
      return t != null && typeof t == "object";
    }
    var ku = Ru, Pu = "[object Symbol]";
    function Bu(t) {
      return typeof t == "symbol" || ku(t) && os(t) == Pu;
    }
    var Oa = Bu, ls = 0 / 0, Fu = /^[-+]0x[0-9a-f]+$/i, Gu = /^0b[01]+$/i, zu = /^0o[0-7]+$/i, Vu = parseInt;
    function $u(t) {
      if (typeof t == "number")
        return t;
      if (Oa(t))
        return ls;
      if (kr(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = kr(e) ? e + "" : e;
      }
      if (typeof t != "string")
        return t === 0 ? t : +t;
      t = Eu(t);
      var r = Gu.test(t);
      return r || zu.test(t) ? Vu(t.slice(2), r ? 2 : 8) : Fu.test(t) ? ls : +t;
    }
    var us = $u, _u = "Expected a function", Uu = Math.max, Yu = Math.min;
    function Hu(t, e, r) {
      var a, n, i, s, o, u, l = 0, f = !1, h = !1, c = !0;
      if (typeof t != "function")
        throw new TypeError(_u);
      e = us(e) || 0, kr(r) && (f = !!r.leading, h = "maxWait" in r, i = h ? Uu(us(r.maxWait) || 0, e) : i, c = "trailing" in r ? !!r.trailing : c);
      function d(A) {
        var x = a, k = n;
        return a = n = void 0, l = A, s = t.apply(k, x), s;
      }
      function v(A) {
        return l = A, o = setTimeout(g, e), f ? d(A) : s;
      }
      function y(A) {
        var x = A - u, k = A - l, C = e - x;
        return h ? Yu(C, i - k) : C;
      }
      function p(A) {
        var x = A - u, k = A - l;
        return u === void 0 || x >= e || x < 0 || h && k >= i;
      }
      function g() {
        var A = ii();
        if (p(A))
          return m(A);
        o = setTimeout(g, y(A));
      }
      function m(A) {
        return o = void 0, c && a ? d(A) : (a = n = void 0, s);
      }
      function b() {
        o !== void 0 && clearTimeout(o), l = 0, a = u = n = o = void 0;
      }
      function E() {
        return o === void 0 ? s : m(ii());
      }
      function I() {
        var A = ii(), x = p(A);
        if (a = arguments, n = this, u = A, x) {
          if (o === void 0)
            return v(u);
          if (h)
            return clearTimeout(o), o = setTimeout(g, e), d(u);
        }
        return o === void 0 && (o = setTimeout(g, e)), s;
      }
      return I.cancel = b, I.flush = E, I;
    }
    var fn = Hu, si = D ? D.performance : null, fs = si && si.now ? function() {
      return si.now();
    } : function() {
      return Date.now();
    }, Xu = function() {
      if (D) {
        if (D.requestAnimationFrame)
          return function(t) {
            D.requestAnimationFrame(t);
          };
        if (D.mozRequestAnimationFrame)
          return function(t) {
            D.mozRequestAnimationFrame(t);
          };
        if (D.webkitRequestAnimationFrame)
          return function(t) {
            D.webkitRequestAnimationFrame(t);
          };
        if (D.msRequestAnimationFrame)
          return function(t) {
            D.msRequestAnimationFrame(t);
          };
      }
      return function(t) {
        t && setTimeout(function() {
          t(fs());
        }, 1e3 / 60);
      };
    }(), hn = function(e) {
      return Xu(e);
    }, gr = fs, Jr = 9261, hs = 65599, Na = 5381, cs = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jr, a = r, n; n = e.next(), !n.done; )
        a = a * hs + n.value | 0;
      return a;
    }, Ma = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jr;
      return r * hs + e | 0;
    }, Ia = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Na;
      return (r << 5) + r + e | 0;
    }, qu = function(e, r) {
      return e * 2097152 + r;
    }, wr = function(e) {
      return e[0] * 2097152 + e[1];
    }, cn = function(e, r) {
      return [Ma(e[0], r[0]), Ia(e[1], r[1])];
    }, Wu = function(e, r) {
      var a = {
        value: 0,
        done: !1
      }, n = 0, i = e.length, s = {
        next: function() {
          return n < i ? a.value = e[n++] : a.done = !0, a;
        }
      };
      return cs(s, r);
    }, Pr = function(e, r) {
      var a = {
        value: 0,
        done: !1
      }, n = 0, i = e.length, s = {
        next: function() {
          return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
        }
      };
      return cs(s, r);
    }, vs = function() {
      return Ku(arguments);
    }, Ku = function(e) {
      for (var r, a = 0; a < e.length; a++) {
        var n = e[a];
        a === 0 ? r = Pr(n) : r = Pr(n, r);
      }
      return r;
    }, ds = !0, Zu = console.warn != null, Qu = console.trace != null, oi = Number.MAX_SAFE_INTEGER || 9007199254740991, gs = function() {
      return !0;
    }, vn = function() {
      return !1;
    }, ps = function() {
      return 0;
    }, li = function() {
    }, Tt = function(e) {
      throw new Error(e);
    }, ys = function(e) {
      if (e !== void 0)
        ds = !!e;
      else
        return ds;
    }, ct = function(e) {
      ys() && (Zu ? console.warn(e) : (console.log(e), Qu && console.trace()));
    }, Ju = function(e) {
      return He({}, e);
    }, lr = function(e) {
      return e == null ? e : te(e) ? e.slice() : S(e) ? Ju(e) : e;
    }, ju = function(e) {
      return e.slice();
    }, ms = function(e, r) {
      for (
        // loop :)
        r = e = "";
        // b - result , a - numeric letiable
        e++ < 36;
        //
        r += e * 51 & 52 ? (
          //  return a random number or 4
          (e ^ 15 ? (
            // generate a random number from 0 to 15
            8 ^ Math.random() * (e ^ 20 ? 16 : 4)
          ) : 4).toString(16)
        ) : "-"
      )
        ;
      return r;
    }, ef = {}, bs = function() {
      return ef;
    }, At = function(e) {
      var r = Object.keys(e);
      return function(a) {
        for (var n = {}, i = 0; i < r.length; i++) {
          var s = r[i], o = a == null ? void 0 : a[s];
          n[s] = o === void 0 ? e[s] : o;
        }
        return n;
      };
    }, xr = function(e, r, a) {
      for (var n = e.length - 1; n >= 0 && !(e[n] === r && (e.splice(n, 1), a)); n--)
        ;
    }, ui = function(e) {
      e.splice(0, e.length);
    }, tf = function(e, r) {
      for (var a = 0; a < r.length; a++) {
        var n = r[a];
        e.push(n);
      }
    }, tr = function(e, r, a) {
      return a && (r = wt(a, r)), e[r];
    }, Tr = function(e, r, a, n) {
      a && (r = wt(a, r)), e[r] = n;
    }, rf = /* @__PURE__ */ function() {
      function t() {
        de(this, t), this._obj = {};
      }
      return N(t, [{
        key: "set",
        value: function(r, a) {
          return this._obj[r] = a, this;
        }
      }, {
        key: "delete",
        value: function(r) {
          return this._obj[r] = void 0, this;
        }
      }, {
        key: "clear",
        value: function() {
          this._obj = {};
        }
      }, {
        key: "has",
        value: function(r) {
          return this._obj[r] !== void 0;
        }
      }, {
        key: "get",
        value: function(r) {
          return this._obj[r];
        }
      }]), t;
    }(), ur = typeof Map < "u" ? Map : rf, af = "undefined", nf = /* @__PURE__ */ function() {
      function t(e) {
        if (de(this, t), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
          var r;
          e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
          for (var a = 0; a < r.length; a++)
            this.add(r[a]);
        }
      }
      return N(t, [{
        key: "instanceString",
        value: function() {
          return "set";
        }
      }, {
        key: "add",
        value: function(r) {
          var a = this._obj;
          a[r] !== 1 && (a[r] = 1, this.size++);
        }
      }, {
        key: "delete",
        value: function(r) {
          var a = this._obj;
          a[r] === 1 && (a[r] = 0, this.size--);
        }
      }, {
        key: "clear",
        value: function() {
          this._obj = /* @__PURE__ */ Object.create(null);
        }
      }, {
        key: "has",
        value: function(r) {
          return this._obj[r] === 1;
        }
      }, {
        key: "toArray",
        value: function() {
          var r = this;
          return Object.keys(this._obj).filter(function(a) {
            return r.has(a);
          });
        }
      }, {
        key: "forEach",
        value: function(r, a) {
          return this.toArray().forEach(r, a);
        }
      }]), t;
    }(), jr = (typeof Set > "u" ? "undefined" : ee(Set)) !== af ? Set : nf, dn = function(e, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      if (e === void 0 || r === void 0 || !Ye(e)) {
        Tt("An element must have a core reference and parameters set");
        return;
      }
      var n = r.group;
      if (n == null && (r.data && r.data.source != null && r.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
        Tt("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
        return;
      }
      this.length = 1, this[0] = this;
      var i = this._private = {
        cy: e,
        single: !0,
        // indicates this is an element
        data: r.data || {},
        // data object
        position: r.position || {
          x: 0,
          y: 0
        },
        // (x, y) position pair
        autoWidth: void 0,
        // width and height of nodes calculated by the renderer when set to special 'auto' value
        autoHeight: void 0,
        autoPadding: void 0,
        compoundBoundsClean: !1,
        // whether the compound dimensions need to be recalculated the next time dimensions are read
        listeners: [],
        // array of bound listeners
        group: n,
        // string; 'nodes' or 'edges'
        style: {},
        // properties as set by the style
        rstyle: {},
        // properties for style sent from the renderer to the core
        styleCxts: [],
        // applied style contexts from the styler
        styleKeys: {},
        // per-group keys of style property values
        removed: !0,
        // whether it's inside the vis; true if removed (set true here since we call restore)
        selected: !!r.selected,
        // whether it's selected
        selectable: r.selectable === void 0 ? !0 : !!r.selectable,
        // whether it's selectable
        locked: !!r.locked,
        // whether the element is locked (cannot be moved)
        grabbed: !1,
        // whether the element is grabbed by the mouse; renderer sets this privately
        grabbable: r.grabbable === void 0 ? !0 : !!r.grabbable,
        // whether the element can be grabbed
        pannable: r.pannable === void 0 ? n === "edges" : !!r.pannable,
        // whether the element has passthrough panning enabled
        active: !1,
        // whether the element is active from user interaction
        classes: new jr(),
        // map ( className => true )
        animation: {
          // object for currently-running animations
          current: [],
          queue: []
        },
        rscratch: {},
        // object in which the renderer can store information
        scratch: r.scratch || {},
        // scratch objects
        edges: [],
        // array of connected edges
        children: [],
        // array of children
        parent: r.parent && r.parent.isNode() ? r.parent : null,
        // parent ref
        traversalCache: {},
        // cache of output of traversal functions
        backgrounding: !1,
        // whether background images are loading
        bbCache: null,
        // cache of the current bounding box
        bbCacheShift: {
          x: 0,
          y: 0
        },
        // shift applied to cached bb to be applied on next get
        bodyBounds: null,
        // bounds cache of element body, w/o overlay
        overlayBounds: null,
        // bounds cache of element body, including overlay
        labelBounds: {
          // bounds cache of labels
          all: null,
          source: null,
          target: null,
          main: null
        },
        arrowBounds: {
          // bounds cache of edge arrows
          source: null,
          target: null,
          "mid-source": null,
          "mid-target": null
        }
      };
      if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
        var s = r.renderedPosition, o = e.pan(), u = e.zoom();
        i.position = {
          x: (s.x - o.x) / u,
          y: (s.y - o.y) / u
        };
      }
      var l = [];
      te(r.classes) ? l = r.classes : j(r.classes) && (l = r.classes.split(/\s+/));
      for (var f = 0, h = l.length; f < h; f++) {
        var c = l[f];
        !c || c === "" || i.classes.add(c);
      }
      this.createEmitter();
      var d = r.style || r.css;
      d && (ct("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(d)), (a === void 0 || a) && this.restore();
    }, Es = function(e) {
      return e = {
        bfs: e.bfs || !e.dfs,
        dfs: e.dfs || !e.bfs
      }, function(a, n, i) {
        var s;
        S(a) && !pe(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !Y(n) ? n : i, n = Y(n) ? n : function() {
        };
        for (var o = this._private.cy, u = a = j(a) ? this.filter(a) : a, l = [], f = [], h = {}, c = {}, d = {}, v = 0, y, p = this.byGroup(), g = p.nodes, m = p.edges, b = 0; b < u.length; b++) {
          var E = u[b], I = E.id();
          E.isNode() && (l.unshift(E), e.bfs && (d[I] = !0, f.push(E)), c[I] = 0);
        }
        for (var A = function() {
          var X = e.bfs ? l.shift() : l.pop(), B = X.id();
          if (e.dfs) {
            if (d[B])
              return "continue";
            d[B] = !0, f.push(X);
          }
          var re = c[B], K = h[B], q = K != null ? K.source() : null, ae = K != null ? K.target() : null, ue = K == null ? void 0 : X.same(q) ? ae[0] : q[0], be = void 0;
          if (be = n(X, K, ue, v++, re), be === !0)
            return y = X, "break";
          if (be === !1)
            return "break";
          for (var ie = X.connectedEdges().filter(function(Le) {
            return (!i || Le.source().same(X)) && m.has(Le);
          }), ge = 0; ge < ie.length; ge++) {
            var we = ie[ge], De = we.connectedNodes().filter(function(Le) {
              return !Le.same(X) && g.has(Le);
            }), xe = De.id();
            De.length !== 0 && !d[xe] && (De = De[0], l.push(De), e.bfs && (d[xe] = !0, f.push(De)), h[xe] = we, c[xe] = c[B] + 1);
          }
        }; l.length !== 0; ) {
          var x = A();
          if (x !== "continue" && x === "break")
            break;
        }
        for (var k = o.collection(), C = 0; C < f.length; C++) {
          var F = f[C], G = h[F.id()];
          G != null && k.push(G), k.push(F);
        }
        return {
          path: o.collection(k),
          found: o.collection(y)
        };
      };
    }, Ra = {
      breadthFirstSearch: Es({
        bfs: !0
      }),
      depthFirstSearch: Es({
        dfs: !0
      })
    };
    Ra.bfs = Ra.breadthFirstSearch, Ra.dfs = Ra.depthFirstSearch;
    var sf = uu(function(t, e) {
      (function() {
        var r, a, n, i, s, o, u, l, f, h, c, d, v, y, p;
        n = Math.floor, h = Math.min, a = function(g, m) {
          return g < m ? -1 : g > m ? 1 : 0;
        }, f = function(g, m, b, E, I) {
          var A;
          if (b == null && (b = 0), I == null && (I = a), b < 0)
            throw new Error("lo must be non-negative");
          for (E == null && (E = g.length); b < E; )
            A = n((b + E) / 2), I(m, g[A]) < 0 ? E = A : b = A + 1;
          return [].splice.apply(g, [b, b - b].concat(m)), m;
        }, o = function(g, m, b) {
          return b == null && (b = a), g.push(m), y(g, 0, g.length - 1, b);
        }, s = function(g, m) {
          var b, E;
          return m == null && (m = a), b = g.pop(), g.length ? (E = g[0], g[0] = b, p(g, 0, m)) : E = b, E;
        }, l = function(g, m, b) {
          var E;
          return b == null && (b = a), E = g[0], g[0] = m, p(g, 0, b), E;
        }, u = function(g, m, b) {
          var E;
          return b == null && (b = a), g.length && b(g[0], m) < 0 && (E = [g[0], m], m = E[0], g[0] = E[1], p(g, 0, b)), m;
        }, i = function(g, m) {
          var b, E, I, A, x, k;
          for (m == null && (m = a), A = (function() {
            k = [];
            for (var C = 0, F = n(g.length / 2); 0 <= F ? C < F : C > F; 0 <= F ? C++ : C--)
              k.push(C);
            return k;
          }).apply(this).reverse(), x = [], E = 0, I = A.length; E < I; E++)
            b = A[E], x.push(p(g, b, m));
          return x;
        }, v = function(g, m, b) {
          var E;
          if (b == null && (b = a), E = g.indexOf(m), E !== -1)
            return y(g, 0, E, b), p(g, E, b);
        }, c = function(g, m, b) {
          var E, I, A, x, k;
          if (b == null && (b = a), I = g.slice(0, m), !I.length)
            return I;
          for (i(I, b), k = g.slice(m), A = 0, x = k.length; A < x; A++)
            E = k[A], u(I, E, b);
          return I.sort(b).reverse();
        }, d = function(g, m, b) {
          var E, I, A, x, k, C, F, G, M;
          if (b == null && (b = a), m * 10 <= g.length) {
            if (A = g.slice(0, m).sort(b), !A.length)
              return A;
            for (I = A[A.length - 1], F = g.slice(m), x = 0, C = F.length; x < C; x++)
              E = F[x], b(E, I) < 0 && (f(A, E, 0, null, b), A.pop(), I = A[A.length - 1]);
            return A;
          }
          for (i(g, b), M = [], k = 0, G = h(m, g.length); 0 <= G ? k < G : k > G; 0 <= G ? ++k : --k)
            M.push(s(g, b));
          return M;
        }, y = function(g, m, b, E) {
          var I, A, x;
          for (E == null && (E = a), I = g[b]; b > m; ) {
            if (x = b - 1 >> 1, A = g[x], E(I, A) < 0) {
              g[b] = A, b = x;
              continue;
            }
            break;
          }
          return g[b] = I;
        }, p = function(g, m, b) {
          var E, I, A, x, k;
          for (b == null && (b = a), I = g.length, k = m, A = g[m], E = 2 * m + 1; E < I; )
            x = E + 1, x < I && !(b(g[E], g[x]) < 0) && (E = x), g[m] = g[E], m = E, E = 2 * m + 1;
          return g[m] = A, y(g, k, m, b);
        }, r = function() {
          g.push = o, g.pop = s, g.replace = l, g.pushpop = u, g.heapify = i, g.updateItem = v, g.nlargest = c, g.nsmallest = d;
          function g(m) {
            this.cmp = m ?? a, this.nodes = [];
          }
          return g.prototype.push = function(m) {
            return o(this.nodes, m, this.cmp);
          }, g.prototype.pop = function() {
            return s(this.nodes, this.cmp);
          }, g.prototype.peek = function() {
            return this.nodes[0];
          }, g.prototype.contains = function(m) {
            return this.nodes.indexOf(m) !== -1;
          }, g.prototype.replace = function(m) {
            return l(this.nodes, m, this.cmp);
          }, g.prototype.pushpop = function(m) {
            return u(this.nodes, m, this.cmp);
          }, g.prototype.heapify = function() {
            return i(this.nodes, this.cmp);
          }, g.prototype.updateItem = function(m) {
            return v(this.nodes, m, this.cmp);
          }, g.prototype.clear = function() {
            return this.nodes = [];
          }, g.prototype.empty = function() {
            return this.nodes.length === 0;
          }, g.prototype.size = function() {
            return this.nodes.length;
          }, g.prototype.clone = function() {
            var m;
            return m = new g(), m.nodes = this.nodes.slice(0), m;
          }, g.prototype.toArray = function() {
            return this.nodes.slice(0);
          }, g.prototype.insert = g.prototype.push, g.prototype.top = g.prototype.peek, g.prototype.front = g.prototype.peek, g.prototype.has = g.prototype.contains, g.prototype.copy = g.prototype.clone, g;
        }(), function(g, m) {
          return t.exports = m();
        }(this, function() {
          return r;
        });
      }).call(Sa);
    }), ka = sf, of = At({
      root: null,
      weight: function(e) {
        return 1;
      },
      directed: !1
    }), lf = {
      dijkstra: function(e) {
        if (!S(e)) {
          var r = arguments;
          e = {
            root: r[0],
            weight: r[1],
            directed: r[2]
          };
        }
        var a = of(e), n = a.root, i = a.weight, s = a.directed, o = this, u = i, l = j(n) ? this.filter(n)[0] : n[0], f = {}, h = {}, c = {}, d = this.byGroup(), v = d.nodes, y = d.edges;
        y.unmergeBy(function(re) {
          return re.isLoop();
        });
        for (var p = function(K) {
          return f[K.id()];
        }, g = function(K, q) {
          f[K.id()] = q, m.updateItem(K);
        }, m = new ka(function(re, K) {
          return p(re) - p(K);
        }), b = 0; b < v.length; b++) {
          var E = v[b];
          f[E.id()] = E.same(l) ? 0 : 1 / 0, m.push(E);
        }
        for (var I = function(K, q) {
          for (var ae = (s ? K.edgesTo(q) : K.edgesWith(q)).intersect(y), ue = 1 / 0, be, ie = 0; ie < ae.length; ie++) {
            var ge = ae[ie], we = u(ge);
            (we < ue || !be) && (ue = we, be = ge);
          }
          return {
            edge: be,
            dist: ue
          };
        }; m.size() > 0; ) {
          var A = m.pop(), x = p(A), k = A.id();
          if (c[k] = x, x !== 1 / 0)
            for (var C = A.neighborhood().intersect(v), F = 0; F < C.length; F++) {
              var G = C[F], M = G.id(), X = I(A, G), B = x + X.dist;
              B < p(G) && (g(G, B), h[M] = {
                node: A,
                edge: X.edge
              });
            }
        }
        return {
          distanceTo: function(K) {
            var q = j(K) ? v.filter(K)[0] : K[0];
            return c[q.id()];
          },
          pathTo: function(K) {
            var q = j(K) ? v.filter(K)[0] : K[0], ae = [], ue = q, be = ue.id();
            if (q.length > 0)
              for (ae.unshift(q); h[be]; ) {
                var ie = h[be];
                ae.unshift(ie.edge), ae.unshift(ie.node), ue = ie.node, be = ue.id();
              }
            return o.spawn(ae);
          }
        };
      }
    }, uf = {
      // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
      // implemented from pseudocode from wikipedia
      kruskal: function(e) {
        e = e || function(b) {
          return 1;
        };
        for (var r = this.byGroup(), a = r.nodes, n = r.edges, i = a.length, s = new Array(i), o = a, u = function(E) {
          for (var I = 0; I < s.length; I++) {
            var A = s[I];
            if (A.has(E))
              return I;
          }
        }, l = 0; l < i; l++)
          s[l] = this.spawn(a[l]);
        for (var f = n.sort(function(b, E) {
          return e(b) - e(E);
        }), h = 0; h < f.length; h++) {
          var c = f[h], d = c.source()[0], v = c.target()[0], y = u(d), p = u(v), g = s[y], m = s[p];
          y !== p && (o.merge(c), g.merge(m), s.splice(p, 1));
        }
        return o;
      }
    }, ff = At({
      root: null,
      goal: null,
      weight: function(e) {
        return 1;
      },
      heuristic: function(e) {
        return 0;
      },
      directed: !1
    }), hf = {
      // Implemented from pseudocode from wikipedia
      aStar: function(e) {
        var r = this.cy(), a = ff(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, u = a.weight;
        n = r.collection(n)[0], i = r.collection(i)[0];
        var l = n.id(), f = i.id(), h = {}, c = {}, d = {}, v = new ka(function(be, ie) {
          return c[be.id()] - c[ie.id()];
        }), y = new jr(), p = {}, g = {}, m = function(ie, ge) {
          v.push(ie), y.add(ge);
        }, b, E, I = function() {
          b = v.pop(), E = b.id(), y.delete(E);
        }, A = function(ie) {
          return y.has(ie);
        };
        m(n, l), h[l] = 0, c[l] = s(n);
        for (var x = 0; v.size() > 0; ) {
          if (I(), x++, E === f) {
            for (var k = [], C = i, F = f, G = g[F]; k.unshift(C), G != null && k.unshift(G), C = p[F], C != null; )
              F = C.id(), G = g[F];
            return {
              found: !0,
              distance: h[E],
              path: this.spawn(k),
              steps: x
            };
          }
          d[E] = !0;
          for (var M = b._private.edges, X = 0; X < M.length; X++) {
            var B = M[X];
            if (this.hasElementWithId(B.id()) && !(o && B.data("source") !== E)) {
              var re = B.source(), K = B.target(), q = re.id() !== E ? re : K, ae = q.id();
              if (this.hasElementWithId(ae) && !d[ae]) {
                var ue = h[E] + u(B);
                if (!A(ae)) {
                  h[ae] = ue, c[ae] = ue + s(q), m(q, ae), p[ae] = b, g[ae] = B;
                  continue;
                }
                ue < h[ae] && (h[ae] = ue, c[ae] = ue + s(q), p[ae] = b, g[ae] = B);
              }
            }
          }
        }
        return {
          found: !1,
          distance: void 0,
          path: void 0,
          steps: x
        };
      }
    }, cf = At({
      weight: function(e) {
        return 1;
      },
      directed: !1
    }), vf = {
      // Implemented from pseudocode from wikipedia
      floydWarshall: function(e) {
        for (var r = this.cy(), a = cf(e), n = a.weight, i = a.directed, s = n, o = this.byGroup(), u = o.nodes, l = o.edges, f = u.length, h = f * f, c = function(we) {
          return u.indexOf(we);
        }, d = function(we) {
          return u[we];
        }, v = new Array(h), y = 0; y < h; y++) {
          var p = y % f, g = (y - p) / f;
          g === p ? v[y] = 0 : v[y] = 1 / 0;
        }
        for (var m = new Array(h), b = new Array(h), E = 0; E < l.length; E++) {
          var I = l[E], A = I.source()[0], x = I.target()[0];
          if (A !== x) {
            var k = c(A), C = c(x), F = k * f + C, G = s(I);
            if (v[F] > G && (v[F] = G, m[F] = C, b[F] = I), !i) {
              var M = C * f + k;
              !i && v[M] > G && (v[M] = G, m[M] = k, b[M] = I);
            }
          }
        }
        for (var X = 0; X < f; X++)
          for (var B = 0; B < f; B++)
            for (var re = B * f + X, K = 0; K < f; K++) {
              var q = B * f + K, ae = X * f + K;
              v[re] + v[ae] < v[q] && (v[q] = v[re] + v[ae], m[q] = m[re]);
            }
        var ue = function(we) {
          return (j(we) ? r.filter(we) : we)[0];
        }, be = function(we) {
          return c(ue(we));
        }, ie = {
          distance: function(we, De) {
            var xe = be(we), Le = be(De);
            return v[xe * f + Le];
          },
          path: function(we, De) {
            var xe = be(we), Le = be(De), se = d(xe);
            if (xe === Le)
              return se.collection();
            if (m[xe * f + Le] == null)
              return r.collection();
            var Te = r.collection(), Ae = xe, Se;
            for (Te.merge(se); xe !== Le; )
              Ae = xe, xe = m[xe * f + Le], Se = b[Ae * f + xe], Te.merge(Se), Te.merge(d(xe));
            return Te;
          }
        };
        return ie;
      }
      // floydWarshall
    }, df = At({
      weight: function(e) {
        return 1;
      },
      directed: !1,
      root: null
    }), gf = {
      // Implemented from pseudocode from wikipedia
      bellmanFord: function(e) {
        var r = this, a = df(e), n = a.weight, i = a.directed, s = a.root, o = n, u = this, l = this.cy(), f = this.byGroup(), h = f.edges, c = f.nodes, d = c.length, v = new ur(), y = !1, p = [];
        s = l.collection(s)[0], h.unmergeBy(function(ze) {
          return ze.isLoop();
        });
        for (var g = h.length, m = function(Be) {
          var _e = v.get(Be.id());
          return _e || (_e = {}, v.set(Be.id(), _e)), _e;
        }, b = function(Be) {
          return (j(Be) ? l.$(Be) : Be)[0];
        }, E = function(Be) {
          return m(b(Be)).dist;
        }, I = function(Be) {
          for (var _e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, rt = b(Be), je = [], qe = rt; ; ) {
            if (qe == null)
              return r.spawn();
            var et = m(qe), fe = et.edge, O = et.pred;
            if (je.unshift(qe[0]), qe.same(_e) && je.length > 0)
              break;
            fe != null && je.unshift(fe), qe = O;
          }
          return u.spawn(je);
        }, A = 0; A < d; A++) {
          var x = c[A], k = m(x);
          x.same(s) ? k.dist = 0 : k.dist = 1 / 0, k.pred = null, k.edge = null;
        }
        for (var C = !1, F = function(Be, _e, rt, je, qe, et) {
          var fe = je.dist + et;
          fe < qe.dist && !rt.same(je.edge) && (qe.dist = fe, qe.pred = Be, qe.edge = rt, C = !0);
        }, G = 1; G < d; G++) {
          C = !1;
          for (var M = 0; M < g; M++) {
            var X = h[M], B = X.source(), re = X.target(), K = o(X), q = m(B), ae = m(re);
            F(B, re, X, q, ae, K), i || F(re, B, X, ae, q, K);
          }
          if (!C)
            break;
        }
        if (C)
          for (var ue = [], be = 0; be < g; be++) {
            var ie = h[be], ge = ie.source(), we = ie.target(), De = o(ie), xe = m(ge).dist, Le = m(we).dist;
            if (xe + De < Le || !i && Le + De < xe)
              if (y || (ct("Graph contains a negative weight cycle for Bellman-Ford"), y = !0), e.findNegativeWeightCycles !== !1) {
                var se = [];
                xe + De < Le && se.push(ge), !i && Le + De < xe && se.push(we);
                for (var Te = se.length, Ae = 0; Ae < Te; Ae++) {
                  var Se = se[Ae], Ne = [Se];
                  Ne.push(m(Se).edge);
                  for (var Fe = m(Se).pred; Ne.indexOf(Fe) === -1; )
                    Ne.push(Fe), Ne.push(m(Fe).edge), Fe = m(Fe).pred;
                  Ne = Ne.slice(Ne.indexOf(Fe));
                  for (var Xe = Ne[0].id(), Ie = 0, Re = 2; Re < Ne.length; Re += 2)
                    Ne[Re].id() < Xe && (Xe = Ne[Re].id(), Ie = Re);
                  Ne = Ne.slice(Ie).concat(Ne.slice(0, Ie)), Ne.push(Ne[0]);
                  var $e = Ne.map(function(ze) {
                    return ze.id();
                  }).join(",");
                  ue.indexOf($e) === -1 && (p.push(u.spawn(Ne)), ue.push($e));
                }
              } else
                break;
          }
        return {
          distanceTo: E,
          pathTo: I,
          hasNegativeWeightCycle: y,
          negativeWeightCycles: p
        };
      }
      // bellmanFord
    }, pf = Math.sqrt(2), yf = function(e, r, a) {
      a.length === 0 && Tt("Karger-Stein must be run on a connected (sub)graph");
      for (var n = a[e], i = n[1], s = n[2], o = r[i], u = r[s], l = a, f = l.length - 1; f >= 0; f--) {
        var h = l[f], c = h[1], d = h[2];
        (r[c] === o && r[d] === u || r[c] === u && r[d] === o) && l.splice(f, 1);
      }
      for (var v = 0; v < l.length; v++) {
        var y = l[v];
        y[1] === u ? (l[v] = y.slice(), l[v][1] = o) : y[2] === u && (l[v] = y.slice(), l[v][2] = o);
      }
      for (var p = 0; p < r.length; p++)
        r[p] === u && (r[p] = o);
      return l;
    }, fi = function(e, r, a, n) {
      for (; a > n; ) {
        var i = Math.floor(Math.random() * r.length);
        r = yf(i, e, r), a--;
      }
      return r;
    }, mf = {
      // Computes the minimum cut of an undirected graph
      // Returns the correct answer with high probability
      kargerStein: function() {
        var e = this, r = this.byGroup(), a = r.nodes, n = r.edges;
        n.unmergeBy(function(ae) {
          return ae.isLoop();
        });
        var i = a.length, s = n.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), u = Math.floor(i / pf);
        if (i < 2) {
          Tt("At least 2 nodes are required for Karger-Stein algorithm");
          return;
        }
        for (var l = [], f = 0; f < s; f++) {
          var h = n[f];
          l.push([f, a.indexOf(h.source()), a.indexOf(h.target())]);
        }
        for (var c = 1 / 0, d = [], v = new Array(i), y = new Array(i), p = new Array(i), g = function(ue, be) {
          for (var ie = 0; ie < i; ie++)
            be[ie] = ue[ie];
        }, m = 0; m <= o; m++) {
          for (var b = 0; b < i; b++)
            y[b] = b;
          var E = fi(y, l.slice(), i, u), I = E.slice();
          g(y, p);
          var A = fi(y, E, u, 2), x = fi(p, I, u, 2);
          A.length <= x.length && A.length < c ? (c = A.length, d = A, g(y, v)) : x.length <= A.length && x.length < c && (c = x.length, d = x, g(p, v));
        }
        for (var k = this.spawn(d.map(function(ae) {
          return n[ae[0]];
        })), C = this.spawn(), F = this.spawn(), G = v[0], M = 0; M < v.length; M++) {
          var X = v[M], B = a[M];
          X === G ? C.merge(B) : F.merge(B);
        }
        var re = function(ue) {
          var be = e.spawn();
          return ue.forEach(function(ie) {
            be.merge(ie), ie.connectedEdges().forEach(function(ge) {
              e.contains(ge) && !k.contains(ge) && be.merge(ge);
            });
          }), be;
        }, K = [re(C), re(F)], q = {
          cut: k,
          components: K,
          // n.b. partitions are included to be compatible with the old api spec
          // (could be removed in a future major version)
          partition1: C,
          partition2: F
        };
        return q;
      }
    }, bf = function(e) {
      return {
        x: e.x,
        y: e.y
      };
    }, gn = function(e, r, a) {
      return {
        x: e.x * r + a.x,
        y: e.y * r + a.y
      };
    }, ws = function(e, r, a) {
      return {
        x: (e.x - a.x) / r,
        y: (e.y - a.y) / r
      };
    }, ea = function(e) {
      return {
        x: e[0],
        y: e[1]
      };
    }, Ef = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = r; i < a; i++) {
        var s = e[i];
        isFinite(s) && (n = Math.min(s, n));
      }
      return n;
    }, wf = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = r; i < a; i++) {
        var s = e[i];
        isFinite(s) && (n = Math.max(s, n));
      }
      return n;
    }, xf = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = r; s < a; s++) {
        var o = e[s];
        isFinite(o) && (n += o, i++);
      }
      return n / i;
    }, Tf = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
      n ? e = e.slice(r, a) : (a < e.length && e.splice(a, e.length - a), r > 0 && e.splice(0, r));
      for (var o = 0, u = e.length - 1; u >= 0; u--) {
        var l = e[u];
        s ? isFinite(l) || (e[u] = -1 / 0, o++) : e.splice(u, 1);
      }
      i && e.sort(function(c, d) {
        return c - d;
      });
      var f = e.length, h = Math.floor(f / 2);
      return f % 2 !== 0 ? e[h + 1 + o] : (e[h - 1 + o] + e[h + o]) / 2;
    }, Cf = function(e) {
      return Math.PI * e / 180;
    }, pn = function(e, r) {
      return Math.atan2(r, e) - Math.PI / 2;
    }, hi = Math.log2 || function(t) {
      return Math.log(t) / Math.log(2);
    }, xs = function(e) {
      return e > 0 ? 1 : e < 0 ? -1 : 0;
    }, Br = function(e, r) {
      return Math.sqrt(Fr(e, r));
    }, Fr = function(e, r) {
      var a = r.x - e.x, n = r.y - e.y;
      return a * a + n * n;
    }, Df = function(e) {
      for (var r = e.length, a = 0, n = 0; n < r; n++)
        a += e[n];
      for (var i = 0; i < r; i++)
        e[i] = e[i] / a;
      return e;
    }, St = function(e, r, a, n) {
      return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * r + n * n * a;
    }, ta = function(e, r, a, n) {
      return {
        x: St(e.x, r.x, a.x, n),
        y: St(e.y, r.y, a.y, n)
      };
    }, Lf = function(e, r, a, n) {
      var i = {
        x: r.x - e.x,
        y: r.y - e.y
      }, s = Br(e, r), o = {
        x: i.x / s,
        y: i.y / s
      };
      return a = a ?? 0, n = n ?? a * s, {
        x: e.x + o.x * n,
        y: e.y + o.y * n
      };
    }, Pa = function(e, r, a) {
      return Math.max(e, Math.min(a, r));
    }, Yt = function(e) {
      if (e == null)
        return {
          x1: 1 / 0,
          y1: 1 / 0,
          x2: -1 / 0,
          y2: -1 / 0,
          w: 0,
          h: 0
        };
      if (e.x1 != null && e.y1 != null) {
        if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
          return {
            x1: e.x1,
            y1: e.y1,
            x2: e.x2,
            y2: e.y2,
            w: e.x2 - e.x1,
            h: e.y2 - e.y1
          };
        if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
          return {
            x1: e.x1,
            y1: e.y1,
            x2: e.x1 + e.w,
            y2: e.y1 + e.h,
            w: e.w,
            h: e.h
          };
      }
    }, Sf = function(e) {
      return {
        x1: e.x1,
        x2: e.x2,
        w: e.w,
        y1: e.y1,
        y2: e.y2,
        h: e.h
      };
    }, Af = function(e) {
      e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
    }, Of = function(e, r, a) {
      return {
        x1: e.x1 + r,
        x2: e.x2 + r,
        y1: e.y1 + a,
        y2: e.y2 + a,
        w: e.w,
        h: e.h
      };
    }, Ts = function(e, r) {
      e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
    }, Nf = function(e, r, a) {
      e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
    }, yn = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
    }, mn = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, s;
      if (r.length === 1)
        a = n = i = s = r[0];
      else if (r.length === 2)
        a = i = r[0], s = n = r[1];
      else if (r.length === 4) {
        var o = w(r, 4);
        a = o[0], n = o[1], i = o[2], s = o[3];
      }
      return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
    }, Cs = function(e, r) {
      e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
    }, ci = function(e, r) {
      return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
    }, ra = function(e, r, a) {
      return e.x1 <= r && r <= e.x2 && e.y1 <= a && a <= e.y2;
    }, Mf = function(e, r) {
      return ra(e, r.x, r.y);
    }, Ds = function(e, r) {
      return ra(e, r.x1, r.y1) && ra(e, r.x2, r.y2);
    }, Ls = function(e, r, a, n, i, s, o) {
      var u = Ga(i, s), l = i / 2, f = s / 2, h;
      {
        var c = a - l + u - o, d = n - f - o, v = a + l - u + o, y = d;
        if (h = Cr(e, r, a, n, c, d, v, y, !1), h.length > 0)
          return h;
      }
      {
        var p = a + l + o, g = n - f + u - o, m = p, b = n + f - u + o;
        if (h = Cr(e, r, a, n, p, g, m, b, !1), h.length > 0)
          return h;
      }
      {
        var E = a - l + u - o, I = n + f + o, A = a + l - u + o, x = I;
        if (h = Cr(e, r, a, n, E, I, A, x, !1), h.length > 0)
          return h;
      }
      {
        var k = a - l - o, C = n - f + u - o, F = k, G = n + f - u + o;
        if (h = Cr(e, r, a, n, k, C, F, G, !1), h.length > 0)
          return h;
      }
      var M;
      {
        var X = a - l + u, B = n - f + u;
        if (M = Ba(e, r, a, n, X, B, u + o), M.length > 0 && M[0] <= X && M[1] <= B)
          return [M[0], M[1]];
      }
      {
        var re = a + l - u, K = n - f + u;
        if (M = Ba(e, r, a, n, re, K, u + o), M.length > 0 && M[0] >= re && M[1] <= K)
          return [M[0], M[1]];
      }
      {
        var q = a + l - u, ae = n + f - u;
        if (M = Ba(e, r, a, n, q, ae, u + o), M.length > 0 && M[0] >= q && M[1] >= ae)
          return [M[0], M[1]];
      }
      {
        var ue = a - l + u, be = n + f - u;
        if (M = Ba(e, r, a, n, ue, be, u + o), M.length > 0 && M[0] <= ue && M[1] >= be)
          return [M[0], M[1]];
      }
      return [];
    }, If = function(e, r, a, n, i, s, o) {
      var u = o, l = Math.min(a, i), f = Math.max(a, i), h = Math.min(n, s), c = Math.max(n, s);
      return l - u <= e && e <= f + u && h - u <= r && r <= c + u;
    }, Rf = function(e, r, a, n, i, s, o, u, l) {
      var f = {
        x1: Math.min(a, o, i) - l,
        x2: Math.max(a, o, i) + l,
        y1: Math.min(n, u, s) - l,
        y2: Math.max(n, u, s) + l
      };
      return !(e < f.x1 || e > f.x2 || r < f.y1 || r > f.y2);
    }, kf = function(e, r, a, n) {
      a -= n;
      var i = r * r - 4 * e * a;
      if (i < 0)
        return [];
      var s = Math.sqrt(i), o = 2 * e, u = (-r + s) / o, l = (-r - s) / o;
      return [u, l];
    }, Pf = function(e, r, a, n, i) {
      var s = 1e-5;
      e === 0 && (e = s), r /= e, a /= e, n /= e;
      var o, u, l, f, h, c, d, v;
      if (u = (3 * a - r * r) / 9, l = -(27 * n) + r * (9 * a - 2 * (r * r)), l /= 54, o = u * u * u + l * l, i[1] = 0, d = r / 3, o > 0) {
        h = l + Math.sqrt(o), h = h < 0 ? -Math.pow(-h, 1 / 3) : Math.pow(h, 1 / 3), c = l - Math.sqrt(o), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), i[0] = -d + h + c, d += (h + c) / 2, i[4] = i[2] = -d, d = Math.sqrt(3) * (-c + h) / 2, i[3] = d, i[5] = -d;
        return;
      }
      if (i[5] = i[3] = 0, o === 0) {
        v = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), i[0] = -d + 2 * v, i[4] = i[2] = -(v + d);
        return;
      }
      u = -u, f = u * u * u, f = Math.acos(l / Math.sqrt(f)), v = 2 * Math.sqrt(u), i[0] = -d + v * Math.cos(f / 3), i[2] = -d + v * Math.cos((f + 2 * Math.PI) / 3), i[4] = -d + v * Math.cos((f + 4 * Math.PI) / 3);
    }, Bf = function(e, r, a, n, i, s, o, u) {
      var l = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * u + 4 * s * s - 4 * s * u + u * u, f = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * u - 6 * s * s + 3 * s * u, h = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * u - n * r + 2 * s * s + 2 * s * r - u * r, c = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * r - s * r, d = [];
      Pf(l, f, h, c, d);
      for (var v = 1e-7, y = [], p = 0; p < 6; p += 2)
        Math.abs(d[p + 1]) < v && d[p] >= 0 && d[p] <= 1 && y.push(d[p]);
      y.push(1), y.push(0);
      for (var g = -1, m, b, E, I = 0; I < y.length; I++)
        m = Math.pow(1 - y[I], 2) * a + 2 * (1 - y[I]) * y[I] * i + y[I] * y[I] * o, b = Math.pow(1 - y[I], 2) * n + 2 * (1 - y[I]) * y[I] * s + y[I] * y[I] * u, E = Math.pow(m - e, 2) + Math.pow(b - r, 2), g >= 0 ? E < g && (g = E) : g = E;
      return g;
    }, Ff = function(e, r, a, n, i, s) {
      var o = [e - a, r - n], u = [i - a, s - n], l = u[0] * u[0] + u[1] * u[1], f = o[0] * o[0] + o[1] * o[1], h = o[0] * u[0] + o[1] * u[1], c = h * h / l;
      return h < 0 ? f : c > l ? (e - i) * (e - i) + (r - s) * (r - s) : f - c;
    }, Ht = function(e, r, a) {
      for (var n, i, s, o, u, l = 0, f = 0; f < a.length / 2; f++)
        if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e))
          if (n >= e && e >= s || n <= e && e <= s)
            u = (e - n) / (s - n) * (o - i) + i, u > r && l++;
          else
            continue;
      return l % 2 !== 0;
    }, pr = function(e, r, a, n, i, s, o, u, l) {
      var f = new Array(a.length), h;
      u[0] != null ? (h = Math.atan(u[1] / u[0]), u[0] < 0 ? h = h + Math.PI / 2 : h = -h - Math.PI / 2) : h = u;
      for (var c = Math.cos(-h), d = Math.sin(-h), v = 0; v < f.length / 2; v++)
        f[v * 2] = s / 2 * (a[v * 2] * c - a[v * 2 + 1] * d), f[v * 2 + 1] = o / 2 * (a[v * 2 + 1] * c + a[v * 2] * d), f[v * 2] += n, f[v * 2 + 1] += i;
      var y;
      if (l > 0) {
        var p = En(f, -l);
        y = bn(p);
      } else
        y = f;
      return Ht(e, r, y);
    }, Gf = function(e, r, a, n, i, s, o) {
      for (var u = new Array(a.length), l = s / 2, f = o / 2, h = gi(s, o), c = h * h, d = 0; d < a.length / 4; d++) {
        var v = void 0, y = void 0;
        d === 0 ? v = a.length - 2 : v = d * 4 - 2, y = d * 4 + 2;
        var p = n + l * a[d * 4], g = i + f * a[d * 4 + 1], m = -a[v] * a[y] - a[v + 1] * a[y + 1], b = h / Math.tan(Math.acos(m) / 2), E = p - b * a[v], I = g - b * a[v + 1], A = p + b * a[y], x = g + b * a[y + 1];
        u[d * 4] = E, u[d * 4 + 1] = I, u[d * 4 + 2] = A, u[d * 4 + 3] = x;
        var k = a[v + 1], C = -a[v], F = k * a[y] + C * a[y + 1];
        F < 0 && (k *= -1, C *= -1);
        var G = E + k * h, M = I + C * h, X = Math.pow(G - e, 2) + Math.pow(M - r, 2);
        if (X <= c)
          return !0;
      }
      return Ht(e, r, u);
    }, bn = function(e) {
      for (var r = new Array(e.length / 2), a, n, i, s, o, u, l, f, h = 0; h < e.length / 4; h++) {
        a = e[h * 4], n = e[h * 4 + 1], i = e[h * 4 + 2], s = e[h * 4 + 3], h < e.length / 4 - 1 ? (o = e[(h + 1) * 4], u = e[(h + 1) * 4 + 1], l = e[(h + 1) * 4 + 2], f = e[(h + 1) * 4 + 3]) : (o = e[0], u = e[1], l = e[2], f = e[3]);
        var c = Cr(a, n, i, s, o, u, l, f, !0);
        r[h * 2] = c[0], r[h * 2 + 1] = c[1];
      }
      return r;
    }, En = function(e, r) {
      for (var a = new Array(e.length * 2), n, i, s, o, u = 0; u < e.length / 2; u++) {
        n = e[u * 2], i = e[u * 2 + 1], u < e.length / 2 - 1 ? (s = e[(u + 1) * 2], o = e[(u + 1) * 2 + 1]) : (s = e[0], o = e[1]);
        var l = o - i, f = -(s - n), h = Math.sqrt(l * l + f * f), c = l / h, d = f / h;
        a[u * 4] = n + c * r, a[u * 4 + 1] = i + d * r, a[u * 4 + 2] = s + c * r, a[u * 4 + 3] = o + d * r;
      }
      return a;
    }, zf = function(e, r, a, n, i, s) {
      var o = a - e, u = n - r;
      o /= i, u /= s;
      var l = Math.sqrt(o * o + u * u), f = l - 1;
      if (f < 0)
        return [];
      var h = f / l;
      return [(a - e) * h + e, (n - r) * h + r];
    }, Gr = function(e, r, a, n, i, s, o) {
      return e -= i, r -= s, e /= a / 2 + o, r /= n / 2 + o, e * e + r * r <= 1;
    }, Ba = function(e, r, a, n, i, s, o) {
      var u = [a - e, n - r], l = [e - i, r - s], f = u[0] * u[0] + u[1] * u[1], h = 2 * (l[0] * u[0] + l[1] * u[1]), c = l[0] * l[0] + l[1] * l[1] - o * o, d = h * h - 4 * f * c;
      if (d < 0)
        return [];
      var v = (-h + Math.sqrt(d)) / (2 * f), y = (-h - Math.sqrt(d)) / (2 * f), p = Math.min(v, y), g = Math.max(v, y), m = [];
      if (p >= 0 && p <= 1 && m.push(p), g >= 0 && g <= 1 && m.push(g), m.length === 0)
        return [];
      var b = m[0] * u[0] + e, E = m[0] * u[1] + r;
      if (m.length > 1) {
        if (m[0] == m[1])
          return [b, E];
        var I = m[1] * u[0] + e, A = m[1] * u[1] + r;
        return [b, E, I, A];
      } else
        return [b, E];
    }, vi = function(e, r, a) {
      return r <= e && e <= a || a <= e && e <= r ? e : e <= r && r <= a || a <= r && r <= e ? r : a;
    }, Cr = function(e, r, a, n, i, s, o, u, l) {
      var f = e - i, h = a - e, c = o - i, d = r - s, v = n - r, y = u - s, p = c * d - y * f, g = h * d - v * f, m = y * h - c * v;
      if (m !== 0) {
        var b = p / m, E = g / m, I = 1e-3, A = 0 - I, x = 1 + I;
        return A <= b && b <= x && A <= E && E <= x ? [e + b * h, r + b * v] : l ? [e + b * h, r + b * v] : [];
      } else
        return p === 0 || g === 0 ? vi(e, a, o) === o ? [o, u] : vi(e, a, i) === i ? [i, s] : vi(i, o, a) === a ? [a, n] : [] : [];
    }, Fa = function(e, r, a, n, i, s, o, u) {
      var l = [], f, h = new Array(a.length), c = !0;
      s == null && (c = !1);
      var d;
      if (c) {
        for (var v = 0; v < h.length / 2; v++)
          h[v * 2] = a[v * 2] * s + n, h[v * 2 + 1] = a[v * 2 + 1] * o + i;
        if (u > 0) {
          var y = En(h, -u);
          d = bn(y);
        } else
          d = h;
      } else
        d = a;
      for (var p, g, m, b, E = 0; E < d.length / 2; E++)
        p = d[E * 2], g = d[E * 2 + 1], E < d.length / 2 - 1 ? (m = d[(E + 1) * 2], b = d[(E + 1) * 2 + 1]) : (m = d[0], b = d[1]), f = Cr(e, r, n, i, p, g, m, b), f.length !== 0 && l.push(f[0], f[1]);
      return l;
    }, Vf = function(e, r, a, n, i, s, o, u) {
      for (var l = [], f, h = new Array(a.length), c = s / 2, d = o / 2, v = gi(s, o), y = 0; y < a.length / 4; y++) {
        var p = void 0, g = void 0;
        y === 0 ? p = a.length - 2 : p = y * 4 - 2, g = y * 4 + 2;
        var m = n + c * a[y * 4], b = i + d * a[y * 4 + 1], E = -a[p] * a[g] - a[p + 1] * a[g + 1], I = v / Math.tan(Math.acos(E) / 2), A = m - I * a[p], x = b - I * a[p + 1], k = m + I * a[g], C = b + I * a[g + 1];
        y === 0 ? (h[a.length - 2] = A, h[a.length - 1] = x) : (h[y * 4 - 2] = A, h[y * 4 - 1] = x), h[y * 4] = k, h[y * 4 + 1] = C;
        var F = a[p + 1], G = -a[p], M = F * a[g] + G * a[g + 1];
        M < 0 && (F *= -1, G *= -1);
        var X = A + F * v, B = x + G * v;
        f = Ba(e, r, n, i, X, B, v), f.length !== 0 && l.push(f[0], f[1]);
      }
      for (var re = 0; re < h.length / 4; re++)
        f = Cr(e, r, n, i, h[re * 4], h[re * 4 + 1], h[re * 4 + 2], h[re * 4 + 3], !1), f.length !== 0 && l.push(f[0], f[1]);
      if (l.length > 2) {
        for (var K = [l[0], l[1]], q = Math.pow(K[0] - e, 2) + Math.pow(K[1] - r, 2), ae = 1; ae < l.length / 2; ae++) {
          var ue = Math.pow(l[ae * 2] - e, 2) + Math.pow(l[ae * 2 + 1] - r, 2);
          ue <= q && (K[0] = l[ae * 2], K[1] = l[ae * 2 + 1], q = ue);
        }
        return K;
      }
      return l;
    }, wn = function(e, r, a) {
      var n = [e[0] - r[0], e[1] - r[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
      return s < 0 && (s = 1e-5), [r[0] + s * n[0], r[1] + s * n[1]];
    }, _t = function(e, r) {
      var a = di(e, r);
      return a = Ss(a), a;
    }, Ss = function(e) {
      for (var r, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, u = -1 / 0, l = 0; l < n; l++)
        r = e[2 * l], a = e[2 * l + 1], i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), u = Math.max(u, a);
      for (var f = 2 / (o - i), h = 2 / (u - s), c = 0; c < n; c++)
        r = e[2 * c] = e[2 * c] * f, a = e[2 * c + 1] = e[2 * c + 1] * h, i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), u = Math.max(u, a);
      if (s < -1)
        for (var d = 0; d < n; d++)
          a = e[2 * d + 1] = e[2 * d + 1] + (-1 - s);
      return e;
    }, di = function(e, r) {
      var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
      n += r;
      for (var i = new Array(e * 2), s, o = 0; o < e; o++)
        s = o * a + n, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
      return i;
    }, Ga = function(e, r) {
      return Math.min(e / 4, r / 4, 8);
    }, gi = function(e, r) {
      return Math.min(e / 10, r / 10, 8);
    }, As = function() {
      return 8;
    }, $f = function(e, r, a) {
      return [e - 2 * r + a, 2 * (r - e), e];
    }, pi = function(e, r) {
      return {
        heightOffset: Math.min(15, 0.05 * r),
        widthOffset: Math.min(100, 0.25 * e),
        ctrlPtOffsetPct: 0.05
      };
    }, _f = At({
      dampingFactor: 0.8,
      precision: 1e-6,
      iterations: 200,
      weight: function(e) {
        return 1;
      }
    }), Uf = {
      pageRank: function(e) {
        for (var r = _f(e), a = r.dampingFactor, n = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, u = this.byGroup(), l = u.nodes, f = u.edges, h = l.length, c = h * h, d = f.length, v = new Array(c), y = new Array(h), p = (1 - a) / h, g = 0; g < h; g++) {
          for (var m = 0; m < h; m++) {
            var b = g * h + m;
            v[b] = 0;
          }
          y[g] = 0;
        }
        for (var E = 0; E < d; E++) {
          var I = f[E], A = I.data("source"), x = I.data("target");
          if (A !== x) {
            var k = l.indexOfId(A), C = l.indexOfId(x), F = s(I), G = C * h + k;
            v[G] += F, y[k] += F;
          }
        }
        for (var M = 1 / h + p, X = 0; X < h; X++)
          if (y[X] === 0)
            for (var B = 0; B < h; B++) {
              var re = B * h + X;
              v[re] = M;
            }
          else
            for (var K = 0; K < h; K++) {
              var q = K * h + X;
              v[q] = v[q] / y[X] + p;
            }
        for (var ae = new Array(h), ue = new Array(h), be, ie = 0; ie < h; ie++)
          ae[ie] = 1;
        for (var ge = 0; ge < i; ge++) {
          for (var we = 0; we < h; we++)
            ue[we] = 0;
          for (var De = 0; De < h; De++)
            for (var xe = 0; xe < h; xe++) {
              var Le = De * h + xe;
              ue[De] += v[Le] * ae[xe];
            }
          Df(ue), be = ae, ae = ue, ue = be;
          for (var se = 0, Te = 0; Te < h; Te++) {
            var Ae = be[Te] - ae[Te];
            se += Ae * Ae;
          }
          if (se < n)
            break;
        }
        var Se = {
          rank: function(Fe) {
            return Fe = o.collection(Fe)[0], ae[l.indexOf(Fe)];
          }
        };
        return Se;
      }
      // pageRank
    }, Os = At({
      root: null,
      weight: function(e) {
        return 1;
      },
      directed: !1,
      alpha: 0
    }), aa = {
      degreeCentralityNormalized: function(e) {
        e = Os(e);
        var r = this.cy(), a = this.nodes(), n = a.length;
        if (e.directed) {
          for (var f = {}, h = {}, c = 0, d = 0, v = 0; v < n; v++) {
            var y = a[v], p = y.id();
            e.root = y;
            var g = this.degreeCentrality(e);
            c < g.indegree && (c = g.indegree), d < g.outdegree && (d = g.outdegree), f[p] = g.indegree, h[p] = g.outdegree;
          }
          return {
            indegree: function(b) {
              return c == 0 ? 0 : (j(b) && (b = r.filter(b)), f[b.id()] / c);
            },
            outdegree: function(b) {
              return d === 0 ? 0 : (j(b) && (b = r.filter(b)), h[b.id()] / d);
            }
          };
        } else {
          for (var i = {}, s = 0, o = 0; o < n; o++) {
            var u = a[o];
            e.root = u;
            var l = this.degreeCentrality(e);
            s < l.degree && (s = l.degree), i[u.id()] = l.degree;
          }
          return {
            degree: function(b) {
              return s === 0 ? 0 : (j(b) && (b = r.filter(b)), i[b.id()] / s);
            }
          };
        }
      },
      // degreeCentralityNormalized
      // Implemented from the algorithm in Opsahl's paper
      // "Node centrality in weighted networks: Generalizing degree and shortest paths"
      // check the heading 2 "Degree"
      degreeCentrality: function(e) {
        e = Os(e);
        var r = this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, u = n.alpha;
        if (i = r.collection(i)[0], o) {
          for (var d = i.connectedEdges(), v = d.filter(function(A) {
            return A.target().same(i) && a.has(A);
          }), y = d.filter(function(A) {
            return A.source().same(i) && a.has(A);
          }), p = v.length, g = y.length, m = 0, b = 0, E = 0; E < v.length; E++)
            m += s(v[E]);
          for (var I = 0; I < y.length; I++)
            b += s(y[I]);
          return {
            indegree: Math.pow(p, 1 - u) * Math.pow(m, u),
            outdegree: Math.pow(g, 1 - u) * Math.pow(b, u)
          };
        } else {
          for (var l = i.connectedEdges().intersection(a), f = l.length, h = 0, c = 0; c < l.length; c++)
            h += s(l[c]);
          return {
            degree: Math.pow(f, 1 - u) * Math.pow(h, u)
          };
        }
      }
      // degreeCentrality
    };
    aa.dc = aa.degreeCentrality, aa.dcn = aa.degreeCentralityNormalised = aa.degreeCentralityNormalized;
    var Ns = At({
      harmonic: !0,
      weight: function() {
        return 1;
      },
      directed: !1,
      root: null
    }), na = {
      closenessCentralityNormalized: function(e) {
        for (var r = Ns(e), a = r.harmonic, n = r.weight, i = r.directed, s = this.cy(), o = {}, u = 0, l = this.nodes(), f = this.floydWarshall({
          weight: n,
          directed: i
        }), h = 0; h < l.length; h++) {
          for (var c = 0, d = l[h], v = 0; v < l.length; v++)
            if (h !== v) {
              var y = f.distance(d, l[v]);
              a ? c += 1 / y : c += y;
            }
          a || (c = 1 / c), u < c && (u = c), o[d.id()] = c;
        }
        return {
          closeness: function(g) {
            return u == 0 ? 0 : (j(g) ? g = s.filter(g)[0].id() : g = g.id(), o[g] / u);
          }
        };
      },
      // Implemented from pseudocode from wikipedia
      closenessCentrality: function(e) {
        var r = Ns(e), a = r.root, n = r.weight, i = r.directed, s = r.harmonic;
        a = this.filter(a)[0];
        for (var o = this.dijkstra({
          root: a,
          weight: n,
          directed: i
        }), u = 0, l = this.nodes(), f = 0; f < l.length; f++) {
          var h = l[f];
          if (!h.same(a)) {
            var c = o.distanceTo(h);
            s ? u += 1 / c : u += c;
          }
        }
        return s ? u : 1 / u;
      }
      // closenessCentrality
    };
    na.cc = na.closenessCentrality, na.ccn = na.closenessCentralityNormalised = na.closenessCentralityNormalized;
    var Yf = At({
      weight: null,
      directed: !1
    }), yi = {
      // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
      betweennessCentrality: function(e) {
        for (var r = Yf(e), a = r.directed, n = r.weight, i = n != null, s = this.cy(), o = this.nodes(), u = {}, l = {}, f = 0, h = {
          set: function(b, E) {
            l[b] = E, E > f && (f = E);
          },
          get: function(b) {
            return l[b];
          }
        }, c = 0; c < o.length; c++) {
          var d = o[c], v = d.id();
          a ? u[v] = d.outgoers().nodes() : u[v] = d.openNeighborhood().nodes(), h.set(v, 0);
        }
        for (var y = function(b) {
          for (var E = o[b].id(), I = [], A = {}, x = {}, k = {}, C = new ka(function(xe, Le) {
            return k[xe] - k[Le];
          }), F = 0; F < o.length; F++) {
            var G = o[F].id();
            A[G] = [], x[G] = 0, k[G] = 1 / 0;
          }
          for (x[E] = 1, k[E] = 0, C.push(E); !C.empty(); ) {
            var M = C.pop();
            if (I.push(M), i)
              for (var X = 0; X < u[M].length; X++) {
                var B = u[M][X], re = s.getElementById(M), K = void 0;
                re.edgesTo(B).length > 0 ? K = re.edgesTo(B)[0] : K = B.edgesTo(re)[0];
                var q = n(K);
                B = B.id(), k[B] > k[M] + q && (k[B] = k[M] + q, C.nodes.indexOf(B) < 0 ? C.push(B) : C.updateItem(B), x[B] = 0, A[B] = []), k[B] == k[M] + q && (x[B] = x[B] + x[M], A[B].push(M));
              }
            else
              for (var ae = 0; ae < u[M].length; ae++) {
                var ue = u[M][ae].id();
                k[ue] == 1 / 0 && (C.push(ue), k[ue] = k[M] + 1), k[ue] == k[M] + 1 && (x[ue] = x[ue] + x[M], A[ue].push(M));
              }
          }
          for (var be = {}, ie = 0; ie < o.length; ie++)
            be[o[ie].id()] = 0;
          for (; I.length > 0; ) {
            for (var ge = I.pop(), we = 0; we < A[ge].length; we++) {
              var De = A[ge][we];
              be[De] = be[De] + x[De] / x[ge] * (1 + be[ge]);
            }
            ge != o[b].id() && h.set(ge, h.get(ge) + be[ge]);
          }
        }, p = 0; p < o.length; p++)
          y(p);
        var g = {
          betweenness: function(b) {
            var E = s.collection(b).id();
            return h.get(E);
          },
          betweennessNormalized: function(b) {
            if (f == 0)
              return 0;
            var E = s.collection(b).id();
            return h.get(E) / f;
          }
        };
        return g.betweennessNormalised = g.betweennessNormalized, g;
      }
      // betweennessCentrality
    };
    yi.bc = yi.betweennessCentrality;
    var Hf = At({
      expandFactor: 2,
      // affects time of computation and cluster granularity to some extent: M * M
      inflateFactor: 2,
      // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
      multFactor: 1,
      // optional self loops for each node. Use a neutral value to improve cluster computations.
      maxIterations: 20,
      // maximum number of iterations of the MCL algorithm in a single run
      attributes: [
        // attributes/features used to group nodes, ie. similarity values between nodes
        function(t) {
          return 1;
        }
      ]
    }), Xf = function(e) {
      return Hf(e);
    }, qf = function(e, r) {
      for (var a = 0, n = 0; n < r.length; n++)
        a += r[n](e);
      return a;
    }, Wf = function(e, r, a) {
      for (var n = 0; n < r; n++)
        e[n * r + n] = a;
    }, Ms = function(e, r) {
      for (var a, n = 0; n < r; n++) {
        a = 0;
        for (var i = 0; i < r; i++)
          a += e[i * r + n];
        for (var s = 0; s < r; s++)
          e[s * r + n] = e[s * r + n] / a;
      }
    }, Kf = function(e, r, a) {
      for (var n = new Array(a * a), i = 0; i < a; i++) {
        for (var s = 0; s < a; s++)
          n[i * a + s] = 0;
        for (var o = 0; o < a; o++)
          for (var u = 0; u < a; u++)
            n[i * a + u] += e[i * a + o] * r[o * a + u];
      }
      return n;
    }, Zf = function(e, r, a) {
      for (var n = e.slice(0), i = 1; i < a; i++)
        e = Kf(e, n, r);
      return e;
    }, Qf = function(e, r, a) {
      for (var n = new Array(r * r), i = 0; i < r * r; i++)
        n[i] = Math.pow(e[i], a);
      return Ms(n, r), n;
    }, Jf = function(e, r, a, n) {
      for (var i = 0; i < a; i++) {
        var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(r[i] * Math.pow(10, n)) / Math.pow(10, n);
        if (s !== o)
          return !1;
      }
      return !0;
    }, jf = function(e, r, a, n) {
      for (var i = [], s = 0; s < r; s++) {
        for (var o = [], u = 0; u < r; u++)
          Math.round(e[s * r + u] * 1e3) / 1e3 > 0 && o.push(a[u]);
        o.length !== 0 && i.push(n.collection(o));
      }
      return i;
    }, eh = function(e, r) {
      for (var a = 0; a < e.length; a++)
        if (!r[a] || e[a].id() !== r[a].id())
          return !1;
      return !0;
    }, th = function(e) {
      for (var r = 0; r < e.length; r++)
        for (var a = 0; a < e.length; a++)
          r != a && eh(e[r], e[a]) && e.splice(a, 1);
      return e;
    }, Is = function(e) {
      for (var r = this.nodes(), a = this.edges(), n = this.cy(), i = Xf(e), s = {}, o = 0; o < r.length; o++)
        s[r[o].id()] = o;
      for (var u = r.length, l = u * u, f = new Array(l), h, c = 0; c < l; c++)
        f[c] = 0;
      for (var d = 0; d < a.length; d++) {
        var v = a[d], y = s[v.source().id()], p = s[v.target().id()], g = qf(v, i.attributes);
        f[y * u + p] += g, f[p * u + y] += g;
      }
      Wf(f, u, i.multFactor), Ms(f, u);
      for (var m = !0, b = 0; m && b < i.maxIterations; )
        m = !1, h = Zf(f, u, i.expandFactor), f = Qf(h, u, i.inflateFactor), Jf(f, h, l, 4) || (m = !0), b++;
      var E = jf(f, u, r, n);
      return E = th(E), E;
    }, rh = {
      markovClustering: Is,
      mcl: Is
    }, ah = function(e) {
      return e;
    }, Rs = function(e, r) {
      return Math.abs(r - e);
    }, ks = function(e, r, a) {
      return e + Rs(r, a);
    }, Ps = function(e, r, a) {
      return e + Math.pow(a - r, 2);
    }, nh = function(e) {
      return Math.sqrt(e);
    }, ih = function(e, r, a) {
      return Math.max(e, Rs(r, a));
    }, za = function(e, r, a, n, i) {
      for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : ah, o = n, u, l, f = 0; f < e; f++)
        u = r(f), l = a(f), o = i(o, u, l);
      return s(o);
    }, ia = {
      euclidean: function(e, r, a) {
        return e >= 2 ? za(e, r, a, 0, Ps, nh) : za(e, r, a, 0, ks);
      },
      squaredEuclidean: function(e, r, a) {
        return za(e, r, a, 0, Ps);
      },
      manhattan: function(e, r, a) {
        return za(e, r, a, 0, ks);
      },
      max: function(e, r, a) {
        return za(e, r, a, -1 / 0, ih);
      }
    };
    ia["squared-euclidean"] = ia.squaredEuclidean, ia.squaredeuclidean = ia.squaredEuclidean;
    function xn(t, e, r, a, n, i) {
      var s;
      return Y(t) ? s = t : s = ia[t] || ia.euclidean, e === 0 && Y(t) ? s(n, i) : s(e, r, a, n, i);
    }
    var sh = At({
      k: 2,
      m: 2,
      sensitivityThreshold: 1e-4,
      distance: "euclidean",
      maxIterations: 10,
      attributes: [],
      testMode: !1,
      testCentroids: null
    }), mi = function(e) {
      return sh(e);
    }, Tn = function(e, r, a, n, i) {
      var s = i !== "kMedoids", o = s ? function(h) {
        return a[h];
      } : function(h) {
        return n[h](a);
      }, u = function(c) {
        return n[c](r);
      }, l = a, f = r;
      return xn(e, n.length, o, u, l, f);
    }, bi = function(e, r, a) {
      for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(r), u = null, l = 0; l < n; l++)
        i[l] = e.min(a[l]).value, s[l] = e.max(a[l]).value;
      for (var f = 0; f < r; f++) {
        u = [];
        for (var h = 0; h < n; h++)
          u[h] = Math.random() * (s[h] - i[h]) + i[h];
        o[f] = u;
      }
      return o;
    }, Bs = function(e, r, a, n, i) {
      for (var s = 1 / 0, o = 0, u = 0; u < r.length; u++) {
        var l = Tn(a, e, r[u], n, i);
        l < s && (s = l, o = u);
      }
      return o;
    }, Fs = function(e, r, a) {
      for (var n = [], i = null, s = 0; s < r.length; s++)
        i = r[s], a[i.id()] === e && n.push(i);
      return n;
    }, oh = function(e, r, a) {
      return Math.abs(r - e) <= a;
    }, lh = function(e, r, a) {
      for (var n = 0; n < e.length; n++)
        for (var i = 0; i < e[n].length; i++) {
          var s = Math.abs(e[n][i] - r[n][i]);
          if (s > a)
            return !1;
        }
      return !0;
    }, uh = function(e, r, a) {
      for (var n = 0; n < a; n++)
        if (e === r[n])
          return !0;
      return !1;
    }, Gs = function(e, r) {
      var a = new Array(r);
      if (e.length < 50)
        for (var n = 0; n < r; n++) {
          for (var i = e[Math.floor(Math.random() * e.length)]; uh(i, a, n); )
            i = e[Math.floor(Math.random() * e.length)];
          a[n] = i;
        }
      else
        for (var s = 0; s < r; s++)
          a[s] = e[Math.floor(Math.random() * e.length)];
      return a;
    }, zs = function(e, r, a) {
      for (var n = 0, i = 0; i < r.length; i++)
        n += Tn("manhattan", r[i], e, a, "kMedoids");
      return n;
    }, fh = function(e) {
      var r = this.cy(), a = this.nodes(), n = null, i = mi(e), s = new Array(i.k), o = {}, u;
      i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, u = bi(a, i.k, i.attributes)) : ee(i.testCentroids) === "object" ? u = i.testCentroids : u = bi(a, i.k, i.attributes) : u = bi(a, i.k, i.attributes);
      for (var l = !0, f = 0; l && f < i.maxIterations; ) {
        for (var h = 0; h < a.length; h++)
          n = a[h], o[n.id()] = Bs(n, u, i.distance, i.attributes, "kMeans");
        l = !1;
        for (var c = 0; c < i.k; c++) {
          var d = Fs(c, a, o);
          if (d.length !== 0) {
            for (var v = i.attributes.length, y = u[c], p = new Array(v), g = new Array(v), m = 0; m < v; m++) {
              g[m] = 0;
              for (var b = 0; b < d.length; b++)
                n = d[b], g[m] += i.attributes[m](n);
              p[m] = g[m] / d.length, oh(p[m], y[m], i.sensitivityThreshold) || (l = !0);
            }
            u[c] = p, s[c] = r.collection(d);
          }
        }
        f++;
      }
      return s;
    }, hh = function(e) {
      var r = this.cy(), a = this.nodes(), n = null, i = mi(e), s = new Array(i.k), o, u = {}, l, f = new Array(i.k);
      i.testMode ? typeof i.testCentroids == "number" || (ee(i.testCentroids) === "object" ? o = i.testCentroids : o = Gs(a, i.k)) : o = Gs(a, i.k);
      for (var h = !0, c = 0; h && c < i.maxIterations; ) {
        for (var d = 0; d < a.length; d++)
          n = a[d], u[n.id()] = Bs(n, o, i.distance, i.attributes, "kMedoids");
        h = !1;
        for (var v = 0; v < o.length; v++) {
          var y = Fs(v, a, u);
          if (y.length !== 0) {
            f[v] = zs(o[v], y, i.attributes);
            for (var p = 0; p < y.length; p++)
              l = zs(y[p], y, i.attributes), l < f[v] && (f[v] = l, o[v] = y[p], h = !0);
            s[v] = r.collection(y);
          }
        }
        c++;
      }
      return s;
    }, ch = function(e, r, a, n, i) {
      for (var s, o, u = 0; u < r.length; u++)
        for (var l = 0; l < e.length; l++)
          n[u][l] = Math.pow(a[u][l], i.m);
      for (var f = 0; f < e.length; f++)
        for (var h = 0; h < i.attributes.length; h++) {
          s = 0, o = 0;
          for (var c = 0; c < r.length; c++)
            s += n[c][f] * i.attributes[h](r[c]), o += n[c][f];
          e[f][h] = s / o;
        }
    }, vh = function(e, r, a, n, i) {
      for (var s = 0; s < e.length; s++)
        r[s] = e[s].slice();
      for (var o, u, l, f = 2 / (i.m - 1), h = 0; h < a.length; h++)
        for (var c = 0; c < n.length; c++) {
          o = 0;
          for (var d = 0; d < a.length; d++)
            u = Tn(i.distance, n[c], a[h], i.attributes, "cmeans"), l = Tn(i.distance, n[c], a[d], i.attributes, "cmeans"), o += Math.pow(u / l, f);
          e[c][h] = 1 / o;
        }
    }, dh = function(e, r, a, n) {
      for (var i = new Array(a.k), s = 0; s < i.length; s++)
        i[s] = [];
      for (var o, u, l = 0; l < r.length; l++) {
        o = -1 / 0, u = -1;
        for (var f = 0; f < r[0].length; f++)
          r[l][f] > o && (o = r[l][f], u = f);
        i[u].push(e[l]);
      }
      for (var h = 0; h < i.length; h++)
        i[h] = n.collection(i[h]);
      return i;
    }, Vs = function(e) {
      var r = this.cy(), a = this.nodes(), n = mi(e), i, s, o, u, l;
      u = new Array(a.length);
      for (var f = 0; f < a.length; f++)
        u[f] = new Array(n.k);
      o = new Array(a.length);
      for (var h = 0; h < a.length; h++)
        o[h] = new Array(n.k);
      for (var c = 0; c < a.length; c++) {
        for (var d = 0, v = 0; v < n.k; v++)
          o[c][v] = Math.random(), d += o[c][v];
        for (var y = 0; y < n.k; y++)
          o[c][y] = o[c][y] / d;
      }
      s = new Array(n.k);
      for (var p = 0; p < n.k; p++)
        s[p] = new Array(n.attributes.length);
      l = new Array(a.length);
      for (var g = 0; g < a.length; g++)
        l[g] = new Array(n.k);
      for (var m = !0, b = 0; m && b < n.maxIterations; )
        m = !1, ch(s, a, o, l, n), vh(o, u, s, a, n), lh(o, u, n.sensitivityThreshold) || (m = !0), b++;
      return i = dh(a, o, n, r), {
        clusters: i,
        degreeOfMembership: o
      };
    }, gh = {
      kMeans: fh,
      kMedoids: hh,
      fuzzyCMeans: Vs,
      fcm: Vs
    }, ph = At({
      distance: "euclidean",
      // distance metric to compare nodes
      linkage: "min",
      // linkage criterion : how to determine the distance between clusters of nodes
      mode: "threshold",
      // mode:'threshold' => clusters must be threshold distance apart
      threshold: 1 / 0,
      // the distance threshold
      // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
      addDendrogram: !1,
      // whether to add the dendrogram to the graph for viz
      dendrogramDepth: 0,
      // depth at which dendrogram branches are merged into the returned clusters
      attributes: []
      // array of attr functions
    }), yh = {
      single: "min",
      complete: "max"
    }, mh = function(e) {
      var r = ph(e), a = yh[r.linkage];
      return a != null && (r.linkage = a), r;
    }, $s = function(e, r, a, n, i) {
      for (var s = 0, o = 1 / 0, u, l = i.attributes, f = function(C, F) {
        return xn(i.distance, l.length, function(G) {
          return l[G](C);
        }, function(G) {
          return l[G](F);
        }, C, F);
      }, h = 0; h < e.length; h++) {
        var c = e[h].key, d = a[c][n[c]];
        d < o && (s = c, o = d);
      }
      if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1)
        return !1;
      var v = r[s], y = r[n[s]], p;
      i.mode === "dendrogram" ? p = {
        left: v,
        right: y,
        key: v.key
      } : p = {
        value: v.value.concat(y.value),
        key: v.key
      }, e[v.index] = p, e.splice(y.index, 1), r[v.key] = p;
      for (var g = 0; g < e.length; g++) {
        var m = e[g];
        v.key === m.key ? u = 1 / 0 : i.linkage === "min" ? (u = a[v.key][m.key], a[v.key][m.key] > a[y.key][m.key] && (u = a[y.key][m.key])) : i.linkage === "max" ? (u = a[v.key][m.key], a[v.key][m.key] < a[y.key][m.key] && (u = a[y.key][m.key])) : i.linkage === "mean" ? u = (a[v.key][m.key] * v.size + a[y.key][m.key] * y.size) / (v.size + y.size) : i.mode === "dendrogram" ? u = f(m.value, v.value) : u = f(m.value[0], v.value[0]), a[v.key][m.key] = a[m.key][v.key] = u;
      }
      for (var b = 0; b < e.length; b++) {
        var E = e[b].key;
        if (n[E] === v.key || n[E] === y.key) {
          for (var I = E, A = 0; A < e.length; A++) {
            var x = e[A].key;
            a[E][x] < a[E][I] && (I = x);
          }
          n[E] = I;
        }
        e[b].index = b;
      }
      return v.key = y.key = v.index = y.index = null, !0;
    }, Cn = function t(e, r, a) {
      e && (e.value ? r.push(e.value) : (e.left && t(e.left, r), e.right && t(e.right, r)));
    }, bh = function t(e, r) {
      if (!e)
        return "";
      if (e.left && e.right) {
        var a = t(e.left, r), n = t(e.right, r), i = r.add({
          group: "nodes",
          data: {
            id: a + "," + n
          }
        });
        return r.add({
          group: "edges",
          data: {
            source: a,
            target: i.id()
          }
        }), r.add({
          group: "edges",
          data: {
            source: n,
            target: i.id()
          }
        }), i.id();
      } else if (e.value)
        return e.value.id();
    }, Eh = function t(e, r, a) {
      if (!e)
        return [];
      var n = [], i = [], s = [];
      return r === 0 ? (e.left && Cn(e.left, n), e.right && Cn(e.right, i), s = n.concat(i), [a.collection(s)]) : r === 1 ? e.value ? [a.collection(e.value)] : (e.left && Cn(e.left, n), e.right && Cn(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = t(e.left, r - 1, a)), e.right && (i = t(e.right, r - 1, a)), n.concat(i));
    }, _s = function(e) {
      for (var r = this.cy(), a = this.nodes(), n = mh(e), i = n.attributes, s = function(b, E) {
        return xn(n.distance, i.length, function(I) {
          return i[I](b);
        }, function(I) {
          return i[I](E);
        }, b, E);
      }, o = [], u = [], l = [], f = [], h = 0; h < a.length; h++) {
        var c = {
          value: n.mode === "dendrogram" ? a[h] : [a[h]],
          key: h,
          index: h
        };
        o[h] = c, f[h] = c, u[h] = [], l[h] = 0;
      }
      for (var d = 0; d < o.length; d++)
        for (var v = 0; v <= d; v++) {
          var y = void 0;
          n.mode === "dendrogram" ? y = d === v ? 1 / 0 : s(o[d].value, o[v].value) : y = d === v ? 1 / 0 : s(o[d].value[0], o[v].value[0]), u[d][v] = y, u[v][d] = y, y < u[d][l[d]] && (l[d] = v);
        }
      for (var p = $s(o, f, u, l, n); p; )
        p = $s(o, f, u, l, n);
      var g;
      return n.mode === "dendrogram" ? (g = Eh(o[0], n.dendrogramDepth, r), n.addDendrogram && bh(o[0], r)) : (g = new Array(o.length), o.forEach(function(m, b) {
        m.key = m.index = null, g[b] = r.collection(m.value);
      })), g;
    }, wh = {
      hierarchicalClustering: _s,
      hca: _s
    }, xh = At({
      distance: "euclidean",
      // distance metric to compare attributes between two nodes
      preference: "median",
      // suitability of a data point to serve as an exemplar
      damping: 0.8,
      // damping factor between [0.5, 1)
      maxIterations: 1e3,
      // max number of iterations to run
      minIterations: 100,
      // min number of iterations to run in order for clustering to stop
      attributes: [
        // functions to quantify the similarity between any two points
        // e.g. node => node.data('weight')
      ]
    }), Th = function(e) {
      var r = e.damping, a = e.preference;
      0.5 <= r && r < 1 || Tt("Damping must range on [0.5, 1).  Got: ".concat(r));
      var n = ["median", "mean", "min", "max"];
      return n.some(function(i) {
        return i === a;
      }) || R(a) || Tt("Preference must be one of [".concat(n.map(function(i) {
        return "'".concat(i, "'");
      }).join(", "), "] or a number.  Got: ").concat(a)), xh(e);
    }, Ch = function(e, r, a, n) {
      var i = function(o, u) {
        return n[u](o);
      };
      return -xn(e, n.length, function(s) {
        return i(r, s);
      }, function(s) {
        return i(a, s);
      }, r, a);
    }, Dh = function(e, r) {
      var a = null;
      return r === "median" ? a = Tf(e) : r === "mean" ? a = xf(e) : r === "min" ? a = Ef(e) : r === "max" ? a = wf(e) : a = r, a;
    }, Lh = function(e, r, a) {
      for (var n = [], i = 0; i < e; i++)
        r[i * e + i] + a[i * e + i] > 0 && n.push(i);
      return n;
    }, Us = function(e, r, a) {
      for (var n = [], i = 0; i < e; i++) {
        for (var s = -1, o = -1 / 0, u = 0; u < a.length; u++) {
          var l = a[u];
          r[i * e + l] > o && (s = l, o = r[i * e + l]);
        }
        s > 0 && n.push(s);
      }
      for (var f = 0; f < a.length; f++)
        n[a[f]] = a[f];
      return n;
    }, Sh = function(e, r, a) {
      for (var n = Us(e, r, a), i = 0; i < a.length; i++) {
        for (var s = [], o = 0; o < n.length; o++)
          n[o] === a[i] && s.push(o);
        for (var u = -1, l = -1 / 0, f = 0; f < s.length; f++) {
          for (var h = 0, c = 0; c < s.length; c++)
            h += r[s[c] * e + s[f]];
          h > l && (u = f, l = h);
        }
        a[i] = s[u];
      }
      return n = Us(e, r, a), n;
    }, Ys = function(e) {
      for (var r = this.cy(), a = this.nodes(), n = Th(e), i = {}, s = 0; s < a.length; s++)
        i[a[s].id()] = s;
      var o, u, l, f, h, c;
      o = a.length, u = o * o, l = new Array(u);
      for (var d = 0; d < u; d++)
        l[d] = -1 / 0;
      for (var v = 0; v < o; v++)
        for (var y = 0; y < o; y++)
          v !== y && (l[v * o + y] = Ch(n.distance, a[v], a[y], n.attributes));
      f = Dh(l, n.preference);
      for (var p = 0; p < o; p++)
        l[p * o + p] = f;
      h = new Array(u);
      for (var g = 0; g < u; g++)
        h[g] = 0;
      c = new Array(u);
      for (var m = 0; m < u; m++)
        c[m] = 0;
      for (var b = new Array(o), E = new Array(o), I = new Array(o), A = 0; A < o; A++)
        b[A] = 0, E[A] = 0, I[A] = 0;
      for (var x = new Array(o * n.minIterations), k = 0; k < x.length; k++)
        x[k] = 0;
      var C;
      for (C = 0; C < n.maxIterations; C++) {
        for (var F = 0; F < o; F++) {
          for (var G = -1 / 0, M = -1 / 0, X = -1, B = 0, re = 0; re < o; re++)
            b[re] = h[F * o + re], B = c[F * o + re] + l[F * o + re], B >= G ? (M = G, G = B, X = re) : B > M && (M = B);
          for (var K = 0; K < o; K++)
            h[F * o + K] = (1 - n.damping) * (l[F * o + K] - G) + n.damping * b[K];
          h[F * o + X] = (1 - n.damping) * (l[F * o + X] - M) + n.damping * b[X];
        }
        for (var q = 0; q < o; q++) {
          for (var ae = 0, ue = 0; ue < o; ue++)
            b[ue] = c[ue * o + q], E[ue] = Math.max(0, h[ue * o + q]), ae += E[ue];
          ae -= E[q], E[q] = h[q * o + q], ae += E[q];
          for (var be = 0; be < o; be++)
            c[be * o + q] = (1 - n.damping) * Math.min(0, ae - E[be]) + n.damping * b[be];
          c[q * o + q] = (1 - n.damping) * (ae - E[q]) + n.damping * b[q];
        }
        for (var ie = 0, ge = 0; ge < o; ge++) {
          var we = c[ge * o + ge] + h[ge * o + ge] > 0 ? 1 : 0;
          x[C % n.minIterations * o + ge] = we, ie += we;
        }
        if (ie > 0 && (C >= n.minIterations - 1 || C == n.maxIterations - 1)) {
          for (var De = 0, xe = 0; xe < o; xe++) {
            I[xe] = 0;
            for (var Le = 0; Le < n.minIterations; Le++)
              I[xe] += x[Le * o + xe];
            (I[xe] === 0 || I[xe] === n.minIterations) && De++;
          }
          if (De === o)
            break;
        }
      }
      for (var se = Lh(o, h, c), Te = Sh(o, l, se), Ae = {}, Se = 0; Se < se.length; Se++)
        Ae[se[Se]] = [];
      for (var Ne = 0; Ne < a.length; Ne++) {
        var Fe = i[a[Ne].id()], Xe = Te[Fe];
        Xe != null && Ae[Xe].push(a[Ne]);
      }
      for (var Ie = new Array(se.length), Re = 0; Re < se.length; Re++)
        Ie[Re] = r.collection(Ae[se[Re]]);
      return Ie;
    }, Ah = {
      affinityPropagation: Ys,
      ap: Ys
    }, Oh = At({
      root: void 0,
      directed: !1
    }), Nh = {
      hierholzer: function(e) {
        if (!S(e)) {
          var r = arguments;
          e = {
            root: r[0],
            directed: r[1]
          };
        }
        var a = Oh(e), n = a.root, i = a.directed, s = this, o = !1, u, l, f;
        n && (f = j(n) ? this.filter(n)[0].id() : n[0].id());
        var h = {}, c = {};
        i ? s.forEach(function(m) {
          var b = m.id();
          if (m.isNode()) {
            var E = m.indegree(!0), I = m.outdegree(!0), A = E - I, x = I - E;
            A == 1 ? u ? o = !0 : u = b : x == 1 ? l ? o = !0 : l = b : (x > 1 || A > 1) && (o = !0), h[b] = [], m.outgoers().forEach(function(k) {
              k.isEdge() && h[b].push(k.id());
            });
          } else
            c[b] = [void 0, m.target().id()];
        }) : s.forEach(function(m) {
          var b = m.id();
          if (m.isNode()) {
            var E = m.degree(!0);
            E % 2 && (u ? l ? o = !0 : l = b : u = b), h[b] = [], m.connectedEdges().forEach(function(I) {
              return h[b].push(I.id());
            });
          } else
            c[b] = [m.source().id(), m.target().id()];
        });
        var d = {
          found: !1,
          trail: void 0
        };
        if (o)
          return d;
        if (l && u)
          if (i) {
            if (f && l != f)
              return d;
            f = l;
          } else {
            if (f && l != f && u != f)
              return d;
            f || (f = l);
          }
        else
          f || (f = s[0].id());
        var v = function(b) {
          for (var E = b, I = [b], A, x, k; h[E].length; )
            A = h[E].shift(), x = c[A][0], k = c[A][1], E != k ? (h[k] = h[k].filter(function(C) {
              return C != A;
            }), E = k) : !i && E != x && (h[x] = h[x].filter(function(C) {
              return C != A;
            }), E = x), I.unshift(A), I.unshift(E);
          return I;
        }, y = [], p = [];
        for (p = v(f); p.length != 1; )
          h[p[0]].length == 0 ? (y.unshift(s.getElementById(p.shift())), y.unshift(s.getElementById(p.shift()))) : p = v(p.shift()).concat(p);
        y.unshift(s.getElementById(p.shift()));
        for (var g in h)
          if (h[g].length)
            return d;
        return d.found = !0, d.trail = this.spawn(y, !0), d;
      }
    }, Dn = function() {
      var e = this, r = {}, a = 0, n = 0, i = [], s = [], o = {}, u = function(c, d) {
        for (var v = s.length - 1, y = [], p = e.spawn(); s[v].x != c || s[v].y != d; )
          y.push(s.pop().edge), v--;
        y.push(s.pop().edge), y.forEach(function(g) {
          var m = g.connectedNodes().intersection(e);
          p.merge(g), m.forEach(function(b) {
            var E = b.id(), I = b.connectedEdges().intersection(e);
            p.merge(b), r[E].cutVertex ? p.merge(I.filter(function(A) {
              return A.isLoop();
            })) : p.merge(I);
          });
        }), i.push(p);
      }, l = function h(c, d, v) {
        c === v && (n += 1), r[d] = {
          id: a,
          low: a++,
          cutVertex: !1
        };
        var y = e.getElementById(d).connectedEdges().intersection(e);
        if (y.size() === 0)
          i.push(e.spawn(e.getElementById(d)));
        else {
          var p, g, m, b;
          y.forEach(function(E) {
            p = E.source().id(), g = E.target().id(), m = p === d ? g : p, m !== v && (b = E.id(), o[b] || (o[b] = !0, s.push({
              x: d,
              y: m,
              edge: E
            })), m in r ? r[d].low = Math.min(r[d].low, r[m].id) : (h(c, m, d), r[d].low = Math.min(r[d].low, r[m].low), r[d].id <= r[m].low && (r[d].cutVertex = !0, u(d, m))));
          });
        }
      };
      e.forEach(function(h) {
        if (h.isNode()) {
          var c = h.id();
          c in r || (n = 0, l(c, c), r[c].cutVertex = n > 1);
        }
      });
      var f = Object.keys(r).filter(function(h) {
        return r[h].cutVertex;
      }).map(function(h) {
        return e.getElementById(h);
      });
      return {
        cut: e.spawn(f),
        components: i
      };
    }, Mh = {
      hopcroftTarjanBiconnected: Dn,
      htbc: Dn,
      htb: Dn,
      hopcroftTarjanBiconnectedComponents: Dn
    }, Ln = function() {
      var e = this, r = {}, a = 0, n = [], i = [], s = e.spawn(e), o = function u(l) {
        i.push(l), r[l] = {
          index: a,
          low: a++,
          explored: !1
        };
        var f = e.getElementById(l).connectedEdges().intersection(e);
        if (f.forEach(function(y) {
          var p = y.target().id();
          p !== l && (p in r || u(p), r[p].explored || (r[l].low = Math.min(r[l].low, r[p].low)));
        }), r[l].index === r[l].low) {
          for (var h = e.spawn(); ; ) {
            var c = i.pop();
            if (h.merge(e.getElementById(c)), r[c].low = r[l].index, r[c].explored = !0, c === l)
              break;
          }
          var d = h.edgesWith(h), v = h.merge(d);
          n.push(v), s = s.difference(v);
        }
      };
      return e.forEach(function(u) {
        if (u.isNode()) {
          var l = u.id();
          l in r || o(l);
        }
      }), {
        cut: s,
        components: n
      };
    }, Ih = {
      tarjanStronglyConnected: Ln,
      tsc: Ln,
      tscc: Ln,
      tarjanStronglyConnectedComponents: Ln
    }, Hs = {};
    [Ra, lf, uf, hf, vf, gf, mf, Uf, aa, na, yi, rh, gh, wh, Ah, Nh, Mh, Ih].forEach(function(t) {
      He(Hs, t);
    });
    /*!
    Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
    Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
    Licensed under The MIT License (http://opensource.org/licenses/MIT)
    */
    var Xs = 0, qs = 1, Ws = 2, yr = function t(e) {
      if (!(this instanceof t))
        return new t(e);
      this.id = "Thenable/1.0.7", this.state = Xs, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
        then: this.then.bind(this)
      }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
    };
    yr.prototype = {
      /*  promise resolving methods  */
      fulfill: function(e) {
        return Ks(this, qs, "fulfillValue", e);
      },
      reject: function(e) {
        return Ks(this, Ws, "rejectReason", e);
      },
      /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
      then: function(e, r) {
        var a = this, n = new yr();
        return a.onFulfilled.push(Js(e, n, "fulfill")), a.onRejected.push(Js(r, n, "reject")), Zs(a), n.proxy;
      }
    };
    var Ks = function(e, r, a, n) {
      return e.state === Xs && (e.state = r, e[a] = n, Zs(e)), e;
    }, Zs = function(e) {
      e.state === qs ? Qs(e, "onFulfilled", e.fulfillValue) : e.state === Ws && Qs(e, "onRejected", e.rejectReason);
    }, Qs = function(e, r, a) {
      if (e[r].length !== 0) {
        var n = e[r];
        e[r] = [];
        var i = function() {
          for (var o = 0; o < n.length; o++)
            n[o](a);
        };
        typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
      }
    }, Js = function(e, r, a) {
      return function(n) {
        if (typeof e != "function")
          r[a].call(r, n);
        else {
          var i;
          try {
            i = e(n);
          } catch (s) {
            r.reject(s);
            return;
          }
          Rh(r, i);
        }
      };
    }, Rh = function t(e, r) {
      if (e === r || e.proxy === r) {
        e.reject(new TypeError("cannot resolve promise with itself"));
        return;
      }
      var a;
      if (ee(r) === "object" && r !== null || typeof r == "function")
        try {
          a = r.then;
        } catch (i) {
          e.reject(i);
          return;
        }
      if (typeof a == "function") {
        var n = !1;
        try {
          a.call(
            r,
            /*  resolvePromise  */
            /*  [Promises/A+ 2.3.3.3.1]  */
            function(i) {
              n || (n = !0, i === r ? e.reject(new TypeError("circular thenable chain")) : t(e, i));
            },
            /*  rejectPromise  */
            /*  [Promises/A+ 2.3.3.3.2]  */
            function(i) {
              n || (n = !0, e.reject(i));
            }
          );
        } catch (i) {
          n || e.reject(i);
        }
        return;
      }
      e.fulfill(r);
    };
    yr.all = function(t) {
      return new yr(function(e, r) {
        for (var a = new Array(t.length), n = 0, i = function(u, l) {
          a[u] = l, n++, n === t.length && e(a);
        }, s = 0; s < t.length; s++)
          (function(o) {
            var u = t[o], l = u != null && u.then != null;
            if (l)
              u.then(function(h) {
                i(o, h);
              }, function(h) {
                r(h);
              });
            else {
              var f = u;
              i(o, f);
            }
          })(s);
      });
    }, yr.resolve = function(t) {
      return new yr(function(e, r) {
        e(t);
      });
    }, yr.reject = function(t) {
      return new yr(function(e, r) {
        r(t);
      });
    };
    var sa = typeof Promise < "u" ? Promise : yr, Ei = function(e, r, a) {
      var n = Ye(e), i = !n, s = this._private = He({
        duration: 1e3
      }, r, a);
      if (s.target = e, s.style = s.style || s.css, s.started = !1, s.playing = !1, s.hooked = !1, s.applying = !1, s.progress = 0, s.completes = [], s.frames = [], s.complete && Y(s.complete) && s.completes.push(s.complete), i) {
        var o = e.position();
        s.startPosition = s.startPosition || {
          x: o.x,
          y: o.y
        }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
      }
      if (n) {
        var u = e.pan();
        s.startPan = {
          x: u.x,
          y: u.y
        }, s.startZoom = e.zoom();
      }
      this.length = 1, this[0] = this;
    }, zr = Ei.prototype;
    He(zr, {
      instanceString: function() {
        return "animation";
      },
      hook: function() {
        var e = this._private;
        if (!e.hooked) {
          var r, a = e.target._private.animation;
          e.queue ? r = a.queue : r = a.current, r.push(this), pe(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
        }
        return this;
      },
      play: function() {
        var e = this._private;
        return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
      },
      playing: function() {
        return this._private.playing;
      },
      apply: function() {
        var e = this._private;
        return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
      },
      applying: function() {
        return this._private.applying;
      },
      pause: function() {
        var e = this._private;
        return e.playing = !1, e.started = !1, this;
      },
      stop: function() {
        var e = this._private;
        return e.playing = !1, e.started = !1, e.stopped = !0, this;
      },
      rewind: function() {
        return this.progress(0);
      },
      fastforward: function() {
        return this.progress(1);
      },
      time: function(e) {
        var r = this._private;
        return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
      },
      progress: function(e) {
        var r = this._private, a = r.playing;
        return e === void 0 ? r.progress : (a && this.pause(), r.progress = e, r.started = !1, a && this.play(), this);
      },
      completed: function() {
        return this._private.progress === 1;
      },
      reverse: function() {
        var e = this._private, r = e.playing;
        r && this.pause(), e.progress = 1 - e.progress, e.started = !1;
        var a = function(l, f) {
          var h = e[l];
          h != null && (e[l] = e[f], e[f] = h);
        };
        if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style)
          for (var n = 0; n < e.style.length; n++) {
            var i = e.style[n], s = i.name, o = e.startStyle[s];
            e.startStyle[s] = i, e.style[n] = o;
          }
        return r && this.play(), this;
      },
      promise: function(e) {
        var r = this._private, a;
        switch (e) {
          case "frame":
            a = r.frames;
            break;
          default:
          case "complete":
          case "completed":
            a = r.completes;
        }
        return new sa(function(n, i) {
          a.push(function() {
            n();
          });
        });
      }
    }), zr.complete = zr.completed, zr.run = zr.play, zr.running = zr.playing;
    var kh = {
      animated: function() {
        return function() {
          var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
          if (!i.styleEnabled())
            return !1;
          var s = n[0];
          if (s)
            return s._private.animation.current.length > 0;
        };
      },
      // animated
      clearQueue: function() {
        return function() {
          var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
          if (!i.styleEnabled())
            return this;
          for (var s = 0; s < n.length; s++) {
            var o = n[s];
            o._private.animation.queue = [];
          }
          return this;
        };
      },
      // clearQueue
      delay: function() {
        return function(r, a) {
          var n = this._private.cy || this;
          return n.styleEnabled() ? this.animate({
            delay: r,
            duration: r,
            complete: a
          }) : this;
        };
      },
      // delay
      delayAnimation: function() {
        return function(r, a) {
          var n = this._private.cy || this;
          return n.styleEnabled() ? this.animation({
            delay: r,
            duration: r,
            complete: a
          }) : this;
        };
      },
      // delay
      animation: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this, u = !i, l = !u;
          if (!o.styleEnabled())
            return this;
          var f = o.style();
          r = He({}, r, a);
          var h = Object.keys(r).length === 0;
          if (h)
            return new Ei(s[0], r);
          switch (r.duration === void 0 && (r.duration = 400), r.duration) {
            case "slow":
              r.duration = 600;
              break;
            case "fast":
              r.duration = 200;
              break;
          }
          if (l && (r.style = f.getPropsList(r.style || r.css), r.css = void 0), l && r.renderedPosition != null) {
            var c = r.renderedPosition, d = o.pan(), v = o.zoom();
            r.position = ws(c, v, d);
          }
          if (u && r.panBy != null) {
            var y = r.panBy, p = o.pan();
            r.pan = {
              x: p.x + y.x,
              y: p.y + y.y
            };
          }
          var g = r.center || r.centre;
          if (u && g != null) {
            var m = o.getCenterPan(g.eles, r.zoom);
            m != null && (r.pan = m);
          }
          if (u && r.fit != null) {
            var b = r.fit, E = o.getFitViewport(b.eles || b.boundingBox, b.padding);
            E != null && (r.pan = E.pan, r.zoom = E.zoom);
          }
          if (u && S(r.zoom)) {
            var I = o.getZoomedViewport(r.zoom);
            I != null ? (I.zoomed && (r.zoom = I.zoom), I.panned && (r.pan = I.pan)) : r.zoom = null;
          }
          return new Ei(s[0], r);
        };
      },
      // animate
      animate: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
          if (!o.styleEnabled())
            return this;
          a && (r = He({}, r, a));
          for (var u = 0; u < s.length; u++) {
            var l = s[u], f = l.animated() && (r.queue === void 0 || r.queue), h = l.animation(r, f ? {
              queue: !0
            } : void 0);
            h.play();
          }
          return this;
        };
      },
      // animate
      stop: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
          if (!o.styleEnabled())
            return this;
          for (var u = 0; u < s.length; u++) {
            for (var l = s[u], f = l._private, h = f.animation.current, c = 0; c < h.length; c++) {
              var d = h[c], v = d._private;
              a && (v.duration = 0);
            }
            r && (f.animation.queue = []), a || (f.animation.current = []);
          }
          return o.notify("draw"), this;
        };
      }
      // stop
    }, Ph = Array.isArray, Sn = Ph, Bh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fh = /^\w*$/;
    function Gh(t, e) {
      if (Sn(t))
        return !1;
      var r = typeof t;
      return r == "number" || r == "symbol" || r == "boolean" || t == null || Oa(t) ? !0 : Fh.test(t) || !Bh.test(t) || e != null && t in Object(e);
    }
    var zh = Gh, Vh = "[object AsyncFunction]", $h = "[object Function]", _h = "[object GeneratorFunction]", Uh = "[object Proxy]";
    function Yh(t) {
      if (!kr(t))
        return !1;
      var e = os(t);
      return e == $h || e == _h || e == Vh || e == Uh;
    }
    var Hh = Yh, Xh = un["__core-js_shared__"], wi = Xh, js = function() {
      var t = /[^.]+$/.exec(wi && wi.keys && wi.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }();
    function qh(t) {
      return !!js && js in t;
    }
    var Wh = qh, Kh = Function.prototype, Zh = Kh.toString;
    function Qh(t) {
      if (t != null) {
        try {
          return Zh.call(t);
        } catch {
        }
        try {
          return t + "";
        } catch {
        }
      }
      return "";
    }
    var Jh = Qh, jh = /[\\^$.*+?()[\]{}|]/g, ec = /^\[object .+?Constructor\]$/, tc = Function.prototype, rc = Object.prototype, ac = tc.toString, nc = rc.hasOwnProperty, ic = RegExp(
      "^" + ac.call(nc).replace(jh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function sc(t) {
      if (!kr(t) || Wh(t))
        return !1;
      var e = Hh(t) ? ic : ec;
      return e.test(Jh(t));
    }
    var oc = sc;
    function lc(t, e) {
      return t == null ? void 0 : t[e];
    }
    var uc = lc;
    function fc(t, e) {
      var r = uc(t, e);
      return oc(r) ? r : void 0;
    }
    var xi = fc, hc = xi(Object, "create"), Va = hc;
    function cc() {
      this.__data__ = Va ? Va(null) : {}, this.size = 0;
    }
    var vc = cc;
    function dc(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    }
    var gc = dc, pc = "__lodash_hash_undefined__", yc = Object.prototype, mc = yc.hasOwnProperty;
    function bc(t) {
      var e = this.__data__;
      if (Va) {
        var r = e[t];
        return r === pc ? void 0 : r;
      }
      return mc.call(e, t) ? e[t] : void 0;
    }
    var Ec = bc, wc = Object.prototype, xc = wc.hasOwnProperty;
    function Tc(t) {
      var e = this.__data__;
      return Va ? e[t] !== void 0 : xc.call(e, t);
    }
    var Cc = Tc, Dc = "__lodash_hash_undefined__";
    function Lc(t, e) {
      var r = this.__data__;
      return this.size += this.has(t) ? 0 : 1, r[t] = Va && e === void 0 ? Dc : e, this;
    }
    var Sc = Lc;
    function oa(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    oa.prototype.clear = vc, oa.prototype.delete = gc, oa.prototype.get = Ec, oa.prototype.has = Cc, oa.prototype.set = Sc;
    var eo = oa;
    function Ac() {
      this.__data__ = [], this.size = 0;
    }
    var Oc = Ac;
    function Nc(t, e) {
      return t === e || t !== t && e !== e;
    }
    var to = Nc;
    function Mc(t, e) {
      for (var r = t.length; r--; )
        if (to(t[r][0], e))
          return r;
      return -1;
    }
    var An = Mc, Ic = Array.prototype, Rc = Ic.splice;
    function kc(t) {
      var e = this.__data__, r = An(e, t);
      if (r < 0)
        return !1;
      var a = e.length - 1;
      return r == a ? e.pop() : Rc.call(e, r, 1), --this.size, !0;
    }
    var Pc = kc;
    function Bc(t) {
      var e = this.__data__, r = An(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    var Fc = Bc;
    function Gc(t) {
      return An(this.__data__, t) > -1;
    }
    var zc = Gc;
    function Vc(t, e) {
      var r = this.__data__, a = An(r, t);
      return a < 0 ? (++this.size, r.push([t, e])) : r[a][1] = e, this;
    }
    var $c = Vc;
    function la(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    la.prototype.clear = Oc, la.prototype.delete = Pc, la.prototype.get = Fc, la.prototype.has = zc, la.prototype.set = $c;
    var _c = la, Uc = xi(un, "Map"), Yc = Uc;
    function Hc() {
      this.size = 0, this.__data__ = {
        hash: new eo(),
        map: new (Yc || _c)(),
        string: new eo()
      };
    }
    var Xc = Hc;
    function qc(t) {
      var e = typeof t;
      return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
    }
    var Wc = qc;
    function Kc(t, e) {
      var r = t.__data__;
      return Wc(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
    }
    var On = Kc;
    function Zc(t) {
      var e = On(this, t).delete(t);
      return this.size -= e ? 1 : 0, e;
    }
    var Qc = Zc;
    function Jc(t) {
      return On(this, t).get(t);
    }
    var jc = Jc;
    function ev(t) {
      return On(this, t).has(t);
    }
    var tv = ev;
    function rv(t, e) {
      var r = On(this, t), a = r.size;
      return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
    }
    var av = rv;
    function ua(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    ua.prototype.clear = Xc, ua.prototype.delete = Qc, ua.prototype.get = jc, ua.prototype.has = tv, ua.prototype.set = av;
    var ro = ua, nv = "Expected a function";
    function Ti(t, e) {
      if (typeof t != "function" || e != null && typeof e != "function")
        throw new TypeError(nv);
      var r = function() {
        var a = arguments, n = e ? e.apply(this, a) : a[0], i = r.cache;
        if (i.has(n))
          return i.get(n);
        var s = t.apply(this, a);
        return r.cache = i.set(n, s) || i, s;
      };
      return r.cache = new (Ti.Cache || ro)(), r;
    }
    Ti.Cache = ro;
    var iv = Ti, sv = 500;
    function ov(t) {
      var e = iv(t, function(a) {
        return r.size === sv && r.clear(), a;
      }), r = e.cache;
      return e;
    }
    var lv = ov, uv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fv = /\\(\\)?/g, hv = lv(function(t) {
      var e = [];
      return t.charCodeAt(0) === 46 && e.push(""), t.replace(uv, function(r, a, n, i) {
        e.push(n ? i.replace(fv, "$1") : a || r);
      }), e;
    }), ao = hv;
    function cv(t, e) {
      for (var r = -1, a = t == null ? 0 : t.length, n = Array(a); ++r < a; )
        n[r] = e(t[r], r, t);
      return n;
    }
    var no = cv, vv = 1 / 0, io = Qr ? Qr.prototype : void 0, so = io ? io.toString : void 0;
    function oo(t) {
      if (typeof t == "string")
        return t;
      if (Sn(t))
        return no(t, oo) + "";
      if (Oa(t))
        return so ? so.call(t) : "";
      var e = t + "";
      return e == "0" && 1 / t == -vv ? "-0" : e;
    }
    var dv = oo;
    function gv(t) {
      return t == null ? "" : dv(t);
    }
    var lo = gv;
    function pv(t, e) {
      return Sn(t) ? t : zh(t, e) ? [t] : ao(lo(t));
    }
    var uo = pv, yv = 1 / 0;
    function mv(t) {
      if (typeof t == "string" || Oa(t))
        return t;
      var e = t + "";
      return e == "0" && 1 / t == -yv ? "-0" : e;
    }
    var Ci = mv;
    function bv(t, e) {
      e = uo(e, t);
      for (var r = 0, a = e.length; t != null && r < a; )
        t = t[Ci(e[r++])];
      return r && r == a ? t : void 0;
    }
    var Ev = bv;
    function wv(t, e, r) {
      var a = t == null ? void 0 : Ev(t, e);
      return a === void 0 ? r : a;
    }
    var xv = wv, Tv = function() {
      try {
        var t = xi(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {
      }
    }(), fo = Tv;
    function Cv(t, e, r) {
      e == "__proto__" && fo ? fo(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : t[e] = r;
    }
    var Dv = Cv, Lv = Object.prototype, Sv = Lv.hasOwnProperty;
    function Av(t, e, r) {
      var a = t[e];
      (!(Sv.call(t, e) && to(a, r)) || r === void 0 && !(e in t)) && Dv(t, e, r);
    }
    var Ov = Av, Nv = 9007199254740991, Mv = /^(?:0|[1-9]\d*)$/;
    function Iv(t, e) {
      var r = typeof t;
      return e = e ?? Nv, !!e && (r == "number" || r != "symbol" && Mv.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }
    var Rv = Iv;
    function kv(t, e, r, a) {
      if (!kr(t))
        return t;
      e = uo(e, t);
      for (var n = -1, i = e.length, s = i - 1, o = t; o != null && ++n < i; ) {
        var u = Ci(e[n]), l = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return t;
        if (n != s) {
          var f = o[u];
          l = a ? a(f, u, o) : void 0, l === void 0 && (l = kr(f) ? f : Rv(e[n + 1]) ? [] : {});
        }
        Ov(o, u, l), o = o[u];
      }
      return t;
    }
    var Pv = kv;
    function Bv(t, e, r) {
      return t == null ? t : Pv(t, e, r);
    }
    var Fv = Bv;
    function Gv(t, e) {
      var r = -1, a = t.length;
      for (e || (e = Array(a)); ++r < a; )
        e[r] = t[r];
      return e;
    }
    var zv = Gv;
    function Vv(t) {
      return Sn(t) ? no(t, Ci) : Oa(t) ? [t] : zv(ao(lo(t)));
    }
    var $v = Vv, _v = {
      // access data field
      data: function(e) {
        var r = {
          field: "data",
          bindingEvent: "data",
          allowBinding: !1,
          allowSetting: !1,
          allowGetting: !1,
          settingEvent: "data",
          settingTriggersEvent: !1,
          triggerFnName: "trigger",
          immutableKeys: {},
          // key => true if immutable
          updateStyle: !1,
          beforeGet: function(n) {
          },
          beforeSet: function(n, i) {
          },
          onSet: function(n) {
          },
          canSet: function(n) {
            return !0;
          }
        };
        return e = He({}, r, e), function(n, i) {
          var s = e, o = this, u = o.length !== void 0, l = u ? o : [o], f = u ? o[0] : o;
          if (j(n)) {
            var h = n.indexOf(".") !== -1, c = h && $v(n);
            if (s.allowGetting && i === void 0) {
              var d;
              return f && (s.beforeGet(f), c && f._private[s.field][n] === void 0 ? d = xv(f._private[s.field], c) : d = f._private[s.field][n]), d;
            } else if (s.allowSetting && i !== void 0) {
              var v = !s.immutableKeys[n];
              if (v) {
                var y = T({}, n, i);
                s.beforeSet(o, y);
                for (var p = 0, g = l.length; p < g; p++) {
                  var m = l[p];
                  s.canSet(m) && (c && f._private[s.field][n] === void 0 ? Fv(m._private[s.field], c, i) : m._private[s.field][n] = i);
                }
                s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
              }
            }
          } else if (s.allowSetting && S(n)) {
            var b = n, E, I, A = Object.keys(b);
            s.beforeSet(o, b);
            for (var x = 0; x < A.length; x++) {
              E = A[x], I = b[E];
              var k = !s.immutableKeys[E];
              if (k)
                for (var C = 0; C < l.length; C++) {
                  var F = l[C];
                  s.canSet(F) && (F._private[s.field][E] = I);
                }
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          } else if (s.allowBinding && Y(n)) {
            var G = n;
            o.on(s.bindingEvent, G);
          } else if (s.allowGetting && n === void 0) {
            var M;
            return f && (s.beforeGet(f), M = f._private[s.field]), M;
          }
          return o;
        };
      },
      // data
      // remove data field
      removeData: function(e) {
        var r = {
          field: "data",
          event: "data",
          triggerFnName: "trigger",
          triggerEvent: !1,
          immutableKeys: {}
          // key => true if immutable
        };
        return e = He({}, r, e), function(n) {
          var i = e, s = this, o = s.length !== void 0, u = o ? s : [s];
          if (j(n)) {
            for (var l = n.split(/\s+/), f = l.length, h = 0; h < f; h++) {
              var c = l[h];
              if (!ke(c)) {
                var d = !i.immutableKeys[c];
                if (d)
                  for (var v = 0, y = u.length; v < y; v++)
                    u[v]._private[i.field][c] = void 0;
              }
            }
            i.triggerEvent && s[i.triggerFnName](i.event);
          } else if (n === void 0) {
            for (var p = 0, g = u.length; p < g; p++)
              for (var m = u[p]._private[i.field], b = Object.keys(m), E = 0; E < b.length; E++) {
                var I = b[E], A = !i.immutableKeys[I];
                A && (m[I] = void 0);
              }
            i.triggerEvent && s[i.triggerFnName](i.event);
          }
          return s;
        };
      }
      // removeData
    }, Uv = {
      eventAliasesOn: function(e) {
        var r = e;
        r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(a, n) {
          var i = this, s = Array.prototype.slice.call(arguments, 0);
          return new sa(function(o, u) {
            var l = function(d) {
              i.off.apply(i, h), o(d);
            }, f = s.concat([l]), h = f.concat([]);
            i.on.apply(i, f);
          });
        };
      }
    }, vt = {};
    [kh, _v, Uv].forEach(function(t) {
      He(vt, t);
    });
    var Yv = {
      animate: vt.animate(),
      animation: vt.animation(),
      animated: vt.animated(),
      clearQueue: vt.clearQueue(),
      delay: vt.delay(),
      delayAnimation: vt.delayAnimation(),
      stop: vt.stop()
    }, Nn = {
      classes: function(e) {
        var r = this;
        if (e === void 0) {
          var a = [];
          return r[0]._private.classes.forEach(function(v) {
            return a.push(v);
          }), a;
        } else
          te(e) || (e = (e || "").match(/\S+/g) || []);
        for (var n = [], i = new jr(e), s = 0; s < r.length; s++) {
          for (var o = r[s], u = o._private, l = u.classes, f = !1, h = 0; h < e.length; h++) {
            var c = e[h], d = l.has(c);
            if (!d) {
              f = !0;
              break;
            }
          }
          f || (f = l.size !== e.length), f && (u.classes = i, n.push(o));
        }
        return n.length > 0 && this.spawn(n).updateStyle().emit("class"), r;
      },
      addClass: function(e) {
        return this.toggleClass(e, !0);
      },
      hasClass: function(e) {
        var r = this[0];
        return r != null && r._private.classes.has(e);
      },
      toggleClass: function(e, r) {
        te(e) || (e = e.match(/\S+/g) || []);
        for (var a = this, n = r === void 0, i = [], s = 0, o = a.length; s < o; s++)
          for (var u = a[s], l = u._private.classes, f = !1, h = 0; h < e.length; h++) {
            var c = e[h], d = l.has(c), v = !1;
            r || n && !d ? (l.add(c), v = !0) : (!r || n && d) && (l.delete(c), v = !0), !f && v && (i.push(u), f = !0);
          }
        return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
      },
      removeClass: function(e) {
        return this.toggleClass(e, !1);
      },
      flashClass: function(e, r) {
        var a = this;
        if (r == null)
          r = 250;
        else if (r === 0)
          return a;
        return a.addClass(e), setTimeout(function() {
          a.removeClass(e);
        }, r), a;
      }
    };
    Nn.className = Nn.classNames = Nn.classes;
    var st = {
      metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
      // chars we need to escape in let names, etc
      comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
      // binary comparison op (used in data selectors)
      boolOp: "\\?|\\!|\\^",
      // boolean (unary) operators (used in data selectors)
      string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
      // string literals (used in data selectors) -- doublequotes | singlequotes
      number: gt,
      // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
      meta: "degree|indegree|outdegree",
      // allowed metadata fields (i.e. allowed functions to use from Collection)
      separator: "\\s*,\\s*",
      // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
      descendant: "\\s+",
      child: "\\s+>\\s+",
      subject: "\\$",
      group: "node|edge|\\*",
      directedEdge: "\\s+->\\s+",
      undirectedEdge: "\\s+<->\\s+"
    };
    st.variable = "(?:[\\w-.]|(?:\\\\" + st.metaChar + "))+", st.className = "(?:[\\w-]|(?:\\\\" + st.metaChar + "))+", st.value = st.string + "|" + st.number, st.id = st.variable, function() {
      var t, e, r;
      for (t = st.comparatorOp.split("|"), r = 0; r < t.length; r++)
        e = t[r], st.comparatorOp += "|@" + e;
      for (t = st.comparatorOp.split("|"), r = 0; r < t.length; r++)
        e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (st.comparatorOp += "|\\!" + e);
    }();
    var pt = function() {
      return {
        checks: []
      };
    }, Pe = {
      /** E.g. node */
      GROUP: 0,
      /** A collection of elements */
      COLLECTION: 1,
      /** A filter(ele) function */
      FILTER: 2,
      /** E.g. [foo > 1] */
      DATA_COMPARE: 3,
      /** E.g. [foo] */
      DATA_EXIST: 4,
      /** E.g. [?foo] */
      DATA_BOOL: 5,
      /** E.g. [[degree > 2]] */
      META_COMPARE: 6,
      /** E.g. :selected */
      STATE: 7,
      /** E.g. #foo */
      ID: 8,
      /** E.g. .foo */
      CLASS: 9,
      /** E.g. #foo <-> #bar */
      UNDIRECTED_EDGE: 10,
      /** E.g. #foo -> #bar */
      DIRECTED_EDGE: 11,
      /** E.g. $#foo -> #bar */
      NODE_SOURCE: 12,
      /** E.g. #foo -> $#bar */
      NODE_TARGET: 13,
      /** E.g. $#foo <-> #bar */
      NODE_NEIGHBOR: 14,
      /** E.g. #foo > #bar */
      CHILD: 15,
      /** E.g. #foo #bar */
      DESCENDANT: 16,
      /** E.g. $#foo > #bar */
      PARENT: 17,
      /** E.g. $#foo #bar */
      ANCESTOR: 18,
      /** E.g. #foo > $bar > #baz */
      COMPOUND_SPLIT: 19,
      /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
      TRUE: 20
    }, Di = [{
      selector: ":selected",
      matches: function(e) {
        return e.selected();
      }
    }, {
      selector: ":unselected",
      matches: function(e) {
        return !e.selected();
      }
    }, {
      selector: ":selectable",
      matches: function(e) {
        return e.selectable();
      }
    }, {
      selector: ":unselectable",
      matches: function(e) {
        return !e.selectable();
      }
    }, {
      selector: ":locked",
      matches: function(e) {
        return e.locked();
      }
    }, {
      selector: ":unlocked",
      matches: function(e) {
        return !e.locked();
      }
    }, {
      selector: ":visible",
      matches: function(e) {
        return e.visible();
      }
    }, {
      selector: ":hidden",
      matches: function(e) {
        return !e.visible();
      }
    }, {
      selector: ":transparent",
      matches: function(e) {
        return e.transparent();
      }
    }, {
      selector: ":grabbed",
      matches: function(e) {
        return e.grabbed();
      }
    }, {
      selector: ":free",
      matches: function(e) {
        return !e.grabbed();
      }
    }, {
      selector: ":removed",
      matches: function(e) {
        return e.removed();
      }
    }, {
      selector: ":inside",
      matches: function(e) {
        return !e.removed();
      }
    }, {
      selector: ":grabbable",
      matches: function(e) {
        return e.grabbable();
      }
    }, {
      selector: ":ungrabbable",
      matches: function(e) {
        return !e.grabbable();
      }
    }, {
      selector: ":animated",
      matches: function(e) {
        return e.animated();
      }
    }, {
      selector: ":unanimated",
      matches: function(e) {
        return !e.animated();
      }
    }, {
      selector: ":parent",
      matches: function(e) {
        return e.isParent();
      }
    }, {
      selector: ":childless",
      matches: function(e) {
        return e.isChildless();
      }
    }, {
      selector: ":child",
      matches: function(e) {
        return e.isChild();
      }
    }, {
      selector: ":orphan",
      matches: function(e) {
        return e.isOrphan();
      }
    }, {
      selector: ":nonorphan",
      matches: function(e) {
        return e.isChild();
      }
    }, {
      selector: ":compound",
      matches: function(e) {
        return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
      }
    }, {
      selector: ":loop",
      matches: function(e) {
        return e.isLoop();
      }
    }, {
      selector: ":simple",
      matches: function(e) {
        return e.isSimple();
      }
    }, {
      selector: ":active",
      matches: function(e) {
        return e.active();
      }
    }, {
      selector: ":inactive",
      matches: function(e) {
        return !e.active();
      }
    }, {
      selector: ":backgrounding",
      matches: function(e) {
        return e.backgrounding();
      }
    }, {
      selector: ":nonbackgrounding",
      matches: function(e) {
        return !e.backgrounding();
      }
    }].sort(function(t, e) {
      return tu(t.selector, e.selector);
    }), Hv = function() {
      for (var t = {}, e, r = 0; r < Di.length; r++)
        e = Di[r], t[e.selector] = e.matches;
      return t;
    }(), Xv = function(e, r) {
      return Hv[e](r);
    }, qv = "(" + Di.map(function(t) {
      return t.selector;
    }).join("|") + ")", fa = function(e) {
      return e.replace(new RegExp("\\\\(" + st.metaChar + ")", "g"), function(r, a) {
        return a;
      });
    }, Dr = function(e, r, a) {
      e[e.length - 1] = a;
    }, Li = [{
      name: "group",
      // just used for identifying when debugging
      query: !0,
      regex: "(" + st.group + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Pe.GROUP,
          value: i === "*" ? i : i + "s"
        });
      }
    }, {
      name: "state",
      query: !0,
      regex: qv,
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Pe.STATE,
          value: i
        });
      }
    }, {
      name: "id",
      query: !0,
      regex: "\\#(" + st.id + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Pe.ID,
          value: fa(i)
        });
      }
    }, {
      name: "className",
      query: !0,
      regex: "\\.(" + st.className + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Pe.CLASS,
          value: fa(i)
        });
      }
    }, {
      name: "dataExists",
      query: !0,
      regex: "\\[\\s*(" + st.variable + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Pe.DATA_EXIST,
          field: fa(i)
        });
      }
    }, {
      name: "dataCompare",
      query: !0,
      regex: "\\[\\s*(" + st.variable + ")\\s*(" + st.comparatorOp + ")\\s*(" + st.value + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 3), i = n[0], s = n[1], o = n[2], u = new RegExp("^" + st.string + "$").exec(o) != null;
        u ? o = o.substring(1, o.length - 1) : o = parseFloat(o), r.checks.push({
          type: Pe.DATA_COMPARE,
          field: fa(i),
          operator: s,
          value: o
        });
      }
    }, {
      name: "dataBool",
      query: !0,
      regex: "\\[\\s*(" + st.boolOp + ")\\s*(" + st.variable + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 2), i = n[0], s = n[1];
        r.checks.push({
          type: Pe.DATA_BOOL,
          field: fa(s),
          operator: i
        });
      }
    }, {
      name: "metaCompare",
      query: !0,
      regex: "\\[\\[\\s*(" + st.meta + ")\\s*(" + st.comparatorOp + ")\\s*(" + st.number + ")\\s*\\]\\]",
      populate: function(e, r, a) {
        var n = w(a, 3), i = n[0], s = n[1], o = n[2];
        r.checks.push({
          type: Pe.META_COMPARE,
          field: fa(i),
          operator: s,
          value: parseFloat(o)
        });
      }
    }, {
      name: "nextQuery",
      separator: !0,
      regex: st.separator,
      populate: function(e, r) {
        var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
        a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
        var o = e[e.length++] = pt();
        return o;
      }
    }, {
      name: "directedEdge",
      separator: !0,
      regex: st.directedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = pt(), n = r, i = pt();
          return a.checks.push({
            type: Pe.DIRECTED_EDGE,
            source: n,
            target: i
          }), Dr(e, r, a), e.edgeCount++, i;
        } else {
          var s = pt(), o = r, u = pt();
          return s.checks.push({
            type: Pe.NODE_SOURCE,
            source: o,
            target: u
          }), Dr(e, r, s), e.edgeCount++, u;
        }
      }
    }, {
      name: "undirectedEdge",
      separator: !0,
      regex: st.undirectedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = pt(), n = r, i = pt();
          return a.checks.push({
            type: Pe.UNDIRECTED_EDGE,
            nodes: [n, i]
          }), Dr(e, r, a), e.edgeCount++, i;
        } else {
          var s = pt(), o = r, u = pt();
          return s.checks.push({
            type: Pe.NODE_NEIGHBOR,
            node: o,
            neighbor: u
          }), Dr(e, r, s), u;
        }
      }
    }, {
      name: "child",
      separator: !0,
      regex: st.child,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = pt(), n = pt(), i = e[e.length - 1];
          return a.checks.push({
            type: Pe.CHILD,
            parent: i,
            child: n
          }), Dr(e, r, a), e.compoundCount++, n;
        } else if (e.currentSubject === r) {
          var s = pt(), o = e[e.length - 1], u = pt(), l = pt(), f = pt(), h = pt();
          return s.checks.push({
            type: Pe.COMPOUND_SPLIT,
            left: o,
            right: u,
            subject: l
          }), l.checks = r.checks, r.checks = [{
            type: Pe.TRUE
          }], h.checks.push({
            type: Pe.TRUE
          }), u.checks.push({
            type: Pe.PARENT,
            // type is swapped on right side queries
            parent: h,
            child: f
            // empty for now
          }), Dr(e, o, s), e.currentSubject = l, e.compoundCount++, f;
        } else {
          var c = pt(), d = pt(), v = [{
            type: Pe.PARENT,
            parent: c,
            child: d
          }];
          return c.checks = r.checks, r.checks = v, e.compoundCount++, d;
        }
      }
    }, {
      name: "descendant",
      separator: !0,
      regex: st.descendant,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = pt(), n = pt(), i = e[e.length - 1];
          return a.checks.push({
            type: Pe.DESCENDANT,
            ancestor: i,
            descendant: n
          }), Dr(e, r, a), e.compoundCount++, n;
        } else if (e.currentSubject === r) {
          var s = pt(), o = e[e.length - 1], u = pt(), l = pt(), f = pt(), h = pt();
          return s.checks.push({
            type: Pe.COMPOUND_SPLIT,
            left: o,
            right: u,
            subject: l
          }), l.checks = r.checks, r.checks = [{
            type: Pe.TRUE
          }], h.checks.push({
            type: Pe.TRUE
          }), u.checks.push({
            type: Pe.ANCESTOR,
            // type is swapped on right side queries
            ancestor: h,
            descendant: f
            // empty for now
          }), Dr(e, o, s), e.currentSubject = l, e.compoundCount++, f;
        } else {
          var c = pt(), d = pt(), v = [{
            type: Pe.ANCESTOR,
            ancestor: c,
            descendant: d
          }];
          return c.checks = r.checks, r.checks = v, e.compoundCount++, d;
        }
      }
    }, {
      name: "subject",
      modifier: !0,
      regex: st.subject,
      populate: function(e, r) {
        if (e.currentSubject != null && e.currentSubject !== r)
          return ct("Redefinition of subject in selector `" + e.toString() + "`"), !1;
        e.currentSubject = r;
        var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
        i === Pe.DIRECTED_EDGE ? n.type = Pe.NODE_TARGET : i === Pe.UNDIRECTED_EDGE && (n.type = Pe.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
      }
    }];
    Li.forEach(function(t) {
      return t.regexObj = new RegExp("^" + t.regex);
    });
    var Wv = function(e) {
      for (var r, a, n, i = 0; i < Li.length; i++) {
        var s = Li[i], o = s.name, u = e.match(s.regexObj);
        if (u != null) {
          a = u, r = s, n = o;
          var l = u[0];
          e = e.substring(l.length);
          break;
        }
      }
      return {
        expr: r,
        match: a,
        name: n,
        remaining: e
      };
    }, Kv = function(e) {
      var r = e.match(/^\s+/);
      if (r) {
        var a = r[0];
        e = e.substring(a.length);
      }
      return e;
    }, Zv = function(e) {
      var r = this, a = r.inputText = e, n = r[0] = pt();
      for (r.length = 1, a = Kv(a); ; ) {
        var i = Wv(a);
        if (i.expr == null)
          return ct("The selector `" + e + "`is invalid"), !1;
        var s = i.match.slice(1), o = i.expr.populate(r, n, s);
        if (o === !1)
          return !1;
        if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/))
          break;
      }
      var u = r[r.length - 1];
      r.currentSubject != null && (u.subject = r.currentSubject), u.edgeCount = r.edgeCount, u.compoundCount = r.compoundCount;
      for (var l = 0; l < r.length; l++) {
        var f = r[l];
        if (f.compoundCount > 0 && f.edgeCount > 0)
          return ct("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
        if (f.edgeCount > 1)
          return ct("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
        f.edgeCount === 1 && ct("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
      }
      return !0;
    }, Qv = function() {
      if (this.toStringCache != null)
        return this.toStringCache;
      for (var e = function(f) {
        return f ?? "";
      }, r = function(f) {
        return j(f) ? '"' + f + '"' : e(f);
      }, a = function(f) {
        return " " + f + " ";
      }, n = function(f, h) {
        var c = f.type, d = f.value;
        switch (c) {
          case Pe.GROUP: {
            var v = e(d);
            return v.substring(0, v.length - 1);
          }
          case Pe.DATA_COMPARE: {
            var y = f.field, p = f.operator;
            return "[" + y + a(e(p)) + r(d) + "]";
          }
          case Pe.DATA_BOOL: {
            var g = f.operator, m = f.field;
            return "[" + e(g) + m + "]";
          }
          case Pe.DATA_EXIST: {
            var b = f.field;
            return "[" + b + "]";
          }
          case Pe.META_COMPARE: {
            var E = f.operator, I = f.field;
            return "[[" + I + a(e(E)) + r(d) + "]]";
          }
          case Pe.STATE:
            return d;
          case Pe.ID:
            return "#" + d;
          case Pe.CLASS:
            return "." + d;
          case Pe.PARENT:
          case Pe.CHILD:
            return i(f.parent, h) + a(">") + i(f.child, h);
          case Pe.ANCESTOR:
          case Pe.DESCENDANT:
            return i(f.ancestor, h) + " " + i(f.descendant, h);
          case Pe.COMPOUND_SPLIT: {
            var A = i(f.left, h), x = i(f.subject, h), k = i(f.right, h);
            return A + (A.length > 0 ? " " : "") + x + k;
          }
          case Pe.TRUE:
            return "";
        }
      }, i = function(f, h) {
        return f.checks.reduce(function(c, d, v) {
          return c + (h === f && v === 0 ? "$" : "") + n(d, h);
        }, "");
      }, s = "", o = 0; o < this.length; o++) {
        var u = this[o];
        s += i(u, u.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
      }
      return this.toStringCache = s, s;
    }, Jv = {
      parse: Zv,
      toString: Qv
    }, ho = function(e, r, a) {
      var n, i = j(e), s = R(e), o = j(a), u, l, f = !1, h = !1, c = !1;
      switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), h = !0), r.indexOf("@") >= 0 && (r = r.replace("@", ""), f = !0), (i || o || f) && (u = !i && !s ? "" : "" + e, l = "" + a), f && (e = u = u.toLowerCase(), a = l = l.toLowerCase()), r) {
        case "*=":
          n = u.indexOf(l) >= 0;
          break;
        case "$=":
          n = u.indexOf(l, u.length - l.length) >= 0;
          break;
        case "^=":
          n = u.indexOf(l) === 0;
          break;
        case "=":
          n = e === a;
          break;
        case ">":
          c = !0, n = e > a;
          break;
        case ">=":
          c = !0, n = e >= a;
          break;
        case "<":
          c = !0, n = e < a;
          break;
        case "<=":
          c = !0, n = e <= a;
          break;
        default:
          n = !1;
          break;
      }
      return h && (e != null || !c) && (n = !n), n;
    }, jv = function(e, r) {
      switch (r) {
        case "?":
          return !!e;
        case "!":
          return !e;
        case "^":
          return e === void 0;
      }
    }, ed = function(e) {
      return e !== void 0;
    }, Si = function(e, r) {
      return e.data(r);
    }, td = function(e, r) {
      return e[r]();
    }, Ct = [], xt = function(e, r) {
      return e.checks.every(function(a) {
        return Ct[a.type](a, r);
      });
    };
    Ct[Pe.GROUP] = function(t, e) {
      var r = t.value;
      return r === "*" || r === e.group();
    }, Ct[Pe.STATE] = function(t, e) {
      var r = t.value;
      return Xv(r, e);
    }, Ct[Pe.ID] = function(t, e) {
      var r = t.value;
      return e.id() === r;
    }, Ct[Pe.CLASS] = function(t, e) {
      var r = t.value;
      return e.hasClass(r);
    }, Ct[Pe.META_COMPARE] = function(t, e) {
      var r = t.field, a = t.operator, n = t.value;
      return ho(td(e, r), a, n);
    }, Ct[Pe.DATA_COMPARE] = function(t, e) {
      var r = t.field, a = t.operator, n = t.value;
      return ho(Si(e, r), a, n);
    }, Ct[Pe.DATA_BOOL] = function(t, e) {
      var r = t.field, a = t.operator;
      return jv(Si(e, r), a);
    }, Ct[Pe.DATA_EXIST] = function(t, e) {
      var r = t.field;
      return t.operator, ed(Si(e, r));
    }, Ct[Pe.UNDIRECTED_EDGE] = function(t, e) {
      var r = t.nodes[0], a = t.nodes[1], n = e.source(), i = e.target();
      return xt(r, n) && xt(a, i) || xt(a, n) && xt(r, i);
    }, Ct[Pe.NODE_NEIGHBOR] = function(t, e) {
      return xt(t.node, e) && e.neighborhood().some(function(r) {
        return r.isNode() && xt(t.neighbor, r);
      });
    }, Ct[Pe.DIRECTED_EDGE] = function(t, e) {
      return xt(t.source, e.source()) && xt(t.target, e.target());
    }, Ct[Pe.NODE_SOURCE] = function(t, e) {
      return xt(t.source, e) && e.outgoers().some(function(r) {
        return r.isNode() && xt(t.target, r);
      });
    }, Ct[Pe.NODE_TARGET] = function(t, e) {
      return xt(t.target, e) && e.incomers().some(function(r) {
        return r.isNode() && xt(t.source, r);
      });
    }, Ct[Pe.CHILD] = function(t, e) {
      return xt(t.child, e) && xt(t.parent, e.parent());
    }, Ct[Pe.PARENT] = function(t, e) {
      return xt(t.parent, e) && e.children().some(function(r) {
        return xt(t.child, r);
      });
    }, Ct[Pe.DESCENDANT] = function(t, e) {
      return xt(t.descendant, e) && e.ancestors().some(function(r) {
        return xt(t.ancestor, r);
      });
    }, Ct[Pe.ANCESTOR] = function(t, e) {
      return xt(t.ancestor, e) && e.descendants().some(function(r) {
        return xt(t.descendant, r);
      });
    }, Ct[Pe.COMPOUND_SPLIT] = function(t, e) {
      return xt(t.subject, e) && xt(t.left, e) && xt(t.right, e);
    }, Ct[Pe.TRUE] = function() {
      return !0;
    }, Ct[Pe.COLLECTION] = function(t, e) {
      var r = t.value;
      return r.has(e);
    }, Ct[Pe.FILTER] = function(t, e) {
      var r = t.value;
      return r(e);
    };
    var rd = function(e) {
      var r = this;
      if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === Pe.ID)
        return e.getElementById(r[0].checks[0].value).collection();
      var a = function(i) {
        for (var s = 0; s < r.length; s++) {
          var o = r[s];
          if (xt(o, i))
            return !0;
        }
        return !1;
      };
      return r.text() == null && (a = function() {
        return !0;
      }), e.filter(a);
    }, ad = function(e) {
      for (var r = this, a = 0; a < r.length; a++) {
        var n = r[a];
        if (xt(n, e))
          return !0;
      }
      return !1;
    }, nd = {
      matches: ad,
      filter: rd
    }, Lr = function(e) {
      this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || j(e) && e.match(/^\s*$/) || (pe(e) ? this.addQuery({
        checks: [{
          type: Pe.COLLECTION,
          value: e.collection()
        }]
      }) : Y(e) ? this.addQuery({
        checks: [{
          type: Pe.FILTER,
          value: e
        }]
      }) : j(e) ? this.parse(e) || (this.invalid = !0) : Tt("A selector must be created from a string; found "));
    }, Sr = Lr.prototype;
    [Jv, nd].forEach(function(t) {
      return He(Sr, t);
    }), Sr.text = function() {
      return this.inputText;
    }, Sr.size = function() {
      return this.length;
    }, Sr.eq = function(t) {
      return this[t];
    }, Sr.sameText = function(t) {
      return !this.invalid && !t.invalid && this.text() === t.text();
    }, Sr.addQuery = function(t) {
      this[this.length++] = t;
    }, Sr.selector = Sr.toString;
    var Ar = {
      allAre: function(e) {
        var r = new Lr(e);
        return this.every(function(a) {
          return r.matches(a);
        });
      },
      is: function(e) {
        var r = new Lr(e);
        return this.some(function(a) {
          return r.matches(a);
        });
      },
      some: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
          if (n)
            return !0;
        }
        return !1;
      },
      every: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
          if (!n)
            return !1;
        }
        return !0;
      },
      same: function(e) {
        if (this === e)
          return !0;
        e = this.cy().collection(e);
        var r = this.length, a = e.length;
        return r !== a ? !1 : r === 1 ? this[0] === e[0] : this.every(function(n) {
          return e.hasElementWithId(n.id());
        });
      },
      anySame: function(e) {
        return e = this.cy().collection(e), this.some(function(r) {
          return e.hasElementWithId(r.id());
        });
      },
      allAreNeighbors: function(e) {
        e = this.cy().collection(e);
        var r = this.neighborhood();
        return e.every(function(a) {
          return r.hasElementWithId(a.id());
        });
      },
      contains: function(e) {
        e = this.cy().collection(e);
        var r = this;
        return e.every(function(a) {
          return r.hasElementWithId(a.id());
        });
      }
    };
    Ar.allAreNeighbours = Ar.allAreNeighbors, Ar.has = Ar.contains, Ar.equal = Ar.equals = Ar.same;
    var Zt = function(e, r) {
      return function(n, i, s, o) {
        var u = n, l = this, f;
        if (u == null ? f = "" : pe(u) && u.length === 1 && (f = u.id()), l.length === 1 && f) {
          var h = l[0]._private, c = h.traversalCache = h.traversalCache || {}, d = c[r] = c[r] || [], v = Pr(f), y = d[v];
          return y || (d[v] = e.call(l, n, i, s, o));
        } else
          return e.call(l, n, i, s, o);
      };
    }, ha = {
      parent: function(e) {
        var r = [];
        if (this.length === 1) {
          var a = this[0]._private.parent;
          if (a)
            return a;
        }
        for (var n = 0; n < this.length; n++) {
          var i = this[n], s = i._private.parent;
          s && r.push(s);
        }
        return this.spawn(r, !0).filter(e);
      },
      parents: function(e) {
        for (var r = [], a = this.parent(); a.nonempty(); ) {
          for (var n = 0; n < a.length; n++) {
            var i = a[n];
            r.push(i);
          }
          a = a.parent();
        }
        return this.spawn(r, !0).filter(e);
      },
      commonAncestors: function(e) {
        for (var r, a = 0; a < this.length; a++) {
          var n = this[a], i = n.parents();
          r = r || i, r = r.intersect(i);
        }
        return r.filter(e);
      },
      orphans: function(e) {
        return this.stdFilter(function(r) {
          return r.isOrphan();
        }).filter(e);
      },
      nonorphans: function(e) {
        return this.stdFilter(function(r) {
          return r.isChild();
        }).filter(e);
      },
      children: Zt(function(t) {
        for (var e = [], r = 0; r < this.length; r++)
          for (var a = this[r], n = a._private.children, i = 0; i < n.length; i++)
            e.push(n[i]);
        return this.spawn(e, !0).filter(t);
      }, "children"),
      siblings: function(e) {
        return this.parent().children().not(this).filter(e);
      },
      isParent: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.children.length !== 0;
      },
      isChildless: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.children.length === 0;
      },
      isChild: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.parent != null;
      },
      isOrphan: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.parent == null;
      },
      descendants: function(e) {
        var r = [];
        function a(n) {
          for (var i = 0; i < n.length; i++) {
            var s = n[i];
            r.push(s), s.children().nonempty() && a(s.children());
          }
        }
        return a(this.children()), this.spawn(r, !0).filter(e);
      }
    };
    function Ai(t, e, r, a) {
      for (var n = [], i = new jr(), s = t.cy(), o = s.hasCompoundNodes(), u = 0; u < t.length; u++) {
        var l = t[u];
        r ? n.push(l) : o && a(n, i, l);
      }
      for (; n.length > 0; ) {
        var f = n.shift();
        e(f), i.add(f.id()), o && a(n, i, f);
      }
      return t;
    }
    function co(t, e, r) {
      if (r.isParent())
        for (var a = r._private.children, n = 0; n < a.length; n++) {
          var i = a[n];
          e.has(i.id()) || t.push(i);
        }
    }
    ha.forEachDown = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Ai(this, t, e, co);
    };
    function vo(t, e, r) {
      if (r.isChild()) {
        var a = r._private.parent;
        e.has(a.id()) || t.push(a);
      }
    }
    ha.forEachUp = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Ai(this, t, e, vo);
    };
    function id(t, e, r) {
      vo(t, e, r), co(t, e, r);
    }
    ha.forEachUpAndDown = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Ai(this, t, e, id);
    }, ha.ancestors = ha.parents;
    var $a, go;
    $a = go = {
      data: vt.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "data",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        immutableKeys: {
          id: !0,
          source: !0,
          target: !0,
          parent: !0
        },
        updateStyle: !0
      }),
      removeData: vt.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: !0,
        immutableKeys: {
          id: !0,
          source: !0,
          target: !0,
          parent: !0
        },
        updateStyle: !0
      }),
      scratch: vt.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "scratch",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
      }),
      removeScratch: vt.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
      }),
      rscratch: vt.data({
        field: "rscratch",
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !0
      }),
      removeRscratch: vt.removeData({
        field: "rscratch",
        triggerEvent: !1
      }),
      id: function() {
        var e = this[0];
        if (e)
          return e._private.data.id;
      }
    }, $a.attr = $a.data, $a.removeAttr = $a.removeData;
    var sd = go, Mn = {};
    function Oi(t) {
      return function(e) {
        var r = this;
        if (e === void 0 && (e = !0), r.length !== 0)
          if (r.isNode() && !r.removed()) {
            for (var a = 0, n = r[0], i = n._private.edges, s = 0; s < i.length; s++) {
              var o = i[s];
              !e && o.isLoop() || (a += t(n, o));
            }
            return a;
          } else
            return;
      };
    }
    He(Mn, {
      degree: Oi(function(t, e) {
        return e.source().same(e.target()) ? 2 : 1;
      }),
      indegree: Oi(function(t, e) {
        return e.target().same(t) ? 1 : 0;
      }),
      outdegree: Oi(function(t, e) {
        return e.source().same(t) ? 1 : 0;
      })
    });
    function ca(t, e) {
      return function(r) {
        for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
          var s = n[i], o = s[t](r);
          o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
        }
        return a;
      };
    }
    He(Mn, {
      minDegree: ca("degree", function(t, e) {
        return t < e;
      }),
      maxDegree: ca("degree", function(t, e) {
        return t > e;
      }),
      minIndegree: ca("indegree", function(t, e) {
        return t < e;
      }),
      maxIndegree: ca("indegree", function(t, e) {
        return t > e;
      }),
      minOutdegree: ca("outdegree", function(t, e) {
        return t < e;
      }),
      maxOutdegree: ca("outdegree", function(t, e) {
        return t > e;
      })
    }), He(Mn, {
      totalDegree: function(e) {
        for (var r = 0, a = this.nodes(), n = 0; n < a.length; n++)
          r += a[n].degree(e);
        return r;
      }
    });
    var rr, po, yo = function(e, r, a) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        if (!i.locked()) {
          var s = i._private.position, o = {
            x: r.x != null ? r.x - s.x : 0,
            y: r.y != null ? r.y - s.y : 0
          };
          i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
        }
      }
    }, mo = {
      field: "position",
      bindingEvent: "position",
      allowBinding: !0,
      allowSetting: !0,
      settingEvent: "position",
      settingTriggersEvent: !0,
      triggerFnName: "emitAndNotify",
      allowGetting: !0,
      validKeys: ["x", "y"],
      beforeGet: function(e) {
        e.updateCompoundBounds();
      },
      beforeSet: function(e, r) {
        yo(e, r, !1);
      },
      onSet: function(e) {
        e.dirtyCompoundBoundsCache();
      },
      canSet: function(e) {
        return !e.locked();
      }
    };
    rr = po = {
      position: vt.data(mo),
      // position but no notification to renderer
      silentPosition: vt.data(He({}, mo, {
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !1,
        beforeSet: function(e, r) {
          yo(e, r, !0);
        },
        onSet: function(e) {
          e.dirtyCompoundBoundsCache();
        }
      })),
      positions: function(e, r) {
        if (S(e))
          r ? this.silentPosition(e) : this.position(e);
        else if (Y(e)) {
          var a = e, n = this.cy();
          n.startBatch();
          for (var i = 0; i < this.length; i++) {
            var s = this[i], o = void 0;
            (o = a(s, i)) && (r ? s.silentPosition(o) : s.position(o));
          }
          n.endBatch();
        }
        return this;
      },
      silentPositions: function(e) {
        return this.positions(e, !0);
      },
      shift: function(e, r, a) {
        var n;
        if (S(e) ? (n = {
          x: R(e.x) ? e.x : 0,
          y: R(e.y) ? e.y : 0
        }, a = r) : j(e) && R(r) && (n = {
          x: 0,
          y: 0
        }, n[e] = r), n != null) {
          var i = this.cy();
          i.startBatch();
          for (var s = 0; s < this.length; s++) {
            var o = this[s];
            if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
              var u = o.position(), l = {
                x: u.x + n.x,
                y: u.y + n.y
              };
              a ? o.silentPosition(l) : o.position(l);
            }
          }
          i.endBatch();
        }
        return this;
      },
      silentShift: function(e, r) {
        return S(e) ? this.shift(e, !0) : j(e) && R(r) && this.shift(e, r, !0), this;
      },
      // get/set the rendered (i.e. on screen) positon of the element
      renderedPosition: function(e, r) {
        var a = this[0], n = this.cy(), i = n.zoom(), s = n.pan(), o = S(e) ? e : void 0, u = o !== void 0 || r !== void 0 && j(e);
        if (a && a.isNode())
          if (u)
            for (var l = 0; l < this.length; l++) {
              var f = this[l];
              r !== void 0 ? f.position(e, (r - s[e]) / i) : o !== void 0 && f.position(ws(o, i, s));
            }
          else {
            var h = a.position();
            return o = gn(h, i, s), e === void 0 ? o : o[e];
          }
        else if (!u)
          return;
        return this;
      },
      // get/set the position relative to the parent
      relativePosition: function(e, r) {
        var a = this[0], n = this.cy(), i = S(e) ? e : void 0, s = i !== void 0 || r !== void 0 && j(e), o = n.hasCompoundNodes();
        if (a && a.isNode())
          if (s)
            for (var u = 0; u < this.length; u++) {
              var l = this[u], f = o ? l.parent() : null, h = f && f.length > 0, c = h;
              h && (f = f[0]);
              var d = c ? f.position() : {
                x: 0,
                y: 0
              };
              r !== void 0 ? l.position(e, r + d[e]) : i !== void 0 && l.position({
                x: i.x + d.x,
                y: i.y + d.y
              });
            }
          else {
            var v = a.position(), y = o ? a.parent() : null, p = y && y.length > 0, g = p;
            p && (y = y[0]);
            var m = g ? y.position() : {
              x: 0,
              y: 0
            };
            return i = {
              x: v.x - m.x,
              y: v.y - m.y
            }, e === void 0 ? i : i[e];
          }
        else if (!s)
          return;
        return this;
      }
    }, rr.modelPosition = rr.point = rr.position, rr.modelPositions = rr.points = rr.positions, rr.renderedPoint = rr.renderedPosition, rr.relativePoint = rr.relativePosition;
    var od = po, va, Or;
    va = Or = {}, Or.renderedBoundingBox = function(t) {
      var e = this.boundingBox(t), r = this.cy(), a = r.zoom(), n = r.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, u = e.y2 * a + n.y;
      return {
        x1: i,
        x2: s,
        y1: o,
        y2: u,
        w: s - i,
        h: u - o
      };
    }, Or.dirtyCompoundBoundsCache = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
      return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
        if (r.isParent()) {
          var a = r._private;
          a.compoundBoundsClean = !1, a.bbCache = null, t || r.emitAndNotify("bounds");
        }
      }), this);
    }, Or.updateCompoundBounds = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
      if (!e.styleEnabled() || !e.hasCompoundNodes())
        return this;
      if (!t && e.batching())
        return this;
      function r(s) {
        if (!s.isParent())
          return;
        var o = s._private, u = s.children(), l = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
          width: {
            val: s.pstyle("min-width").pfValue,
            left: s.pstyle("min-width-bias-left"),
            right: s.pstyle("min-width-bias-right")
          },
          height: {
            val: s.pstyle("min-height").pfValue,
            top: s.pstyle("min-height-bias-top"),
            bottom: s.pstyle("min-height-bias-bottom")
          }
        }, h = u.boundingBox({
          includeLabels: l,
          includeOverlays: !1,
          // updating the compound bounds happens outside of the regular
          // cache cycle (i.e. before fired events)
          useCache: !1
        }), c = o.position;
        (h.w === 0 || h.h === 0) && (h = {
          w: s.pstyle("width").pfValue,
          h: s.pstyle("height").pfValue
        }, h.x1 = c.x - h.w / 2, h.x2 = c.x + h.w / 2, h.y1 = c.y - h.h / 2, h.y2 = c.y + h.h / 2);
        function d(C, F, G) {
          var M = 0, X = 0, B = F + G;
          return C > 0 && B > 0 && (M = F / B * C, X = G / B * C), {
            biasDiff: M,
            biasComplementDiff: X
          };
        }
        function v(C, F, G, M) {
          if (G.units === "%")
            switch (M) {
              case "width":
                return C > 0 ? G.pfValue * C : 0;
              case "height":
                return F > 0 ? G.pfValue * F : 0;
              case "average":
                return C > 0 && F > 0 ? G.pfValue * (C + F) / 2 : 0;
              case "min":
                return C > 0 && F > 0 ? C > F ? G.pfValue * F : G.pfValue * C : 0;
              case "max":
                return C > 0 && F > 0 ? C > F ? G.pfValue * C : G.pfValue * F : 0;
              default:
                return 0;
            }
          else
            return G.units === "px" ? G.pfValue : 0;
        }
        var y = f.width.left.value;
        f.width.left.units === "px" && f.width.val > 0 && (y = y * 100 / f.width.val);
        var p = f.width.right.value;
        f.width.right.units === "px" && f.width.val > 0 && (p = p * 100 / f.width.val);
        var g = f.height.top.value;
        f.height.top.units === "px" && f.height.val > 0 && (g = g * 100 / f.height.val);
        var m = f.height.bottom.value;
        f.height.bottom.units === "px" && f.height.val > 0 && (m = m * 100 / f.height.val);
        var b = d(f.width.val - h.w, y, p), E = b.biasDiff, I = b.biasComplementDiff, A = d(f.height.val - h.h, g, m), x = A.biasDiff, k = A.biasComplementDiff;
        o.autoPadding = v(h.w, h.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(h.w, f.width.val), c.x = (-E + h.x1 + h.x2 + I) / 2, o.autoHeight = Math.max(h.h, f.height.val), c.y = (-x + h.y1 + h.y2 + k) / 2;
      }
      for (var a = 0; a < this.length; a++) {
        var n = this[a], i = n._private;
        (!i.compoundBoundsClean || t) && (r(n), e.batching() || (i.compoundBoundsClean = !0));
      }
      return this;
    };
    var Qt = function(e) {
      return e === 1 / 0 || e === -1 / 0 ? 0 : e;
    }, ar = function(e, r, a, n, i) {
      n - r === 0 || i - a === 0 || r == null || a == null || n == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
    }, Vr = function(e, r) {
      return r == null ? e : ar(e, r.x1, r.y1, r.x2, r.y2);
    }, _a = function(e, r, a) {
      return tr(e, r, a);
    }, In = function(e, r, a) {
      if (!r.cy().headless()) {
        var n = r._private, i = n.rstyle, s = i.arrowWidth / 2, o = r.pstyle(a + "-arrow-shape").value, u, l;
        if (o !== "none") {
          a === "source" ? (u = i.srcX, l = i.srcY) : a === "target" ? (u = i.tgtX, l = i.tgtY) : (u = i.midX, l = i.midY);
          var f = n.arrowBounds = n.arrowBounds || {}, h = f[a] = f[a] || {};
          h.x1 = u - s, h.y1 = l - s, h.x2 = u + s, h.y2 = l + s, h.w = h.x2 - h.x1, h.h = h.y2 - h.y1, yn(h, 1), ar(e, h.x1, h.y1, h.x2, h.y2);
        }
      }
    }, Ni = function(e, r, a) {
      if (!r.cy().headless()) {
        var n;
        a ? n = a + "-" : n = "";
        var i = r._private, s = i.rstyle, o = r.pstyle(n + "label").strValue;
        if (o) {
          var u = r.pstyle("text-halign"), l = r.pstyle("text-valign"), f = _a(s, "labelWidth", a), h = _a(s, "labelHeight", a), c = _a(s, "labelX", a), d = _a(s, "labelY", a), v = r.pstyle(n + "text-margin-x").pfValue, y = r.pstyle(n + "text-margin-y").pfValue, p = r.isEdge(), g = r.pstyle(n + "text-rotation"), m = r.pstyle("text-outline-width").pfValue, b = r.pstyle("text-border-width").pfValue, E = b / 2, I = r.pstyle("text-background-padding").pfValue, A = 2, x = h, k = f, C = k / 2, F = x / 2, G, M, X, B;
          if (p)
            G = c - C, M = c + C, X = d - F, B = d + F;
          else {
            switch (u.value) {
              case "left":
                G = c - k, M = c;
                break;
              case "center":
                G = c - C, M = c + C;
                break;
              case "right":
                G = c, M = c + k;
                break;
            }
            switch (l.value) {
              case "top":
                X = d - x, B = d;
                break;
              case "center":
                X = d - F, B = d + F;
                break;
              case "bottom":
                X = d, B = d + x;
                break;
            }
          }
          G += v - Math.max(m, E) - I - A, M += v + Math.max(m, E) + I + A, X += y - Math.max(m, E) - I - A, B += y + Math.max(m, E) + I + A;
          var re = a || "main", K = i.labelBounds, q = K[re] = K[re] || {};
          q.x1 = G, q.y1 = X, q.x2 = M, q.y2 = B, q.w = M - G, q.h = B - X;
          var ae = p && g.strValue === "autorotate", ue = g.pfValue != null && g.pfValue !== 0;
          if (ae || ue) {
            var be = ae ? _a(i.rstyle, "labelAngle", a) : g.pfValue, ie = Math.cos(be), ge = Math.sin(be), we = (G + M) / 2, De = (X + B) / 2;
            if (!p) {
              switch (u.value) {
                case "left":
                  we = M;
                  break;
                case "right":
                  we = G;
                  break;
              }
              switch (l.value) {
                case "top":
                  De = B;
                  break;
                case "bottom":
                  De = X;
                  break;
              }
            }
            var xe = function(Xe, Ie) {
              return Xe = Xe - we, Ie = Ie - De, {
                x: Xe * ie - Ie * ge + we,
                y: Xe * ge + Ie * ie + De
              };
            }, Le = xe(G, X), se = xe(G, B), Te = xe(M, X), Ae = xe(M, B);
            G = Math.min(Le.x, se.x, Te.x, Ae.x), M = Math.max(Le.x, se.x, Te.x, Ae.x), X = Math.min(Le.y, se.y, Te.y, Ae.y), B = Math.max(Le.y, se.y, Te.y, Ae.y);
          }
          var Se = re + "Rot", Ne = K[Se] = K[Se] || {};
          Ne.x1 = G, Ne.y1 = X, Ne.x2 = M, Ne.y2 = B, Ne.w = M - G, Ne.h = B - X, ar(e, G, X, M, B), ar(i.labelBounds.all, G, X, M, B);
        }
        return e;
      }
    }, ld = function(e, r) {
      if (!r.cy().headless()) {
        var a = r.pstyle("outline-opacity").value, n = r.pstyle("outline-width").value;
        if (a > 0 && n > 0) {
          var i = r.pstyle("outline-offset").value, s = r.pstyle("shape").value, o = n + i, u = (e.w + o * 2) / e.w, l = (e.h + o * 2) / e.h, f = 0, h = 0;
          ["diamond", "pentagon", "round-triangle"].includes(s) ? (u = (e.w + o * 2.4) / e.w, h = -o / 3.6) : ["concave-hexagon", "rhomboid", "right-rhomboid"].includes(s) ? u = (e.w + o * 2.4) / e.w : s === "star" ? (u = (e.w + o * 2.8) / e.w, l = (e.h + o * 2.6) / e.h, h = -o / 3.8) : s === "triangle" ? (u = (e.w + o * 2.8) / e.w, l = (e.h + o * 2.4) / e.h, h = -o / 1.4) : s === "vee" && (u = (e.w + o * 4.4) / e.w, l = (e.h + o * 3.8) / e.h, h = -o * 0.5);
          var c = e.h * l - e.h, d = e.w * u - e.w;
          if (mn(e, [Math.ceil(c / 2), Math.ceil(d / 2)]), f != 0 || h !== 0) {
            var v = Of(e, f, h);
            Ts(e, v);
          }
        }
      }
    }, ud = function(e, r) {
      var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), s = Yt(), o = e._private, u = e.isNode(), l = e.isEdge(), f, h, c, d, v, y, p = o.rstyle, g = u && n ? e.pstyle("bounds-expansion").pfValue : [0], m = function($e) {
        return $e.pstyle("display").value !== "none";
      }, b = !n || m(e) && (!l || m(e.source()) && m(e.target()));
      if (b) {
        var E = 0, I = 0;
        n && r.includeOverlays && (E = e.pstyle("overlay-opacity").value, E !== 0 && (I = e.pstyle("overlay-padding").value));
        var A = 0, x = 0;
        n && r.includeUnderlays && (A = e.pstyle("underlay-opacity").value, A !== 0 && (x = e.pstyle("underlay-padding").value));
        var k = Math.max(I, x), C = 0, F = 0;
        if (n && (C = e.pstyle("width").pfValue, F = C / 2), u && r.includeNodes) {
          var G = e.position();
          v = G.x, y = G.y;
          var M = e.outerWidth(), X = M / 2, B = e.outerHeight(), re = B / 2;
          f = v - X, h = v + X, c = y - re, d = y + re, ar(s, f, c, h, d), n && r.includeOutlines && ld(s, e);
        } else if (l && r.includeEdges)
          if (n && !i) {
            var K = e.pstyle("curve-style").strValue;
            if (f = Math.min(p.srcX, p.midX, p.tgtX), h = Math.max(p.srcX, p.midX, p.tgtX), c = Math.min(p.srcY, p.midY, p.tgtY), d = Math.max(p.srcY, p.midY, p.tgtY), f -= F, h += F, c -= F, d += F, ar(s, f, c, h, d), K === "haystack") {
              var q = p.haystackPts;
              if (q && q.length === 2) {
                if (f = q[0].x, c = q[0].y, h = q[1].x, d = q[1].y, f > h) {
                  var ae = f;
                  f = h, h = ae;
                }
                if (c > d) {
                  var ue = c;
                  c = d, d = ue;
                }
                ar(s, f - F, c - F, h + F, d + F);
              }
            } else if (K === "bezier" || K === "unbundled-bezier" || K === "segments" || K === "taxi") {
              var be;
              switch (K) {
                case "bezier":
                case "unbundled-bezier":
                  be = p.bezierPts;
                  break;
                case "segments":
                case "taxi":
                  be = p.linePts;
                  break;
              }
              if (be != null)
                for (var ie = 0; ie < be.length; ie++) {
                  var ge = be[ie];
                  f = ge.x - F, h = ge.x + F, c = ge.y - F, d = ge.y + F, ar(s, f, c, h, d);
                }
            }
          } else {
            var we = e.source(), De = we.position(), xe = e.target(), Le = xe.position();
            if (f = De.x, h = Le.x, c = De.y, d = Le.y, f > h) {
              var se = f;
              f = h, h = se;
            }
            if (c > d) {
              var Te = c;
              c = d, d = Te;
            }
            f -= F, h += F, c -= F, d += F, ar(s, f, c, h, d);
          }
        if (n && r.includeEdges && l && (In(s, e, "mid-source"), In(s, e, "mid-target"), In(s, e, "source"), In(s, e, "target")), n) {
          var Ae = e.pstyle("ghost").value === "yes";
          if (Ae) {
            var Se = e.pstyle("ghost-offset-x").pfValue, Ne = e.pstyle("ghost-offset-y").pfValue;
            ar(s, s.x1 + Se, s.y1 + Ne, s.x2 + Se, s.y2 + Ne);
          }
        }
        var Fe = o.bodyBounds = o.bodyBounds || {};
        Cs(Fe, s), mn(Fe, g), yn(Fe, 1), n && (f = s.x1, h = s.x2, c = s.y1, d = s.y2, ar(s, f - k, c - k, h + k, d + k));
        var Xe = o.overlayBounds = o.overlayBounds || {};
        Cs(Xe, s), mn(Xe, g), yn(Xe, 1);
        var Ie = o.labelBounds = o.labelBounds || {};
        Ie.all != null ? Af(Ie.all) : Ie.all = Yt(), n && r.includeLabels && (r.includeMainLabels && Ni(s, e, null), l && (r.includeSourceLabels && Ni(s, e, "source"), r.includeTargetLabels && Ni(s, e, "target")));
      }
      return s.x1 = Qt(s.x1), s.y1 = Qt(s.y1), s.x2 = Qt(s.x2), s.y2 = Qt(s.y2), s.w = Qt(s.x2 - s.x1), s.h = Qt(s.y2 - s.y1), s.w > 0 && s.h > 0 && b && (mn(s, g), yn(s, 1)), s;
    }, bo = function(e) {
      var r = 0, a = function(s) {
        return (s ? 1 : 0) << r++;
      }, n = 0;
      return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n += a(e.includeOutlines), n;
    }, Eo = function(e) {
      if (e.isEdge()) {
        var r = e.source().position(), a = e.target().position(), n = function(s) {
          return Math.round(s);
        };
        return Wu([n(r.x), n(r.y), n(a.x), n(a.y)]);
      } else
        return 0;
    }, wo = function(e, r) {
      var a = e._private, n, i = e.isEdge(), s = r == null ? xo : bo(r), o = s === xo, u = Eo(e), l = a.bbCachePosKey === u, f = r.useCache && l, h = function(y) {
        return y._private.bbCache == null || y._private.styleDirty;
      }, c = !f || h(e) || i && h(e.source()) || h(e.target());
      if (c ? (l || e.recalculateRenderedStyle(f), n = ud(e, Ua), a.bbCache = n, a.bbCachePosKey = u) : n = a.bbCache, !o) {
        var d = e.isNode();
        n = Yt(), (r.includeNodes && d || r.includeEdges && !d) && (r.includeOverlays ? Vr(n, a.overlayBounds) : Vr(n, a.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? Vr(n, a.labelBounds.all) : (r.includeMainLabels && Vr(n, a.labelBounds.mainRot), r.includeSourceLabels && Vr(n, a.labelBounds.sourceRot), r.includeTargetLabels && Vr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
      }
      return n;
    }, Ua = {
      includeNodes: !0,
      includeEdges: !0,
      includeLabels: !0,
      includeMainLabels: !0,
      includeSourceLabels: !0,
      includeTargetLabels: !0,
      includeOverlays: !0,
      includeUnderlays: !0,
      includeOutlines: !0,
      useCache: !0
    }, xo = bo(Ua), To = At(Ua);
    Or.boundingBox = function(t) {
      var e;
      if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (t === void 0 || t.useCache === void 0 || t.useCache === !0))
        t === void 0 ? t = Ua : t = To(t), e = wo(this[0], t);
      else {
        e = Yt(), t = t || Ua;
        var r = To(t), a = this, n = a.cy(), i = n.styleEnabled();
        if (i)
          for (var s = 0; s < a.length; s++) {
            var o = a[s], u = o._private, l = Eo(o), f = u.bbCachePosKey === l, h = r.useCache && f && !u.styleDirty;
            o.recalculateRenderedStyle(h);
          }
        this.updateCompoundBounds(!t.useCache);
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          Vr(e, wo(d, r));
        }
      }
      return e.x1 = Qt(e.x1), e.y1 = Qt(e.y1), e.x2 = Qt(e.x2), e.y2 = Qt(e.y2), e.w = Qt(e.x2 - e.x1), e.h = Qt(e.y2 - e.y1), e;
    }, Or.dirtyBoundingBoxCache = function() {
      for (var t = 0; t < this.length; t++) {
        var e = this[t]._private;
        e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
      }
      return this.emitAndNotify("bounds"), this;
    }, Or.boundingBoxAt = function(t) {
      var e = this.nodes(), r = this.cy(), a = r.hasCompoundNodes(), n = r.collection();
      if (a && (n = e.filter(function(l) {
        return l.isParent();
      }), e = e.not(n)), S(t)) {
        var i = t;
        t = function() {
          return i;
        };
      }
      var s = function(f, h) {
        return f._private.bbAtOldPos = t(f, h);
      }, o = function(f) {
        return f._private.bbAtOldPos;
      };
      r.startBatch(), e.forEach(s).silentPositions(t), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
      var u = Sf(this.boundingBox({
        useCache: !1
      }));
      return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), r.endBatch(), u;
    }, va.boundingbox = va.bb = va.boundingBox, va.renderedBoundingbox = va.renderedBoundingBox;
    var fd = Or, Ya, Ha;
    Ya = Ha = {};
    var Co = function(e) {
      e.uppercaseName = Pt(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = Pt(e.outerName), Ya[e.name] = function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a)
          if (s) {
            if (a.isParent())
              return a.updateCompoundBounds(), n[e.autoName] || 0;
            var o = a.pstyle(e.name);
            switch (o.strValue) {
              case "label":
                return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
              default:
                return o.pfValue;
            }
          } else
            return 1;
      }, Ya["outer" + e.uppercaseName] = function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a)
          if (s) {
            var o = a[e.name](), u = a.pstyle("border-width").pfValue, l = 2 * a.padding();
            return o + u + l;
          } else
            return 1;
      }, Ya["rendered" + e.uppercaseName] = function() {
        var a = this[0];
        if (a) {
          var n = a[e.name]();
          return n * this.cy().zoom();
        }
      }, Ya["rendered" + e.uppercaseOuterName] = function() {
        var a = this[0];
        if (a) {
          var n = a[e.outerName]();
          return n * this.cy().zoom();
        }
      };
    };
    Co({
      name: "width"
    }), Co({
      name: "height"
    }), Ha.padding = function() {
      var t = this[0], e = t._private;
      return t.isParent() ? (t.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t.pstyle("padding").pfValue) : t.pstyle("padding").pfValue;
    }, Ha.paddedHeight = function() {
      var t = this[0];
      return t.height() + 2 * t.padding();
    }, Ha.paddedWidth = function() {
      var t = this[0];
      return t.width() + 2 * t.padding();
    };
    var hd = Ha, cd = function(e, r) {
      if (e.isEdge())
        return r(e);
    }, vd = function(e, r) {
      if (e.isEdge()) {
        var a = e.cy();
        return gn(r(e), a.zoom(), a.pan());
      }
    }, dd = function(e, r) {
      if (e.isEdge()) {
        var a = e.cy(), n = a.pan(), i = a.zoom();
        return r(e).map(function(s) {
          return gn(s, i, n);
        });
      }
    }, gd = function(e) {
      return e.renderer().getControlPoints(e);
    }, pd = function(e) {
      return e.renderer().getSegmentPoints(e);
    }, yd = function(e) {
      return e.renderer().getSourceEndpoint(e);
    }, md = function(e) {
      return e.renderer().getTargetEndpoint(e);
    }, bd = function(e) {
      return e.renderer().getEdgeMidpoint(e);
    }, Do = {
      controlPoints: {
        get: gd,
        mult: !0
      },
      segmentPoints: {
        get: pd,
        mult: !0
      },
      sourceEndpoint: {
        get: yd
      },
      targetEndpoint: {
        get: md
      },
      midpoint: {
        get: bd
      }
    }, Ed = function(e) {
      return "rendered" + e[0].toUpperCase() + e.substr(1);
    }, wd = Object.keys(Do).reduce(function(t, e) {
      var r = Do[e], a = Ed(e);
      return t[e] = function() {
        return cd(this, r.get);
      }, r.mult ? t[a] = function() {
        return dd(this, r.get);
      } : t[a] = function() {
        return vd(this, r.get);
      }, t;
    }, {}), xd = He({}, od, fd, hd, wd);
    /*!
    	  Event object based on jQuery events, MIT license
    
    	  https://jquery.org/license/
    	  https://tldrlegal.com/license/mit-license
    	  https://github.com/jquery/jquery/blob/master/src/event.js
    	  */
    var Lo = function(e, r) {
      this.recycle(e, r);
    };
    function Xa() {
      return !1;
    }
    function Rn() {
      return !0;
    }
    Lo.prototype = {
      instanceString: function() {
        return "event";
      },
      recycle: function(e, r) {
        if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = Xa, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Rn : Xa) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
          var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
          this.renderedPosition = {
            x: a.x * n + i.x,
            y: a.y * n + i.y
          };
        }
        this.timeStamp = e && e.timeStamp || Date.now();
      },
      preventDefault: function() {
        this.isDefaultPrevented = Rn;
        var e = this.originalEvent;
        e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function() {
        this.isPropagationStopped = Rn;
        var e = this.originalEvent;
        e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = Rn, this.stopPropagation();
      },
      isDefaultPrevented: Xa,
      isPropagationStopped: Xa,
      isImmediatePropagationStopped: Xa
    };
    var So = /^([^.]+)(\.(?:[^.]+))?$/, Td = ".*", Ao = {
      qualifierCompare: function(e, r) {
        return e === r;
      },
      eventMatches: function() {
        return !0;
      },
      addEventFields: function() {
      },
      callbackContext: function(e) {
        return e;
      },
      beforeEmit: function() {
      },
      afterEmit: function() {
      },
      bubble: function() {
        return !1;
      },
      parent: function() {
        return null;
      },
      context: null
    }, Oo = Object.keys(Ao), Cd = {};
    function kn() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cd, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < Oo.length; r++) {
        var a = Oo[r];
        this[a] = t[a] || Ao[a];
      }
      this.context = e || this.context, this.listeners = [], this.emitting = 0;
    }
    var Nr = kn.prototype, No = function(e, r, a, n, i, s, o) {
      Y(n) && (i = n, n = null), o && (s == null ? s = o : s = He({}, s, o));
      for (var u = te(a) ? a : a.split(/\s+/), l = 0; l < u.length; l++) {
        var f = u[l];
        if (!ke(f)) {
          var h = f.match(So);
          if (h) {
            var c = h[1], d = h[2] ? h[2] : null, v = r(e, f, c, d, n, i, s);
            if (v === !1)
              break;
          }
        }
      }
    }, Mo = function(e, r) {
      return e.addEventFields(e.context, r), new Lo(r.type, r);
    }, Dd = function(e, r, a) {
      if (dt(a)) {
        r(e, a);
        return;
      } else if (S(a)) {
        r(e, Mo(e, a));
        return;
      }
      for (var n = te(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
        var s = n[i];
        if (!ke(s)) {
          var o = s.match(So);
          if (o) {
            var u = o[1], l = o[2] ? o[2] : null, f = Mo(e, {
              type: u,
              namespace: l,
              target: e.context
            });
            r(e, f);
          }
        }
      }
    };
    Nr.on = Nr.addListener = function(t, e, r, a, n) {
      return No(this, function(i, s, o, u, l, f, h) {
        Y(f) && i.listeners.push({
          event: s,
          // full event string
          callback: f,
          // callback to run
          type: o,
          // the event type (e.g. 'click')
          namespace: u,
          // the event namespace (e.g. ".foo")
          qualifier: l,
          // a restriction on whether to match this emitter
          conf: h
          // additional configuration
        });
      }, t, e, r, a, n), this;
    }, Nr.one = function(t, e, r, a) {
      return this.on(t, e, r, a, {
        one: !0
      });
    }, Nr.removeListener = Nr.off = function(t, e, r, a) {
      var n = this;
      this.emitting !== 0 && (this.listeners = ju(this.listeners));
      for (var i = this.listeners, s = function(l) {
        var f = i[l];
        No(n, function(h, c, d, v, y, p) {
          if ((f.type === d || t === "*") && (!v && f.namespace !== ".*" || f.namespace === v) && (!y || h.qualifierCompare(f.qualifier, y)) && (!p || f.callback === p))
            return i.splice(l, 1), !1;
        }, t, e, r, a);
      }, o = i.length - 1; o >= 0; o--)
        s(o);
      return this;
    }, Nr.removeAllListeners = function() {
      return this.removeListener("*");
    }, Nr.emit = Nr.trigger = function(t, e, r) {
      var a = this.listeners, n = a.length;
      return this.emitting++, te(e) || (e = [e]), Dd(this, function(i, s) {
        r != null && (a = [{
          event: s.event,
          type: s.type,
          namespace: s.namespace,
          callback: r
        }], n = a.length);
        for (var o = function(f) {
          var h = a[f];
          if (h.type === s.type && (!h.namespace || h.namespace === s.namespace || h.namespace === Td) && i.eventMatches(i.context, h, s)) {
            var c = [s];
            e != null && tf(c, e), i.beforeEmit(i.context, h, s), h.conf && h.conf.one && (i.listeners = i.listeners.filter(function(y) {
              return y !== h;
            }));
            var d = i.callbackContext(i.context, h, s), v = h.callback.apply(d, c);
            i.afterEmit(i.context, h, s), v === !1 && (s.stopPropagation(), s.preventDefault());
          }
        }, u = 0; u < n; u++)
          o(u);
        i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
      }, t), this.emitting--, this;
    };
    var Ld = {
      qualifierCompare: function(e, r) {
        return e == null || r == null ? e == null && r == null : e.sameText(r);
      },
      eventMatches: function(e, r, a) {
        var n = r.qualifier;
        return n != null ? e !== a.target && Oe(a.target) && n.matches(a.target) : !0;
      },
      addEventFields: function(e, r) {
        r.cy = e.cy(), r.target = e;
      },
      callbackContext: function(e, r, a) {
        return r.qualifier != null ? a.target : e;
      },
      beforeEmit: function(e, r) {
        r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
      },
      bubble: function() {
        return !0;
      },
      parent: function(e) {
        return e.isChild() ? e.parent() : e.cy();
      }
    }, Pn = function(e) {
      return j(e) ? new Lr(e) : e;
    }, Io = {
      createEmitter: function() {
        for (var e = 0; e < this.length; e++) {
          var r = this[e], a = r._private;
          a.emitter || (a.emitter = new kn(Ld, r));
        }
        return this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(e, r, a) {
        for (var n = Pn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().on(e, n, a);
        }
        return this;
      },
      removeListener: function(e, r, a) {
        for (var n = Pn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().removeListener(e, n, a);
        }
        return this;
      },
      removeAllListeners: function() {
        for (var e = 0; e < this.length; e++) {
          var r = this[e];
          r.emitter().removeAllListeners();
        }
        return this;
      },
      one: function(e, r, a) {
        for (var n = Pn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().one(e, n, a);
        }
        return this;
      },
      once: function(e, r, a) {
        for (var n = Pn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().on(e, n, a, {
            once: !0,
            onceCollection: this
          });
        }
      },
      emit: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = this[a];
          n.emitter().emit(e, r);
        }
        return this;
      },
      emitAndNotify: function(e, r) {
        if (this.length !== 0)
          return this.cy().notify(e, this), this.emit(e, r), this;
      }
    };
    vt.eventAliasesOn(Io);
    var Ro = {
      nodes: function(e) {
        return this.filter(function(r) {
          return r.isNode();
        }).filter(e);
      },
      edges: function(e) {
        return this.filter(function(r) {
          return r.isEdge();
        }).filter(e);
      },
      // internal helper to get nodes and edges as separate collections with single iteration over elements
      byGroup: function() {
        for (var e = this.spawn(), r = this.spawn(), a = 0; a < this.length; a++) {
          var n = this[a];
          n.isNode() ? e.push(n) : r.push(n);
        }
        return {
          nodes: e,
          edges: r
        };
      },
      filter: function(e, r) {
        if (e === void 0)
          return this;
        if (j(e) || pe(e))
          return new Lr(e).filter(this);
        if (Y(e)) {
          for (var a = this.spawn(), n = this, i = 0; i < n.length; i++) {
            var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
            o && a.push(s);
          }
          return a;
        }
        return this.spawn();
      },
      not: function(e) {
        if (e) {
          j(e) && (e = this.filter(e));
          for (var r = this.spawn(), a = 0; a < this.length; a++) {
            var n = this[a], i = e.has(n);
            i || r.push(n);
          }
          return r;
        } else
          return this;
      },
      absoluteComplement: function() {
        var e = this.cy();
        return e.mutableElements().not(this);
      },
      intersect: function(e) {
        if (j(e)) {
          var r = e;
          return this.filter(r);
        }
        for (var a = this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, u = s ? i : n, l = 0; l < o.length; l++) {
          var f = o[l];
          u.has(f) && a.push(f);
        }
        return a;
      },
      xor: function(e) {
        var r = this._private.cy;
        j(e) && (e = r.$(e));
        var a = this.spawn(), n = this, i = e, s = function(u, l) {
          for (var f = 0; f < u.length; f++) {
            var h = u[f], c = h._private.data.id, d = l.hasElementWithId(c);
            d || a.push(h);
          }
        };
        return s(n, i), s(i, n), a;
      },
      diff: function(e) {
        var r = this._private.cy;
        j(e) && (e = r.$(e));
        var a = this.spawn(), n = this.spawn(), i = this.spawn(), s = this, o = e, u = function(f, h, c) {
          for (var d = 0; d < f.length; d++) {
            var v = f[d], y = v._private.data.id, p = h.hasElementWithId(y);
            p ? i.merge(v) : c.push(v);
          }
        };
        return u(s, o, a), u(o, s, n), {
          left: a,
          right: n,
          both: i
        };
      },
      add: function(e) {
        var r = this._private.cy;
        if (!e)
          return this;
        if (j(e)) {
          var a = e;
          e = r.mutableElements().filter(a);
        }
        for (var n = this.spawnSelf(), i = 0; i < e.length; i++) {
          var s = e[i], o = !this.has(s);
          o && n.push(s);
        }
        return n;
      },
      // in place merge on calling collection
      merge: function(e) {
        var r = this._private, a = r.cy;
        if (!e)
          return this;
        if (e && j(e)) {
          var n = e;
          e = a.mutableElements().filter(n);
        }
        for (var i = r.map, s = 0; s < e.length; s++) {
          var o = e[s], u = o._private.data.id, l = !i.has(u);
          if (l) {
            var f = this.length++;
            this[f] = o, i.set(u, {
              ele: o,
              index: f
            });
          }
        }
        return this;
      },
      unmergeAt: function(e) {
        var r = this[e], a = r.id(), n = this._private, i = n.map;
        this[e] = void 0, i.delete(a);
        var s = e === this.length - 1;
        if (this.length > 1 && !s) {
          var o = this.length - 1, u = this[o], l = u._private.data.id;
          this[o] = void 0, this[e] = u, i.set(l, {
            ele: u,
            index: e
          });
        }
        return this.length--, this;
      },
      // remove single ele in place in calling collection
      unmergeOne: function(e) {
        e = e[0];
        var r = this._private, a = e._private.data.id, n = r.map, i = n.get(a);
        if (!i)
          return this;
        var s = i.index;
        return this.unmergeAt(s), this;
      },
      // remove eles in place on calling collection
      unmerge: function(e) {
        var r = this._private.cy;
        if (!e)
          return this;
        if (e && j(e)) {
          var a = e;
          e = r.mutableElements().filter(a);
        }
        for (var n = 0; n < e.length; n++)
          this.unmergeOne(e[n]);
        return this;
      },
      unmergeBy: function(e) {
        for (var r = this.length - 1; r >= 0; r--) {
          var a = this[r];
          e(a) && this.unmergeAt(r);
        }
        return this;
      },
      map: function(e, r) {
        for (var a = [], n = this, i = 0; i < n.length; i++) {
          var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
          a.push(o);
        }
        return a;
      },
      reduce: function(e, r) {
        for (var a = r, n = this, i = 0; i < n.length; i++)
          a = e(a, n[i], i, n);
        return a;
      },
      max: function(e, r) {
        for (var a = -1 / 0, n, i = this, s = 0; s < i.length; s++) {
          var o = i[s], u = r ? e.apply(r, [o, s, i]) : e(o, s, i);
          u > a && (a = u, n = o);
        }
        return {
          value: a,
          ele: n
        };
      },
      min: function(e, r) {
        for (var a = 1 / 0, n, i = this, s = 0; s < i.length; s++) {
          var o = i[s], u = r ? e.apply(r, [o, s, i]) : e(o, s, i);
          u < a && (a = u, n = o);
        }
        return {
          value: a,
          ele: n
        };
      }
    }, lt = Ro;
    lt.u = lt["|"] = lt["+"] = lt.union = lt.or = lt.add, lt["\\"] = lt["!"] = lt["-"] = lt.difference = lt.relativeComplement = lt.subtract = lt.not, lt.n = lt["&"] = lt["."] = lt.and = lt.intersection = lt.intersect, lt["^"] = lt["(+)"] = lt["(-)"] = lt.symmetricDifference = lt.symdiff = lt.xor, lt.fnFilter = lt.filterFn = lt.stdFilter = lt.filter, lt.complement = lt.abscomp = lt.absoluteComplement;
    var Sd = {
      isNode: function() {
        return this.group() === "nodes";
      },
      isEdge: function() {
        return this.group() === "edges";
      },
      isLoop: function() {
        return this.isEdge() && this.source()[0] === this.target()[0];
      },
      isSimple: function() {
        return this.isEdge() && this.source()[0] !== this.target()[0];
      },
      group: function() {
        var e = this[0];
        if (e)
          return e._private.group;
      }
    }, ko = function(e, r) {
      var a = e.cy(), n = a.hasCompoundNodes();
      function i(f) {
        var h = f.pstyle("z-compound-depth");
        return h.value === "auto" ? n ? f.zDepth() : 0 : h.value === "bottom" ? -1 : h.value === "top" ? oi : 0;
      }
      var s = i(e) - i(r);
      if (s !== 0)
        return s;
      function o(f) {
        var h = f.pstyle("z-index-compare");
        return h.value === "auto" && f.isNode() ? 1 : 0;
      }
      var u = o(e) - o(r);
      if (u !== 0)
        return u;
      var l = e.pstyle("z-index").value - r.pstyle("z-index").value;
      return l !== 0 ? l : e.poolIndex() - r.poolIndex();
    }, Bn = {
      forEach: function(e, r) {
        if (Y(e))
          for (var a = this.length, n = 0; n < a; n++) {
            var i = this[n], s = r ? e.apply(r, [i, n, this]) : e(i, n, this);
            if (s === !1)
              break;
          }
        return this;
      },
      toArray: function() {
        for (var e = [], r = 0; r < this.length; r++)
          e.push(this[r]);
        return e;
      },
      slice: function(e, r) {
        var a = [], n = this.length;
        r == null && (r = n), e == null && (e = 0), e < 0 && (e = n + e), r < 0 && (r = n + r);
        for (var i = e; i >= 0 && i < r && i < n; i++)
          a.push(this[i]);
        return this.spawn(a);
      },
      size: function() {
        return this.length;
      },
      eq: function(e) {
        return this[e] || this.spawn();
      },
      first: function() {
        return this[0] || this.spawn();
      },
      last: function() {
        return this[this.length - 1] || this.spawn();
      },
      empty: function() {
        return this.length === 0;
      },
      nonempty: function() {
        return !this.empty();
      },
      sort: function(e) {
        if (!Y(e))
          return this;
        var r = this.toArray().sort(e);
        return this.spawn(r);
      },
      sortByZIndex: function() {
        return this.sort(ko);
      },
      zDepth: function() {
        var e = this[0];
        if (e) {
          var r = e._private, a = r.group;
          if (a === "nodes") {
            var n = r.data.parent ? e.parents().size() : 0;
            return e.isParent() ? n : oi - 1;
          } else {
            var i = r.source, s = r.target, o = i.zDepth(), u = s.zDepth();
            return Math.max(o, u, 0);
          }
        }
      }
    };
    Bn.each = Bn.forEach;
    var Ad = function() {
      var e = "undefined", r = (typeof Symbol > "u" ? "undefined" : ee(Symbol)) != e && ee(Symbol.iterator) != e;
      r && (Bn[Symbol.iterator] = function() {
        var a = this, n = {
          value: void 0,
          done: !1
        }, i = 0, s = this.length;
        return T({
          next: function() {
            return i < s ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
          }
        }, Symbol.iterator, function() {
          return this;
        });
      });
    };
    Ad();
    var Od = At({
      nodeDimensionsIncludeLabels: !1
    }), Fn = {
      // Calculates and returns node dimensions { x, y } based on options given
      layoutDimensions: function(e) {
        e = Od(e);
        var r;
        if (!this.takesUpSpace())
          r = {
            w: 0,
            h: 0
          };
        else if (e.nodeDimensionsIncludeLabels) {
          var a = this.boundingBox();
          r = {
            w: a.w,
            h: a.h
          };
        } else
          r = {
            w: this.outerWidth(),
            h: this.outerHeight()
          };
        return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
      },
      // using standard layout options, apply position function (w/ or w/o animation)
      layoutPositions: function(e, r, a) {
        var n = this.nodes().filter(function(I) {
          return !I.isParent();
        }), i = this.cy(), s = r.eles, o = function(A) {
          return A.id();
        }, u = it(a, o);
        e.emit({
          type: "layoutstart",
          layout: e
        }), e.animations = [];
        var l = function(A, x, k) {
          var C = {
            x: x.x1 + x.w / 2,
            y: x.y1 + x.h / 2
          }, F = {
            // scale from center of bounding box (not necessarily 0,0)
            x: (k.x - C.x) * A,
            y: (k.y - C.y) * A
          };
          return {
            x: C.x + F.x,
            y: C.y + F.y
          };
        }, f = r.spacingFactor && r.spacingFactor !== 1, h = function() {
          if (!f)
            return null;
          for (var A = Yt(), x = 0; x < n.length; x++) {
            var k = n[x], C = u(k, x);
            Nf(A, C.x, C.y);
          }
          return A;
        }, c = h(), d = it(function(I, A) {
          var x = u(I, A);
          if (f) {
            var k = Math.abs(r.spacingFactor);
            x = l(k, c, x);
          }
          return r.transform != null && (x = r.transform(I, x)), x;
        }, o);
        if (r.animate) {
          for (var v = 0; v < n.length; v++) {
            var y = n[v], p = d(y, v), g = r.animateFilter == null || r.animateFilter(y, v);
            if (g) {
              var m = y.animation({
                position: p,
                duration: r.animationDuration,
                easing: r.animationEasing
              });
              e.animations.push(m);
            } else
              y.position(p);
          }
          if (r.fit) {
            var b = i.animation({
              fit: {
                boundingBox: s.boundingBoxAt(d),
                padding: r.padding
              },
              duration: r.animationDuration,
              easing: r.animationEasing
            });
            e.animations.push(b);
          } else if (r.zoom !== void 0 && r.pan !== void 0) {
            var E = i.animation({
              zoom: r.zoom,
              pan: r.pan,
              duration: r.animationDuration,
              easing: r.animationEasing
            });
            e.animations.push(E);
          }
          e.animations.forEach(function(I) {
            return I.play();
          }), e.one("layoutready", r.ready), e.emit({
            type: "layoutready",
            layout: e
          }), sa.all(e.animations.map(function(I) {
            return I.promise();
          })).then(function() {
            e.one("layoutstop", r.stop), e.emit({
              type: "layoutstop",
              layout: e
            });
          });
        } else
          n.positions(d), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
            type: "layoutready",
            layout: e
          }), e.one("layoutstop", r.stop), e.emit({
            type: "layoutstop",
            layout: e
          });
        return this;
      },
      layout: function(e) {
        var r = this.cy();
        return r.makeLayout(He({}, e, {
          eles: this
        }));
      }
    };
    Fn.createLayout = Fn.makeLayout = Fn.layout;
    function Po(t, e, r) {
      var a = r._private, n = a.styleCache = a.styleCache || [], i;
      return (i = n[t]) != null || (i = n[t] = e(r)), i;
    }
    function Gn(t, e) {
      return t = Pr(t), function(a) {
        return Po(t, e, a);
      };
    }
    function zn(t, e) {
      t = Pr(t);
      var r = function(n) {
        return e.call(n);
      };
      return function() {
        var n = this[0];
        if (n)
          return Po(t, r, n);
      };
    }
    var Ot = {
      recalculateRenderedStyle: function(e) {
        var r = this.cy(), a = r.renderer(), n = r.styleEnabled();
        return a && n && a.recalculateRenderedStyle(this, e), this;
      },
      dirtyStyleCache: function() {
        var e = this.cy(), r = function(i) {
          return i._private.styleCache = null;
        };
        if (e.hasCompoundNodes()) {
          var a;
          a = this.spawnSelf().merge(this.descendants()).merge(this.parents()), a.merge(a.connectedEdges()), a.forEach(r);
        } else
          this.forEach(function(n) {
            r(n), n.connectedEdges().forEach(r);
          });
        return this;
      },
      // fully updates (recalculates) the style for the elements
      updateStyle: function(e) {
        var r = this._private.cy;
        if (!r.styleEnabled())
          return this;
        if (r.batching()) {
          var a = r._private.batchStyleEles;
          return a.merge(this), this;
        }
        var n = r.hasCompoundNodes(), i = this;
        e = !!(e || e === void 0), n && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
        var s = i;
        return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
          return o._private.styleDirty = !0;
        }), this;
      },
      // private: clears dirty flag and recalculates style
      cleanStyle: function() {
        var e = this.cy();
        if (e.styleEnabled())
          for (var r = 0; r < this.length; r++) {
            var a = this[r];
            a._private.styleDirty && (a._private.styleDirty = !1, e.style().apply(a));
          }
      },
      // get the internal parsed style object for the specified property
      parsedStyle: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = this[0], n = a.cy();
        if (n.styleEnabled() && a) {
          this.cleanStyle();
          var i = a._private.style[e];
          return i ?? (r ? n.style().getDefaultProperty(e) : null);
        }
      },
      numericStyle: function(e) {
        var r = this[0];
        if (r.cy().styleEnabled() && r) {
          var a = r.pstyle(e);
          return a.pfValue !== void 0 ? a.pfValue : a.value;
        }
      },
      numericStyleUnits: function(e) {
        var r = this[0];
        if (r.cy().styleEnabled() && r)
          return r.pstyle(e).units;
      },
      // get the specified css property as a rendered value (i.e. on-screen value)
      // or get the whole rendered style if no property specified (NB doesn't allow setting)
      renderedStyle: function(e) {
        var r = this.cy();
        if (!r.styleEnabled())
          return this;
        var a = this[0];
        if (a)
          return r.style().getRenderedStyle(a, e);
      },
      // read the calculated css style of the element or override the style (via a bypass)
      style: function(e, r) {
        var a = this.cy();
        if (!a.styleEnabled())
          return this;
        var n = !1, i = a.style();
        if (S(e)) {
          var s = e;
          i.applyBypass(this, s, n), this.emitAndNotify("style");
        } else if (j(e))
          if (r === void 0) {
            var o = this[0];
            return o ? i.getStylePropertyValue(o, e) : void 0;
          } else
            i.applyBypass(this, e, r, n), this.emitAndNotify("style");
        else if (e === void 0) {
          var u = this[0];
          return u ? i.getRawStyle(u) : void 0;
        }
        return this;
      },
      removeStyle: function(e) {
        var r = this.cy();
        if (!r.styleEnabled())
          return this;
        var a = !1, n = r.style(), i = this;
        if (e === void 0)
          for (var s = 0; s < i.length; s++) {
            var o = i[s];
            n.removeAllBypasses(o, a);
          }
        else {
          e = e.split(/\s+/);
          for (var u = 0; u < i.length; u++) {
            var l = i[u];
            n.removeBypasses(l, e, a);
          }
        }
        return this.emitAndNotify("style"), this;
      },
      show: function() {
        return this.css("display", "element"), this;
      },
      hide: function() {
        return this.css("display", "none"), this;
      },
      effectiveOpacity: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return 1;
        var r = e.hasCompoundNodes(), a = this[0];
        if (a) {
          var n = a._private, i = a.pstyle("opacity").value;
          if (!r)
            return i;
          var s = n.data.parent ? a.parents() : null;
          if (s)
            for (var o = 0; o < s.length; o++) {
              var u = s[o], l = u.pstyle("opacity").value;
              i = l * i;
            }
          return i;
        }
      },
      transparent: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return !1;
        var r = this[0], a = r.cy().hasCompoundNodes();
        if (r)
          return a ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
      },
      backgrounding: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return !1;
        var r = this[0];
        return !!r._private.backgrounding;
      }
    };
    function Mi(t, e) {
      var r = t._private, a = r.data.parent ? t.parents() : null;
      if (a)
        for (var n = 0; n < a.length; n++) {
          var i = a[n];
          if (!e(i))
            return !1;
        }
      return !0;
    }
    function Ii(t) {
      var e = t.ok, r = t.edgeOkViaNode || t.ok, a = t.parentOk || t.ok;
      return function() {
        var n = this.cy();
        if (!n.styleEnabled())
          return !0;
        var i = this[0], s = n.hasCompoundNodes();
        if (i) {
          var o = i._private;
          if (!e(i))
            return !1;
          if (i.isNode())
            return !s || Mi(i, a);
          var u = o.source, l = o.target;
          return r(u) && (!s || Mi(u, r)) && (u === l || r(l) && (!s || Mi(l, r)));
        }
      };
    }
    var da = Gn("eleTakesUpSpace", function(t) {
      return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : !0);
    });
    Ot.takesUpSpace = zn("takesUpSpace", Ii({
      ok: da
    }));
    var Nd = Gn("eleInteractive", function(t) {
      return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && da(t);
    }), Md = Gn("parentInteractive", function(t) {
      return t.pstyle("visibility").value === "visible" && da(t);
    });
    Ot.interactive = zn("interactive", Ii({
      ok: Nd,
      parentOk: Md,
      edgeOkViaNode: da
    })), Ot.noninteractive = function() {
      var t = this[0];
      if (t)
        return !t.interactive();
    };
    var Id = Gn("eleVisible", function(t) {
      return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && da(t);
    }), Rd = da;
    Ot.visible = zn("visible", Ii({
      ok: Id,
      edgeOkViaNode: Rd
    })), Ot.hidden = function() {
      var t = this[0];
      if (t)
        return !t.visible();
    }, Ot.isBundledBezier = zn("isBundledBezier", function() {
      return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
    }), Ot.bypass = Ot.css = Ot.style, Ot.renderedCss = Ot.renderedStyle, Ot.removeBypass = Ot.removeCss = Ot.removeStyle, Ot.pstyle = Ot.parsedStyle;
    var Mr = {};
    function Bo(t) {
      return function() {
        var e = arguments, r = [];
        if (e.length === 2) {
          var a = e[0], n = e[1];
          this.on(t.event, a, n);
        } else if (e.length === 1 && Y(e[0])) {
          var i = e[0];
          this.on(t.event, i);
        } else if (e.length === 0 || e.length === 1 && te(e[0])) {
          for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
            var u = this[o], l = !t.ableField || u._private[t.ableField], f = u._private[t.field] != t.value;
            if (t.overrideAble) {
              var h = t.overrideAble(u);
              if (h !== void 0 && (l = h, !h))
                return this;
            }
            l && (u._private[t.field] = t.value, f && r.push(u));
          }
          var c = this.spawn(r);
          c.updateStyle(), c.emit(t.event), s && c.emit(s);
        }
        return this;
      };
    }
    function ga(t) {
      Mr[t.field] = function() {
        var e = this[0];
        if (e) {
          if (t.overrideField) {
            var r = t.overrideField(e);
            if (r !== void 0)
              return r;
          }
          return e._private[t.field];
        }
      }, Mr[t.on] = Bo({
        event: t.on,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: !0
      }), Mr[t.off] = Bo({
        event: t.off,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: !1
      });
    }
    ga({
      field: "locked",
      overrideField: function(e) {
        return e.cy().autolock() ? !0 : void 0;
      },
      on: "lock",
      off: "unlock"
    }), ga({
      field: "grabbable",
      overrideField: function(e) {
        return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
      },
      on: "grabify",
      off: "ungrabify"
    }), ga({
      field: "selected",
      ableField: "selectable",
      overrideAble: function(e) {
        return e.cy().autounselectify() ? !1 : void 0;
      },
      on: "select",
      off: "unselect"
    }), ga({
      field: "selectable",
      overrideField: function(e) {
        return e.cy().autounselectify() ? !1 : void 0;
      },
      on: "selectify",
      off: "unselectify"
    }), Mr.deselect = Mr.unselect, Mr.grabbed = function() {
      var t = this[0];
      if (t)
        return t._private.grabbed;
    }, ga({
      field: "active",
      on: "activate",
      off: "unactivate"
    }), ga({
      field: "pannable",
      on: "panify",
      off: "unpanify"
    }), Mr.inactive = function() {
      var t = this[0];
      if (t)
        return !t._private.active;
    };
    var Bt = {}, Fo = function(e) {
      return function(a) {
        for (var n = this, i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          if (o.isNode()) {
            for (var u = !1, l = o.connectedEdges(), f = 0; f < l.length; f++) {
              var h = l[f], c = h.source(), d = h.target();
              if (e.noIncomingEdges && d === o && c !== o || e.noOutgoingEdges && c === o && d !== o) {
                u = !0;
                break;
              }
            }
            u || i.push(o);
          }
        }
        return this.spawn(i, !0).filter(a);
      };
    }, Go = function(e) {
      return function(r) {
        for (var a = this, n = [], i = 0; i < a.length; i++) {
          var s = a[i];
          if (s.isNode())
            for (var o = s.connectedEdges(), u = 0; u < o.length; u++) {
              var l = o[u], f = l.source(), h = l.target();
              e.outgoing && f === s ? (n.push(l), n.push(h)) : e.incoming && h === s && (n.push(l), n.push(f));
            }
        }
        return this.spawn(n, !0).filter(r);
      };
    }, zo = function(e) {
      return function(r) {
        for (var a = this, n = [], i = {}; ; ) {
          var s = e.outgoing ? a.outgoers() : a.incomers();
          if (s.length === 0)
            break;
          for (var o = !1, u = 0; u < s.length; u++) {
            var l = s[u], f = l.id();
            i[f] || (i[f] = !0, n.push(l), o = !0);
          }
          if (!o)
            break;
          a = s;
        }
        return this.spawn(n, !0).filter(r);
      };
    };
    Bt.clearTraversalCache = function() {
      for (var t = 0; t < this.length; t++)
        this[t]._private.traversalCache = null;
    }, He(Bt, {
      // get the root nodes in the DAG
      roots: Fo({
        noIncomingEdges: !0
      }),
      // get the leaf nodes in the DAG
      leaves: Fo({
        noOutgoingEdges: !0
      }),
      // normally called children in graph theory
      // these nodes =edges=> outgoing nodes
      outgoers: Zt(Go({
        outgoing: !0
      }), "outgoers"),
      // aka DAG descendants
      successors: zo({
        outgoing: !0
      }),
      // normally called parents in graph theory
      // these nodes <=edges= incoming nodes
      incomers: Zt(Go({
        incoming: !0
      }), "incomers"),
      // aka DAG ancestors
      predecessors: zo({
        incoming: !0
      })
    }), He(Bt, {
      neighborhood: Zt(function(t) {
        for (var e = [], r = this.nodes(), a = 0; a < r.length; a++)
          for (var n = r[a], i = n.connectedEdges(), s = 0; s < i.length; s++) {
            var o = i[s], u = o.source(), l = o.target(), f = n === u ? l : u;
            f.length > 0 && e.push(f[0]), e.push(o[0]);
          }
        return this.spawn(e, !0).filter(t);
      }, "neighborhood"),
      closedNeighborhood: function(e) {
        return this.neighborhood().add(this).filter(e);
      },
      openNeighborhood: function(e) {
        return this.neighborhood(e);
      }
    }), Bt.neighbourhood = Bt.neighborhood, Bt.closedNeighbourhood = Bt.closedNeighborhood, Bt.openNeighbourhood = Bt.openNeighborhood, He(Bt, {
      source: Zt(function(e) {
        var r = this[0], a;
        return r && (a = r._private.source || r.cy().collection()), a && e ? a.filter(e) : a;
      }, "source"),
      target: Zt(function(e) {
        var r = this[0], a;
        return r && (a = r._private.target || r.cy().collection()), a && e ? a.filter(e) : a;
      }, "target"),
      sources: Vo({
        attr: "source"
      }),
      targets: Vo({
        attr: "target"
      })
    });
    function Vo(t) {
      return function(r) {
        for (var a = [], n = 0; n < this.length; n++) {
          var i = this[n], s = i._private[t.attr];
          s && a.push(s);
        }
        return this.spawn(a, !0).filter(r);
      };
    }
    He(Bt, {
      edgesWith: Zt($o(), "edgesWith"),
      edgesTo: Zt($o({
        thisIsSrc: !0
      }), "edgesTo")
    });
    function $o(t) {
      return function(r) {
        var a = [], n = this._private.cy, i = t || {};
        j(r) && (r = n.$(r));
        for (var s = 0; s < r.length; s++)
          for (var o = r[s]._private.edges, u = 0; u < o.length; u++) {
            var l = o[u], f = l._private.data, h = this.hasElementWithId(f.source) && r.hasElementWithId(f.target), c = r.hasElementWithId(f.source) && this.hasElementWithId(f.target), d = h || c;
            d && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !h || i.thisIsTgt && !c) || a.push(l));
          }
        return this.spawn(a, !0);
      };
    }
    He(Bt, {
      connectedEdges: Zt(function(t) {
        for (var e = [], r = this, a = 0; a < r.length; a++) {
          var n = r[a];
          if (n.isNode())
            for (var i = n._private.edges, s = 0; s < i.length; s++) {
              var o = i[s];
              e.push(o);
            }
        }
        return this.spawn(e, !0).filter(t);
      }, "connectedEdges"),
      connectedNodes: Zt(function(t) {
        for (var e = [], r = this, a = 0; a < r.length; a++) {
          var n = r[a];
          n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
        }
        return this.spawn(e, !0).filter(t);
      }, "connectedNodes"),
      parallelEdges: Zt(_o(), "parallelEdges"),
      codirectedEdges: Zt(_o({
        codirected: !0
      }), "codirectedEdges")
    });
    function _o(t) {
      var e = {
        codirected: !1
      };
      return t = He({}, e, t), function(a) {
        for (var n = [], i = this.edges(), s = t, o = 0; o < i.length; o++)
          for (var u = i[o], l = u._private, f = l.source, h = f._private.data.id, c = l.data.target, d = f._private.edges, v = 0; v < d.length; v++) {
            var y = d[v], p = y._private.data, g = p.target, m = p.source, b = g === c && m === h, E = h === g && c === m;
            (s.codirected && b || !s.codirected && (b || E)) && n.push(y);
          }
        return this.spawn(n, !0).filter(a);
      };
    }
    He(Bt, {
      components: function(e) {
        var r = this, a = r.cy(), n = a.collection(), i = e == null ? r.nodes() : e.nodes(), s = [];
        e != null && i.empty() && (i = e.sources());
        var o = function(f, h) {
          n.merge(f), i.unmerge(f), h.merge(f);
        };
        if (i.empty())
          return r.spawn();
        var u = function() {
          var f = a.collection();
          s.push(f);
          var h = i[0];
          o(h, f), r.bfs({
            directed: !1,
            roots: h,
            visit: function(d) {
              return o(d, f);
            }
          }), f.forEach(function(c) {
            c.connectedEdges().forEach(function(d) {
              r.has(d) && f.has(d.source()) && f.has(d.target()) && f.merge(d);
            });
          });
        };
        do
          u();
        while (i.length > 0);
        return s;
      },
      component: function() {
        var e = this[0];
        return e.cy().mutableElements().components(e)[0];
      }
    }), Bt.componentsOf = Bt.components;
    var Nt = function(e, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (e === void 0) {
        Tt("A collection must have a reference to the core");
        return;
      }
      var i = new ur(), s = !1;
      if (!r)
        r = [];
      else if (r.length > 0 && S(r[0]) && !Oe(r[0])) {
        s = !0;
        for (var o = [], u = new jr(), l = 0, f = r.length; l < f; l++) {
          var h = r[l];
          h.data == null && (h.data = {});
          var c = h.data;
          if (c.id == null)
            c.id = ms();
          else if (e.hasElementWithId(c.id) || u.has(c.id))
            continue;
          var d = new dn(e, h, !1);
          o.push(d), u.add(c.id);
        }
        r = o;
      }
      this.length = 0;
      for (var v = 0, y = r.length; v < y; v++) {
        var p = r[v][0];
        if (p != null) {
          var g = p._private.data.id;
          (!a || !i.has(g)) && (a && i.set(g, {
            index: this.length,
            ele: p
          }), this[this.length] = p, this.length++);
        }
      }
      this._private = {
        eles: this,
        cy: e,
        get map() {
          return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
        },
        set map(m) {
          this.lazyMap = m;
        },
        rebuildMap: function() {
          for (var b = this.lazyMap = new ur(), E = this.eles, I = 0; I < E.length; I++) {
            var A = E[I];
            b.set(A.id(), {
              index: I,
              ele: A
            });
          }
        }
      }, a && (this._private.map = i), s && !n && this.restore();
    }, bt = dn.prototype = Nt.prototype = Object.create(Array.prototype);
    bt.instanceString = function() {
      return "collection";
    }, bt.spawn = function(t, e) {
      return new Nt(this.cy(), t, e);
    }, bt.spawnSelf = function() {
      return this.spawn(this);
    }, bt.cy = function() {
      return this._private.cy;
    }, bt.renderer = function() {
      return this._private.cy.renderer();
    }, bt.element = function() {
      return this[0];
    }, bt.collection = function() {
      return Me(this) ? this : new Nt(this._private.cy, [this]);
    }, bt.unique = function() {
      return new Nt(this._private.cy, this, !0);
    }, bt.hasElementWithId = function(t) {
      return t = "" + t, this._private.map.has(t);
    }, bt.getElementById = function(t) {
      t = "" + t;
      var e = this._private.cy, r = this._private.map.get(t);
      return r ? r.ele : new Nt(e);
    }, bt.$id = bt.getElementById, bt.poolIndex = function() {
      var t = this._private.cy, e = t._private.elements, r = this[0]._private.data.id;
      return e._private.map.get(r).index;
    }, bt.indexOf = function(t) {
      var e = t[0]._private.data.id;
      return this._private.map.get(e).index;
    }, bt.indexOfId = function(t) {
      return t = "" + t, this._private.map.get(t).index;
    }, bt.json = function(t) {
      var e = this.element(), r = this.cy();
      if (e == null && t)
        return this;
      if (e != null) {
        var a = e._private;
        if (S(t)) {
          if (r.startBatch(), t.data) {
            e.data(t.data);
            var n = a.data;
            if (e.isEdge()) {
              var i = !1, s = {}, o = t.data.source, u = t.data.target;
              o != null && o != n.source && (s.source = "" + o, i = !0), u != null && u != n.target && (s.target = "" + u, i = !0), i && (e = e.move(s));
            } else {
              var l = "parent" in t.data, f = t.data.parent;
              l && (f != null || n.parent != null) && f != n.parent && (f === void 0 && (f = null), f != null && (f = "" + f), e = e.move({
                parent: f
              }));
            }
          }
          t.position && e.position(t.position);
          var h = function(y, p, g) {
            var m = t[y];
            m != null && m !== a[y] && (m ? e[p]() : e[g]());
          };
          return h("removed", "remove", "restore"), h("selected", "select", "unselect"), h("selectable", "selectify", "unselectify"), h("locked", "lock", "unlock"), h("grabbable", "grabify", "ungrabify"), h("pannable", "panify", "unpanify"), t.classes != null && e.classes(t.classes), r.endBatch(), this;
        } else if (t === void 0) {
          var c = {
            data: lr(a.data),
            position: lr(a.position),
            group: a.group,
            removed: a.removed,
            selected: a.selected,
            selectable: a.selectable,
            locked: a.locked,
            grabbable: a.grabbable,
            pannable: a.pannable,
            classes: null
          };
          c.classes = "";
          var d = 0;
          return a.classes.forEach(function(v) {
            return c.classes += d++ === 0 ? v : " " + v;
          }), c;
        }
      }
    }, bt.jsons = function() {
      for (var t = [], e = 0; e < this.length; e++) {
        var r = this[e], a = r.json();
        t.push(a);
      }
      return t;
    }, bt.clone = function() {
      for (var t = this.cy(), e = [], r = 0; r < this.length; r++) {
        var a = this[r], n = a.json(), i = new dn(t, n, !1);
        e.push(i);
      }
      return new Nt(t, e);
    }, bt.copy = bt.clone, bt.restore = function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = r.cy(), n = a._private, i = [], s = [], o, u = 0, l = r.length; u < l; u++) {
        var f = r[u];
        e && !f.removed() || (f.isNode() ? i.push(f) : s.push(f));
      }
      o = i.concat(s);
      var h, c = function() {
        o.splice(h, 1), h--;
      };
      for (h = 0; h < o.length; h++) {
        var d = o[h], v = d._private, y = v.data;
        if (d.clearTraversalCache(), !(!e && !v.removed)) {
          if (y.id === void 0)
            y.id = ms();
          else if (R(y.id))
            y.id = "" + y.id;
          else if (ke(y.id) || !j(y.id)) {
            Tt("Can not create element with invalid string ID `" + y.id + "`"), c();
            continue;
          } else if (a.hasElementWithId(y.id)) {
            Tt("Can not create second element with ID `" + y.id + "`"), c();
            continue;
          }
        }
        var p = y.id;
        if (d.isNode()) {
          var g = v.position;
          g.x == null && (g.x = 0), g.y == null && (g.y = 0);
        }
        if (d.isEdge()) {
          for (var m = d, b = ["source", "target"], E = b.length, I = !1, A = 0; A < E; A++) {
            var x = b[A], k = y[x];
            R(k) && (k = y[x] = "" + y[x]), k == null || k === "" ? (Tt("Can not create edge `" + p + "` with unspecified " + x), I = !0) : a.hasElementWithId(k) || (Tt("Can not create edge `" + p + "` with nonexistant " + x + " `" + k + "`"), I = !0);
          }
          if (I) {
            c();
            continue;
          }
          var C = a.getElementById(y.source), F = a.getElementById(y.target);
          C.same(F) ? C._private.edges.push(m) : (C._private.edges.push(m), F._private.edges.push(m)), m._private.source = C, m._private.target = F;
        }
        v.map = new ur(), v.map.set(p, {
          ele: d,
          index: 0
        }), v.removed = !1, e && a.addToPool(d);
      }
      for (var G = 0; G < i.length; G++) {
        var M = i[G], X = M._private.data;
        R(X.parent) && (X.parent = "" + X.parent);
        var B = X.parent, re = B != null;
        if (re || M._private.parent) {
          var K = M._private.parent ? a.collection().merge(M._private.parent) : a.getElementById(B);
          if (K.empty())
            X.parent = void 0;
          else if (K[0].removed())
            ct("Node added with missing parent, reference to parent removed"), X.parent = void 0, M._private.parent = null;
          else {
            for (var q = !1, ae = K; !ae.empty(); ) {
              if (M.same(ae)) {
                q = !0, X.parent = void 0;
                break;
              }
              ae = ae.parent();
            }
            q || (K[0]._private.children.push(M), M._private.parent = K[0], n.hasCompoundNodes = !0);
          }
        }
      }
      if (o.length > 0) {
        for (var ue = o.length === r.length ? r : new Nt(a, o), be = 0; be < ue.length; be++) {
          var ie = ue[be];
          ie.isNode() || (ie.parallelEdges().clearTraversalCache(), ie.source().clearTraversalCache(), ie.target().clearTraversalCache());
        }
        var ge;
        n.hasCompoundNodes ? ge = a.collection().merge(ue).merge(ue.connectedNodes()).merge(ue.parent()) : ge = ue, ge.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t), t ? ue.emitAndNotify("add") : e && ue.emit("add");
      }
      return r;
    }, bt.removed = function() {
      var t = this[0];
      return t && t._private.removed;
    }, bt.inside = function() {
      var t = this[0];
      return t && !t._private.removed;
    }, bt.remove = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = [], n = {}, i = r._private.cy;
      function s(B) {
        for (var re = B._private.edges, K = 0; K < re.length; K++)
          u(re[K]);
      }
      function o(B) {
        for (var re = B._private.children, K = 0; K < re.length; K++)
          u(re[K]);
      }
      function u(B) {
        var re = n[B.id()];
        e && B.removed() || re || (n[B.id()] = !0, B.isNode() ? (a.push(B), s(B), o(B)) : a.unshift(B));
      }
      for (var l = 0, f = r.length; l < f; l++) {
        var h = r[l];
        u(h);
      }
      function c(B, re) {
        var K = B._private.edges;
        xr(K, re), B.clearTraversalCache();
      }
      function d(B) {
        B.clearTraversalCache();
      }
      var v = [];
      v.ids = {};
      function y(B, re) {
        re = re[0], B = B[0];
        var K = B._private.children, q = B.id();
        xr(K, re), re._private.parent = null, v.ids[q] || (v.ids[q] = !0, v.push(B));
      }
      r.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
      for (var p = 0; p < a.length; p++) {
        var g = a[p];
        if (g.isEdge()) {
          var m = g.source()[0], b = g.target()[0];
          c(m, g), c(b, g);
          for (var E = g.parallelEdges(), I = 0; I < E.length; I++) {
            var A = E[I];
            d(A), A.isBundledBezier() && A.dirtyBoundingBoxCache();
          }
        } else {
          var x = g.parent();
          x.length !== 0 && y(x, g);
        }
        e && (g._private.removed = !0);
      }
      var k = i._private.elements;
      i._private.hasCompoundNodes = !1;
      for (var C = 0; C < k.length; C++) {
        var F = k[C];
        if (F.isParent()) {
          i._private.hasCompoundNodes = !0;
          break;
        }
      }
      var G = new Nt(this.cy(), a);
      G.size() > 0 && (t ? G.emitAndNotify("remove") : e && G.emit("remove"));
      for (var M = 0; M < v.length; M++) {
        var X = v[M];
        (!e || !X.removed()) && X.updateStyle();
      }
      return G;
    }, bt.move = function(t) {
      var e = this._private.cy, r = this, a = !1, n = !1, i = function(v) {
        return v == null ? v : "" + v;
      };
      if (t.source !== void 0 || t.target !== void 0) {
        var s = i(t.source), o = i(t.target), u = s != null && e.hasElementWithId(s), l = o != null && e.hasElementWithId(o);
        (u || l) && (e.batch(function() {
          r.remove(a, n), r.emitAndNotify("moveout");
          for (var d = 0; d < r.length; d++) {
            var v = r[d], y = v._private.data;
            v.isEdge() && (u && (y.source = s), l && (y.target = o));
          }
          r.restore(a, n);
        }), r.emitAndNotify("move"));
      } else if (t.parent !== void 0) {
        var f = i(t.parent), h = f === null || e.hasElementWithId(f);
        if (h) {
          var c = f === null ? void 0 : f;
          e.batch(function() {
            var d = r.remove(a, n);
            d.emitAndNotify("moveout");
            for (var v = 0; v < r.length; v++) {
              var y = r[v], p = y._private.data;
              y.isNode() && (p.parent = c);
            }
            d.restore(a, n);
          }), r.emitAndNotify("move");
        }
      }
      return this;
    }, [Hs, Yv, Nn, Ar, ha, sd, Mn, xd, Io, Ro, Sd, Bn, Fn, Ot, Mr, Bt].forEach(function(t) {
      He(bt, t);
    });
    var kd = {
      add: function(e) {
        var r, a = this;
        if (pe(e)) {
          var n = e;
          if (n._private.cy === a)
            r = n.restore();
          else {
            for (var i = [], s = 0; s < n.length; s++) {
              var o = n[s];
              i.push(o.json());
            }
            r = new Nt(a, i);
          }
        } else if (te(e)) {
          var u = e;
          r = new Nt(a, u);
        } else if (S(e) && (te(e.nodes) || te(e.edges))) {
          for (var l = e, f = [], h = ["nodes", "edges"], c = 0, d = h.length; c < d; c++) {
            var v = h[c], y = l[v];
            if (te(y))
              for (var p = 0, g = y.length; p < g; p++) {
                var m = He({
                  group: v
                }, y[p]);
                f.push(m);
              }
          }
          r = new Nt(a, f);
        } else {
          var b = e;
          r = new dn(a, b).collection();
        }
        return r;
      },
      remove: function(e) {
        if (!pe(e)) {
          if (j(e)) {
            var r = e;
            e = this.$(r);
          }
        }
        return e.remove();
      }
    };
    /*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    function Pd(t, e, r, a) {
      var n = 4, i = 1e-3, s = 1e-7, o = 10, u = 11, l = 1 / (u - 1), f = typeof Float32Array < "u";
      if (arguments.length !== 4)
        return !1;
      for (var h = 0; h < 4; ++h)
        if (typeof arguments[h] != "number" || isNaN(arguments[h]) || !isFinite(arguments[h]))
          return !1;
      t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
      var c = f ? new Float32Array(u) : new Array(u);
      function d(F, G) {
        return 1 - 3 * G + 3 * F;
      }
      function v(F, G) {
        return 3 * G - 6 * F;
      }
      function y(F) {
        return 3 * F;
      }
      function p(F, G, M) {
        return ((d(G, M) * F + v(G, M)) * F + y(G)) * F;
      }
      function g(F, G, M) {
        return 3 * d(G, M) * F * F + 2 * v(G, M) * F + y(G);
      }
      function m(F, G) {
        for (var M = 0; M < n; ++M) {
          var X = g(G, t, r);
          if (X === 0)
            return G;
          var B = p(G, t, r) - F;
          G -= B / X;
        }
        return G;
      }
      function b() {
        for (var F = 0; F < u; ++F)
          c[F] = p(F * l, t, r);
      }
      function E(F, G, M) {
        var X, B, re = 0;
        do
          B = G + (M - G) / 2, X = p(B, t, r) - F, X > 0 ? M = B : G = B;
        while (Math.abs(X) > s && ++re < o);
        return B;
      }
      function I(F) {
        for (var G = 0, M = 1, X = u - 1; M !== X && c[M] <= F; ++M)
          G += l;
        --M;
        var B = (F - c[M]) / (c[M + 1] - c[M]), re = G + B * l, K = g(re, t, r);
        return K >= i ? m(F, re) : K === 0 ? re : E(F, G, G + l);
      }
      var A = !1;
      function x() {
        A = !0, (t !== e || r !== a) && b();
      }
      var k = function(G) {
        return A || x(), t === e && r === a ? G : G === 0 ? 0 : G === 1 ? 1 : p(I(G), e, a);
      };
      k.getControlPoints = function() {
        return [{
          x: t,
          y: e
        }, {
          x: r,
          y: a
        }];
      };
      var C = "generateBezier(" + [t, e, r, a] + ")";
      return k.toString = function() {
        return C;
      }, k;
    }
    /*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    var Bd = function() {
      function t(a) {
        return -a.tension * a.x - a.friction * a.v;
      }
      function e(a, n, i) {
        var s = {
          x: a.x + i.dx * n,
          v: a.v + i.dv * n,
          tension: a.tension,
          friction: a.friction
        };
        return {
          dx: s.v,
          dv: t(s)
        };
      }
      function r(a, n) {
        var i = {
          dx: a.v,
          dv: t(a)
        }, s = e(a, n * 0.5, i), o = e(a, n * 0.5, s), u = e(a, n, o), l = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + u.dx), f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + u.dv);
        return a.x = a.x + l * n, a.v = a.v + f * n, a;
      }
      return function a(n, i, s) {
        var o = {
          x: -1,
          v: 0,
          tension: null,
          friction: null
        }, u = [0], l = 0, f = 1 / 1e4, h = 16 / 1e3, c, d, v;
        for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, c = s !== null, c ? (l = a(n, i), d = l / s * h) : d = h; v = r(v || o, d), u.push(1 + v.x), l += 16, Math.abs(v.x) > f && Math.abs(v.v) > f; )
          ;
        return c ? function(y) {
          return u[y * (u.length - 1) | 0];
        } : l;
      };
    }(), Et = function(e, r, a, n) {
      var i = Pd(e, r, a, n);
      return function(s, o, u) {
        return s + (o - s) * i(u);
      };
    }, Vn = {
      linear: function(e, r, a) {
        return e + (r - e) * a;
      },
      // default easings
      ease: Et(0.25, 0.1, 0.25, 1),
      "ease-in": Et(0.42, 0, 1, 1),
      "ease-out": Et(0, 0, 0.58, 1),
      "ease-in-out": Et(0.42, 0, 0.58, 1),
      // sine
      "ease-in-sine": Et(0.47, 0, 0.745, 0.715),
      "ease-out-sine": Et(0.39, 0.575, 0.565, 1),
      "ease-in-out-sine": Et(0.445, 0.05, 0.55, 0.95),
      // quad
      "ease-in-quad": Et(0.55, 0.085, 0.68, 0.53),
      "ease-out-quad": Et(0.25, 0.46, 0.45, 0.94),
      "ease-in-out-quad": Et(0.455, 0.03, 0.515, 0.955),
      // cubic
      "ease-in-cubic": Et(0.55, 0.055, 0.675, 0.19),
      "ease-out-cubic": Et(0.215, 0.61, 0.355, 1),
      "ease-in-out-cubic": Et(0.645, 0.045, 0.355, 1),
      // quart
      "ease-in-quart": Et(0.895, 0.03, 0.685, 0.22),
      "ease-out-quart": Et(0.165, 0.84, 0.44, 1),
      "ease-in-out-quart": Et(0.77, 0, 0.175, 1),
      // quint
      "ease-in-quint": Et(0.755, 0.05, 0.855, 0.06),
      "ease-out-quint": Et(0.23, 1, 0.32, 1),
      "ease-in-out-quint": Et(0.86, 0, 0.07, 1),
      // expo
      "ease-in-expo": Et(0.95, 0.05, 0.795, 0.035),
      "ease-out-expo": Et(0.19, 1, 0.22, 1),
      "ease-in-out-expo": Et(1, 0, 0, 1),
      // circ
      "ease-in-circ": Et(0.6, 0.04, 0.98, 0.335),
      "ease-out-circ": Et(0.075, 0.82, 0.165, 1),
      "ease-in-out-circ": Et(0.785, 0.135, 0.15, 0.86),
      // user param easings...
      spring: function(e, r, a) {
        if (a === 0)
          return Vn.linear;
        var n = Bd(e, r, a);
        return function(i, s, o) {
          return i + (s - i) * n(o);
        };
      },
      "cubic-bezier": Et
    };
    function Uo(t, e, r, a, n) {
      if (a === 1 || e === r)
        return r;
      var i = n(e, r, a);
      return t == null || ((t.roundValue || t.color) && (i = Math.round(i)), t.min !== void 0 && (i = Math.max(i, t.min)), t.max !== void 0 && (i = Math.min(i, t.max))), i;
    }
    function Yo(t, e) {
      return t.pfValue != null || t.value != null ? t.pfValue != null && (e == null || e.type.units !== "%") ? t.pfValue : t.value : t;
    }
    function pa(t, e, r, a, n) {
      var i = n != null ? n.type : null;
      r < 0 ? r = 0 : r > 1 && (r = 1);
      var s = Yo(t, n), o = Yo(e, n);
      if (R(s) && R(o))
        return Uo(i, s, o, r, a);
      if (te(s) && te(o)) {
        for (var u = [], l = 0; l < o.length; l++) {
          var f = s[l], h = o[l];
          if (f != null && h != null) {
            var c = Uo(i, f, h, r, a);
            u.push(c);
          } else
            u.push(h);
        }
        return u;
      }
    }
    function Fd(t, e, r, a) {
      var n = !a, i = t._private, s = e._private, o = s.easing, u = s.startTime, l = a ? t : t.cy(), f = l.style();
      if (!s.easingImpl)
        if (o == null)
          s.easingImpl = Vn.linear;
        else {
          var h;
          if (j(o)) {
            var c = f.parse("transition-timing-function", o);
            h = c.value;
          } else
            h = o;
          var d, v;
          j(h) ? (d = h, v = []) : (d = h[1], v = h.slice(2).map(function(ue) {
            return +ue;
          })), v.length > 0 ? (d === "spring" && v.push(s.duration), s.easingImpl = Vn[d].apply(null, v)) : s.easingImpl = Vn[d];
        }
      var y = s.easingImpl, p;
      if (s.duration === 0 ? p = 1 : p = (r - u) / s.duration, s.applying && (p = s.progress), p < 0 ? p = 0 : p > 1 && (p = 1), s.delay == null) {
        var g = s.startPosition, m = s.position;
        if (m && n && !t.locked()) {
          var b = {};
          qa(g.x, m.x) && (b.x = pa(g.x, m.x, p, y)), qa(g.y, m.y) && (b.y = pa(g.y, m.y, p, y)), t.position(b);
        }
        var E = s.startPan, I = s.pan, A = i.pan, x = I != null && a;
        x && (qa(E.x, I.x) && (A.x = pa(E.x, I.x, p, y)), qa(E.y, I.y) && (A.y = pa(E.y, I.y, p, y)), t.emit("pan"));
        var k = s.startZoom, C = s.zoom, F = C != null && a;
        F && (qa(k, C) && (i.zoom = Pa(i.minZoom, pa(k, C, p, y), i.maxZoom)), t.emit("zoom")), (x || F) && t.emit("viewport");
        var G = s.style;
        if (G && G.length > 0 && n) {
          for (var M = 0; M < G.length; M++) {
            var X = G[M], B = X.name, re = X, K = s.startStyle[B], q = f.properties[K.name], ae = pa(K, re, p, y, q);
            f.overrideBypass(t, B, ae);
          }
          t.emit("style");
        }
      }
      return s.progress = p, p;
    }
    function qa(t, e) {
      return t == null || e == null ? !1 : R(t) && R(e) ? !0 : !!(t && e);
    }
    function Gd(t, e, r, a) {
      var n = e._private;
      n.started = !0, n.startTime = r - n.progress * n.duration;
    }
    function Ho(t, e) {
      var r = e._private.aniEles, a = [];
      function n(f, h) {
        var c = f._private, d = c.animation.current, v = c.animation.queue, y = !1;
        if (d.length === 0) {
          var p = v.shift();
          p && d.push(p);
        }
        for (var g = function(A) {
          for (var x = A.length - 1; x >= 0; x--) {
            var k = A[x];
            k();
          }
          A.splice(0, A.length);
        }, m = d.length - 1; m >= 0; m--) {
          var b = d[m], E = b._private;
          if (E.stopped) {
            d.splice(m, 1), E.hooked = !1, E.playing = !1, E.started = !1, g(E.frames);
            continue;
          }
          !E.playing && !E.applying || (E.playing && E.applying && (E.applying = !1), E.started || Gd(f, b, t), Fd(f, b, t, h), E.applying && (E.applying = !1), g(E.frames), E.step != null && E.step(t), b.completed() && (d.splice(m, 1), E.hooked = !1, E.playing = !1, E.started = !1, g(E.completes)), y = !0);
        }
        return !h && d.length === 0 && v.length === 0 && a.push(f), y;
      }
      for (var i = !1, s = 0; s < r.length; s++) {
        var o = r[s], u = n(o);
        i = i || u;
      }
      var l = n(e, !0);
      (i || l) && (r.length > 0 ? e.notify("draw", r) : e.notify("draw")), r.unmerge(a), e.emit("step");
    }
    var zd = {
      // pull in animation functions
      animate: vt.animate(),
      animation: vt.animation(),
      animated: vt.animated(),
      clearQueue: vt.clearQueue(),
      delay: vt.delay(),
      delayAnimation: vt.delayAnimation(),
      stop: vt.stop(),
      addToAnimationPool: function(e) {
        var r = this;
        r.styleEnabled() && r._private.aniEles.merge(e);
      },
      stopAnimationLoop: function() {
        this._private.animationsRunning = !1;
      },
      startAnimationLoop: function() {
        var e = this;
        if (e._private.animationsRunning = !0, !e.styleEnabled())
          return;
        function r() {
          e._private.animationsRunning && hn(function(i) {
            Ho(i, e), r();
          });
        }
        var a = e.renderer();
        a && a.beforeRender ? a.beforeRender(function(i, s) {
          Ho(s, e);
        }, a.beforeRenderPriorities.animations) : r();
      }
    }, Vd = {
      qualifierCompare: function(e, r) {
        return e == null || r == null ? e == null && r == null : e.sameText(r);
      },
      eventMatches: function(e, r, a) {
        var n = r.qualifier;
        return n != null ? e !== a.target && Oe(a.target) && n.matches(a.target) : !0;
      },
      addEventFields: function(e, r) {
        r.cy = e, r.target = e;
      },
      callbackContext: function(e, r, a) {
        return r.qualifier != null ? a.target : e;
      }
    }, $n = function(e) {
      return j(e) ? new Lr(e) : e;
    }, Xo = {
      createEmitter: function() {
        var e = this._private;
        return e.emitter || (e.emitter = new kn(Vd, this)), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(e, r, a) {
        return this.emitter().on(e, $n(r), a), this;
      },
      removeListener: function(e, r, a) {
        return this.emitter().removeListener(e, $n(r), a), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      one: function(e, r, a) {
        return this.emitter().one(e, $n(r), a), this;
      },
      once: function(e, r, a) {
        return this.emitter().one(e, $n(r), a), this;
      },
      emit: function(e, r) {
        return this.emitter().emit(e, r), this;
      },
      emitAndNotify: function(e, r) {
        return this.emit(e), this.notify(e, r), this;
      }
    };
    vt.eventAliasesOn(Xo);
    var Ri = {
      png: function(e) {
        var r = this._private.renderer;
        return e = e || {}, r.png(e);
      },
      jpg: function(e) {
        var r = this._private.renderer;
        return e = e || {}, e.bg = e.bg || "#fff", r.jpg(e);
      }
    };
    Ri.jpeg = Ri.jpg;
    var _n = {
      layout: function(e) {
        var r = this;
        if (e == null) {
          Tt("Layout options must be specified to make a layout");
          return;
        }
        if (e.name == null) {
          Tt("A `name` must be specified to make a layout");
          return;
        }
        var a = e.name, n = r.extension("layout", a);
        if (n == null) {
          Tt("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
          return;
        }
        var i;
        j(e.eles) ? i = r.$(e.eles) : i = e.eles != null ? e.eles : r.$();
        var s = new n(He({}, e, {
          cy: r,
          eles: i
        }));
        return s;
      }
    };
    _n.createLayout = _n.makeLayout = _n.layout;
    var $d = {
      notify: function(e, r) {
        var a = this._private;
        if (this.batching()) {
          a.batchNotifications = a.batchNotifications || {};
          var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
          r != null && n.merge(r);
          return;
        }
        if (a.notificationsEnabled) {
          var i = this.renderer();
          this.destroyed() || !i || i.notify(e, r);
        }
      },
      notifications: function(e) {
        var r = this._private;
        return e === void 0 ? r.notificationsEnabled : (r.notificationsEnabled = !!e, this);
      },
      noNotifications: function(e) {
        this.notifications(!1), e(), this.notifications(!0);
      },
      batching: function() {
        return this._private.batchCount > 0;
      },
      startBatch: function() {
        var e = this._private;
        return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
      },
      endBatch: function() {
        var e = this._private;
        if (e.batchCount === 0)
          return this;
        if (e.batchCount--, e.batchCount === 0) {
          e.batchStyleEles.updateStyle();
          var r = this.renderer();
          Object.keys(e.batchNotifications).forEach(function(a) {
            var n = e.batchNotifications[a];
            n.empty() ? r.notify(a) : r.notify(a, n);
          });
        }
        return this;
      },
      batch: function(e) {
        return this.startBatch(), e(), this.endBatch(), this;
      },
      // for backwards compatibility
      batchData: function(e) {
        var r = this;
        return this.batch(function() {
          for (var a = Object.keys(e), n = 0; n < a.length; n++) {
            var i = a[n], s = e[i], o = r.getElementById(i);
            o.data(s);
          }
        });
      }
    }, _d = At({
      hideEdgesOnViewport: !1,
      textureOnViewport: !1,
      motionBlur: !1,
      motionBlurOpacity: 0.05,
      pixelRatio: void 0,
      desktopTapThreshold: 4,
      touchTapThreshold: 8,
      wheelSensitivity: 1,
      debug: !1,
      showFps: !1
    }), ki = {
      renderTo: function(e, r, a, n) {
        var i = this._private.renderer;
        return i.renderTo(e, r, a, n), this;
      },
      renderer: function() {
        return this._private.renderer;
      },
      forceRender: function() {
        return this.notify("draw"), this;
      },
      resize: function() {
        return this.invalidateSize(), this.emitAndNotify("resize"), this;
      },
      initRenderer: function(e) {
        var r = this, a = r.extension("renderer", e.name);
        if (a == null) {
          Tt("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
          return;
        }
        e.wheelSensitivity !== void 0 && ct("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
        var n = _d(e);
        n.cy = r, r._private.renderer = new a(n), this.notify("init");
      },
      destroyRenderer: function() {
        var e = this;
        e.notify("destroy");
        var r = e.container();
        if (r)
          for (r._cyreg = null; r.childNodes.length > 0; )
            r.removeChild(r.childNodes[0]);
        e._private.renderer = null, e.mutableElements().forEach(function(a) {
          var n = a._private;
          n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
        });
      },
      onRender: function(e) {
        return this.on("render", e);
      },
      offRender: function(e) {
        return this.off("render", e);
      }
    };
    ki.invalidateDimensions = ki.resize;
    var Un = {
      // get a collection
      // - empty collection on no args
      // - collection of elements in the graph on selector arg
      // - guarantee a returned collection when elements or collection specified
      collection: function(e, r) {
        return j(e) ? this.$(e) : pe(e) ? e.collection() : te(e) ? (r || (r = {}), new Nt(this, e, r.unique, r.removed)) : new Nt(this);
      },
      nodes: function(e) {
        var r = this.$(function(a) {
          return a.isNode();
        });
        return e ? r.filter(e) : r;
      },
      edges: function(e) {
        var r = this.$(function(a) {
          return a.isEdge();
        });
        return e ? r.filter(e) : r;
      },
      // search the graph like jQuery
      $: function(e) {
        var r = this._private.elements;
        return e ? r.filter(e) : r.spawnSelf();
      },
      mutableElements: function() {
        return this._private.elements;
      }
    };
    Un.elements = Un.filter = Un.$;
    var Ft = {}, Wa = "t", Ud = "f";
    Ft.apply = function(t) {
      for (var e = this, r = e._private, a = r.cy, n = a.collection(), i = 0; i < t.length; i++) {
        var s = t[i], o = e.getContextMeta(s);
        if (!o.empty) {
          var u = e.getContextStyle(o), l = e.applyContextStyle(o, u, s);
          s._private.appliedInitStyle ? e.updateTransitions(s, l.diffProps) : s._private.appliedInitStyle = !0;
          var f = e.updateStyleHints(s);
          f && n.push(s);
        }
      }
      return n;
    }, Ft.getPropertiesDiff = function(t, e) {
      var r = this, a = r._private.propDiffs = r._private.propDiffs || {}, n = t + "-" + e, i = a[n];
      if (i)
        return i;
      for (var s = [], o = {}, u = 0; u < r.length; u++) {
        var l = r[u], f = t[u] === Wa, h = e[u] === Wa, c = f !== h, d = l.mappedProperties.length > 0;
        if (c || h && d) {
          var v = void 0;
          c && d || c ? v = l.properties : d && (v = l.mappedProperties);
          for (var y = 0; y < v.length; y++) {
            for (var p = v[y], g = p.name, m = !1, b = u + 1; b < r.length; b++) {
              var E = r[b], I = e[b] === Wa;
              if (I && (m = E.properties[p.name] != null, m))
                break;
            }
            !o[g] && !m && (o[g] = !0, s.push(g));
          }
        }
      }
      return a[n] = s, s;
    }, Ft.getContextMeta = function(t) {
      for (var e = this, r = "", a, n = t._private.styleCxtKey || "", i = 0; i < e.length; i++) {
        var s = e[i], o = s.selector && s.selector.matches(t);
        o ? r += Wa : r += Ud;
      }
      return a = e.getPropertiesDiff(n, r), t._private.styleCxtKey = r, {
        key: r,
        diffPropNames: a,
        empty: a.length === 0
      };
    }, Ft.getContextStyle = function(t) {
      var e = t.key, r = this, a = this._private.contextStyles = this._private.contextStyles || {};
      if (a[e])
        return a[e];
      for (var n = {
        _private: {
          key: e
        }
      }, i = 0; i < r.length; i++) {
        var s = r[i], o = e[i] === Wa;
        if (o)
          for (var u = 0; u < s.properties.length; u++) {
            var l = s.properties[u];
            n[l.name] = l;
          }
      }
      return a[e] = n, n;
    }, Ft.applyContextStyle = function(t, e, r) {
      for (var a = this, n = t.diffPropNames, i = {}, s = a.types, o = 0; o < n.length; o++) {
        var u = n[o], l = e[u], f = r.pstyle(u);
        if (!l)
          if (f)
            f.bypass ? l = {
              name: u,
              deleteBypassed: !0
            } : l = {
              name: u,
              delete: !0
            };
          else
            continue;
        if (f !== l) {
          if (l.mapped === s.fn && f != null && f.mapping != null && f.mapping.value === l.value) {
            var h = f.mapping, c = h.fnValue = l.value(r);
            if (c === h.prevFnValue)
              continue;
          }
          var d = i[u] = {
            prev: f
          };
          a.applyParsedProperty(r, l), d.next = r.pstyle(u), d.next && d.next.bypass && (d.next = d.next.bypassed);
        }
      }
      return {
        diffProps: i
      };
    }, Ft.updateStyleHints = function(t) {
      var e = t._private, r = this, a = r.propertyGroupNames, n = r.propertyGroupKeys, i = function(Ne, Fe, Xe) {
        return r.getPropertiesHash(Ne, Fe, Xe);
      }, s = e.styleKey;
      if (t.removed())
        return !1;
      var o = e.group === "nodes", u = t._private.style;
      a = Object.keys(u);
      for (var l = 0; l < n.length; l++) {
        var f = n[l];
        e.styleKeys[f] = [Jr, Na];
      }
      for (var h = function(Ne, Fe) {
        return e.styleKeys[Fe][0] = Ma(Ne, e.styleKeys[Fe][0]);
      }, c = function(Ne, Fe) {
        return e.styleKeys[Fe][1] = Ia(Ne, e.styleKeys[Fe][1]);
      }, d = function(Ne, Fe) {
        h(Ne, Fe), c(Ne, Fe);
      }, v = function(Ne, Fe) {
        for (var Xe = 0; Xe < Ne.length; Xe++) {
          var Ie = Ne.charCodeAt(Xe);
          h(Ie, Fe), c(Ie, Fe);
        }
      }, y = 2e9, p = function(Ne) {
        return -128 < Ne && Ne < 128 && Math.floor(Ne) !== Ne ? y - (Ne * 1024 | 0) : Ne;
      }, g = 0; g < a.length; g++) {
        var m = a[g], b = u[m];
        if (b != null) {
          var E = this.properties[m], I = E.type, A = E.groupKey, x = void 0;
          E.hashOverride != null ? x = E.hashOverride(t, b) : b.pfValue != null && (x = b.pfValue);
          var k = E.enums == null ? b.value : null, C = x != null, F = k != null, G = C || F, M = b.units;
          if (I.number && G && !I.multiple) {
            var X = C ? x : k;
            d(p(X), A), !C && M != null && v(M, A);
          } else
            v(b.strValue, A);
        }
      }
      for (var B = [Jr, Na], re = 0; re < n.length; re++) {
        var K = n[re], q = e.styleKeys[K];
        B[0] = Ma(q[0], B[0]), B[1] = Ia(q[1], B[1]);
      }
      e.styleKey = qu(B[0], B[1]);
      var ae = e.styleKeys;
      e.labelDimsKey = wr(ae.labelDimensions);
      var ue = i(t, ["label"], ae.labelDimensions);
      if (e.labelKey = wr(ue), e.labelStyleKey = wr(cn(ae.commonLabel, ue)), !o) {
        var be = i(t, ["source-label"], ae.labelDimensions);
        e.sourceLabelKey = wr(be), e.sourceLabelStyleKey = wr(cn(ae.commonLabel, be));
        var ie = i(t, ["target-label"], ae.labelDimensions);
        e.targetLabelKey = wr(ie), e.targetLabelStyleKey = wr(cn(ae.commonLabel, ie));
      }
      if (o) {
        var ge = e.styleKeys, we = ge.nodeBody, De = ge.nodeBorder, xe = ge.nodeOutline, Le = ge.backgroundImage, se = ge.compound, Te = ge.pie, Ae = [we, De, xe, Le, se, Te].filter(function(Se) {
          return Se != null;
        }).reduce(cn, [Jr, Na]);
        e.nodeKey = wr(Ae), e.hasPie = Te != null && Te[0] !== Jr && Te[1] !== Na;
      }
      return s !== e.styleKey;
    }, Ft.clearStyleHints = function(t) {
      var e = t._private;
      e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
    }, Ft.applyParsedProperty = function(t, e) {
      var r = this, a = e, n = t._private.style, i, s = r.types, o = r.properties[a.name].type, u = a.bypass, l = n[a.name], f = l && l.bypass, h = t._private, c = "mapping", d = function(we) {
        return we == null ? null : we.pfValue != null ? we.pfValue : we.value;
      }, v = function() {
        var we = d(l), De = d(a);
        r.checkTriggers(t, a.name, we, De);
      };
      if (e.name === "curve-style" && t.isEdge() && // loops must be bundled beziers
      (e.value !== "bezier" && t.isLoop() || // edges connected to compound nodes can not be haystacks
      e.value === "haystack" && (t.source().isParent() || t.target().isParent())) && (a = e = this.parse(e.name, "bezier", u)), a.delete)
        return n[a.name] = void 0, v(), !0;
      if (a.deleteBypassed)
        return l ? l.bypass ? (l.bypassed = void 0, v(), !0) : !1 : (v(), !0);
      if (a.deleteBypass)
        return l ? l.bypass ? (n[a.name] = l.bypassed, v(), !0) : !1 : (v(), !0);
      var y = function() {
        ct("Do not assign mappings to elements without corresponding data (i.e. ele `" + t.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
      };
      switch (a.mapped) {
        case s.mapData: {
          for (var p = a.field.split("."), g = h.data, m = 0; m < p.length && g; m++) {
            var b = p[m];
            g = g[b];
          }
          if (g == null)
            return y(), !1;
          var E;
          if (R(g)) {
            var I = a.fieldMax - a.fieldMin;
            I === 0 ? E = 0 : E = (g - a.fieldMin) / I;
          } else
            return ct("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + g + "` for `" + t.id() + "` is non-numeric)"), !1;
          if (E < 0 ? E = 0 : E > 1 && (E = 1), o.color) {
            var A = a.valueMin[0], x = a.valueMax[0], k = a.valueMin[1], C = a.valueMax[1], F = a.valueMin[2], G = a.valueMax[2], M = a.valueMin[3] == null ? 1 : a.valueMin[3], X = a.valueMax[3] == null ? 1 : a.valueMax[3], B = [Math.round(A + (x - A) * E), Math.round(k + (C - k) * E), Math.round(F + (G - F) * E), Math.round(M + (X - M) * E)];
            i = {
              // colours are simple, so just create the flat property instead of expensive string parsing
              bypass: a.bypass,
              // we're a bypass if the mapping property is a bypass
              name: a.name,
              value: B,
              strValue: "rgb(" + B[0] + ", " + B[1] + ", " + B[2] + ")"
            };
          } else if (o.number) {
            var re = a.valueMin + (a.valueMax - a.valueMin) * E;
            i = this.parse(a.name, re, a.bypass, c);
          } else
            return !1;
          if (!i)
            return y(), !1;
          i.mapping = a, a = i;
          break;
        }
        case s.data: {
          for (var K = a.field.split("."), q = h.data, ae = 0; ae < K.length && q; ae++) {
            var ue = K[ae];
            q = q[ue];
          }
          if (q != null && (i = this.parse(a.name, q, a.bypass, c)), !i)
            return y(), !1;
          i.mapping = a, a = i;
          break;
        }
        case s.fn: {
          var be = a.value, ie = a.fnValue != null ? a.fnValue : be(t);
          if (a.prevFnValue = ie, ie == null)
            return ct("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + t.id() + "` is null)"), !1;
          if (i = this.parse(a.name, ie, a.bypass, c), !i)
            return ct("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + t.id() + "` is invalid)"), !1;
          i.mapping = lr(a), a = i;
          break;
        }
        case void 0:
          break;
        default:
          return !1;
      }
      return u ? (f ? a.bypassed = l.bypassed : a.bypassed = l, n[a.name] = a) : f ? l.bypassed = a : n[a.name] = a, v(), !0;
    }, Ft.cleanElements = function(t, e) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e)
          a._private.style = {};
        else
          for (var n = a._private.style, i = Object.keys(n), s = 0; s < i.length; s++) {
            var o = i[s], u = n[o];
            u != null && (u.bypass ? u.bypassed = null : n[o] = null);
          }
      }
    }, Ft.update = function() {
      var t = this._private.cy, e = t.mutableElements();
      e.updateStyle();
    }, Ft.updateTransitions = function(t, e) {
      var r = this, a = t._private, n = t.pstyle("transition-property").value, i = t.pstyle("transition-duration").pfValue, s = t.pstyle("transition-delay").pfValue;
      if (n.length > 0 && i > 0) {
        for (var o = {}, u = !1, l = 0; l < n.length; l++) {
          var f = n[l], h = t.pstyle(f), c = e[f];
          if (c) {
            var d = c.prev, v = d, y = c.next != null ? c.next : h, p = !1, g = void 0, m = 1e-6;
            v && (R(v.pfValue) && R(y.pfValue) ? (p = y.pfValue - v.pfValue, g = v.pfValue + m * p) : R(v.value) && R(y.value) ? (p = y.value - v.value, g = v.value + m * p) : te(v.value) && te(y.value) && (p = v.value[0] !== y.value[0] || v.value[1] !== y.value[1] || v.value[2] !== y.value[2], g = v.strValue), p && (o[f] = y.strValue, this.applyBypass(t, f, g), u = !0));
          }
        }
        if (!u)
          return;
        a.transitioning = !0, new sa(function(b) {
          s > 0 ? t.delayAnimation(s).play().promise().then(b) : b();
        }).then(function() {
          return t.animation({
            style: o,
            duration: i,
            easing: t.pstyle("transition-timing-function").value,
            queue: !1
          }).play().promise();
        }).then(function() {
          r.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1;
        });
      } else
        a.transitioning && (this.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1);
    }, Ft.checkTrigger = function(t, e, r, a, n, i) {
      var s = this.properties[e], o = n(s);
      o != null && o(r, a) && i(s);
    }, Ft.checkZOrderTrigger = function(t, e, r, a) {
      var n = this;
      this.checkTrigger(t, e, r, a, function(i) {
        return i.triggersZOrder;
      }, function() {
        n._private.cy.notify("zorder", t);
      });
    }, Ft.checkBoundsTrigger = function(t, e, r, a) {
      this.checkTrigger(t, e, r, a, function(n) {
        return n.triggersBounds;
      }, function(n) {
        t.dirtyCompoundBoundsCache(), t.dirtyBoundingBoxCache(), // only for beziers -- so performance of other edges isn't affected
        n.triggersBoundsOfParallelBeziers && e === "curve-style" && (r === "bezier" || a === "bezier") && t.parallelEdges().forEach(function(i) {
          i.isBundledBezier() && i.dirtyBoundingBoxCache();
        }), n.triggersBoundsOfConnectedEdges && e === "display" && (r === "none" || a === "none") && t.connectedEdges().forEach(function(i) {
          i.dirtyBoundingBoxCache();
        });
      });
    }, Ft.checkTriggers = function(t, e, r, a) {
      t.dirtyStyleCache(), this.checkZOrderTrigger(t, e, r, a), this.checkBoundsTrigger(t, e, r, a);
    };
    var Ka = {};
    Ka.applyBypass = function(t, e, r, a) {
      var n = this, i = [], s = !0;
      if (e === "*" || e === "**") {
        if (r !== void 0)
          for (var o = 0; o < n.properties.length; o++) {
            var u = n.properties[o], l = u.name, f = this.parse(l, r, !0);
            f && i.push(f);
          }
      } else if (j(e)) {
        var h = this.parse(e, r, !0);
        h && i.push(h);
      } else if (S(e)) {
        var c = e;
        a = r;
        for (var d = Object.keys(c), v = 0; v < d.length; v++) {
          var y = d[v], p = c[y];
          if (p === void 0 && (p = c[yt(y)]), p !== void 0) {
            var g = this.parse(y, p, !0);
            g && i.push(g);
          }
        }
      } else
        return !1;
      if (i.length === 0)
        return !1;
      for (var m = !1, b = 0; b < t.length; b++) {
        for (var E = t[b], I = {}, A = void 0, x = 0; x < i.length; x++) {
          var k = i[x];
          if (a) {
            var C = E.pstyle(k.name);
            A = I[k.name] = {
              prev: C
            };
          }
          m = this.applyParsedProperty(E, lr(k)) || m, a && (A.next = E.pstyle(k.name));
        }
        m && this.updateStyleHints(E), a && this.updateTransitions(E, I, s);
      }
      return m;
    }, Ka.overrideBypass = function(t, e, r) {
      e = tt(e);
      for (var a = 0; a < t.length; a++) {
        var n = t[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, u = s.mutiple, l = i ? i.pfValue != null ? i.pfValue : i.value : null;
        !i || !i.bypass ? this.applyBypass(n, e, r) : (i.value = r, i.pfValue != null && (i.pfValue = r), o ? i.strValue = "rgb(" + r.join(",") + ")" : u ? i.strValue = r.join(" ") : i.strValue = "" + r, this.updateStyleHints(n)), this.checkTriggers(n, e, l, r);
      }
    }, Ka.removeAllBypasses = function(t, e) {
      return this.removeBypasses(t, this.propertyNames, e);
    }, Ka.removeBypasses = function(t, e, r) {
      for (var a = !0, n = 0; n < t.length; n++) {
        for (var i = t[n], s = {}, o = 0; o < e.length; o++) {
          var u = e[o], l = this.properties[u], f = i.pstyle(l.name);
          if (!(!f || !f.bypass)) {
            var h = "", c = this.parse(u, h, !0), d = s[l.name] = {
              prev: f
            };
            this.applyParsedProperty(i, c), d.next = i.pstyle(l.name);
          }
        }
        this.updateStyleHints(i), r && this.updateTransitions(i, s, a);
      }
    };
    var Pi = {};
    Pi.getEmSizeInPixels = function() {
      var t = this.containerCss("font-size");
      return t != null ? parseFloat(t) : 1;
    }, Pi.containerCss = function(t) {
      var e = this._private.cy, r = e.container(), a = e.window();
      if (a && r && a.getComputedStyle)
        return a.getComputedStyle(r).getPropertyValue(t);
    };
    var fr = {};
    fr.getRenderedStyle = function(t, e) {
      return e ? this.getStylePropertyValue(t, e, !0) : this.getRawStyle(t, !0);
    }, fr.getRawStyle = function(t, e) {
      var r = this;
      if (t = t[0], t) {
        for (var a = {}, n = 0; n < r.properties.length; n++) {
          var i = r.properties[n], s = r.getStylePropertyValue(t, i.name, e);
          s != null && (a[i.name] = s, a[yt(i.name)] = s);
        }
        return a;
      }
    }, fr.getIndexedStyle = function(t, e, r, a) {
      var n = t.pstyle(e)[r][a];
      return n ?? t.cy().style().getDefaultProperty(e)[r][0];
    }, fr.getStylePropertyValue = function(t, e, r) {
      var a = this;
      if (t = t[0], t) {
        var n = a.properties[e];
        n.alias && (n = n.pointsTo);
        var i = n.type, s = t.pstyle(n.name);
        if (s) {
          var o = s.value, u = s.units, l = s.strValue;
          if (r && i.number && o != null && R(o)) {
            var f = t.cy().zoom(), h = function(p) {
              return p * f;
            }, c = function(p, g) {
              return h(p) + g;
            }, d = te(o), v = d ? u.every(function(y) {
              return y != null;
            }) : u != null;
            return v ? d ? o.map(function(y, p) {
              return c(y, u[p]);
            }).join(" ") : c(o, u) : d ? o.map(function(y) {
              return j(y) ? y : "" + h(y);
            }).join(" ") : "" + h(o);
          } else if (l != null)
            return l;
        }
        return null;
      }
    }, fr.getAnimationStartStyle = function(t, e) {
      for (var r = {}, a = 0; a < e.length; a++) {
        var n = e[a], i = n.name, s = t.pstyle(i);
        s !== void 0 && (S(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s)), s && (r[i] = s);
      }
      return r;
    }, fr.getPropsList = function(t) {
      var e = this, r = [], a = t, n = e.properties;
      if (a)
        for (var i = Object.keys(a), s = 0; s < i.length; s++) {
          var o = i[s], u = a[o], l = n[o] || n[tt(o)], f = this.parse(l.name, u);
          f && r.push(f);
        }
      return r;
    }, fr.getNonDefaultPropertiesHash = function(t, e, r) {
      var a = r.slice(), n, i, s, o, u, l;
      for (u = 0; u < e.length; u++)
        if (n = e[u], i = t.pstyle(n, !1), i != null)
          if (i.pfValue != null)
            a[0] = Ma(o, a[0]), a[1] = Ia(o, a[1]);
          else
            for (s = i.strValue, l = 0; l < s.length; l++)
              o = s.charCodeAt(l), a[0] = Ma(o, a[0]), a[1] = Ia(o, a[1]);
      return a;
    }, fr.getPropertiesHash = fr.getNonDefaultPropertiesHash;
    var Yn = {};
    Yn.appendFromJson = function(t) {
      for (var e = this, r = 0; r < t.length; r++) {
        var a = t[r], n = a.selector, i = a.style || a.css, s = Object.keys(i);
        e.selector(n);
        for (var o = 0; o < s.length; o++) {
          var u = s[o], l = i[u];
          e.css(u, l);
        }
      }
      return e;
    }, Yn.fromJson = function(t) {
      var e = this;
      return e.resetToDefault(), e.appendFromJson(t), e;
    }, Yn.json = function() {
      for (var t = [], e = this.defaultLength; e < this.length; e++) {
        for (var r = this[e], a = r.selector, n = r.properties, i = {}, s = 0; s < n.length; s++) {
          var o = n[s];
          i[o.name] = o.strValue;
        }
        t.push({
          selector: a ? a.toString() : "core",
          style: i
        });
      }
      return t;
    };
    var Bi = {};
    Bi.appendFromString = function(t) {
      var e = this, r = this, a = "" + t, n, i, s;
      a = a.replace(/[/][*](\s|.)+?[*][/]/g, "");
      function o() {
        a.length > n.length ? a = a.substr(n.length) : a = "";
      }
      function u() {
        i.length > s.length ? i = i.substr(s.length) : i = "";
      }
      for (; ; ) {
        var l = a.match(/^\s*$/);
        if (l)
          break;
        var f = a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
        if (!f) {
          ct("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
          break;
        }
        n = f[0];
        var h = f[1];
        if (h !== "core") {
          var c = new Lr(h);
          if (c.invalid) {
            ct("Skipping parsing of block: Invalid selector found in string stylesheet: " + h), o();
            continue;
          }
        }
        var d = f[2], v = !1;
        i = d;
        for (var y = []; ; ) {
          var p = i.match(/^\s*$/);
          if (p)
            break;
          var g = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
          if (!g) {
            ct("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + d), v = !0;
            break;
          }
          s = g[0];
          var m = g[1], b = g[2], E = e.properties[m];
          if (!E) {
            ct("Skipping property: Invalid property name in: " + s), u();
            continue;
          }
          var I = r.parse(m, b);
          if (!I) {
            ct("Skipping property: Invalid property definition in: " + s), u();
            continue;
          }
          y.push({
            name: m,
            val: b
          }), u();
        }
        if (v) {
          o();
          break;
        }
        r.selector(h);
        for (var A = 0; A < y.length; A++) {
          var x = y[A];
          r.css(x.name, x.val);
        }
        o();
      }
      return r;
    }, Bi.fromString = function(t) {
      var e = this;
      return e.resetToDefault(), e.appendFromString(t), e;
    };
    var Mt = {};
    (function() {
      var t = gt, e = Wt, r = Zr, a = La, n = er, i = function(Ae) {
        return "^" + Ae + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
      }, s = function(Ae) {
        var Se = t + "|\\w+|" + e + "|" + r + "|" + a + "|" + n;
        return "^" + Ae + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\s*,\\s*(" + Se + ")\\s*\\,\\s*(" + Se + ")\\)$";
      }, o = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
      Mt.types = {
        time: {
          number: !0,
          min: 0,
          units: "s|ms",
          implicitUnits: "ms"
        },
        percent: {
          number: !0,
          min: 0,
          max: 100,
          units: "%",
          implicitUnits: "%"
        },
        percentages: {
          number: !0,
          min: 0,
          max: 100,
          units: "%",
          implicitUnits: "%",
          multiple: !0
        },
        zeroOneNumber: {
          number: !0,
          min: 0,
          max: 1,
          unitless: !0
        },
        zeroOneNumbers: {
          number: !0,
          min: 0,
          max: 1,
          unitless: !0,
          multiple: !0
        },
        nOneOneNumber: {
          number: !0,
          min: -1,
          max: 1,
          unitless: !0
        },
        nonNegativeInt: {
          number: !0,
          min: 0,
          integer: !0,
          unitless: !0
        },
        nonNegativeNumber: {
          number: !0,
          min: 0,
          unitless: !0
        },
        position: {
          enums: ["parent", "origin"]
        },
        nodeSize: {
          number: !0,
          min: 0,
          enums: ["label"]
        },
        number: {
          number: !0,
          unitless: !0
        },
        numbers: {
          number: !0,
          unitless: !0,
          multiple: !0
        },
        positiveNumber: {
          number: !0,
          unitless: !0,
          min: 0,
          strictMin: !0
        },
        size: {
          number: !0,
          min: 0
        },
        bidirectionalSize: {
          number: !0
        },
        // allows negative
        bidirectionalSizeMaybePercent: {
          number: !0,
          allowPercent: !0
        },
        // allows negative
        bidirectionalSizes: {
          number: !0,
          multiple: !0
        },
        // allows negative
        sizeMaybePercent: {
          number: !0,
          min: 0,
          allowPercent: !0
        },
        axisDirection: {
          enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
        },
        paddingRelativeTo: {
          enums: ["width", "height", "average", "min", "max"]
        },
        bgWH: {
          number: !0,
          min: 0,
          allowPercent: !0,
          enums: ["auto"],
          multiple: !0
        },
        bgPos: {
          number: !0,
          allowPercent: !0,
          multiple: !0
        },
        bgRelativeTo: {
          enums: ["inner", "include-padding"],
          multiple: !0
        },
        bgRepeat: {
          enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
          multiple: !0
        },
        bgFit: {
          enums: ["none", "contain", "cover"],
          multiple: !0
        },
        bgCrossOrigin: {
          enums: ["anonymous", "use-credentials", "null"],
          multiple: !0
        },
        bgClip: {
          enums: ["none", "node"],
          multiple: !0
        },
        bgContainment: {
          enums: ["inside", "over"],
          multiple: !0
        },
        color: {
          color: !0
        },
        colors: {
          color: !0,
          multiple: !0
        },
        fill: {
          enums: ["solid", "linear-gradient", "radial-gradient"]
        },
        bool: {
          enums: ["yes", "no"]
        },
        bools: {
          enums: ["yes", "no"],
          multiple: !0
        },
        lineStyle: {
          enums: ["solid", "dotted", "dashed"]
        },
        lineCap: {
          enums: ["butt", "round", "square"]
        },
        borderStyle: {
          enums: ["solid", "dotted", "dashed", "double"]
        },
        curveStyle: {
          enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi"]
        },
        fontFamily: {
          regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
        },
        fontStyle: {
          enums: ["italic", "normal", "oblique"]
        },
        fontWeight: {
          enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        textDecoration: {
          enums: ["none", "underline", "overline", "line-through"]
        },
        textTransform: {
          enums: ["none", "uppercase", "lowercase"]
        },
        textWrap: {
          enums: ["none", "wrap", "ellipsis"]
        },
        textOverflowWrap: {
          enums: ["whitespace", "anywhere"]
        },
        textBackgroundShape: {
          enums: ["rectangle", "roundrectangle", "round-rectangle"]
        },
        nodeShape: {
          enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
        },
        overlayShape: {
          enums: ["roundrectangle", "round-rectangle", "ellipse"]
        },
        compoundIncludeLabels: {
          enums: ["include", "exclude"]
        },
        arrowShape: {
          enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
        },
        arrowFill: {
          enums: ["filled", "hollow"]
        },
        arrowWidth: {
          number: !0,
          units: "%|px|em",
          implicitUnits: "px",
          enums: ["match-line"]
        },
        display: {
          enums: ["element", "none"]
        },
        visibility: {
          enums: ["hidden", "visible"]
        },
        zCompoundDepth: {
          enums: ["bottom", "orphan", "auto", "top"]
        },
        zIndexCompare: {
          enums: ["auto", "manual"]
        },
        valign: {
          enums: ["top", "center", "bottom"]
        },
        halign: {
          enums: ["left", "center", "right"]
        },
        justification: {
          enums: ["left", "center", "right", "auto"]
        },
        text: {
          string: !0
        },
        data: {
          mapping: !0,
          regex: i("data")
        },
        layoutData: {
          mapping: !0,
          regex: i("layoutData")
        },
        scratch: {
          mapping: !0,
          regex: i("scratch")
        },
        mapData: {
          mapping: !0,
          regex: s("mapData")
        },
        mapLayoutData: {
          mapping: !0,
          regex: s("mapLayoutData")
        },
        mapScratch: {
          mapping: !0,
          regex: s("mapScratch")
        },
        fn: {
          mapping: !0,
          fn: !0
        },
        url: {
          regexes: o,
          singleRegexMatchValue: !0
        },
        urls: {
          regexes: o,
          singleRegexMatchValue: !0,
          multiple: !0
        },
        propList: {
          propList: !0
        },
        angle: {
          number: !0,
          units: "deg|rad",
          implicitUnits: "rad"
        },
        textRotation: {
          number: !0,
          units: "deg|rad",
          implicitUnits: "rad",
          enums: ["none", "autorotate"]
        },
        polygonPointList: {
          number: !0,
          multiple: !0,
          evenMultiple: !0,
          min: -1,
          max: 1,
          unitless: !0
        },
        edgeDistances: {
          enums: ["intersection", "node-position", "endpoints"]
        },
        edgeEndpoint: {
          number: !0,
          multiple: !0,
          units: "%|px|em|deg|rad",
          implicitUnits: "px",
          enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
          singleEnum: !0,
          validate: function(Ae, Se) {
            switch (Ae.length) {
              case 2:
                return Se[0] !== "deg" && Se[0] !== "rad" && Se[1] !== "deg" && Se[1] !== "rad";
              case 1:
                return j(Ae[0]) || Se[0] === "deg" || Se[0] === "rad";
              default:
                return !1;
            }
          }
        },
        easing: {
          regexes: ["^(spring)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$"],
          enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
        },
        gradientDirection: {
          enums: [
            "to-bottom",
            "to-top",
            "to-left",
            "to-right",
            "to-bottom-right",
            "to-bottom-left",
            "to-top-right",
            "to-top-left",
            "to-right-bottom",
            "to-left-bottom",
            "to-right-top",
            "to-left-top"
            // different order
          ]
        },
        boundsExpansion: {
          number: !0,
          multiple: !0,
          min: 0,
          validate: function(Ae) {
            var Se = Ae.length;
            return Se === 1 || Se === 2 || Se === 4;
          }
        }
      };
      var u = {
        zeroNonZero: function(Ae, Se) {
          return (Ae == null || Se == null) && Ae !== Se || Ae == 0 && Se != 0 ? !0 : Ae != 0 && Se == 0;
        },
        any: function(Ae, Se) {
          return Ae != Se;
        },
        emptyNonEmpty: function(Ae, Se) {
          var Ne = ke(Ae), Fe = ke(Se);
          return Ne && !Fe || !Ne && Fe;
        }
      }, l = Mt.types, f = [{
        name: "label",
        type: l.text,
        triggersBounds: u.any,
        triggersZOrder: u.emptyNonEmpty
      }, {
        name: "text-rotation",
        type: l.textRotation,
        triggersBounds: u.any
      }, {
        name: "text-margin-x",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }, {
        name: "text-margin-y",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }], h = [{
        name: "source-label",
        type: l.text,
        triggersBounds: u.any
      }, {
        name: "source-text-rotation",
        type: l.textRotation,
        triggersBounds: u.any
      }, {
        name: "source-text-margin-x",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }, {
        name: "source-text-margin-y",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }, {
        name: "source-text-offset",
        type: l.size,
        triggersBounds: u.any
      }], c = [{
        name: "target-label",
        type: l.text,
        triggersBounds: u.any
      }, {
        name: "target-text-rotation",
        type: l.textRotation,
        triggersBounds: u.any
      }, {
        name: "target-text-margin-x",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }, {
        name: "target-text-margin-y",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }, {
        name: "target-text-offset",
        type: l.size,
        triggersBounds: u.any
      }], d = [{
        name: "font-family",
        type: l.fontFamily,
        triggersBounds: u.any
      }, {
        name: "font-style",
        type: l.fontStyle,
        triggersBounds: u.any
      }, {
        name: "font-weight",
        type: l.fontWeight,
        triggersBounds: u.any
      }, {
        name: "font-size",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "text-transform",
        type: l.textTransform,
        triggersBounds: u.any
      }, {
        name: "text-wrap",
        type: l.textWrap,
        triggersBounds: u.any
      }, {
        name: "text-overflow-wrap",
        type: l.textOverflowWrap,
        triggersBounds: u.any
      }, {
        name: "text-max-width",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "text-outline-width",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "line-height",
        type: l.positiveNumber,
        triggersBounds: u.any
      }], v = [{
        name: "text-valign",
        type: l.valign,
        triggersBounds: u.any
      }, {
        name: "text-halign",
        type: l.halign,
        triggersBounds: u.any
      }, {
        name: "color",
        type: l.color
      }, {
        name: "text-outline-color",
        type: l.color
      }, {
        name: "text-outline-opacity",
        type: l.zeroOneNumber
      }, {
        name: "text-background-color",
        type: l.color
      }, {
        name: "text-background-opacity",
        type: l.zeroOneNumber
      }, {
        name: "text-background-padding",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "text-border-opacity",
        type: l.zeroOneNumber
      }, {
        name: "text-border-color",
        type: l.color
      }, {
        name: "text-border-width",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "text-border-style",
        type: l.borderStyle,
        triggersBounds: u.any
      }, {
        name: "text-background-shape",
        type: l.textBackgroundShape,
        triggersBounds: u.any
      }, {
        name: "text-justification",
        type: l.justification
      }], y = [{
        name: "events",
        type: l.bool,
        triggersZOrder: u.any
      }, {
        name: "text-events",
        type: l.bool,
        triggersZOrder: u.any
      }], p = [{
        name: "display",
        type: l.display,
        triggersZOrder: u.any,
        triggersBounds: u.any,
        triggersBoundsOfConnectedEdges: !0
      }, {
        name: "visibility",
        type: l.visibility,
        triggersZOrder: u.any
      }, {
        name: "opacity",
        type: l.zeroOneNumber,
        triggersZOrder: u.zeroNonZero
      }, {
        name: "text-opacity",
        type: l.zeroOneNumber
      }, {
        name: "min-zoomed-font-size",
        type: l.size
      }, {
        name: "z-compound-depth",
        type: l.zCompoundDepth,
        triggersZOrder: u.any
      }, {
        name: "z-index-compare",
        type: l.zIndexCompare,
        triggersZOrder: u.any
      }, {
        name: "z-index",
        type: l.number,
        triggersZOrder: u.any
      }], g = [{
        name: "overlay-padding",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "overlay-color",
        type: l.color
      }, {
        name: "overlay-opacity",
        type: l.zeroOneNumber,
        triggersBounds: u.zeroNonZero
      }, {
        name: "overlay-shape",
        type: l.overlayShape,
        triggersBounds: u.any
      }], m = [{
        name: "underlay-padding",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "underlay-color",
        type: l.color
      }, {
        name: "underlay-opacity",
        type: l.zeroOneNumber,
        triggersBounds: u.zeroNonZero
      }, {
        name: "underlay-shape",
        type: l.overlayShape,
        triggersBounds: u.any
      }], b = [{
        name: "transition-property",
        type: l.propList
      }, {
        name: "transition-duration",
        type: l.time
      }, {
        name: "transition-delay",
        type: l.time
      }, {
        name: "transition-timing-function",
        type: l.easing
      }], E = function(Ae, Se) {
        return Se.value === "label" ? -Ae.poolIndex() : Se.pfValue;
      }, I = [{
        name: "height",
        type: l.nodeSize,
        triggersBounds: u.any,
        hashOverride: E
      }, {
        name: "width",
        type: l.nodeSize,
        triggersBounds: u.any,
        hashOverride: E
      }, {
        name: "shape",
        type: l.nodeShape,
        triggersBounds: u.any
      }, {
        name: "shape-polygon-points",
        type: l.polygonPointList,
        triggersBounds: u.any
      }, {
        name: "background-color",
        type: l.color
      }, {
        name: "background-fill",
        type: l.fill
      }, {
        name: "background-opacity",
        type: l.zeroOneNumber
      }, {
        name: "background-blacken",
        type: l.nOneOneNumber
      }, {
        name: "background-gradient-stop-colors",
        type: l.colors
      }, {
        name: "background-gradient-stop-positions",
        type: l.percentages
      }, {
        name: "background-gradient-direction",
        type: l.gradientDirection
      }, {
        name: "padding",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      }, {
        name: "padding-relative-to",
        type: l.paddingRelativeTo,
        triggersBounds: u.any
      }, {
        name: "bounds-expansion",
        type: l.boundsExpansion,
        triggersBounds: u.any
      }], A = [{
        name: "border-color",
        type: l.color
      }, {
        name: "border-opacity",
        type: l.zeroOneNumber
      }, {
        name: "border-width",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "border-style",
        type: l.borderStyle
      }], x = [{
        name: "outline-color",
        type: l.color
      }, {
        name: "outline-opacity",
        type: l.zeroOneNumber
      }, {
        name: "outline-width",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "outline-style",
        type: l.borderStyle
      }, {
        name: "outline-offset",
        type: l.size,
        triggersBounds: u.any
      }], k = [{
        name: "background-image",
        type: l.urls
      }, {
        name: "background-image-crossorigin",
        type: l.bgCrossOrigin
      }, {
        name: "background-image-opacity",
        type: l.zeroOneNumbers
      }, {
        name: "background-image-containment",
        type: l.bgContainment
      }, {
        name: "background-image-smoothing",
        type: l.bools
      }, {
        name: "background-position-x",
        type: l.bgPos
      }, {
        name: "background-position-y",
        type: l.bgPos
      }, {
        name: "background-width-relative-to",
        type: l.bgRelativeTo
      }, {
        name: "background-height-relative-to",
        type: l.bgRelativeTo
      }, {
        name: "background-repeat",
        type: l.bgRepeat
      }, {
        name: "background-fit",
        type: l.bgFit
      }, {
        name: "background-clip",
        type: l.bgClip
      }, {
        name: "background-width",
        type: l.bgWH
      }, {
        name: "background-height",
        type: l.bgWH
      }, {
        name: "background-offset-x",
        type: l.bgPos
      }, {
        name: "background-offset-y",
        type: l.bgPos
      }], C = [{
        name: "position",
        type: l.position,
        triggersBounds: u.any
      }, {
        name: "compound-sizing-wrt-labels",
        type: l.compoundIncludeLabels,
        triggersBounds: u.any
      }, {
        name: "min-width",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "min-width-bias-left",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      }, {
        name: "min-width-bias-right",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      }, {
        name: "min-height",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "min-height-bias-top",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      }, {
        name: "min-height-bias-bottom",
        type: l.sizeMaybePercent,
        triggersBounds: u.any
      }], F = [{
        name: "line-style",
        type: l.lineStyle
      }, {
        name: "line-color",
        type: l.color
      }, {
        name: "line-fill",
        type: l.fill
      }, {
        name: "line-cap",
        type: l.lineCap
      }, {
        name: "line-opacity",
        type: l.zeroOneNumber
      }, {
        name: "line-dash-pattern",
        type: l.numbers
      }, {
        name: "line-dash-offset",
        type: l.number
      }, {
        name: "line-gradient-stop-colors",
        type: l.colors
      }, {
        name: "line-gradient-stop-positions",
        type: l.percentages
      }, {
        name: "curve-style",
        type: l.curveStyle,
        triggersBounds: u.any,
        triggersBoundsOfParallelBeziers: !0
      }, {
        name: "haystack-radius",
        type: l.zeroOneNumber,
        triggersBounds: u.any
      }, {
        name: "source-endpoint",
        type: l.edgeEndpoint,
        triggersBounds: u.any
      }, {
        name: "target-endpoint",
        type: l.edgeEndpoint,
        triggersBounds: u.any
      }, {
        name: "control-point-step-size",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "control-point-distances",
        type: l.bidirectionalSizes,
        triggersBounds: u.any
      }, {
        name: "control-point-weights",
        type: l.numbers,
        triggersBounds: u.any
      }, {
        name: "segment-distances",
        type: l.bidirectionalSizes,
        triggersBounds: u.any
      }, {
        name: "segment-weights",
        type: l.numbers,
        triggersBounds: u.any
      }, {
        name: "taxi-turn",
        type: l.bidirectionalSizeMaybePercent,
        triggersBounds: u.any
      }, {
        name: "taxi-turn-min-distance",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "taxi-direction",
        type: l.axisDirection,
        triggersBounds: u.any
      }, {
        name: "edge-distances",
        type: l.edgeDistances,
        triggersBounds: u.any
      }, {
        name: "arrow-scale",
        type: l.positiveNumber,
        triggersBounds: u.any
      }, {
        name: "loop-direction",
        type: l.angle,
        triggersBounds: u.any
      }, {
        name: "loop-sweep",
        type: l.angle,
        triggersBounds: u.any
      }, {
        name: "source-distance-from-node",
        type: l.size,
        triggersBounds: u.any
      }, {
        name: "target-distance-from-node",
        type: l.size,
        triggersBounds: u.any
      }], G = [{
        name: "ghost",
        type: l.bool,
        triggersBounds: u.any
      }, {
        name: "ghost-offset-x",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }, {
        name: "ghost-offset-y",
        type: l.bidirectionalSize,
        triggersBounds: u.any
      }, {
        name: "ghost-opacity",
        type: l.zeroOneNumber
      }], M = [{
        name: "selection-box-color",
        type: l.color
      }, {
        name: "selection-box-opacity",
        type: l.zeroOneNumber
      }, {
        name: "selection-box-border-color",
        type: l.color
      }, {
        name: "selection-box-border-width",
        type: l.size
      }, {
        name: "active-bg-color",
        type: l.color
      }, {
        name: "active-bg-opacity",
        type: l.zeroOneNumber
      }, {
        name: "active-bg-size",
        type: l.size
      }, {
        name: "outside-texture-bg-color",
        type: l.color
      }, {
        name: "outside-texture-bg-opacity",
        type: l.zeroOneNumber
      }], X = [];
      Mt.pieBackgroundN = 16, X.push({
        name: "pie-size",
        type: l.sizeMaybePercent
      });
      for (var B = 1; B <= Mt.pieBackgroundN; B++)
        X.push({
          name: "pie-" + B + "-background-color",
          type: l.color
        }), X.push({
          name: "pie-" + B + "-background-size",
          type: l.percent
        }), X.push({
          name: "pie-" + B + "-background-opacity",
          type: l.zeroOneNumber
        });
      var re = [], K = Mt.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
      [{
        name: "arrow-shape",
        type: l.arrowShape,
        triggersBounds: u.any
      }, {
        name: "arrow-color",
        type: l.color
      }, {
        name: "arrow-fill",
        type: l.arrowFill
      }, {
        name: "arrow-width",
        type: l.arrowWidth
      }].forEach(function(Te) {
        K.forEach(function(Ae) {
          var Se = Ae + "-" + Te.name, Ne = Te.type, Fe = Te.triggersBounds;
          re.push({
            name: Se,
            type: Ne,
            triggersBounds: Fe
          });
        });
      }, {});
      var q = Mt.properties = [].concat(y, b, p, g, m, G, v, d, f, h, c, I, A, x, k, X, C, F, re, M), ae = Mt.propertyGroups = {
        // common to all eles
        behavior: y,
        transition: b,
        visibility: p,
        overlay: g,
        underlay: m,
        ghost: G,
        // labels
        commonLabel: v,
        labelDimensions: d,
        mainLabel: f,
        sourceLabel: h,
        targetLabel: c,
        // node props
        nodeBody: I,
        nodeBorder: A,
        nodeOutline: x,
        backgroundImage: k,
        pie: X,
        compound: C,
        // edge props
        edgeLine: F,
        edgeArrow: re,
        core: M
      }, ue = Mt.propertyGroupNames = {}, be = Mt.propertyGroupKeys = Object.keys(ae);
      be.forEach(function(Te) {
        ue[Te] = ae[Te].map(function(Ae) {
          return Ae.name;
        }), ae[Te].forEach(function(Ae) {
          return Ae.groupKey = Te;
        });
      });
      var ie = Mt.aliases = [{
        name: "content",
        pointsTo: "label"
      }, {
        name: "control-point-distance",
        pointsTo: "control-point-distances"
      }, {
        name: "control-point-weight",
        pointsTo: "control-point-weights"
      }, {
        name: "edge-text-rotation",
        pointsTo: "text-rotation"
      }, {
        name: "padding-left",
        pointsTo: "padding"
      }, {
        name: "padding-right",
        pointsTo: "padding"
      }, {
        name: "padding-top",
        pointsTo: "padding"
      }, {
        name: "padding-bottom",
        pointsTo: "padding"
      }];
      Mt.propertyNames = q.map(function(Te) {
        return Te.name;
      });
      for (var ge = 0; ge < q.length; ge++) {
        var we = q[ge];
        q[we.name] = we;
      }
      for (var De = 0; De < ie.length; De++) {
        var xe = ie[De], Le = q[xe.pointsTo], se = {
          name: xe.name,
          alias: !0,
          pointsTo: Le
        };
        q.push(se), q[xe.name] = se;
      }
    })(), Mt.getDefaultProperty = function(t) {
      return this.getDefaultProperties()[t];
    }, Mt.getDefaultProperties = function() {
      var t = this._private;
      if (t.defaultProperties != null)
        return t.defaultProperties;
      for (var e = He({
        // core props
        "selection-box-color": "#ddd",
        "selection-box-opacity": 0.65,
        "selection-box-border-color": "#aaa",
        "selection-box-border-width": 1,
        "active-bg-color": "black",
        "active-bg-opacity": 0.15,
        "active-bg-size": 30,
        "outside-texture-bg-color": "#000",
        "outside-texture-bg-opacity": 0.125,
        // common node/edge props
        events: "yes",
        "text-events": "no",
        "text-valign": "top",
        "text-halign": "center",
        "text-justification": "auto",
        "line-height": 1,
        color: "#000",
        "text-outline-color": "#000",
        "text-outline-width": 0,
        "text-outline-opacity": 1,
        "text-opacity": 1,
        "text-decoration": "none",
        "text-transform": "none",
        "text-wrap": "none",
        "text-overflow-wrap": "whitespace",
        "text-max-width": 9999,
        "text-background-color": "#000",
        "text-background-opacity": 0,
        "text-background-shape": "rectangle",
        "text-background-padding": 0,
        "text-border-opacity": 0,
        "text-border-width": 0,
        "text-border-style": "solid",
        "text-border-color": "#000",
        "font-family": "Helvetica Neue, Helvetica, sans-serif",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": 16,
        "min-zoomed-font-size": 0,
        "text-rotation": "none",
        "source-text-rotation": "none",
        "target-text-rotation": "none",
        visibility: "visible",
        display: "element",
        opacity: 1,
        "z-compound-depth": "auto",
        "z-index-compare": "auto",
        "z-index": 0,
        label: "",
        "text-margin-x": 0,
        "text-margin-y": 0,
        "source-label": "",
        "source-text-offset": 0,
        "source-text-margin-x": 0,
        "source-text-margin-y": 0,
        "target-label": "",
        "target-text-offset": 0,
        "target-text-margin-x": 0,
        "target-text-margin-y": 0,
        "overlay-opacity": 0,
        "overlay-color": "#000",
        "overlay-padding": 10,
        "overlay-shape": "round-rectangle",
        "underlay-opacity": 0,
        "underlay-color": "#000",
        "underlay-padding": 10,
        "underlay-shape": "round-rectangle",
        "transition-property": "none",
        "transition-duration": 0,
        "transition-delay": 0,
        "transition-timing-function": "linear",
        // node props
        "background-blacken": 0,
        "background-color": "#999",
        "background-fill": "solid",
        "background-opacity": 1,
        "background-image": "none",
        "background-image-crossorigin": "anonymous",
        "background-image-opacity": 1,
        "background-image-containment": "inside",
        "background-image-smoothing": "yes",
        "background-position-x": "50%",
        "background-position-y": "50%",
        "background-offset-x": 0,
        "background-offset-y": 0,
        "background-width-relative-to": "include-padding",
        "background-height-relative-to": "include-padding",
        "background-repeat": "no-repeat",
        "background-fit": "none",
        "background-clip": "node",
        "background-width": "auto",
        "background-height": "auto",
        "border-color": "#000",
        "border-opacity": 1,
        "border-width": 0,
        "border-style": "solid",
        "outline-color": "#999",
        "outline-opacity": 1,
        "outline-width": 0,
        "outline-offset": 0,
        "outline-style": "solid",
        height: 30,
        width: 30,
        shape: "ellipse",
        "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
        "bounds-expansion": 0,
        // node gradient
        "background-gradient-direction": "to-bottom",
        "background-gradient-stop-colors": "#999",
        "background-gradient-stop-positions": "0%",
        // ghost props
        ghost: "no",
        "ghost-offset-y": 0,
        "ghost-offset-x": 0,
        "ghost-opacity": 0,
        // compound props
        padding: 0,
        "padding-relative-to": "width",
        position: "origin",
        "compound-sizing-wrt-labels": "include",
        "min-width": 0,
        "min-width-bias-left": 0,
        "min-width-bias-right": 0,
        "min-height": 0,
        "min-height-bias-top": 0,
        "min-height-bias-bottom": 0
      }, {
        // node pie bg
        "pie-size": "100%"
      }, [{
        name: "pie-{{i}}-background-color",
        value: "black"
      }, {
        name: "pie-{{i}}-background-size",
        value: "0%"
      }, {
        name: "pie-{{i}}-background-opacity",
        value: 1
      }].reduce(function(u, l) {
        for (var f = 1; f <= Mt.pieBackgroundN; f++) {
          var h = l.name.replace("{{i}}", f), c = l.value;
          u[h] = c;
        }
        return u;
      }, {}), {
        // edge props
        "line-style": "solid",
        "line-color": "#999",
        "line-fill": "solid",
        "line-cap": "butt",
        "line-opacity": 1,
        "line-gradient-stop-colors": "#999",
        "line-gradient-stop-positions": "0%",
        "control-point-step-size": 40,
        "control-point-weights": 0.5,
        "segment-weights": 0.5,
        "segment-distances": 20,
        "taxi-turn": "50%",
        "taxi-turn-min-distance": 10,
        "taxi-direction": "auto",
        "edge-distances": "intersection",
        "curve-style": "haystack",
        "haystack-radius": 0,
        "arrow-scale": 1,
        "loop-direction": "-45deg",
        "loop-sweep": "-90deg",
        "source-distance-from-node": 0,
        "target-distance-from-node": 0,
        "source-endpoint": "outside-to-node",
        "target-endpoint": "outside-to-node",
        "line-dash-pattern": [6, 3],
        "line-dash-offset": 0
      }, [{
        name: "arrow-shape",
        value: "none"
      }, {
        name: "arrow-color",
        value: "#999"
      }, {
        name: "arrow-fill",
        value: "filled"
      }, {
        name: "arrow-width",
        value: 1
      }].reduce(function(u, l) {
        return Mt.arrowPrefixes.forEach(function(f) {
          var h = f + "-" + l.name, c = l.value;
          u[h] = c;
        }), u;
      }, {})), r = {}, a = 0; a < this.properties.length; a++) {
        var n = this.properties[a];
        if (!n.pointsTo) {
          var i = n.name, s = e[i], o = this.parse(i, s);
          r[i] = o;
        }
      }
      return t.defaultProperties = r, t.defaultProperties;
    }, Mt.addDefaultStylesheet = function() {
      this.selector(":parent").css({
        shape: "rectangle",
        padding: 10,
        "background-color": "#eee",
        "border-color": "#ccc",
        "border-width": 1
      }).selector("edge").css({
        width: 3
      }).selector(":loop").css({
        "curve-style": "bezier"
      }).selector("edge:compound").css({
        "curve-style": "bezier",
        "source-endpoint": "outside-to-line",
        "target-endpoint": "outside-to-line"
      }).selector(":selected").css({
        "background-color": "#0169D9",
        "line-color": "#0169D9",
        "source-arrow-color": "#0169D9",
        "target-arrow-color": "#0169D9",
        "mid-source-arrow-color": "#0169D9",
        "mid-target-arrow-color": "#0169D9"
      }).selector(":parent:selected").css({
        "background-color": "#CCE1F9",
        "border-color": "#aec8e5"
      }).selector(":active").css({
        "overlay-color": "black",
        "overlay-padding": 10,
        "overlay-opacity": 0.25
      }), this.defaultLength = this.length;
    };
    var Hn = {};
    Hn.parse = function(t, e, r, a) {
      var n = this;
      if (Y(e))
        return n.parseImplWarn(t, e, r, a);
      var i = a === "mapping" || a === !0 || a === !1 || a == null ? "dontcare" : a, s = r ? "t" : "f", o = "" + e, u = vs(t, o, s, i), l = n.propCache = n.propCache || [], f;
      return (f = l[u]) || (f = l[u] = n.parseImplWarn(t, e, r, a)), (r || a === "mapping") && (f = lr(f), f && (f.value = lr(f.value))), f;
    }, Hn.parseImplWarn = function(t, e, r, a) {
      var n = this.parseImpl(t, e, r, a);
      return !n && e != null && ct("The style property `".concat(t, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && ct("The style value of `label` is deprecated for `" + n.name + "`"), n;
    }, Hn.parseImpl = function(t, e, r, a) {
      var n = this;
      t = tt(t);
      var i = n.properties[t], s = e, o = n.types;
      if (!i || e === void 0)
        return null;
      i.alias && (i = i.pointsTo, t = i.name);
      var u = j(e);
      u && (e = e.trim());
      var l = i.type;
      if (!l)
        return null;
      if (r && (e === "" || e === null))
        return {
          name: t,
          value: e,
          bypass: !0,
          deleteBypass: !0
        };
      if (Y(e))
        return {
          name: t,
          value: e,
          strValue: "fn",
          mapped: o.fn,
          bypass: r
        };
      var f, h;
      if (!(!u || a || e.length < 7 || e[1] !== "a")) {
        if (e.length >= 7 && e[0] === "d" && (f = new RegExp(o.data.regex).exec(e))) {
          if (r)
            return !1;
          var c = o.data;
          return {
            name: t,
            value: f,
            strValue: "" + e,
            mapped: c,
            field: f[1],
            bypass: r
          };
        } else if (e.length >= 10 && e[0] === "m" && (h = new RegExp(o.mapData.regex).exec(e))) {
          if (r || l.multiple)
            return !1;
          var d = o.mapData;
          if (!(l.color || l.number))
            return !1;
          var v = this.parse(t, h[4]);
          if (!v || v.mapped)
            return !1;
          var y = this.parse(t, h[5]);
          if (!y || y.mapped)
            return !1;
          if (v.pfValue === y.pfValue || v.strValue === y.strValue)
            return ct("`" + t + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + t + ": " + v.strValue + "`"), this.parse(t, v.strValue);
          if (l.color) {
            var p = v.value, g = y.value, m = p[0] === g[0] && p[1] === g[1] && p[2] === g[2] && // optional alpha
            (p[3] === g[3] || (p[3] == null || p[3] === 1) && (g[3] == null || g[3] === 1));
            if (m)
              return !1;
          }
          return {
            name: t,
            value: h,
            strValue: "" + e,
            mapped: d,
            field: h[1],
            fieldMin: parseFloat(h[2]),
            // min & max are numeric
            fieldMax: parseFloat(h[3]),
            valueMin: v.value,
            valueMax: y.value,
            bypass: r
          };
        }
      }
      if (l.multiple && a !== "multiple") {
        var b;
        if (u ? b = e.split(/\s+/) : te(e) ? b = e : b = [e], l.evenMultiple && b.length % 2 !== 0)
          return null;
        for (var E = [], I = [], A = [], x = "", k = !1, C = 0; C < b.length; C++) {
          var F = n.parse(t, b[C], r, "multiple");
          k = k || j(F.value), E.push(F.value), A.push(F.pfValue != null ? F.pfValue : F.value), I.push(F.units), x += (C > 0 ? " " : "") + F.strValue;
        }
        return l.validate && !l.validate(E, I) ? null : l.singleEnum && k ? E.length === 1 && j(E[0]) ? {
          name: t,
          value: E[0],
          strValue: E[0],
          bypass: r
        } : null : {
          name: t,
          value: E,
          pfValue: A,
          strValue: x,
          bypass: r,
          units: I
        };
      }
      var G = function() {
        for (var Ae = 0; Ae < l.enums.length; Ae++) {
          var Se = l.enums[Ae];
          if (Se === e)
            return {
              name: t,
              value: e,
              strValue: "" + e,
              bypass: r
            };
        }
        return null;
      };
      if (l.number) {
        var M, X = "px";
        if (l.units && (M = l.units), l.implicitUnits && (X = l.implicitUnits), !l.unitless)
          if (u) {
            var B = "px|em" + (l.allowPercent ? "|\\%" : "");
            M && (B = M);
            var re = e.match("^(" + gt + ")(" + B + ")?$");
            re && (e = re[1], M = re[2] || X);
          } else
            (!M || l.implicitUnits) && (M = X);
        if (e = parseFloat(e), isNaN(e) && l.enums === void 0)
          return null;
        if (isNaN(e) && l.enums !== void 0)
          return e = s, G();
        if (l.integer && !W(e) || l.min !== void 0 && (e < l.min || l.strictMin && e === l.min) || l.max !== void 0 && (e > l.max || l.strictMax && e === l.max))
          return null;
        var K = {
          name: t,
          value: e,
          strValue: "" + e + (M || ""),
          units: M,
          bypass: r
        };
        return l.unitless || M !== "px" && M !== "em" ? K.pfValue = e : K.pfValue = M === "px" || !M ? e : this.getEmSizeInPixels() * e, (M === "ms" || M === "s") && (K.pfValue = M === "ms" ? e : 1e3 * e), (M === "deg" || M === "rad") && (K.pfValue = M === "rad" ? e : Cf(e)), M === "%" && (K.pfValue = e / 100), K;
      } else if (l.propList) {
        var q = [], ae = "" + e;
        if (ae !== "none") {
          for (var ue = ae.split(/\s*,\s*|\s+/), be = 0; be < ue.length; be++) {
            var ie = ue[be].trim();
            n.properties[ie] ? q.push(ie) : ct("`" + ie + "` is not a valid property name");
          }
          if (q.length === 0)
            return null;
        }
        return {
          name: t,
          value: q,
          strValue: q.length === 0 ? "none" : q.join(" "),
          bypass: r
        };
      } else if (l.color) {
        var ge = su(e);
        return ge ? {
          name: t,
          value: ge,
          pfValue: ge,
          strValue: "rgb(" + ge[0] + "," + ge[1] + "," + ge[2] + ")",
          // n.b. no spaces b/c of multiple support
          bypass: r
        } : null;
      } else if (l.regex || l.regexes) {
        if (l.enums) {
          var we = G();
          if (we)
            return we;
        }
        for (var De = l.regexes ? l.regexes : [l.regex], xe = 0; xe < De.length; xe++) {
          var Le = new RegExp(De[xe]), se = Le.exec(e);
          if (se)
            return {
              name: t,
              value: l.singleRegexMatchValue ? se[1] : se,
              strValue: "" + e,
              bypass: r
            };
        }
        return null;
      } else
        return l.string ? {
          name: t,
          value: "" + e,
          strValue: "" + e,
          bypass: r
        } : l.enums ? G() : null;
    };
    var Gt = function t(e) {
      if (!(this instanceof t))
        return new t(e);
      if (!Ye(e)) {
        Tt("A style must have a core reference");
        return;
      }
      this._private = {
        cy: e,
        coreStyle: {}
      }, this.length = 0, this.resetToDefault();
    }, zt = Gt.prototype;
    zt.instanceString = function() {
      return "style";
    }, zt.clear = function() {
      for (var t = this._private, e = t.cy, r = e.elements(), a = 0; a < this.length; a++)
        this[a] = void 0;
      return this.length = 0, t.contextStyles = {}, t.propDiffs = {}, this.cleanElements(r, !0), r.forEach(function(n) {
        var i = n[0]._private;
        i.styleDirty = !0, i.appliedInitStyle = !1;
      }), this;
    }, zt.resetToDefault = function() {
      return this.clear(), this.addDefaultStylesheet(), this;
    }, zt.core = function(t) {
      return this._private.coreStyle[t] || this.getDefaultProperty(t);
    }, zt.selector = function(t) {
      var e = t === "core" ? null : new Lr(t), r = this.length++;
      return this[r] = {
        selector: e,
        properties: [],
        mappedProperties: [],
        index: r
      }, this;
    }, zt.css = function() {
      var t = this, e = arguments;
      if (e.length === 1)
        for (var r = e[0], a = 0; a < t.properties.length; a++) {
          var n = t.properties[a], i = r[n.name];
          i === void 0 && (i = r[yt(n.name)]), i !== void 0 && this.cssRule(n.name, i);
        }
      else
        e.length === 2 && this.cssRule(e[0], e[1]);
      return this;
    }, zt.style = zt.css, zt.cssRule = function(t, e) {
      var r = this.parse(t, e);
      if (r) {
        var a = this.length - 1;
        this[a].properties.push(r), this[a].properties[r.name] = r, r.name.match(/pie-(\d+)-background-size/) && r.value && (this._private.hasPie = !0), r.mapped && this[a].mappedProperties.push(r);
        var n = !this[a].selector;
        n && (this._private.coreStyle[r.name] = r);
      }
      return this;
    }, zt.append = function(t) {
      return at(t) ? t.appendToStyle(this) : te(t) ? this.appendFromJson(t) : j(t) && this.appendFromString(t), this;
    }, Gt.fromJson = function(t, e) {
      var r = new Gt(t);
      return r.fromJson(e), r;
    }, Gt.fromString = function(t, e) {
      return new Gt(t).fromString(e);
    }, [Ft, Ka, Pi, fr, Yn, Bi, Mt, Hn].forEach(function(t) {
      He(zt, t);
    }), Gt.types = zt.types, Gt.properties = zt.properties, Gt.propertyGroups = zt.propertyGroups, Gt.propertyGroupNames = zt.propertyGroupNames, Gt.propertyGroupKeys = zt.propertyGroupKeys;
    var Yd = {
      style: function(e) {
        if (e) {
          var r = this.setStyle(e);
          r.update();
        }
        return this._private.style;
      },
      setStyle: function(e) {
        var r = this._private;
        return at(e) ? r.style = e.generateStyle(this) : te(e) ? r.style = Gt.fromJson(this, e) : j(e) ? r.style = Gt.fromString(this, e) : r.style = Gt(this), r.style;
      },
      // e.g. cy.data() changed => recalc ele mappers
      updateStyle: function() {
        this.mutableElements().updateStyle();
      }
    }, Hd = "single", $r = {
      autolock: function(e) {
        if (e !== void 0)
          this._private.autolock = !!e;
        else
          return this._private.autolock;
        return this;
      },
      autoungrabify: function(e) {
        if (e !== void 0)
          this._private.autoungrabify = !!e;
        else
          return this._private.autoungrabify;
        return this;
      },
      autounselectify: function(e) {
        if (e !== void 0)
          this._private.autounselectify = !!e;
        else
          return this._private.autounselectify;
        return this;
      },
      selectionType: function(e) {
        var r = this._private;
        if (r.selectionType == null && (r.selectionType = Hd), e !== void 0)
          (e === "additive" || e === "single") && (r.selectionType = e);
        else
          return r.selectionType;
        return this;
      },
      panningEnabled: function(e) {
        if (e !== void 0)
          this._private.panningEnabled = !!e;
        else
          return this._private.panningEnabled;
        return this;
      },
      userPanningEnabled: function(e) {
        if (e !== void 0)
          this._private.userPanningEnabled = !!e;
        else
          return this._private.userPanningEnabled;
        return this;
      },
      zoomingEnabled: function(e) {
        if (e !== void 0)
          this._private.zoomingEnabled = !!e;
        else
          return this._private.zoomingEnabled;
        return this;
      },
      userZoomingEnabled: function(e) {
        if (e !== void 0)
          this._private.userZoomingEnabled = !!e;
        else
          return this._private.userZoomingEnabled;
        return this;
      },
      boxSelectionEnabled: function(e) {
        if (e !== void 0)
          this._private.boxSelectionEnabled = !!e;
        else
          return this._private.boxSelectionEnabled;
        return this;
      },
      pan: function() {
        var e = arguments, r = this._private.pan, a, n, i, s, o;
        switch (e.length) {
          case 0:
            return r;
          case 1:
            if (j(e[0]))
              return a = e[0], r[a];
            if (S(e[0])) {
              if (!this._private.panningEnabled)
                return this;
              i = e[0], s = i.x, o = i.y, R(s) && (r.x = s), R(o) && (r.y = o), this.emit("pan viewport");
            }
            break;
          case 2:
            if (!this._private.panningEnabled)
              return this;
            a = e[0], n = e[1], (a === "x" || a === "y") && R(n) && (r[a] = n), this.emit("pan viewport");
            break;
        }
        return this.notify("viewport"), this;
      },
      panBy: function(e, r) {
        var a = arguments, n = this._private.pan, i, s, o, u, l;
        if (!this._private.panningEnabled)
          return this;
        switch (a.length) {
          case 1:
            S(e) && (o = a[0], u = o.x, l = o.y, R(u) && (n.x += u), R(l) && (n.y += l), this.emit("pan viewport"));
            break;
          case 2:
            i = e, s = r, (i === "x" || i === "y") && R(s) && (n[i] += s), this.emit("pan viewport");
            break;
        }
        return this.notify("viewport"), this;
      },
      fit: function(e, r) {
        var a = this.getFitViewport(e, r);
        if (a) {
          var n = this._private;
          n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
        }
        return this;
      },
      getFitViewport: function(e, r) {
        if (R(e) && r === void 0 && (r = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
          var a;
          if (j(e)) {
            var n = e;
            e = this.$(n);
          } else if (Ze(e)) {
            var i = e;
            a = {
              x1: i.x1,
              y1: i.y1,
              x2: i.x2,
              y2: i.y2
            }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
          } else
            pe(e) || (e = this.mutableElements());
          if (!(pe(e) && e.empty())) {
            a = a || e.boundingBox();
            var s = this.width(), o = this.height(), u;
            if (r = R(r) ? r : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
              u = Math.min((s - 2 * r) / a.w, (o - 2 * r) / a.h), u = u > this._private.maxZoom ? this._private.maxZoom : u, u = u < this._private.minZoom ? this._private.minZoom : u;
              var l = {
                // now pan to middle
                x: (s - u * (a.x1 + a.x2)) / 2,
                y: (o - u * (a.y1 + a.y2)) / 2
              };
              return {
                zoom: u,
                pan: l
              };
            }
          }
        }
      },
      zoomRange: function(e, r) {
        var a = this._private;
        if (r == null) {
          var n = e;
          e = n.min, r = n.max;
        }
        return R(e) && R(r) && e <= r ? (a.minZoom = e, a.maxZoom = r) : R(e) && r === void 0 && e <= a.maxZoom ? a.minZoom = e : R(r) && e === void 0 && r >= a.minZoom && (a.maxZoom = r), this;
      },
      minZoom: function(e) {
        return e === void 0 ? this._private.minZoom : this.zoomRange({
          min: e
        });
      },
      maxZoom: function(e) {
        return e === void 0 ? this._private.maxZoom : this.zoomRange({
          max: e
        });
      },
      getZoomedViewport: function(e) {
        var r = this._private, a = r.pan, n = r.zoom, i, s, o = !1;
        if (r.zoomingEnabled || (o = !0), R(e) ? s = e : S(e) && (s = e.level, e.position != null ? i = gn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !r.panningEnabled && (o = !0)), s = s > r.maxZoom ? r.maxZoom : s, s = s < r.minZoom ? r.minZoom : s, o || !R(s) || s === n || i != null && (!R(i.x) || !R(i.y)))
          return null;
        if (i != null) {
          var u = a, l = n, f = s, h = {
            x: -f / l * (i.x - u.x) + i.x,
            y: -f / l * (i.y - u.y) + i.y
          };
          return {
            zoomed: !0,
            panned: !0,
            zoom: f,
            pan: h
          };
        } else
          return {
            zoomed: !0,
            panned: !1,
            zoom: s,
            pan: a
          };
      },
      zoom: function(e) {
        if (e === void 0)
          return this._private.zoom;
        var r = this.getZoomedViewport(e), a = this._private;
        return r == null || !r.zoomed ? this : (a.zoom = r.zoom, r.panned && (a.pan.x = r.pan.x, a.pan.y = r.pan.y), this.emit("zoom" + (r.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
      },
      viewport: function(e) {
        var r = this._private, a = !0, n = !0, i = [], s = !1, o = !1;
        if (!e)
          return this;
        if (R(e.zoom) || (a = !1), S(e.pan) || (n = !1), !a && !n)
          return this;
        if (a) {
          var u = e.zoom;
          u < r.minZoom || u > r.maxZoom || !r.zoomingEnabled ? s = !0 : (r.zoom = u, i.push("zoom"));
        }
        if (n && (!s || !e.cancelOnFailedZoom) && r.panningEnabled) {
          var l = e.pan;
          R(l.x) && (r.pan.x = l.x, o = !1), R(l.y) && (r.pan.y = l.y, o = !1), o || i.push("pan");
        }
        return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
      },
      center: function(e) {
        var r = this.getCenterPan(e);
        return r && (this._private.pan = r, this.emit("pan viewport"), this.notify("viewport")), this;
      },
      getCenterPan: function(e, r) {
        if (this._private.panningEnabled) {
          if (j(e)) {
            var a = e;
            e = this.mutableElements().filter(a);
          } else
            pe(e) || (e = this.mutableElements());
          if (e.length !== 0) {
            var n = e.boundingBox(), i = this.width(), s = this.height();
            r = r === void 0 ? this._private.zoom : r;
            var o = {
              // middle
              x: (i - r * (n.x1 + n.x2)) / 2,
              y: (s - r * (n.y1 + n.y2)) / 2
            };
            return o;
          }
        }
      },
      reset: function() {
        return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
          pan: {
            x: 0,
            y: 0
          },
          zoom: 1
        }), this);
      },
      invalidateSize: function() {
        this._private.sizeCache = null;
      },
      size: function() {
        var e = this._private, r = e.container, a = this;
        return e.sizeCache = e.sizeCache || (r ? function() {
          var n = a.window().getComputedStyle(r), i = function(o) {
            return parseFloat(n.getPropertyValue(o));
          };
          return {
            width: r.clientWidth - i("padding-left") - i("padding-right"),
            height: r.clientHeight - i("padding-top") - i("padding-bottom")
          };
        }() : {
          // fallback if no container (not 0 b/c can be used for dividing etc)
          width: 1,
          height: 1
        });
      },
      width: function() {
        return this.size().width;
      },
      height: function() {
        return this.size().height;
      },
      extent: function() {
        var e = this._private.pan, r = this._private.zoom, a = this.renderedExtent(), n = {
          x1: (a.x1 - e.x) / r,
          x2: (a.x2 - e.x) / r,
          y1: (a.y1 - e.y) / r,
          y2: (a.y2 - e.y) / r
        };
        return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
      },
      renderedExtent: function() {
        var e = this.width(), r = this.height();
        return {
          x1: 0,
          y1: 0,
          x2: e,
          y2: r,
          w: e,
          h: r
        };
      },
      multiClickDebounceTime: function(e) {
        if (e)
          this._private.multiClickDebounceTime = e;
        else
          return this._private.multiClickDebounceTime;
        return this;
      }
    };
    $r.centre = $r.center, $r.autolockNodes = $r.autolock, $r.autoungrabifyNodes = $r.autoungrabify;
    var Za = {
      data: vt.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "data",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
      }),
      removeData: vt.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
      }),
      scratch: vt.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "scratch",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
      }),
      removeScratch: vt.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
      })
    };
    Za.attr = Za.data, Za.removeAttr = Za.removeData;
    var Qa = function(e) {
      var r = this;
      e = He({}, e);
      var a = e.container;
      a && !ce(a) && ce(a[0]) && (a = a[0]);
      var n = a ? a._cyreg : null;
      n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
      var i = n.readies = n.readies || [];
      a && (a._cyreg = n), n.cy = r;
      var s = D !== void 0 && a !== void 0 && !e.headless, o = e;
      o.layout = He({
        name: s ? "grid" : "null"
      }, o.layout), o.renderer = He({
        name: s ? "canvas" : "null"
      }, o.renderer);
      var u = function(v, y, p) {
        return y !== void 0 ? y : p !== void 0 ? p : v;
      }, l = this._private = {
        container: a,
        // html dom ele container
        ready: !1,
        // whether ready has been triggered
        options: o,
        // cached options
        elements: new Nt(this),
        // elements in the graph
        listeners: [],
        // list of listeners
        aniEles: new Nt(this),
        // elements being animated
        data: o.data || {},
        // data for the core
        scratch: {},
        // scratch object for core
        layout: null,
        renderer: null,
        destroyed: !1,
        // whether destroy was called
        notificationsEnabled: !0,
        // whether notifications are sent to the renderer
        minZoom: 1e-50,
        maxZoom: 1e50,
        zoomingEnabled: u(!0, o.zoomingEnabled),
        userZoomingEnabled: u(!0, o.userZoomingEnabled),
        panningEnabled: u(!0, o.panningEnabled),
        userPanningEnabled: u(!0, o.userPanningEnabled),
        boxSelectionEnabled: u(!0, o.boxSelectionEnabled),
        autolock: u(!1, o.autolock, o.autolockNodes),
        autoungrabify: u(!1, o.autoungrabify, o.autoungrabifyNodes),
        autounselectify: u(!1, o.autounselectify),
        styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
        zoom: R(o.zoom) ? o.zoom : 1,
        pan: {
          x: S(o.pan) && R(o.pan.x) ? o.pan.x : 0,
          y: S(o.pan) && R(o.pan.y) ? o.pan.y : 0
        },
        animation: {
          // object for currently-running animations
          current: [],
          queue: []
        },
        hasCompoundNodes: !1,
        multiClickDebounceTime: u(250, o.multiClickDebounceTime)
      };
      this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
        min: o.minZoom,
        max: o.maxZoom
      });
      var f = function(v, y) {
        var p = v.some(nt);
        if (p)
          return sa.all(v).then(y);
        y(v);
      };
      l.styleEnabled && r.setStyle([]);
      var h = He({}, o, o.renderer);
      r.initRenderer(h);
      var c = function(v, y, p) {
        r.notifications(!1);
        var g = r.mutableElements();
        g.length > 0 && g.remove(), v != null && (S(v) || te(v)) && r.add(v), r.one("layoutready", function(b) {
          r.notifications(!0), r.emit(b), r.one("load", y), r.emitAndNotify("load");
        }).one("layoutstop", function() {
          r.one("done", p), r.emit("done");
        });
        var m = He({}, r._private.options.layout);
        m.eles = r.elements(), r.layout(m).run();
      };
      f([o.style, o.elements], function(d) {
        var v = d[0], y = d[1];
        l.styleEnabled && r.style().append(v), c(y, function() {
          r.startAnimationLoop(), l.ready = !0, Y(o.ready) && r.on("ready", o.ready);
          for (var p = 0; p < i.length; p++) {
            var g = i[p];
            r.on("ready", g);
          }
          n && (n.readies = []), r.emit("ready");
        }, o.done);
      });
    }, Xn = Qa.prototype;
    He(Xn, {
      instanceString: function() {
        return "core";
      },
      isReady: function() {
        return this._private.ready;
      },
      destroyed: function() {
        return this._private.destroyed;
      },
      ready: function(e) {
        return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
      },
      destroy: function() {
        var e = this;
        if (!e.destroyed())
          return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e;
      },
      hasElementWithId: function(e) {
        return this._private.elements.hasElementWithId(e);
      },
      getElementById: function(e) {
        return this._private.elements.getElementById(e);
      },
      hasCompoundNodes: function() {
        return this._private.hasCompoundNodes;
      },
      headless: function() {
        return this._private.renderer.isHeadless();
      },
      styleEnabled: function() {
        return this._private.styleEnabled;
      },
      addToPool: function(e) {
        return this._private.elements.merge(e), this;
      },
      removeFromPool: function(e) {
        return this._private.elements.unmerge(e), this;
      },
      container: function() {
        return this._private.container || null;
      },
      window: function() {
        var e = this._private.container;
        if (e == null)
          return D;
        var r = this._private.container.ownerDocument;
        return r === void 0 || r == null ? D : r.defaultView || D;
      },
      mount: function(e) {
        if (e != null) {
          var r = this, a = r._private, n = a.options;
          return !ce(e) && ce(e[0]) && (e = e[0]), r.stopAnimationLoop(), r.destroyRenderer(), a.container = e, a.styleEnabled = !0, r.invalidateSize(), r.initRenderer(He({}, n, n.renderer, {
            // allow custom renderer name to be re-used, otherwise use canvas
            name: n.renderer.name === "null" ? "canvas" : n.renderer.name
          })), r.startAnimationLoop(), r.style(n.style), r.emit("mount"), r;
        }
      },
      unmount: function() {
        var e = this;
        return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
          name: "null"
        }), e.emit("unmount"), e;
      },
      options: function() {
        return lr(this._private.options);
      },
      json: function(e) {
        var r = this, a = r._private, n = r.mutableElements(), i = function(E) {
          return r.getElementById(E.id());
        };
        if (S(e)) {
          if (r.startBatch(), e.elements) {
            var s = {}, o = function(E, I) {
              for (var A = [], x = [], k = 0; k < E.length; k++) {
                var C = E[k];
                if (!C.data.id) {
                  ct("cy.json() cannot handle elements without an ID attribute");
                  continue;
                }
                var F = "" + C.data.id, G = r.getElementById(F);
                s[F] = !0, G.length !== 0 ? x.push({
                  ele: G,
                  json: C
                }) : (I && (C.group = I), A.push(C));
              }
              r.add(A);
              for (var M = 0; M < x.length; M++) {
                var X = x[M], B = X.ele, re = X.json;
                B.json(re);
              }
            };
            if (te(e.elements))
              o(e.elements);
            else
              for (var u = ["nodes", "edges"], l = 0; l < u.length; l++) {
                var f = u[l], h = e.elements[f];
                te(h) && o(h, f);
              }
            var c = r.collection();
            n.filter(function(b) {
              return !s[b.id()];
            }).forEach(function(b) {
              b.isParent() ? c.merge(b) : b.remove();
            }), c.forEach(function(b) {
              return b.children().move({
                parent: null
              });
            }), c.forEach(function(b) {
              return i(b).remove();
            });
          }
          e.style && r.style(e.style), e.zoom != null && e.zoom !== a.zoom && r.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && r.pan(e.pan), e.data && r.data(e.data);
          for (var d = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], v = 0; v < d.length; v++) {
            var y = d[v];
            e[y] != null && r[y](e[y]);
          }
          return r.endBatch(), this;
        } else {
          var p = !!e, g = {};
          p ? g.elements = this.elements().map(function(b) {
            return b.json();
          }) : (g.elements = {}, n.forEach(function(b) {
            var E = b.group();
            g.elements[E] || (g.elements[E] = []), g.elements[E].push(b.json());
          })), this._private.styleEnabled && (g.style = r.style().json()), g.data = lr(r.data());
          var m = a.options;
          return g.zoomingEnabled = a.zoomingEnabled, g.userZoomingEnabled = a.userZoomingEnabled, g.zoom = a.zoom, g.minZoom = a.minZoom, g.maxZoom = a.maxZoom, g.panningEnabled = a.panningEnabled, g.userPanningEnabled = a.userPanningEnabled, g.pan = lr(a.pan), g.boxSelectionEnabled = a.boxSelectionEnabled, g.renderer = lr(m.renderer), g.hideEdgesOnViewport = m.hideEdgesOnViewport, g.textureOnViewport = m.textureOnViewport, g.wheelSensitivity = m.wheelSensitivity, g.motionBlur = m.motionBlur, g.multiClickDebounceTime = m.multiClickDebounceTime, g;
        }
      }
    }), Xn.$id = Xn.getElementById, [kd, zd, Xo, Ri, _n, $d, ki, Un, Yd, $r, Za].forEach(function(t) {
      He(Xn, t);
    });
    var Xd = {
      fit: !0,
      // whether to fit the viewport to the graph
      directed: !1,
      // whether the tree is directed downwards (or edges can point in any direction if false)
      padding: 30,
      // padding on fit
      circle: !1,
      // put depths in concentric circles if true, put depths top down if false
      grid: !1,
      // whether to create an even grid into which the DAG is placed (circle:false only)
      spacingFactor: 1.75,
      // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
      boundingBox: void 0,
      // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: !0,
      // prevents node overlap, may overflow boundingBox if not enough space
      nodeDimensionsIncludeLabels: !1,
      // Excludes the label when calculating node bounding boxes for the layout algorithm
      roots: void 0,
      // the roots of the trees
      depthSort: void 0,
      // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
      animate: !1,
      // whether to transition the node positions
      animationDuration: 500,
      // duration of animation in ms if enabled
      animationEasing: void 0,
      // easing of animation if enabled,
      animateFilter: function(e, r) {
        return !0;
      },
      // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: void 0,
      // callback on layoutready
      stop: void 0,
      // callback on layoutstop
      transform: function(e, r) {
        return r;
      }
      // transform a given node position. Useful for changing flow direction in discrete layouts
    }, qd = {
      maximal: !1,
      // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only); setting acyclic to true sets maximal to true also
      acyclic: !1
      // whether the tree is acyclic and thus a node could be shifted (due to the maximal option) multiple times without causing an infinite loop; setting to true sets maximal to true also; if you are uncertain whether a tree is acyclic, set to false to avoid potential infinite loops
    }, ya = function(e) {
      return e.scratch("breadthfirst");
    }, qo = function(e, r) {
      return e.scratch("breadthfirst", r);
    };
    function Wo(t) {
      this.options = He({}, Xd, qd, t);
    }
    Wo.prototype.run = function() {
      var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().filter(function(Ie) {
        return !Ie.isParent();
      }), i = a, s = e.directed, o = e.acyclic || e.maximal || e.maximalAdjustments > 0, u = Yt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: r.width(),
        h: r.height()
      }), l;
      if (pe(e.roots))
        l = e.roots;
      else if (te(e.roots)) {
        for (var f = [], h = 0; h < e.roots.length; h++) {
          var c = e.roots[h], d = r.getElementById(c);
          f.push(d);
        }
        l = r.collection(f);
      } else if (j(e.roots))
        l = r.$(e.roots);
      else if (s)
        l = n.roots();
      else {
        var v = a.components();
        l = r.collection();
        for (var y = function(Re) {
          var $e = v[Re], ze = $e.maxDegree(!1), Be = $e.filter(function(_e) {
            return _e.degree(!1) === ze;
          });
          l = l.add(Be);
        }, p = 0; p < v.length; p++)
          y(p);
      }
      var g = [], m = {}, b = function(Re, $e) {
        g[$e] == null && (g[$e] = []);
        var ze = g[$e].length;
        g[$e].push(Re), qo(Re, {
          index: ze,
          depth: $e
        });
      }, E = function(Re, $e) {
        var ze = ya(Re), Be = ze.depth, _e = ze.index;
        g[Be][_e] = null, b(Re, $e);
      };
      i.bfs({
        roots: l,
        directed: e.directed,
        visit: function(Re, $e, ze, Be, _e) {
          var rt = Re[0], je = rt.id();
          b(rt, _e), m[je] = !0;
        }
      });
      for (var I = [], A = 0; A < n.length; A++) {
        var x = n[A];
        m[x.id()] || I.push(x);
      }
      var k = function(Re) {
        for (var $e = g[Re], ze = 0; ze < $e.length; ze++) {
          var Be = $e[ze];
          if (Be == null) {
            $e.splice(ze, 1), ze--;
            continue;
          }
          qo(Be, {
            depth: Re,
            index: ze
          });
        }
      }, C = function() {
        for (var Re = 0; Re < g.length; Re++)
          k(Re);
      }, F = function(Re, $e) {
        for (var ze = ya(Re), Be = Re.incomers().filter(function(O) {
          return O.isNode() && a.has(O);
        }), _e = -1, rt = Re.id(), je = 0; je < Be.length; je++) {
          var qe = Be[je], et = ya(qe);
          _e = Math.max(_e, et.depth);
        }
        if (ze.depth <= _e) {
          if (!e.acyclic && $e[rt])
            return null;
          var fe = _e + 1;
          return E(Re, fe), $e[rt] = fe, !0;
        }
        return !1;
      };
      if (s && o) {
        var G = [], M = {}, X = function(Re) {
          return G.push(Re);
        }, B = function() {
          return G.shift();
        };
        for (n.forEach(function(Ie) {
          return G.push(Ie);
        }); G.length > 0; ) {
          var re = B(), K = F(re, M);
          if (K)
            re.outgoers().filter(function(Ie) {
              return Ie.isNode() && a.has(Ie);
            }).forEach(X);
          else if (K === null) {
            ct("Detected double maximal shift for node `" + re.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
            break;
          }
        }
      }
      C();
      var q = 0;
      if (e.avoidOverlap)
        for (var ae = 0; ae < n.length; ae++) {
          var ue = n[ae], be = ue.layoutDimensions(e), ie = be.w, ge = be.h;
          q = Math.max(q, ie, ge);
        }
      var we = {}, De = function(Re) {
        if (we[Re.id()])
          return we[Re.id()];
        for (var $e = ya(Re).depth, ze = Re.neighborhood(), Be = 0, _e = 0, rt = 0; rt < ze.length; rt++) {
          var je = ze[rt];
          if (!(je.isEdge() || je.isParent() || !n.has(je))) {
            var qe = ya(je);
            if (qe != null) {
              var et = qe.index, fe = qe.depth;
              if (!(et == null || fe == null)) {
                var O = g[fe].length;
                fe < $e && (Be += et / O, _e++);
              }
            }
          }
        }
        return _e = Math.max(1, _e), Be = Be / _e, _e === 0 && (Be = 0), we[Re.id()] = Be, Be;
      }, xe = function(Re, $e) {
        var ze = De(Re), Be = De($e), _e = ze - Be;
        return _e === 0 ? rs(Re.id(), $e.id()) : _e;
      };
      e.depthSort !== void 0 && (xe = e.depthSort);
      for (var Le = 0; Le < g.length; Le++)
        g[Le].sort(xe), k(Le);
      for (var se = [], Te = 0; Te < I.length; Te++)
        se.push(I[Te]);
      g.unshift(se), C();
      for (var Ae = 0, Se = 0; Se < g.length; Se++)
        Ae = Math.max(g[Se].length, Ae);
      var Ne = {
        x: u.x1 + u.w / 2,
        y: u.x1 + u.h / 2
      }, Fe = g.reduce(function(Ie, Re) {
        return Math.max(Ie, Re.length);
      }, 0), Xe = function(Re) {
        var $e = ya(Re), ze = $e.depth, Be = $e.index, _e = g[ze].length, rt = Math.max(u.w / ((e.grid ? Fe : _e) + 1), q), je = Math.max(u.h / (g.length + 1), q), qe = Math.min(u.w / 2 / g.length, u.h / 2 / g.length);
        if (qe = Math.max(qe, q), e.circle) {
          var fe = qe * ze + qe - (g.length > 0 && g[0].length <= 3 ? qe / 2 : 0), O = 2 * Math.PI / g[ze].length * Be;
          return ze === 0 && g[0].length === 1 && (fe = 1), {
            x: Ne.x + fe * Math.cos(O),
            y: Ne.y + fe * Math.sin(O)
          };
        } else {
          var et = {
            x: Ne.x + (Be + 1 - (_e + 1) / 2) * rt,
            y: (ze + 1) * je
          };
          return et;
        }
      };
      return a.nodes().layoutPositions(this, e, Xe), this;
    };
    var Wd = {
      fit: !0,
      // whether to fit the viewport to the graph
      padding: 30,
      // the padding on fit
      boundingBox: void 0,
      // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: !0,
      // prevents node overlap, may overflow boundingBox and radius if not enough space
      nodeDimensionsIncludeLabels: !1,
      // Excludes the label when calculating node bounding boxes for the layout algorithm
      spacingFactor: void 0,
      // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
      radius: void 0,
      // the radius of the circle
      startAngle: 3 / 2 * Math.PI,
      // where nodes start in radians
      sweep: void 0,
      // how many radians should be between the first and last node (defaults to full circle)
      clockwise: !0,
      // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
      sort: void 0,
      // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
      animate: !1,
      // whether to transition the node positions
      animationDuration: 500,
      // duration of animation in ms if enabled
      animationEasing: void 0,
      // easing of animation if enabled
      animateFilter: function(e, r) {
        return !0;
      },
      // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: void 0,
      // callback on layoutready
      stop: void 0,
      // callback on layoutstop
      transform: function(e, r) {
        return r;
      }
      // transform a given node position. Useful for changing flow direction in discrete layouts 
    };
    function Ko(t) {
      this.options = He({}, Wd, t);
    }
    Ko.prototype.run = function() {
      var t = this.options, e = t, r = t.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = a.nodes().not(":parent");
      e.sort && (i = i.sort(e.sort));
      for (var s = Yt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: r.width(),
        h: r.height()
      }), o = {
        x: s.x1 + s.w / 2,
        y: s.y1 + s.h / 2
      }, u = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, l = u / Math.max(1, i.length - 1), f, h = 0, c = 0; c < i.length; c++) {
        var d = i[c], v = d.layoutDimensions(e), y = v.w, p = v.h;
        h = Math.max(h, y, p);
      }
      if (R(e.radius) ? f = e.radius : i.length <= 1 ? f = 0 : f = Math.min(s.h, s.w) / 2 - h, i.length > 1 && e.avoidOverlap) {
        h *= 1.75;
        var g = Math.cos(l) - Math.cos(0), m = Math.sin(l) - Math.sin(0), b = Math.sqrt(h * h / (g * g + m * m));
        f = Math.max(b, f);
      }
      var E = function(A, x) {
        var k = e.startAngle + x * l * (n ? 1 : -1), C = f * Math.cos(k), F = f * Math.sin(k), G = {
          x: o.x + C,
          y: o.y + F
        };
        return G;
      };
      return a.nodes().layoutPositions(this, e, E), this;
    };
    var Kd = {
      fit: !0,
      // whether to fit the viewport to the graph
      padding: 30,
      // the padding on fit
      startAngle: 3 / 2 * Math.PI,
      // where nodes start in radians
      sweep: void 0,
      // how many radians should be between the first and last node (defaults to full circle)
      clockwise: !0,
      // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
      equidistant: !1,
      // whether levels have an equal radial distance betwen them, may cause bounding box overflow
      minNodeSpacing: 10,
      // min spacing between outside of nodes (used for radius adjustment)
      boundingBox: void 0,
      // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: !0,
      // prevents node overlap, may overflow boundingBox if not enough space
      nodeDimensionsIncludeLabels: !1,
      // Excludes the label when calculating node bounding boxes for the layout algorithm
      height: void 0,
      // height of layout area (overrides container height)
      width: void 0,
      // width of layout area (overrides container width)
      spacingFactor: void 0,
      // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
      concentric: function(e) {
        return e.degree();
      },
      levelWidth: function(e) {
        return e.maxDegree() / 4;
      },
      animate: !1,
      // whether to transition the node positions
      animationDuration: 500,
      // duration of animation in ms if enabled
      animationEasing: void 0,
      // easing of animation if enabled
      animateFilter: function(e, r) {
        return !0;
      },
      // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: void 0,
      // callback on layoutready
      stop: void 0,
      // callback on layoutstop
      transform: function(e, r) {
        return r;
      }
      // transform a given node position. Useful for changing flow direction in discrete layouts
    };
    function Zo(t) {
      this.options = He({}, Kd, t);
    }
    Zo.prototype.run = function() {
      for (var t = this.options, e = t, r = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = t.cy, n = e.eles, i = n.nodes().not(":parent"), s = Yt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: a.width(),
        h: a.height()
      }), o = {
        x: s.x1 + s.w / 2,
        y: s.y1 + s.h / 2
      }, u = [], l = 0, f = 0; f < i.length; f++) {
        var h = i[f], c = void 0;
        c = e.concentric(h), u.push({
          value: c,
          node: h
        }), h._private.scratch.concentric = c;
      }
      i.updateStyle();
      for (var d = 0; d < i.length; d++) {
        var v = i[d], y = v.layoutDimensions(e);
        l = Math.max(l, y.w, y.h);
      }
      u.sort(function(Ie, Re) {
        return Re.value - Ie.value;
      });
      for (var p = e.levelWidth(i), g = [[]], m = g[0], b = 0; b < u.length; b++) {
        var E = u[b];
        if (m.length > 0) {
          var I = Math.abs(m[0].value - E.value);
          I >= p && (m = [], g.push(m));
        }
        m.push(E);
      }
      var A = l + e.minNodeSpacing;
      if (!e.avoidOverlap) {
        var x = g.length > 0 && g[0].length > 1, k = Math.min(s.w, s.h) / 2 - A, C = k / (g.length + x ? 1 : 0);
        A = Math.min(A, C);
      }
      for (var F = 0, G = 0; G < g.length; G++) {
        var M = g[G], X = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / M.length : e.sweep, B = M.dTheta = X / Math.max(1, M.length - 1);
        if (M.length > 1 && e.avoidOverlap) {
          var re = Math.cos(B) - Math.cos(0), K = Math.sin(B) - Math.sin(0), q = Math.sqrt(A * A / (re * re + K * K));
          F = Math.max(q, F);
        }
        M.r = F, F += A;
      }
      if (e.equidistant) {
        for (var ae = 0, ue = 0, be = 0; be < g.length; be++) {
          var ie = g[be], ge = ie.r - ue;
          ae = Math.max(ae, ge);
        }
        ue = 0;
        for (var we = 0; we < g.length; we++) {
          var De = g[we];
          we === 0 && (ue = De.r), De.r = ue, ue += ae;
        }
      }
      for (var xe = {}, Le = 0; Le < g.length; Le++)
        for (var se = g[Le], Te = se.dTheta, Ae = se.r, Se = 0; Se < se.length; Se++) {
          var Ne = se[Se], Fe = e.startAngle + (r ? 1 : -1) * Te * Se, Xe = {
            x: o.x + Ae * Math.cos(Fe),
            y: o.y + Ae * Math.sin(Fe)
          };
          xe[Ne.node.id()] = Xe;
        }
      return n.nodes().layoutPositions(this, e, function(Ie) {
        var Re = Ie.id();
        return xe[Re];
      }), this;
    };
    var Fi, Zd = {
      // Called on `layoutready`
      ready: function() {
      },
      // Called on `layoutstop`
      stop: function() {
      },
      // Whether to animate while running the layout
      // true : Animate continuously as the layout is running
      // false : Just show the end result
      // 'end' : Animate with the end result, from the initial positions to the end positions
      animate: !0,
      // Easing of the animation for animate:'end'
      animationEasing: void 0,
      // The duration of the animation for animate:'end'
      animationDuration: void 0,
      // A function that determines whether the node should be animated
      // All nodes animated by default on animate enabled
      // Non-animated nodes are positioned immediately when the layout starts
      animateFilter: function(e, r) {
        return !0;
      },
      // The layout animates only after this many milliseconds for animate:true
      // (prevents flashing on fast runs)
      animationThreshold: 250,
      // Number of iterations between consecutive screen positions update
      refresh: 20,
      // Whether to fit the network view after when done
      fit: !0,
      // Padding on fit
      padding: 30,
      // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      boundingBox: void 0,
      // Excludes the label when calculating node bounding boxes for the layout algorithm
      nodeDimensionsIncludeLabels: !1,
      // Randomize the initial positions of the nodes (true) or use existing positions (false)
      randomize: !1,
      // Extra spacing between components in non-compound graphs
      componentSpacing: 40,
      // Node repulsion (non overlapping) multiplier
      nodeRepulsion: function(e) {
        return 2048;
      },
      // Node repulsion (overlapping) multiplier
      nodeOverlap: 4,
      // Ideal edge (non nested) length
      idealEdgeLength: function(e) {
        return 32;
      },
      // Divisor to compute edge forces
      edgeElasticity: function(e) {
        return 32;
      },
      // Nesting factor (multiplier) to compute ideal edge length for nested edges
      nestingFactor: 1.2,
      // Gravity force (constant)
      gravity: 1,
      // Maximum number of iterations to perform
      numIter: 1e3,
      // Initial temperature (maximum node displacement)
      initialTemp: 1e3,
      // Cooling factor (how the temperature is reduced between consecutive iterations
      coolingFactor: 0.99,
      // Lower temperature threshold (below this point the layout will end)
      minTemp: 1
    };
    function qn(t) {
      this.options = He({}, Zd, t), this.options.layout = this;
      var e = this.options.eles.nodes(), r = this.options.eles.edges(), a = r.filter(function(n) {
        var i = n.source().data("id"), s = n.target().data("id"), o = e.some(function(l) {
          return l.data("id") === i;
        }), u = e.some(function(l) {
          return l.data("id") === s;
        });
        return !o || !u;
      });
      this.options.eles = this.options.eles.not(a);
    }
    qn.prototype.run = function() {
      var t = this.options, e = t.cy, r = this;
      r.stopped = !1, (t.animate === !0 || t.animate === !1) && r.emit({
        type: "layoutstart",
        layout: r
      }), t.debug === !0 ? Fi = !0 : Fi = !1;
      var a = Qd(e, r, t);
      Fi && eg(a), t.randomize && tg(a);
      var n = gr(), i = function() {
        rg(a, e, t), t.fit === !0 && e.fit(t.padding);
      }, s = function(c) {
        return !(r.stopped || c >= t.numIter || (ag(a, t), a.temperature = a.temperature * t.coolingFactor, a.temperature < t.minTemp));
      }, o = function() {
        if (t.animate === !0 || t.animate === !1)
          i(), r.one("layoutstop", t.stop), r.emit({
            type: "layoutstop",
            layout: r
          });
        else {
          var c = t.eles.nodes(), d = Qo(a, t, c);
          c.layoutPositions(r, t, d);
        }
      }, u = 0, l = !0;
      if (t.animate === !0) {
        var f = function h() {
          for (var c = 0; l && c < t.refresh; )
            l = s(u), u++, c++;
          if (!l)
            jo(a, t), o();
          else {
            var d = gr();
            d - n >= t.animationThreshold && i(), hn(h);
          }
        };
        f();
      } else {
        for (; l; )
          l = s(u), u++;
        jo(a, t), o();
      }
      return this;
    }, qn.prototype.stop = function() {
      return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
    }, qn.prototype.destroy = function() {
      return this.thread && this.thread.stop(), this;
    };
    var Qd = function(e, r, a) {
      for (var n = a.eles.edges(), i = a.eles.nodes(), s = Yt(a.boundingBox ? a.boundingBox : {
        x1: 0,
        y1: 0,
        w: e.width(),
        h: e.height()
      }), o = {
        isCompound: e.hasCompoundNodes(),
        layoutNodes: [],
        idToIndex: {},
        nodeSize: i.size(),
        graphSet: [],
        indexToGraph: [],
        layoutEdges: [],
        edgeSize: n.size(),
        temperature: a.initialTemp,
        clientWidth: s.w,
        clientHeight: s.h,
        boundingBox: s
      }, u = a.eles.components(), l = {}, f = 0; f < u.length; f++)
        for (var h = u[f], c = 0; c < h.length; c++) {
          var d = h[c];
          l[d.id()] = f;
        }
      for (var f = 0; f < o.nodeSize; f++) {
        var v = i[f], y = v.layoutDimensions(a), p = {};
        p.isLocked = v.locked(), p.id = v.data("id"), p.parentId = v.data("parent"), p.cmptId = l[v.id()], p.children = [], p.positionX = v.position("x"), p.positionY = v.position("y"), p.offsetX = 0, p.offsetY = 0, p.height = y.w, p.width = y.h, p.maxX = p.positionX + p.width / 2, p.minX = p.positionX - p.width / 2, p.maxY = p.positionY + p.height / 2, p.minY = p.positionY - p.height / 2, p.padLeft = parseFloat(v.style("padding")), p.padRight = parseFloat(v.style("padding")), p.padTop = parseFloat(v.style("padding")), p.padBottom = parseFloat(v.style("padding")), p.nodeRepulsion = Y(a.nodeRepulsion) ? a.nodeRepulsion(v) : a.nodeRepulsion, o.layoutNodes.push(p), o.idToIndex[p.id] = f;
      }
      for (var g = [], m = 0, b = -1, E = [], f = 0; f < o.nodeSize; f++) {
        var v = o.layoutNodes[f], I = v.parentId;
        I != null ? o.layoutNodes[o.idToIndex[I]].children.push(v.id) : (g[++b] = v.id, E.push(v.id));
      }
      for (o.graphSet.push(E); m <= b; ) {
        var A = g[m++], x = o.idToIndex[A], d = o.layoutNodes[x], k = d.children;
        if (k.length > 0) {
          o.graphSet.push(k);
          for (var f = 0; f < k.length; f++)
            g[++b] = k[f];
        }
      }
      for (var f = 0; f < o.graphSet.length; f++)
        for (var C = o.graphSet[f], c = 0; c < C.length; c++) {
          var F = o.idToIndex[C[c]];
          o.indexToGraph[F] = f;
        }
      for (var f = 0; f < o.edgeSize; f++) {
        var G = n[f], M = {};
        M.id = G.data("id"), M.sourceId = G.data("source"), M.targetId = G.data("target");
        var X = Y(a.idealEdgeLength) ? a.idealEdgeLength(G) : a.idealEdgeLength, B = Y(a.edgeElasticity) ? a.edgeElasticity(G) : a.edgeElasticity, re = o.idToIndex[M.sourceId], K = o.idToIndex[M.targetId], q = o.indexToGraph[re], ae = o.indexToGraph[K];
        if (q != ae) {
          for (var ue = Jd(M.sourceId, M.targetId, o), be = o.graphSet[ue], ie = 0, p = o.layoutNodes[re]; be.indexOf(p.id) === -1; )
            p = o.layoutNodes[o.idToIndex[p.parentId]], ie++;
          for (p = o.layoutNodes[K]; be.indexOf(p.id) === -1; )
            p = o.layoutNodes[o.idToIndex[p.parentId]], ie++;
          X *= ie * a.nestingFactor;
        }
        M.idealLength = X, M.elasticity = B, o.layoutEdges.push(M);
      }
      return o;
    }, Jd = function(e, r, a) {
      var n = jd(e, r, 0, a);
      return 2 > n.count ? 0 : n.graph;
    }, jd = function t(e, r, a, n) {
      var i = n.graphSet[a];
      if (-1 < i.indexOf(e) && -1 < i.indexOf(r))
        return {
          count: 2,
          graph: a
        };
      for (var s = 0, o = 0; o < i.length; o++) {
        var u = i[o], l = n.idToIndex[u], f = n.layoutNodes[l].children;
        if (f.length !== 0) {
          var h = n.indexToGraph[n.idToIndex[f[0]]], c = t(e, r, h, n);
          if (c.count !== 0)
            if (c.count === 1) {
              if (s++, s === 2)
                break;
            } else
              return c;
        }
      }
      return {
        count: s,
        graph: a
      };
    }, eg, tg = function(e, r) {
      for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
        var s = e.layoutNodes[i];
        s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
      }
    }, Qo = function(e, r, a) {
      var n = e.boundingBox, i = {
        x1: 1 / 0,
        x2: -1 / 0,
        y1: 1 / 0,
        y2: -1 / 0
      };
      return r.boundingBox && (a.forEach(function(s) {
        var o = e.layoutNodes[e.idToIndex[s.data("id")]];
        i.x1 = Math.min(i.x1, o.positionX), i.x2 = Math.max(i.x2, o.positionX), i.y1 = Math.min(i.y1, o.positionY), i.y2 = Math.max(i.y2, o.positionY);
      }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
        var u = e.layoutNodes[e.idToIndex[s.data("id")]];
        if (r.boundingBox) {
          var l = (u.positionX - i.x1) / i.w, f = (u.positionY - i.y1) / i.h;
          return {
            x: n.x1 + l * n.w,
            y: n.y1 + f * n.h
          };
        } else
          return {
            x: u.positionX,
            y: u.positionY
          };
      };
    }, rg = function(e, r, a) {
      var n = a.layout, i = a.eles.nodes(), s = Qo(e, a, i);
      i.positions(s), e.ready !== !0 && (e.ready = !0, n.one("layoutready", a.ready), n.emit({
        type: "layoutready",
        layout: this
      }));
    }, ag = function(e, r, a) {
      ng(e, r), og(e), lg(e, r), ug(e), fg(e);
    }, ng = function(e, r) {
      for (var a = 0; a < e.graphSet.length; a++)
        for (var n = e.graphSet[a], i = n.length, s = 0; s < i; s++)
          for (var o = e.layoutNodes[e.idToIndex[n[s]]], u = s + 1; u < i; u++) {
            var l = e.layoutNodes[e.idToIndex[n[u]]];
            ig(o, l, e, r);
          }
    }, Jo = function(e) {
      return -e + 2 * e * Math.random();
    }, ig = function(e, r, a, n) {
      var i = e.cmptId, s = r.cmptId;
      if (!(i !== s && !a.isCompound)) {
        var o = r.positionX - e.positionX, u = r.positionY - e.positionY, l = 1;
        o === 0 && u === 0 && (o = Jo(l), u = Jo(l));
        var f = sg(e, r, o, u);
        if (f > 0)
          var h = n.nodeOverlap * f, c = Math.sqrt(o * o + u * u), d = h * o / c, v = h * u / c;
        else
          var y = Wn(e, o, u), p = Wn(r, -1 * o, -1 * u), g = p.x - y.x, m = p.y - y.y, b = g * g + m * m, c = Math.sqrt(b), h = (e.nodeRepulsion + r.nodeRepulsion) / b, d = h * g / c, v = h * m / c;
        e.isLocked || (e.offsetX -= d, e.offsetY -= v), r.isLocked || (r.offsetX += d, r.offsetY += v);
      }
    }, sg = function(e, r, a, n) {
      if (a > 0)
        var i = e.maxX - r.minX;
      else
        var i = r.maxX - e.minX;
      if (n > 0)
        var s = e.maxY - r.minY;
      else
        var s = r.maxY - e.minY;
      return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
    }, Wn = function(e, r, a) {
      var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, u = a / r, l = s / o, f = {};
      return r === 0 && 0 < a || r === 0 && 0 > a ? (f.x = n, f.y = i + s / 2, f) : 0 < r && -1 * l <= u && u <= l ? (f.x = n + o / 2, f.y = i + o * a / 2 / r, f) : 0 > r && -1 * l <= u && u <= l ? (f.x = n - o / 2, f.y = i - o * a / 2 / r, f) : 0 < a && (u <= -1 * l || u >= l) ? (f.x = n + s * r / 2 / a, f.y = i + s / 2, f) : (0 > a && (u <= -1 * l || u >= l) && (f.x = n - s * r / 2 / a, f.y = i - s / 2), f);
    }, og = function(e, r) {
      for (var a = 0; a < e.edgeSize; a++) {
        var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], u = e.layoutNodes[o], l = u.positionX - s.positionX, f = u.positionY - s.positionY;
        if (!(l === 0 && f === 0)) {
          var h = Wn(s, l, f), c = Wn(u, -1 * l, -1 * f), d = c.x - h.x, v = c.y - h.y, y = Math.sqrt(d * d + v * v), p = Math.pow(n.idealLength - y, 2) / n.elasticity;
          if (y !== 0)
            var g = p * d / y, m = p * v / y;
          else
            var g = 0, m = 0;
          s.isLocked || (s.offsetX += g, s.offsetY += m), u.isLocked || (u.offsetX -= g, u.offsetY -= m);
        }
      }
    }, lg = function(e, r) {
      if (r.gravity !== 0)
        for (var a = 1, n = 0; n < e.graphSet.length; n++) {
          var i = e.graphSet[n], s = i.length;
          if (n === 0)
            var o = e.clientHeight / 2, u = e.clientWidth / 2;
          else
            var l = e.layoutNodes[e.idToIndex[i[0]]], f = e.layoutNodes[e.idToIndex[l.parentId]], o = f.positionX, u = f.positionY;
          for (var h = 0; h < s; h++) {
            var c = e.layoutNodes[e.idToIndex[i[h]]];
            if (!c.isLocked) {
              var d = o - c.positionX, v = u - c.positionY, y = Math.sqrt(d * d + v * v);
              if (y > a) {
                var p = r.gravity * d / y, g = r.gravity * v / y;
                c.offsetX += p, c.offsetY += g;
              }
            }
          }
        }
    }, ug = function(e, r) {
      var a = [], n = 0, i = -1;
      for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
        var s = a[n++], o = e.idToIndex[s], u = e.layoutNodes[o], l = u.children;
        if (0 < l.length && !u.isLocked) {
          for (var f = u.offsetX, h = u.offsetY, c = 0; c < l.length; c++) {
            var d = e.layoutNodes[e.idToIndex[l[c]]];
            d.offsetX += f, d.offsetY += h, a[++i] = l[c];
          }
          u.offsetX = 0, u.offsetY = 0;
        }
      }
    }, fg = function(e, r) {
      for (var a = 0; a < e.nodeSize; a++) {
        var n = e.layoutNodes[a];
        0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
      }
      for (var a = 0; a < e.nodeSize; a++) {
        var n = e.layoutNodes[a];
        if (!(0 < n.children.length || n.isLocked)) {
          var i = hg(n.offsetX, n.offsetY, e.temperature);
          n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, cg(n, e);
        }
      }
      for (var a = 0; a < e.nodeSize; a++) {
        var n = e.layoutNodes[a];
        0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
      }
    }, hg = function(e, r, a) {
      var n = Math.sqrt(e * e + r * r);
      if (n > a)
        var i = {
          x: a * e / n,
          y: a * r / n
        };
      else
        var i = {
          x: e,
          y: r
        };
      return i;
    }, cg = function t(e, r) {
      var a = e.parentId;
      if (a != null) {
        var n = r.layoutNodes[r.idToIndex[a]], i = !1;
        if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = !0), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = !0), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = !0), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = !0), i)
          return t(n, r);
      }
    }, jo = function(e, r) {
      for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
        var s = a[i], o = s.cmptId, u = n[o] = n[o] || [];
        u.push(s);
      }
      for (var l = 0, i = 0; i < n.length; i++) {
        var f = n[i];
        if (f) {
          f.x1 = 1 / 0, f.x2 = -1 / 0, f.y1 = 1 / 0, f.y2 = -1 / 0;
          for (var h = 0; h < f.length; h++) {
            var c = f[h];
            f.x1 = Math.min(f.x1, c.positionX - c.width / 2), f.x2 = Math.max(f.x2, c.positionX + c.width / 2), f.y1 = Math.min(f.y1, c.positionY - c.height / 2), f.y2 = Math.max(f.y2, c.positionY + c.height / 2);
          }
          f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, l += f.w * f.h;
        }
      }
      n.sort(function(m, b) {
        return b.w * b.h - m.w * m.h;
      });
      for (var d = 0, v = 0, y = 0, p = 0, g = Math.sqrt(l) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++) {
        var f = n[i];
        if (f) {
          for (var h = 0; h < f.length; h++) {
            var c = f[h];
            c.isLocked || (c.positionX += d - f.x1, c.positionY += v - f.y1);
          }
          d += f.w + r.componentSpacing, y += f.w + r.componentSpacing, p = Math.max(p, f.h), y > g && (v += p + r.componentSpacing, d = 0, y = 0, p = 0);
        }
      }
    }, vg = {
      fit: !0,
      // whether to fit the viewport to the graph
      padding: 30,
      // padding used on fit
      boundingBox: void 0,
      // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      avoidOverlap: !0,
      // prevents node overlap, may overflow boundingBox if not enough space
      avoidOverlapPadding: 10,
      // extra spacing around nodes when avoidOverlap: true
      nodeDimensionsIncludeLabels: !1,
      // Excludes the label when calculating node bounding boxes for the layout algorithm
      spacingFactor: void 0,
      // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
      condense: !1,
      // uses all available space on false, uses minimal space on true
      rows: void 0,
      // force num of rows in the grid
      cols: void 0,
      // force num of columns in the grid
      position: function(e) {
      },
      // returns { row, col } for element
      sort: void 0,
      // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
      animate: !1,
      // whether to transition the node positions
      animationDuration: 500,
      // duration of animation in ms if enabled
      animationEasing: void 0,
      // easing of animation if enabled
      animateFilter: function(e, r) {
        return !0;
      },
      // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: void 0,
      // callback on layoutready
      stop: void 0,
      // callback on layoutstop
      transform: function(e, r) {
        return r;
      }
      // transform a given node position. Useful for changing flow direction in discrete layouts 
    };
    function el(t) {
      this.options = He({}, vg, t);
    }
    el.prototype.run = function() {
      var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().not(":parent");
      e.sort && (n = n.sort(e.sort));
      var i = Yt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: r.width(),
        h: r.height()
      });
      if (i.h === 0 || i.w === 0)
        a.nodes().layoutPositions(this, e, function(we) {
          return {
            x: i.x1,
            y: i.y1
          };
        });
      else {
        var s = n.size(), o = Math.sqrt(s * i.h / i.w), u = Math.round(o), l = Math.round(i.w / i.h * o), f = function(De) {
          if (De == null)
            return Math.min(u, l);
          var xe = Math.min(u, l);
          xe == u ? u = De : l = De;
        }, h = function(De) {
          if (De == null)
            return Math.max(u, l);
          var xe = Math.max(u, l);
          xe == u ? u = De : l = De;
        }, c = e.rows, d = e.cols != null ? e.cols : e.columns;
        if (c != null && d != null)
          u = c, l = d;
        else if (c != null && d == null)
          u = c, l = Math.ceil(s / u);
        else if (c == null && d != null)
          l = d, u = Math.ceil(s / l);
        else if (l * u > s) {
          var v = f(), y = h();
          (v - 1) * y >= s ? f(v - 1) : (y - 1) * v >= s && h(y - 1);
        } else
          for (; l * u < s; ) {
            var p = f(), g = h();
            (g + 1) * p >= s ? h(g + 1) : f(p + 1);
          }
        var m = i.w / l, b = i.h / u;
        if (e.condense && (m = 0, b = 0), e.avoidOverlap)
          for (var E = 0; E < n.length; E++) {
            var I = n[E], A = I._private.position;
            (A.x == null || A.y == null) && (A.x = 0, A.y = 0);
            var x = I.layoutDimensions(e), k = e.avoidOverlapPadding, C = x.w + k, F = x.h + k;
            m = Math.max(m, C), b = Math.max(b, F);
          }
        for (var G = {}, M = function(De, xe) {
          return !!G["c-" + De + "-" + xe];
        }, X = function(De, xe) {
          G["c-" + De + "-" + xe] = !0;
        }, B = 0, re = 0, K = function() {
          re++, re >= l && (re = 0, B++);
        }, q = {}, ae = 0; ae < n.length; ae++) {
          var ue = n[ae], be = e.position(ue);
          if (be && (be.row !== void 0 || be.col !== void 0)) {
            var ie = {
              row: be.row,
              col: be.col
            };
            if (ie.col === void 0)
              for (ie.col = 0; M(ie.row, ie.col); )
                ie.col++;
            else if (ie.row === void 0)
              for (ie.row = 0; M(ie.row, ie.col); )
                ie.row++;
            q[ue.id()] = ie, X(ie.row, ie.col);
          }
        }
        var ge = function(De, xe) {
          var Le, se;
          if (De.locked() || De.isParent())
            return !1;
          var Te = q[De.id()];
          if (Te)
            Le = Te.col * m + m / 2 + i.x1, se = Te.row * b + b / 2 + i.y1;
          else {
            for (; M(B, re); )
              K();
            Le = re * m + m / 2 + i.x1, se = B * b + b / 2 + i.y1, X(B, re), K();
          }
          return {
            x: Le,
            y: se
          };
        };
        n.layoutPositions(this, e, ge);
      }
      return this;
    };
    var dg = {
      ready: function() {
      },
      // on layoutready
      stop: function() {
      }
      // on layoutstop
    };
    function Gi(t) {
      this.options = He({}, dg, t);
    }
    Gi.prototype.run = function() {
      var t = this.options, e = t.eles, r = this;
      return t.cy, r.emit("layoutstart"), e.nodes().positions(function() {
        return {
          x: 0,
          y: 0
        };
      }), r.one("layoutready", t.ready), r.emit("layoutready"), r.one("layoutstop", t.stop), r.emit("layoutstop"), this;
    }, Gi.prototype.stop = function() {
      return this;
    };
    var gg = {
      positions: void 0,
      // map of (node id) => (position obj); or function(node){ return somPos; }
      zoom: void 0,
      // the zoom level to set (prob want fit = false if set)
      pan: void 0,
      // the pan level to set (prob want fit = false if set)
      fit: !0,
      // whether to fit to viewport
      padding: 30,
      // padding on fit
      spacingFactor: void 0,
      // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
      animate: !1,
      // whether to transition the node positions
      animationDuration: 500,
      // duration of animation in ms if enabled
      animationEasing: void 0,
      // easing of animation if enabled
      animateFilter: function(e, r) {
        return !0;
      },
      // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: void 0,
      // callback on layoutready
      stop: void 0,
      // callback on layoutstop
      transform: function(e, r) {
        return r;
      }
      // transform a given node position. Useful for changing flow direction in discrete layouts
    };
    function tl(t) {
      this.options = He({}, gg, t);
    }
    tl.prototype.run = function() {
      var t = this.options, e = t.eles, r = e.nodes(), a = Y(t.positions);
      function n(i) {
        if (t.positions == null)
          return bf(i.position());
        if (a)
          return t.positions(i);
        var s = t.positions[i._private.data.id];
        return s ?? null;
      }
      return r.layoutPositions(this, t, function(i, s) {
        var o = n(i);
        return i.locked() || o == null ? !1 : o;
      }), this;
    };
    var pg = {
      fit: !0,
      // whether to fit to viewport
      padding: 30,
      // fit padding
      boundingBox: void 0,
      // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      animate: !1,
      // whether to transition the node positions
      animationDuration: 500,
      // duration of animation in ms if enabled
      animationEasing: void 0,
      // easing of animation if enabled
      animateFilter: function(e, r) {
        return !0;
      },
      // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
      ready: void 0,
      // callback on layoutready
      stop: void 0,
      // callback on layoutstop
      transform: function(e, r) {
        return r;
      }
      // transform a given node position. Useful for changing flow direction in discrete layouts 
    };
    function rl(t) {
      this.options = He({}, pg, t);
    }
    rl.prototype.run = function() {
      var t = this.options, e = t.cy, r = t.eles, a = Yt(t.boundingBox ? t.boundingBox : {
        x1: 0,
        y1: 0,
        w: e.width(),
        h: e.height()
      }), n = function(s, o) {
        return {
          x: a.x1 + Math.round(Math.random() * a.w),
          y: a.y1 + Math.round(Math.random() * a.h)
        };
      };
      return r.nodes().layoutPositions(this, t, n), this;
    };
    var yg = [{
      name: "breadthfirst",
      impl: Wo
    }, {
      name: "circle",
      impl: Ko
    }, {
      name: "concentric",
      impl: Zo
    }, {
      name: "cose",
      impl: qn
    }, {
      name: "grid",
      impl: el
    }, {
      name: "null",
      impl: Gi
    }, {
      name: "preset",
      impl: tl
    }, {
      name: "random",
      impl: rl
    }];
    function al(t) {
      this.options = t, this.notifications = 0;
    }
    var nl = function() {
    }, il = function() {
      throw new Error("A headless instance can not render images");
    };
    al.prototype = {
      recalculateRenderedStyle: nl,
      notify: function() {
        this.notifications++;
      },
      init: nl,
      isHeadless: function() {
        return !0;
      },
      png: il,
      jpg: il
    };
    var zi = {};
    zi.arrowShapeWidth = 0.3, zi.registerArrowShapes = function() {
      var t = this.arrowShapes = {}, e = this, r = function(l, f, h, c, d, v, y) {
        var p = d.x - h / 2 - y, g = d.x + h / 2 + y, m = d.y - h / 2 - y, b = d.y + h / 2 + y, E = p <= l && l <= g && m <= f && f <= b;
        return E;
      }, a = function(l, f, h, c, d) {
        var v = l * Math.cos(c) - f * Math.sin(c), y = l * Math.sin(c) + f * Math.cos(c), p = v * h, g = y * h, m = p + d.x, b = g + d.y;
        return {
          x: m,
          y: b
        };
      }, n = function(l, f, h, c) {
        for (var d = [], v = 0; v < l.length; v += 2) {
          var y = l[v], p = l[v + 1];
          d.push(a(y, p, f, h, c));
        }
        return d;
      }, i = function(l) {
        for (var f = [], h = 0; h < l.length; h++) {
          var c = l[h];
          f.push(c.x, c.y);
        }
        return f;
      }, s = function(l) {
        return l.pstyle("width").pfValue * l.pstyle("arrow-scale").pfValue * 2;
      }, o = function(l, f) {
        j(f) && (f = t[f]), t[l] = He({
          name: l,
          points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
          collide: function(c, d, v, y, p, g) {
            var m = i(n(this.points, v + 2 * g, y, p)), b = Ht(c, d, m);
            return b;
          },
          roughCollide: r,
          draw: function(c, d, v, y) {
            var p = n(this.points, d, v, y);
            e.arrowShapeImpl("polygon")(c, p);
          },
          spacing: function(c) {
            return 0;
          },
          gap: s
        }, f);
      };
      o("none", {
        collide: vn,
        roughCollide: vn,
        draw: li,
        spacing: ps,
        gap: ps
      }), o("triangle", {
        points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
      }), o("arrow", "triangle"), o("triangle-backcurve", {
        points: t.triangle.points,
        controlPoint: [0, -0.15],
        roughCollide: r,
        draw: function(l, f, h, c, d) {
          var v = n(this.points, f, h, c), y = this.controlPoint, p = a(y[0], y[1], f, h, c);
          e.arrowShapeImpl(this.name)(l, v, p);
        },
        gap: function(l) {
          return s(l) * 0.8;
        }
      }), o("triangle-tee", {
        points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
        pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
        collide: function(l, f, h, c, d, v, y) {
          var p = i(n(this.points, h + 2 * y, c, d)), g = i(n(this.pointsTee, h + 2 * y, c, d)), m = Ht(l, f, p) || Ht(l, f, g);
          return m;
        },
        draw: function(l, f, h, c, d) {
          var v = n(this.points, f, h, c), y = n(this.pointsTee, f, h, c);
          e.arrowShapeImpl(this.name)(l, v, y);
        }
      }), o("circle-triangle", {
        radius: 0.15,
        pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
        collide: function(l, f, h, c, d, v, y) {
          var p = d, g = Math.pow(p.x - l, 2) + Math.pow(p.y - f, 2) <= Math.pow((h + 2 * y) * this.radius, 2), m = i(n(this.points, h + 2 * y, c, d));
          return Ht(l, f, m) || g;
        },
        draw: function(l, f, h, c, d) {
          var v = n(this.pointsTr, f, h, c);
          e.arrowShapeImpl(this.name)(l, v, c.x, c.y, this.radius * f);
        },
        spacing: function(l) {
          return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
        }
      }), o("triangle-cross", {
        points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
        baseCrossLinePts: [
          -0.15,
          -0.4,
          // first half of the rectangle
          -0.15,
          -0.4,
          0.15,
          -0.4,
          // second half of the rectangle
          0.15,
          -0.4
        ],
        crossLinePts: function(l, f) {
          var h = this.baseCrossLinePts.slice(), c = f / l, d = 3, v = 5;
          return h[d] = h[d] - c, h[v] = h[v] - c, h;
        },
        collide: function(l, f, h, c, d, v, y) {
          var p = i(n(this.points, h + 2 * y, c, d)), g = i(n(this.crossLinePts(h, v), h + 2 * y, c, d)), m = Ht(l, f, p) || Ht(l, f, g);
          return m;
        },
        draw: function(l, f, h, c, d) {
          var v = n(this.points, f, h, c), y = n(this.crossLinePts(f, d), f, h, c);
          e.arrowShapeImpl(this.name)(l, v, y);
        }
      }), o("vee", {
        points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
        gap: function(l) {
          return s(l) * 0.525;
        }
      }), o("circle", {
        radius: 0.15,
        collide: function(l, f, h, c, d, v, y) {
          var p = d, g = Math.pow(p.x - l, 2) + Math.pow(p.y - f, 2) <= Math.pow((h + 2 * y) * this.radius, 2);
          return g;
        },
        draw: function(l, f, h, c, d) {
          e.arrowShapeImpl(this.name)(l, c.x, c.y, this.radius * f);
        },
        spacing: function(l) {
          return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
        }
      }), o("tee", {
        points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
        spacing: function(l) {
          return 1;
        },
        gap: function(l) {
          return 1;
        }
      }), o("square", {
        points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
      }), o("diamond", {
        points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
        gap: function(l) {
          return l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
        }
      }), o("chevron", {
        points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
        gap: function(l) {
          return 0.95 * l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
        }
      });
    };
    var _r = {};
    _r.projectIntoViewport = function(t, e) {
      var r = this.cy, a = this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = r.pan(), u = r.zoom(), l = ((t - n) / s - o.x) / u, f = ((e - i) / s - o.y) / u;
      return [l, f];
    }, _r.findContainerClientCoords = function() {
      if (this.containerBB)
        return this.containerBB;
      var t = this.container, e = t.getBoundingClientRect(), r = this.cy.window().getComputedStyle(t), a = function(g) {
        return parseFloat(r.getPropertyValue(g));
      }, n = {
        left: a("padding-left"),
        right: a("padding-right"),
        top: a("padding-top"),
        bottom: a("padding-bottom")
      }, i = {
        left: a("border-left-width"),
        right: a("border-right-width"),
        top: a("border-top-width"),
        bottom: a("border-bottom-width")
      }, s = t.clientWidth, o = t.clientHeight, u = n.left + n.right, l = n.top + n.bottom, f = i.left + i.right, h = e.width / (s + f), c = s - u, d = o - l, v = e.left + n.left + i.left, y = e.top + n.top + i.top;
      return this.containerBB = [v, y, c, d, h];
    }, _r.invalidateContainerClientCoordsCache = function() {
      this.containerBB = null;
    }, _r.findNearestElement = function(t, e, r, a) {
      return this.findNearestElements(t, e, r, a)[0];
    }, _r.findNearestElements = function(t, e, r, a) {
      var n = this, i = this, s = i.getCachedZSortedEles(), o = [], u = i.cy.zoom(), l = i.cy.hasCompoundNodes(), f = (a ? 24 : 8) / u, h = (a ? 8 : 2) / u, c = (a ? 8 : 2) / u, d = 1 / 0, v, y;
      r && (s = s.interactive);
      function p(x, k) {
        if (x.isNode()) {
          if (y)
            return;
          y = x, o.push(x);
        }
        if (x.isEdge() && (k == null || k < d))
          if (v) {
            if (v.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value && v.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value) {
              for (var C = 0; C < o.length; C++)
                if (o[C].isEdge()) {
                  o[C] = x, v = x, d = k ?? d;
                  break;
                }
            }
          } else
            o.push(x), v = x, d = k ?? d;
      }
      function g(x) {
        var k = x.outerWidth() + 2 * h, C = x.outerHeight() + 2 * h, F = k / 2, G = C / 2, M = x.position();
        if (M.x - F <= t && t <= M.x + F && M.y - G <= e && e <= M.y + G) {
          var X = i.nodeShapes[n.getNodeShape(x)];
          if (X.checkPoint(t, e, 0, k, C, M.x, M.y))
            return p(x, 0), !0;
        }
      }
      function m(x) {
        var k = x._private, C = k.rscratch, F = x.pstyle("width").pfValue, G = x.pstyle("arrow-scale").value, M = F / 2 + f, X = M * M, B = M * 2, ae = k.source, ue = k.target, re;
        if (C.edgeType === "segments" || C.edgeType === "straight" || C.edgeType === "haystack") {
          for (var K = C.allpts, q = 0; q + 3 < K.length; q += 2)
            if (If(t, e, K[q], K[q + 1], K[q + 2], K[q + 3], B) && X > (re = Ff(t, e, K[q], K[q + 1], K[q + 2], K[q + 3])))
              return p(x, re), !0;
        } else if (C.edgeType === "bezier" || C.edgeType === "multibezier" || C.edgeType === "self" || C.edgeType === "compound") {
          for (var K = C.allpts, q = 0; q + 5 < C.allpts.length; q += 4)
            if (Rf(t, e, K[q], K[q + 1], K[q + 2], K[q + 3], K[q + 4], K[q + 5], B) && X > (re = Bf(t, e, K[q], K[q + 1], K[q + 2], K[q + 3], K[q + 4], K[q + 5])))
              return p(x, re), !0;
        }
        for (var ae = ae || k.source, ue = ue || k.target, be = n.getArrowWidth(F, G), ie = [{
          name: "source",
          x: C.arrowStartX,
          y: C.arrowStartY,
          angle: C.srcArrowAngle
        }, {
          name: "target",
          x: C.arrowEndX,
          y: C.arrowEndY,
          angle: C.tgtArrowAngle
        }, {
          name: "mid-source",
          x: C.midX,
          y: C.midY,
          angle: C.midsrcArrowAngle
        }, {
          name: "mid-target",
          x: C.midX,
          y: C.midY,
          angle: C.midtgtArrowAngle
        }], q = 0; q < ie.length; q++) {
          var ge = ie[q], we = i.arrowShapes[x.pstyle(ge.name + "-arrow-shape").value], De = x.pstyle("width").pfValue;
          if (we.roughCollide(t, e, be, ge.angle, {
            x: ge.x,
            y: ge.y
          }, De, f) && we.collide(t, e, be, ge.angle, {
            x: ge.x,
            y: ge.y
          }, De, f))
            return p(x), !0;
        }
        l && o.length > 0 && (g(ae), g(ue));
      }
      function b(x, k, C) {
        return tr(x, k, C);
      }
      function E(x, k) {
        var C = x._private, F = c, G;
        k ? G = k + "-" : G = "", x.boundingBox();
        var M = C.labelBounds[k || "main"], X = x.pstyle(G + "label").value, B = x.pstyle("text-events").strValue === "yes";
        if (!(!B || !X)) {
          var re = b(C.rscratch, "labelX", k), K = b(C.rscratch, "labelY", k), q = b(C.rscratch, "labelAngle", k), ae = x.pstyle(G + "text-margin-x").pfValue, ue = x.pstyle(G + "text-margin-y").pfValue, be = M.x1 - F - ae, ie = M.x2 + F - ae, ge = M.y1 - F - ue, we = M.y2 + F - ue;
          if (q) {
            var De = Math.cos(q), xe = Math.sin(q), Le = function(Xe, Ie) {
              return Xe = Xe - re, Ie = Ie - K, {
                x: Xe * De - Ie * xe + re,
                y: Xe * xe + Ie * De + K
              };
            }, se = Le(be, ge), Te = Le(be, we), Ae = Le(ie, ge), Se = Le(ie, we), Ne = [
              // with the margin added after the rotation is applied
              se.x + ae,
              se.y + ue,
              Ae.x + ae,
              Ae.y + ue,
              Se.x + ae,
              Se.y + ue,
              Te.x + ae,
              Te.y + ue
            ];
            if (Ht(t, e, Ne))
              return p(x), !0;
          } else if (ra(M, t, e))
            return p(x), !0;
        }
      }
      for (var I = s.length - 1; I >= 0; I--) {
        var A = s[I];
        A.isNode() ? g(A) || E(A) : m(A) || E(A) || E(A, "source") || E(A, "target");
      }
      return o;
    }, _r.getAllInBox = function(t, e, r, a) {
      var n = this.getCachedZSortedEles().interactive, i = [], s = Math.min(t, r), o = Math.max(t, r), u = Math.min(e, a), l = Math.max(e, a);
      t = s, r = o, e = u, a = l;
      for (var f = Yt({
        x1: t,
        y1: e,
        x2: r,
        y2: a
      }), h = 0; h < n.length; h++) {
        var c = n[h];
        if (c.isNode()) {
          var d = c, v = d.boundingBox({
            includeNodes: !0,
            includeEdges: !1,
            includeLabels: !1
          });
          ci(f, v) && !Ds(v, f) && i.push(d);
        } else {
          var y = c, p = y._private, g = p.rscratch;
          if (g.startX != null && g.startY != null && !ra(f, g.startX, g.startY) || g.endX != null && g.endY != null && !ra(f, g.endX, g.endY))
            continue;
          if (g.edgeType === "bezier" || g.edgeType === "multibezier" || g.edgeType === "self" || g.edgeType === "compound" || g.edgeType === "segments" || g.edgeType === "haystack") {
            for (var m = p.rstyle.bezierPts || p.rstyle.linePts || p.rstyle.haystackPts, b = !0, E = 0; E < m.length; E++)
              if (!Mf(f, m[E])) {
                b = !1;
                break;
              }
            b && i.push(y);
          } else
            (g.edgeType === "haystack" || g.edgeType === "straight") && i.push(y);
        }
      }
      return i;
    };
    var Kn = {};
    Kn.calculateArrowAngles = function(t) {
      var e = t._private.rscratch, r = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", u, l, f, h, c, d, g, m;
      if (r ? (f = e.haystackPts[0], h = e.haystackPts[1], c = e.haystackPts[2], d = e.haystackPts[3]) : (f = e.arrowStartX, h = e.arrowStartY, c = e.arrowEndX, d = e.arrowEndY), g = e.midX, m = e.midY, i)
        u = f - e.segpts[0], l = h - e.segpts[1];
      else if (n || s || o || a) {
        var v = e.allpts, y = St(v[0], v[2], v[4], 0.1), p = St(v[1], v[3], v[5], 0.1);
        u = f - y, l = h - p;
      } else
        u = f - g, l = h - m;
      e.srcArrowAngle = pn(u, l);
      var g = e.midX, m = e.midY;
      if (r && (g = (f + c) / 2, m = (h + d) / 2), u = c - f, l = d - h, i) {
        var v = e.allpts;
        if (v.length / 2 % 2 === 0) {
          var b = v.length / 2, E = b - 2;
          u = v[b] - v[E], l = v[b + 1] - v[E + 1];
        } else {
          var b = v.length / 2 - 1, E = b - 2, I = b + 2;
          u = v[b] - v[E], l = v[b + 1] - v[E + 1];
        }
      } else if (n || s || o) {
        var v = e.allpts, A = e.ctrlpts, x, k, C, F;
        if (A.length / 2 % 2 === 0) {
          var G = v.length / 2 - 1, M = G + 2, X = M + 2;
          x = St(v[G], v[M], v[X], 0), k = St(v[G + 1], v[M + 1], v[X + 1], 0), C = St(v[G], v[M], v[X], 1e-4), F = St(v[G + 1], v[M + 1], v[X + 1], 1e-4);
        } else {
          var M = v.length / 2 - 1, G = M - 2, X = M + 2;
          x = St(v[G], v[M], v[X], 0.4999), k = St(v[G + 1], v[M + 1], v[X + 1], 0.4999), C = St(v[G], v[M], v[X], 0.5), F = St(v[G + 1], v[M + 1], v[X + 1], 0.5);
        }
        u = C - x, l = F - k;
      }
      if (e.midtgtArrowAngle = pn(u, l), e.midDispX = u, e.midDispY = l, u *= -1, l *= -1, i) {
        var v = e.allpts;
        if (v.length / 2 % 2 !== 0) {
          var b = v.length / 2 - 1, I = b + 2;
          u = -(v[I] - v[b]), l = -(v[I + 1] - v[b + 1]);
        }
      }
      if (e.midsrcArrowAngle = pn(u, l), i)
        u = c - e.segpts[e.segpts.length - 2], l = d - e.segpts[e.segpts.length - 1];
      else if (n || s || o || a) {
        var v = e.allpts, B = v.length, y = St(v[B - 6], v[B - 4], v[B - 2], 0.9), p = St(v[B - 5], v[B - 3], v[B - 1], 0.9);
        u = c - y, l = d - p;
      } else
        u = c - g, l = d - m;
      e.tgtArrowAngle = pn(u, l);
    }, Kn.getArrowWidth = Kn.getArrowHeight = function(t, e) {
      var r = this.arrowWidthCache = this.arrowWidthCache || {}, a = r[t + ", " + e];
      return a || (a = Math.max(Math.pow(t * 13.37, 0.9), 29) * e, r[t + ", " + e] = a, a);
    };
    var Vt = {};
    Vt.findMidptPtsEtc = function(t, e) {
      var r = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = t.pstyle("source-endpoint"), o = t.pstyle("target-endpoint"), u = s.units != null && o.units != null, l = function(I, A, x, k) {
        var C = k - A, F = x - I, G = Math.sqrt(F * F + C * C);
        return {
          x: -C / G,
          y: F / G
        };
      }, f = t.pstyle("edge-distances").value;
      switch (f) {
        case "node-position":
          i = r;
          break;
        case "intersection":
          i = a;
          break;
        case "endpoints": {
          if (u) {
            var h = this.manualEndptToPx(t.source()[0], s), c = w(h, 2), d = c[0], v = c[1], y = this.manualEndptToPx(t.target()[0], o), p = w(y, 2), g = p[0], m = p[1], b = {
              x1: d,
              y1: v,
              x2: g,
              y2: m
            };
            n = l(d, v, g, m), i = b;
          } else
            ct("Edge ".concat(t.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
          break;
        }
      }
      return {
        midptPts: i,
        vectorNormInverse: n
      };
    }, Vt.findHaystackPoints = function(t) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e], a = r._private, n = a.rscratch;
        if (!n.haystack) {
          var i = Math.random() * 2 * Math.PI;
          n.source = {
            x: Math.cos(i),
            y: Math.sin(i)
          }, i = Math.random() * 2 * Math.PI, n.target = {
            x: Math.cos(i),
            y: Math.sin(i)
          };
        }
        var s = a.source, o = a.target, u = s.position(), l = o.position(), f = s.width(), h = o.width(), c = s.height(), d = o.height(), v = r.pstyle("haystack-radius").value, y = v / 2;
        n.haystackPts = n.allpts = [n.source.x * f * y + u.x, n.source.y * c * y + u.y, n.target.x * h * y + l.x, n.target.y * d * y + l.y], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = !0, this.storeEdgeProjections(r), this.calculateArrowAngles(r), this.recalculateEdgeLabelProjections(r), this.calculateLabelAngles(r);
      }
    }, Vt.findSegmentsPoints = function(t, e) {
      var r = t._private.rscratch, a = t.pstyle("segment-weights"), n = t.pstyle("segment-distances"), i = Math.min(a.pfValue.length, n.pfValue.length);
      r.edgeType = "segments", r.segpts = [];
      for (var s = 0; s < i; s++) {
        var o = a.pfValue[s], u = n.pfValue[s], l = 1 - o, f = o, h = this.findMidptPtsEtc(t, e), c = h.midptPts, d = h.vectorNormInverse, v = {
          x: c.x1 * l + c.x2 * f,
          y: c.y1 * l + c.y2 * f
        };
        r.segpts.push(v.x + d.x * u, v.y + d.y * u);
      }
    }, Vt.findLoopPoints = function(t, e, r, a) {
      var n = t._private.rscratch, i = e.dirCounts, s = e.srcPos, o = t.pstyle("control-point-distances"), u = o ? o.pfValue[0] : void 0, l = t.pstyle("loop-direction").pfValue, f = t.pstyle("loop-sweep").pfValue, h = t.pstyle("control-point-step-size").pfValue;
      n.edgeType = "self";
      var c = r, d = h;
      a && (c = 0, d = u);
      var v = l - Math.PI / 2, y = v - f / 2, p = v + f / 2, g = l + "_" + f;
      c = i[g] === void 0 ? i[g] = 0 : ++i[g], n.ctrlpts = [s.x + Math.cos(y) * 1.4 * d * (c / 3 + 1), s.y + Math.sin(y) * 1.4 * d * (c / 3 + 1), s.x + Math.cos(p) * 1.4 * d * (c / 3 + 1), s.y + Math.sin(p) * 1.4 * d * (c / 3 + 1)];
    }, Vt.findCompoundLoopPoints = function(t, e, r, a) {
      var n = t._private.rscratch;
      n.edgeType = "compound";
      var i = e.srcPos, s = e.tgtPos, o = e.srcW, u = e.srcH, l = e.tgtW, f = e.tgtH, h = t.pstyle("control-point-step-size").pfValue, c = t.pstyle("control-point-distances"), d = c ? c.pfValue[0] : void 0, v = r, y = h;
      a && (v = 0, y = d);
      var p = 50, g = {
        x: i.x - o / 2,
        y: i.y - u / 2
      }, m = {
        x: s.x - l / 2,
        y: s.y - f / 2
      }, b = {
        x: Math.min(g.x, m.x),
        y: Math.min(g.y, m.y)
      }, E = 0.5, I = Math.max(E, Math.log(o * 0.01)), A = Math.max(E, Math.log(l * 0.01));
      n.ctrlpts = [b.x, b.y - (1 + Math.pow(p, 1.12) / 100) * y * (v / 3 + 1) * I, b.x - (1 + Math.pow(p, 1.12) / 100) * y * (v / 3 + 1) * A, b.y];
    }, Vt.findStraightEdgePoints = function(t) {
      t._private.rscratch.edgeType = "straight";
    }, Vt.findBezierPoints = function(t, e, r, a, n) {
      var i = t._private.rscratch, s = t.pstyle("control-point-step-size").pfValue, o = t.pstyle("control-point-distances"), u = t.pstyle("control-point-weights"), l = o && u ? Math.min(o.value.length, u.value.length) : 1, f = o ? o.pfValue[0] : void 0, h = u.value[0], c = a;
      i.edgeType = c ? "multibezier" : "bezier", i.ctrlpts = [];
      for (var d = 0; d < l; d++) {
        var v = (0.5 - e.eles.length / 2 + r) * s * (n ? -1 : 1), y = void 0, p = xs(v);
        c && (f = o ? o.pfValue[d] : s, h = u.value[d]), a ? y = f : y = f !== void 0 ? p * f : void 0;
        var g = y !== void 0 ? y : v, m = 1 - h, b = h, E = this.findMidptPtsEtc(t, e), I = E.midptPts, A = E.vectorNormInverse, x = {
          x: I.x1 * m + I.x2 * b,
          y: I.y1 * m + I.y2 * b
        };
        i.ctrlpts.push(x.x + A.x * g, x.y + A.y * g);
      }
    }, Vt.findTaxiPoints = function(t, e) {
      var r = t._private.rscratch;
      r.edgeType = "segments";
      var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", u = "upward", l = "auto", f = e.posPts, h = e.srcW, c = e.srcH, d = e.tgtW, v = e.tgtH, y = t.pstyle("edge-distances").value, p = y !== "node-position", g = t.pstyle("taxi-direction").value, m = g, b = t.pstyle("taxi-turn"), E = b.units === "%", I = b.pfValue, A = I < 0, x = t.pstyle("taxi-turn-min-distance").pfValue, k = p ? (h + d) / 2 : 0, C = p ? (c + v) / 2 : 0, F = f.x2 - f.x1, G = f.y2 - f.y1, M = function(Ee, Ge) {
        return Ee > 0 ? Math.max(Ee - Ge, 0) : Math.min(Ee + Ge, 0);
      }, X = M(F, k), B = M(G, C), re = !1;
      m === l ? g = Math.abs(X) > Math.abs(B) ? n : a : m === u || m === o ? (g = a, re = !0) : (m === i || m === s) && (g = n, re = !0);
      var K = g === a, q = K ? B : X, ae = K ? G : F, ue = xs(ae), be = !1;
      !(re && (E || A)) && (m === o && ae < 0 || m === u && ae > 0 || m === i && ae > 0 || m === s && ae < 0) && (ue *= -1, q = ue * Math.abs(q), be = !0);
      var ie;
      if (E) {
        var ge = I < 0 ? 1 + I : I;
        ie = ge * q;
      } else {
        var we = I < 0 ? q : 0;
        ie = we + I * ue;
      }
      var De = function(Ee) {
        return Math.abs(Ee) < x || Math.abs(Ee) >= Math.abs(q);
      }, xe = De(ie), Le = De(Math.abs(q) - Math.abs(ie)), se = xe || Le;
      if (se && !be)
        if (K) {
          var Te = Math.abs(ae) <= c / 2, Ae = Math.abs(F) <= d / 2;
          if (Te) {
            var Se = (f.x1 + f.x2) / 2, Ne = f.y1, Fe = f.y2;
            r.segpts = [Se, Ne, Se, Fe];
          } else if (Ae) {
            var Xe = (f.y1 + f.y2) / 2, Ie = f.x1, Re = f.x2;
            r.segpts = [Ie, Xe, Re, Xe];
          } else
            r.segpts = [f.x1, f.y2];
        } else {
          var $e = Math.abs(ae) <= h / 2, ze = Math.abs(G) <= v / 2;
          if ($e) {
            var Be = (f.y1 + f.y2) / 2, _e = f.x1, rt = f.x2;
            r.segpts = [_e, Be, rt, Be];
          } else if (ze) {
            var je = (f.x1 + f.x2) / 2, qe = f.y1, et = f.y2;
            r.segpts = [je, qe, je, et];
          } else
            r.segpts = [f.x2, f.y1];
        }
      else if (K) {
        var fe = f.y1 + ie + (p ? c / 2 * ue : 0), O = f.x1, oe = f.x2;
        r.segpts = [O, fe, oe, fe];
      } else {
        var Ce = f.x1 + ie + (p ? h / 2 * ue : 0), ve = f.y1, ye = f.y2;
        r.segpts = [Ce, ve, Ce, ye];
      }
    }, Vt.tryToCorrectInvalidPoints = function(t, e) {
      var r = t._private.rscratch;
      if (r.edgeType === "bezier") {
        var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, u = e.tgtH, l = e.srcShape, f = e.tgtShape, h = !R(r.startX) || !R(r.startY), c = !R(r.arrowStartX) || !R(r.arrowStartY), d = !R(r.endX) || !R(r.endY), v = !R(r.arrowEndX) || !R(r.arrowEndY), y = 3, p = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth, g = y * p, m = Br({
          x: r.ctrlpts[0],
          y: r.ctrlpts[1]
        }, {
          x: r.startX,
          y: r.startY
        }), b = m < g, E = Br({
          x: r.ctrlpts[0],
          y: r.ctrlpts[1]
        }, {
          x: r.endX,
          y: r.endY
        }), I = E < g, A = !1;
        if (h || c || b) {
          A = !0;
          var x = {
            // delta
            x: r.ctrlpts[0] - a.x,
            y: r.ctrlpts[1] - a.y
          }, k = Math.sqrt(x.x * x.x + x.y * x.y), C = {
            // normalised delta
            x: x.x / k,
            y: x.y / k
          }, F = Math.max(i, s), G = {
            // *2 radius guarantees outside shape
            x: r.ctrlpts[0] + C.x * 2 * F,
            y: r.ctrlpts[1] + C.y * 2 * F
          }, M = l.intersectLine(a.x, a.y, i, s, G.x, G.y, 0);
          b ? (r.ctrlpts[0] = r.ctrlpts[0] + C.x * (g - m), r.ctrlpts[1] = r.ctrlpts[1] + C.y * (g - m)) : (r.ctrlpts[0] = M[0] + C.x * g, r.ctrlpts[1] = M[1] + C.y * g);
        }
        if (d || v || I) {
          A = !0;
          var X = {
            // delta
            x: r.ctrlpts[0] - n.x,
            y: r.ctrlpts[1] - n.y
          }, B = Math.sqrt(X.x * X.x + X.y * X.y), re = {
            // normalised delta
            x: X.x / B,
            y: X.y / B
          }, K = Math.max(i, s), q = {
            // *2 radius guarantees outside shape
            x: r.ctrlpts[0] + re.x * 2 * K,
            y: r.ctrlpts[1] + re.y * 2 * K
          }, ae = f.intersectLine(n.x, n.y, o, u, q.x, q.y, 0);
          I ? (r.ctrlpts[0] = r.ctrlpts[0] + re.x * (g - E), r.ctrlpts[1] = r.ctrlpts[1] + re.y * (g - E)) : (r.ctrlpts[0] = ae[0] + re.x * g, r.ctrlpts[1] = ae[1] + re.y * g);
        }
        A && this.findEndpoints(t);
      }
    }, Vt.storeAllpts = function(t) {
      var e = t._private.rscratch;
      if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
        e.allpts = [], e.allpts.push(e.startX, e.startY);
        for (var r = 0; r + 1 < e.ctrlpts.length; r += 2)
          e.allpts.push(e.ctrlpts[r], e.ctrlpts[r + 1]), r + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[r] + e.ctrlpts[r + 2]) / 2, (e.ctrlpts[r + 1] + e.ctrlpts[r + 3]) / 2);
        e.allpts.push(e.endX, e.endY);
        var a, n;
        e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = St(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = St(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
      } else if (e.edgeType === "straight")
        e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
      else if (e.edgeType === "segments")
        if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.segpts.length % 4 === 0) {
          var i = e.segpts.length / 2, s = i - 2;
          e.midX = (e.segpts[s] + e.segpts[i]) / 2, e.midY = (e.segpts[s + 1] + e.segpts[i + 1]) / 2;
        } else {
          var o = e.segpts.length / 2 - 1;
          e.midX = e.segpts[o], e.midY = e.segpts[o + 1];
        }
    }, Vt.checkForInvalidEdgeWarning = function(t) {
      var e = t[0]._private.rscratch;
      e.nodesOverlap || R(e.startX) && R(e.startY) && R(e.endX) && R(e.endY) ? e.loggedErr = !1 : e.loggedErr || (e.loggedErr = !0, ct("Edge `" + t.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
    }, Vt.findEdgeControlPoints = function(t) {
      var e = this;
      if (!(!t || t.length === 0)) {
        for (var r = this, a = r.cy, n = a.hasCompoundNodes(), i = {
          map: new ur(),
          get: function(x) {
            var k = this.map.get(x[0]);
            return k != null ? k.get(x[1]) : null;
          },
          set: function(x, k) {
            var C = this.map.get(x[0]);
            C == null && (C = new ur(), this.map.set(x[0], C)), C.set(x[1], k);
          }
        }, s = [], o = [], u = 0; u < t.length; u++) {
          var l = t[u], f = l._private, h = l.pstyle("curve-style").value;
          if (!(l.removed() || !l.takesUpSpace())) {
            if (h === "haystack") {
              o.push(l);
              continue;
            }
            var c = h === "unbundled-bezier" || h === "segments" || h === "straight" || h === "straight-triangle" || h === "taxi", d = h === "unbundled-bezier" || h === "bezier", v = f.source, y = f.target, p = v.poolIndex(), g = y.poolIndex(), m = [p, g].sort(), b = i.get(m);
            b == null && (b = {
              eles: []
            }, i.set(m, b), s.push(m)), b.eles.push(l), c && (b.hasUnbundled = !0), d && (b.hasBezier = !0);
          }
        }
        for (var E = function(x) {
          var k = s[x], C = i.get(k), F = void 0;
          if (!C.hasUnbundled) {
            var G = C.eles[0].parallelEdges().filter(function(et) {
              return et.isBundledBezier();
            });
            ui(C.eles), G.forEach(function(et) {
              return C.eles.push(et);
            }), C.eles.sort(function(et, fe) {
              return et.poolIndex() - fe.poolIndex();
            });
          }
          var M = C.eles[0], X = M.source(), B = M.target();
          if (X.poolIndex() > B.poolIndex()) {
            var re = X;
            X = B, B = re;
          }
          var K = C.srcPos = X.position(), q = C.tgtPos = B.position(), ae = C.srcW = X.outerWidth(), ue = C.srcH = X.outerHeight(), be = C.tgtW = B.outerWidth(), ie = C.tgtH = B.outerHeight(), ge = C.srcShape = r.nodeShapes[e.getNodeShape(X)], we = C.tgtShape = r.nodeShapes[e.getNodeShape(B)];
          C.dirCounts = {
            north: 0,
            west: 0,
            south: 0,
            east: 0,
            northwest: 0,
            southwest: 0,
            northeast: 0,
            southeast: 0
          };
          for (var De = 0; De < C.eles.length; De++) {
            var xe = C.eles[De], Le = xe[0]._private.rscratch, se = xe.pstyle("curve-style").value, Te = se === "unbundled-bezier" || se === "segments" || se === "taxi", Ae = !X.same(xe.source());
            if (!C.calculatedIntersection && X !== B && (C.hasBezier || C.hasUnbundled)) {
              C.calculatedIntersection = !0;
              var Se = ge.intersectLine(K.x, K.y, ae, ue, q.x, q.y, 0), Ne = C.srcIntn = Se, Fe = we.intersectLine(q.x, q.y, be, ie, K.x, K.y, 0), Xe = C.tgtIntn = Fe, Ie = C.intersectionPts = {
                x1: Se[0],
                x2: Fe[0],
                y1: Se[1],
                y2: Fe[1]
              }, Re = C.posPts = {
                x1: K.x,
                x2: q.x,
                y1: K.y,
                y2: q.y
              }, $e = Fe[1] - Se[1], ze = Fe[0] - Se[0], Be = Math.sqrt(ze * ze + $e * $e), _e = C.vector = {
                x: ze,
                y: $e
              }, rt = C.vectorNorm = {
                x: _e.x / Be,
                y: _e.y / Be
              }, je = {
                x: -rt.y,
                y: rt.x
              };
              C.nodesOverlap = !R(Be) || we.checkPoint(Se[0], Se[1], 0, be, ie, q.x, q.y) || ge.checkPoint(Fe[0], Fe[1], 0, ae, ue, K.x, K.y), C.vectorNormInverse = je, F = {
                nodesOverlap: C.nodesOverlap,
                dirCounts: C.dirCounts,
                calculatedIntersection: !0,
                hasBezier: C.hasBezier,
                hasUnbundled: C.hasUnbundled,
                eles: C.eles,
                srcPos: q,
                tgtPos: K,
                srcW: be,
                srcH: ie,
                tgtW: ae,
                tgtH: ue,
                srcIntn: Xe,
                tgtIntn: Ne,
                srcShape: we,
                tgtShape: ge,
                posPts: {
                  x1: Re.x2,
                  y1: Re.y2,
                  x2: Re.x1,
                  y2: Re.y1
                },
                intersectionPts: {
                  x1: Ie.x2,
                  y1: Ie.y2,
                  x2: Ie.x1,
                  y2: Ie.y1
                },
                vector: {
                  x: -_e.x,
                  y: -_e.y
                },
                vectorNorm: {
                  x: -rt.x,
                  y: -rt.y
                },
                vectorNormInverse: {
                  x: -je.x,
                  y: -je.y
                }
              };
            }
            var qe = Ae ? F : C;
            Le.nodesOverlap = qe.nodesOverlap, Le.srcIntn = qe.srcIntn, Le.tgtIntn = qe.tgtIntn, n && (X.isParent() || X.isChild() || B.isParent() || B.isChild()) && (X.parents().anySame(B) || B.parents().anySame(X) || X.same(B) && X.isParent()) ? e.findCompoundLoopPoints(xe, qe, De, Te) : X === B ? e.findLoopPoints(xe, qe, De, Te) : se === "segments" ? e.findSegmentsPoints(xe, qe) : se === "taxi" ? e.findTaxiPoints(xe, qe) : se === "straight" || !Te && C.eles.length % 2 === 1 && De === Math.floor(C.eles.length / 2) ? e.findStraightEdgePoints(xe) : e.findBezierPoints(xe, qe, De, Te, Ae), e.findEndpoints(xe), e.tryToCorrectInvalidPoints(xe, qe), e.checkForInvalidEdgeWarning(xe), e.storeAllpts(xe), e.storeEdgeProjections(xe), e.calculateArrowAngles(xe), e.recalculateEdgeLabelProjections(xe), e.calculateLabelAngles(xe);
          }
        }, I = 0; I < s.length; I++)
          E(I);
        this.findHaystackPoints(o);
      }
    };
    function sl(t) {
      var e = [];
      if (t != null) {
        for (var r = 0; r < t.length; r += 2) {
          var a = t[r], n = t[r + 1];
          e.push({
            x: a,
            y: n
          });
        }
        return e;
      }
    }
    Vt.getSegmentPoints = function(t) {
      var e = t[0]._private.rscratch, r = e.edgeType;
      if (r === "segments")
        return this.recalculateRenderedStyle(t), sl(e.segpts);
    }, Vt.getControlPoints = function(t) {
      var e = t[0]._private.rscratch, r = e.edgeType;
      if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound")
        return this.recalculateRenderedStyle(t), sl(e.ctrlpts);
    }, Vt.getEdgeMidpoint = function(t) {
      var e = t[0]._private.rscratch;
      return this.recalculateRenderedStyle(t), {
        x: e.midX,
        y: e.midY
      };
    };
    var Ja = {};
    Ja.manualEndptToPx = function(t, e) {
      var r = this, a = t.position(), n = t.outerWidth(), i = t.outerHeight();
      if (e.value.length === 2) {
        var s = [e.pfValue[0], e.pfValue[1]];
        return e.units[0] === "%" && (s[0] = s[0] * n), e.units[1] === "%" && (s[1] = s[1] * i), s[0] += a.x, s[1] += a.y, s;
      } else {
        var o = e.pfValue[0];
        o = -Math.PI / 2 + o;
        var u = 2 * Math.max(n, i), l = [a.x + Math.cos(o) * u, a.y + Math.sin(o) * u];
        return r.nodeShapes[this.getNodeShape(t)].intersectLine(a.x, a.y, n, i, l[0], l[1], 0);
      }
    }, Ja.findEndpoints = function(t) {
      var e = this, r, a = t.source()[0], n = t.target()[0], i = a.position(), s = n.position(), o = t.pstyle("target-arrow-shape").value, u = t.pstyle("source-arrow-shape").value, l = t.pstyle("target-distance-from-node").pfValue, f = t.pstyle("source-distance-from-node").pfValue, h = t.pstyle("curve-style").value, c = t._private.rscratch, d = c.edgeType, v = h === "taxi", y = d === "self" || d === "compound", p = d === "bezier" || d === "multibezier" || y, g = d !== "bezier", m = d === "straight" || d === "segments", b = d === "segments", E = p || g || m, I = y || v, A = t.pstyle("source-endpoint"), x = I ? "outside-to-node" : A.value, k = t.pstyle("target-endpoint"), C = I ? "outside-to-node" : k.value;
      c.srcManEndpt = A, c.tgtManEndpt = k;
      var F, G, M, X;
      if (p) {
        var B = [c.ctrlpts[0], c.ctrlpts[1]], re = g ? [c.ctrlpts[c.ctrlpts.length - 2], c.ctrlpts[c.ctrlpts.length - 1]] : B;
        F = re, G = B;
      } else if (m) {
        var K = b ? c.segpts.slice(0, 2) : [s.x, s.y], q = b ? c.segpts.slice(c.segpts.length - 2) : [i.x, i.y];
        F = q, G = K;
      }
      if (C === "inside-to-node")
        r = [s.x, s.y];
      else if (k.units)
        r = this.manualEndptToPx(n, k);
      else if (C === "outside-to-line")
        r = c.tgtIntn;
      else if (C === "outside-to-node" || C === "outside-to-node-or-label" ? M = F : (C === "outside-to-line" || C === "outside-to-line-or-label") && (M = [i.x, i.y]), r = e.nodeShapes[this.getNodeShape(n)].intersectLine(s.x, s.y, n.outerWidth(), n.outerHeight(), M[0], M[1], 0), C === "outside-to-node-or-label" || C === "outside-to-line-or-label") {
        var ae = n._private.rscratch, ue = ae.labelWidth, be = ae.labelHeight, ie = ae.labelX, ge = ae.labelY, we = ue / 2, De = be / 2, xe = n.pstyle("text-valign").value;
        xe === "top" ? ge -= De : xe === "bottom" && (ge += De);
        var Le = n.pstyle("text-halign").value;
        Le === "left" ? ie -= we : Le === "right" && (ie += we);
        var se = Fa(M[0], M[1], [ie - we, ge - De, ie + we, ge - De, ie + we, ge + De, ie - we, ge + De], s.x, s.y);
        if (se.length > 0) {
          var Te = i, Ae = Fr(Te, ea(r)), Se = Fr(Te, ea(se)), Ne = Ae;
          if (Se < Ae && (r = se, Ne = Se), se.length > 2) {
            var Fe = Fr(Te, {
              x: se[2],
              y: se[3]
            });
            Fe < Ne && (r = [se[2], se[3]]);
          }
        }
      }
      var Xe = wn(r, F, e.arrowShapes[o].spacing(t) + l), Ie = wn(r, F, e.arrowShapes[o].gap(t) + l);
      if (c.endX = Ie[0], c.endY = Ie[1], c.arrowEndX = Xe[0], c.arrowEndY = Xe[1], x === "inside-to-node")
        r = [i.x, i.y];
      else if (A.units)
        r = this.manualEndptToPx(a, A);
      else if (x === "outside-to-line")
        r = c.srcIntn;
      else if (x === "outside-to-node" || x === "outside-to-node-or-label" ? X = G : (x === "outside-to-line" || x === "outside-to-line-or-label") && (X = [s.x, s.y]), r = e.nodeShapes[this.getNodeShape(a)].intersectLine(i.x, i.y, a.outerWidth(), a.outerHeight(), X[0], X[1], 0), x === "outside-to-node-or-label" || x === "outside-to-line-or-label") {
        var Re = a._private.rscratch, $e = Re.labelWidth, ze = Re.labelHeight, Be = Re.labelX, _e = Re.labelY, rt = $e / 2, je = ze / 2, qe = a.pstyle("text-valign").value;
        qe === "top" ? _e -= je : qe === "bottom" && (_e += je);
        var et = a.pstyle("text-halign").value;
        et === "left" ? Be -= rt : et === "right" && (Be += rt);
        var fe = Fa(X[0], X[1], [Be - rt, _e - je, Be + rt, _e - je, Be + rt, _e + je, Be - rt, _e + je], i.x, i.y);
        if (fe.length > 0) {
          var O = s, oe = Fr(O, ea(r)), Ce = Fr(O, ea(fe)), ve = oe;
          if (Ce < oe && (r = [fe[0], fe[1]], ve = Ce), fe.length > 2) {
            var ye = Fr(O, {
              x: fe[2],
              y: fe[3]
            });
            ye < ve && (r = [fe[2], fe[3]]);
          }
        }
      }
      var Ue = wn(r, G, e.arrowShapes[u].spacing(t) + f), Ee = wn(r, G, e.arrowShapes[u].gap(t) + f);
      c.startX = Ee[0], c.startY = Ee[1], c.arrowStartX = Ue[0], c.arrowStartY = Ue[1], E && (!R(c.startX) || !R(c.startY) || !R(c.endX) || !R(c.endY) ? c.badLine = !0 : c.badLine = !1);
    }, Ja.getSourceEndpoint = function(t) {
      var e = t[0]._private.rscratch;
      switch (this.recalculateRenderedStyle(t), e.edgeType) {
        case "haystack":
          return {
            x: e.haystackPts[0],
            y: e.haystackPts[1]
          };
        default:
          return {
            x: e.arrowStartX,
            y: e.arrowStartY
          };
      }
    }, Ja.getTargetEndpoint = function(t) {
      var e = t[0]._private.rscratch;
      switch (this.recalculateRenderedStyle(t), e.edgeType) {
        case "haystack":
          return {
            x: e.haystackPts[2],
            y: e.haystackPts[3]
          };
        default:
          return {
            x: e.arrowEndX,
            y: e.arrowEndY
          };
      }
    };
    var Vi = {};
    function mg(t, e, r) {
      for (var a = function(l, f, h, c) {
        return St(l, f, h, c);
      }, n = e._private, i = n.rstyle.bezierPts, s = 0; s < t.bezierProjPcts.length; s++) {
        var o = t.bezierProjPcts[s];
        i.push({
          x: a(r[0], r[2], r[4], o),
          y: a(r[1], r[3], r[5], o)
        });
      }
    }
    Vi.storeEdgeProjections = function(t) {
      var e = t._private, r = e.rscratch, a = r.edgeType;
      if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
        e.rstyle.bezierPts = [];
        for (var n = 0; n + 5 < r.allpts.length; n += 4)
          mg(this, t, r.allpts.slice(n, n + 6));
      } else if (a === "segments")
        for (var i = e.rstyle.linePts = [], n = 0; n + 1 < r.allpts.length; n += 2)
          i.push({
            x: r.allpts[n],
            y: r.allpts[n + 1]
          });
      else if (a === "haystack") {
        var s = r.haystackPts;
        e.rstyle.haystackPts = [{
          x: s[0],
          y: s[1]
        }, {
          x: s[2],
          y: s[3]
        }];
      }
      e.rstyle.arrowWidth = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth;
    }, Vi.recalculateEdgeProjections = function(t) {
      this.findEdgeControlPoints(t);
    };
    var hr = {};
    hr.recalculateNodeLabelProjection = function(t) {
      var e = t.pstyle("label").strValue;
      if (!ke(e)) {
        var r, a, n = t._private, i = t.width(), s = t.height(), o = t.padding(), u = t.position(), l = t.pstyle("text-halign").strValue, f = t.pstyle("text-valign").strValue, h = n.rscratch, c = n.rstyle;
        switch (l) {
          case "left":
            r = u.x - i / 2 - o;
            break;
          case "right":
            r = u.x + i / 2 + o;
            break;
          default:
            r = u.x;
        }
        switch (f) {
          case "top":
            a = u.y - s / 2 - o;
            break;
          case "bottom":
            a = u.y + s / 2 + o;
            break;
          default:
            a = u.y;
        }
        h.labelX = r, h.labelY = a, c.labelX = r, c.labelY = a, this.calculateLabelAngles(t), this.applyLabelDimensions(t);
      }
    };
    var ol = function(e, r) {
      var a = Math.atan(r / e);
      return e === 0 && a < 0 && (a = a * -1), a;
    }, ll = function(e, r) {
      var a = r.x - e.x, n = r.y - e.y;
      return ol(a, n);
    }, bg = function(e, r, a, n) {
      var i = Pa(0, n - 1e-3, 1), s = Pa(0, n + 1e-3, 1), o = ta(e, r, a, i), u = ta(e, r, a, s);
      return ll(o, u);
    };
    hr.recalculateEdgeLabelProjections = function(t) {
      var e, r = t._private, a = r.rscratch, n = this, i = {
        mid: t.pstyle("label").strValue,
        source: t.pstyle("source-label").strValue,
        target: t.pstyle("target-label").strValue
      };
      if (i.mid || i.source || i.target) {
        e = {
          x: a.midX,
          y: a.midY
        };
        var s = function(h, c, d) {
          Tr(r.rscratch, h, c, d), Tr(r.rstyle, h, c, d);
        };
        s("labelX", null, e.x), s("labelY", null, e.y);
        var o = ol(a.midDispX, a.midDispY);
        s("labelAutoAngle", null, o);
        var u = function f() {
          if (f.cache)
            return f.cache;
          for (var h = [], c = 0; c + 5 < a.allpts.length; c += 4) {
            var d = {
              x: a.allpts[c],
              y: a.allpts[c + 1]
            }, v = {
              x: a.allpts[c + 2],
              y: a.allpts[c + 3]
            }, y = {
              x: a.allpts[c + 4],
              y: a.allpts[c + 5]
            };
            h.push({
              p0: d,
              p1: v,
              p2: y,
              startDist: 0,
              length: 0,
              segments: []
            });
          }
          var p = r.rstyle.bezierPts, g = n.bezierProjPcts.length;
          function m(x, k, C, F, G) {
            var M = Br(k, C), X = x.segments[x.segments.length - 1], B = {
              p0: k,
              p1: C,
              t0: F,
              t1: G,
              startDist: X ? X.startDist + X.length : 0,
              length: M
            };
            x.segments.push(B), x.length += M;
          }
          for (var b = 0; b < h.length; b++) {
            var E = h[b], I = h[b - 1];
            I && (E.startDist = I.startDist + I.length), m(E, E.p0, p[b * g], 0, n.bezierProjPcts[0]);
            for (var A = 0; A < g - 1; A++)
              m(E, p[b * g + A], p[b * g + A + 1], n.bezierProjPcts[A], n.bezierProjPcts[A + 1]);
            m(E, p[b * g + g - 1], E.p2, n.bezierProjPcts[g - 1], 1);
          }
          return f.cache = h;
        }, l = function(h) {
          var c, d = h === "source";
          if (i[h]) {
            var v = t.pstyle(h + "-text-offset").pfValue;
            switch (a.edgeType) {
              case "self":
              case "compound":
              case "bezier":
              case "multibezier": {
                for (var y = u(), p, g = 0, m = 0, b = 0; b < y.length; b++) {
                  for (var E = y[d ? b : y.length - 1 - b], I = 0; I < E.segments.length; I++) {
                    var A = E.segments[d ? I : E.segments.length - 1 - I], x = b === y.length - 1 && I === E.segments.length - 1;
                    if (g = m, m += A.length, m >= v || x) {
                      p = {
                        cp: E,
                        segment: A
                      };
                      break;
                    }
                  }
                  if (p)
                    break;
                }
                var k = p.cp, C = p.segment, F = (v - g) / C.length, G = C.t1 - C.t0, M = d ? C.t0 + G * F : C.t1 - G * F;
                M = Pa(0, M, 1), e = ta(k.p0, k.p1, k.p2, M), c = bg(k.p0, k.p1, k.p2, M);
                break;
              }
              case "straight":
              case "segments":
              case "haystack": {
                for (var X = 0, B, re, K, q, ae = a.allpts.length, ue = 0; ue + 3 < ae && (d ? (K = {
                  x: a.allpts[ue],
                  y: a.allpts[ue + 1]
                }, q = {
                  x: a.allpts[ue + 2],
                  y: a.allpts[ue + 3]
                }) : (K = {
                  x: a.allpts[ae - 2 - ue],
                  y: a.allpts[ae - 1 - ue]
                }, q = {
                  x: a.allpts[ae - 4 - ue],
                  y: a.allpts[ae - 3 - ue]
                }), B = Br(K, q), re = X, X += B, !(X >= v)); ue += 2)
                  ;
                var be = v - re, ie = be / B;
                ie = Pa(0, ie, 1), e = Lf(K, q, ie), c = ll(K, q);
                break;
              }
            }
            s("labelX", h, e.x), s("labelY", h, e.y), s("labelAutoAngle", h, c);
          }
        };
        l("source"), l("target"), this.applyLabelDimensions(t);
      }
    }, hr.applyLabelDimensions = function(t) {
      this.applyPrefixedLabelDimensions(t), t.isEdge() && (this.applyPrefixedLabelDimensions(t, "source"), this.applyPrefixedLabelDimensions(t, "target"));
    }, hr.applyPrefixedLabelDimensions = function(t, e) {
      var r = t._private, a = this.getLabelText(t, e), n = this.calculateLabelDimensions(t, a), i = t.pstyle("line-height").pfValue, s = t.pstyle("text-wrap").strValue, o = tr(r.rscratch, "labelWrapCachedLines", e) || [], u = s !== "wrap" ? 1 : Math.max(o.length, 1), l = n.height / u, f = l * i, h = n.width, c = n.height + (u - 1) * (i - 1) * l;
      Tr(r.rstyle, "labelWidth", e, h), Tr(r.rscratch, "labelWidth", e, h), Tr(r.rstyle, "labelHeight", e, c), Tr(r.rscratch, "labelHeight", e, c), Tr(r.rscratch, "labelLineHeight", e, f);
    }, hr.getLabelText = function(t, e) {
      var r = t._private, a = e ? e + "-" : "", n = t.pstyle(a + "label").strValue, i = t.pstyle("text-transform").value, s = function(be, ie) {
        return ie ? (Tr(r.rscratch, be, e, ie), ie) : tr(r.rscratch, be, e);
      };
      if (!n)
        return "";
      i == "none" || (i == "uppercase" ? n = n.toUpperCase() : i == "lowercase" && (n = n.toLowerCase()));
      var o = t.pstyle("text-wrap").value;
      if (o === "wrap") {
        var u = s("labelKey");
        if (u != null && s("labelWrapKey") === u)
          return s("labelWrapCachedText");
        for (var l = "​", f = n.split(`
`), h = t.pstyle("text-max-width").pfValue, c = t.pstyle("text-overflow-wrap").value, d = c === "anywhere", v = [], y = /[\s\u200b]+/, p = d ? "" : " ", g = 0; g < f.length; g++) {
          var m = f[g], b = this.calculateLabelDimensions(t, m), E = b.width;
          if (d) {
            var I = m.split("").join(l);
            m = I;
          }
          if (E > h) {
            for (var A = m.split(y), x = "", k = 0; k < A.length; k++) {
              var C = A[k], F = x.length === 0 ? C : x + p + C, G = this.calculateLabelDimensions(t, F), M = G.width;
              M <= h ? x += C + p : (x && v.push(x), x = C + p);
            }
            x.match(/^[\s\u200b]+$/) || v.push(x);
          } else
            v.push(m);
        }
        s("labelWrapCachedLines", v), n = s("labelWrapCachedText", v.join(`
`)), s("labelWrapKey", u);
      } else if (o === "ellipsis") {
        var X = t.pstyle("text-max-width").pfValue, B = "", re = "…", K = !1;
        if (this.calculateLabelDimensions(t, n).width < X)
          return n;
        for (var q = 0; q < n.length; q++) {
          var ae = this.calculateLabelDimensions(t, B + n[q] + re).width;
          if (ae > X)
            break;
          B += n[q], q === n.length - 1 && (K = !0);
        }
        return K || (B += re), B;
      }
      return n;
    }, hr.getLabelJustification = function(t) {
      var e = t.pstyle("text-justification").strValue, r = t.pstyle("text-halign").strValue;
      if (e === "auto")
        if (t.isNode())
          switch (r) {
            case "left":
              return "right";
            case "right":
              return "left";
            default:
              return "center";
          }
        else
          return "center";
      else
        return e;
    }, hr.calculateLabelDimensions = function(t, e) {
      var r = this, a = Pr(e, t._private.labelDimsKey), n = r.labelDimCache || (r.labelDimCache = []), i = n[a];
      if (i != null)
        return i;
      var s = 0, o = t.pstyle("font-style").strValue, u = t.pstyle("font-size").pfValue, l = t.pstyle("font-family").strValue, f = t.pstyle("font-weight").strValue, h = this.labelCalcCanvas, c = this.labelCalcCanvasContext;
      if (!h) {
        h = this.labelCalcCanvas = document.createElement("canvas"), c = this.labelCalcCanvasContext = h.getContext("2d");
        var d = h.style;
        d.position = "absolute", d.left = "-9999px", d.top = "-9999px", d.zIndex = "-1", d.visibility = "hidden", d.pointerEvents = "none";
      }
      c.font = "".concat(o, " ").concat(f, " ").concat(u, "px ").concat(l);
      for (var v = 0, y = 0, p = e.split(`
`), g = 0; g < p.length; g++) {
        var m = p[g], b = c.measureText(m), E = Math.ceil(b.width), I = u;
        v = Math.max(E, v), y += I;
      }
      return v += s, y += s, n[a] = {
        width: v,
        height: y
      };
    }, hr.calculateLabelAngle = function(t, e) {
      var r = t._private, a = r.rscratch, n = t.isEdge(), i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = s.strValue;
      return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
    }, hr.calculateLabelAngles = function(t) {
      var e = this, r = t.isEdge(), a = t._private, n = a.rscratch;
      n.labelAngle = e.calculateLabelAngle(t), r && (n.sourceLabelAngle = e.calculateLabelAngle(t, "source"), n.targetLabelAngle = e.calculateLabelAngle(t, "target"));
    };
    var ul = {}, fl = 28, hl = !1;
    ul.getNodeShape = function(t) {
      var e = this, r = t.pstyle("shape").value;
      if (r === "cutrectangle" && (t.width() < fl || t.height() < fl))
        return hl || (ct("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), hl = !0), "rectangle";
      if (t.isParent())
        return r === "rectangle" || r === "roundrectangle" || r === "round-rectangle" || r === "cutrectangle" || r === "cut-rectangle" || r === "barrel" ? r : "rectangle";
      if (r === "polygon") {
        var a = t.pstyle("shape-polygon-points").value;
        return e.nodeShapes.makePolygon(a).name;
      }
      return r;
    };
    var Zn = {};
    Zn.registerCalculationListeners = function() {
      var t = this.cy, e = t.collection(), r = this, a = function(s) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        if (e.merge(s), o)
          for (var u = 0; u < s.length; u++) {
            var l = s[u], f = l._private, h = f.rstyle;
            h.clean = !1, h.cleanConnected = !1;
          }
      };
      r.binder(t).on("bounds.* dirty.*", function(s) {
        var o = s.target;
        a(o);
      }).on("style.* background.*", function(s) {
        var o = s.target;
        a(o, !1);
      });
      var n = function(s) {
        if (s) {
          var o = r.onUpdateEleCalcsFns;
          e.cleanStyle();
          for (var u = 0; u < e.length; u++) {
            var l = e[u], f = l._private.rstyle;
            l.isNode() && !f.cleanConnected && (a(l.connectedEdges()), f.cleanConnected = !0);
          }
          if (o)
            for (var h = 0; h < o.length; h++) {
              var c = o[h];
              c(s, e);
            }
          r.recalculateRenderedStyle(e), e = t.collection();
        }
      };
      r.flushRenderedStyleQueue = function() {
        n(!0);
      }, r.beforeRender(n, r.beforeRenderPriorities.eleCalcs);
    }, Zn.onUpdateEleCalcs = function(t) {
      var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
      e.push(t);
    }, Zn.recalculateRenderedStyle = function(t, e) {
      var r = function(E) {
        return E._private.rstyle.cleanConnected;
      }, a = [], n = [];
      if (!this.destroyed) {
        e === void 0 && (e = !0);
        for (var i = 0; i < t.length; i++) {
          var s = t[i], o = s._private, u = o.rstyle;
          s.isEdge() && (!r(s.source()) || !r(s.target())) && (u.clean = !1), !(e && u.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? n.push(s) : a.push(s), u.clean = !0);
        }
        for (var l = 0; l < n.length; l++) {
          var f = n[l], h = f._private, c = h.rstyle, d = f.position();
          this.recalculateNodeLabelProjection(f), c.nodeX = d.x, c.nodeY = d.y, c.nodeW = f.pstyle("width").pfValue, c.nodeH = f.pstyle("height").pfValue;
        }
        this.recalculateEdgeProjections(a);
        for (var v = 0; v < a.length; v++) {
          var y = a[v], p = y._private, g = p.rstyle, m = p.rscratch;
          g.srcX = m.arrowStartX, g.srcY = m.arrowStartY, g.tgtX = m.arrowEndX, g.tgtY = m.arrowEndY, g.midX = m.midX, g.midY = m.midY, g.labelAngle = m.labelAngle, g.sourceLabelAngle = m.sourceLabelAngle, g.targetLabelAngle = m.targetLabelAngle;
        }
      }
    };
    var Qn = {};
    Qn.updateCachedGrabbedEles = function() {
      var t = this.cachedZSortedEles;
      if (t) {
        t.drag = [], t.nondrag = [];
        for (var e = [], r = 0; r < t.length; r++) {
          var a = t[r], n = a._private.rscratch;
          a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? t.drag.push(a) : t.nondrag.push(a);
        }
        for (var r = 0; r < e.length; r++) {
          var a = e[r];
          t.drag.push(a);
        }
      }
    }, Qn.invalidateCachedZSortedEles = function() {
      this.cachedZSortedEles = null;
    }, Qn.getCachedZSortedEles = function(t) {
      if (t || !this.cachedZSortedEles) {
        var e = this.cy.mutableElements().toArray();
        e.sort(ko), e.interactive = e.filter(function(r) {
          return r.interactive();
        }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
      } else
        e = this.cachedZSortedEles;
      return e;
    };
    var cl = {};
    [_r, Kn, Vt, Ja, Vi, hr, ul, Zn, Qn].forEach(function(t) {
      He(cl, t);
    });
    var vl = {};
    vl.getCachedImage = function(t, e, r) {
      var a = this, n = a.imageCache = a.imageCache || {}, i = n[t];
      if (i)
        return i.image.complete || i.image.addEventListener("load", r), i.image;
      i = n[t] = n[t] || {};
      var s = i.image = new Image();
      s.addEventListener("load", r), s.addEventListener("error", function() {
        s.error = !0;
      });
      var o = "data:", u = t.substring(0, o.length).toLowerCase() === o;
      return u || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = t, s;
    };
    var ma = {};
    ma.registerBinding = function(t, e, r, a) {
      var n = Array.prototype.slice.apply(arguments, [1]), i = this.binder(t);
      return i.on.apply(i, n);
    }, ma.binder = function(t) {
      var e = this, r = e.cy.window(), a = t === r || t === r.document || t === r.document.body || Ve(t);
      if (e.supportsPassiveEvents == null) {
        var n = !1;
        try {
          var i = Object.defineProperty({}, "passive", {
            get: function() {
              return n = !0, !0;
            }
          });
          r.addEventListener("test", null, i);
        } catch {
        }
        e.supportsPassiveEvents = n;
      }
      var s = function(u, l, f) {
        var h = Array.prototype.slice.call(arguments);
        return a && e.supportsPassiveEvents && (h[2] = {
          capture: f ?? !1,
          passive: !1,
          once: !1
        }), e.bindings.push({
          target: t,
          args: h
        }), (t.addEventListener || t.on).apply(t, h), this;
      };
      return {
        on: s,
        addEventListener: s,
        addListener: s,
        bind: s
      };
    }, ma.nodeIsDraggable = function(t) {
      return t && t.isNode() && !t.locked() && t.grabbable();
    }, ma.nodeIsGrabbable = function(t) {
      return this.nodeIsDraggable(t) && t.interactive();
    }, ma.load = function() {
      var t = this, e = t.cy.window(), r = function(O) {
        return O.selected();
      }, a = function(O, oe, Ce, ve) {
        O == null && (O = t.cy);
        for (var ye = 0; ye < oe.length; ye++) {
          var Ue = oe[ye];
          O.emit({
            originalEvent: Ce,
            type: Ue,
            position: ve
          });
        }
      }, n = function(O) {
        return O.shiftKey || O.metaKey || O.ctrlKey;
      }, i = function(O, oe) {
        var Ce = !0;
        if (t.cy.hasCompoundNodes() && O && O.pannable())
          for (var ve = 0; oe && ve < oe.length; ve++) {
            var O = oe[ve];
            if (O.isNode() && O.isParent() && !O.pannable()) {
              Ce = !1;
              break;
            }
          }
        else
          Ce = !0;
        return Ce;
      }, s = function(O) {
        O[0]._private.grabbed = !0;
      }, o = function(O) {
        O[0]._private.grabbed = !1;
      }, u = function(O) {
        O[0]._private.rscratch.inDragLayer = !0;
      }, l = function(O) {
        O[0]._private.rscratch.inDragLayer = !1;
      }, f = function(O) {
        O[0]._private.rscratch.isGrabTarget = !0;
      }, h = function(O) {
        O[0]._private.rscratch.isGrabTarget = !1;
      }, c = function(O, oe) {
        var Ce = oe.addToList, ve = Ce.has(O);
        !ve && O.grabbable() && !O.locked() && (Ce.merge(O), s(O));
      }, d = function(O, oe) {
        if (O.cy().hasCompoundNodes() && !(oe.inDragLayer == null && oe.addToList == null)) {
          var Ce = O.descendants();
          oe.inDragLayer && (Ce.forEach(u), Ce.connectedEdges().forEach(u)), oe.addToList && c(Ce, oe);
        }
      }, v = function(O, oe) {
        oe = oe || {};
        var Ce = O.cy().hasCompoundNodes();
        oe.inDragLayer && (O.forEach(u), O.neighborhood().stdFilter(function(ve) {
          return !Ce || ve.isEdge();
        }).forEach(u)), oe.addToList && O.forEach(function(ve) {
          c(ve, oe);
        }), d(O, oe), g(O, {
          inDragLayer: oe.inDragLayer
        }), t.updateCachedGrabbedEles();
      }, y = v, p = function(O) {
        O && (t.getCachedZSortedEles().forEach(function(oe) {
          o(oe), l(oe), h(oe);
        }), t.updateCachedGrabbedEles());
      }, g = function(O, oe) {
        if (!(oe.inDragLayer == null && oe.addToList == null) && O.cy().hasCompoundNodes()) {
          var Ce = O.ancestors().orphans();
          if (!Ce.same(O)) {
            var ve = Ce.descendants().spawnSelf().merge(Ce).unmerge(O).unmerge(O.descendants()), ye = ve.connectedEdges();
            oe.inDragLayer && (ye.forEach(u), ve.forEach(u)), oe.addToList && ve.forEach(function(Ue) {
              c(Ue, oe);
            });
          }
        }
      }, m = function() {
        document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
      }, b = typeof MutationObserver < "u", E = typeof ResizeObserver < "u";
      b ? (t.removeObserver = new MutationObserver(function(fe) {
        for (var O = 0; O < fe.length; O++) {
          var oe = fe[O], Ce = oe.removedNodes;
          if (Ce)
            for (var ve = 0; ve < Ce.length; ve++) {
              var ye = Ce[ve];
              if (ye === t.container) {
                t.destroy();
                break;
              }
            }
        }
      }), t.container.parentNode && t.removeObserver.observe(t.container.parentNode, {
        childList: !0
      })) : t.registerBinding(t.container, "DOMNodeRemoved", function(fe) {
        t.destroy();
      });
      var I = fn(function() {
        t.cy.resize();
      }, 100);
      b && (t.styleObserver = new MutationObserver(I), t.styleObserver.observe(t.container, {
        attributes: !0
      })), t.registerBinding(e, "resize", I), E && (t.resizeObserver = new ResizeObserver(I), t.resizeObserver.observe(t.container));
      var A = function(O, oe) {
        for (; O != null; )
          oe(O), O = O.parentNode;
      }, x = function() {
        t.invalidateContainerClientCoordsCache();
      };
      A(t.container, function(fe) {
        t.registerBinding(fe, "transitionend", x), t.registerBinding(fe, "animationend", x), t.registerBinding(fe, "scroll", x);
      }), t.registerBinding(t.container, "contextmenu", function(fe) {
        fe.preventDefault();
      });
      var k = function() {
        return t.selection[4] !== 0;
      }, C = function(O) {
        for (var oe = t.findContainerClientCoords(), Ce = oe[0], ve = oe[1], ye = oe[2], Ue = oe[3], Ee = O.touches ? O.touches : [O], Ge = !1, Qe = 0; Qe < Ee.length; Qe++) {
          var ft = Ee[Qe];
          if (Ce <= ft.clientX && ft.clientX <= Ce + ye && ve <= ft.clientY && ft.clientY <= ve + Ue) {
            Ge = !0;
            break;
          }
        }
        if (!Ge)
          return !1;
        for (var We = t.container, ot = O.target, Ke = ot.parentNode, Je = !1; Ke; ) {
          if (Ke === We) {
            Je = !0;
            break;
          }
          Ke = Ke.parentNode;
        }
        return !!Je;
      };
      t.registerBinding(t.container, "mousedown", function(O) {
        if (C(O)) {
          O.preventDefault(), m(), t.hoverData.capture = !0, t.hoverData.which = O.which;
          var oe = t.cy, Ce = [O.clientX, O.clientY], ve = t.projectIntoViewport(Ce[0], Ce[1]), ye = t.selection, Ue = t.findNearestElements(ve[0], ve[1], !0, !1), Ee = Ue[0], Ge = t.dragData.possibleDragElements;
          t.hoverData.mdownPos = ve, t.hoverData.mdownGPos = Ce;
          var Qe = function() {
            t.hoverData.tapholdCancelled = !1, clearTimeout(t.hoverData.tapholdTimeout), t.hoverData.tapholdTimeout = setTimeout(function() {
              if (!t.hoverData.tapholdCancelled) {
                var Dt = t.hoverData.down;
                Dt ? Dt.emit({
                  originalEvent: O,
                  type: "taphold",
                  position: {
                    x: ve[0],
                    y: ve[1]
                  }
                }) : oe.emit({
                  originalEvent: O,
                  type: "taphold",
                  position: {
                    x: ve[0],
                    y: ve[1]
                  }
                });
              }
            }, t.tapholdDuration);
          };
          if (O.which == 3) {
            t.hoverData.cxtStarted = !0;
            var ft = {
              originalEvent: O,
              type: "cxttapstart",
              position: {
                x: ve[0],
                y: ve[1]
              }
            };
            Ee ? (Ee.activate(), Ee.emit(ft), t.hoverData.down = Ee) : oe.emit(ft), t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), t.hoverData.cxtDragged = !1;
          } else if (O.which == 1) {
            Ee && Ee.activate();
            {
              if (Ee != null && t.nodeIsGrabbable(Ee)) {
                var We = function(Dt) {
                  return {
                    originalEvent: O,
                    type: Dt,
                    position: {
                      x: ve[0],
                      y: ve[1]
                    }
                  };
                }, ot = function(Dt) {
                  Dt.emit(We("grab"));
                };
                if (f(Ee), !Ee.selected())
                  Ge = t.dragData.possibleDragElements = oe.collection(), y(Ee, {
                    addToList: Ge
                  }), Ee.emit(We("grabon")).emit(We("grab"));
                else {
                  Ge = t.dragData.possibleDragElements = oe.collection();
                  var Ke = oe.$(function(Je) {
                    return Je.isNode() && Je.selected() && t.nodeIsGrabbable(Je);
                  });
                  v(Ke, {
                    addToList: Ge
                  }), Ee.emit(We("grabon")), Ke.forEach(ot);
                }
                t.redrawHint("eles", !0), t.redrawHint("drag", !0);
              }
              t.hoverData.down = Ee, t.hoverData.downs = Ue, t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
            }
            a(Ee, ["mousedown", "tapstart", "vmousedown"], O, {
              x: ve[0],
              y: ve[1]
            }), Ee == null ? (ye[4] = 1, t.data.bgActivePosistion = {
              x: ve[0],
              y: ve[1]
            }, t.redrawHint("select", !0), t.redraw()) : Ee.pannable() && (ye[4] = 1), Qe();
          }
          ye[0] = ye[2] = ve[0], ye[1] = ye[3] = ve[1];
        }
      }, !1), t.registerBinding(e, "mousemove", function(O) {
        var oe = t.hoverData.capture;
        if (!(!oe && !C(O))) {
          var Ce = !1, ve = t.cy, ye = ve.zoom(), Ue = [O.clientX, O.clientY], Ee = t.projectIntoViewport(Ue[0], Ue[1]), Ge = t.hoverData.mdownPos, Qe = t.hoverData.mdownGPos, ft = t.selection, We = null;
          !t.hoverData.draggingEles && !t.hoverData.dragging && !t.hoverData.selecting && (We = t.findNearestElement(Ee[0], Ee[1], !0, !1));
          var ot = t.hoverData.last, Ke = t.hoverData.down, Je = [Ee[0] - ft[2], Ee[1] - ft[3]], Dt = t.dragData.possibleDragElements, Rt;
          if (Qe) {
            var nr = Ue[0] - Qe[0], ir = nr * nr, kt = Ue[1] - Qe[1], Jt = kt * kt, Ut = ir + Jt;
            t.hoverData.isOverThresholdDrag = Rt = Ut >= t.desktopTapThreshold2;
          }
          var Er = n(O);
          Rt && (t.hoverData.tapholdCancelled = !0);
          var Rr = function() {
            var vr = t.hoverData.dragDelta = t.hoverData.dragDelta || [];
            vr.length === 0 ? (vr.push(Je[0]), vr.push(Je[1])) : (vr[0] += Je[0], vr[1] += Je[1]);
          };
          Ce = !0, a(We, ["mousemove", "vmousemove", "tapdrag"], O, {
            x: Ee[0],
            y: Ee[1]
          });
          var Ta = function() {
            t.data.bgActivePosistion = void 0, t.hoverData.selecting || ve.emit({
              originalEvent: O,
              type: "boxstart",
              position: {
                x: Ee[0],
                y: Ee[1]
              }
            }), ft[4] = 1, t.hoverData.selecting = !0, t.redrawHint("select", !0), t.redraw();
          };
          if (t.hoverData.which === 3) {
            if (Rt) {
              var Xr = {
                originalEvent: O,
                type: "cxtdrag",
                position: {
                  x: Ee[0],
                  y: Ee[1]
                }
              };
              Ke ? Ke.emit(Xr) : ve.emit(Xr), t.hoverData.cxtDragged = !0, (!t.hoverData.cxtOver || We !== t.hoverData.cxtOver) && (t.hoverData.cxtOver && t.hoverData.cxtOver.emit({
                originalEvent: O,
                type: "cxtdragout",
                position: {
                  x: Ee[0],
                  y: Ee[1]
                }
              }), t.hoverData.cxtOver = We, We && We.emit({
                originalEvent: O,
                type: "cxtdragover",
                position: {
                  x: Ee[0],
                  y: Ee[1]
                }
              }));
            }
          } else if (t.hoverData.dragging) {
            if (Ce = !0, ve.panningEnabled() && ve.userPanningEnabled()) {
              var Ca;
              if (t.hoverData.justStartedPan) {
                var ti = t.hoverData.mdownPos;
                Ca = {
                  x: (Ee[0] - ti[0]) * ye,
                  y: (Ee[1] - ti[1]) * ye
                }, t.hoverData.justStartedPan = !1;
              } else
                Ca = {
                  x: Je[0] * ye,
                  y: Je[1] * ye
                };
              ve.panBy(Ca), ve.emit("dragpan"), t.hoverData.dragged = !0;
            }
            Ee = t.projectIntoViewport(O.clientX, O.clientY);
          } else if (ft[4] == 1 && (Ke == null || Ke.pannable())) {
            if (Rt) {
              if (!t.hoverData.dragging && ve.boxSelectionEnabled() && (Er || !ve.panningEnabled() || !ve.userPanningEnabled()))
                Ta();
              else if (!t.hoverData.selecting && ve.panningEnabled() && ve.userPanningEnabled()) {
                var qr = i(Ke, t.hoverData.downs);
                qr && (t.hoverData.dragging = !0, t.hoverData.justStartedPan = !0, ft[4] = 0, t.data.bgActivePosistion = ea(Ge), t.redrawHint("select", !0), t.redraw());
              }
              Ke && Ke.pannable() && Ke.active() && Ke.unactivate();
            }
          } else {
            if (Ke && Ke.pannable() && Ke.active() && Ke.unactivate(), (!Ke || !Ke.grabbed()) && We != ot && (ot && a(ot, ["mouseout", "tapdragout"], O, {
              x: Ee[0],
              y: Ee[1]
            }), We && a(We, ["mouseover", "tapdragover"], O, {
              x: Ee[0],
              y: Ee[1]
            }), t.hoverData.last = We), Ke)
              if (Rt) {
                if (ve.boxSelectionEnabled() && Er)
                  Ke && Ke.grabbed() && (p(Dt), Ke.emit("freeon"), Dt.emit("free"), t.dragData.didDrag && (Ke.emit("dragfreeon"), Dt.emit("dragfree"))), Ta();
                else if (Ke && Ke.grabbed() && t.nodeIsDraggable(Ke)) {
                  var Xt = !t.dragData.didDrag;
                  Xt && t.redrawHint("eles", !0), t.dragData.didDrag = !0, t.hoverData.draggingEles || v(Dt, {
                    inDragLayer: !0
                  });
                  var $t = {
                    x: 0,
                    y: 0
                  };
                  if (R(Je[0]) && R(Je[1]) && ($t.x += Je[0], $t.y += Je[1], Xt)) {
                    var qt = t.hoverData.dragDelta;
                    qt && R(qt[0]) && R(qt[1]) && ($t.x += qt[0], $t.y += qt[1]);
                  }
                  t.hoverData.draggingEles = !0, Dt.silentShift($t).emit("position drag"), t.redrawHint("drag", !0), t.redraw();
                }
              } else
                Rr();
            Ce = !0;
          }
          if (ft[2] = Ee[0], ft[3] = Ee[1], Ce)
            return O.stopPropagation && O.stopPropagation(), O.preventDefault && O.preventDefault(), !1;
        }
      }, !1);
      var F, G, M;
      t.registerBinding(e, "mouseup", function(O) {
        var oe = t.hoverData.capture;
        if (oe) {
          t.hoverData.capture = !1;
          var Ce = t.cy, ve = t.projectIntoViewport(O.clientX, O.clientY), ye = t.selection, Ue = t.findNearestElement(ve[0], ve[1], !0, !1), Ee = t.dragData.possibleDragElements, Ge = t.hoverData.down, Qe = n(O);
          if (t.data.bgActivePosistion && (t.redrawHint("select", !0), t.redraw()), t.hoverData.tapholdCancelled = !0, t.data.bgActivePosistion = void 0, Ge && Ge.unactivate(), t.hoverData.which === 3) {
            var ft = {
              originalEvent: O,
              type: "cxttapend",
              position: {
                x: ve[0],
                y: ve[1]
              }
            };
            if (Ge ? Ge.emit(ft) : Ce.emit(ft), !t.hoverData.cxtDragged) {
              var We = {
                originalEvent: O,
                type: "cxttap",
                position: {
                  x: ve[0],
                  y: ve[1]
                }
              };
              Ge ? Ge.emit(We) : Ce.emit(We);
            }
            t.hoverData.cxtDragged = !1, t.hoverData.which = null;
          } else if (t.hoverData.which === 1) {
            if (a(Ue, ["mouseup", "tapend", "vmouseup"], O, {
              x: ve[0],
              y: ve[1]
            }), !t.dragData.didDrag && // didn't move a node around
            !t.hoverData.dragged && // didn't pan
            !t.hoverData.selecting && // not box selection
            !t.hoverData.isOverThresholdDrag && (a(Ge, ["click", "tap", "vclick"], O, {
              x: ve[0],
              y: ve[1]
            }), G = !1, O.timeStamp - M <= Ce.multiClickDebounceTime() ? (F && clearTimeout(F), G = !0, M = null, a(Ge, ["dblclick", "dbltap", "vdblclick"], O, {
              x: ve[0],
              y: ve[1]
            })) : (F = setTimeout(function() {
              G || a(Ge, ["oneclick", "onetap", "voneclick"], O, {
                x: ve[0],
                y: ve[1]
              });
            }, Ce.multiClickDebounceTime()), M = O.timeStamp)), Ge == null && !t.dragData.didDrag && !t.hoverData.selecting && !t.hoverData.dragged && !n(O) && (Ce.$(r).unselect(["tapunselect"]), Ee.length > 0 && t.redrawHint("eles", !0), t.dragData.possibleDragElements = Ee = Ce.collection()), Ue == Ge && !t.dragData.didDrag && !t.hoverData.selecting && Ue != null && Ue._private.selectable && (t.hoverData.dragging || (Ce.selectionType() === "additive" || Qe ? Ue.selected() ? Ue.unselect(["tapunselect"]) : Ue.select(["tapselect"]) : Qe || (Ce.$(r).unmerge(Ue).unselect(["tapunselect"]), Ue.select(["tapselect"]))), t.redrawHint("eles", !0)), t.hoverData.selecting) {
              var ot = Ce.collection(t.getAllInBox(ye[0], ye[1], ye[2], ye[3]));
              t.redrawHint("select", !0), ot.length > 0 && t.redrawHint("eles", !0), Ce.emit({
                type: "boxend",
                originalEvent: O,
                position: {
                  x: ve[0],
                  y: ve[1]
                }
              });
              var Ke = function(Rt) {
                return Rt.selectable() && !Rt.selected();
              };
              Ce.selectionType() === "additive" || Qe || Ce.$(r).unmerge(ot).unselect(), ot.emit("box").stdFilter(Ke).select().emit("boxselect"), t.redraw();
            }
            if (t.hoverData.dragging && (t.hoverData.dragging = !1, t.redrawHint("select", !0), t.redrawHint("eles", !0), t.redraw()), !ye[4]) {
              t.redrawHint("drag", !0), t.redrawHint("eles", !0);
              var Je = Ge && Ge.grabbed();
              p(Ee), Je && (Ge.emit("freeon"), Ee.emit("free"), t.dragData.didDrag && (Ge.emit("dragfreeon"), Ee.emit("dragfree")));
            }
          }
          ye[4] = 0, t.hoverData.down = null, t.hoverData.cxtStarted = !1, t.hoverData.draggingEles = !1, t.hoverData.selecting = !1, t.hoverData.isOverThresholdDrag = !1, t.dragData.didDrag = !1, t.hoverData.dragged = !1, t.hoverData.dragDelta = [], t.hoverData.mdownPos = null, t.hoverData.mdownGPos = null;
        }
      }, !1);
      var X = function(O) {
        if (!t.scrollingPage) {
          var oe = t.cy, Ce = oe.zoom(), ve = oe.pan(), ye = t.projectIntoViewport(O.clientX, O.clientY), Ue = [ye[0] * Ce + ve.x, ye[1] * Ce + ve.y];
          if (t.hoverData.draggingEles || t.hoverData.dragging || t.hoverData.cxtStarted || k()) {
            O.preventDefault();
            return;
          }
          if (oe.panningEnabled() && oe.userPanningEnabled() && oe.zoomingEnabled() && oe.userZoomingEnabled()) {
            O.preventDefault(), t.data.wheelZooming = !0, clearTimeout(t.data.wheelTimeout), t.data.wheelTimeout = setTimeout(function() {
              t.data.wheelZooming = !1, t.redrawHint("eles", !0), t.redraw();
            }, 150);
            var Ee;
            O.deltaY != null ? Ee = O.deltaY / -250 : O.wheelDeltaY != null ? Ee = O.wheelDeltaY / 1e3 : Ee = O.wheelDelta / 1e3, Ee = Ee * t.wheelSensitivity;
            var Ge = O.deltaMode === 1;
            Ge && (Ee *= 33);
            var Qe = oe.zoom() * Math.pow(10, Ee);
            O.type === "gesturechange" && (Qe = t.gestureStartZoom * O.scale), oe.zoom({
              level: Qe,
              renderedPosition: {
                x: Ue[0],
                y: Ue[1]
              }
            }), oe.emit(O.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
          }
        }
      };
      t.registerBinding(t.container, "wheel", X, !0), t.registerBinding(e, "scroll", function(O) {
        t.scrollingPage = !0, clearTimeout(t.scrollingPageTimeout), t.scrollingPageTimeout = setTimeout(function() {
          t.scrollingPage = !1;
        }, 250);
      }, !0), t.registerBinding(t.container, "gesturestart", function(O) {
        t.gestureStartZoom = t.cy.zoom(), t.hasTouchStarted || O.preventDefault();
      }, !0), t.registerBinding(t.container, "gesturechange", function(fe) {
        t.hasTouchStarted || X(fe);
      }, !0), t.registerBinding(t.container, "mouseout", function(O) {
        var oe = t.projectIntoViewport(O.clientX, O.clientY);
        t.cy.emit({
          originalEvent: O,
          type: "mouseout",
          position: {
            x: oe[0],
            y: oe[1]
          }
        });
      }, !1), t.registerBinding(t.container, "mouseover", function(O) {
        var oe = t.projectIntoViewport(O.clientX, O.clientY);
        t.cy.emit({
          originalEvent: O,
          type: "mouseover",
          position: {
            x: oe[0],
            y: oe[1]
          }
        });
      }, !1);
      var B, re, K, q, ae, ue, be, ie, ge, we, De, xe, Le, se = function(O, oe, Ce, ve) {
        return Math.sqrt((Ce - O) * (Ce - O) + (ve - oe) * (ve - oe));
      }, Te = function(O, oe, Ce, ve) {
        return (Ce - O) * (Ce - O) + (ve - oe) * (ve - oe);
      }, Ae;
      t.registerBinding(t.container, "touchstart", Ae = function(O) {
        if (t.hasTouchStarted = !0, !!C(O)) {
          m(), t.touchData.capture = !0, t.data.bgActivePosistion = void 0;
          var oe = t.cy, Ce = t.touchData.now, ve = t.touchData.earlier;
          if (O.touches[0]) {
            var ye = t.projectIntoViewport(O.touches[0].clientX, O.touches[0].clientY);
            Ce[0] = ye[0], Ce[1] = ye[1];
          }
          if (O.touches[1]) {
            var ye = t.projectIntoViewport(O.touches[1].clientX, O.touches[1].clientY);
            Ce[2] = ye[0], Ce[3] = ye[1];
          }
          if (O.touches[2]) {
            var ye = t.projectIntoViewport(O.touches[2].clientX, O.touches[2].clientY);
            Ce[4] = ye[0], Ce[5] = ye[1];
          }
          if (O.touches[1]) {
            t.touchData.singleTouchMoved = !0, p(t.dragData.touchDragEles);
            var Ue = t.findContainerClientCoords();
            ge = Ue[0], we = Ue[1], De = Ue[2], xe = Ue[3], B = O.touches[0].clientX - ge, re = O.touches[0].clientY - we, K = O.touches[1].clientX - ge, q = O.touches[1].clientY - we, Le = 0 <= B && B <= De && 0 <= K && K <= De && 0 <= re && re <= xe && 0 <= q && q <= xe;
            var Ee = oe.pan(), Ge = oe.zoom();
            ae = se(B, re, K, q), ue = Te(B, re, K, q), be = [(B + K) / 2, (re + q) / 2], ie = [(be[0] - Ee.x) / Ge, (be[1] - Ee.y) / Ge];
            var Qe = 200, ft = Qe * Qe;
            if (ue < ft && !O.touches[2]) {
              var We = t.findNearestElement(Ce[0], Ce[1], !0, !0), ot = t.findNearestElement(Ce[2], Ce[3], !0, !0);
              We && We.isNode() ? (We.activate().emit({
                originalEvent: O,
                type: "cxttapstart",
                position: {
                  x: Ce[0],
                  y: Ce[1]
                }
              }), t.touchData.start = We) : ot && ot.isNode() ? (ot.activate().emit({
                originalEvent: O,
                type: "cxttapstart",
                position: {
                  x: Ce[0],
                  y: Ce[1]
                }
              }), t.touchData.start = ot) : oe.emit({
                originalEvent: O,
                type: "cxttapstart",
                position: {
                  x: Ce[0],
                  y: Ce[1]
                }
              }), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !0, t.touchData.cxtDragged = !1, t.data.bgActivePosistion = void 0, t.redraw();
              return;
            }
          }
          if (O.touches[2])
            oe.boxSelectionEnabled() && O.preventDefault();
          else if (!O.touches[1]) {
            if (O.touches[0]) {
              var Ke = t.findNearestElements(Ce[0], Ce[1], !0, !0), Je = Ke[0];
              if (Je != null && (Je.activate(), t.touchData.start = Je, t.touchData.starts = Ke, t.nodeIsGrabbable(Je))) {
                var Dt = t.dragData.touchDragEles = oe.collection(), Rt = null;
                t.redrawHint("eles", !0), t.redrawHint("drag", !0), Je.selected() ? (Rt = oe.$(function(Ut) {
                  return Ut.selected() && t.nodeIsGrabbable(Ut);
                }), v(Rt, {
                  addToList: Dt
                })) : y(Je, {
                  addToList: Dt
                }), f(Je);
                var nr = function(Er) {
                  return {
                    originalEvent: O,
                    type: Er,
                    position: {
                      x: Ce[0],
                      y: Ce[1]
                    }
                  };
                };
                Je.emit(nr("grabon")), Rt ? Rt.forEach(function(Ut) {
                  Ut.emit(nr("grab"));
                }) : Je.emit(nr("grab"));
              }
              a(Je, ["touchstart", "tapstart", "vmousedown"], O, {
                x: Ce[0],
                y: Ce[1]
              }), Je == null && (t.data.bgActivePosistion = {
                x: ye[0],
                y: ye[1]
              }, t.redrawHint("select", !0), t.redraw()), t.touchData.singleTouchMoved = !1, t.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(t.touchData.tapholdTimeout), t.touchData.tapholdTimeout = setTimeout(function() {
                t.touchData.singleTouchMoved === !1 && !t.pinching && !t.touchData.selecting && a(t.touchData.start, ["taphold"], O, {
                  x: Ce[0],
                  y: Ce[1]
                });
              }, t.tapholdDuration);
            }
          }
          if (O.touches.length >= 1) {
            for (var ir = t.touchData.startPosition = [null, null, null, null, null, null], kt = 0; kt < Ce.length; kt++)
              ir[kt] = ve[kt] = Ce[kt];
            var Jt = O.touches[0];
            t.touchData.startGPosition = [Jt.clientX, Jt.clientY];
          }
        }
      }, !1);
      var Se;
      t.registerBinding(window, "touchmove", Se = function(O) {
        var oe = t.touchData.capture;
        if (!(!oe && !C(O))) {
          var Ce = t.selection, ve = t.cy, ye = t.touchData.now, Ue = t.touchData.earlier, Ee = ve.zoom();
          if (O.touches[0]) {
            var Ge = t.projectIntoViewport(O.touches[0].clientX, O.touches[0].clientY);
            ye[0] = Ge[0], ye[1] = Ge[1];
          }
          if (O.touches[1]) {
            var Ge = t.projectIntoViewport(O.touches[1].clientX, O.touches[1].clientY);
            ye[2] = Ge[0], ye[3] = Ge[1];
          }
          if (O.touches[2]) {
            var Ge = t.projectIntoViewport(O.touches[2].clientX, O.touches[2].clientY);
            ye[4] = Ge[0], ye[5] = Ge[1];
          }
          var Qe = t.touchData.startGPosition, ft;
          if (oe && O.touches[0] && Qe) {
            for (var We = [], ot = 0; ot < ye.length; ot++)
              We[ot] = ye[ot] - Ue[ot];
            var Ke = O.touches[0].clientX - Qe[0], Je = Ke * Ke, Dt = O.touches[0].clientY - Qe[1], Rt = Dt * Dt, nr = Je + Rt;
            ft = nr >= t.touchTapThreshold2;
          }
          if (oe && t.touchData.cxt) {
            O.preventDefault();
            var ir = O.touches[0].clientX - ge, kt = O.touches[0].clientY - we, Jt = O.touches[1].clientX - ge, Ut = O.touches[1].clientY - we, Er = Te(ir, kt, Jt, Ut), Rr = Er / ue, Ta = 150, Xr = Ta * Ta, Ca = 1.5, ti = Ca * Ca;
            if (Rr >= ti || Er >= Xr) {
              t.touchData.cxt = !1, t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
              var qr = {
                originalEvent: O,
                type: "cxttapend",
                position: {
                  x: ye[0],
                  y: ye[1]
                }
              };
              t.touchData.start ? (t.touchData.start.unactivate().emit(qr), t.touchData.start = null) : ve.emit(qr);
            }
          }
          if (oe && t.touchData.cxt) {
            var qr = {
              originalEvent: O,
              type: "cxtdrag",
              position: {
                x: ye[0],
                y: ye[1]
              }
            };
            t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.touchData.start ? t.touchData.start.emit(qr) : ve.emit(qr), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxtDragged = !0;
            var Xt = t.findNearestElement(ye[0], ye[1], !0, !0);
            (!t.touchData.cxtOver || Xt !== t.touchData.cxtOver) && (t.touchData.cxtOver && t.touchData.cxtOver.emit({
              originalEvent: O,
              type: "cxtdragout",
              position: {
                x: ye[0],
                y: ye[1]
              }
            }), t.touchData.cxtOver = Xt, Xt && Xt.emit({
              originalEvent: O,
              type: "cxtdragover",
              position: {
                x: ye[0],
                y: ye[1]
              }
            }));
          } else if (oe && O.touches[2] && ve.boxSelectionEnabled())
            O.preventDefault(), t.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), t.touchData.selecting || ve.emit({
              originalEvent: O,
              type: "boxstart",
              position: {
                x: ye[0],
                y: ye[1]
              }
            }), t.touchData.selecting = !0, t.touchData.didSelect = !0, Ce[4] = 1, !Ce || Ce.length === 0 || Ce[0] === void 0 ? (Ce[0] = (ye[0] + ye[2] + ye[4]) / 3, Ce[1] = (ye[1] + ye[3] + ye[5]) / 3, Ce[2] = (ye[0] + ye[2] + ye[4]) / 3 + 1, Ce[3] = (ye[1] + ye[3] + ye[5]) / 3 + 1) : (Ce[2] = (ye[0] + ye[2] + ye[4]) / 3, Ce[3] = (ye[1] + ye[3] + ye[5]) / 3), t.redrawHint("select", !0), t.redraw();
          else if (oe && O.touches[1] && !t.touchData.didSelect && ve.zoomingEnabled() && ve.panningEnabled() && ve.userZoomingEnabled() && ve.userPanningEnabled()) {
            O.preventDefault(), t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
            var $t = t.dragData.touchDragEles;
            if ($t) {
              t.redrawHint("drag", !0);
              for (var qt = 0; qt < $t.length; qt++) {
                var ri = $t[qt]._private;
                ri.grabbed = !1, ri.rscratch.inDragLayer = !1;
              }
            }
            var vr = t.touchData.start, ir = O.touches[0].clientX - ge, kt = O.touches[0].clientY - we, Jt = O.touches[1].clientX - ge, Ut = O.touches[1].clientY - we, Gl = se(ir, kt, Jt, Ut), vp = Gl / ae;
            if (Le) {
              var dp = ir - B, gp = kt - re, pp = Jt - K, yp = Ut - q, mp = (dp + pp) / 2, bp = (gp + yp) / 2, an = ve.zoom(), Ki = an * vp, ai = ve.pan(), zl = ie[0] * an + ai.x, Vl = ie[1] * an + ai.y, Ep = {
                x: -Ki / an * (zl - ai.x - mp) + zl,
                y: -Ki / an * (Vl - ai.y - bp) + Vl
              };
              if (vr && vr.active()) {
                var $t = t.dragData.touchDragEles;
                p($t), t.redrawHint("drag", !0), t.redrawHint("eles", !0), vr.unactivate().emit("freeon"), $t.emit("free"), t.dragData.didDrag && (vr.emit("dragfreeon"), $t.emit("dragfree"));
              }
              ve.viewport({
                zoom: Ki,
                pan: Ep,
                cancelOnFailedZoom: !0
              }), ve.emit("pinchzoom"), ae = Gl, B = ir, re = kt, K = Jt, q = Ut, t.pinching = !0;
            }
            if (O.touches[0]) {
              var Ge = t.projectIntoViewport(O.touches[0].clientX, O.touches[0].clientY);
              ye[0] = Ge[0], ye[1] = Ge[1];
            }
            if (O.touches[1]) {
              var Ge = t.projectIntoViewport(O.touches[1].clientX, O.touches[1].clientY);
              ye[2] = Ge[0], ye[3] = Ge[1];
            }
            if (O.touches[2]) {
              var Ge = t.projectIntoViewport(O.touches[2].clientX, O.touches[2].clientY);
              ye[4] = Ge[0], ye[5] = Ge[1];
            }
          } else if (O.touches[0] && !t.touchData.didSelect) {
            var sr = t.touchData.start, Zi = t.touchData.last, Xt;
            if (!t.hoverData.draggingEles && !t.swipePanning && (Xt = t.findNearestElement(ye[0], ye[1], !0, !0)), oe && sr != null && O.preventDefault(), oe && sr != null && t.nodeIsDraggable(sr))
              if (ft) {
                var $t = t.dragData.touchDragEles, $l = !t.dragData.didDrag;
                $l && v($t, {
                  inDragLayer: !0
                }), t.dragData.didDrag = !0;
                var nn = {
                  x: 0,
                  y: 0
                };
                if (R(We[0]) && R(We[1]) && (nn.x += We[0], nn.y += We[1], $l)) {
                  t.redrawHint("eles", !0);
                  var or = t.touchData.dragDelta;
                  or && R(or[0]) && R(or[1]) && (nn.x += or[0], nn.y += or[1]);
                }
                t.hoverData.draggingEles = !0, $t.silentShift(nn).emit("position drag"), t.redrawHint("drag", !0), t.touchData.startPosition[0] == Ue[0] && t.touchData.startPosition[1] == Ue[1] && t.redrawHint("eles", !0), t.redraw();
              } else {
                var or = t.touchData.dragDelta = t.touchData.dragDelta || [];
                or.length === 0 ? (or.push(We[0]), or.push(We[1])) : (or[0] += We[0], or[1] += We[1]);
              }
            if (a(sr || Xt, ["touchmove", "tapdrag", "vmousemove"], O, {
              x: ye[0],
              y: ye[1]
            }), (!sr || !sr.grabbed()) && Xt != Zi && (Zi && Zi.emit({
              originalEvent: O,
              type: "tapdragout",
              position: {
                x: ye[0],
                y: ye[1]
              }
            }), Xt && Xt.emit({
              originalEvent: O,
              type: "tapdragover",
              position: {
                x: ye[0],
                y: ye[1]
              }
            })), t.touchData.last = Xt, oe)
              for (var qt = 0; qt < ye.length; qt++)
                ye[qt] && t.touchData.startPosition[qt] && ft && (t.touchData.singleTouchMoved = !0);
            if (oe && (sr == null || sr.pannable()) && ve.panningEnabled() && ve.userPanningEnabled()) {
              var wp = i(sr, t.touchData.starts);
              wp && (O.preventDefault(), t.data.bgActivePosistion || (t.data.bgActivePosistion = ea(t.touchData.startPosition)), t.swipePanning ? (ve.panBy({
                x: We[0] * Ee,
                y: We[1] * Ee
              }), ve.emit("dragpan")) : ft && (t.swipePanning = !0, ve.panBy({
                x: Ke * Ee,
                y: Dt * Ee
              }), ve.emit("dragpan"), sr && (sr.unactivate(), t.redrawHint("select", !0), t.touchData.start = null)));
              var Ge = t.projectIntoViewport(O.touches[0].clientX, O.touches[0].clientY);
              ye[0] = Ge[0], ye[1] = Ge[1];
            }
          }
          for (var ot = 0; ot < ye.length; ot++)
            Ue[ot] = ye[ot];
          oe && O.touches.length > 0 && !t.hoverData.draggingEles && !t.swipePanning && t.data.bgActivePosistion != null && (t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.redraw());
        }
      }, !1);
      var Ne;
      t.registerBinding(e, "touchcancel", Ne = function(O) {
        var oe = t.touchData.start;
        t.touchData.capture = !1, oe && oe.unactivate();
      });
      var Fe, Xe, Ie, Re;
      if (t.registerBinding(e, "touchend", Fe = function(O) {
        var oe = t.touchData.start, Ce = t.touchData.capture;
        if (Ce)
          O.touches.length === 0 && (t.touchData.capture = !1), O.preventDefault();
        else
          return;
        var ve = t.selection;
        t.swipePanning = !1, t.hoverData.draggingEles = !1;
        var ye = t.cy, Ue = ye.zoom(), Ee = t.touchData.now, Ge = t.touchData.earlier;
        if (O.touches[0]) {
          var Qe = t.projectIntoViewport(O.touches[0].clientX, O.touches[0].clientY);
          Ee[0] = Qe[0], Ee[1] = Qe[1];
        }
        if (O.touches[1]) {
          var Qe = t.projectIntoViewport(O.touches[1].clientX, O.touches[1].clientY);
          Ee[2] = Qe[0], Ee[3] = Qe[1];
        }
        if (O.touches[2]) {
          var Qe = t.projectIntoViewport(O.touches[2].clientX, O.touches[2].clientY);
          Ee[4] = Qe[0], Ee[5] = Qe[1];
        }
        oe && oe.unactivate();
        var ft;
        if (t.touchData.cxt) {
          if (ft = {
            originalEvent: O,
            type: "cxttapend",
            position: {
              x: Ee[0],
              y: Ee[1]
            }
          }, oe ? oe.emit(ft) : ye.emit(ft), !t.touchData.cxtDragged) {
            var We = {
              originalEvent: O,
              type: "cxttap",
              position: {
                x: Ee[0],
                y: Ee[1]
              }
            };
            oe ? oe.emit(We) : ye.emit(We);
          }
          t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !1, t.touchData.start = null, t.redraw();
          return;
        }
        if (!O.touches[2] && ye.boxSelectionEnabled() && t.touchData.selecting) {
          t.touchData.selecting = !1;
          var ot = ye.collection(t.getAllInBox(ve[0], ve[1], ve[2], ve[3]));
          ve[0] = void 0, ve[1] = void 0, ve[2] = void 0, ve[3] = void 0, ve[4] = 0, t.redrawHint("select", !0), ye.emit({
            type: "boxend",
            originalEvent: O,
            position: {
              x: Ee[0],
              y: Ee[1]
            }
          });
          var Ke = function(Xr) {
            return Xr.selectable() && !Xr.selected();
          };
          ot.emit("box").stdFilter(Ke).select().emit("boxselect"), ot.nonempty() && t.redrawHint("eles", !0), t.redraw();
        }
        if (oe != null && oe.unactivate(), O.touches[2])
          t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
        else if (!O.touches[1]) {
          if (!O.touches[0]) {
            if (!O.touches[0]) {
              t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
              var Je = t.dragData.touchDragEles;
              if (oe != null) {
                var Dt = oe._private.grabbed;
                p(Je), t.redrawHint("drag", !0), t.redrawHint("eles", !0), Dt && (oe.emit("freeon"), Je.emit("free"), t.dragData.didDrag && (oe.emit("dragfreeon"), Je.emit("dragfree"))), a(oe, ["touchend", "tapend", "vmouseup", "tapdragout"], O, {
                  x: Ee[0],
                  y: Ee[1]
                }), oe.unactivate(), t.touchData.start = null;
              } else {
                var Rt = t.findNearestElement(Ee[0], Ee[1], !0, !0);
                a(Rt, ["touchend", "tapend", "vmouseup", "tapdragout"], O, {
                  x: Ee[0],
                  y: Ee[1]
                });
              }
              var nr = t.touchData.startPosition[0] - Ee[0], ir = nr * nr, kt = t.touchData.startPosition[1] - Ee[1], Jt = kt * kt, Ut = ir + Jt, Er = Ut * Ue * Ue;
              t.touchData.singleTouchMoved || (oe || ye.$(":selected").unselect(["tapunselect"]), a(oe, ["tap", "vclick"], O, {
                x: Ee[0],
                y: Ee[1]
              }), Xe = !1, O.timeStamp - Re <= ye.multiClickDebounceTime() ? (Ie && clearTimeout(Ie), Xe = !0, Re = null, a(oe, ["dbltap", "vdblclick"], O, {
                x: Ee[0],
                y: Ee[1]
              })) : (Ie = setTimeout(function() {
                Xe || a(oe, ["onetap", "voneclick"], O, {
                  x: Ee[0],
                  y: Ee[1]
                });
              }, ye.multiClickDebounceTime()), Re = O.timeStamp)), oe != null && !t.dragData.didDrag && oe._private.selectable && Er < t.touchTapThreshold2 && !t.pinching && (ye.selectionType() === "single" ? (ye.$(r).unmerge(oe).unselect(["tapunselect"]), oe.select(["tapselect"])) : oe.selected() ? oe.unselect(["tapunselect"]) : oe.select(["tapselect"]), t.redrawHint("eles", !0)), t.touchData.singleTouchMoved = !0;
            }
          }
        }
        for (var Rr = 0; Rr < Ee.length; Rr++)
          Ge[Rr] = Ee[Rr];
        t.dragData.didDrag = !1, O.touches.length === 0 && (t.touchData.dragDelta = [], t.touchData.startPosition = [null, null, null, null, null, null], t.touchData.startGPosition = null, t.touchData.didSelect = !1), O.touches.length < 2 && (O.touches.length === 1 && (t.touchData.startGPosition = [O.touches[0].clientX, O.touches[0].clientY]), t.pinching = !1, t.redrawHint("eles", !0), t.redraw());
      }, !1), typeof TouchEvent > "u") {
        var $e = [], ze = function(O) {
          return {
            clientX: O.clientX,
            clientY: O.clientY,
            force: 1,
            identifier: O.pointerId,
            pageX: O.pageX,
            pageY: O.pageY,
            radiusX: O.width / 2,
            radiusY: O.height / 2,
            screenX: O.screenX,
            screenY: O.screenY,
            target: O.target
          };
        }, Be = function(O) {
          return {
            event: O,
            touch: ze(O)
          };
        }, _e = function(O) {
          $e.push(Be(O));
        }, rt = function(O) {
          for (var oe = 0; oe < $e.length; oe++) {
            var Ce = $e[oe];
            if (Ce.event.pointerId === O.pointerId) {
              $e.splice(oe, 1);
              return;
            }
          }
        }, je = function(O) {
          var oe = $e.filter(function(Ce) {
            return Ce.event.pointerId === O.pointerId;
          })[0];
          oe.event = O, oe.touch = ze(O);
        }, qe = function(O) {
          O.touches = $e.map(function(oe) {
            return oe.touch;
          });
        }, et = function(O) {
          return O.pointerType === "mouse" || O.pointerType === 4;
        };
        t.registerBinding(t.container, "pointerdown", function(fe) {
          et(fe) || (fe.preventDefault(), _e(fe), qe(fe), Ae(fe));
        }), t.registerBinding(t.container, "pointerup", function(fe) {
          et(fe) || (rt(fe), qe(fe), Fe(fe));
        }), t.registerBinding(t.container, "pointercancel", function(fe) {
          et(fe) || (rt(fe), qe(fe), Ne(fe));
        }), t.registerBinding(t.container, "pointermove", function(fe) {
          et(fe) || (fe.preventDefault(), je(fe), qe(fe), Se(fe));
        });
      }
    };
    var mr = {};
    mr.generatePolygon = function(t, e) {
      return this.nodeShapes[t] = {
        renderer: this,
        name: t,
        points: e,
        draw: function(a, n, i, s, o) {
          this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
        },
        intersectLine: function(a, n, i, s, o, u, l) {
          return Fa(o, u, this.points, a, n, i / 2, s / 2, l);
        },
        checkPoint: function(a, n, i, s, o, u, l) {
          return pr(a, n, this.points, u, l, s, o, [0, -1], i);
        }
      };
    }, mr.generateEllipse = function() {
      return this.nodeShapes.ellipse = {
        renderer: this,
        name: "ellipse",
        draw: function(e, r, a, n, i) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        },
        intersectLine: function(e, r, a, n, i, s, o) {
          return zf(i, s, e, r, a / 2 + o, n / 2 + o);
        },
        checkPoint: function(e, r, a, n, i, s, o) {
          return Gr(e, r, n, i, s, o, a);
        }
      };
    }, mr.generateRoundPolygon = function(t, e) {
      for (var r = new Array(e.length * 2), a = 0; a < e.length / 2; a++) {
        var n = a * 2, i = void 0;
        a < e.length / 2 - 1 ? i = (a + 1) * 2 : i = 0, r[a * 4] = e[n], r[a * 4 + 1] = e[n + 1];
        var s = e[i] - e[n], o = e[i + 1] - e[n + 1], u = Math.sqrt(s * s + o * o);
        r[a * 4 + 2] = s / u, r[a * 4 + 3] = o / u;
      }
      return this.nodeShapes[t] = {
        renderer: this,
        name: t,
        points: r,
        draw: function(f, h, c, d, v) {
          this.renderer.nodeShapeImpl("round-polygon", f, h, c, d, v, this.points);
        },
        intersectLine: function(f, h, c, d, v, y, p) {
          return Vf(v, y, this.points, f, h, c, d);
        },
        checkPoint: function(f, h, c, d, v, y, p) {
          return Gf(f, h, this.points, y, p, d, v);
        }
      };
    }, mr.generateRoundRectangle = function() {
      return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
        renderer: this,
        name: "round-rectangle",
        points: _t(4, 0),
        draw: function(e, r, a, n, i) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        },
        intersectLine: function(e, r, a, n, i, s, o) {
          return Ls(i, s, e, r, a, n, o);
        },
        checkPoint: function(e, r, a, n, i, s, o) {
          var u = Ga(n, i), l = u * 2;
          return !!(pr(e, r, this.points, s, o, n, i - l, [0, -1], a) || pr(e, r, this.points, s, o, n - l, i, [0, -1], a) || Gr(e, r, l, l, s - n / 2 + u, o - i / 2 + u, a) || Gr(e, r, l, l, s + n / 2 - u, o - i / 2 + u, a) || Gr(e, r, l, l, s + n / 2 - u, o + i / 2 - u, a) || Gr(e, r, l, l, s - n / 2 + u, o + i / 2 - u, a));
        }
      };
    }, mr.generateCutRectangle = function() {
      return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
        renderer: this,
        name: "cut-rectangle",
        cornerLength: As(),
        points: _t(4, 0),
        draw: function(e, r, a, n, i) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        },
        generateCutTrianglePts: function(e, r, a, n) {
          var i = this.cornerLength, s = r / 2, o = e / 2, u = a - o, l = a + o, f = n - s, h = n + s;
          return {
            topLeft: [u, f + i, u + i, f, u + i, f + i],
            topRight: [l - i, f, l, f + i, l - i, f + i],
            bottomRight: [l, h - i, l - i, h, l - i, h - i],
            bottomLeft: [u + i, h, u, h - i, u + i, h - i]
          };
        },
        intersectLine: function(e, r, a, n, i, s, o) {
          var u = this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, r), l = [].concat.apply([], [u.topLeft.splice(0, 4), u.topRight.splice(0, 4), u.bottomRight.splice(0, 4), u.bottomLeft.splice(0, 4)]);
          return Fa(i, s, l, e, r);
        },
        checkPoint: function(e, r, a, n, i, s, o) {
          if (pr(e, r, this.points, s, o, n, i - 2 * this.cornerLength, [0, -1], a) || pr(e, r, this.points, s, o, n - 2 * this.cornerLength, i, [0, -1], a))
            return !0;
          var u = this.generateCutTrianglePts(n, i, s, o);
          return Ht(e, r, u.topLeft) || Ht(e, r, u.topRight) || Ht(e, r, u.bottomRight) || Ht(e, r, u.bottomLeft);
        }
      };
    }, mr.generateBarrel = function() {
      return this.nodeShapes.barrel = {
        renderer: this,
        name: "barrel",
        points: _t(4, 0),
        draw: function(e, r, a, n, i) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        },
        intersectLine: function(e, r, a, n, i, s, o) {
          var u = 0.15, l = 0.5, f = 0.85, h = this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, r), c = function(y) {
            var p = ta({
              x: y[0],
              y: y[1]
            }, {
              x: y[2],
              y: y[3]
            }, {
              x: y[4],
              y: y[5]
            }, u), g = ta({
              x: y[0],
              y: y[1]
            }, {
              x: y[2],
              y: y[3]
            }, {
              x: y[4],
              y: y[5]
            }, l), m = ta({
              x: y[0],
              y: y[1]
            }, {
              x: y[2],
              y: y[3]
            }, {
              x: y[4],
              y: y[5]
            }, f);
            return [y[0], y[1], p.x, p.y, g.x, g.y, m.x, m.y, y[4], y[5]];
          }, d = [].concat(c(h.topLeft), c(h.topRight), c(h.bottomRight), c(h.bottomLeft));
          return Fa(i, s, d, e, r);
        },
        generateBarrelBezierPts: function(e, r, a, n) {
          var i = r / 2, s = e / 2, o = a - s, u = a + s, l = n - i, f = n + i, h = pi(e, r), c = h.heightOffset, d = h.widthOffset, v = h.ctrlPtOffsetPct * e, y = {
            topLeft: [o, l + c, o + v, l, o + d, l],
            topRight: [u - d, l, u - v, l, u, l + c],
            bottomRight: [u, f - c, u - v, f, u - d, f],
            bottomLeft: [o + d, f, o + v, f, o, f - c]
          };
          return y.topLeft.isTop = !0, y.topRight.isTop = !0, y.bottomLeft.isBottom = !0, y.bottomRight.isBottom = !0, y;
        },
        checkPoint: function(e, r, a, n, i, s, o) {
          var u = pi(n, i), l = u.heightOffset, f = u.widthOffset;
          if (pr(e, r, this.points, s, o, n, i - 2 * l, [0, -1], a) || pr(e, r, this.points, s, o, n - 2 * f, i, [0, -1], a))
            return !0;
          for (var h = this.generateBarrelBezierPts(n, i, s, o), c = function(x, k, C) {
            var F = C[4], G = C[2], M = C[0], X = C[5], B = C[1], re = Math.min(F, M), K = Math.max(F, M), q = Math.min(X, B), ae = Math.max(X, B);
            if (re <= x && x <= K && q <= k && k <= ae) {
              var ue = $f(F, G, M), be = kf(ue[0], ue[1], ue[2], x), ie = be.filter(function(ge) {
                return 0 <= ge && ge <= 1;
              });
              if (ie.length > 0)
                return ie[0];
            }
            return null;
          }, d = Object.keys(h), v = 0; v < d.length; v++) {
            var y = d[v], p = h[y], g = c(e, r, p);
            if (g != null) {
              var m = p[5], b = p[3], E = p[1], I = St(m, b, E, g);
              if (p.isTop && I <= r || p.isBottom && r <= I)
                return !0;
            }
          }
          return !1;
        }
      };
    }, mr.generateBottomRoundrectangle = function() {
      return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
        renderer: this,
        name: "bottom-round-rectangle",
        points: _t(4, 0),
        draw: function(e, r, a, n, i) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        },
        intersectLine: function(e, r, a, n, i, s, o) {
          var u = e - (a / 2 + o), l = r - (n / 2 + o), f = l, h = e + (a / 2 + o), c = Cr(i, s, e, r, u, l, h, f, !1);
          return c.length > 0 ? c : Ls(i, s, e, r, a, n, o);
        },
        checkPoint: function(e, r, a, n, i, s, o) {
          var u = Ga(n, i), l = 2 * u;
          if (pr(e, r, this.points, s, o, n, i - l, [0, -1], a) || pr(e, r, this.points, s, o, n - l, i, [0, -1], a))
            return !0;
          var f = n / 2 + 2 * a, h = i / 2 + 2 * a, c = [s - f, o - h, s - f, o, s + f, o, s + f, o - h];
          return !!(Ht(e, r, c) || Gr(e, r, l, l, s + n / 2 - u, o + i / 2 - u, a) || Gr(e, r, l, l, s - n / 2 + u, o + i / 2 - u, a));
        }
      };
    }, mr.registerNodeShapes = function() {
      var t = this.nodeShapes = {}, e = this;
      this.generateEllipse(), this.generatePolygon("triangle", _t(3, 0)), this.generateRoundPolygon("round-triangle", _t(3, 0)), this.generatePolygon("rectangle", _t(4, 0)), t.square = t.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
      {
        var r = [0, 1, 1, 0, 0, -1, -1, 0];
        this.generatePolygon("diamond", r), this.generateRoundPolygon("round-diamond", r);
      }
      this.generatePolygon("pentagon", _t(5, 0)), this.generateRoundPolygon("round-pentagon", _t(5, 0)), this.generatePolygon("hexagon", _t(6, 0)), this.generateRoundPolygon("round-hexagon", _t(6, 0)), this.generatePolygon("heptagon", _t(7, 0)), this.generateRoundPolygon("round-heptagon", _t(7, 0)), this.generatePolygon("octagon", _t(8, 0)), this.generateRoundPolygon("round-octagon", _t(8, 0));
      var a = new Array(20);
      {
        var n = di(5, 0), i = di(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
        s *= 1.57;
        for (var o = 0; o < i.length / 2; o++)
          i[o * 2] *= s, i[o * 2 + 1] *= s;
        for (var o = 0; o < 20 / 4; o++)
          a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
      }
      a = Ss(a), this.generatePolygon("star", a), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
      {
        var u = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
        this.generatePolygon("tag", u), this.generateRoundPolygon("round-tag", u);
      }
      t.makePolygon = function(l) {
        var f = l.join("$"), h = "polygon-" + f, c;
        return (c = this[h]) ? c : e.generatePolygon(h, l);
      };
    };
    var ja = {};
    ja.timeToRender = function() {
      return this.redrawTotalTime / this.redrawCount;
    }, ja.redraw = function(t) {
      t = t || bs();
      var e = this;
      e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = !0, e.renderOptions = t;
    }, ja.beforeRender = function(t, e) {
      if (!this.destroyed) {
        e == null && Tt("Priority is not optional for beforeRender");
        var r = this.beforeRenderCallbacks;
        r.push({
          fn: t,
          priority: e
        }), r.sort(function(a, n) {
          return n.priority - a.priority;
        });
      }
    };
    var dl = function(e, r, a) {
      for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)
        n[i].fn(r, a);
    };
    ja.startRenderLoop = function() {
      var t = this, e = t.cy;
      if (!t.renderLoopStarted) {
        t.renderLoopStarted = !0;
        var r = function a(n) {
          if (!t.destroyed) {
            if (!e.batching())
              if (t.requestedFrame && !t.skipFrame) {
                dl(t, !0, n);
                var i = gr();
                t.render(t.renderOptions);
                var s = t.lastDrawTime = gr();
                t.averageRedrawTime === void 0 && (t.averageRedrawTime = s - i), t.redrawCount === void 0 && (t.redrawCount = 0), t.redrawCount++, t.redrawTotalTime === void 0 && (t.redrawTotalTime = 0);
                var o = s - i;
                t.redrawTotalTime += o, t.lastRedrawTime = o, t.averageRedrawTime = t.averageRedrawTime / 2 + o / 2, t.requestedFrame = !1;
              } else
                dl(t, !1, n);
            t.skipFrame = !1, hn(a);
          }
        };
        hn(r);
      }
    };
    var Eg = function(e) {
      this.init(e);
    }, gl = Eg, ba = gl.prototype;
    ba.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"], ba.init = function(t) {
      var e = this;
      e.options = t, e.cy = t.cy;
      var r = e.container = t.cy.container(), a = e.cy.window();
      if (a) {
        var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", u = n.getElementById(s) != null;
        if (r.className.indexOf(o) < 0 && (r.className = (r.className || "") + " " + o), !u) {
          var l = n.createElement("style");
          l.id = s, l.textContent = "." + o + " { position: relative; }", i.insertBefore(l, i.children[0]);
        }
        var f = a.getComputedStyle(r), h = f.getPropertyValue("position");
        h === "static" && ct("A Cytoscape container has style position:static and so can not use UI extensions properly");
      }
      e.selection = [void 0, void 0, void 0, void 0, 0], e.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], e.hoverData = {
        down: null,
        last: null,
        downTime: null,
        triggerMode: null,
        dragging: !1,
        initialPan: [null, null],
        capture: !1
      }, e.dragData = {
        possibleDragElements: []
      }, e.touchData = {
        start: null,
        capture: !1,
        // These 3 fields related to tap, taphold events
        startPosition: [null, null, null, null, null, null],
        singleTouchStartTime: null,
        singleTouchMoved: !0,
        now: [null, null, null, null, null, null],
        earlier: [null, null, null, null, null, null]
      }, e.redraws = 0, e.showFps = t.showFps, e.debug = t.debug, e.hideEdgesOnViewport = t.hideEdgesOnViewport, e.textureOnViewport = t.textureOnViewport, e.wheelSensitivity = t.wheelSensitivity, e.motionBlurEnabled = t.motionBlur, e.forcedPixelRatio = R(t.pixelRatio) ? t.pixelRatio : null, e.motionBlur = t.motionBlur, e.motionBlurOpacity = t.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = !1, e.clearedForMotionBlur = [], e.desktopTapThreshold = t.desktopTapThreshold, e.desktopTapThreshold2 = t.desktopTapThreshold * t.desktopTapThreshold, e.touchTapThreshold = t.touchTapThreshold, e.touchTapThreshold2 = t.touchTapThreshold * t.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
        // higher priority execs before lower one
        animations: 400,
        eleCalcs: 300,
        eleTxrDeq: 200,
        lyrTxrDeq: 150,
        lyrTxrSkip: 100
      }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
    }, ba.notify = function(t, e) {
      var r = this, a = r.cy;
      if (!this.destroyed) {
        if (t === "init") {
          r.load();
          return;
        }
        if (t === "destroy") {
          r.destroy();
          return;
        }
        (t === "add" || t === "remove" || t === "move" && a.hasCompoundNodes() || t === "load" || t === "zorder" || t === "mount") && r.invalidateCachedZSortedEles(), t === "viewport" && r.redrawHint("select", !0), (t === "load" || t === "resize" || t === "mount") && (r.invalidateContainerClientCoordsCache(), r.matchCanvasSize(r.container)), r.redrawHint("eles", !0), r.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
      }
    }, ba.destroy = function() {
      var t = this;
      t.destroyed = !0, t.cy.stopAnimationLoop();
      for (var e = 0; e < t.bindings.length; e++) {
        var r = t.bindings[e], a = r, n = a.target;
        (n.off || n.removeEventListener).apply(n, a.args);
      }
      if (t.bindings = [], t.beforeRenderCallbacks = [], t.onUpdateEleCalcsFns = [], t.removeObserver && t.removeObserver.disconnect(), t.styleObserver && t.styleObserver.disconnect(), t.resizeObserver && t.resizeObserver.disconnect(), t.labelCalcDiv)
        try {
          document.body.removeChild(t.labelCalcDiv);
        } catch {
        }
    }, ba.isHeadless = function() {
      return !1;
    }, [zi, cl, vl, ma, mr, ja].forEach(function(t) {
      He(ba, t);
    });
    var $i = 1e3 / 60, pl = {
      setupDequeueing: function(e) {
        return function() {
          var a = this, n = this.renderer;
          if (!a.dequeueingSetup) {
            a.dequeueingSetup = !0;
            var i = fn(function() {
              n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
            }, e.deqRedrawThreshold), s = function(l, f) {
              var h = gr(), c = n.averageRedrawTime, d = n.lastRedrawTime, v = [], y = n.cy.extent(), p = n.getPixelRatio();
              for (l || n.flushRenderedStyleQueue(); ; ) {
                var g = gr(), m = g - h, b = g - f;
                if (d < $i) {
                  var E = $i - (l ? c : 0);
                  if (b >= e.deqFastCost * E)
                    break;
                } else if (l) {
                  if (m >= e.deqCost * d || m >= e.deqAvgCost * c)
                    break;
                } else if (b >= e.deqNoDrawCost * $i)
                  break;
                var I = e.deq(a, p, y);
                if (I.length > 0)
                  for (var A = 0; A < I.length; A++)
                    v.push(I[A]);
                else
                  break;
              }
              v.length > 0 && (e.onDeqd(a, v), !l && e.shouldRedraw(a, v, p, y) && i());
            }, o = e.priority || li;
            n.beforeRender(s, o(a));
          }
        };
      }
    }, wg = /* @__PURE__ */ function() {
      function t(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vn;
        de(this, t), this.idsByKey = new ur(), this.keyForId = new ur(), this.cachesByLvl = new ur(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = r;
      }
      return N(t, [{
        key: "getIdsFor",
        value: function(r) {
          r == null && Tt("Can not get id list for null key");
          var a = this.idsByKey, n = this.idsByKey.get(r);
          return n || (n = new jr(), a.set(r, n)), n;
        }
      }, {
        key: "addIdForKey",
        value: function(r, a) {
          r != null && this.getIdsFor(r).add(a);
        }
      }, {
        key: "deleteIdForKey",
        value: function(r, a) {
          r != null && this.getIdsFor(r).delete(a);
        }
      }, {
        key: "getNumberOfIdsForKey",
        value: function(r) {
          return r == null ? 0 : this.getIdsFor(r).size;
        }
      }, {
        key: "updateKeyMappingFor",
        value: function(r) {
          var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
          this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
        }
      }, {
        key: "deleteKeyMappingFor",
        value: function(r) {
          var a = r.id(), n = this.keyForId.get(a);
          this.deleteIdForKey(n, a), this.keyForId.delete(a);
        }
      }, {
        key: "keyHasChangedFor",
        value: function(r) {
          var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
          return n !== i;
        }
      }, {
        key: "isInvalid",
        value: function(r) {
          return this.keyHasChangedFor(r) || this.doesEleInvalidateKey(r);
        }
      }, {
        key: "getCachesAt",
        value: function(r) {
          var a = this.cachesByLvl, n = this.lvls, i = a.get(r);
          return i || (i = new ur(), a.set(r, i), n.push(r)), i;
        }
      }, {
        key: "getCache",
        value: function(r, a) {
          return this.getCachesAt(a).get(r);
        }
      }, {
        key: "get",
        value: function(r, a) {
          var n = this.getKey(r), i = this.getCache(n, a);
          return i != null && this.updateKeyMappingFor(r), i;
        }
      }, {
        key: "getForCachedKey",
        value: function(r, a) {
          var n = this.keyForId.get(r.id()), i = this.getCache(n, a);
          return i;
        }
      }, {
        key: "hasCache",
        value: function(r, a) {
          return this.getCachesAt(a).has(r);
        }
      }, {
        key: "has",
        value: function(r, a) {
          var n = this.getKey(r);
          return this.hasCache(n, a);
        }
      }, {
        key: "setCache",
        value: function(r, a, n) {
          n.key = r, this.getCachesAt(a).set(r, n);
        }
      }, {
        key: "set",
        value: function(r, a, n) {
          var i = this.getKey(r);
          this.setCache(i, a, n), this.updateKeyMappingFor(r);
        }
      }, {
        key: "deleteCache",
        value: function(r, a) {
          this.getCachesAt(a).delete(r);
        }
      }, {
        key: "delete",
        value: function(r, a) {
          var n = this.getKey(r);
          this.deleteCache(n, a);
        }
      }, {
        key: "invalidateKey",
        value: function(r) {
          var a = this;
          this.lvls.forEach(function(n) {
            return a.deleteCache(r, n);
          });
        }
        // returns true if no other eles reference the invalidated cache (n.b. other eles may need the cache with the same key)
      }, {
        key: "invalidate",
        value: function(r) {
          var a = r.id(), n = this.keyForId.get(a);
          this.deleteKeyMappingFor(r);
          var i = this.doesEleInvalidateKey(r);
          return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
        }
      }]), t;
    }(), yl = 25, Jn = 50, jn = -4, _i = 3, xg = 7.99, Tg = 8, Cg = 1024, Dg = 1024, Lg = 1024, Sg = 0.2, Ag = 0.8, Og = 10, Ng = 0.15, Mg = 0.1, Ig = 0.9, Rg = 0.9, kg = 100, Pg = 1, Ea = {
      dequeue: "dequeue",
      downscale: "downscale",
      highQuality: "highQuality"
    }, Bg = At({
      getKey: null,
      doesEleInvalidateKey: vn,
      drawElement: null,
      getBoundingBox: null,
      getRotationPoint: null,
      getRotationOffset: null,
      isVisible: gs,
      allowEdgeTxrCaching: !0,
      allowParentTxrCaching: !0
    }), en = function(e, r) {
      var a = this;
      a.renderer = e, a.onDequeues = [];
      var n = Bg(r);
      He(a, n), a.lookup = new wg(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
    }, Lt = en.prototype;
    Lt.reasons = Ea, Lt.getTextureQueue = function(t) {
      var e = this;
      return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[t] = e.eleImgCaches[t] || [];
    }, Lt.getRetiredTextureQueue = function(t) {
      var e = this, r = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = r[t] = r[t] || [];
      return a;
    }, Lt.getElementQueue = function() {
      var t = this, e = t.eleCacheQueue = t.eleCacheQueue || new ka(function(r, a) {
        return a.reqs - r.reqs;
      });
      return e;
    }, Lt.getElementKeyToQueue = function() {
      var t = this, e = t.eleKeyToCacheQueue = t.eleKeyToCacheQueue || {};
      return e;
    }, Lt.getElement = function(t, e, r, a, n) {
      var i = this, s = this.renderer, o = s.cy.zoom(), u = this.lookup;
      if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !t.visible() || t.removed() || !i.allowEdgeTxrCaching && t.isEdge() || !i.allowParentTxrCaching && t.isParent())
        return null;
      if (a == null && (a = Math.ceil(hi(o * r))), a < jn)
        a = jn;
      else if (o >= xg || a > _i)
        return null;
      var l = Math.pow(2, a), f = e.h * l, h = e.w * l, c = s.eleTextBiggerThanMin(t, l);
      if (!this.isVisible(t, c))
        return null;
      var d = u.get(t, a);
      if (d && d.invalidated && (d.invalidated = !1, d.texture.invalidatedWidth -= d.width), d)
        return d;
      var v;
      if (f <= yl ? v = yl : f <= Jn ? v = Jn : v = Math.ceil(f / Jn) * Jn, f > Lg || h > Dg)
        return null;
      var y = i.getTextureQueue(v), p = y[y.length - 2], g = function() {
        return i.recycleTexture(v, h) || i.addTexture(v, h);
      };
      p || (p = y[y.length - 1]), p || (p = g()), p.width - p.usedWidth < h && (p = g());
      for (var m = function(K) {
        return K && K.scaledLabelShown === c;
      }, b = n && n === Ea.dequeue, E = n && n === Ea.highQuality, I = n && n === Ea.downscale, A, x = a + 1; x <= _i; x++) {
        var k = u.get(t, x);
        if (k) {
          A = k;
          break;
        }
      }
      var C = A && A.level === a + 1 ? A : null, F = function() {
        p.context.drawImage(C.texture.canvas, C.x, 0, C.width, C.height, p.usedWidth, 0, h, f);
      };
      if (p.context.setTransform(1, 0, 0, 1, 0, 0), p.context.clearRect(p.usedWidth, 0, h, v), m(C))
        F();
      else if (m(A))
        if (E) {
          for (var G = A.level; G > a; G--)
            C = i.getElement(t, e, r, G, Ea.downscale);
          F();
        } else
          return i.queueElement(t, A.level - 1), A;
      else {
        var M;
        if (!b && !E && !I)
          for (var X = a - 1; X >= jn; X--) {
            var B = u.get(t, X);
            if (B) {
              M = B;
              break;
            }
          }
        if (m(M))
          return i.queueElement(t, a), M;
        p.context.translate(p.usedWidth, 0), p.context.scale(l, l), this.drawElement(p.context, t, e, c, !1), p.context.scale(1 / l, 1 / l), p.context.translate(-p.usedWidth, 0);
      }
      return d = {
        x: p.usedWidth,
        texture: p,
        level: a,
        scale: l,
        width: h,
        height: f,
        scaledLabelShown: c
      }, p.usedWidth += Math.ceil(h + Tg), p.eleCaches.push(d), u.set(t, a, d), i.checkTextureFullness(p), d;
    }, Lt.invalidateElements = function(t) {
      for (var e = 0; e < t.length; e++)
        this.invalidateElement(t[e]);
    }, Lt.invalidateElement = function(t) {
      var e = this, r = e.lookup, a = [], n = r.isInvalid(t);
      if (n) {
        for (var i = jn; i <= _i; i++) {
          var s = r.getForCachedKey(t, i);
          s && a.push(s);
        }
        var o = r.invalidate(t);
        if (o)
          for (var u = 0; u < a.length; u++) {
            var l = a[u], f = l.texture;
            f.invalidatedWidth += l.width, l.invalidated = !0, e.checkTextureUtility(f);
          }
        e.removeFromQueue(t);
      }
    }, Lt.checkTextureUtility = function(t) {
      t.invalidatedWidth >= Sg * t.width && this.retireTexture(t);
    }, Lt.checkTextureFullness = function(t) {
      var e = this, r = e.getTextureQueue(t.height);
      t.usedWidth / t.width > Ag && t.fullnessChecks >= Og ? xr(r, t) : t.fullnessChecks++;
    }, Lt.retireTexture = function(t) {
      var e = this, r = t.height, a = e.getTextureQueue(r), n = this.lookup;
      xr(a, t), t.retired = !0;
      for (var i = t.eleCaches, s = 0; s < i.length; s++) {
        var o = i[s];
        n.deleteCache(o.key, o.level);
      }
      ui(i);
      var u = e.getRetiredTextureQueue(r);
      u.push(t);
    }, Lt.addTexture = function(t, e) {
      var r = this, a = r.getTextureQueue(t), n = {};
      return a.push(n), n.eleCaches = [], n.height = t, n.width = Math.max(Cg, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = r.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
    }, Lt.recycleTexture = function(t, e) {
      for (var r = this, a = r.getTextureQueue(t), n = r.getRetiredTextureQueue(t), i = 0; i < n.length; i++) {
        var s = n[i];
        if (s.width >= e)
          return s.retired = !1, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, ui(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), xr(n, s), a.push(s), s;
      }
    }, Lt.queueElement = function(t, e) {
      var r = this, a = r.getElementQueue(), n = r.getElementKeyToQueue(), i = this.getKey(t), s = n[i];
      if (s)
        s.level = Math.max(s.level, e), s.eles.merge(t), s.reqs++, a.updateItem(s);
      else {
        var o = {
          eles: t.spawn().merge(t),
          level: e,
          reqs: 1,
          key: i
        };
        a.push(o), n[i] = o;
      }
    }, Lt.dequeue = function(t) {
      for (var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < Pg && r.size() > 0; s++) {
        var o = r.pop(), u = o.key, l = o.eles[0], f = i.hasCache(l, o.level);
        if (a[u] = null, f)
          continue;
        n.push(o);
        var h = e.getBoundingBox(l);
        e.getElement(l, h, t, o.level, Ea.dequeue);
      }
      return n;
    }, Lt.removeFromQueue = function(t) {
      var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = this.getKey(t), i = a[n];
      i != null && (i.eles.length === 1 ? (i.reqs = oi, r.updateItem(i), r.pop(), a[n] = null) : i.eles.unmerge(t));
    }, Lt.onDequeue = function(t) {
      this.onDequeues.push(t);
    }, Lt.offDequeue = function(t) {
      xr(this.onDequeues, t);
    }, Lt.setupDequeueing = pl.setupDequeueing({
      deqRedrawThreshold: kg,
      deqCost: Ng,
      deqAvgCost: Mg,
      deqNoDrawCost: Ig,
      deqFastCost: Rg,
      deq: function(e, r, a) {
        return e.dequeue(r, a);
      },
      onDeqd: function(e, r) {
        for (var a = 0; a < e.onDequeues.length; a++) {
          var n = e.onDequeues[a];
          n(r);
        }
      },
      shouldRedraw: function(e, r, a, n) {
        for (var i = 0; i < r.length; i++)
          for (var s = r[i].eles, o = 0; o < s.length; o++) {
            var u = s[o].boundingBox();
            if (ci(u, n))
              return !0;
          }
        return !1;
      },
      priority: function(e) {
        return e.renderer.beforeRenderPriorities.eleTxrDeq;
      }
    });
    var Fg = 1, tn = -4, ei = 2, Gg = 3.99, zg = 50, Vg = 50, $g = 0.15, _g = 0.1, Ug = 0.9, Yg = 0.9, Hg = 1, ml = 250, Xg = 4e3 * 4e3, qg = !0, bl = function(e) {
      var r = this, a = r.renderer = e, n = a.cy;
      r.layersByLevel = {}, r.firstGet = !0, r.lastInvalidationTime = gr() - 2 * ml, r.skipping = !1, r.eleTxrDeqs = n.collection(), r.scheduleElementRefinement = fn(function() {
        r.refineElementTextures(r.eleTxrDeqs), r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
      }, Vg), a.beforeRender(function(s, o) {
        o - r.lastInvalidationTime <= ml ? r.skipping = !0 : r.skipping = !1;
      }, a.beforeRenderPriorities.lyrTxrSkip);
      var i = function(o, u) {
        return u.reqs - o.reqs;
      };
      r.layersQueue = new ka(i), r.setupDequeueing();
    }, It = bl.prototype, El = 0, Wg = Math.pow(2, 53) - 1;
    It.makeLayer = function(t, e) {
      var r = Math.pow(2, e), a = Math.ceil(t.w * r), n = Math.ceil(t.h * r), i = this.renderer.makeOffscreenCanvas(a, n), s = {
        id: El = ++El % Wg,
        bb: t,
        level: e,
        width: a,
        height: n,
        canvas: i,
        context: i.getContext("2d"),
        eles: [],
        elesQueue: [],
        reqs: 0
      }, o = s.context, u = -s.bb.x1, l = -s.bb.y1;
      return o.scale(r, r), o.translate(u, l), s;
    }, It.getLayers = function(t, e, r) {
      var a = this, n = a.renderer, i = n.cy, s = i.zoom(), o = a.firstGet;
      if (a.firstGet = !1, r == null) {
        if (r = Math.ceil(hi(s * e)), r < tn)
          r = tn;
        else if (s >= Gg || r > ei)
          return null;
      }
      a.validateLayersElesOrdering(r, t);
      var u = a.layersByLevel, l = Math.pow(2, r), f = u[r] = u[r] || [], h, c = a.levelIsComplete(r, t), d, v = function() {
        var F = function(re) {
          if (a.validateLayersElesOrdering(re, t), a.levelIsComplete(re, t))
            return d = u[re], !0;
        }, G = function(re) {
          if (!d)
            for (var K = r + re; tn <= K && K <= ei && !F(K); K += re)
              ;
        };
        G(1), G(-1);
        for (var M = f.length - 1; M >= 0; M--) {
          var X = f[M];
          X.invalid && xr(f, X);
        }
      };
      if (!c)
        v();
      else
        return f;
      var y = function() {
        if (!h) {
          h = Yt();
          for (var F = 0; F < t.length; F++)
            Ts(h, t[F].boundingBox());
        }
        return h;
      }, p = function(F) {
        F = F || {};
        var G = F.after;
        y();
        var M = h.w * l * (h.h * l);
        if (M > Xg)
          return null;
        var X = a.makeLayer(h, r);
        if (G != null) {
          var B = f.indexOf(G) + 1;
          f.splice(B, 0, X);
        } else
          (F.insert === void 0 || F.insert) && f.unshift(X);
        return X;
      };
      if (a.skipping && !o)
        return null;
      for (var g = null, m = t.length / Fg, b = !o, E = 0; E < t.length; E++) {
        var I = t[E], A = I._private.rscratch, x = A.imgLayerCaches = A.imgLayerCaches || {}, k = x[r];
        if (k) {
          g = k;
          continue;
        }
        if ((!g || g.eles.length >= m || !Ds(g.bb, I.boundingBox())) && (g = p({
          insert: !0,
          after: g
        }), !g))
          return null;
        d || b ? a.queueLayer(g, I) : a.drawEleInLayer(g, I, r, e), g.eles.push(I), x[r] = g;
      }
      return d || (b ? null : f);
    }, It.getEleLevelForLayerLevel = function(t, e) {
      return t;
    }, It.drawEleInLayer = function(t, e, r, a) {
      var n = this, i = this.renderer, s = t.context, o = e.boundingBox();
      o.w === 0 || o.h === 0 || !e.visible() || (r = n.getEleLevelForLayerLevel(r, a), i.setImgSmoothing(s, !1), i.drawCachedElement(s, e, null, null, r, qg), i.setImgSmoothing(s, !0));
    }, It.levelIsComplete = function(t, e) {
      var r = this, a = r.layersByLevel[t];
      if (!a || a.length === 0)
        return !1;
      for (var n = 0, i = 0; i < a.length; i++) {
        var s = a[i];
        if (s.reqs > 0 || s.invalid)
          return !1;
        n += s.eles.length;
      }
      return n === e.length;
    }, It.validateLayersElesOrdering = function(t, e) {
      var r = this.layersByLevel[t];
      if (r)
        for (var a = 0; a < r.length; a++) {
          for (var n = r[a], i = -1, s = 0; s < e.length; s++)
            if (n.eles[0] === e[s]) {
              i = s;
              break;
            }
          if (i < 0) {
            this.invalidateLayer(n);
            continue;
          }
          for (var o = i, s = 0; s < n.eles.length; s++)
            if (n.eles[s] !== e[o + s]) {
              this.invalidateLayer(n);
              break;
            }
        }
    }, It.updateElementsInLayers = function(t, e) {
      for (var r = this, a = Oe(t[0]), n = 0; n < t.length; n++)
        for (var i = a ? null : t[n], s = a ? t[n] : t[n].ele, o = s._private.rscratch, u = o.imgLayerCaches = o.imgLayerCaches || {}, l = tn; l <= ei; l++) {
          var f = u[l];
          f && (i && r.getEleLevelForLayerLevel(f.level) !== i.level || e(f, s, i));
        }
    }, It.haveLayers = function() {
      for (var t = this, e = !1, r = tn; r <= ei; r++) {
        var a = t.layersByLevel[r];
        if (a && a.length > 0) {
          e = !0;
          break;
        }
      }
      return e;
    }, It.invalidateElements = function(t) {
      var e = this;
      t.length !== 0 && (e.lastInvalidationTime = gr(), !(t.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(t, function(a, n, i) {
        e.invalidateLayer(a);
      }));
    }, It.invalidateLayer = function(t) {
      if (this.lastInvalidationTime = gr(), !t.invalid) {
        var e = t.level, r = t.eles, a = this.layersByLevel[e];
        xr(a, t), t.elesQueue = [], t.invalid = !0, t.replacement && (t.replacement.invalid = !0);
        for (var n = 0; n < r.length; n++) {
          var i = r[n]._private.rscratch.imgLayerCaches;
          i && (i[e] = null);
        }
      }
    }, It.refineElementTextures = function(t) {
      var e = this;
      e.updateElementsInLayers(t, function(a, n, i) {
        var s = a.replacement;
        if (s || (s = a.replacement = e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs)
          for (var o = 0; o < s.eles.length; o++)
            e.queueLayer(s, s.eles[o]);
      });
    }, It.enqueueElementRefinement = function(t) {
      this.eleTxrDeqs.merge(t), this.scheduleElementRefinement();
    }, It.queueLayer = function(t, e) {
      var r = this, a = r.layersQueue, n = t.elesQueue, i = n.hasId = n.hasId || {};
      if (!t.replacement) {
        if (e) {
          if (i[e.id()])
            return;
          n.push(e), i[e.id()] = !0;
        }
        t.reqs ? (t.reqs++, a.updateItem(t)) : (t.reqs = 1, a.push(t));
      }
    }, It.dequeue = function(t) {
      for (var e = this, r = e.layersQueue, a = [], n = 0; n < Hg && r.size() !== 0; ) {
        var i = r.peek();
        if (i.replacement) {
          r.pop();
          continue;
        }
        if (i.replaces && i !== i.replaces.replacement) {
          r.pop();
          continue;
        }
        if (i.invalid) {
          r.pop();
          continue;
        }
        var s = i.elesQueue.shift();
        s && (e.drawEleInLayer(i, s, i.level, t), n++), a.length === 0 && a.push(!0), i.elesQueue.length === 0 && (r.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
      }
      return a;
    }, It.applyLayerReplacement = function(t) {
      var e = this, r = e.layersByLevel[t.level], a = t.replaces, n = r.indexOf(a);
      if (!(n < 0 || a.invalid)) {
        r[n] = t;
        for (var i = 0; i < t.eles.length; i++) {
          var s = t.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
          o && (o[t.level] = t);
        }
        e.requestRedraw();
      }
    }, It.requestRedraw = fn(function() {
      var t = this.renderer;
      t.redrawHint("eles", !0), t.redrawHint("drag", !0), t.redraw();
    }, 100), It.setupDequeueing = pl.setupDequeueing({
      deqRedrawThreshold: zg,
      deqCost: $g,
      deqAvgCost: _g,
      deqNoDrawCost: Ug,
      deqFastCost: Yg,
      deq: function(e, r) {
        return e.dequeue(r);
      },
      onDeqd: li,
      shouldRedraw: gs,
      priority: function(e) {
        return e.renderer.beforeRenderPriorities.lyrTxrDeq;
      }
    });
    var wl = {}, xl;
    function Kg(t, e) {
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        t.lineTo(a.x, a.y);
      }
    }
    function Zg(t, e, r) {
      for (var a, n = 0; n < e.length; n++) {
        var i = e[n];
        n === 0 && (a = i), t.lineTo(i.x, i.y);
      }
      t.quadraticCurveTo(r.x, r.y, a.x, a.y);
    }
    function Tl(t, e, r) {
      t.beginPath && t.beginPath();
      for (var a = e, n = 0; n < a.length; n++) {
        var i = a[n];
        t.lineTo(i.x, i.y);
      }
      var s = r, o = r[0];
      t.moveTo(o.x, o.y);
      for (var n = 1; n < s.length; n++) {
        var i = s[n];
        t.lineTo(i.x, i.y);
      }
      t.closePath && t.closePath();
    }
    function Qg(t, e, r, a, n) {
      t.beginPath && t.beginPath(), t.arc(r, a, n, 0, Math.PI * 2, !1);
      var i = e, s = i[0];
      t.moveTo(s.x, s.y);
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        t.lineTo(u.x, u.y);
      }
      t.closePath && t.closePath();
    }
    function Jg(t, e, r, a) {
      t.arc(e, r, a, 0, Math.PI * 2, !1);
    }
    wl.arrowShapeImpl = function(t) {
      return (xl || (xl = {
        polygon: Kg,
        "triangle-backcurve": Zg,
        "triangle-tee": Tl,
        "circle-triangle": Qg,
        "triangle-cross": Tl,
        circle: Jg
      }))[t];
    };
    var cr = {};
    cr.drawElement = function(t, e, r, a, n, i) {
      var s = this;
      e.isNode() ? s.drawNode(t, e, r, a, n, i) : s.drawEdge(t, e, r, a, n, i);
    }, cr.drawElementOverlay = function(t, e) {
      var r = this;
      e.isNode() ? r.drawNodeOverlay(t, e) : r.drawEdgeOverlay(t, e);
    }, cr.drawElementUnderlay = function(t, e) {
      var r = this;
      e.isNode() ? r.drawNodeUnderlay(t, e) : r.drawEdgeUnderlay(t, e);
    }, cr.drawCachedElementPortion = function(t, e, r, a, n, i, s, o) {
      var u = this, l = r.getBoundingBox(e);
      if (!(l.w === 0 || l.h === 0)) {
        var f = r.getElement(e, l, a, n, i);
        if (f != null) {
          var h = o(u, e);
          if (h === 0)
            return;
          var c = s(u, e), d = l.x1, v = l.y1, y = l.w, p = l.h, g, m, b, E, I;
          if (c !== 0) {
            var A = r.getRotationPoint(e);
            b = A.x, E = A.y, t.translate(b, E), t.rotate(c), I = u.getImgSmoothing(t), I || u.setImgSmoothing(t, !0);
            var x = r.getRotationOffset(e);
            g = x.x, m = x.y;
          } else
            g = d, m = v;
          var k;
          h !== 1 && (k = t.globalAlpha, t.globalAlpha = k * h), t.drawImage(f.texture.canvas, f.x, 0, f.width, f.height, g, m, y, p), h !== 1 && (t.globalAlpha = k), c !== 0 && (t.rotate(-c), t.translate(-b, -E), I || u.setImgSmoothing(t, !1));
        } else
          r.drawElement(t, e);
      }
    };
    var jg = function() {
      return 0;
    }, ep = function(e, r) {
      return e.getTextAngle(r, null);
    }, tp = function(e, r) {
      return e.getTextAngle(r, "source");
    }, rp = function(e, r) {
      return e.getTextAngle(r, "target");
    }, ap = function(e, r) {
      return r.effectiveOpacity();
    }, Ui = function(e, r) {
      return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
    };
    cr.drawCachedElement = function(t, e, r, a, n, i) {
      var s = this, o = s.data, u = o.eleTxrCache, l = o.lblTxrCache, f = o.slbTxrCache, h = o.tlbTxrCache, c = e.boundingBox(), d = i === !0 ? u.reasons.highQuality : null;
      if (!(c.w === 0 || c.h === 0 || !e.visible()) && (!a || ci(c, a))) {
        var v = e.isEdge(), y = e.element()._private.rscratch.badLine;
        s.drawElementUnderlay(t, e), s.drawCachedElementPortion(t, e, u, r, n, d, jg, ap), (!v || !y) && s.drawCachedElementPortion(t, e, l, r, n, d, ep, Ui), v && !y && (s.drawCachedElementPortion(t, e, f, r, n, d, tp, Ui), s.drawCachedElementPortion(t, e, h, r, n, d, rp, Ui)), s.drawElementOverlay(t, e);
      }
    }, cr.drawElements = function(t, e) {
      for (var r = this, a = 0; a < e.length; a++) {
        var n = e[a];
        r.drawElement(t, n);
      }
    }, cr.drawCachedElements = function(t, e, r, a) {
      for (var n = this, i = 0; i < e.length; i++) {
        var s = e[i];
        n.drawCachedElement(t, s, r, a);
      }
    }, cr.drawCachedNodes = function(t, e, r, a) {
      for (var n = this, i = 0; i < e.length; i++) {
        var s = e[i];
        s.isNode() && n.drawCachedElement(t, s, r, a);
      }
    }, cr.drawLayeredElements = function(t, e, r, a) {
      var n = this, i = n.data.lyrTxrCache.getLayers(e, r);
      if (i)
        for (var s = 0; s < i.length; s++) {
          var o = i[s], u = o.bb;
          u.w === 0 || u.h === 0 || t.drawImage(o.canvas, u.x1, u.y1, u.w, u.h);
        }
      else
        n.drawCachedElements(t, e, r, a);
    };
    var br = {};
    br.drawEdge = function(t, e, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o = e._private.rscratch;
      if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
        var u;
        r && (u = r, t.translate(-u.x1, -u.y1));
        var l = i ? e.pstyle("opacity").value : 1, f = i ? e.pstyle("line-opacity").value : 1, h = e.pstyle("curve-style").value, c = e.pstyle("line-style").value, d = e.pstyle("width").pfValue, v = e.pstyle("line-cap").value, y = l * f, p = l * f, g = function() {
          var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
          h === "straight-triangle" ? (s.eleStrokeStyle(t, e, M), s.drawEdgeTrianglePath(e, t, o.allpts)) : (t.lineWidth = d, t.lineCap = v, s.eleStrokeStyle(t, e, M), s.drawEdgePath(e, t, o.allpts, c), t.lineCap = "butt");
        }, m = function() {
          n && s.drawEdgeOverlay(t, e);
        }, b = function() {
          n && s.drawEdgeUnderlay(t, e);
        }, E = function() {
          var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
          s.drawArrowheads(t, e, M);
        }, I = function() {
          s.drawElementText(t, e, null, a);
        };
        t.lineJoin = "round";
        var A = e.pstyle("ghost").value === "yes";
        if (A) {
          var x = e.pstyle("ghost-offset-x").pfValue, k = e.pstyle("ghost-offset-y").pfValue, C = e.pstyle("ghost-opacity").value, F = y * C;
          t.translate(x, k), g(F), E(F), t.translate(-x, -k);
        }
        b(), g(), E(), m(), I(), r && t.translate(u.x1, u.y1);
      }
    };
    var Cl = function(e) {
      if (!["overlay", "underlay"].includes(e))
        throw new Error("Invalid state");
      return function(r, a) {
        if (a.visible()) {
          var n = a.pstyle("".concat(e, "-opacity")).value;
          if (n !== 0) {
            var i = this, s = i.usePaths(), o = a._private.rscratch, u = a.pstyle("".concat(e, "-padding")).pfValue, l = 2 * u, f = a.pstyle("".concat(e, "-color")).value;
            r.lineWidth = l, o.edgeType === "self" && !s ? r.lineCap = "butt" : r.lineCap = "round", i.colorStrokeStyle(r, f[0], f[1], f[2], n), i.drawEdgePath(a, r, o.allpts, "solid");
          }
        }
      };
    };
    br.drawEdgeOverlay = Cl("overlay"), br.drawEdgeUnderlay = Cl("underlay"), br.drawEdgePath = function(t, e, r, a) {
      var n = t._private.rscratch, i = e, s, o = !1, u = this.usePaths(), l = t.pstyle("line-dash-pattern").pfValue, f = t.pstyle("line-dash-offset").pfValue;
      if (u) {
        var h = r.join("$"), c = n.pathCacheKey && n.pathCacheKey === h;
        c ? (s = e = n.pathCache, o = !0) : (s = e = new Path2D(), n.pathCacheKey = h, n.pathCache = s);
      }
      if (i.setLineDash)
        switch (a) {
          case "dotted":
            i.setLineDash([1, 1]);
            break;
          case "dashed":
            i.setLineDash(l), i.lineDashOffset = f;
            break;
          case "solid":
            i.setLineDash([]);
            break;
        }
      if (!o && !n.badLine)
        switch (e.beginPath && e.beginPath(), e.moveTo(r[0], r[1]), n.edgeType) {
          case "bezier":
          case "self":
          case "compound":
          case "multibezier":
            for (var d = 2; d + 3 < r.length; d += 4)
              e.quadraticCurveTo(r[d], r[d + 1], r[d + 2], r[d + 3]);
            break;
          case "straight":
          case "segments":
          case "haystack":
            for (var v = 2; v + 1 < r.length; v += 2)
              e.lineTo(r[v], r[v + 1]);
            break;
        }
      e = i, u ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
    }, br.drawEdgeTrianglePath = function(t, e, r) {
      e.fillStyle = e.strokeStyle;
      for (var a = t.pstyle("width").pfValue, n = 0; n + 1 < r.length; n += 2) {
        var i = [r[n + 2] - r[n], r[n + 3] - r[n + 1]], s = Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [i[1] / s, -i[0] / s], u = [o[0] * a / 2, o[1] * a / 2];
        e.beginPath(), e.moveTo(r[n] - u[0], r[n + 1] - u[1]), e.lineTo(r[n] + u[0], r[n + 1] + u[1]), e.lineTo(r[n + 2], r[n + 3]), e.closePath(), e.fill();
      }
    }, br.drawArrowheads = function(t, e, r) {
      var a = e._private.rscratch, n = a.edgeType === "haystack";
      n || this.drawArrowhead(t, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, r), this.drawArrowhead(t, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, r), this.drawArrowhead(t, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, r), n || this.drawArrowhead(t, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, r);
    }, br.drawArrowhead = function(t, e, r, a, n, i, s) {
      if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
        var o = this, u = e.pstyle(r + "-arrow-shape").value;
        if (u !== "none") {
          var l = e.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled", f = e.pstyle(r + "-arrow-fill").value, h = e.pstyle("width").pfValue, c = e.pstyle(r + "-arrow-width"), d = c.value === "match-line" ? h : c.pfValue;
          c.units === "%" && (d *= h);
          var v = e.pstyle("opacity").value;
          s === void 0 && (s = v);
          var y = t.globalCompositeOperation;
          (s !== 1 || f === "hollow") && (t.globalCompositeOperation = "destination-out", o.colorFillStyle(t, 255, 255, 255, 1), o.colorStrokeStyle(t, 255, 255, 255, 1), o.drawArrowShape(e, t, l, h, u, d, a, n, i), t.globalCompositeOperation = y);
          var p = e.pstyle(r + "-arrow-color").value;
          o.colorFillStyle(t, p[0], p[1], p[2], s), o.colorStrokeStyle(t, p[0], p[1], p[2], s), o.drawArrowShape(e, t, f, h, u, d, a, n, i);
        }
      }
    }, br.drawArrowShape = function(t, e, r, a, n, i, s, o, u) {
      var l = this, f = this.usePaths() && n !== "triangle-cross", h = !1, c, d = e, v = {
        x: s,
        y: o
      }, y = t.pstyle("arrow-scale").value, p = this.getArrowWidth(a, y), g = l.arrowShapes[n];
      if (f) {
        var m = l.arrowPathCache = l.arrowPathCache || [], b = Pr(n), E = m[b];
        E != null ? (c = e = E, h = !0) : (c = e = new Path2D(), m[b] = c);
      }
      h || (e.beginPath && e.beginPath(), f ? g.draw(e, 1, 0, {
        x: 0,
        y: 0
      }, 1) : g.draw(e, p, u, v, a), e.closePath && e.closePath()), e = d, f && (e.translate(s, o), e.rotate(u), e.scale(p, p)), (r === "filled" || r === "both") && (f ? e.fill(c) : e.fill()), (r === "hollow" || r === "both") && (e.lineWidth = i / (f ? p : 1), e.lineJoin = "miter", f ? e.stroke(c) : e.stroke()), f && (e.scale(1 / p, 1 / p), e.rotate(-u), e.translate(-s, -o));
    };
    var Yi = {};
    Yi.safeDrawImage = function(t, e, r, a, n, i, s, o, u, l) {
      if (!(n <= 0 || i <= 0 || u <= 0 || l <= 0))
        try {
          t.drawImage(e, r, a, n, i, s, o, u, l);
        } catch (f) {
          ct(f);
        }
    }, Yi.drawInscribedImage = function(t, e, r, a, n) {
      var i = this, s = r.position(), o = s.x, u = s.y, l = r.cy().style(), f = l.getIndexedStyle.bind(l), h = f(r, "background-fit", "value", a), c = f(r, "background-repeat", "value", a), d = r.width(), v = r.height(), y = r.padding() * 2, p = d + (f(r, "background-width-relative-to", "value", a) === "inner" ? 0 : y), g = v + (f(r, "background-height-relative-to", "value", a) === "inner" ? 0 : y), m = r._private.rscratch, b = f(r, "background-clip", "value", a), E = b === "node", I = f(r, "background-image-opacity", "value", a) * n, A = f(r, "background-image-smoothing", "value", a), x = e.width || e.cachedW, k = e.height || e.cachedH;
      (x == null || k == null) && (document.body.appendChild(e), x = e.cachedW = e.width || e.offsetWidth, k = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
      var C = x, F = k;
      if (f(r, "background-width", "value", a) !== "auto" && (f(r, "background-width", "units", a) === "%" ? C = f(r, "background-width", "pfValue", a) * p : C = f(r, "background-width", "pfValue", a)), f(r, "background-height", "value", a) !== "auto" && (f(r, "background-height", "units", a) === "%" ? F = f(r, "background-height", "pfValue", a) * g : F = f(r, "background-height", "pfValue", a)), !(C === 0 || F === 0)) {
        if (h === "contain") {
          var G = Math.min(p / C, g / F);
          C *= G, F *= G;
        } else if (h === "cover") {
          var G = Math.max(p / C, g / F);
          C *= G, F *= G;
        }
        var M = o - p / 2, X = f(r, "background-position-x", "units", a), B = f(r, "background-position-x", "pfValue", a);
        X === "%" ? M += (p - C) * B : M += B;
        var re = f(r, "background-offset-x", "units", a), K = f(r, "background-offset-x", "pfValue", a);
        re === "%" ? M += (p - C) * K : M += K;
        var q = u - g / 2, ae = f(r, "background-position-y", "units", a), ue = f(r, "background-position-y", "pfValue", a);
        ae === "%" ? q += (g - F) * ue : q += ue;
        var be = f(r, "background-offset-y", "units", a), ie = f(r, "background-offset-y", "pfValue", a);
        be === "%" ? q += (g - F) * ie : q += ie, m.pathCache && (M -= o, q -= u, o = 0, u = 0);
        var ge = t.globalAlpha;
        t.globalAlpha = I;
        var we = i.getImgSmoothing(t), De = !1;
        if (A === "no" && we ? (i.setImgSmoothing(t, !1), De = !0) : A === "yes" && !we && (i.setImgSmoothing(t, !0), De = !0), c === "no-repeat")
          E && (t.save(), m.pathCache ? t.clip(m.pathCache) : (i.nodeShapes[i.getNodeShape(r)].draw(t, o, u, p, g), t.clip())), i.safeDrawImage(t, e, 0, 0, x, k, M, q, C, F), E && t.restore();
        else {
          var xe = t.createPattern(e, c);
          t.fillStyle = xe, i.nodeShapes[i.getNodeShape(r)].draw(t, o, u, p, g), t.translate(M, q), t.fill(), t.translate(-M, -q);
        }
        t.globalAlpha = ge, De && i.setImgSmoothing(t, we);
      }
    };
    var Ur = {};
    Ur.eleTextBiggerThanMin = function(t, e) {
      if (!e) {
        var r = t.cy().zoom(), a = this.getPixelRatio(), n = Math.ceil(hi(r * a));
        e = Math.pow(2, n);
      }
      var i = t.pstyle("font-size").pfValue * e, s = t.pstyle("min-zoomed-font-size").pfValue;
      return !(i < s);
    }, Ur.drawElementText = function(t, e, r, a, n) {
      var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this;
      if (a == null) {
        if (i && !s.eleTextBiggerThanMin(e))
          return;
      } else if (a === !1)
        return;
      if (e.isNode()) {
        var o = e.pstyle("label");
        if (!o || !o.value)
          return;
        var u = s.getLabelJustification(e);
        t.textAlign = u, t.textBaseline = "bottom";
      } else {
        var l = e.element()._private.rscratch.badLine, f = e.pstyle("label"), h = e.pstyle("source-label"), c = e.pstyle("target-label");
        if (l || (!f || !f.value) && (!h || !h.value) && (!c || !c.value))
          return;
        t.textAlign = "center", t.textBaseline = "bottom";
      }
      var d = !r, v;
      r && (v = r, t.translate(-v.x1, -v.y1)), n == null ? (s.drawText(t, e, null, d, i), e.isEdge() && (s.drawText(t, e, "source", d, i), s.drawText(t, e, "target", d, i))) : s.drawText(t, e, n, d, i), r && t.translate(v.x1, v.y1);
    }, Ur.getFontCache = function(t) {
      var e;
      this.fontCaches = this.fontCaches || [];
      for (var r = 0; r < this.fontCaches.length; r++)
        if (e = this.fontCaches[r], e.context === t)
          return e;
      return e = {
        context: t
      }, this.fontCaches.push(e), e;
    }, Ur.setupTextStyle = function(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = r ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, u = e.pstyle("text-outline-opacity").value * o, l = e.pstyle("color").value, f = e.pstyle("text-outline-color").value;
      t.font = a + " " + s + " " + n + " " + i, t.lineJoin = "round", this.colorFillStyle(t, l[0], l[1], l[2], o), this.colorStrokeStyle(t, f[0], f[1], f[2], u);
    };
    function Hi(t, e, r, a, n) {
      var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = arguments.length > 6 ? arguments[6] : void 0;
      t.beginPath(), t.moveTo(e + i, r), t.lineTo(e + a - i, r), t.quadraticCurveTo(e + a, r, e + a, r + i), t.lineTo(e + a, r + n - i), t.quadraticCurveTo(e + a, r + n, e + a - i, r + n), t.lineTo(e + i, r + n), t.quadraticCurveTo(e, r + n, e, r + n - i), t.lineTo(e, r + i), t.quadraticCurveTo(e, r, e + i, r), t.closePath(), s ? t.stroke() : t.fill();
    }
    Ur.getTextAngle = function(t, e) {
      var r, a = t._private, n = a.rscratch, i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = tr(n, "labelAngle", e);
      return s.strValue === "autorotate" ? r = t.isEdge() ? o : 0 : s.strValue === "none" ? r = 0 : r = s.pfValue, r;
    }, Ur.drawText = function(t, e, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
      if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
        r === "main" && (r = null);
        var u = tr(s, "labelX", r), l = tr(s, "labelY", r), f, h, c = this.getLabelText(e, r);
        if (c != null && c !== "" && !isNaN(u) && !isNaN(l)) {
          this.setupTextStyle(t, e, n);
          var d = r ? r + "-" : "", v = tr(s, "labelWidth", r), y = tr(s, "labelHeight", r), p = e.pstyle(d + "text-margin-x").pfValue, g = e.pstyle(d + "text-margin-y").pfValue, m = e.isEdge(), b = e.pstyle("text-halign").value, E = e.pstyle("text-valign").value;
          m && (b = "center", E = "center"), u += p, l += g;
          var I;
          switch (a ? I = this.getTextAngle(e, r) : I = 0, I !== 0 && (f = u, h = l, t.translate(f, h), t.rotate(I), u = 0, l = 0), E) {
            case "top":
              break;
            case "center":
              l += y / 2;
              break;
            case "bottom":
              l += y;
              break;
          }
          var A = e.pstyle("text-background-opacity").value, x = e.pstyle("text-border-opacity").value, k = e.pstyle("text-border-width").pfValue, C = e.pstyle("text-background-padding").pfValue, F = e.pstyle("text-background-shape").strValue, G = F.indexOf("round") === 0, M = 2;
          if (A > 0 || k > 0 && x > 0) {
            var X = u - C;
            switch (b) {
              case "left":
                X -= v;
                break;
              case "center":
                X -= v / 2;
                break;
            }
            var B = l - y - C, re = v + 2 * C, K = y + 2 * C;
            if (A > 0) {
              var q = t.fillStyle, ae = e.pstyle("text-background-color").value;
              t.fillStyle = "rgba(" + ae[0] + "," + ae[1] + "," + ae[2] + "," + A * o + ")", G ? Hi(t, X, B, re, K, M) : t.fillRect(X, B, re, K), t.fillStyle = q;
            }
            if (k > 0 && x > 0) {
              var ue = t.strokeStyle, be = t.lineWidth, ie = e.pstyle("text-border-color").value, ge = e.pstyle("text-border-style").value;
              if (t.strokeStyle = "rgba(" + ie[0] + "," + ie[1] + "," + ie[2] + "," + x * o + ")", t.lineWidth = k, t.setLineDash)
                switch (ge) {
                  case "dotted":
                    t.setLineDash([1, 1]);
                    break;
                  case "dashed":
                    t.setLineDash([4, 2]);
                    break;
                  case "double":
                    t.lineWidth = k / 4, t.setLineDash([]);
                    break;
                  case "solid":
                    t.setLineDash([]);
                    break;
                }
              if (G ? Hi(t, X, B, re, K, M, "stroke") : t.strokeRect(X, B, re, K), ge === "double") {
                var we = k / 2;
                G ? Hi(t, X + we, B + we, re - we * 2, K - we * 2, M, "stroke") : t.strokeRect(X + we, B + we, re - we * 2, K - we * 2);
              }
              t.setLineDash && t.setLineDash([]), t.lineWidth = be, t.strokeStyle = ue;
            }
          }
          var De = 2 * e.pstyle("text-outline-width").pfValue;
          if (De > 0 && (t.lineWidth = De), e.pstyle("text-wrap").value === "wrap") {
            var xe = tr(s, "labelWrapCachedLines", r), Le = tr(s, "labelLineHeight", r), se = v / 2, Te = this.getLabelJustification(e);
            switch (Te === "auto" || (b === "left" ? Te === "left" ? u += -v : Te === "center" && (u += -se) : b === "center" ? Te === "left" ? u += -se : Te === "right" && (u += se) : b === "right" && (Te === "center" ? u += se : Te === "right" && (u += v))), E) {
              case "top":
                l -= (xe.length - 1) * Le;
                break;
              case "center":
              case "bottom":
                l -= (xe.length - 1) * Le;
                break;
            }
            for (var Ae = 0; Ae < xe.length; Ae++)
              De > 0 && t.strokeText(xe[Ae], u, l), t.fillText(xe[Ae], u, l), l += Le;
          } else
            De > 0 && t.strokeText(c, u, l), t.fillText(c, u, l);
          I !== 0 && (t.rotate(-I), t.translate(-f, -h));
        }
      }
    };
    var wa = {};
    wa.drawNode = function(t, e, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o, u, l = e._private, f = l.rscratch, h = e.position();
      if (!(!R(h.x) || !R(h.y)) && !(i && !e.visible())) {
        var c = i ? e.effectiveOpacity() : 1, d = s.usePaths(), v, y = !1, p = e.padding();
        o = e.width() + 2 * p, u = e.height() + 2 * p;
        var g;
        r && (g = r, t.translate(-g.x1, -g.y1));
        for (var m = e.pstyle("background-image"), b = m.value, E = new Array(b.length), I = new Array(b.length), A = 0, x = 0; x < b.length; x++) {
          var k = b[x], C = E[x] = k != null && k !== "none";
          if (C) {
            var F = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", x);
            A++, I[x] = s.getCachedImage(k, F, function() {
              l.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
            });
          }
        }
        var G = e.pstyle("background-blacken").value, M = e.pstyle("border-width").pfValue, X = e.pstyle("background-opacity").value * c, B = e.pstyle("border-color").value, re = e.pstyle("border-style").value, K = e.pstyle("border-opacity").value * c, q = e.pstyle("outline-width").pfValue, ae = e.pstyle("outline-color").value, ue = e.pstyle("outline-style").value, be = e.pstyle("outline-opacity").value * c, ie = e.pstyle("outline-offset").value;
        t.lineJoin = "miter";
        var ge = function() {
          var fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : X;
          s.eleFillStyle(t, e, fe);
        }, we = function() {
          var fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K;
          s.colorStrokeStyle(t, B[0], B[1], B[2], fe);
        }, De = function() {
          var fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : be;
          s.colorStrokeStyle(t, ae[0], ae[1], ae[2], fe);
        }, xe = function(fe, O, oe, Ce) {
          var ve = s.nodePathCache = s.nodePathCache || [], ye = vs(oe === "polygon" ? oe + "," + Ce.join(",") : oe, "" + O, "" + fe), Ue = ve[ye], Ee, Ge = !1;
          return Ue != null ? (Ee = Ue, Ge = !0, f.pathCache = Ee) : (Ee = new Path2D(), ve[ye] = f.pathCache = Ee), {
            path: Ee,
            cacheHit: Ge
          };
        }, Le = e.pstyle("shape").strValue, se = e.pstyle("shape-polygon-points").pfValue;
        if (d) {
          t.translate(h.x, h.y);
          var Te = xe(o, u, Le, se);
          v = Te.path, y = Te.cacheHit;
        }
        var Ae = function() {
          if (!y) {
            var fe = h;
            d && (fe = {
              x: 0,
              y: 0
            }), s.nodeShapes[s.getNodeShape(e)].draw(v || t, fe.x, fe.y, o, u);
          }
          d ? t.fill(v) : t.fill();
        }, Se = function() {
          for (var fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, oe = l.backgrounding, Ce = 0, ve = 0; ve < I.length; ve++) {
            var ye = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", ve);
            if (O && ye === "over" || !O && ye === "inside") {
              Ce++;
              continue;
            }
            E[ve] && I[ve].complete && !I[ve].error && (Ce++, s.drawInscribedImage(t, I[ve], e, ve, fe));
          }
          l.backgrounding = Ce !== A, oe !== l.backgrounding && e.updateStyle(!1);
        }, Ne = function() {
          var fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
          s.hasPie(e) && (s.drawPie(t, e, O), fe && (d || s.nodeShapes[s.getNodeShape(e)].draw(t, h.x, h.y, o, u)));
        }, Fe = function() {
          var fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, O = (G > 0 ? G : -G) * fe, oe = G > 0 ? 0 : 255;
          G !== 0 && (s.colorFillStyle(t, oe, oe, oe, O), d ? t.fill(v) : t.fill());
        }, Xe = function() {
          if (M > 0) {
            if (t.lineWidth = M, t.lineCap = "butt", t.setLineDash)
              switch (re) {
                case "dotted":
                  t.setLineDash([1, 1]);
                  break;
                case "dashed":
                  t.setLineDash([4, 2]);
                  break;
                case "solid":
                case "double":
                  t.setLineDash([]);
                  break;
              }
            if (d ? t.stroke(v) : t.stroke(), re === "double") {
              t.lineWidth = M / 3;
              var fe = t.globalCompositeOperation;
              t.globalCompositeOperation = "destination-out", d ? t.stroke(v) : t.stroke(), t.globalCompositeOperation = fe;
            }
            t.setLineDash && t.setLineDash([]);
          }
        }, Ie = function() {
          if (q > 0) {
            if (t.lineWidth = q, t.lineCap = "butt", t.setLineDash)
              switch (ue) {
                case "dotted":
                  t.setLineDash([1, 1]);
                  break;
                case "dashed":
                  t.setLineDash([4, 2]);
                  break;
                case "solid":
                case "double":
                  t.setLineDash([]);
                  break;
              }
            var fe = h;
            d && (fe = {
              x: 0,
              y: 0
            });
            var O = s.getNodeShape(e), oe = (o + M + (q + ie)) / o, Ce = (u + M + (q + ie)) / u, ve = o * oe, ye = u * Ce, Ue = s.nodeShapes[O].points, Ee;
            if (d) {
              var Ge = xe(ve, ye, O, Ue);
              Ee = Ge.path;
            }
            if (O === "ellipse")
              s.drawEllipsePath(Ee || t, fe.x, fe.y, ve, ye);
            else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(O)) {
              var Qe = 0, ft = 0, We = 0;
              O === "round-diamond" ? Qe = (M + ie + q) * 1.4 : O === "round-heptagon" ? (Qe = (M + ie + q) * 1.075, We = -(M / 2 + ie + q) / 35) : O === "round-hexagon" ? Qe = (M + ie + q) * 1.12 : O === "round-pentagon" ? (Qe = (M + ie + q) * 1.13, We = -(M / 2 + ie + q) / 15) : O === "round-tag" ? (Qe = (M + ie + q) * 1.12, ft = (M / 2 + q + ie) * 0.07) : O === "round-triangle" && (Qe = (M + ie + q) * (Math.PI / 2), We = -(M + ie / 2 + q) / Math.PI), Qe !== 0 && (oe = (o + Qe) / o, Ce = (u + Qe) / u), s.drawRoundPolygonPath(Ee || t, fe.x + ft, fe.y + We, o * oe, u * Ce, Ue);
            } else if (["roundrectangle", "round-rectangle"].includes(O))
              s.drawRoundRectanglePath(Ee || t, fe.x, fe.y, ve, ye);
            else if (["cutrectangle", "cut-rectangle"].includes(O))
              s.drawCutRectanglePath(Ee || t, fe.x, fe.y, ve, ye);
            else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(O))
              s.drawBottomRoundRectanglePath(Ee || t, fe.x, fe.y, ve, ye);
            else if (O === "barrel")
              s.drawBarrelPath(Ee || t, fe.x, fe.y, ve, ye);
            else if (O.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(O)) {
              var ot = (M + q + ie) / o;
              Ue = bn(En(Ue, ot)), s.drawPolygonPath(Ee || t, fe.x, fe.y, o, u, Ue);
            } else {
              var Ke = (M + q + ie) / o;
              Ue = bn(En(Ue, -Ke)), s.drawPolygonPath(Ee || t, fe.x, fe.y, o, u, Ue);
            }
            if (d ? t.stroke(Ee) : t.stroke(), ue === "double") {
              t.lineWidth = M / 3;
              var Je = t.globalCompositeOperation;
              t.globalCompositeOperation = "destination-out", d ? t.stroke(Ee) : t.stroke(), t.globalCompositeOperation = Je;
            }
            t.setLineDash && t.setLineDash([]);
          }
        }, Re = function() {
          n && s.drawNodeOverlay(t, e, h, o, u);
        }, $e = function() {
          n && s.drawNodeUnderlay(t, e, h, o, u);
        }, ze = function() {
          s.drawElementText(t, e, null, a);
        }, Be = e.pstyle("ghost").value === "yes";
        if (Be) {
          var _e = e.pstyle("ghost-offset-x").pfValue, rt = e.pstyle("ghost-offset-y").pfValue, je = e.pstyle("ghost-opacity").value, qe = je * c;
          t.translate(_e, rt), De(), Ie(), ge(je * X), Ae(), Se(qe, !0), we(je * K), Xe(), Ne(G !== 0 || M !== 0), Se(qe, !1), Fe(qe), t.translate(-_e, -rt);
        }
        d && t.translate(-h.x, -h.y), $e(), d && t.translate(h.x, h.y), De(), Ie(), ge(), Ae(), Se(c, !0), we(), Xe(), Ne(G !== 0 || M !== 0), Se(c, !1), Fe(), d && t.translate(-h.x, -h.y), ze(), Re(), r && t.translate(g.x1, g.y1);
      }
    };
    var Dl = function(e) {
      if (!["overlay", "underlay"].includes(e))
        throw new Error("Invalid state");
      return function(r, a, n, i, s) {
        var o = this;
        if (a.visible()) {
          var u = a.pstyle("".concat(e, "-padding")).pfValue, l = a.pstyle("".concat(e, "-opacity")).value, f = a.pstyle("".concat(e, "-color")).value, h = a.pstyle("".concat(e, "-shape")).value;
          if (l > 0) {
            if (n = n || a.position(), i == null || s == null) {
              var c = a.padding();
              i = a.width() + 2 * c, s = a.height() + 2 * c;
            }
            o.colorFillStyle(r, f[0], f[1], f[2], l), o.nodeShapes[h].draw(r, n.x, n.y, i + u * 2, s + u * 2), r.fill();
          }
        }
      };
    };
    wa.drawNodeOverlay = Dl("overlay"), wa.drawNodeUnderlay = Dl("underlay"), wa.hasPie = function(t) {
      return t = t[0], t._private.hasPie;
    }, wa.drawPie = function(t, e, r, a) {
      e = e[0], a = a || e.position();
      var n = e.cy().style(), i = e.pstyle("pie-size"), s = a.x, o = a.y, u = e.width(), l = e.height(), f = Math.min(u, l) / 2, h = 0, c = this.usePaths();
      c && (s = 0, o = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2);
      for (var d = 1; d <= n.pieBackgroundN; d++) {
        var v = e.pstyle("pie-" + d + "-background-size").value, y = e.pstyle("pie-" + d + "-background-color").value, p = e.pstyle("pie-" + d + "-background-opacity").value * r, g = v / 100;
        g + h > 1 && (g = 1 - h);
        var m = 1.5 * Math.PI + 2 * Math.PI * h, b = 2 * Math.PI * g, E = m + b;
        v === 0 || h >= 1 || h + g > 1 || (t.beginPath(), t.moveTo(s, o), t.arc(s, o, f, m, E), t.closePath(), this.colorFillStyle(t, y[0], y[1], y[2], p), t.fill(), h += g);
      }
    };
    var Kt = {}, np = 100;
    Kt.getPixelRatio = function() {
      var t = this.data.contexts[0];
      if (this.forcedPixelRatio != null)
        return this.forcedPixelRatio;
      var e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
      return (window.devicePixelRatio || 1) / e;
    }, Kt.paintCache = function(t) {
      for (var e = this.paintCaches = this.paintCaches || [], r = !0, a, n = 0; n < e.length; n++)
        if (a = e[n], a.context === t) {
          r = !1;
          break;
        }
      return r && (a = {
        context: t
      }, e.push(a)), a;
    }, Kt.createGradientStyleFor = function(t, e, r, a, n) {
      var i, s = this.usePaths(), o = r.pstyle(e + "-gradient-stop-colors").value, u = r.pstyle(e + "-gradient-stop-positions").pfValue;
      if (a === "radial-gradient")
        if (r.isEdge()) {
          var l = r.sourceEndpoint(), f = r.targetEndpoint(), h = r.midpoint(), c = Br(l, h), d = Br(f, h);
          i = t.createRadialGradient(h.x, h.y, 0, h.x, h.y, Math.max(c, d));
        } else {
          var v = s ? {
            x: 0,
            y: 0
          } : r.position(), y = r.paddedWidth(), p = r.paddedHeight();
          i = t.createRadialGradient(v.x, v.y, 0, v.x, v.y, Math.max(y, p));
        }
      else if (r.isEdge()) {
        var g = r.sourceEndpoint(), m = r.targetEndpoint();
        i = t.createLinearGradient(g.x, g.y, m.x, m.y);
      } else {
        var b = s ? {
          x: 0,
          y: 0
        } : r.position(), E = r.paddedWidth(), I = r.paddedHeight(), A = E / 2, x = I / 2, k = r.pstyle("background-gradient-direction").value;
        switch (k) {
          case "to-bottom":
            i = t.createLinearGradient(b.x, b.y - x, b.x, b.y + x);
            break;
          case "to-top":
            i = t.createLinearGradient(b.x, b.y + x, b.x, b.y - x);
            break;
          case "to-left":
            i = t.createLinearGradient(b.x + A, b.y, b.x - A, b.y);
            break;
          case "to-right":
            i = t.createLinearGradient(b.x - A, b.y, b.x + A, b.y);
            break;
          case "to-bottom-right":
          case "to-right-bottom":
            i = t.createLinearGradient(b.x - A, b.y - x, b.x + A, b.y + x);
            break;
          case "to-top-right":
          case "to-right-top":
            i = t.createLinearGradient(b.x - A, b.y + x, b.x + A, b.y - x);
            break;
          case "to-bottom-left":
          case "to-left-bottom":
            i = t.createLinearGradient(b.x + A, b.y - x, b.x - A, b.y + x);
            break;
          case "to-top-left":
          case "to-left-top":
            i = t.createLinearGradient(b.x + A, b.y + x, b.x - A, b.y - x);
            break;
        }
      }
      if (!i)
        return null;
      for (var C = u.length === o.length, F = o.length, G = 0; G < F; G++)
        i.addColorStop(C ? u[G] : G / (F - 1), "rgba(" + o[G][0] + "," + o[G][1] + "," + o[G][2] + "," + n + ")");
      return i;
    }, Kt.gradientFillStyle = function(t, e, r, a) {
      var n = this.createGradientStyleFor(t, "background", e, r, a);
      if (!n)
        return null;
      t.fillStyle = n;
    }, Kt.colorFillStyle = function(t, e, r, a, n) {
      t.fillStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
    }, Kt.eleFillStyle = function(t, e, r) {
      var a = e.pstyle("background-fill").value;
      if (a === "linear-gradient" || a === "radial-gradient")
        this.gradientFillStyle(t, e, a, r);
      else {
        var n = e.pstyle("background-color").value;
        this.colorFillStyle(t, n[0], n[1], n[2], r);
      }
    }, Kt.gradientStrokeStyle = function(t, e, r, a) {
      var n = this.createGradientStyleFor(t, "line", e, r, a);
      if (!n)
        return null;
      t.strokeStyle = n;
    }, Kt.colorStrokeStyle = function(t, e, r, a, n) {
      t.strokeStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
    }, Kt.eleStrokeStyle = function(t, e, r) {
      var a = e.pstyle("line-fill").value;
      if (a === "linear-gradient" || a === "radial-gradient")
        this.gradientStrokeStyle(t, e, a, r);
      else {
        var n = e.pstyle("line-color").value;
        this.colorStrokeStyle(t, n[0], n[1], n[2], r);
      }
    }, Kt.matchCanvasSize = function(t) {
      var e = this, r = e.data, a = e.findContainerClientCoords(), n = a[2], i = a[3], s = e.getPixelRatio(), o = e.motionBlurPxRatio;
      (t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
      var u = n * s, l = i * s, f;
      if (!(u === e.canvasWidth && l === e.canvasHeight)) {
        e.fontCaches = null;
        var h = r.canvasContainer;
        h.style.width = n + "px", h.style.height = i + "px";
        for (var c = 0; c < e.CANVAS_LAYERS; c++)
          f = r.canvases[c], f.width = u, f.height = l, f.style.width = n + "px", f.style.height = i + "px";
        for (var c = 0; c < e.BUFFER_COUNT; c++)
          f = r.bufferCanvases[c], f.width = u, f.height = l, f.style.width = n + "px", f.style.height = i + "px";
        e.textureMult = 1, s <= 1 && (f = r.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, f.width = u * e.textureMult, f.height = l * e.textureMult), e.canvasWidth = u, e.canvasHeight = l;
      }
    }, Kt.renderTo = function(t, e, r, a) {
      this.render({
        forcedContext: t,
        forcedZoom: e,
        forcedPan: r,
        drawAllLayers: !0,
        forcedPxRatio: a
      });
    }, Kt.render = function(t) {
      t = t || bs();
      var e = t.forcedContext, r = t.drawAllLayers, a = t.drawOnlyNodeLayer, n = t.forcedZoom, i = t.forcedPan, s = this, o = t.forcedPxRatio === void 0 ? this.getPixelRatio() : t.forcedPxRatio, u = s.cy, l = s.data, f = l.canvasNeedsRedraw, h = s.textureOnViewport && !e && (s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming), c = t.motionBlur !== void 0 ? t.motionBlur : s.motionBlur, d = s.motionBlurPxRatio, v = u.hasCompoundNodes(), y = s.hoverData.draggingEles, p = !!(s.hoverData.selecting || s.touchData.selecting);
      c = c && !e && s.motionBlurEnabled && !p;
      var g = c;
      e || (s.prevPxRatio !== o && (s.invalidateContainerClientCoordsCache(), s.matchCanvasSize(s.container), s.redrawHint("eles", !0), s.redrawHint("drag", !0)), s.prevPxRatio = o), !e && s.motionBlurTimeout && clearTimeout(s.motionBlurTimeout), c && (s.mbFrames == null && (s.mbFrames = 0), s.mbFrames++, s.mbFrames < 3 && (g = !1), s.mbFrames > s.minMbLowQualFrames && (s.motionBlurPxRatio = s.mbPxRBlurry)), s.clearingMotionBlur && (s.motionBlurPxRatio = 1), s.textureDrawLastFrame && !h && (f[s.NODE] = !0, f[s.SELECT_BOX] = !0);
      var m = u.style(), b = u.zoom(), E = n !== void 0 ? n : b, I = u.pan(), A = {
        x: I.x,
        y: I.y
      }, x = {
        zoom: b,
        pan: {
          x: I.x,
          y: I.y
        }
      }, k = s.prevViewport, C = k === void 0 || x.zoom !== k.zoom || x.pan.x !== k.pan.x || x.pan.y !== k.pan.y;
      !C && !(y && !v) && (s.motionBlurPxRatio = 1), i && (A = i), E *= o, A.x *= o, A.y *= o;
      var F = s.getCachedZSortedEles();
      function G(Ie, Re, $e, ze, Be) {
        var _e = Ie.globalCompositeOperation;
        Ie.globalCompositeOperation = "destination-out", s.colorFillStyle(Ie, 255, 255, 255, s.motionBlurTransparency), Ie.fillRect(Re, $e, ze, Be), Ie.globalCompositeOperation = _e;
      }
      function M(Ie, Re) {
        var $e, ze, Be, _e;
        !s.clearingMotionBlur && (Ie === l.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] || Ie === l.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG]) ? ($e = {
          x: I.x * d,
          y: I.y * d
        }, ze = b * d, Be = s.canvasWidth * d, _e = s.canvasHeight * d) : ($e = A, ze = E, Be = s.canvasWidth, _e = s.canvasHeight), Ie.setTransform(1, 0, 0, 1, 0, 0), Re === "motionBlur" ? G(Ie, 0, 0, Be, _e) : !e && (Re === void 0 || Re) && Ie.clearRect(0, 0, Be, _e), r || (Ie.translate($e.x, $e.y), Ie.scale(ze, ze)), i && Ie.translate(i.x, i.y), n && Ie.scale(n, n);
      }
      if (h || (s.textureDrawLastFrame = !1), h) {
        if (s.textureDrawLastFrame = !0, !s.textureCache) {
          s.textureCache = {}, s.textureCache.bb = u.mutableElements().boundingBox(), s.textureCache.texture = s.data.bufferCanvases[s.TEXTURE_BUFFER];
          var X = s.data.bufferContexts[s.TEXTURE_BUFFER];
          X.setTransform(1, 0, 0, 1, 0, 0), X.clearRect(0, 0, s.canvasWidth * s.textureMult, s.canvasHeight * s.textureMult), s.render({
            forcedContext: X,
            drawOnlyNodeLayer: !0,
            forcedPxRatio: o * s.textureMult
          });
          var x = s.textureCache.viewport = {
            zoom: u.zoom(),
            pan: u.pan(),
            width: s.canvasWidth,
            height: s.canvasHeight
          };
          x.mpan = {
            x: (0 - x.pan.x) / x.zoom,
            y: (0 - x.pan.y) / x.zoom
          };
        }
        f[s.DRAG] = !1, f[s.NODE] = !1;
        var B = l.contexts[s.NODE], re = s.textureCache.texture, x = s.textureCache.viewport;
        B.setTransform(1, 0, 0, 1, 0, 0), c ? G(B, 0, 0, x.width, x.height) : B.clearRect(0, 0, x.width, x.height);
        var K = m.core("outside-texture-bg-color").value, q = m.core("outside-texture-bg-opacity").value;
        s.colorFillStyle(B, K[0], K[1], K[2], q), B.fillRect(0, 0, x.width, x.height);
        var b = u.zoom();
        M(B, !1), B.clearRect(x.mpan.x, x.mpan.y, x.width / x.zoom / o, x.height / x.zoom / o), B.drawImage(re, x.mpan.x, x.mpan.y, x.width / x.zoom / o, x.height / x.zoom / o);
      } else
        s.textureOnViewport && !e && (s.textureCache = null);
      var ae = u.extent(), ue = s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming || s.hoverData.draggingEles || s.cy.animated(), be = s.hideEdgesOnViewport && ue, ie = [];
      if (ie[s.NODE] = !f[s.NODE] && c && !s.clearedForMotionBlur[s.NODE] || s.clearingMotionBlur, ie[s.NODE] && (s.clearedForMotionBlur[s.NODE] = !0), ie[s.DRAG] = !f[s.DRAG] && c && !s.clearedForMotionBlur[s.DRAG] || s.clearingMotionBlur, ie[s.DRAG] && (s.clearedForMotionBlur[s.DRAG] = !0), f[s.NODE] || r || a || ie[s.NODE]) {
        var ge = c && !ie[s.NODE] && d !== 1, B = e || (ge ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] : l.contexts[s.NODE]), we = c && !ge ? "motionBlur" : void 0;
        M(B, we), be ? s.drawCachedNodes(B, F.nondrag, o, ae) : s.drawLayeredElements(B, F.nondrag, o, ae), s.debug && s.drawDebugPoints(B, F.nondrag), !r && !c && (f[s.NODE] = !1);
      }
      if (!a && (f[s.DRAG] || r || ie[s.DRAG])) {
        var ge = c && !ie[s.DRAG] && d !== 1, B = e || (ge ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG] : l.contexts[s.DRAG]);
        M(B, c && !ge ? "motionBlur" : void 0), be ? s.drawCachedNodes(B, F.drag, o, ae) : s.drawCachedElements(B, F.drag, o, ae), s.debug && s.drawDebugPoints(B, F.drag), !r && !c && (f[s.DRAG] = !1);
      }
      if (s.showFps || !a && f[s.SELECT_BOX] && !r) {
        var B = e || l.contexts[s.SELECT_BOX];
        if (M(B), s.selection[4] == 1 && (s.hoverData.selecting || s.touchData.selecting)) {
          var b = s.cy.zoom(), De = m.core("selection-box-border-width").value / b;
          B.lineWidth = De, B.fillStyle = "rgba(" + m.core("selection-box-color").value[0] + "," + m.core("selection-box-color").value[1] + "," + m.core("selection-box-color").value[2] + "," + m.core("selection-box-opacity").value + ")", B.fillRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]), De > 0 && (B.strokeStyle = "rgba(" + m.core("selection-box-border-color").value[0] + "," + m.core("selection-box-border-color").value[1] + "," + m.core("selection-box-border-color").value[2] + "," + m.core("selection-box-opacity").value + ")", B.strokeRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]));
        }
        if (l.bgActivePosistion && !s.hoverData.selecting) {
          var b = s.cy.zoom(), xe = l.bgActivePosistion;
          B.fillStyle = "rgba(" + m.core("active-bg-color").value[0] + "," + m.core("active-bg-color").value[1] + "," + m.core("active-bg-color").value[2] + "," + m.core("active-bg-opacity").value + ")", B.beginPath(), B.arc(xe.x, xe.y, m.core("active-bg-size").pfValue / b, 0, 2 * Math.PI), B.fill();
        }
        var Le = s.lastRedrawTime;
        if (s.showFps && Le) {
          Le = Math.round(Le);
          var se = Math.round(1e3 / Le);
          B.setTransform(1, 0, 0, 1, 0, 0), B.fillStyle = "rgba(255, 0, 0, 0.75)", B.strokeStyle = "rgba(255, 0, 0, 0.75)", B.lineWidth = 1, B.fillText("1 frame = " + Le + " ms = " + se + " fps", 0, 20);
          var Te = 60;
          B.strokeRect(0, 30, 250, 20), B.fillRect(0, 30, 250 * Math.min(se / Te, 1), 20);
        }
        r || (f[s.SELECT_BOX] = !1);
      }
      if (c && d !== 1) {
        var Ae = l.contexts[s.NODE], Se = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_NODE], Ne = l.contexts[s.DRAG], Fe = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_DRAG], Xe = function(Re, $e, ze) {
          Re.setTransform(1, 0, 0, 1, 0, 0), ze || !g ? Re.clearRect(0, 0, s.canvasWidth, s.canvasHeight) : G(Re, 0, 0, s.canvasWidth, s.canvasHeight);
          var Be = d;
          Re.drawImage(
            $e,
            // img
            0,
            0,
            // sx, sy
            s.canvasWidth * Be,
            s.canvasHeight * Be,
            // sw, sh
            0,
            0,
            // x, y
            s.canvasWidth,
            s.canvasHeight
            // w, h
          );
        };
        (f[s.NODE] || ie[s.NODE]) && (Xe(Ae, Se, ie[s.NODE]), f[s.NODE] = !1), (f[s.DRAG] || ie[s.DRAG]) && (Xe(Ne, Fe, ie[s.DRAG]), f[s.DRAG] = !1);
      }
      s.prevViewport = x, s.clearingMotionBlur && (s.clearingMotionBlur = !1, s.motionBlurCleared = !0, s.motionBlur = !0), c && (s.motionBlurTimeout = setTimeout(function() {
        s.motionBlurTimeout = null, s.clearedForMotionBlur[s.NODE] = !1, s.clearedForMotionBlur[s.DRAG] = !1, s.motionBlur = !1, s.clearingMotionBlur = !h, s.mbFrames = 0, f[s.NODE] = !0, f[s.DRAG] = !0, s.redraw();
      }, np)), e || u.emit("render");
    };
    var Ir = {};
    Ir.drawPolygonPath = function(t, e, r, a, n, i) {
      var s = a / 2, o = n / 2;
      t.beginPath && t.beginPath(), t.moveTo(e + s * i[0], r + o * i[1]);
      for (var u = 1; u < i.length / 2; u++)
        t.lineTo(e + s * i[u * 2], r + o * i[u * 2 + 1]);
      t.closePath();
    }, Ir.drawRoundPolygonPath = function(t, e, r, a, n, i) {
      var s = a / 2, o = n / 2, u = gi(a, n);
      t.beginPath && t.beginPath();
      for (var l = 0; l < i.length / 4; l++) {
        var f = void 0, h = void 0;
        l === 0 ? f = i.length - 2 : f = l * 4 - 2, h = l * 4 + 2;
        var c = e + s * i[l * 4], d = r + o * i[l * 4 + 1], v = -i[f] * i[h] - i[f + 1] * i[h + 1], y = u / Math.tan(Math.acos(v) / 2), p = c - y * i[f], g = d - y * i[f + 1], m = c + y * i[h], b = d + y * i[h + 1];
        l === 0 ? t.moveTo(p, g) : t.lineTo(p, g), t.arcTo(c, d, m, b, u);
      }
      t.closePath();
    }, Ir.drawRoundRectanglePath = function(t, e, r, a, n) {
      var i = a / 2, s = n / 2, o = Ga(a, n);
      t.beginPath && t.beginPath(), t.moveTo(e, r - s), t.arcTo(e + i, r - s, e + i, r, o), t.arcTo(e + i, r + s, e, r + s, o), t.arcTo(e - i, r + s, e - i, r, o), t.arcTo(e - i, r - s, e, r - s, o), t.lineTo(e, r - s), t.closePath();
    }, Ir.drawBottomRoundRectanglePath = function(t, e, r, a, n) {
      var i = a / 2, s = n / 2, o = Ga(a, n);
      t.beginPath && t.beginPath(), t.moveTo(e, r - s), t.lineTo(e + i, r - s), t.lineTo(e + i, r), t.arcTo(e + i, r + s, e, r + s, o), t.arcTo(e - i, r + s, e - i, r, o), t.lineTo(e - i, r - s), t.lineTo(e, r - s), t.closePath();
    }, Ir.drawCutRectanglePath = function(t, e, r, a, n) {
      var i = a / 2, s = n / 2, o = As();
      t.beginPath && t.beginPath(), t.moveTo(e - i + o, r - s), t.lineTo(e + i - o, r - s), t.lineTo(e + i, r - s + o), t.lineTo(e + i, r + s - o), t.lineTo(e + i - o, r + s), t.lineTo(e - i + o, r + s), t.lineTo(e - i, r + s - o), t.lineTo(e - i, r - s + o), t.closePath();
    }, Ir.drawBarrelPath = function(t, e, r, a, n) {
      var i = a / 2, s = n / 2, o = e - i, u = e + i, l = r - s, f = r + s, h = pi(a, n), c = h.widthOffset, d = h.heightOffset, v = h.ctrlPtOffsetPct * c;
      t.beginPath && t.beginPath(), t.moveTo(o, l + d), t.lineTo(o, f - d), t.quadraticCurveTo(o + v, f, o + c, f), t.lineTo(u - c, f), t.quadraticCurveTo(u - v, f, u, f - d), t.lineTo(u, l + d), t.quadraticCurveTo(u - v, l, u - c, l), t.lineTo(o + c, l), t.quadraticCurveTo(o + v, l, o, l + d), t.closePath();
    };
    for (var Ll = Math.sin(0), Sl = Math.cos(0), Xi = {}, qi = {}, Al = Math.PI / 40, xa = 0 * Math.PI; xa < 2 * Math.PI; xa += Al)
      Xi[xa] = Math.sin(xa), qi[xa] = Math.cos(xa);
    Ir.drawEllipsePath = function(t, e, r, a, n) {
      if (t.beginPath && t.beginPath(), t.ellipse)
        t.ellipse(e, r, a / 2, n / 2, 0, 0, 2 * Math.PI);
      else
        for (var i, s, o = a / 2, u = n / 2, l = 0 * Math.PI; l < 2 * Math.PI; l += Al)
          i = e - o * Xi[l] * Ll + o * qi[l] * Sl, s = r + u * qi[l] * Ll + u * Xi[l] * Sl, l === 0 ? t.moveTo(i, s) : t.lineTo(i, s);
      t.closePath();
    };
    var rn = {};
    rn.createBuffer = function(t, e) {
      var r = document.createElement("canvas");
      return r.width = t, r.height = e, [r, r.getContext("2d")];
    }, rn.bufferCanvasImage = function(t) {
      var e = this.cy, r = e.mutableElements(), a = r.boundingBox(), n = this.findContainerClientCoords(), i = t.full ? Math.ceil(a.w) : n[2], s = t.full ? Math.ceil(a.h) : n[3], o = R(t.maxWidth) || R(t.maxHeight), u = this.getPixelRatio(), l = 1;
      if (t.scale !== void 0)
        i *= t.scale, s *= t.scale, l = t.scale;
      else if (o) {
        var f = 1 / 0, h = 1 / 0;
        R(t.maxWidth) && (f = l * t.maxWidth / i), R(t.maxHeight) && (h = l * t.maxHeight / s), l = Math.min(f, h), i *= l, s *= l;
      }
      o || (i *= u, s *= u, l *= u);
      var c = document.createElement("canvas");
      c.width = i, c.height = s, c.style.width = i + "px", c.style.height = s + "px";
      var d = c.getContext("2d");
      if (i > 0 && s > 0) {
        d.clearRect(0, 0, i, s), d.globalCompositeOperation = "source-over";
        var v = this.getCachedZSortedEles();
        if (t.full)
          d.translate(-a.x1 * l, -a.y1 * l), d.scale(l, l), this.drawElements(d, v), d.scale(1 / l, 1 / l), d.translate(a.x1 * l, a.y1 * l);
        else {
          var y = e.pan(), p = {
            x: y.x * l,
            y: y.y * l
          };
          l *= e.zoom(), d.translate(p.x, p.y), d.scale(l, l), this.drawElements(d, v), d.scale(1 / l, 1 / l), d.translate(-p.x, -p.y);
        }
        t.bg && (d.globalCompositeOperation = "destination-over", d.fillStyle = t.bg, d.rect(0, 0, i, s), d.fill());
      }
      return c;
    };
    function ip(t, e) {
      for (var r = atob(t), a = new ArrayBuffer(r.length), n = new Uint8Array(a), i = 0; i < r.length; i++)
        n[i] = r.charCodeAt(i);
      return new Blob([a], {
        type: e
      });
    }
    function Ol(t) {
      var e = t.indexOf(",");
      return t.substr(e + 1);
    }
    function Nl(t, e, r) {
      var a = function() {
        return e.toDataURL(r, t.quality);
      };
      switch (t.output) {
        case "blob-promise":
          return new sa(function(n, i) {
            try {
              e.toBlob(function(s) {
                s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
              }, r, t.quality);
            } catch (s) {
              i(s);
            }
          });
        case "blob":
          return ip(Ol(a()), r);
        case "base64":
          return Ol(a());
        case "base64uri":
        default:
          return a();
      }
    }
    rn.png = function(t) {
      return Nl(t, this.bufferCanvasImage(t), "image/png");
    }, rn.jpg = function(t) {
      return Nl(t, this.bufferCanvasImage(t), "image/jpeg");
    };
    var Ml = {};
    Ml.nodeShapeImpl = function(t, e, r, a, n, i, s) {
      switch (t) {
        case "ellipse":
          return this.drawEllipsePath(e, r, a, n, i);
        case "polygon":
          return this.drawPolygonPath(e, r, a, n, i, s);
        case "round-polygon":
          return this.drawRoundPolygonPath(e, r, a, n, i, s);
        case "roundrectangle":
        case "round-rectangle":
          return this.drawRoundRectanglePath(e, r, a, n, i);
        case "cutrectangle":
        case "cut-rectangle":
          return this.drawCutRectanglePath(e, r, a, n, i);
        case "bottomroundrectangle":
        case "bottom-round-rectangle":
          return this.drawBottomRoundRectanglePath(e, r, a, n, i);
        case "barrel":
          return this.drawBarrelPath(e, r, a, n, i);
      }
    };
    var sp = Il, ut = Il.prototype;
    ut.CANVAS_LAYERS = 3, ut.SELECT_BOX = 0, ut.DRAG = 1, ut.NODE = 2, ut.BUFFER_COUNT = 3, ut.TEXTURE_BUFFER = 0, ut.MOTIONBLUR_BUFFER_NODE = 1, ut.MOTIONBLUR_BUFFER_DRAG = 2;
    function Il(t) {
      var e = this;
      e.data = {
        canvases: new Array(ut.CANVAS_LAYERS),
        contexts: new Array(ut.CANVAS_LAYERS),
        canvasNeedsRedraw: new Array(ut.CANVAS_LAYERS),
        bufferCanvases: new Array(ut.BUFFER_COUNT),
        bufferContexts: new Array(ut.CANVAS_LAYERS)
      };
      var r = "-webkit-tap-highlight-color", a = "rgba(0,0,0,0)";
      e.data.canvasContainer = document.createElement("div");
      var n = e.data.canvasContainer.style;
      e.data.canvasContainer.style[r] = a, n.position = "relative", n.zIndex = "0", n.overflow = "hidden";
      var i = t.cy.container();
      i.appendChild(e.data.canvasContainer), i.style[r] = a;
      var s = {
        "-webkit-user-select": "none",
        "-moz-user-select": "-moz-none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        "outline-style": "none"
      };
      ht() && (s["-ms-touch-action"] = "none", s["touch-action"] = "none");
      for (var o = 0; o < ut.CANVAS_LAYERS; o++) {
        var u = e.data.canvases[o] = document.createElement("canvas");
        e.data.contexts[o] = u.getContext("2d"), Object.keys(s).forEach(function(Le) {
          u.style[Le] = s[Le];
        }), u.style.position = "absolute", u.setAttribute("data-id", "layer" + o), u.style.zIndex = String(ut.CANVAS_LAYERS - o), e.data.canvasContainer.appendChild(u), e.data.canvasNeedsRedraw[o] = !1;
      }
      e.data.topCanvas = e.data.canvases[0], e.data.canvases[ut.NODE].setAttribute("data-id", "layer" + ut.NODE + "-node"), e.data.canvases[ut.SELECT_BOX].setAttribute("data-id", "layer" + ut.SELECT_BOX + "-selectbox"), e.data.canvases[ut.DRAG].setAttribute("data-id", "layer" + ut.DRAG + "-drag");
      for (var o = 0; o < ut.BUFFER_COUNT; o++)
        e.data.bufferCanvases[o] = document.createElement("canvas"), e.data.bufferContexts[o] = e.data.bufferCanvases[o].getContext("2d"), e.data.bufferCanvases[o].style.position = "absolute", e.data.bufferCanvases[o].setAttribute("data-id", "buffer" + o), e.data.bufferCanvases[o].style.zIndex = String(-o - 1), e.data.bufferCanvases[o].style.visibility = "hidden";
      e.pathsEnabled = !0;
      var l = Yt(), f = function(se) {
        return {
          x: (se.x1 + se.x2) / 2,
          y: (se.y1 + se.y2) / 2
        };
      }, h = function(se) {
        return {
          x: -se.w / 2,
          y: -se.h / 2
        };
      }, c = function(se) {
        var Te = se[0]._private, Ae = Te.oldBackgroundTimestamp === Te.backgroundTimestamp;
        return !Ae;
      }, d = function(se) {
        return se[0]._private.nodeKey;
      }, v = function(se) {
        return se[0]._private.labelStyleKey;
      }, y = function(se) {
        return se[0]._private.sourceLabelStyleKey;
      }, p = function(se) {
        return se[0]._private.targetLabelStyleKey;
      }, g = function(se, Te, Ae, Se, Ne) {
        return e.drawElement(se, Te, Ae, !1, !1, Ne);
      }, m = function(se, Te, Ae, Se, Ne) {
        return e.drawElementText(se, Te, Ae, Se, "main", Ne);
      }, b = function(se, Te, Ae, Se, Ne) {
        return e.drawElementText(se, Te, Ae, Se, "source", Ne);
      }, E = function(se, Te, Ae, Se, Ne) {
        return e.drawElementText(se, Te, Ae, Se, "target", Ne);
      }, I = function(se) {
        return se.boundingBox(), se[0]._private.bodyBounds;
      }, A = function(se) {
        return se.boundingBox(), se[0]._private.labelBounds.main || l;
      }, x = function(se) {
        return se.boundingBox(), se[0]._private.labelBounds.source || l;
      }, k = function(se) {
        return se.boundingBox(), se[0]._private.labelBounds.target || l;
      }, C = function(se, Te) {
        return Te;
      }, F = function(se) {
        return f(I(se));
      }, G = function(se, Te, Ae) {
        var Se = se ? se + "-" : "";
        return {
          x: Te.x + Ae.pstyle(Se + "text-margin-x").pfValue,
          y: Te.y + Ae.pstyle(Se + "text-margin-y").pfValue
        };
      }, M = function(se, Te, Ae) {
        var Se = se[0]._private.rscratch;
        return {
          x: Se[Te],
          y: Se[Ae]
        };
      }, X = function(se) {
        return G("", M(se, "labelX", "labelY"), se);
      }, B = function(se) {
        return G("source", M(se, "sourceLabelX", "sourceLabelY"), se);
      }, re = function(se) {
        return G("target", M(se, "targetLabelX", "targetLabelY"), se);
      }, K = function(se) {
        return h(I(se));
      }, q = function(se) {
        return h(x(se));
      }, ae = function(se) {
        return h(k(se));
      }, ue = function(se) {
        var Te = A(se), Ae = h(A(se));
        if (se.isNode()) {
          switch (se.pstyle("text-halign").value) {
            case "left":
              Ae.x = -Te.w;
              break;
            case "right":
              Ae.x = 0;
              break;
          }
          switch (se.pstyle("text-valign").value) {
            case "top":
              Ae.y = -Te.h;
              break;
            case "bottom":
              Ae.y = 0;
              break;
          }
        }
        return Ae;
      }, be = e.data.eleTxrCache = new en(e, {
        getKey: d,
        doesEleInvalidateKey: c,
        drawElement: g,
        getBoundingBox: I,
        getRotationPoint: F,
        getRotationOffset: K,
        allowEdgeTxrCaching: !1,
        allowParentTxrCaching: !1
      }), ie = e.data.lblTxrCache = new en(e, {
        getKey: v,
        drawElement: m,
        getBoundingBox: A,
        getRotationPoint: X,
        getRotationOffset: ue,
        isVisible: C
      }), ge = e.data.slbTxrCache = new en(e, {
        getKey: y,
        drawElement: b,
        getBoundingBox: x,
        getRotationPoint: B,
        getRotationOffset: q,
        isVisible: C
      }), we = e.data.tlbTxrCache = new en(e, {
        getKey: p,
        drawElement: E,
        getBoundingBox: k,
        getRotationPoint: re,
        getRotationOffset: ae,
        isVisible: C
      }), De = e.data.lyrTxrCache = new bl(e);
      e.onUpdateEleCalcs(function(se, Te) {
        be.invalidateElements(Te), ie.invalidateElements(Te), ge.invalidateElements(Te), we.invalidateElements(Te), De.invalidateElements(Te);
        for (var Ae = 0; Ae < Te.length; Ae++) {
          var Se = Te[Ae]._private;
          Se.oldBackgroundTimestamp = Se.backgroundTimestamp;
        }
      });
      var xe = function(se) {
        for (var Te = 0; Te < se.length; Te++)
          De.enqueueElementRefinement(se[Te].ele);
      };
      be.onDequeue(xe), ie.onDequeue(xe), ge.onDequeue(xe), we.onDequeue(xe);
    }
    ut.redrawHint = function(t, e) {
      var r = this;
      switch (t) {
        case "eles":
          r.data.canvasNeedsRedraw[ut.NODE] = e;
          break;
        case "drag":
          r.data.canvasNeedsRedraw[ut.DRAG] = e;
          break;
        case "select":
          r.data.canvasNeedsRedraw[ut.SELECT_BOX] = e;
          break;
      }
    };
    var op = typeof Path2D < "u";
    ut.path2dEnabled = function(t) {
      if (t === void 0)
        return this.pathsEnabled;
      this.pathsEnabled = !!t;
    }, ut.usePaths = function() {
      return op && this.pathsEnabled;
    }, ut.setImgSmoothing = function(t, e) {
      t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e);
    }, ut.getImgSmoothing = function(t) {
      return t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled : t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled;
    }, ut.makeOffscreenCanvas = function(t, e) {
      var r;
      return (typeof OffscreenCanvas > "u" ? "undefined" : ee(OffscreenCanvas)) !== "undefined" ? r = new OffscreenCanvas(t, e) : (r = document.createElement("canvas"), r.width = t, r.height = e), r;
    }, [wl, cr, br, Yi, Ur, wa, Kt, Ir, rn, Ml].forEach(function(t) {
      He(ut, t);
    });
    var lp = [{
      name: "null",
      impl: al
    }, {
      name: "base",
      impl: gl
    }, {
      name: "canvas",
      impl: sp
    }], up = [{
      type: "layout",
      extensions: yg
    }, {
      type: "renderer",
      extensions: lp
    }], Rl = {}, kl = {};
    function Pl(t, e, r) {
      var a = r, n = function(k) {
        ct("Can not register `" + e + "` for `" + t + "` since `" + k + "` already exists in the prototype and can not be overridden");
      };
      if (t === "core") {
        if (Qa.prototype[e])
          return n(e);
        Qa.prototype[e] = r;
      } else if (t === "collection") {
        if (Nt.prototype[e])
          return n(e);
        Nt.prototype[e] = r;
      } else if (t === "layout") {
        for (var i = function(k) {
          this.options = k, r.call(this, k), S(this._private) || (this._private = {}), this._private.cy = k.cy, this._private.listeners = [], this.createEmitter();
        }, s = i.prototype = Object.create(r.prototype), o = [], u = 0; u < o.length; u++) {
          var l = o[u];
          s[l] = s[l] || function() {
            return this;
          };
        }
        s.start && !s.run ? s.run = function() {
          return this.start(), this;
        } : !s.start && s.run && (s.start = function() {
          return this.run(), this;
        });
        var f = r.prototype.stop;
        s.stop = function() {
          var x = this.options;
          if (x && x.animate) {
            var k = this.animations;
            if (k)
              for (var C = 0; C < k.length; C++)
                k[C].stop();
          }
          return f ? f.call(this) : this.emit("layoutstop"), this;
        }, s.destroy || (s.destroy = function() {
          return this;
        }), s.cy = function() {
          return this._private.cy;
        };
        var h = function(k) {
          return k._private.cy;
        }, c = {
          addEventFields: function(k, C) {
            C.layout = k, C.cy = h(k), C.target = k;
          },
          bubble: function() {
            return !0;
          },
          parent: function(k) {
            return h(k);
          }
        };
        He(s, {
          createEmitter: function() {
            return this._private.emitter = new kn(c, this), this;
          },
          emitter: function() {
            return this._private.emitter;
          },
          on: function(k, C) {
            return this.emitter().on(k, C), this;
          },
          one: function(k, C) {
            return this.emitter().one(k, C), this;
          },
          once: function(k, C) {
            return this.emitter().one(k, C), this;
          },
          removeListener: function(k, C) {
            return this.emitter().removeListener(k, C), this;
          },
          removeAllListeners: function() {
            return this.emitter().removeAllListeners(), this;
          },
          emit: function(k, C) {
            return this.emitter().emit(k, C), this;
          }
        }), vt.eventAliasesOn(s), a = i;
      } else if (t === "renderer" && e !== "null" && e !== "base") {
        var d = Bl("renderer", "base"), v = d.prototype, y = r, p = r.prototype, g = function() {
          d.apply(this, arguments), y.apply(this, arguments);
        }, m = g.prototype;
        for (var b in v) {
          var E = v[b], I = p[b] != null;
          if (I)
            return n(b);
          m[b] = E;
        }
        for (var A in p)
          m[A] = p[A];
        v.clientFunctions.forEach(function(x) {
          m[x] = m[x] || function() {
            Tt("Renderer does not implement `renderer." + x + "()` on its prototype");
          };
        }), a = g;
      } else if (t === "__proto__" || t === "constructor" || t === "prototype")
        return Tt(t + " is an illegal type to be registered, possibly lead to prototype pollutions");
      return as({
        map: Rl,
        keys: [t, e],
        value: a
      });
    }
    function Bl(t, e) {
      return ns({
        map: Rl,
        keys: [t, e]
      });
    }
    function fp(t, e, r, a, n) {
      return as({
        map: kl,
        keys: [t, e, r, a],
        value: n
      });
    }
    function hp(t, e, r, a) {
      return ns({
        map: kl,
        keys: [t, e, r, a]
      });
    }
    var Wi = function() {
      if (arguments.length === 2)
        return Bl.apply(null, arguments);
      if (arguments.length === 3)
        return Pl.apply(null, arguments);
      if (arguments.length === 4)
        return hp.apply(null, arguments);
      if (arguments.length === 5)
        return fp.apply(null, arguments);
      Tt("Invalid extension access syntax");
    };
    Qa.prototype.extension = Wi, up.forEach(function(t) {
      t.extensions.forEach(function(e) {
        Pl(t.type, e.name, e.impl);
      });
    });
    var Fl = function t() {
      if (!(this instanceof t))
        return new t();
      this.length = 0;
    }, Yr = Fl.prototype;
    Yr.instanceString = function() {
      return "stylesheet";
    }, Yr.selector = function(t) {
      var e = this.length++;
      return this[e] = {
        selector: t,
        properties: []
      }, this;
    }, Yr.css = function(t, e) {
      var r = this.length - 1;
      if (j(t))
        this[r].properties.push({
          name: t,
          value: e
        });
      else if (S(t))
        for (var a = t, n = Object.keys(a), i = 0; i < n.length; i++) {
          var s = n[i], o = a[s];
          if (o != null) {
            var u = Gt.properties[s] || Gt.properties[yt(s)];
            if (u != null) {
              var l = u.name, f = o;
              this[r].properties.push({
                name: l,
                value: f
              });
            }
          }
        }
      return this;
    }, Yr.style = Yr.css, Yr.generateStyle = function(t) {
      var e = new Gt(t);
      return this.appendToStyle(e);
    }, Yr.appendToStyle = function(t) {
      for (var e = 0; e < this.length; e++) {
        var r = this[e], a = r.selector, n = r.properties;
        t.selector(a);
        for (var i = 0; i < n.length; i++) {
          var s = n[i];
          t.css(s.name, s.value);
        }
      }
      return t;
    };
    var cp = "3.28.1", Hr = function(e) {
      if (e === void 0 && (e = {}), S(e))
        return new Qa(e);
      if (j(e))
        return Wi.apply(Wi, arguments);
    };
    return Hr.use = function(t) {
      var e = Array.prototype.slice.call(arguments, 1);
      return e.unshift(Hr), t.apply(null, e), this;
    }, Hr.warnings = function(t) {
      return ys(t);
    }, Hr.version = cp, Hr.stylesheet = Hr.Stylesheet = Fl, Hr;
  });
})(Zl);
var Zp = Zl.exports;
const Ql = /* @__PURE__ */ Yl(Zp);
var Jl = { exports: {} }, Qi = { exports: {} }, Ji = { exports: {} }, _l;
function Qp() {
  return _l || (_l = 1, function(me, he) {
    (function(de, H) {
      me.exports = H();
    })(Da, function() {
      return (
        /******/
        function(ee) {
          var de = {};
          function H(N) {
            if (de[N])
              return de[N].exports;
            var T = de[N] = {
              /******/
              i: N,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return ee[N].call(T.exports, T, T.exports, H), T.l = !0, T.exports;
          }
          return H.m = ee, H.c = de, H.i = function(N) {
            return N;
          }, H.d = function(N, T, w) {
            H.o(N, T) || Object.defineProperty(N, T, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: w
              /******/
            });
          }, H.n = function(N) {
            var T = N && N.__esModule ? (
              /******/
              function() {
                return N.default;
              }
            ) : (
              /******/
              function() {
                return N;
              }
            );
            return H.d(T, "a", T), T;
          }, H.o = function(N, T) {
            return Object.prototype.hasOwnProperty.call(N, T);
          }, H.p = "", H(H.s = 26);
        }([
          /* 0 */
          /***/
          function(ee, de, H) {
            function N() {
            }
            N.QUALITY = 1, N.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, N.DEFAULT_INCREMENTAL = !1, N.DEFAULT_ANIMATION_ON_LAYOUT = !0, N.DEFAULT_ANIMATION_DURING_LAYOUT = !1, N.DEFAULT_ANIMATION_PERIOD = 50, N.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, N.DEFAULT_GRAPH_MARGIN = 15, N.NODE_DIMENSIONS_INCLUDE_LABELS = !1, N.SIMPLE_NODE_SIZE = 40, N.SIMPLE_NODE_HALF_SIZE = N.SIMPLE_NODE_SIZE / 2, N.EMPTY_COMPOUND_NODE_SIZE = 40, N.MIN_EDGE_LENGTH = 1, N.WORLD_BOUNDARY = 1e6, N.INITIAL_WORLD_BOUNDARY = N.WORLD_BOUNDARY / 1e3, N.WORLD_CENTER_X = 1200, N.WORLD_CENTER_Y = 900, ee.exports = N;
          },
          /* 1 */
          /***/
          function(ee, de, H) {
            var N = H(2), T = H(8), w = H(9);
            function L(U, P, Z) {
              N.call(this, Z), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = Z, this.bendpoints = [], this.source = U, this.target = P;
            }
            L.prototype = Object.create(N.prototype);
            for (var z in N)
              L[z] = N[z];
            L.prototype.getSource = function() {
              return this.source;
            }, L.prototype.getTarget = function() {
              return this.target;
            }, L.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, L.prototype.getLength = function() {
              return this.length;
            }, L.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, L.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, L.prototype.getLca = function() {
              return this.lca;
            }, L.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, L.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, L.prototype.getOtherEnd = function(U) {
              if (this.source === U)
                return this.target;
              if (this.target === U)
                return this.source;
              throw "Node is not incident with this edge";
            }, L.prototype.getOtherEndInGraph = function(U, P) {
              for (var Z = this.getOtherEnd(U), D = P.getGraphManager().getRoot(); ; ) {
                if (Z.getOwner() == P)
                  return Z;
                if (Z.getOwner() == D)
                  break;
                Z = Z.getOwner().getParent();
              }
              return null;
            }, L.prototype.updateLength = function() {
              var U = new Array(4);
              this.isOverlapingSourceAndTarget = T.getIntersection(this.target.getRect(), this.source.getRect(), U), this.isOverlapingSourceAndTarget || (this.lengthX = U[0] - U[2], this.lengthY = U[1] - U[3], Math.abs(this.lengthX) < 1 && (this.lengthX = w.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = w.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, L.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = w.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = w.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, ee.exports = L;
          },
          /* 2 */
          /***/
          function(ee, de, H) {
            function N(T) {
              this.vGraphObject = T;
            }
            ee.exports = N;
          },
          /* 3 */
          /***/
          function(ee, de, H) {
            var N = H(2), T = H(10), w = H(13), L = H(0), z = H(16), U = H(4);
            function P(D, $, _, Q) {
              _ == null && Q == null && (Q = $), N.call(this, Q), D.graphManager != null && (D = D.graphManager), this.estimatedSize = T.MIN_VALUE, this.inclusionTreeDepth = T.MAX_VALUE, this.vGraphObject = Q, this.edges = [], this.graphManager = D, _ != null && $ != null ? this.rect = new w($.x, $.y, _.width, _.height) : this.rect = new w();
            }
            P.prototype = Object.create(N.prototype);
            for (var Z in N)
              P[Z] = N[Z];
            P.prototype.getEdges = function() {
              return this.edges;
            }, P.prototype.getChild = function() {
              return this.child;
            }, P.prototype.getOwner = function() {
              return this.owner;
            }, P.prototype.getWidth = function() {
              return this.rect.width;
            }, P.prototype.setWidth = function(D) {
              this.rect.width = D;
            }, P.prototype.getHeight = function() {
              return this.rect.height;
            }, P.prototype.setHeight = function(D) {
              this.rect.height = D;
            }, P.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, P.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, P.prototype.getCenter = function() {
              return new U(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, P.prototype.getLocation = function() {
              return new U(this.rect.x, this.rect.y);
            }, P.prototype.getRect = function() {
              return this.rect;
            }, P.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, P.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, P.prototype.setRect = function(D, $) {
              this.rect.x = D.x, this.rect.y = D.y, this.rect.width = $.width, this.rect.height = $.height;
            }, P.prototype.setCenter = function(D, $) {
              this.rect.x = D - this.rect.width / 2, this.rect.y = $ - this.rect.height / 2;
            }, P.prototype.setLocation = function(D, $) {
              this.rect.x = D, this.rect.y = $;
            }, P.prototype.moveBy = function(D, $) {
              this.rect.x += D, this.rect.y += $;
            }, P.prototype.getEdgeListToNode = function(D) {
              var $ = [], _ = this;
              return _.edges.forEach(function(Q) {
                if (Q.target == D) {
                  if (Q.source != _)
                    throw "Incorrect edge source!";
                  $.push(Q);
                }
              }), $;
            }, P.prototype.getEdgesBetween = function(D) {
              var $ = [], _ = this;
              return _.edges.forEach(function(Q) {
                if (!(Q.source == _ || Q.target == _))
                  throw "Incorrect edge source and/or target";
                (Q.target == D || Q.source == D) && $.push(Q);
              }), $;
            }, P.prototype.getNeighborsList = function() {
              var D = /* @__PURE__ */ new Set(), $ = this;
              return $.edges.forEach(function(_) {
                if (_.source == $)
                  D.add(_.target);
                else {
                  if (_.target != $)
                    throw "Incorrect incidency!";
                  D.add(_.source);
                }
              }), D;
            }, P.prototype.withChildren = function() {
              var D = /* @__PURE__ */ new Set(), $, _;
              if (D.add(this), this.child != null)
                for (var Q = this.child.getNodes(), ne = 0; ne < Q.length; ne++)
                  $ = Q[ne], _ = $.withChildren(), _.forEach(function(le) {
                    D.add(le);
                  });
              return D;
            }, P.prototype.getNoOfChildren = function() {
              var D = 0, $;
              if (this.child == null)
                D = 1;
              else
                for (var _ = this.child.getNodes(), Q = 0; Q < _.length; Q++)
                  $ = _[Q], D += $.getNoOfChildren();
              return D == 0 && (D = 1), D;
            }, P.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == T.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, P.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, P.prototype.scatter = function() {
              var D, $, _ = -L.INITIAL_WORLD_BOUNDARY, Q = L.INITIAL_WORLD_BOUNDARY;
              D = L.WORLD_CENTER_X + z.nextDouble() * (Q - _) + _;
              var ne = -L.INITIAL_WORLD_BOUNDARY, le = L.INITIAL_WORLD_BOUNDARY;
              $ = L.WORLD_CENTER_Y + z.nextDouble() * (le - ne) + ne, this.rect.x = D, this.rect.y = $;
            }, P.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var D = this.getChild();
                if (D.updateBounds(!0), this.rect.x = D.getLeft(), this.rect.y = D.getTop(), this.setWidth(D.getRight() - D.getLeft()), this.setHeight(D.getBottom() - D.getTop()), L.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var $ = D.getRight() - D.getLeft(), _ = D.getBottom() - D.getTop();
                  this.labelWidth > $ && (this.rect.x -= (this.labelWidth - $) / 2, this.setWidth(this.labelWidth)), this.labelHeight > _ && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - _) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - _), this.setHeight(this.labelHeight));
                }
              }
            }, P.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == T.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, P.prototype.transform = function(D) {
              var $ = this.rect.x;
              $ > L.WORLD_BOUNDARY ? $ = L.WORLD_BOUNDARY : $ < -L.WORLD_BOUNDARY && ($ = -L.WORLD_BOUNDARY);
              var _ = this.rect.y;
              _ > L.WORLD_BOUNDARY ? _ = L.WORLD_BOUNDARY : _ < -L.WORLD_BOUNDARY && (_ = -L.WORLD_BOUNDARY);
              var Q = new U($, _), ne = D.inverseTransformPoint(Q);
              this.setLocation(ne.x, ne.y);
            }, P.prototype.getLeft = function() {
              return this.rect.x;
            }, P.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, P.prototype.getTop = function() {
              return this.rect.y;
            }, P.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, P.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, ee.exports = P;
          },
          /* 4 */
          /***/
          function(ee, de, H) {
            function N(T, w) {
              T == null && w == null ? (this.x = 0, this.y = 0) : (this.x = T, this.y = w);
            }
            N.prototype.getX = function() {
              return this.x;
            }, N.prototype.getY = function() {
              return this.y;
            }, N.prototype.setX = function(T) {
              this.x = T;
            }, N.prototype.setY = function(T) {
              this.y = T;
            }, N.prototype.getDifference = function(T) {
              return new DimensionD(this.x - T.x, this.y - T.y);
            }, N.prototype.getCopy = function() {
              return new N(this.x, this.y);
            }, N.prototype.translate = function(T) {
              return this.x += T.width, this.y += T.height, this;
            }, ee.exports = N;
          },
          /* 5 */
          /***/
          function(ee, de, H) {
            var N = H(2), T = H(10), w = H(0), L = H(6), z = H(3), U = H(1), P = H(13), Z = H(12), D = H(11);
            function $(Q, ne, le) {
              N.call(this, le), this.estimatedSize = T.MIN_VALUE, this.margin = w.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = Q, ne != null && ne instanceof L ? this.graphManager = ne : ne != null && ne instanceof Layout && (this.graphManager = ne.graphManager);
            }
            $.prototype = Object.create(N.prototype);
            for (var _ in N)
              $[_] = N[_];
            $.prototype.getNodes = function() {
              return this.nodes;
            }, $.prototype.getEdges = function() {
              return this.edges;
            }, $.prototype.getGraphManager = function() {
              return this.graphManager;
            }, $.prototype.getParent = function() {
              return this.parent;
            }, $.prototype.getLeft = function() {
              return this.left;
            }, $.prototype.getRight = function() {
              return this.right;
            }, $.prototype.getTop = function() {
              return this.top;
            }, $.prototype.getBottom = function() {
              return this.bottom;
            }, $.prototype.isConnected = function() {
              return this.isConnected;
            }, $.prototype.add = function(Q, ne, le) {
              if (ne == null && le == null) {
                var J = Q;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(J) > -1)
                  throw "Node already in graph!";
                return J.owner = this, this.getNodes().push(J), J;
              } else {
                var j = Q;
                if (!(this.getNodes().indexOf(ne) > -1 && this.getNodes().indexOf(le) > -1))
                  throw "Source or target not in graph!";
                if (!(ne.owner == le.owner && ne.owner == this))
                  throw "Both owners must be this graph!";
                return ne.owner != le.owner ? null : (j.source = ne, j.target = le, j.isInterGraph = !1, this.getEdges().push(j), ne.edges.push(j), le != ne && le.edges.push(j), j);
              }
            }, $.prototype.remove = function(Q) {
              var ne = Q;
              if (Q instanceof z) {
                if (ne == null)
                  throw "Node is null!";
                if (!(ne.owner != null && ne.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var le = ne.edges.slice(), J, j = le.length, Y = 0; Y < j; Y++)
                  J = le[Y], J.isInterGraph ? this.graphManager.remove(J) : J.source.owner.remove(J);
                var te = this.nodes.indexOf(ne);
                if (te == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(te, 1);
              } else if (Q instanceof U) {
                var J = Q;
                if (J == null)
                  throw "Edge is null!";
                if (!(J.source != null && J.target != null))
                  throw "Source and/or target is null!";
                if (!(J.source.owner != null && J.target.owner != null && J.source.owner == this && J.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var S = J.source.edges.indexOf(J), V = J.target.edges.indexOf(J);
                if (!(S > -1 && V > -1))
                  throw "Source and/or target doesn't know this edge!";
                J.source.edges.splice(S, 1), J.target != J.source && J.target.edges.splice(V, 1);
                var te = J.source.owner.getEdges().indexOf(J);
                if (te == -1)
                  throw "Not in owner's edge list!";
                J.source.owner.getEdges().splice(te, 1);
              }
            }, $.prototype.updateLeftTop = function() {
              for (var Q = T.MAX_VALUE, ne = T.MAX_VALUE, le, J, j, Y = this.getNodes(), te = Y.length, S = 0; S < te; S++) {
                var V = Y[S];
                le = V.getTop(), J = V.getLeft(), Q > le && (Q = le), ne > J && (ne = J);
              }
              return Q == T.MAX_VALUE ? null : (Y[0].getParent().paddingLeft != null ? j = Y[0].getParent().paddingLeft : j = this.margin, this.left = ne - j, this.top = Q - j, new Z(this.left, this.top));
            }, $.prototype.updateBounds = function(Q) {
              for (var ne = T.MAX_VALUE, le = -T.MAX_VALUE, J = T.MAX_VALUE, j = -T.MAX_VALUE, Y, te, S, V, R, W = this.nodes, ce = W.length, pe = 0; pe < ce; pe++) {
                var Oe = W[pe];
                Q && Oe.child != null && Oe.updateBounds(), Y = Oe.getLeft(), te = Oe.getRight(), S = Oe.getTop(), V = Oe.getBottom(), ne > Y && (ne = Y), le < te && (le = te), J > S && (J = S), j < V && (j = V);
              }
              var Me = new P(ne, J, le - ne, j - J);
              ne == T.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), W[0].getParent().paddingLeft != null ? R = W[0].getParent().paddingLeft : R = this.margin, this.left = Me.x - R, this.right = Me.x + Me.width + R, this.top = Me.y - R, this.bottom = Me.y + Me.height + R;
            }, $.calculateBounds = function(Q) {
              for (var ne = T.MAX_VALUE, le = -T.MAX_VALUE, J = T.MAX_VALUE, j = -T.MAX_VALUE, Y, te, S, V, R = Q.length, W = 0; W < R; W++) {
                var ce = Q[W];
                Y = ce.getLeft(), te = ce.getRight(), S = ce.getTop(), V = ce.getBottom(), ne > Y && (ne = Y), le < te && (le = te), J > S && (J = S), j < V && (j = V);
              }
              var pe = new P(ne, J, le - ne, j - J);
              return pe;
            }, $.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, $.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == T.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, $.prototype.calcEstimatedSize = function() {
              for (var Q = 0, ne = this.nodes, le = ne.length, J = 0; J < le; J++) {
                var j = ne[J];
                Q += j.calcEstimatedSize();
              }
              return Q == 0 ? this.estimatedSize = w.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = Q / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, $.prototype.updateConnected = function() {
              var Q = this;
              if (this.nodes.length == 0) {
                this.isConnected = !0;
                return;
              }
              var ne = new D(), le = /* @__PURE__ */ new Set(), J = this.nodes[0], j, Y, te = J.withChildren();
              for (te.forEach(function(pe) {
                ne.push(pe), le.add(pe);
              }); ne.length !== 0; ) {
                J = ne.shift(), j = J.getEdges();
                for (var S = j.length, V = 0; V < S; V++) {
                  var R = j[V];
                  if (Y = R.getOtherEndInGraph(J, this), Y != null && !le.has(Y)) {
                    var W = Y.withChildren();
                    W.forEach(function(pe) {
                      ne.push(pe), le.add(pe);
                    });
                  }
                }
              }
              if (this.isConnected = !1, le.size >= this.nodes.length) {
                var ce = 0;
                le.forEach(function(pe) {
                  pe.owner == Q && ce++;
                }), ce == this.nodes.length && (this.isConnected = !0);
              }
            }, ee.exports = $;
          },
          /* 6 */
          /***/
          function(ee, de, H) {
            var N, T = H(1);
            function w(L) {
              N = H(5), this.layout = L, this.graphs = [], this.edges = [];
            }
            w.prototype.addRoot = function() {
              var L = this.layout.newGraph(), z = this.layout.newNode(null), U = this.add(L, z);
              return this.setRootGraph(U), this.rootGraph;
            }, w.prototype.add = function(L, z, U, P, Z) {
              if (U == null && P == null && Z == null) {
                if (L == null)
                  throw "Graph is null!";
                if (z == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(L) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(L), L.parent != null)
                  throw "Already has a parent!";
                if (z.child != null)
                  throw "Already has a child!";
                return L.parent = z, z.child = L, L;
              } else {
                Z = U, P = z, U = L;
                var D = P.getOwner(), $ = Z.getOwner();
                if (!(D != null && D.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!($ != null && $.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (D == $)
                  return U.isInterGraph = !1, D.add(U, P, Z);
                if (U.isInterGraph = !0, U.source = P, U.target = Z, this.edges.indexOf(U) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(U), !(U.source != null && U.target != null))
                  throw "Edge source and/or target is null!";
                if (!(U.source.edges.indexOf(U) == -1 && U.target.edges.indexOf(U) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return U.source.edges.push(U), U.target.edges.push(U), U;
              }
            }, w.prototype.remove = function(L) {
              if (L instanceof N) {
                var z = L;
                if (z.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(z == this.rootGraph || z.parent != null && z.parent.graphManager == this))
                  throw "Invalid parent node!";
                var U = [];
                U = U.concat(z.getEdges());
                for (var P, Z = U.length, D = 0; D < Z; D++)
                  P = U[D], z.remove(P);
                var $ = [];
                $ = $.concat(z.getNodes());
                var _;
                Z = $.length;
                for (var D = 0; D < Z; D++)
                  _ = $[D], z.remove(_);
                z == this.rootGraph && this.setRootGraph(null);
                var Q = this.graphs.indexOf(z);
                this.graphs.splice(Q, 1), z.parent = null;
              } else if (L instanceof T) {
                if (P = L, P == null)
                  throw "Edge is null!";
                if (!P.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(P.source != null && P.target != null))
                  throw "Source and/or target is null!";
                if (!(P.source.edges.indexOf(P) != -1 && P.target.edges.indexOf(P) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var Q = P.source.edges.indexOf(P);
                if (P.source.edges.splice(Q, 1), Q = P.target.edges.indexOf(P), P.target.edges.splice(Q, 1), !(P.source.owner != null && P.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (P.source.owner.getGraphManager().edges.indexOf(P) == -1)
                  throw "Not in owner graph manager's edge list!";
                var Q = P.source.owner.getGraphManager().edges.indexOf(P);
                P.source.owner.getGraphManager().edges.splice(Q, 1);
              }
            }, w.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(!0);
            }, w.prototype.getGraphs = function() {
              return this.graphs;
            }, w.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var L = [], z = this.getGraphs(), U = z.length, P = 0; P < U; P++)
                  L = L.concat(z[P].getNodes());
                this.allNodes = L;
              }
              return this.allNodes;
            }, w.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, w.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, w.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, w.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var L = [], z = this.getGraphs();
                z.length;
                for (var U = 0; U < z.length; U++)
                  L = L.concat(z[U].getEdges());
                L = L.concat(this.edges), this.allEdges = L;
              }
              return this.allEdges;
            }, w.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, w.prototype.setAllNodesToApplyGravitation = function(L) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = L;
            }, w.prototype.getRoot = function() {
              return this.rootGraph;
            }, w.prototype.setRootGraph = function(L) {
              if (L.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = L, L.parent == null && (L.parent = this.layout.newNode("Root node"));
            }, w.prototype.getLayout = function() {
              return this.layout;
            }, w.prototype.isOneAncestorOfOther = function(L, z) {
              if (!(L != null && z != null))
                throw "assert failed";
              if (L == z)
                return !0;
              var U = L.getOwner(), P;
              do {
                if (P = U.getParent(), P == null)
                  break;
                if (P == z)
                  return !0;
                if (U = P.getOwner(), U == null)
                  break;
              } while (!0);
              U = z.getOwner();
              do {
                if (P = U.getParent(), P == null)
                  break;
                if (P == L)
                  return !0;
                if (U = P.getOwner(), U == null)
                  break;
              } while (!0);
              return !1;
            }, w.prototype.calcLowestCommonAncestors = function() {
              for (var L, z, U, P, Z, D = this.getAllEdges(), $ = D.length, _ = 0; _ < $; _++) {
                if (L = D[_], z = L.source, U = L.target, L.lca = null, L.sourceInLca = z, L.targetInLca = U, z == U) {
                  L.lca = z.getOwner();
                  continue;
                }
                for (P = z.getOwner(); L.lca == null; ) {
                  for (L.targetInLca = U, Z = U.getOwner(); L.lca == null; ) {
                    if (Z == P) {
                      L.lca = Z;
                      break;
                    }
                    if (Z == this.rootGraph)
                      break;
                    if (L.lca != null)
                      throw "assert failed";
                    L.targetInLca = Z.getParent(), Z = L.targetInLca.getOwner();
                  }
                  if (P == this.rootGraph)
                    break;
                  L.lca == null && (L.sourceInLca = P.getParent(), P = L.sourceInLca.getOwner());
                }
                if (L.lca == null)
                  throw "assert failed";
              }
            }, w.prototype.calcLowestCommonAncestor = function(L, z) {
              if (L == z)
                return L.getOwner();
              var U = L.getOwner();
              do {
                if (U == null)
                  break;
                var P = z.getOwner();
                do {
                  if (P == null)
                    break;
                  if (P == U)
                    return P;
                  P = P.getParent().getOwner();
                } while (!0);
                U = U.getParent().getOwner();
              } while (!0);
              return U;
            }, w.prototype.calcInclusionTreeDepths = function(L, z) {
              L == null && z == null && (L = this.rootGraph, z = 1);
              for (var U, P = L.getNodes(), Z = P.length, D = 0; D < Z; D++)
                U = P[D], U.inclusionTreeDepth = z, U.child != null && this.calcInclusionTreeDepths(U.child, z + 1);
            }, w.prototype.includesInvalidEdge = function() {
              for (var L, z = this.edges.length, U = 0; U < z; U++)
                if (L = this.edges[U], this.isOneAncestorOfOther(L.source, L.target))
                  return !0;
              return !1;
            }, ee.exports = w;
          },
          /* 7 */
          /***/
          function(ee, de, H) {
            var N = H(0);
            function T() {
            }
            for (var w in N)
              T[w] = N[w];
            T.MAX_ITERATIONS = 2500, T.DEFAULT_EDGE_LENGTH = 50, T.DEFAULT_SPRING_STRENGTH = 0.45, T.DEFAULT_REPULSION_STRENGTH = 4500, T.DEFAULT_GRAVITY_STRENGTH = 0.4, T.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, T.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, T.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, T.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, T.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, T.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, T.COOLING_ADAPTATION_FACTOR = 0.33, T.ADAPTATION_LOWER_NODE_LIMIT = 1e3, T.ADAPTATION_UPPER_NODE_LIMIT = 5e3, T.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, T.MAX_NODE_DISPLACEMENT = T.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, T.MIN_REPULSION_DIST = T.DEFAULT_EDGE_LENGTH / 10, T.CONVERGENCE_CHECK_PERIOD = 100, T.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, T.MIN_EDGE_LENGTH = 1, T.GRID_CALCULATION_CHECK_PERIOD = 10, ee.exports = T;
          },
          /* 8 */
          /***/
          function(ee, de, H) {
            var N = H(12);
            function T() {
            }
            T.calcSeparationAmount = function(w, L, z, U) {
              if (!w.intersects(L))
                throw "assert failed";
              var P = new Array(2);
              this.decideDirectionsForOverlappingNodes(w, L, P), z[0] = Math.min(w.getRight(), L.getRight()) - Math.max(w.x, L.x), z[1] = Math.min(w.getBottom(), L.getBottom()) - Math.max(w.y, L.y), w.getX() <= L.getX() && w.getRight() >= L.getRight() ? z[0] += Math.min(L.getX() - w.getX(), w.getRight() - L.getRight()) : L.getX() <= w.getX() && L.getRight() >= w.getRight() && (z[0] += Math.min(w.getX() - L.getX(), L.getRight() - w.getRight())), w.getY() <= L.getY() && w.getBottom() >= L.getBottom() ? z[1] += Math.min(L.getY() - w.getY(), w.getBottom() - L.getBottom()) : L.getY() <= w.getY() && L.getBottom() >= w.getBottom() && (z[1] += Math.min(w.getY() - L.getY(), L.getBottom() - w.getBottom()));
              var Z = Math.abs((L.getCenterY() - w.getCenterY()) / (L.getCenterX() - w.getCenterX()));
              L.getCenterY() === w.getCenterY() && L.getCenterX() === w.getCenterX() && (Z = 1);
              var D = Z * z[0], $ = z[1] / Z;
              z[0] < $ ? $ = z[0] : D = z[1], z[0] = -1 * P[0] * ($ / 2 + U), z[1] = -1 * P[1] * (D / 2 + U);
            }, T.decideDirectionsForOverlappingNodes = function(w, L, z) {
              w.getCenterX() < L.getCenterX() ? z[0] = -1 : z[0] = 1, w.getCenterY() < L.getCenterY() ? z[1] = -1 : z[1] = 1;
            }, T.getIntersection2 = function(w, L, z) {
              var U = w.getCenterX(), P = w.getCenterY(), Z = L.getCenterX(), D = L.getCenterY();
              if (w.intersects(L))
                return z[0] = U, z[1] = P, z[2] = Z, z[3] = D, !0;
              var $ = w.getX(), _ = w.getY(), Q = w.getRight(), ne = w.getX(), le = w.getBottom(), J = w.getRight(), j = w.getWidthHalf(), Y = w.getHeightHalf(), te = L.getX(), S = L.getY(), V = L.getRight(), R = L.getX(), W = L.getBottom(), ce = L.getRight(), pe = L.getWidthHalf(), Oe = L.getHeightHalf(), Me = !1, Ye = !1;
              if (U === Z) {
                if (P > D)
                  return z[0] = U, z[1] = _, z[2] = Z, z[3] = W, !1;
                if (P < D)
                  return z[0] = U, z[1] = le, z[2] = Z, z[3] = S, !1;
              } else if (P === D) {
                if (U > Z)
                  return z[0] = $, z[1] = P, z[2] = V, z[3] = D, !1;
                if (U < Z)
                  return z[0] = Q, z[1] = P, z[2] = te, z[3] = D, !1;
              } else {
                var at = w.height / w.width, dt = L.height / L.width, ke = (D - P) / (Z - U), Ve = void 0, Ze = void 0, nt = void 0, ht = void 0, it = void 0, tt = void 0;
                if (-at === ke ? U > Z ? (z[0] = ne, z[1] = le, Me = !0) : (z[0] = Q, z[1] = _, Me = !0) : at === ke && (U > Z ? (z[0] = $, z[1] = _, Me = !0) : (z[0] = J, z[1] = le, Me = !0)), -dt === ke ? Z > U ? (z[2] = R, z[3] = W, Ye = !0) : (z[2] = V, z[3] = S, Ye = !0) : dt === ke && (Z > U ? (z[2] = te, z[3] = S, Ye = !0) : (z[2] = ce, z[3] = W, Ye = !0)), Me && Ye)
                  return !1;
                if (U > Z ? P > D ? (Ve = this.getCardinalDirection(at, ke, 4), Ze = this.getCardinalDirection(dt, ke, 2)) : (Ve = this.getCardinalDirection(-at, ke, 3), Ze = this.getCardinalDirection(-dt, ke, 1)) : P > D ? (Ve = this.getCardinalDirection(-at, ke, 1), Ze = this.getCardinalDirection(-dt, ke, 3)) : (Ve = this.getCardinalDirection(at, ke, 2), Ze = this.getCardinalDirection(dt, ke, 4)), !Me)
                  switch (Ve) {
                    case 1:
                      ht = _, nt = U + -Y / ke, z[0] = nt, z[1] = ht;
                      break;
                    case 2:
                      nt = J, ht = P + j * ke, z[0] = nt, z[1] = ht;
                      break;
                    case 3:
                      ht = le, nt = U + Y / ke, z[0] = nt, z[1] = ht;
                      break;
                    case 4:
                      nt = ne, ht = P + -j * ke, z[0] = nt, z[1] = ht;
                      break;
                  }
                if (!Ye)
                  switch (Ze) {
                    case 1:
                      tt = S, it = Z + -Oe / ke, z[2] = it, z[3] = tt;
                      break;
                    case 2:
                      it = ce, tt = D + pe * ke, z[2] = it, z[3] = tt;
                      break;
                    case 3:
                      tt = W, it = Z + Oe / ke, z[2] = it, z[3] = tt;
                      break;
                    case 4:
                      it = R, tt = D + -pe * ke, z[2] = it, z[3] = tt;
                      break;
                  }
              }
              return !1;
            }, T.getCardinalDirection = function(w, L, z) {
              return w > L ? z : 1 + z % 4;
            }, T.getIntersection = function(w, L, z, U) {
              if (U == null)
                return this.getIntersection2(w, L, z);
              var P = w.x, Z = w.y, D = L.x, $ = L.y, _ = z.x, Q = z.y, ne = U.x, le = U.y, J = void 0, j = void 0, Y = void 0, te = void 0, S = void 0, V = void 0, R = void 0, W = void 0, ce = void 0;
              return Y = $ - Z, S = P - D, R = D * Z - P * $, te = le - Q, V = _ - ne, W = ne * Q - _ * le, ce = Y * V - te * S, ce === 0 ? null : (J = (S * W - V * R) / ce, j = (te * R - Y * W) / ce, new N(J, j));
            }, T.angleOfVector = function(w, L, z, U) {
              var P = void 0;
              return w !== z ? (P = Math.atan((U - L) / (z - w)), z < w ? P += Math.PI : U < L && (P += this.TWO_PI)) : U < L ? P = this.ONE_AND_HALF_PI : P = this.HALF_PI, P;
            }, T.doIntersect = function(w, L, z, U) {
              var P = w.x, Z = w.y, D = L.x, $ = L.y, _ = z.x, Q = z.y, ne = U.x, le = U.y, J = (D - P) * (le - Q) - (ne - _) * ($ - Z);
              if (J === 0)
                return !1;
              var j = ((le - Q) * (ne - P) + (_ - ne) * (le - Z)) / J, Y = ((Z - $) * (ne - P) + (D - P) * (le - Z)) / J;
              return 0 < j && j < 1 && 0 < Y && Y < 1;
            }, T.HALF_PI = 0.5 * Math.PI, T.ONE_AND_HALF_PI = 1.5 * Math.PI, T.TWO_PI = 2 * Math.PI, T.THREE_PI = 3 * Math.PI, ee.exports = T;
          },
          /* 9 */
          /***/
          function(ee, de, H) {
            function N() {
            }
            N.sign = function(T) {
              return T > 0 ? 1 : T < 0 ? -1 : 0;
            }, N.floor = function(T) {
              return T < 0 ? Math.ceil(T) : Math.floor(T);
            }, N.ceil = function(T) {
              return T < 0 ? Math.floor(T) : Math.ceil(T);
            }, ee.exports = N;
          },
          /* 10 */
          /***/
          function(ee, de, H) {
            function N() {
            }
            N.MAX_VALUE = 2147483647, N.MIN_VALUE = -2147483648, ee.exports = N;
          },
          /* 11 */
          /***/
          function(ee, de, H) {
            var N = function() {
              function P(Z, D) {
                for (var $ = 0; $ < D.length; $++) {
                  var _ = D[$];
                  _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(Z, _.key, _);
                }
              }
              return function(Z, D, $) {
                return D && P(Z.prototype, D), $ && P(Z, $), Z;
              };
            }();
            function T(P, Z) {
              if (!(P instanceof Z))
                throw new TypeError("Cannot call a class as a function");
            }
            var w = function(Z) {
              return { value: Z, next: null, prev: null };
            }, L = function(Z, D, $, _) {
              return Z !== null ? Z.next = D : _.head = D, $ !== null ? $.prev = D : _.tail = D, D.prev = Z, D.next = $, _.length++, D;
            }, z = function(Z, D) {
              var $ = Z.prev, _ = Z.next;
              return $ !== null ? $.next = _ : D.head = _, _ !== null ? _.prev = $ : D.tail = $, Z.prev = Z.next = null, D.length--, Z;
            }, U = function() {
              function P(Z) {
                var D = this;
                T(this, P), this.length = 0, this.head = null, this.tail = null, Z != null && Z.forEach(function($) {
                  return D.push($);
                });
              }
              return N(P, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(D, $) {
                  return L($.prev, w(D), $, this);
                }
              }, {
                key: "insertAfter",
                value: function(D, $) {
                  return L($, w(D), $.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(D, $) {
                  return L($.prev, D, $, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(D, $) {
                  return L($, D, $.next, this);
                }
              }, {
                key: "push",
                value: function(D) {
                  return L(this.tail, w(D), null, this);
                }
              }, {
                key: "unshift",
                value: function(D) {
                  return L(null, w(D), this.head, this);
                }
              }, {
                key: "remove",
                value: function(D) {
                  return z(D, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return z(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return z(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return z(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return z(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(D) {
                  if (D <= this.length()) {
                    for (var $ = 1, _ = this.head; $ < D; )
                      _ = _.next, $++;
                    return _.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(D, $) {
                  if (D <= this.length()) {
                    for (var _ = 1, Q = this.head; _ < D; )
                      Q = Q.next, _++;
                    Q.value = $;
                  }
                }
              }]), P;
            }();
            ee.exports = U;
          },
          /* 12 */
          /***/
          function(ee, de, H) {
            function N(T, w, L) {
              this.x = null, this.y = null, T == null && w == null && L == null ? (this.x = 0, this.y = 0) : typeof T == "number" && typeof w == "number" && L == null ? (this.x = T, this.y = w) : T.constructor.name == "Point" && w == null && L == null && (L = T, this.x = L.x, this.y = L.y);
            }
            N.prototype.getX = function() {
              return this.x;
            }, N.prototype.getY = function() {
              return this.y;
            }, N.prototype.getLocation = function() {
              return new N(this.x, this.y);
            }, N.prototype.setLocation = function(T, w, L) {
              T.constructor.name == "Point" && w == null && L == null ? (L = T, this.setLocation(L.x, L.y)) : typeof T == "number" && typeof w == "number" && L == null && (parseInt(T) == T && parseInt(w) == w ? this.move(T, w) : (this.x = Math.floor(T + 0.5), this.y = Math.floor(w + 0.5)));
            }, N.prototype.move = function(T, w) {
              this.x = T, this.y = w;
            }, N.prototype.translate = function(T, w) {
              this.x += T, this.y += w;
            }, N.prototype.equals = function(T) {
              if (T.constructor.name == "Point") {
                var w = T;
                return this.x == w.x && this.y == w.y;
              }
              return this == T;
            }, N.prototype.toString = function() {
              return new N().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, ee.exports = N;
          },
          /* 13 */
          /***/
          function(ee, de, H) {
            function N(T, w, L, z) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, T != null && w != null && L != null && z != null && (this.x = T, this.y = w, this.width = L, this.height = z);
            }
            N.prototype.getX = function() {
              return this.x;
            }, N.prototype.setX = function(T) {
              this.x = T;
            }, N.prototype.getY = function() {
              return this.y;
            }, N.prototype.setY = function(T) {
              this.y = T;
            }, N.prototype.getWidth = function() {
              return this.width;
            }, N.prototype.setWidth = function(T) {
              this.width = T;
            }, N.prototype.getHeight = function() {
              return this.height;
            }, N.prototype.setHeight = function(T) {
              this.height = T;
            }, N.prototype.getRight = function() {
              return this.x + this.width;
            }, N.prototype.getBottom = function() {
              return this.y + this.height;
            }, N.prototype.intersects = function(T) {
              return !(this.getRight() < T.x || this.getBottom() < T.y || T.getRight() < this.x || T.getBottom() < this.y);
            }, N.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, N.prototype.getMinX = function() {
              return this.getX();
            }, N.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, N.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, N.prototype.getMinY = function() {
              return this.getY();
            }, N.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, N.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, N.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, ee.exports = N;
          },
          /* 14 */
          /***/
          function(ee, de, H) {
            var N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
              return typeof w;
            } : function(w) {
              return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
            };
            function T() {
            }
            T.lastID = 0, T.createID = function(w) {
              return T.isPrimitive(w) ? w : (w.uniqueID != null || (w.uniqueID = T.getString(), T.lastID++), w.uniqueID);
            }, T.getString = function(w) {
              return w == null && (w = T.lastID), "Object#" + w;
            }, T.isPrimitive = function(w) {
              var L = typeof w > "u" ? "undefined" : N(w);
              return w == null || L != "object" && L != "function";
            }, ee.exports = T;
          },
          /* 15 */
          /***/
          function(ee, de, H) {
            function N(_) {
              if (Array.isArray(_)) {
                for (var Q = 0, ne = Array(_.length); Q < _.length; Q++)
                  ne[Q] = _[Q];
                return ne;
              } else
                return Array.from(_);
            }
            var T = H(0), w = H(6), L = H(3), z = H(1), U = H(5), P = H(4), Z = H(17), D = H(27);
            function $(_) {
              D.call(this), this.layoutQuality = T.QUALITY, this.createBendsAsNeeded = T.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = T.DEFAULT_INCREMENTAL, this.animationOnLayout = T.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = T.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = T.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = T.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new w(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, _ != null && (this.isRemoteUse = _);
            }
            $.RANDOM_SEED = 1, $.prototype = Object.create(D.prototype), $.prototype.getGraphManager = function() {
              return this.graphManager;
            }, $.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, $.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, $.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, $.prototype.newGraphManager = function() {
              var _ = new w(this);
              return this.graphManager = _, _;
            }, $.prototype.newGraph = function(_) {
              return new U(null, this.graphManager, _);
            }, $.prototype.newNode = function(_) {
              return new L(this.graphManager, _);
            }, $.prototype.newEdge = function(_) {
              return new z(null, null, _);
            }, $.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, $.prototype.runLayout = function() {
              this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var _;
              return this.checkLayoutSuccess() ? _ = !1 : _ = this.layout(), T.ANIMATE === "during" ? !1 : (_ && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, _);
            }, $.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, $.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var _ = this.graphManager.getAllEdges(), Q = 0; Q < _.length; Q++)
                  _[Q];
                for (var ne = this.graphManager.getRoot().getNodes(), Q = 0; Q < ne.length; Q++)
                  ne[Q];
                this.update(this.graphManager.getRoot());
              }
            }, $.prototype.update = function(_) {
              if (_ == null)
                this.update2();
              else if (_ instanceof L) {
                var Q = _;
                if (Q.getChild() != null)
                  for (var ne = Q.getChild().getNodes(), le = 0; le < ne.length; le++)
                    update(ne[le]);
                if (Q.vGraphObject != null) {
                  var J = Q.vGraphObject;
                  J.update(Q);
                }
              } else if (_ instanceof z) {
                var j = _;
                if (j.vGraphObject != null) {
                  var Y = j.vGraphObject;
                  Y.update(j);
                }
              } else if (_ instanceof U) {
                var te = _;
                if (te.vGraphObject != null) {
                  var S = te.vGraphObject;
                  S.update(te);
                }
              }
            }, $.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = T.QUALITY, this.animationDuringLayout = T.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = T.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = T.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = T.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = T.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = T.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
            }, $.prototype.transform = function(_) {
              if (_ == null)
                this.transform(new P(0, 0));
              else {
                var Q = new Z(), ne = this.graphManager.getRoot().updateLeftTop();
                if (ne != null) {
                  Q.setWorldOrgX(_.x), Q.setWorldOrgY(_.y), Q.setDeviceOrgX(ne.x), Q.setDeviceOrgY(ne.y);
                  for (var le = this.getAllNodes(), J, j = 0; j < le.length; j++)
                    J = le[j], J.transform(Q);
                }
              }
            }, $.prototype.positionNodesRandomly = function(_) {
              if (_ == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
              else
                for (var Q, ne, le = _.getNodes(), J = 0; J < le.length; J++)
                  Q = le[J], ne = Q.getChild(), ne == null || ne.getNodes().length == 0 ? Q.scatter() : (this.positionNodesRandomly(ne), Q.updateBounds());
            }, $.prototype.getFlatForest = function() {
              for (var _ = [], Q = !0, ne = this.graphManager.getRoot().getNodes(), le = !0, J = 0; J < ne.length; J++)
                ne[J].getChild() != null && (le = !1);
              if (!le)
                return _;
              var j = /* @__PURE__ */ new Set(), Y = [], te = /* @__PURE__ */ new Map(), S = [];
              for (S = S.concat(ne); S.length > 0 && Q; ) {
                for (Y.push(S[0]); Y.length > 0 && Q; ) {
                  var V = Y[0];
                  Y.splice(0, 1), j.add(V);
                  for (var R = V.getEdges(), J = 0; J < R.length; J++) {
                    var W = R[J].getOtherEnd(V);
                    if (te.get(V) != W)
                      if (!j.has(W))
                        Y.push(W), te.set(W, V);
                      else {
                        Q = !1;
                        break;
                      }
                  }
                }
                if (!Q)
                  _ = [];
                else {
                  var ce = [].concat(N(j));
                  _.push(ce);
                  for (var J = 0; J < ce.length; J++) {
                    var pe = ce[J], Oe = S.indexOf(pe);
                    Oe > -1 && S.splice(Oe, 1);
                  }
                  j = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Map();
                }
              }
              return _;
            }, $.prototype.createDummyNodesForBendpoints = function(_) {
              for (var Q = [], ne = _.source, le = this.graphManager.calcLowestCommonAncestor(_.source, _.target), J = 0; J < _.bendpoints.length; J++) {
                var j = this.newNode(null);
                j.setRect(new Point(0, 0), new Dimension(1, 1)), le.add(j);
                var Y = this.newEdge(null);
                this.graphManager.add(Y, ne, j), Q.add(j), ne = j;
              }
              var Y = this.newEdge(null);
              return this.graphManager.add(Y, ne, _.target), this.edgeToDummyNodes.set(_, Q), _.isInterGraph() ? this.graphManager.remove(_) : le.remove(_), Q;
            }, $.prototype.createBendpointsFromDummyNodes = function() {
              var _ = [];
              _ = _.concat(this.graphManager.getAllEdges()), _ = [].concat(N(this.edgeToDummyNodes.keys())).concat(_);
              for (var Q = 0; Q < _.length; Q++) {
                var ne = _[Q];
                if (ne.bendpoints.length > 0) {
                  for (var le = this.edgeToDummyNodes.get(ne), J = 0; J < le.length; J++) {
                    var j = le[J], Y = new P(j.getCenterX(), j.getCenterY()), te = ne.bendpoints.get(J);
                    te.x = Y.x, te.y = Y.y, j.getOwner().remove(j);
                  }
                  this.graphManager.add(ne, ne.source, ne.target);
                }
              }
            }, $.transform = function(_, Q, ne, le) {
              if (ne != null && le != null) {
                var J = Q;
                if (_ <= 50) {
                  var j = Q / ne;
                  J -= (Q - j) / 50 * (50 - _);
                } else {
                  var Y = Q * le;
                  J += (Y - Q) / 50 * (_ - 50);
                }
                return J;
              } else {
                var te, S;
                return _ <= 50 ? (te = 9 * Q / 500, S = Q / 10) : (te = 9 * Q / 50, S = -8 * Q), te * _ + S;
              }
            }, $.findCenterOfTree = function(_) {
              var Q = [];
              Q = Q.concat(_);
              var ne = [], le = /* @__PURE__ */ new Map(), J = !1, j = null;
              (Q.length == 1 || Q.length == 2) && (J = !0, j = Q[0]);
              for (var Y = 0; Y < Q.length; Y++) {
                var te = Q[Y], S = te.getNeighborsList().size;
                le.set(te, te.getNeighborsList().size), S == 1 && ne.push(te);
              }
              var V = [];
              for (V = V.concat(ne); !J; ) {
                var R = [];
                R = R.concat(V), V = [];
                for (var Y = 0; Y < Q.length; Y++) {
                  var te = Q[Y], W = Q.indexOf(te);
                  W >= 0 && Q.splice(W, 1);
                  var ce = te.getNeighborsList();
                  ce.forEach(function(Me) {
                    if (ne.indexOf(Me) < 0) {
                      var Ye = le.get(Me), at = Ye - 1;
                      at == 1 && V.push(Me), le.set(Me, at);
                    }
                  });
                }
                ne = ne.concat(V), (Q.length == 1 || Q.length == 2) && (J = !0, j = Q[0]);
              }
              return j;
            }, $.prototype.setGraphManager = function(_) {
              this.graphManager = _;
            }, ee.exports = $;
          },
          /* 16 */
          /***/
          function(ee, de, H) {
            function N() {
            }
            N.seed = 1, N.x = 0, N.nextDouble = function() {
              return N.x = Math.sin(N.seed++) * 1e4, N.x - Math.floor(N.x);
            }, ee.exports = N;
          },
          /* 17 */
          /***/
          function(ee, de, H) {
            var N = H(4);
            function T(w, L) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            T.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, T.prototype.setWorldOrgX = function(w) {
              this.lworldOrgX = w;
            }, T.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, T.prototype.setWorldOrgY = function(w) {
              this.lworldOrgY = w;
            }, T.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, T.prototype.setWorldExtX = function(w) {
              this.lworldExtX = w;
            }, T.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, T.prototype.setWorldExtY = function(w) {
              this.lworldExtY = w;
            }, T.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, T.prototype.setDeviceOrgX = function(w) {
              this.ldeviceOrgX = w;
            }, T.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, T.prototype.setDeviceOrgY = function(w) {
              this.ldeviceOrgY = w;
            }, T.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, T.prototype.setDeviceExtX = function(w) {
              this.ldeviceExtX = w;
            }, T.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, T.prototype.setDeviceExtY = function(w) {
              this.ldeviceExtY = w;
            }, T.prototype.transformX = function(w) {
              var L = 0, z = this.lworldExtX;
              return z != 0 && (L = this.ldeviceOrgX + (w - this.lworldOrgX) * this.ldeviceExtX / z), L;
            }, T.prototype.transformY = function(w) {
              var L = 0, z = this.lworldExtY;
              return z != 0 && (L = this.ldeviceOrgY + (w - this.lworldOrgY) * this.ldeviceExtY / z), L;
            }, T.prototype.inverseTransformX = function(w) {
              var L = 0, z = this.ldeviceExtX;
              return z != 0 && (L = this.lworldOrgX + (w - this.ldeviceOrgX) * this.lworldExtX / z), L;
            }, T.prototype.inverseTransformY = function(w) {
              var L = 0, z = this.ldeviceExtY;
              return z != 0 && (L = this.lworldOrgY + (w - this.ldeviceOrgY) * this.lworldExtY / z), L;
            }, T.prototype.inverseTransformPoint = function(w) {
              var L = new N(this.inverseTransformX(w.x), this.inverseTransformY(w.y));
              return L;
            }, ee.exports = T;
          },
          /* 18 */
          /***/
          function(ee, de, H) {
            function N(D) {
              if (Array.isArray(D)) {
                for (var $ = 0, _ = Array(D.length); $ < D.length; $++)
                  _[$] = D[$];
                return _;
              } else
                return Array.from(D);
            }
            var T = H(15), w = H(7), L = H(0), z = H(8), U = H(9);
            function P() {
              T.call(this), this.useSmartIdealEdgeLengthCalculation = w.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = w.DEFAULT_EDGE_LENGTH, this.springConstant = w.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = w.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = w.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = w.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = w.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = w.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * w.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = w.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = w.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = w.MAX_ITERATIONS;
            }
            P.prototype = Object.create(T.prototype);
            for (var Z in T)
              P[Z] = T[Z];
            P.prototype.initParameters = function() {
              T.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = w.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, P.prototype.calcIdealEdgeLengths = function() {
              for (var D, $, _, Q, ne, le, J = this.getGraphManager().getAllEdges(), j = 0; j < J.length; j++)
                D = J[j], D.idealLength = this.idealEdgeLength, D.isInterGraph && (_ = D.getSource(), Q = D.getTarget(), ne = D.getSourceInLca().getEstimatedSize(), le = D.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (D.idealLength += ne + le - 2 * L.SIMPLE_NODE_SIZE), $ = D.getLca().getInclusionTreeDepth(), D.idealLength += w.DEFAULT_EDGE_LENGTH * w.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (_.getInclusionTreeDepth() + Q.getInclusionTreeDepth() - 2 * $));
            }, P.prototype.initSpringEmbedder = function() {
              var D = this.getAllNodes().length;
              this.incremental ? (D > w.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * w.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (D - w.ADAPTATION_LOWER_NODE_LIMIT) / (w.ADAPTATION_UPPER_NODE_LIMIT - w.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - w.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = w.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (D > w.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(w.COOLING_ADAPTATION_FACTOR, 1 - (D - w.ADAPTATION_LOWER_NODE_LIMIT) / (w.ADAPTATION_UPPER_NODE_LIMIT - w.ADAPTATION_LOWER_NODE_LIMIT) * (1 - w.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = w.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, P.prototype.calcSpringForces = function() {
              for (var D = this.getAllEdges(), $, _ = 0; _ < D.length; _++)
                $ = D[_], this.calcSpringForce($, $.idealLength);
            }, P.prototype.calcRepulsionForces = function() {
              var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _, Q, ne, le, J = this.getAllNodes(), j;
              if (this.useFRGridVariant)
                for (this.totalIterations % w.GRID_CALCULATION_CHECK_PERIOD == 1 && D && this.updateGrid(), j = /* @__PURE__ */ new Set(), _ = 0; _ < J.length; _++)
                  ne = J[_], this.calculateRepulsionForceOfANode(ne, j, D, $), j.add(ne);
              else
                for (_ = 0; _ < J.length; _++)
                  for (ne = J[_], Q = _ + 1; Q < J.length; Q++)
                    le = J[Q], ne.getOwner() == le.getOwner() && this.calcRepulsionForce(ne, le);
            }, P.prototype.calcGravitationalForces = function() {
              for (var D, $ = this.getAllNodesToApplyGravitation(), _ = 0; _ < $.length; _++)
                D = $[_], this.calcGravitationalForce(D);
            }, P.prototype.moveNodes = function() {
              for (var D = this.getAllNodes(), $, _ = 0; _ < D.length; _++)
                $ = D[_], $.move();
            }, P.prototype.calcSpringForce = function(D, $) {
              var _ = D.getSource(), Q = D.getTarget(), ne, le, J, j;
              if (this.uniformLeafNodeSizes && _.getChild() == null && Q.getChild() == null)
                D.updateLengthSimple();
              else if (D.updateLength(), D.isOverlapingSourceAndTarget)
                return;
              ne = D.getLength(), ne != 0 && (le = this.springConstant * (ne - $), J = le * (D.lengthX / ne), j = le * (D.lengthY / ne), _.springForceX += J, _.springForceY += j, Q.springForceX -= J, Q.springForceY -= j);
            }, P.prototype.calcRepulsionForce = function(D, $) {
              var _ = D.getRect(), Q = $.getRect(), ne = new Array(2), le = new Array(4), J, j, Y, te, S, V, R;
              if (_.intersects(Q)) {
                z.calcSeparationAmount(_, Q, ne, w.DEFAULT_EDGE_LENGTH / 2), V = 2 * ne[0], R = 2 * ne[1];
                var W = D.noOfChildren * $.noOfChildren / (D.noOfChildren + $.noOfChildren);
                D.repulsionForceX -= W * V, D.repulsionForceY -= W * R, $.repulsionForceX += W * V, $.repulsionForceY += W * R;
              } else
                this.uniformLeafNodeSizes && D.getChild() == null && $.getChild() == null ? (J = Q.getCenterX() - _.getCenterX(), j = Q.getCenterY() - _.getCenterY()) : (z.getIntersection(_, Q, le), J = le[2] - le[0], j = le[3] - le[1]), Math.abs(J) < w.MIN_REPULSION_DIST && (J = U.sign(J) * w.MIN_REPULSION_DIST), Math.abs(j) < w.MIN_REPULSION_DIST && (j = U.sign(j) * w.MIN_REPULSION_DIST), Y = J * J + j * j, te = Math.sqrt(Y), S = this.repulsionConstant * D.noOfChildren * $.noOfChildren / Y, V = S * J / te, R = S * j / te, D.repulsionForceX -= V, D.repulsionForceY -= R, $.repulsionForceX += V, $.repulsionForceY += R;
            }, P.prototype.calcGravitationalForce = function(D) {
              var $, _, Q, ne, le, J, j, Y;
              $ = D.getOwner(), _ = ($.getRight() + $.getLeft()) / 2, Q = ($.getTop() + $.getBottom()) / 2, ne = D.getCenterX() - _, le = D.getCenterY() - Q, J = Math.abs(ne) + D.getWidth() / 2, j = Math.abs(le) + D.getHeight() / 2, D.getOwner() == this.graphManager.getRoot() ? (Y = $.getEstimatedSize() * this.gravityRangeFactor, (J > Y || j > Y) && (D.gravitationForceX = -this.gravityConstant * ne, D.gravitationForceY = -this.gravityConstant * le)) : (Y = $.getEstimatedSize() * this.compoundGravityRangeFactor, (J > Y || j > Y) && (D.gravitationForceX = -this.gravityConstant * ne * this.compoundGravityConstant, D.gravitationForceY = -this.gravityConstant * le * this.compoundGravityConstant));
            }, P.prototype.isConverged = function() {
              var D, $ = !1;
              return this.totalIterations > this.maxIterations / 3 && ($ = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), D = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, D || $;
            }, P.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, P.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var D, $ = this.graphManager.getAllNodes(), _ = 0; _ < $.length; _++)
                D = $[_], D.noOfChildren = D.getNoOfChildren();
            }, P.prototype.calcGrid = function(D) {
              var $ = 0, _ = 0;
              $ = parseInt(Math.ceil((D.getRight() - D.getLeft()) / this.repulsionRange)), _ = parseInt(Math.ceil((D.getBottom() - D.getTop()) / this.repulsionRange));
              for (var Q = new Array($), ne = 0; ne < $; ne++)
                Q[ne] = new Array(_);
              for (var ne = 0; ne < $; ne++)
                for (var le = 0; le < _; le++)
                  Q[ne][le] = new Array();
              return Q;
            }, P.prototype.addNodeToGrid = function(D, $, _) {
              var Q = 0, ne = 0, le = 0, J = 0;
              Q = parseInt(Math.floor((D.getRect().x - $) / this.repulsionRange)), ne = parseInt(Math.floor((D.getRect().width + D.getRect().x - $) / this.repulsionRange)), le = parseInt(Math.floor((D.getRect().y - _) / this.repulsionRange)), J = parseInt(Math.floor((D.getRect().height + D.getRect().y - _) / this.repulsionRange));
              for (var j = Q; j <= ne; j++)
                for (var Y = le; Y <= J; Y++)
                  this.grid[j][Y].push(D), D.setGridCoordinates(Q, ne, le, J);
            }, P.prototype.updateGrid = function() {
              var D, $, _ = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), D = 0; D < _.length; D++)
                $ = _[D], this.addNodeToGrid($, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, P.prototype.calculateRepulsionForceOfANode = function(D, $, _, Q) {
              if (this.totalIterations % w.GRID_CALCULATION_CHECK_PERIOD == 1 && _ || Q) {
                var ne = /* @__PURE__ */ new Set();
                D.surrounding = new Array();
                for (var le, J = this.grid, j = D.startX - 1; j < D.finishX + 2; j++)
                  for (var Y = D.startY - 1; Y < D.finishY + 2; Y++)
                    if (!(j < 0 || Y < 0 || j >= J.length || Y >= J[0].length)) {
                      for (var te = 0; te < J[j][Y].length; te++)
                        if (le = J[j][Y][te], !(D.getOwner() != le.getOwner() || D == le) && !$.has(le) && !ne.has(le)) {
                          var S = Math.abs(D.getCenterX() - le.getCenterX()) - (D.getWidth() / 2 + le.getWidth() / 2), V = Math.abs(D.getCenterY() - le.getCenterY()) - (D.getHeight() / 2 + le.getHeight() / 2);
                          S <= this.repulsionRange && V <= this.repulsionRange && ne.add(le);
                        }
                    }
                D.surrounding = [].concat(N(ne));
              }
              for (j = 0; j < D.surrounding.length; j++)
                this.calcRepulsionForce(D, D.surrounding[j]);
            }, P.prototype.calcRepulsionRange = function() {
              return 0;
            }, ee.exports = P;
          },
          /* 19 */
          /***/
          function(ee, de, H) {
            var N = H(1), T = H(7);
            function w(z, U, P) {
              N.call(this, z, U, P), this.idealLength = T.DEFAULT_EDGE_LENGTH;
            }
            w.prototype = Object.create(N.prototype);
            for (var L in N)
              w[L] = N[L];
            ee.exports = w;
          },
          /* 20 */
          /***/
          function(ee, de, H) {
            var N = H(3);
            function T(L, z, U, P) {
              N.call(this, L, z, U, P), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            T.prototype = Object.create(N.prototype);
            for (var w in N)
              T[w] = N[w];
            T.prototype.setGridCoordinates = function(L, z, U, P) {
              this.startX = L, this.finishX = z, this.startY = U, this.finishY = P;
            }, ee.exports = T;
          },
          /* 21 */
          /***/
          function(ee, de, H) {
            function N(T, w) {
              this.width = 0, this.height = 0, T !== null && w !== null && (this.height = w, this.width = T);
            }
            N.prototype.getWidth = function() {
              return this.width;
            }, N.prototype.setWidth = function(T) {
              this.width = T;
            }, N.prototype.getHeight = function() {
              return this.height;
            }, N.prototype.setHeight = function(T) {
              this.height = T;
            }, ee.exports = N;
          },
          /* 22 */
          /***/
          function(ee, de, H) {
            var N = H(14);
            function T() {
              this.map = {}, this.keys = [];
            }
            T.prototype.put = function(w, L) {
              var z = N.createID(w);
              this.contains(z) || (this.map[z] = L, this.keys.push(w));
            }, T.prototype.contains = function(w) {
              return N.createID(w), this.map[w] != null;
            }, T.prototype.get = function(w) {
              var L = N.createID(w);
              return this.map[L];
            }, T.prototype.keySet = function() {
              return this.keys;
            }, ee.exports = T;
          },
          /* 23 */
          /***/
          function(ee, de, H) {
            var N = H(14);
            function T() {
              this.set = {};
            }
            T.prototype.add = function(w) {
              var L = N.createID(w);
              this.contains(L) || (this.set[L] = w);
            }, T.prototype.remove = function(w) {
              delete this.set[N.createID(w)];
            }, T.prototype.clear = function() {
              this.set = {};
            }, T.prototype.contains = function(w) {
              return this.set[N.createID(w)] == w;
            }, T.prototype.isEmpty = function() {
              return this.size() === 0;
            }, T.prototype.size = function() {
              return Object.keys(this.set).length;
            }, T.prototype.addAllTo = function(w) {
              for (var L = Object.keys(this.set), z = L.length, U = 0; U < z; U++)
                w.push(this.set[L[U]]);
            }, T.prototype.size = function() {
              return Object.keys(this.set).length;
            }, T.prototype.addAll = function(w) {
              for (var L = w.length, z = 0; z < L; z++) {
                var U = w[z];
                this.add(U);
              }
            }, ee.exports = T;
          },
          /* 24 */
          /***/
          function(ee, de, H) {
            var N = function() {
              function z(U, P) {
                for (var Z = 0; Z < P.length; Z++) {
                  var D = P[Z];
                  D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(U, D.key, D);
                }
              }
              return function(U, P, Z) {
                return P && z(U.prototype, P), Z && z(U, Z), U;
              };
            }();
            function T(z, U) {
              if (!(z instanceof U))
                throw new TypeError("Cannot call a class as a function");
            }
            var w = H(11), L = function() {
              function z(U, P) {
                T(this, z), (P !== null || P !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var Z = void 0;
                U instanceof w ? Z = U.size() : Z = U.length, this._quicksort(U, 0, Z - 1);
              }
              return N(z, [{
                key: "_quicksort",
                value: function(P, Z, D) {
                  if (Z < D) {
                    var $ = this._partition(P, Z, D);
                    this._quicksort(P, Z, $), this._quicksort(P, $ + 1, D);
                  }
                }
              }, {
                key: "_partition",
                value: function(P, Z, D) {
                  for (var $ = this._get(P, Z), _ = Z, Q = D; ; ) {
                    for (; this.compareFunction($, this._get(P, Q)); )
                      Q--;
                    for (; this.compareFunction(this._get(P, _), $); )
                      _++;
                    if (_ < Q)
                      this._swap(P, _, Q), _++, Q--;
                    else
                      return Q;
                  }
                }
              }, {
                key: "_get",
                value: function(P, Z) {
                  return P instanceof w ? P.get_object_at(Z) : P[Z];
                }
              }, {
                key: "_set",
                value: function(P, Z, D) {
                  P instanceof w ? P.set_object_at(Z, D) : P[Z] = D;
                }
              }, {
                key: "_swap",
                value: function(P, Z, D) {
                  var $ = this._get(P, Z);
                  this._set(P, Z, this._get(P, D)), this._set(P, D, $);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(P, Z) {
                  return Z > P;
                }
              }]), z;
            }();
            ee.exports = L;
          },
          /* 25 */
          /***/
          function(ee, de, H) {
            var N = function() {
              function L(z, U) {
                for (var P = 0; P < U.length; P++) {
                  var Z = U[P];
                  Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty(z, Z.key, Z);
                }
              }
              return function(z, U, P) {
                return U && L(z.prototype, U), P && L(z, P), z;
              };
            }();
            function T(L, z) {
              if (!(L instanceof z))
                throw new TypeError("Cannot call a class as a function");
            }
            var w = function() {
              function L(z, U) {
                var P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, Z = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, D = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                T(this, L), this.sequence1 = z, this.sequence2 = U, this.match_score = P, this.mismatch_penalty = Z, this.gap_penalty = D, this.iMax = z.length + 1, this.jMax = U.length + 1, this.grid = new Array(this.iMax);
                for (var $ = 0; $ < this.iMax; $++) {
                  this.grid[$] = new Array(this.jMax);
                  for (var _ = 0; _ < this.jMax; _++)
                    this.grid[$][_] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var Q = 0; Q < this.iMax; Q++) {
                  this.tracebackGrid[Q] = new Array(this.jMax);
                  for (var ne = 0; ne < this.jMax; ne++)
                    this.tracebackGrid[Q][ne] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return N(L, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var U = 1; U < this.jMax; U++)
                    this.grid[0][U] = this.grid[0][U - 1] + this.gap_penalty, this.tracebackGrid[0][U] = [!1, !1, !0];
                  for (var P = 1; P < this.iMax; P++)
                    this.grid[P][0] = this.grid[P - 1][0] + this.gap_penalty, this.tracebackGrid[P][0] = [!1, !0, !1];
                  for (var Z = 1; Z < this.iMax; Z++)
                    for (var D = 1; D < this.jMax; D++) {
                      var $ = void 0;
                      this.sequence1[Z - 1] === this.sequence2[D - 1] ? $ = this.grid[Z - 1][D - 1] + this.match_score : $ = this.grid[Z - 1][D - 1] + this.mismatch_penalty;
                      var _ = this.grid[Z - 1][D] + this.gap_penalty, Q = this.grid[Z][D - 1] + this.gap_penalty, ne = [$, _, Q], le = this.arrayAllMaxIndexes(ne);
                      this.grid[Z][D] = ne[le[0]], this.tracebackGrid[Z][D] = [le.includes(0), le.includes(1), le.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var U = [];
                  for (U.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); U[0]; ) {
                    var P = U[0], Z = this.tracebackGrid[P.pos[0]][P.pos[1]];
                    Z[0] && U.push({
                      pos: [P.pos[0] - 1, P.pos[1] - 1],
                      seq1: this.sequence1[P.pos[0] - 1] + P.seq1,
                      seq2: this.sequence2[P.pos[1] - 1] + P.seq2
                    }), Z[1] && U.push({
                      pos: [P.pos[0] - 1, P.pos[1]],
                      seq1: this.sequence1[P.pos[0] - 1] + P.seq1,
                      seq2: "-" + P.seq2
                    }), Z[2] && U.push({
                      pos: [P.pos[0], P.pos[1] - 1],
                      seq1: "-" + P.seq1,
                      seq2: this.sequence2[P.pos[1] - 1] + P.seq2
                    }), P.pos[0] === 0 && P.pos[1] === 0 && this.alignments.push({
                      sequence1: P.seq1,
                      sequence2: P.seq2
                    }), U.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(U, P) {
                  for (var Z = [], D = -1; (D = U.indexOf(P, D + 1)) !== -1; )
                    Z.push(D);
                  return Z;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(U) {
                  return this.getAllIndexes(U, Math.max.apply(null, U));
                }
              }]), L;
            }();
            ee.exports = w;
          },
          /* 26 */
          /***/
          function(ee, de, H) {
            var N = function() {
            };
            N.FDLayout = H(18), N.FDLayoutConstants = H(7), N.FDLayoutEdge = H(19), N.FDLayoutNode = H(20), N.DimensionD = H(21), N.HashMap = H(22), N.HashSet = H(23), N.IGeometry = H(8), N.IMath = H(9), N.Integer = H(10), N.Point = H(12), N.PointD = H(4), N.RandomSeed = H(16), N.RectangleD = H(13), N.Transform = H(17), N.UniqueIDGeneretor = H(14), N.Quicksort = H(24), N.LinkedList = H(11), N.LGraphObject = H(2), N.LGraph = H(5), N.LEdge = H(1), N.LGraphManager = H(6), N.LNode = H(3), N.Layout = H(15), N.LayoutConstants = H(0), N.NeedlemanWunsch = H(25), ee.exports = N;
          },
          /* 27 */
          /***/
          function(ee, de, H) {
            function N() {
              this.listeners = [];
            }
            var T = N.prototype;
            T.addListener = function(w, L) {
              this.listeners.push({
                event: w,
                callback: L
              });
            }, T.removeListener = function(w, L) {
              for (var z = this.listeners.length; z >= 0; z--) {
                var U = this.listeners[z];
                U.event === w && U.callback === L && this.listeners.splice(z, 1);
              }
            }, T.emit = function(w, L) {
              for (var z = 0; z < this.listeners.length; z++) {
                var U = this.listeners[z];
                w === U.event && U.callback(L);
              }
            }, ee.exports = N;
          }
          /******/
        ])
      );
    });
  }(Ji)), Ji.exports;
}
var Ul;
function Jp() {
  return Ul || (Ul = 1, function(me, he) {
    (function(de, H) {
      me.exports = H(Qp());
    })(Da, function(ee) {
      return (
        /******/
        function(de) {
          var H = {};
          function N(T) {
            if (H[T])
              return H[T].exports;
            var w = H[T] = {
              /******/
              i: T,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return de[T].call(w.exports, w, w.exports, N), w.l = !0, w.exports;
          }
          return N.m = de, N.c = H, N.i = function(T) {
            return T;
          }, N.d = function(T, w, L) {
            N.o(T, w) || Object.defineProperty(T, w, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: L
              /******/
            });
          }, N.n = function(T) {
            var w = T && T.__esModule ? (
              /******/
              function() {
                return T.default;
              }
            ) : (
              /******/
              function() {
                return T;
              }
            );
            return N.d(w, "a", w), w;
          }, N.o = function(T, w) {
            return Object.prototype.hasOwnProperty.call(T, w);
          }, N.p = "", N(N.s = 7);
        }([
          /* 0 */
          /***/
          function(de, H) {
            de.exports = ee;
          },
          /* 1 */
          /***/
          function(de, H, N) {
            var T = N(0).FDLayoutConstants;
            function w() {
            }
            for (var L in T)
              w[L] = T[L];
            w.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, w.DEFAULT_RADIAL_SEPARATION = T.DEFAULT_EDGE_LENGTH, w.DEFAULT_COMPONENT_SEPERATION = 60, w.TILE = !0, w.TILING_PADDING_VERTICAL = 10, w.TILING_PADDING_HORIZONTAL = 10, w.TREE_REDUCTION_ON_INCREMENTAL = !1, de.exports = w;
          },
          /* 2 */
          /***/
          function(de, H, N) {
            var T = N(0).FDLayoutEdge;
            function w(z, U, P) {
              T.call(this, z, U, P);
            }
            w.prototype = Object.create(T.prototype);
            for (var L in T)
              w[L] = T[L];
            de.exports = w;
          },
          /* 3 */
          /***/
          function(de, H, N) {
            var T = N(0).LGraph;
            function w(z, U, P) {
              T.call(this, z, U, P);
            }
            w.prototype = Object.create(T.prototype);
            for (var L in T)
              w[L] = T[L];
            de.exports = w;
          },
          /* 4 */
          /***/
          function(de, H, N) {
            var T = N(0).LGraphManager;
            function w(z) {
              T.call(this, z);
            }
            w.prototype = Object.create(T.prototype);
            for (var L in T)
              w[L] = T[L];
            de.exports = w;
          },
          /* 5 */
          /***/
          function(de, H, N) {
            var T = N(0).FDLayoutNode, w = N(0).IMath;
            function L(U, P, Z, D) {
              T.call(this, U, P, Z, D);
            }
            L.prototype = Object.create(T.prototype);
            for (var z in T)
              L[z] = T[z];
            L.prototype.move = function() {
              var U = this.graphManager.getLayout();
              this.displacementX = U.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = U.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > U.coolingFactor * U.maxNodeDisplacement && (this.displacementX = U.coolingFactor * U.maxNodeDisplacement * w.sign(this.displacementX)), Math.abs(this.displacementY) > U.coolingFactor * U.maxNodeDisplacement && (this.displacementY = U.coolingFactor * U.maxNodeDisplacement * w.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), U.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
            }, L.prototype.propogateDisplacementToChildren = function(U, P) {
              for (var Z = this.getChild().getNodes(), D, $ = 0; $ < Z.length; $++)
                D = Z[$], D.getChild() == null ? (D.moveBy(U, P), D.displacementX += U, D.displacementY += P) : D.propogateDisplacementToChildren(U, P);
            }, L.prototype.setPred1 = function(U) {
              this.pred1 = U;
            }, L.prototype.getPred1 = function() {
              return pred1;
            }, L.prototype.getPred2 = function() {
              return pred2;
            }, L.prototype.setNext = function(U) {
              this.next = U;
            }, L.prototype.getNext = function() {
              return next;
            }, L.prototype.setProcessed = function(U) {
              this.processed = U;
            }, L.prototype.isProcessed = function() {
              return processed;
            }, de.exports = L;
          },
          /* 6 */
          /***/
          function(de, H, N) {
            var T = N(0).FDLayout, w = N(4), L = N(3), z = N(5), U = N(2), P = N(1), Z = N(0).FDLayoutConstants, D = N(0).LayoutConstants, $ = N(0).Point, _ = N(0).PointD, Q = N(0).Layout, ne = N(0).Integer, le = N(0).IGeometry, J = N(0).LGraph, j = N(0).Transform;
            function Y() {
              T.call(this), this.toBeTiled = {};
            }
            Y.prototype = Object.create(T.prototype);
            for (var te in T)
              Y[te] = T[te];
            Y.prototype.newGraphManager = function() {
              var S = new w(this);
              return this.graphManager = S, S;
            }, Y.prototype.newGraph = function(S) {
              return new L(null, this.graphManager, S);
            }, Y.prototype.newNode = function(S) {
              return new z(this.graphManager, S);
            }, Y.prototype.newEdge = function(S) {
              return new U(null, null, S);
            }, Y.prototype.initParameters = function() {
              T.prototype.initParameters.call(this, arguments), this.isSubLayout || (P.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = P.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = P.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = Z.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = Z.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = Z.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = Z.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = Z.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = Z.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / Z.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = Z.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
            }, Y.prototype.layout = function() {
              var S = D.DEFAULT_CREATE_BENDS_AS_NEEDED;
              return S && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
            }, Y.prototype.classicLayout = function() {
              if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                if (P.TREE_REDUCTION_ON_INCREMENTAL) {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var V = new Set(this.getAllNodes()), R = this.nodesWithGravity.filter(function(pe) {
                    return V.has(pe);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(R);
                }
              } else {
                var S = this.getFlatForest();
                if (S.length > 0)
                  this.positionNodesRadially(S);
                else {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var V = new Set(this.getAllNodes()), R = this.nodesWithGravity.filter(function(W) {
                    return V.has(W);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(R), this.positionNodesRandomly();
                }
              }
              return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
            }, Y.prototype.tick = function() {
              if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = !0;
                else
                  return !0;
              if (this.totalIterations % Z.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.isConverged())
                  if (this.prunedNodesAll.length > 0)
                    this.isTreeGrowing = !0;
                  else
                    return !0;
                this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0)
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                    var S = new Set(this.getAllNodes()), V = this.nodesWithGravity.filter(function(ce) {
                      return S.has(ce);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(V), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = Z.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else
                    this.isTreeGrowing = !1, this.isGrowthFinished = !0;
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged())
                  return !0;
                this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = Z.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
              }
              var R = !this.isTreeGrowing && !this.isGrowthFinished, W = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
              return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(R, W), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
            }, Y.prototype.getPositionsData = function() {
              for (var S = this.graphManager.getAllNodes(), V = {}, R = 0; R < S.length; R++) {
                var W = S[R].rect, ce = S[R].id;
                V[ce] = {
                  id: ce,
                  x: W.getCenterX(),
                  y: W.getCenterY(),
                  w: W.width,
                  h: W.height
                };
              }
              return V;
            }, Y.prototype.runSpringEmbedder = function() {
              this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
              var S = !1;
              if (Z.ANIMATE === "during")
                this.emit("layoutstarted");
              else {
                for (; !S; )
                  S = this.tick();
                this.graphManager.updateBounds();
              }
            }, Y.prototype.calculateNodesToApplyGravitationTo = function() {
              var S = [], V, R = this.graphManager.getGraphs(), W = R.length, ce;
              for (ce = 0; ce < W; ce++)
                V = R[ce], V.updateConnected(), V.isConnected || (S = S.concat(V.getNodes()));
              return S;
            }, Y.prototype.createBendpoints = function() {
              var S = [];
              S = S.concat(this.graphManager.getAllEdges());
              var V = /* @__PURE__ */ new Set(), R;
              for (R = 0; R < S.length; R++) {
                var W = S[R];
                if (!V.has(W)) {
                  var ce = W.getSource(), pe = W.getTarget();
                  if (ce == pe)
                    W.getBendpoints().push(new _()), W.getBendpoints().push(new _()), this.createDummyNodesForBendpoints(W), V.add(W);
                  else {
                    var Oe = [];
                    if (Oe = Oe.concat(ce.getEdgeListToNode(pe)), Oe = Oe.concat(pe.getEdgeListToNode(ce)), !V.has(Oe[0])) {
                      if (Oe.length > 1) {
                        var Me;
                        for (Me = 0; Me < Oe.length; Me++) {
                          var Ye = Oe[Me];
                          Ye.getBendpoints().push(new _()), this.createDummyNodesForBendpoints(Ye);
                        }
                      }
                      Oe.forEach(function(at) {
                        V.add(at);
                      });
                    }
                  }
                }
                if (V.size == S.length)
                  break;
              }
            }, Y.prototype.positionNodesRadially = function(S) {
              for (var V = new $(0, 0), R = Math.ceil(Math.sqrt(S.length)), W = 0, ce = 0, pe = 0, Oe = new _(0, 0), Me = 0; Me < S.length; Me++) {
                Me % R == 0 && (pe = 0, ce = W, Me != 0 && (ce += P.DEFAULT_COMPONENT_SEPERATION), W = 0);
                var Ye = S[Me], at = Q.findCenterOfTree(Ye);
                V.x = pe, V.y = ce, Oe = Y.radialLayout(Ye, at, V), Oe.y > W && (W = Math.floor(Oe.y)), pe = Math.floor(Oe.x + P.DEFAULT_COMPONENT_SEPERATION);
              }
              this.transform(new _(D.WORLD_CENTER_X - Oe.x / 2, D.WORLD_CENTER_Y - Oe.y / 2));
            }, Y.radialLayout = function(S, V, R) {
              var W = Math.max(this.maxDiagonalInTree(S), P.DEFAULT_RADIAL_SEPARATION);
              Y.branchRadialLayout(V, null, 0, 359, 0, W);
              var ce = J.calculateBounds(S), pe = new j();
              pe.setDeviceOrgX(ce.getMinX()), pe.setDeviceOrgY(ce.getMinY()), pe.setWorldOrgX(R.x), pe.setWorldOrgY(R.y);
              for (var Oe = 0; Oe < S.length; Oe++) {
                var Me = S[Oe];
                Me.transform(pe);
              }
              var Ye = new _(ce.getMaxX(), ce.getMaxY());
              return pe.inverseTransformPoint(Ye);
            }, Y.branchRadialLayout = function(S, V, R, W, ce, pe) {
              var Oe = (W - R + 1) / 2;
              Oe < 0 && (Oe += 180);
              var Me = (Oe + R) % 360, Ye = Me * le.TWO_PI / 360, at = ce * Math.cos(Ye), dt = ce * Math.sin(Ye);
              S.setCenter(at, dt);
              var ke = [];
              ke = ke.concat(S.getEdges());
              var Ve = ke.length;
              V != null && Ve--;
              for (var Ze = 0, nt = ke.length, ht, it = S.getEdgesBetween(V); it.length > 1; ) {
                var tt = it[0];
                it.splice(0, 1);
                var yt = ke.indexOf(tt);
                yt >= 0 && ke.splice(yt, 1), nt--, Ve--;
              }
              V != null ? ht = (ke.indexOf(it[0]) + 1) % nt : ht = 0;
              for (var wt = Math.abs(W - R) / Ve, Pt = ht; Ze != Ve; Pt = ++Pt % nt) {
                var gt = ke[Pt].getOtherEnd(S);
                if (gt != V) {
                  var dr = (R + Ze * wt) % 360, Wt = (dr + wt) % 360;
                  Y.branchRadialLayout(gt, S, dr, Wt, ce + pe, pe), Ze++;
                }
              }
            }, Y.maxDiagonalInTree = function(S) {
              for (var V = ne.MIN_VALUE, R = 0; R < S.length; R++) {
                var W = S[R], ce = W.getDiagonal();
                ce > V && (V = ce);
              }
              return V;
            }, Y.prototype.calcRepulsionRange = function() {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            }, Y.prototype.groupZeroDegreeMembers = function() {
              var S = this, V = {};
              this.memberGroups = {}, this.idToDummyNode = {};
              for (var R = [], W = this.graphManager.getAllNodes(), ce = 0; ce < W.length; ce++) {
                var pe = W[ce], Oe = pe.getParent();
                this.getNodeDegreeWithChildren(pe) === 0 && (Oe.id == null || !this.getToBeTiled(Oe)) && R.push(pe);
              }
              for (var ce = 0; ce < R.length; ce++) {
                var pe = R[ce], Me = pe.getParent().id;
                typeof V[Me] > "u" && (V[Me] = []), V[Me] = V[Me].concat(pe);
              }
              Object.keys(V).forEach(function(Ye) {
                if (V[Ye].length > 1) {
                  var at = "DummyCompound_" + Ye;
                  S.memberGroups[at] = V[Ye];
                  var dt = V[Ye][0].getParent(), ke = new z(S.graphManager);
                  ke.id = at, ke.paddingLeft = dt.paddingLeft || 0, ke.paddingRight = dt.paddingRight || 0, ke.paddingBottom = dt.paddingBottom || 0, ke.paddingTop = dt.paddingTop || 0, S.idToDummyNode[at] = ke;
                  var Ve = S.getGraphManager().add(S.newGraph(), ke), Ze = dt.getChild();
                  Ze.add(ke);
                  for (var nt = 0; nt < V[Ye].length; nt++) {
                    var ht = V[Ye][nt];
                    Ze.remove(ht), Ve.add(ht);
                  }
                }
              });
            }, Y.prototype.clearCompounds = function() {
              var S = {}, V = {};
              this.performDFSOnCompounds();
              for (var R = 0; R < this.compoundOrder.length; R++)
                V[this.compoundOrder[R].id] = this.compoundOrder[R], S[this.compoundOrder[R].id] = [].concat(this.compoundOrder[R].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[R].getChild()), this.compoundOrder[R].child = null;
              this.graphManager.resetAllNodes(), this.tileCompoundMembers(S, V);
            }, Y.prototype.clearZeroDegreeMembers = function() {
              var S = this, V = this.tiledZeroDegreePack = [];
              Object.keys(this.memberGroups).forEach(function(R) {
                var W = S.idToDummyNode[R];
                V[R] = S.tileNodes(S.memberGroups[R], W.paddingLeft + W.paddingRight), W.rect.width = V[R].width, W.rect.height = V[R].height;
              });
            }, Y.prototype.repopulateCompounds = function() {
              for (var S = this.compoundOrder.length - 1; S >= 0; S--) {
                var V = this.compoundOrder[S], R = V.id, W = V.paddingLeft, ce = V.paddingTop;
                this.adjustLocations(this.tiledMemberPack[R], V.rect.x, V.rect.y, W, ce);
              }
            }, Y.prototype.repopulateZeroDegreeMembers = function() {
              var S = this, V = this.tiledZeroDegreePack;
              Object.keys(V).forEach(function(R) {
                var W = S.idToDummyNode[R], ce = W.paddingLeft, pe = W.paddingTop;
                S.adjustLocations(V[R], W.rect.x, W.rect.y, ce, pe);
              });
            }, Y.prototype.getToBeTiled = function(S) {
              var V = S.id;
              if (this.toBeTiled[V] != null)
                return this.toBeTiled[V];
              var R = S.getChild();
              if (R == null)
                return this.toBeTiled[V] = !1, !1;
              for (var W = R.getNodes(), ce = 0; ce < W.length; ce++) {
                var pe = W[ce];
                if (this.getNodeDegree(pe) > 0)
                  return this.toBeTiled[V] = !1, !1;
                if (pe.getChild() == null) {
                  this.toBeTiled[pe.id] = !1;
                  continue;
                }
                if (!this.getToBeTiled(pe))
                  return this.toBeTiled[V] = !1, !1;
              }
              return this.toBeTiled[V] = !0, !0;
            }, Y.prototype.getNodeDegree = function(S) {
              S.id;
              for (var V = S.getEdges(), R = 0, W = 0; W < V.length; W++) {
                var ce = V[W];
                ce.getSource().id !== ce.getTarget().id && (R = R + 1);
              }
              return R;
            }, Y.prototype.getNodeDegreeWithChildren = function(S) {
              var V = this.getNodeDegree(S);
              if (S.getChild() == null)
                return V;
              for (var R = S.getChild().getNodes(), W = 0; W < R.length; W++) {
                var ce = R[W];
                V += this.getNodeDegreeWithChildren(ce);
              }
              return V;
            }, Y.prototype.performDFSOnCompounds = function() {
              this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
            }, Y.prototype.fillCompexOrderByDFS = function(S) {
              for (var V = 0; V < S.length; V++) {
                var R = S[V];
                R.getChild() != null && this.fillCompexOrderByDFS(R.getChild().getNodes()), this.getToBeTiled(R) && this.compoundOrder.push(R);
              }
            }, Y.prototype.adjustLocations = function(S, V, R, W, ce) {
              V += W, R += ce;
              for (var pe = V, Oe = 0; Oe < S.rows.length; Oe++) {
                var Me = S.rows[Oe];
                V = pe;
                for (var Ye = 0, at = 0; at < Me.length; at++) {
                  var dt = Me[at];
                  dt.rect.x = V, dt.rect.y = R, V += dt.rect.width + S.horizontalPadding, dt.rect.height > Ye && (Ye = dt.rect.height);
                }
                R += Ye + S.verticalPadding;
              }
            }, Y.prototype.tileCompoundMembers = function(S, V) {
              var R = this;
              this.tiledMemberPack = [], Object.keys(S).forEach(function(W) {
                var ce = V[W];
                R.tiledMemberPack[W] = R.tileNodes(S[W], ce.paddingLeft + ce.paddingRight), ce.rect.width = R.tiledMemberPack[W].width, ce.rect.height = R.tiledMemberPack[W].height;
              });
            }, Y.prototype.tileNodes = function(S, V) {
              var R = P.TILING_PADDING_VERTICAL, W = P.TILING_PADDING_HORIZONTAL, ce = {
                rows: [],
                rowWidth: [],
                rowHeight: [],
                width: 0,
                height: V,
                // assume minHeight equals to minWidth
                verticalPadding: R,
                horizontalPadding: W
              };
              S.sort(function(Me, Ye) {
                return Me.rect.width * Me.rect.height > Ye.rect.width * Ye.rect.height ? -1 : Me.rect.width * Me.rect.height < Ye.rect.width * Ye.rect.height ? 1 : 0;
              });
              for (var pe = 0; pe < S.length; pe++) {
                var Oe = S[pe];
                ce.rows.length == 0 ? this.insertNodeToRow(ce, Oe, 0, V) : this.canAddHorizontal(ce, Oe.rect.width, Oe.rect.height) ? this.insertNodeToRow(ce, Oe, this.getShortestRowIndex(ce), V) : this.insertNodeToRow(ce, Oe, ce.rows.length, V), this.shiftToLastRow(ce);
              }
              return ce;
            }, Y.prototype.insertNodeToRow = function(S, V, R, W) {
              var ce = W;
              if (R == S.rows.length) {
                var pe = [];
                S.rows.push(pe), S.rowWidth.push(ce), S.rowHeight.push(0);
              }
              var Oe = S.rowWidth[R] + V.rect.width;
              S.rows[R].length > 0 && (Oe += S.horizontalPadding), S.rowWidth[R] = Oe, S.width < Oe && (S.width = Oe);
              var Me = V.rect.height;
              R > 0 && (Me += S.verticalPadding);
              var Ye = 0;
              Me > S.rowHeight[R] && (Ye = S.rowHeight[R], S.rowHeight[R] = Me, Ye = S.rowHeight[R] - Ye), S.height += Ye, S.rows[R].push(V);
            }, Y.prototype.getShortestRowIndex = function(S) {
              for (var V = -1, R = Number.MAX_VALUE, W = 0; W < S.rows.length; W++)
                S.rowWidth[W] < R && (V = W, R = S.rowWidth[W]);
              return V;
            }, Y.prototype.getLongestRowIndex = function(S) {
              for (var V = -1, R = Number.MIN_VALUE, W = 0; W < S.rows.length; W++)
                S.rowWidth[W] > R && (V = W, R = S.rowWidth[W]);
              return V;
            }, Y.prototype.canAddHorizontal = function(S, V, R) {
              var W = this.getShortestRowIndex(S);
              if (W < 0)
                return !0;
              var ce = S.rowWidth[W];
              if (ce + S.horizontalPadding + V <= S.width)
                return !0;
              var pe = 0;
              S.rowHeight[W] < R && W > 0 && (pe = R + S.verticalPadding - S.rowHeight[W]);
              var Oe;
              S.width - ce >= V + S.horizontalPadding ? Oe = (S.height + pe) / (ce + V + S.horizontalPadding) : Oe = (S.height + pe) / S.width, pe = R + S.verticalPadding;
              var Me;
              return S.width < V ? Me = (S.height + pe) / V : Me = (S.height + pe) / S.width, Me < 1 && (Me = 1 / Me), Oe < 1 && (Oe = 1 / Oe), Oe < Me;
            }, Y.prototype.shiftToLastRow = function(S) {
              var V = this.getLongestRowIndex(S), R = S.rowWidth.length - 1, W = S.rows[V], ce = W[W.length - 1], pe = ce.width + S.horizontalPadding;
              if (S.width - S.rowWidth[R] > pe && V != R) {
                W.splice(-1, 1), S.rows[R].push(ce), S.rowWidth[V] = S.rowWidth[V] - pe, S.rowWidth[R] = S.rowWidth[R] + pe, S.width = S.rowWidth[instance.getLongestRowIndex(S)];
                for (var Oe = Number.MIN_VALUE, Me = 0; Me < W.length; Me++)
                  W[Me].height > Oe && (Oe = W[Me].height);
                V > 0 && (Oe += S.verticalPadding);
                var Ye = S.rowHeight[V] + S.rowHeight[R];
                S.rowHeight[V] = Oe, S.rowHeight[R] < ce.height + S.verticalPadding && (S.rowHeight[R] = ce.height + S.verticalPadding);
                var at = S.rowHeight[V] + S.rowHeight[R];
                S.height += at - Ye, this.shiftToLastRow(S);
              }
            }, Y.prototype.tilingPreLayout = function() {
              P.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
            }, Y.prototype.tilingPostLayout = function() {
              P.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
            }, Y.prototype.reduceTrees = function() {
              for (var S = [], V = !0, R; V; ) {
                var W = this.graphManager.getAllNodes(), ce = [];
                V = !1;
                for (var pe = 0; pe < W.length; pe++)
                  R = W[pe], R.getEdges().length == 1 && !R.getEdges()[0].isInterGraph && R.getChild() == null && (ce.push([R, R.getEdges()[0], R.getOwner()]), V = !0);
                if (V == !0) {
                  for (var Oe = [], Me = 0; Me < ce.length; Me++)
                    ce[Me][0].getEdges().length == 1 && (Oe.push(ce[Me]), ce[Me][0].getOwner().remove(ce[Me][0]));
                  S.push(Oe), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = S;
            }, Y.prototype.growTree = function(S) {
              for (var V = S.length, R = S[V - 1], W, ce = 0; ce < R.length; ce++)
                W = R[ce], this.findPlaceforPrunedNode(W), W[2].add(W[0]), W[2].add(W[1], W[1].source, W[1].target);
              S.splice(S.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
            }, Y.prototype.findPlaceforPrunedNode = function(S) {
              var V, R, W = S[0];
              W == S[1].source ? R = S[1].target : R = S[1].source;
              var ce = R.startX, pe = R.finishX, Oe = R.startY, Me = R.finishY, Ye = 0, at = 0, dt = 0, ke = 0, Ve = [Ye, dt, at, ke];
              if (Oe > 0)
                for (var Ze = ce; Ze <= pe; Ze++)
                  Ve[0] += this.grid[Ze][Oe - 1].length + this.grid[Ze][Oe].length - 1;
              if (pe < this.grid.length - 1)
                for (var Ze = Oe; Ze <= Me; Ze++)
                  Ve[1] += this.grid[pe + 1][Ze].length + this.grid[pe][Ze].length - 1;
              if (Me < this.grid[0].length - 1)
                for (var Ze = ce; Ze <= pe; Ze++)
                  Ve[2] += this.grid[Ze][Me + 1].length + this.grid[Ze][Me].length - 1;
              if (ce > 0)
                for (var Ze = Oe; Ze <= Me; Ze++)
                  Ve[3] += this.grid[ce - 1][Ze].length + this.grid[ce][Ze].length - 1;
              for (var nt = ne.MAX_VALUE, ht, it, tt = 0; tt < Ve.length; tt++)
                Ve[tt] < nt ? (nt = Ve[tt], ht = 1, it = tt) : Ve[tt] == nt && ht++;
              if (ht == 3 && nt == 0)
                Ve[0] == 0 && Ve[1] == 0 && Ve[2] == 0 ? V = 1 : Ve[0] == 0 && Ve[1] == 0 && Ve[3] == 0 ? V = 0 : Ve[0] == 0 && Ve[2] == 0 && Ve[3] == 0 ? V = 3 : Ve[1] == 0 && Ve[2] == 0 && Ve[3] == 0 && (V = 2);
              else if (ht == 2 && nt == 0) {
                var yt = Math.floor(Math.random() * 2);
                Ve[0] == 0 && Ve[1] == 0 ? yt == 0 ? V = 0 : V = 1 : Ve[0] == 0 && Ve[2] == 0 ? yt == 0 ? V = 0 : V = 2 : Ve[0] == 0 && Ve[3] == 0 ? yt == 0 ? V = 0 : V = 3 : Ve[1] == 0 && Ve[2] == 0 ? yt == 0 ? V = 1 : V = 2 : Ve[1] == 0 && Ve[3] == 0 ? yt == 0 ? V = 1 : V = 3 : yt == 0 ? V = 2 : V = 3;
              } else if (ht == 4 && nt == 0) {
                var yt = Math.floor(Math.random() * 4);
                V = yt;
              } else
                V = it;
              V == 0 ? W.setCenter(R.getCenterX(), R.getCenterY() - R.getHeight() / 2 - Z.DEFAULT_EDGE_LENGTH - W.getHeight() / 2) : V == 1 ? W.setCenter(R.getCenterX() + R.getWidth() / 2 + Z.DEFAULT_EDGE_LENGTH + W.getWidth() / 2, R.getCenterY()) : V == 2 ? W.setCenter(R.getCenterX(), R.getCenterY() + R.getHeight() / 2 + Z.DEFAULT_EDGE_LENGTH + W.getHeight() / 2) : W.setCenter(R.getCenterX() - R.getWidth() / 2 - Z.DEFAULT_EDGE_LENGTH - W.getWidth() / 2, R.getCenterY());
            }, de.exports = Y;
          },
          /* 7 */
          /***/
          function(de, H, N) {
            var T = {};
            T.layoutBase = N(0), T.CoSEConstants = N(1), T.CoSEEdge = N(2), T.CoSEGraph = N(3), T.CoSEGraphManager = N(4), T.CoSELayout = N(6), T.CoSENode = N(5), de.exports = T;
          }
          /******/
        ])
      );
    });
  }(Qi)), Qi.exports;
}
(function(me, he) {
  (function(de, H) {
    me.exports = H(Jp());
  })(Da, function(ee) {
    return (
      /******/
      function(de) {
        var H = {};
        function N(T) {
          if (H[T])
            return H[T].exports;
          var w = H[T] = {
            /******/
            i: T,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return de[T].call(w.exports, w, w.exports, N), w.l = !0, w.exports;
        }
        return N.m = de, N.c = H, N.i = function(T) {
          return T;
        }, N.d = function(T, w, L) {
          N.o(T, w) || Object.defineProperty(T, w, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: L
            /******/
          });
        }, N.n = function(T) {
          var w = T && T.__esModule ? (
            /******/
            function() {
              return T.default;
            }
          ) : (
            /******/
            function() {
              return T;
            }
          );
          return N.d(w, "a", w), w;
        }, N.o = function(T, w) {
          return Object.prototype.hasOwnProperty.call(T, w);
        }, N.p = "", N(N.s = 1);
      }([
        /* 0 */
        /***/
        function(de, H) {
          de.exports = ee;
        },
        /* 1 */
        /***/
        function(de, H, N) {
          var T = N(0).layoutBase.LayoutConstants, w = N(0).layoutBase.FDLayoutConstants, L = N(0).CoSEConstants, z = N(0).CoSELayout, U = N(0).CoSENode, P = N(0).layoutBase.PointD, Z = N(0).layoutBase.DimensionD, D = {
            // Called on `layoutready`
            ready: function() {
            },
            // Called on `layoutstop`
            stop: function() {
            },
            // 'draft', 'default' or 'proof" 
            // - 'draft' fast cooling rate 
            // - 'default' moderate cooling rate 
            // - "proof" slow cooling rate
            quality: "default",
            // include labels in node dimensions
            nodeDimensionsIncludeLabels: !1,
            // number of ticks per frame; higher is faster but more jerky
            refresh: 30,
            // Whether to fit the network view after when done
            fit: !0,
            // Padding on fit
            padding: 10,
            // Whether to enable incremental mode
            randomize: !0,
            // Node repulsion (non overlapping) multiplier
            nodeRepulsion: 4500,
            // Ideal edge (non nested) length
            idealEdgeLength: 50,
            // Divisor to compute edge forces
            edgeElasticity: 0.45,
            // Nesting factor (multiplier) to compute ideal edge length for nested edges
            nestingFactor: 0.1,
            // Gravity force (constant)
            gravity: 0.25,
            // Maximum number of iterations to perform
            numIter: 2500,
            // For enabling tiling
            tile: !0,
            // Type of layout animation. The option set is {'during', 'end', false}
            animate: "end",
            // Duration for animate:end
            animationDuration: 500,
            // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
            tilingPaddingVertical: 10,
            // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
            tilingPaddingHorizontal: 10,
            // Gravity range (constant) for compounds
            gravityRangeCompound: 1.5,
            // Gravity force (constant) for compounds
            gravityCompound: 1,
            // Gravity range (constant)
            gravityRange: 3.8,
            // Initial cooling factor for incremental layout
            initialEnergyOnIncremental: 0.5
          };
          function $(le, J) {
            var j = {};
            for (var Y in le)
              j[Y] = le[Y];
            for (var Y in J)
              j[Y] = J[Y];
            return j;
          }
          function _(le) {
            this.options = $(D, le), Q(this.options);
          }
          var Q = function(J) {
            J.nodeRepulsion != null && (L.DEFAULT_REPULSION_STRENGTH = w.DEFAULT_REPULSION_STRENGTH = J.nodeRepulsion), J.idealEdgeLength != null && (L.DEFAULT_EDGE_LENGTH = w.DEFAULT_EDGE_LENGTH = J.idealEdgeLength), J.edgeElasticity != null && (L.DEFAULT_SPRING_STRENGTH = w.DEFAULT_SPRING_STRENGTH = J.edgeElasticity), J.nestingFactor != null && (L.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = w.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = J.nestingFactor), J.gravity != null && (L.DEFAULT_GRAVITY_STRENGTH = w.DEFAULT_GRAVITY_STRENGTH = J.gravity), J.numIter != null && (L.MAX_ITERATIONS = w.MAX_ITERATIONS = J.numIter), J.gravityRange != null && (L.DEFAULT_GRAVITY_RANGE_FACTOR = w.DEFAULT_GRAVITY_RANGE_FACTOR = J.gravityRange), J.gravityCompound != null && (L.DEFAULT_COMPOUND_GRAVITY_STRENGTH = w.DEFAULT_COMPOUND_GRAVITY_STRENGTH = J.gravityCompound), J.gravityRangeCompound != null && (L.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = w.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = J.gravityRangeCompound), J.initialEnergyOnIncremental != null && (L.DEFAULT_COOLING_FACTOR_INCREMENTAL = w.DEFAULT_COOLING_FACTOR_INCREMENTAL = J.initialEnergyOnIncremental), J.quality == "draft" ? T.QUALITY = 0 : J.quality == "proof" ? T.QUALITY = 2 : T.QUALITY = 1, L.NODE_DIMENSIONS_INCLUDE_LABELS = w.NODE_DIMENSIONS_INCLUDE_LABELS = T.NODE_DIMENSIONS_INCLUDE_LABELS = J.nodeDimensionsIncludeLabels, L.DEFAULT_INCREMENTAL = w.DEFAULT_INCREMENTAL = T.DEFAULT_INCREMENTAL = !J.randomize, L.ANIMATE = w.ANIMATE = T.ANIMATE = J.animate, L.TILE = J.tile, L.TILING_PADDING_VERTICAL = typeof J.tilingPaddingVertical == "function" ? J.tilingPaddingVertical.call() : J.tilingPaddingVertical, L.TILING_PADDING_HORIZONTAL = typeof J.tilingPaddingHorizontal == "function" ? J.tilingPaddingHorizontal.call() : J.tilingPaddingHorizontal;
          };
          _.prototype.run = function() {
            var le, J, j = this.options;
            this.idToLNode = {};
            var Y = this.layout = new z(), te = this;
            te.stopped = !1, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
            var S = Y.newGraphManager();
            this.gm = S;
            var V = this.options.eles.nodes(), R = this.options.eles.edges();
            this.root = S.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(V), Y);
            for (var W = 0; W < R.length; W++) {
              var ce = R[W], pe = this.idToLNode[ce.data("source")], Oe = this.idToLNode[ce.data("target")];
              if (pe !== Oe && pe.getEdgesBetween(Oe).length == 0) {
                var Me = S.add(Y.newEdge(), pe, Oe);
                Me.id = ce.id();
              }
            }
            var Ye = function(ke, Ve) {
              typeof ke == "number" && (ke = Ve);
              var Ze = ke.data("id"), nt = te.idToLNode[Ze];
              return {
                x: nt.getRect().getCenterX(),
                y: nt.getRect().getCenterY()
              };
            }, at = function dt() {
              for (var ke = function() {
                j.fit && j.cy.fit(j.eles, j.padding), le || (le = !0, te.cy.one("layoutready", j.ready), te.cy.trigger({ type: "layoutready", layout: te }));
              }, Ve = te.options.refresh, Ze, nt = 0; nt < Ve && !Ze; nt++)
                Ze = te.stopped || te.layout.tick();
              if (Ze) {
                Y.checkLayoutSuccess() && !Y.isSubLayout && Y.doPostLayout(), Y.tilingPostLayout && Y.tilingPostLayout(), Y.isLayoutFinished = !0, te.options.eles.nodes().positions(Ye), ke(), te.cy.one("layoutstop", te.options.stop), te.cy.trigger({ type: "layoutstop", layout: te }), J && cancelAnimationFrame(J), le = !1;
                return;
              }
              var ht = te.layout.getPositionsData();
              j.eles.nodes().positions(function(it, tt) {
                if (typeof it == "number" && (it = tt), !it.isParent()) {
                  for (var yt = it.id(), wt = ht[yt], Pt = it; wt == null && (wt = ht[Pt.data("parent")] || ht["DummyCompound_" + Pt.data("parent")], ht[yt] = wt, Pt = Pt.parent()[0], Pt != null); )
                    ;
                  return wt != null ? {
                    x: wt.x,
                    y: wt.y
                  } : {
                    x: it.position("x"),
                    y: it.position("y")
                  };
                }
              }), ke(), J = requestAnimationFrame(dt);
            };
            return Y.addListener("layoutstarted", function() {
              te.options.animate === "during" && (J = requestAnimationFrame(at));
            }), Y.runLayout(), this.options.animate !== "during" && (te.options.eles.nodes().not(":parent").layoutPositions(te, te.options, Ye), le = !1), this;
          }, _.prototype.getTopMostNodes = function(le) {
            for (var J = {}, j = 0; j < le.length; j++)
              J[le[j].id()] = !0;
            var Y = le.filter(function(te, S) {
              typeof te == "number" && (te = S);
              for (var V = te.parent()[0]; V != null; ) {
                if (J[V.id()])
                  return !1;
                V = V.parent()[0];
              }
              return !0;
            });
            return Y;
          }, _.prototype.processChildrenList = function(le, J, j) {
            for (var Y = J.length, te = 0; te < Y; te++) {
              var S = J[te], V = S.children(), R, W = S.layoutDimensions({
                nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
              });
              if (S.outerWidth() != null && S.outerHeight() != null ? R = le.add(new U(j.graphManager, new P(S.position("x") - W.w / 2, S.position("y") - W.h / 2), new Z(parseFloat(W.w), parseFloat(W.h)))) : R = le.add(new U(this.graphManager)), R.id = S.data("id"), R.paddingLeft = parseInt(S.css("padding")), R.paddingTop = parseInt(S.css("padding")), R.paddingRight = parseInt(S.css("padding")), R.paddingBottom = parseInt(S.css("padding")), this.options.nodeDimensionsIncludeLabels && S.isParent()) {
                var ce = S.boundingBox({ includeLabels: !0, includeNodes: !1 }).w, pe = S.boundingBox({ includeLabels: !0, includeNodes: !1 }).h, Oe = S.css("text-halign");
                R.labelWidth = ce, R.labelHeight = pe, R.labelPos = Oe;
              }
              if (this.idToLNode[S.data("id")] = R, isNaN(R.rect.x) && (R.rect.x = 0), isNaN(R.rect.y) && (R.rect.y = 0), V != null && V.length > 0) {
                var Me;
                Me = j.getGraphManager().add(j.newGraph(), R), this.processChildrenList(Me, V, j);
              }
            }
          }, _.prototype.stop = function() {
            return this.stopped = !0, this;
          };
          var ne = function(J) {
            J("layout", "cose-bilkent", _);
          };
          typeof cytoscape < "u" && ne(cytoscape), de.exports = ne;
        }
        /******/
      ])
    );
  });
})(Jl);
var jp = Jl.exports;
const ey = /* @__PURE__ */ Yl(jp);
Ql.use(ey);
function jl(me, he, ee, de) {
  Kl.drawNode(me, he, ee, de), he.children && he.children.forEach((H, N) => {
    jl(me, H, ee < 0 ? N : ee, de);
  });
}
function ty(me, he) {
  he.edges().map((ee, de) => {
    const H = ee.data();
    if (ee[0]._private.bodyBounds) {
      const N = ee[0]._private.rscratch;
      Wr.trace("Edge: ", de, H), me.insert("path").attr(
        "d",
        `M ${N.startX},${N.startY} L ${N.midX},${N.midY} L${N.endX},${N.endY} `
      ).attr("class", "edge section-edge-" + H.section + " edge-depth-" + H.depth);
    }
  });
}
function eu(me, he, ee, de) {
  he.add({
    group: "nodes",
    data: {
      id: me.id,
      labelText: me.descr,
      height: me.height,
      width: me.width,
      level: de,
      nodeId: me.id,
      padding: me.padding,
      type: me.type
    },
    position: {
      x: me.x,
      y: me.y
    }
  }), me.children && me.children.forEach((H) => {
    eu(H, he, ee, de + 1), he.add({
      group: "edges",
      data: {
        id: `${me.id}_${H.id}`,
        source: me.id,
        target: H.id,
        depth: de,
        section: H.section
      }
    });
  });
}
function ry(me, he) {
  return new Promise((ee) => {
    const de = ni("body").append("div").attr("id", "cy").attr("style", "display:none"), H = Ql({
      container: document.getElementById("cy"),
      // container to render in
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    de.remove(), eu(me, H, he, 0), H.nodes().forEach(function(N) {
      N.layoutDimensions = () => {
        const T = N.data();
        return { w: T.width, h: T.height };
      };
    }), H.layout({
      name: "cose-bilkent",
      quality: "proof",
      // headless: true,
      styleEnabled: !1,
      animate: !1
    }).run(), H.ready((N) => {
      Wr.info("Ready", N), ee(H);
    });
  });
}
function ay(me) {
  me.nodes().map((he, ee) => {
    const de = he.data();
    de.x = he.position().x, de.y = he.position().y, Kl.positionNode(de);
    const H = ts(de.nodeId);
    Wr.info("Id:", ee, "Position: (", he.position().x, ", ", he.position().y, ")", de), H.attr(
      "transform",
      `translate(${he.position().x - de.width / 2}, ${he.position().y - de.height / 2})`
    ), H.attr("attr", `apa-${ee})`);
  });
}
const ny = async (me, he, ee, de) => {
  const H = sn();
  H.htmlLabels = !1, Wr.debug(`Rendering mindmap diagram
` + me, de.parser);
  const N = sn().securityLevel;
  let T;
  N === "sandbox" && (T = ni("#i" + he));
  const L = (N === "sandbox" ? ni(T.nodes()[0].contentDocument.body) : ni("body")).select("#" + he);
  L.append("g");
  const z = de.db.getMindmap(), U = L.append("g");
  U.attr("class", "mindmap-edges");
  const P = L.append("g");
  P.attr("class", "mindmap-nodes"), jl(P, z, -1, H);
  const Z = await ry(z, H);
  ty(U, Z), ay(Z), Tp(void 0, L, H.mindmap.padding, H.mindmap.useMaxWidth);
}, iy = {
  draw: ny
}, sy = (me) => {
  let he = "";
  for (let ee = 0; ee < me.THEME_COLOR_LIMIT; ee++)
    me["lineColor" + ee] = me["lineColor" + ee] || me["cScaleInv" + ee], Cp(me["lineColor" + ee]) ? me["lineColor" + ee] = Dp(me["lineColor" + ee], 20) : me["lineColor" + ee] = Lp(me["lineColor" + ee], 20);
  for (let ee = 0; ee < me.THEME_COLOR_LIMIT; ee++) {
    const de = "" + (17 - 3 * ee);
    he += `
    .section-${ee - 1} rect, .section-${ee - 1} path, .section-${ee - 1} circle, .section-${ee - 1} polygon, .section-${ee - 1} path  {
      fill: ${me["cScale" + ee]};
    }
    .section-${ee - 1} text {
     fill: ${me["cScaleLabel" + ee]};
    }
    .node-icon-${ee - 1} {
      font-size: 40px;
      color: ${me["cScaleLabel" + ee]};
    }
    .section-edge-${ee - 1}{
      stroke: ${me["cScale" + ee]};
    }
    .edge-depth-${ee - 1}{
      stroke-width: ${de};
    }
    .section-${ee - 1} line {
      stroke: ${me["cScaleInv" + ee]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return he;
}, oy = (me) => `
  .edge {
    stroke-width: 3;
  }
  ${sy(me)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${me.git0};
  }
  .section-root text {
    fill: ${me.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, ly = oy, hy = {
  db: Gp,
  renderer: iy,
  parser: Ap,
  styles: ly
};
export {
  hy as diagram
};
