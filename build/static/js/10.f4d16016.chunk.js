(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[10],{405:function(e,t,a){"use strict";a.d(t,"g",(function(){return s})),a.d(t,"i",(function(){return n})),a.d(t,"h",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return d}));var s="assets/tokenid/issuingBox",n="/dex/tokens/tokenid/unspentSellOrders",i="/dex/tokens/tokenid/unspentBuyOrders",r="/assets/issuingBoxes",c="/assets/issuingBoxes/total",o="/transactions/unconfirmed",l="/transactions/unconfirmed/:id",m="oracle/frontendData",d="addresses/balances"},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a(106),n=a(42),i=a.n(n),r=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return e(Object(s.startStructFetch)(t)),i.a[a](n,r).then((function(e){return e.body||e.data})).then((function(a){if(!a)return e(Object(s.stopStructFetch)(t,a)),Promise.resolve(a);var n=a.errors||a.error;return n?(e(Object(s.stopStructFetch)(t,new Error(n))),Promise.reject(new Error(n))):(e(Object(s.stopStructFetch)(t,a)),Promise.resolve(a))})).catch((function(a){return e(Object(s.stopStructFetch)(t,a)),Promise.reject(a)}))}},425:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a(8),n=a(9),i=a(12),r=a(11),c=a(0),o=a.n(c),l=a(29),m=a(36),d=(a(426),a(14)),p=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(n.a)(a,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?o.a.createElement("div",{className:"bi-paginate-simple"},0===this.props.forcePage?o.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},o.a.createElement(d.o,{className:"bi-paginate-simple__btn-icon"})):o.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0)},o.a.createElement(d.o,{className:"bi-paginate-simple__btn-icon"})),0===this.props.forcePage?o.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},o.a.createElement(d.d,{className:"bi-paginate-simple__btn-icon"})):o.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1)},o.a.createElement(d.d,{className:"bi-paginate-simple__btn-icon"})),o.a.createElement("span",{className:"bi-paginate-simple__status"},o.a.createElement(l.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})),o.a.createElement("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile"},o.a.createElement(l.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})),this.props.forcePage===e-1?o.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},o.a.createElement(d.d,{className:"bi-paginate-simple__btn-icon"})):o.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1)},o.a.createElement(d.d,{className:"bi-paginate-simple__btn-icon"})),this.props.forcePage===e-1?o.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},o.a.createElement(d.o,{className:"bi-paginate-simple__btn-icon"})):o.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1)},o.a.createElement(d.o,{className:"bi-paginate-simple__btn-icon"}))):null}}]),a}(o.a.Component)},426:function(e,t,a){},493:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var s=a(68),n=a(72),i=a.n(n),r=a(43);function c(e,t,a,s,n,i,r){try{var c=e[i](r),o=c.value}catch(l){return void a(l)}c.done?t(o):Promise.resolve(o).then(s,n)}var o=a(8),l=a(9),m=a(405),d=a(42),p=a.n(d),u=a(16),b=a(410),_=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"getAddress",value:function(e){return p.a.get("".concat(u.a.apiUrl,"/addresses/").concat(e)).then((function(t){return t?t.data:Promise.reject("Address api service. Request: ".concat(u.a.apiUrl,"/addresses/").concat(e,"."))}))}},{key:"getConfirmed",value:function(e,t){return p.a.get("".concat(u.a.apiUrl,"/addresses/").concat(e,"/transactions"),{params:t}).then((function(t){return t?t.data:Promise.reject("Address api service. Request: ".concat(u.a.apiUrl,"/addresses/").concat(e,"/transactions."))}))}},{key:"getUnconfirmed",value:function(e,t){return p.a.get("".concat(u.a.apiUrl,"/transactions/unconfirmed/byAddress/").concat(e),{params:t}).then((function(t){return t?t.data:Promise.reject("Address api service. Request: ".concat(u.a.apiUrl,"/addresses/").concat(e,"/transactions."))}))}},{key:"getAddressTransactions",value:function(){var e,t=(e=i.a.mark((function e(t,a){var s,n,c,o,l,m,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.offset,n=a.limit,e.next=3,this.getUnconfirmed(t,{offset:s,limit:n});case 3:if(!(0===(c=e.sent).total||c.total<s)){e.next=9;break}return e.next=7,this.getConfirmed(t,{offset:s-c.total,limit:n});case 7:return o=e.sent,e.abrupt("return",{items:o.items,total:c.total+o.total});case 9:if(!(c.items.length<n)){e.next=15;break}return l=n-c.items.length,e.next=13,this.getConfirmed(t,{offset:0,limit:l});case 13:return m=e.sent,e.abrupt("return",{items:[].concat(Object(r.a)(c.items),Object(r.a)(m.items)),total:c.total+m.total});case 15:return e.next=17,this.getConfirmed(t,{offset:0,limit:1});case 17:return d=e.sent,e.abrupt("return",{items:Object(r.a)(c.items),total:c.total+d.total});case 19:case"end":return e.stop()}}),e,this)})),function(){var t=this,a=arguments;return new Promise((function(s,n){var i=e.apply(t,a);function r(e){c(i,s,n,r,o,"next",e)}function o(e){c(i,s,n,r,o,"throw",e)}r(void 0)}))});return function(e,a){return t.apply(this,arguments)}}()},{key:"getAddressesBalances",value:function(e){return Object(b.a)(e,m.a,"get","".concat(u.a.apiUrl,"/addresses/balances?limit=100"))}},{key:"apiUrl",get:function(){return"".concat(u.a.apiUrl,"/addresses")}}]),e}(),f={getAddress:function(e){return function(t){t({type:s.a}),_.getAddress(e).then((function(e){t({payload:{data:e},type:s.b})}))}},getAddressTransactions:function(e,t){return function(a){a({type:s.c}),_.getAddressTransactions(e,t).then((function(e){a({payload:{data:e},type:s.d})}))}},getAddressesBalances:function(){return function(e){return _.getAddressesBalances(e)}}}},503:function(e,t,a){},584:function(e,t,a){},590:function(e,t,a){},591:function(e,t,a){},592:function(e,t,a){},593:function(e,t,a){},868:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(8),i=a(9),r=a(17),c=a(12),o=a(11),l=a(61),m=a.n(l),d=a(0),p=a.n(d),u=a(107),b=a.n(u),_=a(29),f=a(30),h=a(20),v=a(16),g=(a(584),a(31)),y=a(493),E=a(112),N=a(14),O=a(457),k=a.n(O),j=a(111),x=a.n(j),q=(a(590),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return p.a.createElement(x.a,{className:"bi-address-qrcode-modal bi-modal bi-modal--scale",overlayClassName:"bi-modal-overlay",closeTimeoutMS:150,isOpen:this.props.isOpen,onRequestClose:this.props.onClose},p.a.createElement("button",{className:"bi-modal__btn-close",onClick:this.props.onClose},p.a.createElement(N.k,{className:"bi-modal__btn-close-icon"})),p.a.createElement("div",{className:"bi-address-qrcode-modal__title"},p.a.createElement(_.a,{id:"components.address-qr-code-modal.title"}),p.a.createElement("div",{className:"bi-address-qrcode-modal__subtitle"},p.a.createElement(_.a,{id:"components.address-qr-code-modal.subtitle"}))),p.a.createElement(k.a,{value:this.props.address,size:164}))}}]),a}(p.a.PureComponent)),C=(a(503),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state=Object(E.a)({},"isQrCodeModalOpened",!1),s.openModal=s.openModal.bind(Object(r.a)(s)),s.closeModal=s.closeModal.bind(Object(r.a)(s)),s}return Object(i.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address-actions g-flex"},p.a.createElement("div",{className:"bi-address-actions__item g-flex__item-fixed"},p.a.createElement("button",{className:"bi-address-actions__btn bi-btn",onClick:this.openModal("isQrCodeModalOpened")},p.a.createElement(_.a,{id:"components.address-actions.qrcode"}),p.a.createElement(N.x,{className:"bi-address-actions__btn-icon"}))),p.a.createElement(q,{isOpen:this.state.isQrCodeModalOpened,onClose:this.closeModal("isQrCodeModalOpened"),address:this.props.address.summary.id}))}},{key:"openModal",value:function(e){var t=this;return function(){t.setState(Object(E.a)({},e,!0))}}},{key:"closeModal",value:function(e){var t=this;return function(){t.setState(Object(E.a)({},e,!1))}}}]),a}(p.a.Component)),P=a(6),w=(a(591),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).link=void 0,s.state={amount:0,copied:!1,description:""},s.setAmount=s.setAmount.bind(Object(r.a)(s)),s.setDescription=s.setDescription.bind(Object(r.a)(s)),s.copyLinkToClipboard=s.copyLinkToClipboard.bind(Object(r.a)(s)),s.selectLink=s.selectLink.bind(Object(r.a)(s)),s}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.getLink();return p.a.createElement(x.a,{className:"bi-payment-request-modal bi-modal bi-modal--scale g-scroll-y",overlayClassName:"bi-modal-overlay",closeTimeoutMS:150,isOpen:this.props.isOpen,onRequestClose:this.props.onClose},p.a.createElement("button",{className:"bi-modal__btn-close",onClick:this.props.onClose},p.a.createElement(N.k,{className:"bi-modal__btn-close-icon"})),p.a.createElement("div",{className:"bi-payment-request-modal__title"},p.a.createElement(_.a,{id:"components.payment-request-modal.title"}),p.a.createElement("div",{className:"bi-payment-request-modal__subtitle"},p.a.createElement(_.a,{id:"components.payment-request-modal.subtitle"}))),p.a.createElement("div",{className:"bi-payment-request-modal__form"},p.a.createElement("label",{className:"bi-payment-request-modal__form-item g-flex"},p.a.createElement("span",{className:"bi-payment-request-modal__label g-flex__item-fixed"},p.a.createElement(_.a,{id:"components.payment-request-modal.amount"})),p.a.createElement("div",{className:"bi-payment-request-modal__input-wrapper g-flex__item"},p.a.createElement("input",{className:"bi-payment-request-modal__input",type:"number",onChange:this.setAmount,min:0}),p.a.createElement("span",{className:"bi-payment-request-modal__input-currency"},v.a.blockchain.coinName.toUpperCase()))),p.a.createElement("label",{className:"bi-payment-request-modal__form-item g-flex"},p.a.createElement("span",{className:"bi-payment-request-modal__label bi-payment-request-modal__label--line"},p.a.createElement(_.a,{id:"components.payment-request-modal.description"})),p.a.createElement("div",{className:"bi-payment-request-modal__input-wrapper g-flex__item"},p.a.createElement("textarea",{className:"bi-payment-request-modal__input bi-payment-request-modal__input--textarea",onChange:this.setDescription})))),p.a.createElement("div",{className:"bi-payment-request-modal__result g-flex"},p.a.createElement("div",{className:"g-flex__item-fixed bi-payment-request-modal__qrcode"},p.a.createElement(k.a,{value:t,size:156})),p.a.createElement("div",{className:"g-flex__item-fixed bi-payment-request-modal__link g-flex-column"},p.a.createElement("div",{className:"bi-payment-request-modal__link-header g-flex-column__item-fixed"},p.a.createElement(_.a,{id:"components.payment-request-modal.link"}),":"),p.a.createElement("div",{className:"bi-payment-request-modal__link-body u-word-wrap g-scroll-y g-flex-column__item",onClick:this.selectLink,ref:function(t){return e.link=t}},t))),p.a.createElement("div",{className:"bi-payment-request-modal__footer g-flex-column__item g-flex"},p.a.createElement("button",{className:"bi-payment-request-modal__btn-copy bi-btn bi-btn--flat",onClick:this.copyLinkToClipboard},this.state.copied?p.a.createElement(_.a,{id:"components.payment-request-modal.copied"}):p.a.createElement(_.a,{id:"components.payment-request-modal.copy"}))))}},{key:"getLink",value:function(){var e=m.a.stringify({address:this.props.address,amount:this.state.amount,description:this.state.description}),t=v.a.environments?v.a.environments[0].url:window.location.origin;return"".concat(t,"/payment-request?").concat(e)}},{key:"setAmount",value:function(e){this.setState({amount:parseInt(e.target.value,10)})}},{key:"setDescription",value:function(e){this.setState({description:e.target.value})}},{key:"selectLink",value:function(){window.getSelection().selectAllChildren(this.link)}},{key:"copyLinkToClipboard",value:function(){var e=this;this.selectLink(),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.setState({copied:!0}),setTimeout((function(){e.setState({copied:!1})}),1e3)}}]),a}(p.a.PureComponent)),M=Object(P.o)(w),A=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state=Object(E.a)({},"isPaymentRequestModalOpened",!1),s.openModal=s.openModal.bind(Object(r.a)(s)),s.closeModal=s.closeModal.bind(Object(r.a)(s)),s}return Object(i.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address-actions g-flex"},p.a.createElement("div",{className:"bi-address-actions__item g-flex__item-fixed"},p.a.createElement("button",{className:"bi-address-actions__btn",onClick:this.openModal("isPaymentRequestModalOpened")},p.a.createElement(_.a,{id:"components.address-actions.request-payment"}))),p.a.createElement(M,{isOpen:this.state.isPaymentRequestModalOpened,onClose:this.closeModal("isPaymentRequestModalOpened"),address:this.props.address.summary.id}))}},{key:"openModal",value:function(e){var t=this;return function(){t.setState(Object(E.a)({},e,!0))}}},{key:"closeModal",value:function(e){var t=this;return function(){t.setState(Object(E.a)({},e,!1))}}}]),a}(p.a.Component),U=(a(592),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address-summary"},p.a.createElement("div",{className:"bi-address-summary__header"},p.a.createElement(_.a,{id:"components.address-summary.title"})),p.a.createElement("div",{className:"bi-address-summary__body bi-table"},p.a.createElement("div",{className:"bi-address-summary__row bi-table__row"},p.a.createElement("div",{className:"bi-address-summary__cell bi-address-summary__cell--header bi-table__cell"},p.a.createElement(_.a,{id:"components.address-summary.hash"})),p.a.createElement("div",{className:"bi-address-summary__cell bi-address-summary__cell--value bi-table__cell u-word-wrap u-word-wrap--ellipsis"},this.props.summary.id))))}}]),a}(p.a.Component)),S=(a(593),a(408)),L=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address-transactions"},p.a.createElement("div",{className:"bi-address-transactions__header"},p.a.createElement(_.a,{id:"components.address-transactions.title"})),p.a.createElement("div",{className:"bi-address-transactions__body bi-table"},p.a.createElement("div",{className:"bi-address-transactions__row bi-table__row"},p.a.createElement("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell"},p.a.createElement(_.a,{id:"components.address-transactions.confirmed"})),p.a.createElement("div",{className:"bi-address-transactions__cell bi-table__cell"},this.props.summary.confirmed)),p.a.createElement("div",{className:"bi-address-transactions__row bi-table__row"},p.a.createElement("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell"},p.a.createElement(_.a,{id:"components.address-transactions.totalReceived"})),p.a.createElement("div",{className:"bi-address-transactions__cell bi-table__cell"},p.a.createElement(S.a,{value:this.props.summary.totalReceived}))),p.a.createElement("div",{className:"bi-address-transactions__row bi-table__row"},p.a.createElement("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell"},p.a.createElement(_.a,{id:"components.address-transactions.confirmedBalance"})),p.a.createElement("div",{className:"bi-address-transactions__cell bi-table__cell"},p.a.createElement(S.a,{value:this.props.summary.confirmedBalance})))))}}]),a}(p.a.Component),R=a(425),T=a(504),B=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).params=void 0,s.params=s.getParams(),s.getPageUrl=s.getPageUrl.bind(Object(r.a)(s)),s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.preloaded?this.props.clearPreloadedState():(this.props.getAddress(this.props.match.params.id),this.props.getAddressTransactions(this.props.match.params.id,this.params))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.getParams();if(this.props.match.params.id!==e.match.params.id)return this.params=t,this.props.getAddress(e.match.params.id),void this.props.getAddressTransactions(e.match.params.id,this.params);JSON.stringify(t)!==JSON.stringify(this.params)&&(this.params=t,this.props.getAddressTransactions(this.props.match.params.id,this.params))}},{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address g-flex-column__item-fixed"},p.a.createElement("div",{className:"bi-address__header"},p.a.createElement("div",{className:"bi-address__title"},p.a.createElement(_.a,{id:"components.address.title",values:{coinName:v.a.blockchain.coinName.toUpperCase()}}))),this.renderBody())}},{key:"renderBody",value:function(){return this.props.fetching?p.a.createElement("p",{className:"bi-address__fetching-text"},"Fetching data..."):!this.props.address||this.props.fetching?null:p.a.createElement("div",{className:"bi-address__body"},p.a.createElement(_.a,{id:"common.pages.address.title",values:{id:this.props.address.summary.id}},(function(e){return p.a.createElement(b.a,null,p.a.createElement("title",null,e))})),p.a.createElement("div",{className:"bi-address__tables g-flex"},p.a.createElement("div",{className:"bi-address__table g-flex__item"},p.a.createElement(U,{summary:this.props.address.summary}),p.a.createElement(C,{address:this.props.address})),p.a.createElement("div",{className:"bi-address__table g-flex__item"},p.a.createElement(L,{summary:this.props.address.transactions}),p.a.createElement(A,{address:this.props.address}))),this.props.transactions&&p.a.createElement("div",{className:"bi-address__transactions"},!this.props.transactionFetching&&p.a.createElement(T.a,{transactions:this.props.transactions.items,address:this.props.address.summary.id}),p.a.createElement("div",{className:"bi-address__transactions-footer g-flex"},p.a.createElement(R.a,{total:this.props.transactions.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.params.offset/this.params.limit)}))))}},{key:"getPageUrl",value:function(e){var t=m.a.parse(this.props.history.location.search);return t.offset=e*this.params.limit,"".concat(this.props.location.pathname,"?").concat(m.a.stringify(t))}},{key:"getParams",value:function(){var e=m.a.parse(this.props.history.location.search),t=e.offset,a=e.limit;return t=parseInt(t,10),{limit:a=parseInt(a,10)||30,offset:t||0}}}]),a}(p.a.PureComponent);t.default=Object(f.b)((function(e){return e.address}),(function(e){return Object(h.bindActionCreators)(Object(s.a)(Object(s.a)({},y.a),g.a),e)}))(B)}}]);
//# sourceMappingURL=10.f4d16016.chunk.js.map