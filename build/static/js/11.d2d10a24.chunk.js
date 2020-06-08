(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[11],{395:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var s=t(5),n=t(6),i=t(8),r=t(7),l=t(0),c=t.n(l),o=t(22),m=t(29),d=(t(396),t(10)),p=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(e){return Object(s.a)(this,t),a.call(this,e)}return Object(n.a)(t,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?c.a.createElement("div",{className:"bi-paginate-simple"},0===this.props.forcePage?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},c.a.createElement(d.k,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0)},c.a.createElement(d.k,{className:"bi-paginate-simple__btn-icon"})),0===this.props.forcePage?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},c.a.createElement(d.d,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1)},c.a.createElement(d.d,{className:"bi-paginate-simple__btn-icon"})),c.a.createElement("span",{className:"bi-paginate-simple__status"},c.a.createElement(o.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})),c.a.createElement("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile"},c.a.createElement(o.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})),this.props.forcePage===e-1?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},c.a.createElement(d.d,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1)},c.a.createElement(d.d,{className:"bi-paginate-simple__btn-icon"})),this.props.forcePage===e-1?c.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},c.a.createElement(d.k,{className:"bi-paginate-simple__btn-icon"})):c.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1)},c.a.createElement(d.k,{className:"bi-paginate-simple__btn-icon"}))):null}}]),t}(c.a.Component)},396:function(e,a,t){},473:function(e,a,t){},554:function(e,a,t){},560:function(e,a,t){},561:function(e,a,t){},562:function(e,a,t){},563:function(e,a,t){},825:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t(5),i=t(6),r=t(12),l=t(8),c=t(7),o=t(51),m=t.n(o),d=t(0),p=t.n(d),b=t(92),u=t.n(b),_=t(22),h=t(23),f=t(15),v=t(11),g=(t(554),t(25)),y=t(59),E=t(34),N=t.n(E),O=function(){function e(){Object(n.a)(this,e)}return Object(i.a)(e,null,[{key:"getAddress",value:function(e){return N.a.get("".concat(v.a.apiUrl,"/addresses/").concat(e)).then((function(a){return a?a.data:Promise.reject("Address api service. Request: ".concat(v.a.apiUrl,"/addresses/").concat(e,"."))}))}},{key:"getAddressTransactions",value:function(e,a){return N.a.get("".concat(v.a.apiUrl,"/addresses/").concat(e,"/transactions"),{params:a}).then((function(a){return a?a.data:Promise.reject("Address api service. Request: ".concat(v.a.apiUrl,"/addresses/").concat(e,"/transactions."))}))}},{key:"apiUrl",get:function(){return"".concat(v.a.apiUrl,"/addresses")}}]),e}(),k={getAddress:function(e){return function(a){a({type:y.a}),O.getAddress(e).then((function(e){a({payload:{data:e},type:y.b})}))}},getAddressTransactions:function(e,a){return function(t){t({type:y.c}),O.getAddressTransactions(e,a).then((function(e){t({payload:{data:e},type:y.d})}))}}},j=t(97),q=t(10),x=t(428),C=t.n(x),P=t(96),M=t.n(P),w=(t(560),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement(M.a,{className:"bi-address-qrcode-modal bi-modal bi-modal--scale",overlayClassName:"bi-modal-overlay",closeTimeoutMS:150,isOpen:this.props.isOpen,onRequestClose:this.props.onClose},p.a.createElement("button",{className:"bi-modal__btn-close",onClick:this.props.onClose},p.a.createElement(q.h,{className:"bi-modal__btn-close-icon"})),p.a.createElement("div",{className:"bi-address-qrcode-modal__title"},p.a.createElement(_.a,{id:"components.address-qr-code-modal.title"}),p.a.createElement("div",{className:"bi-address-qrcode-modal__subtitle"},p.a.createElement(_.a,{id:"components.address-qr-code-modal.subtitle"}))),p.a.createElement(C.a,{value:this.props.address,size:164}))}}]),t}(p.a.PureComponent)),A=(t(473),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state=Object(j.a)({},"isQrCodeModalOpened",!1),s.openModal=s.openModal.bind(Object(r.a)(s)),s.closeModal=s.closeModal.bind(Object(r.a)(s)),s}return Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address-actions g-flex"},p.a.createElement("div",{className:"bi-address-actions__item g-flex__item-fixed"},p.a.createElement("button",{className:"bi-address-actions__btn bi-btn",onClick:this.openModal("isQrCodeModalOpened")},p.a.createElement(_.a,{id:"components.address-actions.qrcode"}),p.a.createElement(q.n,{className:"bi-address-actions__btn-icon"}))),p.a.createElement(w,{isOpen:this.state.isQrCodeModalOpened,onClose:this.closeModal("isQrCodeModalOpened"),address:this.props.address.summary.id}))}},{key:"openModal",value:function(e){var a=this;return function(){a.setState(Object(j.a)({},e,!0))}}},{key:"closeModal",value:function(e){var a=this;return function(){a.setState(Object(j.a)({},e,!1))}}}]),t}(p.a.Component)),U=t(3),S=(t(561),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).link=void 0,s.state={amount:0,copied:!1,description:""},s.setAmount=s.setAmount.bind(Object(r.a)(s)),s.setDescription=s.setDescription.bind(Object(r.a)(s)),s.copyLinkToClipboard=s.copyLinkToClipboard.bind(Object(r.a)(s)),s.selectLink=s.selectLink.bind(Object(r.a)(s)),s}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.getLink();return p.a.createElement(M.a,{className:"bi-payment-request-modal bi-modal bi-modal--scale g-scroll-y",overlayClassName:"bi-modal-overlay",closeTimeoutMS:150,isOpen:this.props.isOpen,onRequestClose:this.props.onClose},p.a.createElement("button",{className:"bi-modal__btn-close",onClick:this.props.onClose},p.a.createElement(q.h,{className:"bi-modal__btn-close-icon"})),p.a.createElement("div",{className:"bi-payment-request-modal__title"},p.a.createElement(_.a,{id:"components.payment-request-modal.title"}),p.a.createElement("div",{className:"bi-payment-request-modal__subtitle"},p.a.createElement(_.a,{id:"components.payment-request-modal.subtitle"}))),p.a.createElement("div",{className:"bi-payment-request-modal__form"},p.a.createElement("label",{className:"bi-payment-request-modal__form-item g-flex"},p.a.createElement("span",{className:"bi-payment-request-modal__label g-flex__item-fixed"},p.a.createElement(_.a,{id:"components.payment-request-modal.amount"})),p.a.createElement("div",{className:"bi-payment-request-modal__input-wrapper g-flex__item"},p.a.createElement("input",{className:"bi-payment-request-modal__input",type:"number",onChange:this.setAmount,min:0}),p.a.createElement("span",{className:"bi-payment-request-modal__input-currency"},v.a.blockchain.coinName.toUpperCase()))),p.a.createElement("label",{className:"bi-payment-request-modal__form-item g-flex"},p.a.createElement("span",{className:"bi-payment-request-modal__label bi-payment-request-modal__label--line"},p.a.createElement(_.a,{id:"components.payment-request-modal.description"})),p.a.createElement("div",{className:"bi-payment-request-modal__input-wrapper g-flex__item"},p.a.createElement("textarea",{className:"bi-payment-request-modal__input bi-payment-request-modal__input--textarea",onChange:this.setDescription})))),p.a.createElement("div",{className:"bi-payment-request-modal__result g-flex"},p.a.createElement("div",{className:"g-flex__item-fixed bi-payment-request-modal__qrcode"},p.a.createElement(C.a,{value:a,size:156})),p.a.createElement("div",{className:"g-flex__item-fixed bi-payment-request-modal__link g-flex-column"},p.a.createElement("div",{className:"bi-payment-request-modal__link-header g-flex-column__item-fixed"},p.a.createElement(_.a,{id:"components.payment-request-modal.link"}),":"),p.a.createElement("div",{className:"bi-payment-request-modal__link-body u-word-wrap g-scroll-y g-flex-column__item",onClick:this.selectLink,ref:function(a){return e.link=a}},a))),p.a.createElement("div",{className:"bi-payment-request-modal__footer g-flex-column__item g-flex"},p.a.createElement("button",{className:"bi-payment-request-modal__btn-copy bi-btn bi-btn--flat",onClick:this.copyLinkToClipboard},this.state.copied?p.a.createElement(_.a,{id:"components.payment-request-modal.copied"}):p.a.createElement(_.a,{id:"components.payment-request-modal.copy"}))))}},{key:"getLink",value:function(){var e=m.a.stringify({address:this.props.address,amount:this.state.amount,description:this.state.description}),a=v.a.environments?v.a.environments[0].url:window.location.origin;return"".concat(a,"/payment-request?").concat(e)}},{key:"setAmount",value:function(e){this.setState({amount:parseInt(e.target.value,10)})}},{key:"setDescription",value:function(e){this.setState({description:e.target.value})}},{key:"selectLink",value:function(){window.getSelection().selectAllChildren(this.link)}},{key:"copyLinkToClipboard",value:function(){var e=this;this.selectLink(),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.setState({copied:!0}),setTimeout((function(){e.setState({copied:!1})}),1e3)}}]),t}(p.a.PureComponent)),L=Object(U.o)(S),T=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state=Object(j.a)({},"isPaymentRequestModalOpened",!1),s.openModal=s.openModal.bind(Object(r.a)(s)),s.closeModal=s.closeModal.bind(Object(r.a)(s)),s}return Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address-actions g-flex"},p.a.createElement("div",{className:"bi-address-actions__item g-flex__item-fixed"},p.a.createElement("button",{className:"bi-address-actions__btn",onClick:this.openModal("isPaymentRequestModalOpened")},p.a.createElement(_.a,{id:"components.address-actions.request-payment"}))),p.a.createElement(L,{isOpen:this.state.isPaymentRequestModalOpened,onClose:this.closeModal("isPaymentRequestModalOpened"),address:this.props.address.summary.id}))}},{key:"openModal",value:function(e){var a=this;return function(){a.setState(Object(j.a)({},e,!0))}}},{key:"closeModal",value:function(e){var a=this;return function(){a.setState(Object(j.a)({},e,!1))}}}]),t}(p.a.Component),R=(t(562),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address-summary"},p.a.createElement("div",{className:"bi-address-summary__header"},p.a.createElement(_.a,{id:"components.address-summary.title"})),p.a.createElement("div",{className:"bi-address-summary__body bi-table"},p.a.createElement("div",{className:"bi-address-summary__row bi-table__row"},p.a.createElement("div",{className:"bi-address-summary__cell bi-address-summary__cell--header bi-table__cell"},p.a.createElement(_.a,{id:"components.address-summary.hash"})),p.a.createElement("div",{className:"bi-address-summary__cell bi-address-summary__cell--value bi-table__cell u-word-wrap u-word-wrap--ellipsis"},this.props.summary.id))))}}]),t}(p.a.Component)),D=(t(563),t(378)),B=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address-transactions"},p.a.createElement("div",{className:"bi-address-transactions__header"},p.a.createElement(_.a,{id:"components.address-transactions.title"})),p.a.createElement("div",{className:"bi-address-transactions__body bi-table"},p.a.createElement("div",{className:"bi-address-transactions__row bi-table__row"},p.a.createElement("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell"},p.a.createElement(_.a,{id:"components.address-transactions.confirmed"})),p.a.createElement("div",{className:"bi-address-transactions__cell bi-table__cell"},this.props.summary.confirmed)),p.a.createElement("div",{className:"bi-address-transactions__row bi-table__row"},p.a.createElement("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell"},p.a.createElement(_.a,{id:"components.address-transactions.totalReceived"})),p.a.createElement("div",{className:"bi-address-transactions__cell bi-table__cell"},p.a.createElement(D.a,{value:this.props.summary.totalReceived}))),p.a.createElement("div",{className:"bi-address-transactions__row bi-table__row"},p.a.createElement("div",{className:"bi-address-transactions__cell bi-address-transactions__cell--header bi-table__cell"},p.a.createElement(_.a,{id:"components.address-transactions.confirmedBalance"})),p.a.createElement("div",{className:"bi-address-transactions__cell bi-table__cell"},p.a.createElement(D.a,{value:this.props.summary.confirmedBalance})))))}}]),t}(p.a.Component),J=t(395),Q=t(474),F=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).params=void 0,s.params=s.getParams(),s.getPageUrl=s.getPageUrl.bind(Object(r.a)(s)),s}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.preloaded?this.props.clearPreloadedState():(this.props.getAddress(this.props.match.params.id),this.props.getAddressTransactions(this.props.match.params.id,this.params))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var a=this.getParams();if(this.props.match.params.id!==e.match.params.id)return this.params=a,this.props.getAddress(e.match.params.id),void this.props.getAddressTransactions(e.match.params.id,this.params);JSON.stringify(a)!==JSON.stringify(this.params)&&(this.params=a,this.props.getAddressTransactions(this.props.match.params.id,this.params))}},{key:"render",value:function(){return p.a.createElement("div",{className:"bi-address g-flex-column__item-fixed"},p.a.createElement("div",{className:"bi-address__header"},p.a.createElement("div",{className:"bi-address__title"},p.a.createElement(_.a,{id:"components.address.title",values:{coinName:v.a.blockchain.coinName.toUpperCase()}}))),this.renderBody())}},{key:"renderBody",value:function(){return this.props.fetching?p.a.createElement("p",{className:"bi-address__fetching-text"},"Fetching data..."):!this.props.address||this.props.fetching?null:p.a.createElement("div",{className:"bi-address__body"},p.a.createElement(_.a,{id:"common.pages.address.title",values:{id:this.props.address.summary.id}},(function(e){return p.a.createElement(u.a,null,p.a.createElement("title",null,e))})),p.a.createElement("div",{className:"bi-address__tables g-flex"},p.a.createElement("div",{className:"bi-address__table g-flex__item"},p.a.createElement(R,{summary:this.props.address.summary}),p.a.createElement(A,{address:this.props.address})),p.a.createElement("div",{className:"bi-address__table g-flex__item"},p.a.createElement(B,{summary:this.props.address.transactions}),p.a.createElement(T,{address:this.props.address}))),this.props.transactions&&p.a.createElement("div",{className:"bi-address__transactions"},!this.props.transactionFetching&&p.a.createElement(Q.a,{transactions:this.props.transactions.items,address:this.props.address.summary.id}),p.a.createElement("div",{className:"bi-address__transactions-footer g-flex"},p.a.createElement(J.a,{total:this.props.transactions.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.params.offset/this.params.limit)}))))}},{key:"getPageUrl",value:function(e){var a=m.a.parse(this.props.history.location.search);return a.offset=e*this.params.limit,"".concat(this.props.location.pathname,"?").concat(m.a.stringify(a))}},{key:"getParams",value:function(){var e=m.a.parse(this.props.history.location.search),a=e.offset,t=e.limit;return a=parseInt(a,10),{limit:t=parseInt(t,10)||30,offset:a||0}}}]),t}(p.a.PureComponent);a.default=Object(h.b)((function(e){return e.address}),(function(e){return Object(f.bindActionCreators)(Object(s.a)(Object(s.a)({},k),g.a),e)}))(F)}}]);
//# sourceMappingURL=11.d2d10a24.chunk.js.map