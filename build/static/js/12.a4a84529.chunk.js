(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[12],{184:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var n="assets/tokenid/issuingBox",i="/dex/tokens/tokenid/unspentSellOrders",s="/dex/tokens/tokenid/unspentBuyOrders",l="/assets/issuingBoxes",r="/assets/issuingBoxes/total"},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(4),i=a(5),s=a(7),l=a(6),r=a(0),c=a.n(r),o=a(17),b=a(22),m=(a(186),a(10)),p=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?c.a.createElement("div",{className:"bi-paginate-simple"},0===this.props.forcePage?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},c.a.createElement(m.i,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0)},c.a.createElement(m.i,{className:"bi-paginate-simple__btn-icon"})),0===this.props.forcePage?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},c.a.createElement(m.b,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1)},c.a.createElement(m.b,{className:"bi-paginate-simple__btn-icon"})),c.a.createElement("span",{className:"bi-paginate-simple__status"},c.a.createElement(o.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})),c.a.createElement("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile"},c.a.createElement(o.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})),this.props.forcePage===e-1?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},c.a.createElement(m.b,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1)},c.a.createElement(m.b,{className:"bi-paginate-simple__btn-icon"})),this.props.forcePage===e-1?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},c.a.createElement(m.i,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1)},c.a.createElement(m.i,{className:"bi-paginate-simple__btn-icon"}))):null}}]),a}(c.a.Component)},186:function(e,t,a){},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(4),i=a(5),s=a(7),l=a(6),r=a(24),c=a.n(r),o=a(0),b=a.n(o),m=a(22),p=(a(244),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return b.a.createElement("div",{className:"bi-limit-selector"},b.a.createElement("span",{className:"bi-limit-selector__label"},this.props.label),this.props.items.map((function(t,a){var n=c()({"bi-btn":!0,"bi-btn--flat":!0,"bi-limit-selector__item":!0,"bi-limit-selector__item--selected":t===e.props.selected});return b.a.createElement(m.Link,{className:n,key:a,to:e.props.getLimitLink(t)},t)})))}}]),a}(b.a.PureComponent))},244:function(e,t,a){},245:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(53),i=a(26),s=a.n(i),l=function(e,t,a,i){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return e(Object(n.startStructFetch)(t)),s.a[a](i,l).then((function(e){return e.body||e.data})).then((function(a){if(!a)return e(Object(n.stopStructFetch)(t,a)),Promise.resolve(a);var i=a.errors||a.error;return i?(e(Object(n.stopStructFetch)(t,new Error(i))),Promise.reject(new Error(i))):(e(Object(n.stopStructFetch)(t,a)),Promise.resolve(a))})).catch((function(a){return e(Object(n.stopStructFetch)(t,a)),Promise.reject(a)}))}},590:function(e,t,a){},591:function(e,t,a){},592:function(e,t,a){},598:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(4),s=a(5),l=a(9),r=a(7),c=a(6),o=a(35),b=a.n(o),m=a(0),p=a.n(m),_=a(52),u=a.n(_),d=a(17),f=a(18),h=a(12),k=(a(590),a(243)),g=a(185),E=a(11),v=a(245),N=a(184),y=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"getAllIssuedTokens",value:function(t,a){var n=a.limit,i=a.offset;return Object(v.a)(t,N.a,"get","".concat(e.apiUrl,"/assets/issuingBoxes"),{params:{limit:n,offset:i}})}},{key:"getTotalIssuedTokens",value:function(t,a){var n=a.limit;return Object(v.a)(t,N.b,"get","".concat(e.apiUrl,"/assets/issuingBoxes"),{params:{limit:n}})}},{key:"apiUrl",get:function(){return"".concat(E.a.apiUrl)}}]),e}(),O=a(68),j={getTokens:function(e){return function(t){return y.getAllIssuedTokens(t,e).then((function(a){t({payload:{offset:e.offset||0},type:O.a})}))}}},x=a(53),P=function(e){return Object(x.getStruct)(N.a)(e)},w=a(33),L=a.n(w);function U(e,t,a){if(void 0===a&&(a={}),!t.codes){t.codes={};for(var n=0;n<t.chars.length;++n)t.codes[t.chars[n]]=n}if(!a.loose&&e.length*t.bits&7)throw new SyntaxError("Invalid padding");for(var i=e.length;"="===e[i-1];)if(--i,!a.loose&&!((e.length-i)*t.bits&7))throw new SyntaxError("Invalid padding");for(var s=new(a.out||Uint8Array)(i*t.bits/8|0),l=0,r=0,c=0,o=0;o<i;++o){var b=t.codes[e[o]];if(void 0===b)throw new SyntaxError("Invalid character "+e[o]);r=r<<t.bits|b,(l+=t.bits)>=8&&(l-=8,s[c++]=255&r>>l)}if(l>=t.bits||255&r<<8-l)throw new SyntaxError("Unexpected end of data");return s}var S={chars:"0123456789ABCDEF",bits:4},T=function(e,t){return U(e.toUpperCase(),S,t)},I=a(3),F=a(10),R=(a(591),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-blocks-table-header bi-blocks-table__row bi-table__row"},p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.id"}),p.a.createElement(F.q,{className:"bi-blocks-table-header__sort-icon"}),p.a.createElement(F.o,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),p.a.createElement(F.p,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.name"}),p.a.createElement(F.q,{className:"bi-blocks-table-header__sort-icon"}),p.a.createElement(F.o,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),p.a.createElement(F.p,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.amount"}),p.a.createElement(F.q,{className:"bi-blocks-table-header__sort-icon"}),p.a.createElement(F.o,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),p.a.createElement(F.p,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.description"}),p.a.createElement(F.q,{className:"bi-blocks-table-header__sort-icon"}),p.a.createElement(F.o,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),p.a.createElement(F.p,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})))}}]),a}(p.a.Component)),B=Object(I.o)(R),C=(a(592),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-blocks-table"},this.props.tokens?this.renderTable():null)}},{key:"renderTable",value:function(){return p.a.createElement("div",{className:"bi-blocks-table__body bi-table"},p.a.createElement(B,null),this.props.tokens.map((function(e){return p.a.createElement("div",{className:"bi-blocks-table__row bi-table__row",key:e.assets[0].tokenId},p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.id"})),p.a.createElement("input",{className:"bi-tokens-table__input",type:"text",value:e.assets[0].tokenId,readOnly:!0})),e.additionalRegisters.R4&&p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.name"})),new TextDecoder("utf-8").decode(T(e.additionalRegisters.R4))),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.amount"})),p.a.createElement("input",{className:"bi-tokens-table__input",type:"text",value:L()({integerSeparator:" "})(e.assets[0].amount),readOnly:!0})),e.additionalRegisters.R5&&p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.description"})),new TextDecoder("utf-8").decode(T(e.additionalRegisters.R5))))})))}}]),a}(p.a.Component)),q=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).params=void 0,n.getPageUrl=n.getPageUrl.bind(Object(l.a)(n)),n.getLimitLink=n.getLimitLink.bind(Object(l.a)(n)),n.params=n.getParams(),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.reloadTokens(this.params)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.getParams();JSON.stringify(t)!==JSON.stringify(this.params)&&(this.params=t,this.reloadTokens(this.params))}},{key:"render",value:function(){return p.a.createElement("div",{className:"bi-data g-flex-column g-flex-column__item-fixed"},p.a.createElement(d.a,{id:"common.pages.issued-tokens.title"},(function(e){return p.a.createElement(u.a,null,p.a.createElement("title",null,e))})),p.a.createElement("div",{className:"bi-data__header g-flex-column__item-fixed g-flex"},p.a.createElement("div",{className:"bi-data__title g-flex__item"},p.a.createElement(d.a,{id:"components.issued-tokens.title"}))),this.props.tokens.data&&0===this.props.tokens.data.total&&p.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},p.a.createElement(d.a,{id:"components.data.wrong-query"})),null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&p.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},p.a.createElement(C,{tokens:this.props.tokens.data.items,isFetching:this.props.tokens.isFetching})),null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&p.a.createElement("div",{className:"bi-data__footer g-flex-column__item-fixed g-flex"},p.a.createElement("div",{className:"g-flex__item-fixed"},p.a.createElement(k.a,{items:[30,60,120],selected:this.params.limit,label:p.a.createElement(d.a,{id:"components.data.show"}),getLimitLink:this.getLimitLink})),p.a.createElement("div",{className:"g-flex__item-fixed"},p.a.createElement(g.a,{total:this.props.tokens.data.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.props.offset/this.params.limit)}))))}},{key:"getPageUrl",value:function(e){var t=b.a.parse(this.props.history.location.search);return t.offset=e*this.params.limit,"/issued-tokens?".concat(b.a.stringify(t))}},{key:"getLimitLink",value:function(e){var t=b.a.parse(this.props.history.location.search);return t.limit=e,"/issued-tokens?".concat(b.a.stringify(t))}},{key:"reloadTokens",value:function(e){e=Object(n.a)(Object(n.a)(Object(n.a)({},this.params),e),{},{limit:e.limit||30,offset:e.offset||0}),Object.keys(e).forEach((function(t){null===e[t]&&delete e[t]})),this.props.getTokens(e),0===e.offset&&delete e.offset,30===e.limit&&delete e.limit,this.props.history.push("/issued-tokens?".concat(b.a.stringify(e)))}},{key:"getParams",value:function(){var e=b.a.parse(this.props.history.location.search),t=e.offset,a=e.limit;return t=parseInt(t,10),{limit:a=parseInt(a,10)||30,offset:t||0}}}]),a}(p.a.PureComponent),A=Object(f.b)((function(e){return{tokens:P(e),offset:e.tokens.offset}}),(function(e){return Object(h.b)(Object(n.a)({},j),e)}))(q);t.default=A}}]);
//# sourceMappingURL=12.a4a84529.chunk.js.map