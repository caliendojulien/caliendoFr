(self.webpackChunkcaliendodev=self.webpackChunkcaliendodev||[]).push([[678],{2374:function(e,t,a){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.r(t),a.d(t,{default:function(){return h}});var n=a(1943),l=a(7294),s=a(7198),r=Math.round(23220/7e4*100),c=function(e){return l.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},l.createElement("div",{className:"logo"},l.createElement("span",{className:"icon fa-code"})),l.createElement("div",{className:"content"},l.createElement("div",{className:"inner"},l.createElement("h1",null,"Caliendo Julien"),l.createElement("p",null,"Développeur ",l.createElement("span",{className:"icon fa-certificate"})," Administrateur système ",l.createElement("span",{className:"icon fa-certificate"})," Auteur ",l.createElement("span",{className:"icon fa-certificate"})," Formateur"))),l.createElement("nav",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("button",{onClick:function(){e.onOpenArticle("moi")}},l.createElement("span",{className:"icon fa-user-circle"})," Moi")),l.createElement("li",null,l.createElement("button",{onClick:function(){e.onOpenArticle("travail")}},l.createElement("span",{className:"icon fa-briefcase"})," Mon travail")),l.createElement("li",null,l.createElement("button",{onClick:function(){e.onOpenArticle("calendrier")}},l.createElement("span",{className:"icon fa-calendar"})," Calendrier")),l.createElement("li",null,l.createElement("button",{onClick:function(){e.onOpenArticle("contact")}},l.createElement("span",{className:"icon fa-envelope"})," Contact")))),l.createElement("p",null,l.createElement("progress",{id:"progression",max:"100",value:r}),l.createElement("br",null),"Avancement de mon CA 2021 : ",r,"%"))},o=a.p+"static/pic01-8e4b4a2eaead57f7a88b7d638e45e6cb.jpg",m=a.p+"static/javascriptEtAngular-aba837f4bf194123a2f570315e41f4bb.jpg",u=a(5444),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this,t=l.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return l.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},l.createElement("article",{id:"moi",className:("moi"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.createElement("h2",{className:"major"},"Qui suis je ?"),l.createElement("span",{className:"image main"},l.createElement("img",{src:o,alt:""})),l.createElement("p",null,"(En construction)"),t),l.createElement("article",{id:"travail",className:("travail"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.createElement("h2",{className:"major"},"Mon travail"),l.createElement("span",{className:"image main"},l.createElement(u.Link,{to:"https://www.editions-eni.fr/julien-caliendo?utm_source=site&utm_medium=affiliation&utm_campaign=2020-07-JCALIENDO&xtor=AL-3972-JCALIENDO"},l.createElement("img",{src:m,alt:"javaScript et Angular aux editions ENI"}))),l.createElement("p",null,"(En construction)"),t),l.createElement("article",{id:"calendrier",className:("calendrier"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.createElement("h2",{className:"major"},"Calendrier"),l.createElement("iframe",{title:"calendrier",src:"https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FParis&src=NTM0a3AwdTFsbjRsNGttYmVtN2JnZzdmMm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showTitle=0",style:{border:0,width:550,height:400,frameBorder:0,scrolling:"no",display:"block",margin:"auto"}}),t),l.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.createElement("h2",{className:"major"},"Contact"),l.createElement("form",{method:"post",action:"#"},l.createElement("div",{className:"field half first"},l.createElement("label",{htmlFor:"name"},"Name"),l.createElement("input",{type:"text",name:"name",id:"name"})),l.createElement("div",{className:"field half"},l.createElement("label",{htmlFor:"email"},"Email"),l.createElement("input",{type:"text",name:"email",id:"email"})),l.createElement("div",{className:"field"},l.createElement("label",{htmlFor:"message"},"Message"),l.createElement("textarea",{name:"message",id:"message",rows:"4"})),l.createElement("ul",{className:"actions"},l.createElement("li",null,l.createElement("input",{type:"submit",value:"Envoyer un message",className:"special"})),l.createElement("li",null,l.createElement("input",{type:"reset",value:"Annuler"})))),l.createElement("ul",{className:"icons"},l.createElement("li",null,l.createElement("a",{href:"https://twitter.com/caliendojulien",className:"icon fa-twitter"},l.createElement("span",{className:"label"},"Twitter"))),l.createElement("li",null,l.createElement("a",{href:"https://github.com/caliendojulien",className:"icon fa-github"},l.createElement("span",{className:"label"},"GitHub")))),t))},t}(l.Component),d=function(e){return l.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},l.createElement("p",null,"Site web moche et non responsive depuis 2004."))},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i(a)),a.setWrapperRef=a.setWrapperRef.bind(i(a)),a.handleClickOutside=a.handleClickOutside.bind(i(a)),a}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return l.createElement(s.Z,{location:this.props.location},l.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.createElement("div",{id:"wrapper"},l.createElement(c,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.createElement(p,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),l.createElement(d,{timeout:this.state.timeout})),l.createElement("div",{id:"bg2"})))},t}(l.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-d6bc8a8dbc5810dc7102.js.map