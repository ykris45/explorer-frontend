(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[12],{216:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var i=s(11),c=s(12),a=s(14),n=s(13),r=s(0),o=s.n(r),l=s(20),b=s(2),u=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bi-coin-value",children:[this.getFormattedValue()," ",this.props.coinName?this.props.coinName:l.a.blockchain.coinName.toUpperCase()]})}},{key:"getFormattedValue",value:function(){var e=this.props.value/1e9;return e<1&&0!==e?e.toFixed(9).split("").reduceRight((function(e,t){return"0"===t&&0===e.length||e.push(t),e}),[]).reverse().join(""):e.toString()}}]),s}(o.a.PureComponent)},217:function(e,t,s){e.exports=function(){"use strict";var e=1e3,t=6e4,s=36e5,i="millisecond",c="second",a="minute",n="hour",r="day",o="week",l="month",b="quarter",u="year",h="date",d="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(e,t,s){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(s)+e},O={s:f,z:function(e){var t=-e.utcOffset(),s=Math.abs(t),i=Math.floor(s/60),c=s%60;return(t<=0?"+":"-")+f(i,2,"0")+":"+f(c,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var i=12*(s.year()-t.year())+(s.month()-t.month()),c=t.clone().add(i,l),a=s-c<0,n=t.clone().add(i+(a?-1:1),l);return+(-(i+(s-c)/(a?c-n:n-c))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:r,D:h,h:n,m:a,s:c,ms:i,Q:b}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},k="en",p={};p[k]=_;var v=function(e){return e instanceof N},x=function(e,t,s){var i;if(!e)return k;if("string"==typeof e)p[e]&&(i=e),t&&(p[e]=t,i=e);else{var c=e.name;p[c]=e,i=c}return!s&&i&&(k=i),i||!s&&k},y=function(e,t){if(v(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new N(s)},$=O;$.l=x,$.i=v,$.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var N=function(){function _(e){this.$L=x(e.locale,null,!0),this.parse(e)}var f=_.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(j);if(i){var c=i[2]-1||0,a=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return $},f.isValid=function(){return!(this.$d.toString()===d)},f.isSame=function(e,t){var s=y(e);return this.startOf(t)<=s&&s<=this.endOf(t)},f.isAfter=function(e,t){return y(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<y(e)},f.$g=function(e,t,s){return $.u(e)?this[t]:this.set(s,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var s=this,i=!!$.u(t)||t,b=$.p(e),d=function(e,t){var c=$.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return i?c:c.endOf(r)},j=function(e,t){return $.w(s.toDate()[e].apply(s.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},m=this.$W,_=this.$M,f=this.$D,O="set"+(this.$u?"UTC":"");switch(b){case u:return i?d(1,0):d(31,11);case l:return i?d(1,_):d(0,_+1);case o:var k=this.$locale().weekStart||0,p=(m<k?m+7:m)-k;return d(i?f-p:f+(6-p),_);case r:case h:return j(O+"Hours",0);case n:return j(O+"Minutes",1);case a:return j(O+"Seconds",2);case c:return j(O+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,t){var s,o=$.p(e),b="set"+(this.$u?"UTC":""),d=(s={},s[r]=b+"Date",s[h]=b+"Date",s[l]=b+"Month",s[u]=b+"FullYear",s[n]=b+"Hours",s[a]=b+"Minutes",s[c]=b+"Seconds",s[i]=b+"Milliseconds",s)[o],j=o===r?this.$D+(t-this.$W):t;if(o===l||o===u){var m=this.clone().set(h,1);m.$d[d](j),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](j);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[$.p(e)]()},f.add=function(i,b){var h,d=this;i=Number(i);var j=$.p(b),m=function(e){var t=y(d);return $.w(t.date(t.date()+Math.round(e*i)),d)};if(j===l)return this.set(l,this.$M+i);if(j===u)return this.set(u,this.$y+i);if(j===r)return m(1);if(j===o)return m(7);var _=(h={},h[a]=t,h[n]=s,h[c]=e,h)[j]||1,f=this.$d.getTime()+i*_;return $.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",c=$.z(this),a=this.$H,n=this.$m,r=this.$M,o=s.weekdays,l=s.months,b=function(e,s,c,a){return e&&(e[s]||e(t,i))||c[s].substr(0,a)},u=function(e){return $.s(a%12||12,e,"0")},h=s.meridiem||function(e,t,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i},j={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:$.s(r+1,2,"0"),MMM:b(s.monthsShort,r,l,3),MMMM:b(l,r),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:b(s.weekdaysMin,this.$W,o,2),ddd:b(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:$.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,n,!0),A:h(a,n,!1),m:String(n),mm:$.s(n,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:c};return i.replace(m,(function(e,t){return t||j[e]||c.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(i,h,d){var j,m=$.p(h),_=y(i),f=(_.utcOffset()-this.utcOffset())*t,O=this-_,k=$.m(this,_);return k=(j={},j[u]=k/12,j[l]=k,j[b]=k/3,j[o]=(O-f)/6048e5,j[r]=(O-f)/864e5,j[n]=O/s,j[a]=O/t,j[c]=O/e,j)[m]||O,d?k:$.a(k)},f.daysInMonth=function(){return this.endOf(l).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),i=x(e,t,!0);return i&&(s.$L=i),s},f.clone=function(){return $.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},_}(),g=N.prototype;return y.prototype=g,[["$ms",i],["$s",c],["$m",a],["$H",n],["$W",r],["$M",l],["$y",u],["$D",h]].forEach((function(e){g[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),y.extend=function(e,t){return e.$i||(e(t,N,y),e.$i=!0),y},y.locale=x,y.isDayjs=v,y.unix=function(e){return y(1e3*e)},y.en=p[k],y.Ls=p,y.p={},y}()},219:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var i=s(11),c=s(12),a=s(14),n=s(13),r=s(217),o=s.n(r),l=s(0),b=s.n(l),u=(s(222),s(2)),h=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=o()(this.props.timestamp);return Object(u.jsxs)("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis",children:[Object(u.jsx)("span",{className:"bi-timestamp__time",children:e.format("HH:mm:ss")}),Object(u.jsx)("span",{className:"bi-timestamp__date",children:e.format("DD.MM.YYYY")})]})}}]),s}(b.a.PureComponent)},222:function(e,t,s){},300:function(e,t,s){},301:function(e,t,s){},305:function(e,t,s){"use strict";s.d(t,"a",(function(){return x}));var i=s(11),c=s(12),a=s(14),n=s(13),r=s(0),o=s.n(r),l=s(28),b=s(33),u=s(62),h=s(216),d=s(219),j=s(3),m=s(54),_=s.n(m),f=s(4),O=s(15),k=(s(300),s(2)),p=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"bi-blocks-table-header bi-blocks-table__row bi-table__row",children:[Object(k.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(k.jsxs)(b.Link,{className:this.getSortDirectionClassName("height"),to:"/?".concat(this.getSortLink("height")),children:[Object(k.jsx)(l.a,{id:"common.block.height"}),Object(k.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon"}),Object(k.jsx)(O.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(k.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(k.jsx)("div",{className:"bi-blocks-table__cell bi-blocks-table__cell--timestamp bi-table__cell",children:Object(k.jsxs)(b.Link,{className:this.getSortDirectionClassName("timestamp"),to:"/?".concat(this.getSortLink("timestamp")),children:[Object(k.jsx)(l.a,{id:"common.block.age"}),Object(k.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon"}),Object(k.jsx)(O.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(k.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(k.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(k.jsxs)(b.Link,{className:this.getSortDirectionClassName("transactionsCount"),to:"/?".concat(this.getSortLink("transactionsCount")),children:[Object(k.jsx)(l.a,{id:"common.block.transactions"}),Object(k.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon"}),Object(k.jsx)(O.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(k.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(k.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(k.jsxs)(b.Link,{className:this.getSortDirectionClassName("miner"),to:"/?".concat(this.getSortLink("miner")),children:[Object(k.jsx)(l.a,{id:"common.block.minedBy"}),Object(k.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon"}),Object(k.jsx)(O.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(k.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(k.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(k.jsxs)(b.Link,{className:this.getSortDirectionClassName("minerReward"),to:"/?".concat(this.getSortLink("minerReward")),children:[Object(k.jsx)(l.a,{id:"common.block.minerReward"}),Object(k.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon"}),Object(k.jsx)(O.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(k.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(k.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(k.jsxs)(b.Link,{className:this.getSortDirectionClassName("difficulty"),to:"/?".concat(this.getSortLink("difficulty")),children:[Object(k.jsx)(l.a,{id:"common.block.difficulty"}),Object(k.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon"}),Object(k.jsx)(O.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(k.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})}),Object(k.jsx)("div",{className:"bi-blocks-table__cell bi-table__cell",children:Object(k.jsxs)(b.Link,{className:this.getSortDirectionClassName("size"),to:"/?".concat(this.getSortLink("size")),children:[Object(k.jsx)(l.a,{id:"common.block.size"}),Object(k.jsx)(O.F,{className:"bi-blocks-table-header__sort-icon"}),Object(k.jsx)(O.D,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--asc"}),Object(k.jsx)(O.E,{className:"bi-blocks-table-header__sort-icon bi-blocks-table-header__sort-icon--desc"})]})})]})}},{key:"getSortDirectionClassName",value:function(e){var t=_.a.parse(this.props.history.location.search),s=t.sortBy,i=t.sortDirection,c=["bi-blocks-table-header__sort","u-word-wrap u-word-wrap--ellipsis"];return s===e&&i&&c.push("bi-blocks-table-header__sort--".concat(i)),c.join(" ")}},{key:"getSortLink",value:function(e){var t=_.a.parse(this.props.history.location.search),s=t.sortBy,i=t.sortDirection,c="asc";return s===e&&"desc"===i?_.a.stringify(Object(j.a)(Object(j.a)({},t),{},{offset:null,sortBy:null,sortDirection:null})):(s===e&&"desc"!==i&&(c="desc"),_.a.stringify(Object(j.a)(Object(j.a)({},t),{},{offset:null,sortBy:e,sortDirection:c})))}}]),s}(o.a.Component),v=Object(f.o)(p),x=(s(301),function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(k.jsx)("div",{className:"bi-blocks-table",children:this.props.blocks?this.renderTable():null})}},{key:"renderTable",value:function(){return Object(k.jsxs)("div",{className:"bi-blocks-table__body bi-table",children:[Object(k.jsx)(v,{}),this.props.blocks.map((function(e){return Object(k.jsxs)("div",{className:"bi-blocks-table__row bi-table__row",children:[Object(k.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(k.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(k.jsx)(l.a,{id:"common.block.height"})}),Object(k.jsx)(b.Link,{to:"/blocks/".concat(e.id),children:e.height})]}),Object(k.jsxs)("div",{className:"bi-blocks-table__cell bi-blocks-table__cell--timestamp bi-table__cell",children:[Object(k.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(k.jsx)(l.a,{id:"common.block.age"})}),Object(k.jsx)(d.a,{timestamp:e.timestamp})]}),Object(k.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(k.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(k.jsx)(l.a,{id:"common.block.transactions"})}),e.transactionsCount]}),Object(k.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(k.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(k.jsx)(l.a,{id:"common.block.minedBy"})}),Object(k.jsx)(b.Link,{to:"/addresses/".concat(e.miner.address||e.miner.name),className:"u-word-wrap u-word-wrap--ellipsis",children:e.miner.name||e.miner.address})]}),Object(k.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(k.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(k.jsx)(l.a,{id:"common.block.minerReward"})}),Object(k.jsx)(h.a,{value:e.minerReward})]}),Object(k.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell bi-blocks-table__cell--difficulty",children:[Object(k.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(k.jsx)(l.a,{id:"common.block.difficulty"})}),e.difficulty]}),Object(k.jsxs)("div",{className:"bi-blocks-table__cell bi-table__cell",children:[Object(k.jsx)("div",{className:"bi-blocks-table__cell-name",children:Object(k.jsx)(l.a,{id:"common.block.size"})}),Object(k.jsxs)("span",{className:"u-word-wrap u-word-wrap--ellipsis",children:[Object(u.a)(e.size,{desiredFormat:"k"}),"B"]})]})]},e.id)}))]})}}]),s}(o.a.Component))},627:function(e,t,s){},671:function(e,t,s){"use strict";s.r(t);var i=s(3),c=s(11),a=s(12),n=s(14),r=s(13),o=s(54),l=s.n(o),b=s(0),u=s.n(b),h=s(28),d=s(29),j=s(4),m=s(24),_=s(30),f=s(72),O=s(39),k=s.n(O),p=s(20),v=function(){function e(){Object(c.a)(this,e)}return Object(a.a)(e,null,[{key:"search",value:function(e){return k.a.get("".concat(p.a.apiUrl,"/search"),{params:{query:e}}).then((function(e){return e?e.data:Promise.reject("Block api service. Request: ".concat(p.a.apiUrl,"/search."))}))}}]),e}(),x={search:function(e){return function(t){return t({type:f.a}),v.search(e).then((function(e){t({payload:{data:e},type:f.b})}))}}},y=s(305),$=(s(627),s(2)),N=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(c.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={canSearch:!0},e.query=void 0,e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){if(this.props.preloaded)this.props.clearPreloadedState();else{var e=l.a.parse(this.props.location.search).query,t=void 0===e?"":e;this.query=t,this.doSearch()}}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=l.a.parse(e.location.search).query,s=void 0===t?"":t;s!==this.query&&(this.query=s,this.doSearch())}},{key:"render",value:function(){return Object($.jsx)("div",{className:"bi-search-results",children:this.state.canSearch?this.renderBody():Object($.jsx)("div",{className:"bi-search-results__body",children:Object($.jsx)(h.a,{id:"components.search-results.wrong-query"})})})}},{key:"renderBody",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data,s=t.blocks,i=t.addresses,c=t.transactions,a=s.find((function(t){return t.id===e.query})),n=c.includes(this.query),r=i.includes(this.query);return 1===s.length?Object($.jsx)(j.c,{to:"/blocks/".concat(s[0].id)}):1===i.length?Object($.jsx)(j.c,{to:"/addresses/".concat(i[0])}):1===c.length?Object($.jsx)(j.c,{to:"/transactions/".concat(c[0])}):a?Object($.jsx)(j.c,{to:"/blocks/".concat(this.query)}):r?Object($.jsx)(j.c,{to:"/addresses/".concat(this.query)}):n?Object($.jsx)(j.c,{to:"/transactions/".concat(this.query)}):Object($.jsxs)("div",{className:"bi-search-results__body",children:[0===s.length&&Object($.jsx)(h.a,{id:"components.search-results.no-results"}),s.length>0&&Object($.jsx)(y.a,{blocks:s,isFetching:this.props.fetching})]})}},{key:"doSearch",value:function(){this.query.length<5?this.setState({canSearch:!1}):(this.setState({canSearch:!0}),this.props.search(this.query))}}]),s}(u.a.Component);var g=Object(d.b)((function(e){return e.search}),(function(e){return Object(m.bindActionCreators)(Object(i.a)(Object(i.a)({},x),_.a),e)}))(N);t.default=g}}]);
//# sourceMappingURL=12.144daa3e.chunk.js.map