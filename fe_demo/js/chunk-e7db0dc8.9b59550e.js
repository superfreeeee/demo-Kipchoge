(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7db0dc8"],{"11c0":function(e,t,i){"use strict";var n=i("f15a"),o=i.n(n);o.a},d9ce:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-layout",{attrs:{id:"layout"}},[i("a-layout-sider",[i("LayoutSider")],1),i("a-layout",[i("a-layout-header",[i("LayoutHeader")],1),i("a-layout-content",[i("router-view")],1)],1)],1)},o=[],s=(i("d3b7"),i("6042")),r=i.n(s),a=i("9b57"),l=i.n(a),d=i("41b2"),u=i.n(d),c=i("4d91"),h=i("4d26"),p=i.n(h),f=i("daa3"),m=i("4df5"),v={prefixCls:c["a"].string,hasSider:c["a"].boolean};function b(e,t){return function(i){return{name:t,props:i.props,inject:{configProvider:{default:function(){return m["a"]}}},render:function(){var t=arguments[0],n=e.suffixCls,o=this.$props.prefixCls,s=this.configProvider.getPrefixCls,r=s(n,o),a={props:u()({prefixCls:r},Object(f["h"])(this)),on:this.$listeners};return t(i,a,[this.$slots["default"]])}}}}var w={props:v,render:function(){var e=arguments[0],t=this.prefixCls,i=this.$slots,n=this.$listeners,o={class:t,on:n};return e("div",o,[i["default"]])}},g={props:v,data:function(){return{siders:[]}},provide:function(){var e=this;return{siderHook:{addSider:function(t){e.siders=[].concat(l()(e.siders),[t])},removeSider:function(t){e.siders=e.siders.filter((function(e){return e!==t}))}}}},render:function(){var e=arguments[0],t=this.prefixCls,i=this.$slots,n=this.hasSider,o=this.$listeners,s=p()(t,r()({},t+"-has-sider",n||this.siders.length>0)),a={class:s,on:o};return e("div",a,[i["default"]])}},x=b({suffixCls:"layout"},"ALayout")(g),y=b({suffixCls:"layout-header"},"ALayoutHeader")(w),C=b({suffixCls:"layout-footer"},"ALayoutFooter")(w),S=b({suffixCls:"layout-content"},"ALayoutContent")(w);x.Header=y,x.Footer=C,x.Content=S;var k=x,H=i("0c63"),L=i("b488"),A=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},$=A;if("undefined"!==typeof window){var O=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||O}var j={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"},q={prefixCls:c["a"].string,collapsible:c["a"].bool,collapsed:c["a"].bool,defaultCollapsed:c["a"].bool,reverseArrow:c["a"].bool,trigger:c["a"].any,width:c["a"].oneOfType([c["a"].number,c["a"].string]),collapsedWidth:c["a"].oneOfType([c["a"].number,c["a"].string]),breakpoint:c["a"].oneOf(["xs","sm","md","lg","xl","xxl"]),theme:c["a"].oneOf(["light","dark"]).def("dark")},F=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,""+t+e}}(),P={name:"ALayoutSider",__ANT_LAYOUT_SIDER:!0,mixins:[L["a"]],model:{prop:"collapsed",event:"collapse"},props:Object(f["p"])(q,{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),data:function(){this.uniqueId=F("ant-sider-");var e=void 0;"undefined"!==typeof window&&(e=window.matchMedia);var t=Object(f["h"])(this);e&&t.breakpoint&&t.breakpoint in j&&(this.mql=e("(max-width: "+j[t.breakpoint]+")"));var i=void 0;return i="collapsed"in t?t.collapsed:t.defaultCollapsed,{sCollapsed:i,below:!1,belowShow:!1}},provide:function(){return{layoutSiderContext:this}},inject:{siderHook:{default:function(){return{}}},configProvider:{default:function(){return m["a"]}}},watch:{collapsed:function(e){this.setState({sCollapsed:e})}},mounted:function(){var e=this;this.$nextTick((function(){e.mql&&(e.mql.addListener(e.responsiveHandler),e.responsiveHandler(e.mql)),e.siderHook.addSider&&e.siderHook.addSider(e.uniqueId)}))},beforeDestroy:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.siderHook.removeSider&&this.siderHook.removeSider(this.uniqueId)},methods:{responsiveHandler:function(e){this.setState({below:e.matches}),this.$emit("breakpoint",e.matches),this.sCollapsed!==e.matches&&this.setCollapsed(e.matches,"responsive")},setCollapsed:function(e,t){Object(f["o"])(this,"collapsed")||this.setState({sCollapsed:e}),this.$emit("collapse",e,t)},toggle:function(){var e=!this.sCollapsed;this.setCollapsed(e,"clickTrigger")},belowShowChange:function(){this.setState({belowShow:!this.belowShow})}},render:function(){var e,t=arguments[0],i=Object(f["h"])(this),n=i.prefixCls,o=i.theme,s=i.collapsible,a=i.reverseArrow,l=i.width,d=i.collapsedWidth,u=this.configProvider.getPrefixCls,c=u("layout-sider",n),h=Object(f["e"])(this,"trigger"),m=this.sCollapsed?d:l,v=$(m)?m+"px":String(m),b=0===parseFloat(String(d||0))?t("span",{on:{click:this.toggle},class:c+"-zero-width-trigger "+c+"-zero-width-trigger-"+(a?"right":"left")},[t(H["a"],{attrs:{type:"bars"}})]):null,w={expanded:t(H["a"],a?{attrs:{type:"right"}}:{attrs:{type:"left"}}),collapsed:t(H["a"],a?{attrs:{type:"left"}}:{attrs:{type:"right"}})},g=this.sCollapsed?"collapsed":"expanded",x=w[g],y=null!==h?b||t("div",{class:c+"-trigger",on:{click:this.toggle},style:{width:v}},[h||x]):null,C={flex:"0 0 "+v,maxWidth:v,minWidth:v,width:v},S=p()(c,c+"-"+o,(e={},r()(e,c+"-collapsed",!!this.sCollapsed),r()(e,c+"-has-trigger",s&&null!==h&&!b),r()(e,c+"-below",!!this.below),r()(e,c+"-zero-width",0===parseFloat(v)),e)),k={on:this.$listeners,class:S,style:C};return t("div",k,[t("div",{class:c+"-children"},[this.$slots["default"]]),s||this.below&&b?y:null])}},T=i("db14");k.Sider=P,k.install=function(e){e.use(T["a"]),e.component(k.name,k),e.component(k.Header.name,k.Header),e.component(k.Footer.name,k.Footer),e.component(k.Sider.name,k.Sider),e.component(k.Content.name,k.Content)};var _=k,W={components:{ALayout:_,ALayoutSider:_.Sider,ALayoutContent:_.Content,ALayoutHeader:_.Header,LayoutSider:function(){return Promise.all([i.e("chunk-2ba5bccc"),i.e("chunk-2d0db0b8"),i.e("chunk-c21b9944")]).then(i.bind(null,"42dd"))},LayoutHeader:function(){return i.e("chunk-07d87000").then(i.bind(null,"e167"))}}},I=W,z=(i("11c0"),i("2877")),M=Object(z["a"])(I,n,o,!1,null,null,null);t["default"]=M.exports},f15a:function(e,t,i){}}]);
//# sourceMappingURL=chunk-e7db0dc8.9b59550e.js.map