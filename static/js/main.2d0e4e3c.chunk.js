(this["webpackJsonpGimme A New Oscar"]=this["webpackJsonpGimme A New Oscar"]||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,l,s,u,p,d,b,j,f,g=n(0),h=n.n(g),x=n(10),O=n.n(x),m=n(9),v=n.n(m),y=n(16),k=n(5),w=n(3),C=n(4),S=n(7),A=C.a.span(a||(a=Object(w.a)(["\n    user-select: none;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.3em;\n"]))),G=Object(C.a)(S.a)(c||(c=Object(w.a)(["\n    width : 1.1em;\n    height: 1.1em;\n    fill: black;\n    animation: loading 4s linear infinite;\n    @keyframes loading {\n        to { transform: rotate(360deg); }\n    }\n"]))),P=C.a.div(r||(r=Object(w.a)(["\n    display: inline-flex;\n    flex-direction: row;\n    column-gap: 20px;\n    width: 100%;\n    align-content: flex-start;\n    justify-content: center;\n    text-align: left;\n"]))),T=n(1),z=function(){return Object(T.jsxs)(P,{children:[Object(T.jsx)(A,{children:"Generating..."}),Object(T.jsx)(G,{})]})},F=n(35),K=n.n(F),L=C.a.button(i||(i=Object(w.a)(["\n    border: 0px;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    height: 40px;\n    width: auto;\n    font-size: 1.1em;\n    background-color: ",";\n\n    transition: all 0.2s ease-out;\n\n    &:hover\n    {\n        cursor: pointer;\n        background-color: #c4c7d1ae;\n    }\n"])),(function(e){return e.selected?"#c4c7d1":"white"})),N=C.a.div(o||(o=Object(w.a)(["\n    width: 100%;\n    padding-bottom: 20px;\n    display: flex;\n    align-items: flex-start;\n"]))),H="babbage:ft-ufpe-2021-12-04-17-04-13",I="babbage:ft-ufpe-2021-12-08-02-32-35",B="curie:ft-ufpe-2021-12-04-00-24-56",M=function(e){return Object(T.jsx)(L,{selected:e.selected(),onClick:function(){return e.onCLick()},children:e.children})},D=function(e){var t=Object(g.useState)(0),n=Object(k.a)(t,2),a=n[0],c=n[1],r=function(t,n,a){c(a),e.onClick(t),e.toggleTags(n)},i=function(e){return console.log("is <".concat(e,"> selected? + ").concat(a===e)),a===e};return Object(T.jsxs)(N,{children:[Object(T.jsx)(M,{selected:function(){return i(0)},onCLick:function(){return r(H,!1,0)},children:"Comedy"}),Object(T.jsx)(M,{selected:function(){return i(1)},onCLick:function(){return r(I,!1,1)},children:"Horror"}),Object(T.jsx)(M,{selected:function(){return i(2)},onCLick:function(){return r(B,!0,2)},children:"General"})]})},E=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,c,r,i,o,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t.apiKey){e.next=3;break}return console.log("No COLAB API key for project. Can't submit a request"),e.abrupt("return","");case 3:if(n=t.postProps,a=n.temperature,c=n.title,r=c+" ->",t.model===B){if(i="",void 0!==n.tags&&n.tags.length>0){for(o=0;o<n.tags.length-1;o++)i+=n.tags[o]+", ";i+=n.tags[n.tags.length-1]+" ->"}r="title=".concat(c,", tags=").concat(i),console.log("prompt: "+r)}return l={prompt:r,model:t.model,max_tokens:200,temperature:a,top_p:1,n:1,stream:!1,logprobs:null,stop:"+++"},t.onStartGenerating(),e.next=12,K.a.post("https://api.openai.com/v1/completions",l,{headers:{Authorization:t.apiKey}}).then((function(e){console.log(e.data),t.onGenerationComplete(e.data.choices[0].text)})).catch((function(e){return alert(e),t.onGenerationComplete(""),""}));case 12:return e.abrupt("return","");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=C.a.div(l||(l=Object(w.a)(["\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n"]))),_=C.a.div(s||(s=Object(w.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.3em;\n    padding-bottom: 8px;\n"]))),q=C.a.div(u||(u=Object(w.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),R=C.a.label(p||(p=Object(w.a)(["\n    margin-right: 10px;\n    margin-left: 10px;\n"]))),W=C.a.div(d||(d=Object(w.a)(["\n    padding: 20px 5%;\n    font-size: 1.5em;\n"]))),Q=C.a.input(b||(b=Object(w.a)(["\n    width: 340px;\n    max-width: 340px;\n    padding-left: 10px;\n    border: 1px solid #93999e;\n    border-radius: 4px;\n    height: 38px;\n"]))),U=C.a.button(j||(j=Object(w.a)(["\n    border: 1px solid gray;\n    border-radius: 4px;\n    padding: 8px 16px;\n    height: 40px;\n\n    width: auto;\n    font-size: 1.1em;\n    background-color: white;\n\n    text-align: center;\n    vertical-align: middle;\n\n    transition: all 0.2s ease-out;\n\n    &:hover\n    {\n        cursor: pointer;\n        background-color: #c4c7d17b;\n    }\n\n    &:active\n    {\n        background-color: ","\n    }\n"])),"#c4c7d1"),V=n(13),X=n(36),Y=Object(C.a)(X.a)(f||(f=Object(w.a)(["\n    user-select: none;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    width: 354px;\n    max-width: 354px;\n"]))),Z=[{value:"flashback",label:"Flashback"},{value:"romantic",label:"Romantic"},{value:"cult",label:"Cult"},{value:"psychedelic",label:"Pshychedelic"},{value:"suspenseful",label:"Suspenseful"},{value:"goodversusevil",label:"Good v Evil"},{value:"action",label:"Action"},{value:"fantasy",label:"Fantasy"},{value:"storytelling",label:"Storytelling"},{value:"psychological",label:"Psychological"},{value:"historical",label:"Historical"},{value:"absurd",label:"Absurd"},{value:"prank",label:"Prank"},{value:"sentimental",label:"Sentimental"},{value:"philosophical",label:"Philosofical"},{value:"avantgarde",label:"Avantgarde"},{value:"bleak",label:"Bleak"}],$=function(e){var t=Object(g.useState)([]),n=Object(k.a)(t,2),a=n[0],c=n[1];return Object(T.jsx)(Y,{className:"dropdown",placeholder:"Select Option",value:Z.filter((function(e){return a.includes(e.value)})),options:Z,onChange:function(t){if(console.log(t),t.length<=3){var n=Array.isArray(t)?t.map((function(e){return e.value})):[];console.log(n),c(n),e.setTags(n)}},isMulti:!0,isClearable:!0})},ee=function(){var e=Object(g.useState)(""),t=Object(k.a)(e,2),n=t[0],a=t[1],c=Object(g.useState)(""),r=Object(k.a)(c,2),i=r[0],o=r[1],l=Object(g.useState)("1"),s=Object(k.a)(l,2),u=s[0],p=s[1],d=Object(g.useState)("Once upon a time"),b=Object(k.a)(d,2),j=b[0],f=b[1],h=Object(g.useState)(!1),x=Object(k.a)(h,2),O=x[0],m=x[1],w=Object(g.useState)(void 0),C=Object(k.a)(w,2),A=C[0],G=C[1],P=Object(g.useState)(-1),F=Object(k.a)(P,2),K=F[0],L=F[1],N=Object(g.useState)("babbage:ft-ufpe-2021-12-04-17-04-13"),H=Object(k.a)(N,2),I=H[0],B=H[1],M=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={model:I,apiKey:i,postProps:{title:j,temperature:parseFloat(u),tags:O?A:void 0},onStartGenerating:function(){return L(1)},onGenerationComplete:function(e){a(e),L(0)}},E(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X="";return X=1===K?"Gerando...":0===K?n:"",Object(T.jsxs)(J,{children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(D,{onClick:B,toggleTags:m}),Object(T.jsxs)(_,{children:[Object(T.jsxs)(q,{children:[Object(T.jsx)(S.b,{"data-for":"apikey-tp","data-tip":"Collab API Key.We provided it over Discord!"}),Object(T.jsx)(R,{htmlFor:"apikey",children:"API Key"}),Object(T.jsx)(V.a,{place:"top",type:"dark",effect:"solid",id:"apikey-tp"})]}),Object(T.jsx)(Q,{name:"apikey",type:"text",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(T.jsxs)(_,{children:[Object(T.jsxs)(q,{children:[Object(T.jsx)(S.b,{"data-for":"title","data-tip":"Title of the movie you want to generate"}),Object(T.jsx)(R,{htmlFor:"input-prompt",children:"Title"}),Object(T.jsx)(V.a,{place:"top",type:"dark",effect:"solid",id:"title"})]}),Object(T.jsx)(Q,{name:"input-prompt",type:"text",value:j,onChange:function(e){return f(e.target.value)}})]}),O&&Object(T.jsxs)(_,{children:[Object(T.jsxs)(q,{children:[Object(T.jsx)(S.b,{"data-for":"tag-tp","data-tip":"Movie tags. Can select up to 3"}),Object(T.jsx)(R,{htmlFor:"tags",children:"Tags"}),Object(T.jsx)(V.a,{"data-multiline":!0,place:"top",type:"dark",effect:"solid",id:"tag-tp"})]}),Object(T.jsx)($,{setTags:G})]}),Object(T.jsxs)(_,{children:[Object(T.jsxs)(q,{children:[Object(T.jsx)(S.b,{"data-for":"temp-tp","data-tip":"Defines how creative the generator will try to be"}),Object(T.jsx)(R,{htmlFor:"input-temp",children:"Temperature"}),Object(T.jsx)(V.a,{place:"top",type:"dark",effect:"solid",id:"temp-tp"})]}),Object(T.jsx)(Q,{name:"input-temp",type:"range",min:"0",max:"1",step:"0.01",onChange:function(e){return p(e.target.value)}})]})]}),Object(T.jsx)(U,{onClick:M,children:"Gimme A New Oscar"}),Object(T.jsx)(W,{children:1===K?Object(T.jsx)(z,{}):X})]})};O.a.render(Object(T.jsx)(h.a.StrictMode,{children:Object(T.jsx)(ee,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.2d0e4e3c.chunk.js.map