(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{210:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||r;return a?o.a.createElement(m,l(l({ref:t},s),{},{components:a})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},278:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/monkeytype-b0a805c34f70740df3907d517dbdd306.png"},279:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/qwerty-b5b02b7d6299702c905c7b63dc33e212.jpg"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),r=(a(0),a(210)),i={title:"Typing fast and well",id:"typing_fast_and_well"},l={unversionedId:"around_tidal/typing_fast_and_well",id:"around_tidal/typing_fast_and_well",isDocsHomePage:!1,title:"Typing fast and well",description:"Introduction",source:"@site/docs/around_tidal/typing_fast_and_well.md",slug:"/around_tidal/typing_fast_and_well",permalink:"/docs/around_tidal/typing_fast_and_well",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/around_tidal/typing_fast_and_well.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1622118996,sidebar:"docs",previous:{title:"What is a pattern?",permalink:"/docs/innards/what_is_a_pattern"},next:{title:"TOPLAP Manifesto",permalink:"/docs/around_tidal/toplap_manifesto"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Typing: speed, accuracy and endurance",id:"typing-speed-accuracy-and-endurance",children:[{value:"Speed and accuracy",id:"speed-and-accuracy",children:[]},{value:"Endurance",id:"endurance",children:[]},{value:"International keyboards",id:"international-keyboards",children:[]}]},{value:"Code editors",id:"code-editors",children:[{value:"Modeless to modal editor",id:"modeless-to-modal-editor",children:[]}]},{value:"Code completion",id:"code-completion",children:[{value:"When not to?",id:"when-not-to",children:[]},{value:"Automatic completion",id:"automatic-completion",children:[]},{value:"Custom snippets",id:"custom-snippets",children:[]}]}],s={toc:c};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Live coding")," is all about ... coding on a keyboard. It is not the usual coding experience though. You need to be fast, reactive, and you need to type well and avoid mistakes. When live coding, especially on stage, you might want to avoid stagnation or typing errors. Actually, the code editor will feel like an instrument after a bit of practice. Danger is everywhere, especially at your fingertips. Typing fast and well when you live code is important, because it will help you to stay in the flow of the improvisation and it will prevent you from many of the dangers that you might encounter otherwise. Of course, nobody is perfect and errors are part of the show too."),Object(r.b)("p",null,"The coding activity is also about manipulating source code, and involves a fair amount of copy/cut/paste like operations. You may also want to learn how to quickly jum from a word to another or how to switch efficiently between multiple text files. The code editor can do a lot of things for you: inserting snippets, completing your code, suggesting a statement, etc..."),Object(r.b)("p",null,"This page will give you a list of advices for typing better on the computer keyboard. The page will be broken into multiple sections, each one dealing with one aspect of text input or text manipulation."),Object(r.b)("h2",{id:"typing-speed-accuracy-and-endurance"},"Typing: speed, accuracy and endurance"),Object(r.b)("h3",{id:"speed-and-accuracy"},"Speed and accuracy"),Object(r.b)("p",null,Object(r.b)("img",{alt:"monkeytype",src:a(278).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"There are many websites that will allow you to train your speed and accuracy, generally on random sequences of words. ",Object(r.b)("a",{parentName:"li",href:"https://monkeytype.com/"},"Monkeytype")," is a good lightweight one that do not require any subscription. ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"These websites are really good if you want/need to learn an alternative keyboard layout."),Object(r.b)("li",{parentName:"ul"},"Be aware of symbols. Add symbols if you can because coding is all about syntax and weird operators."),Object(r.b)("li",{parentName:"ul"},"Go easy. Typing is not natural at all and you can hurt yourself if you practice too much or in a bad position."),Object(r.b)("li",{parentName:"ul"},"Going fast for the sake of going fast is not really smart. You will be faster if you try to be accurate. Try not to make mistakes.")))),Object(r.b)("h3",{id:"endurance"},"Endurance"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can train your endurance by typing something while you read it. It can be a book or anything. ",Object(r.b)("a",{parentName:"li",href:"https://www.typelit.io/"},"Typelit")," will allow to copy litterature classics while training your endurance and accuracy.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Don't try to be fast, but try to be consistant. "),Object(r.b)("li",{parentName:"ul"},"You might read faster than you type. The frustration will encourage you to go fast!")))),Object(r.b)("h3",{id:"international-keyboards"},"International keyboards"),Object(r.b)("p",null,Object(r.b)("img",{alt:"qwerty",src:a(279).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"QWERTY")," is king in the programming world. Very often, programming languages are designed (often involuntarily) around this keyboard layout. Some international keyboard layouts are not very well suited for coding. Some countries adopted the ",Object(r.b)("strong",{parentName:"li"},"QWERTY")," layout as a ",Object(r.b)("em",{parentName:"li"},"de facto")," standard. Good for them."),Object(r.b)("li",{parentName:"ul"},"Alternative keyboard layouts might exist for coders willing to keep their habits. These layouts are often designed for programmers with a logic disposition of symbols, diacritics and symbolic notation. I am currently typing this text using the ",Object(r.b)("strong",{parentName:"li"},"AZERTY-AFNOR")," keyboard, which is pretty good for a french person."),Object(r.b)("li",{parentName:"ul"},"Learning a keyboard layout is fast and simple. Just train as much as you can everyday until you regain your normal speed. People are usually fast learners for everything muscle-memory related.")),Object(r.b)("h2",{id:"code-editors"},"Code editors"),Object(r.b)("h3",{id:"modeless-to-modal-editor"},"Modeless to modal editor"),Object(r.b)("h4",{id:"what-are-they"},"What are they?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"By default, people are used to ",Object(r.b)("em",{parentName:"li"},"modeless")," text editors (like ",Object(r.b)("strong",{parentName:"li"},"Word"),", ",Object(r.b)("strong",{parentName:"li"},"Notepad"),", etc). Pressing a key will enter the corresponding symbol in the current line. This is enough for more than 90% of the uses cases, and people generally except to enter text this way on the keyboard. Most people code this way as well, using a clever combination of text input, various key-combos and mouse movement."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Modal")," editors such as ",Object(r.b)("strong",{parentName:"li"},"Vim")," are using a different system. There are different modes for the keyboard: ",Object(r.b)("strong",{parentName:"li"},"INSERT"),", ",Object(r.b)("strong",{parentName:"li"},"VISUAL"),", ",Object(r.b)("strong",{parentName:"li"},"NORMAL"),", etc.. The ",Object(r.b)("strong",{parentName:"li"},"VISUAL")," mode will remap the keyboard to make text navigation faster, ",Object(r.b)("strong",{parentName:"li"},"INSERT")," will behave almost like the ",Object(r.b)("em",{parentName:"li"},"modeless")," text entry, ",Object(r.b)("strong",{parentName:"li"},"NORMAL")," will map various commands under your fingers, etc.. ",Object(r.b)("em",{parentName:"li"},"Modal")," editors are notoriously hard to learn, but once you learn them, they become like a second nature to the point where it's hard to go back to normal text entry.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Vim")," or ",Object(r.b)("strong",{parentName:"li"},"Emacs")," are extensible by nature. You can script your own functions or add plugins."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Vim")," or ",Object(r.b)("strong",{parentName:"li"},"Emacs")," are keyboard-centric editors. You rarely leave the keyboard to do anything else. The keyboard becomes the central mode of input and dialogue with your computer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Modal")," editors are common in the programming world, where text manipulation skills matter. They are very well suited for live coding.")))),Object(r.b)("h4",{id:"why"},"Why?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Modal")," editors can give you superpowers for editing text: easy code navigation, integration with your terminal, macros, extensibility. "),Object(r.b)("li",{parentName:"ul"},"Keyboard-centricity: do everything with the keyboard. Central interface. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"...insert your good reasons here..."))),Object(r.b)("h2",{id:"code-completion"},"Code completion"),Object(r.b)("h3",{id:"when-not-to"},"When not to?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It is important to develop a muscle memory even for the most basic things: creating patterns, writing using the ",Object(r.b)("inlineCode",{parentName:"li"},"mini-notation")," syntax, etc.. Writing ",Object(r.b)("strong",{parentName:"li"},"Tidal")," patterns can become an almost automatic and non-conscious task. You can now focus on the musical side of things."),Object(r.b)("li",{parentName:"ul"},"Not using completion if you are used to it can be a challenge that will force you to write new things that you haven't explored yet.")),Object(r.b)("h3",{id:"automatic-completion"},"Automatic completion"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Audio sample suggestion: read your ",Object(r.b)("inlineCode",{parentName:"li"},"Dirt-Samples")," folder and suggest some of them that you are not exploring very often."),Object(r.b)("li",{parentName:"ul"},"Function suggestion")),Object(r.b)("h3",{id:"custom-snippets"},"Custom snippets"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can use custom completions for dealing with ",Object(r.b)("em",{parentName:"li"},"boilerplate")," code: init lines, repetitive structure, list of custom parameters, prepared patterns, etc... ",Object(r.b)("strong",{parentName:"li"},"Fun idea"),": store an extensive amount of drum and boolean patterns.")))}d.isMDXComponent=!0}}]);