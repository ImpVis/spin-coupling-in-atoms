(function(t){function e(e){for(var n,a,r=e[0],h=e[1],l=e[2],u=0,c=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&c.push(o[a][0]),o[a]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);m&&m(e);while(c.length)c.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var r=i[a];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=h(h.s=i[0]))}return t}var n={},a={spincoupling:0},o={spincoupling:0},s=[];function r(t){return h.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4639":"4790a3d3","chunk-76e94462":"30e7b526"}[t]+".js"}function h(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,h),i.l=!0,i.exports}h.e=function(t){var e=[],i={"chunk-76e94462":1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0c4639":"31d6cfe0","chunk-76e94462":"0616178c"}[t]+".css",o=h.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){l=c[r],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],m.parentNode.removeChild(m),i(s)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,h.nc&&u.setAttribute("nonce",h.nc),u.src=r(t);var c=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var i=o[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,i[1](c)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},h.m=t,h.c=n,h.d=function(t,e,i){h.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},h.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},h.t=function(t,e){if(1&e&&(t=h(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(h.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)h.d(i,n,function(e){return t[e]}.bind(null,n));return i},h.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return h.d(e,"a",e),e},h.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},h.p="",h.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var m=u;s.push([4,"chunk-vendors"]),i()})({0:function(t,e){},"1b43":function(t,e,i){},4:function(t,e,i){t.exports=i("c7ea")},"5f35":function(t,e){t.exports={publicPath:"./",pages:{index:{entry:"src/main.js",title:"Index"},quantumangmom:{entry:"src/quantumangmom/main.js",title:"quantumangmom"},spinorbit:{entry:"src/spinorbit/main.js",title:"spinorbit"},spincoupling:{entry:"src/spincoupling/main.js",title:"spincoupling"},energysplit:{entry:"src/energysplit/main.js",title:"energysplit"}}}},b216:function(t,e,i){"use strict";i("1b43")},c7ea:function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),a=i("fff8"),o=(i("f3ff"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("iv-visualisation",{attrs:{title:t.pageName,vue_config:t.vue_config,page_number:3},scopedSlots:t._u([{key:"hotspots",fn:function(){return[i("iv-pane",{attrs:{position:"left",format:"push",width:28}},[i("iv-sidebar-content",{attrs:{showPagination:!0}},[i("iv-sidebar-section",{attrs:{title:"Theory",icon:"microscope"}},[i("p",[t._v(" The electron's spin gives rise to a magnetic moment "),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\mathbf{\\mu}_s=-\\mu_B\\mathbf{\\hat{s}}"}}),t._v(". Since there is no external torque on the atom, the "),i("b",[t._v("total angular momentum must be constant")]),t._v(". However, the spin and orbital angular momenta, "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{S}"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{L}"}}),t._v(", both precess around "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{J}"}}),t._v(" due to the torque coming from the interaction "),i("iv-equation-box",{attrs:{stylise:!0,equation:"-\\mathbf{\\mu}_s\\cdot\\mathbf{B}"}}),t._v(". ")],1),i("p",[t._v(" For a two-electron system, either "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{s}_1,\\mathbf{s}_2"}}),t._v(" couple to form a total spin vector "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{S}"}}),t._v(" (likewise with "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{l}_1,\\mathbf{l}_2 ,"}}),t._v(") or "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{s}_1,\\mathbf{l}_1"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{s}_2,\\mathbf{l}_2"}}),t._v(" couple to make total angular momentum vectors "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{j}_1,\\mathbf{j}_2 ."}})],1)]),i("iv-sidebar-section",{attrs:{title:"Instructions",icon:"question",theme:"Lime"}},[i("p",[t._v(" Change the quantum numbers by opening the tab at the button, to see how "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{s}"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{l}"}}),t._v(" affect "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{j}"}}),t._v(". Change "),i("iv-equation-box",{attrs:{stylise:!1,equation:"m_j"}}),t._v(" to see how the the orientation changes on the diagram. ")],1),i("p",[t._v(" What effect do you think the Zeeman effect would have on the vectors? Note that the cones map out the vectors precession. ")])]),i("iv-sidebar-section",{attrs:{title:"Derivation",icon:"calculator",theme:"Purple"}},[i("p",[t._v(" In a single-electron atom, due to the spin of the electron "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{s}"}}),t._v(", it also has a magnetic moment "),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\mathbf{\\mu}_s=-\\frac{ge}{2m}\\mathbf{s}"}}),t._v(", where "),i("iv-equation-box",{attrs:{stylise:!1,equation:"g\\approx 2"}}),t._v(" is the "),i("i",[t._v("gyromagnetic ratio")]),t._v(". Now the electron is moving in the electric field of the nucleus, so it experiences a magnetic field in its moving frame which interacts with "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{\\mu}_s"}}),t._v(". Classically, the magnetic field seen by the electron is "),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\mathbf{B}=-\\frac{1}{c^2}\\mathbf{v}\\times\\mathbf{E}=-\\frac{1}{ec^2}\\mathbf{v}\\times\\nabla V(r)"}}),t._v(", where "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{v}"}}),t._v(" is its velocity vector, "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{E}"}}),t._v(" is the electric field, and "),i("iv-equation-box",{attrs:{stylise:!0,equation:"V(r)=-\\frac{Ze^2}{4\\pi\\varepsilon_0r}"}}),t._v(". This magnetic field "),i("b",[t._v("interacts with the spin magnetic moment")]),t._v(": the "),i("i",[t._v("spin-orbit interaction")]),t._v(". ")],1),i("p",[t._v(" Since there is no external torque on the atom itself, a coupling between the orbital angular momentum "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{l}"}}),t._v(" and spin "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{s}"}}),t._v(" must result in a total angular momentum "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{j}"}}),t._v(", where "),i("iv-equation-box",{attrs:{stylise:!1,equation:"|\\mathbf{j}|"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{j}_z"}}),t._v(" are constant. However, if placed in the magnetic field, "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{j}"}}),t._v(" therefore precesses around the "),i("iv-equation-box",{attrs:{stylise:!1,equation:"z"}}),t._v("-axis due to the torque "),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\mathbf{\\tau}=\\mathbf{\\mu}\\times\\mathbf{B}=-\\frac{e}{m}\\mathbf{j}\\times\\mathbf{B}"}}),t._v(". Likewise, "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{s}"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{l}"}}),t._v(" precess around "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{j}"}}),t._v(". This also implies that "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{l}"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{l}_z"}}),t._v(" are no longer constant, so "),i("iv-equation-box",{attrs:{stylise:!1,equation:"m_s"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"m_l"}}),t._v(" are no longer suitable quantum numbers. Instead, we introduce the total angular momentum quantum number "),i("iv-equation-box",{attrs:{stylise:!0,equation:"j=s+l"}}),t._v(" and the corresponding secondary number "),i("iv-equation-box",{attrs:{stylise:!1,equation:"m_j"}}),t._v(" that takes values "),i("iv-equation-box",{attrs:{stylise:!1,equation:"-j,\\dots,j"}}),t._v(" in integer steps. ")],1),i("figure",[i("img",{attrs:{src:"assets/vectors.png",width:"100%"}}),i("figcaption",[i("p",{attrs:{align:"center"}},[t._v(" LS-coupling diagram ")])])]),i("p",[t._v(" In "),i("b",[t._v("two-electron systems")]),t._v(" the total angular momentum "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{J}"}}),t._v(" also precesses around the "),i("iv-equation-box",{attrs:{stylise:!1,equation:"z"}}),t._v("-axis, but the individual orbital and spin angular momenta of the electrons, "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{s}_1,\\mathbf{l}_1,\\mathbf{s}_2,\\mathbf{l}_2"}}),t._v(" can couple in different ways. ")],1),i("p",[t._v(" Either the vectors pair up to make a "),i("i",[t._v("total")]),t._v(" orbital and spin angular momentum "),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\mathbf{S}=\\mathbf{s}_1+\\mathbf{s}_2"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\mathbf{L}=\\mathbf{l}_1+\\mathbf{l}_2"}}),t._v(", which is called "),i("b",[t._v("LS-coupling")]),t._v(". These then behave much like single-electron systems, where "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{L}"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{S}"}}),t._v(" precess around "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{J}"}}),t._v(". The second possibility is coupling within each electron, giving two total angular momenta "),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\mathbf{j}_1=\\mathbf{l}_1+\\mathbf{s}_1"}}),t._v(" and "),i("iv-equation-box",{attrs:{stylise:!0,equation:"\\mathbf{j}_2=\\mathbf{l}_2+\\mathbf{s}_2"}}),t._v(". This is called "),i("b",[t._v("jj-coupling")]),t._v(" and likewise, they precess around the total angular momentum of the atom "),i("iv-equation-box",{attrs:{stylise:!1,equation:"\\mathbf{J}"}}),t._v(". ")],1),i("p",[i("iv-equation-box",{attrs:{stylise:!0,equation:"\\begin{matrix}\n                            \\mathbf{s}_1 & + & \\mathbf{l}_1 & \\Rightarrow & \\mathbf{j}_1 \\\\\n                            + & & + & & + \\\\ \n                            \\mathbf{s}_2 & + & \\mathbf{l}_2 & \\Rightarrow & \\mathbf{j}_2 \\\\ \n                            \\Downarrow & & \\Downarrow & & \\Downarrow \\\\ \n                            \\mathbf{S} & + & \\mathbf{L} & \\Rightarrow & \\mathbf{J}\n                            \\end{matrix}"}})],1)])],1)],1),i("iv-fixed-hotspot",{staticStyle:{"z-index":"2"},attrs:{noWastedSpace:!0,position:"topright"}},[i("iv-toggle-advance",{attrs:{modes:t.modeNames1,position:"centre"},on:{toggleswitched:t.electronChange}}),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.electrons,expression:"electrons == 1"}],attrs:{id:"oneElectron"}},[i("label",{attrs:{for:"coneToggle"}},[t._v(" Cones Off/On ")]),i("iv-toggle-basic",{attrs:{id:"coneToggle",value:!0},on:{input:t.coneChange}})],1),i("div",[i("label",{attrs:{for:"playToggle"}},[t._v(" Zeeman effect Off/On ")]),i("iv-toggle-basic",{attrs:{id:"playToggle"},on:{input:t.stopStartChange}})],1)],1),i("iv-toggle-hotspot",{staticStyle:{"z-index":"2"},attrs:{glass:!0,position:"bottom",title:"Quantum numbers"}},[i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.electrons,expression:"electrons == 1"}],attrs:{id:"oneElectron"}},[i("label",{attrs:{for:"toggle2"}},[t._v(" Spin quantum number, s ")]),i("iv-toggle-advance",{attrs:{id:"toggle2",modes:t.sModeNames,width:t.toggleWidth,initialModeIndex:0,position:"centre"},on:{toggleswitched:t.sChange}}),i("label",{attrs:{for:"toggle3"}},[t._v(" Azimuthal quantum number, l ")]),i("iv-toggle-advance",{attrs:{id:"toggle3",modes:t.lModeNames,width:t.toggleWidth,initialModeIndex:1,position:"centre"},on:{toggleswitched:t.lChange}})],1),i("p",[t._v(" Total angular momentum quantum number: "+t._s(t.j)+" ")]),1==t.jWhole?i("div",[i("label",{attrs:{for:"mjToggle1"}},[t._v(" Secondary total angular momentum quantum number, m_j ")]),i("iv-toggle-advance",{attrs:{id:"mjToggle1",width:t.toggleWidth,togglesDisabled:t.disableList1,modes:t.mjModeNames1,initialModeIndex:0,position:"centre"},on:{toggleswitched:t.mjChange}})],1):t._e(),0==t.jWhole?i("div",[i("label",{attrs:{for:"mjToggle2"}},[t._v(" Secondary total angular momentum quantum number, m_j ")]),i("iv-toggle-advance",{attrs:{id:"mjToggle2",width:t.toggleWidth,togglesDisabled:t.disableList2,modes:t.mjModeNames2,initialModeIndex:4,position:"centre"},on:{toggleswitched:t.mjChange}})],1):t._e()])])]},proxy:!0}])},[i("div",{staticClass:"iv-welcome-message"},[i("div",{attrs:{id:"graph"}})])])],1)}),s=[],r=i("5f35"),h=i.n(r),l=i("a226"),u=i.n(l),c=i("7909"),m={name:"spincoupling",data(){return{pageName:"Spin Orbit Coupling",vue_config:h.a,electrons:1,cones:!0,jjChoice:!0,stopStartChanged:!1,playAnimation:!1,lChoice:1,l1Choice:0,l2Choice:1,sChoice:.5,s1Choice:1,s2Choice:.5,mjChoice:.5,electronChanged:!1,j:1.5,jWhole:!1,disableList2:[!0,!0,!0,!1,!1,!0,!0,!0],disableList1:[!0,!0,!0,!0,!0,!0,!0,!0,!0],coupling:"LS",couplingChanged:!1}},props:{modeNames1:{default:["One Electron"]},sModeNames:{default:["1/2","1"]},lModeNames:{default:["0","1","2","3"]},mjModeNames1:{default:["-4","-3","-2","-1","0","1","2","3","4"]},mjModeNames2:{default:["-7/2","-5/2","-3/2","-1/2","1/2","3/2","5/2","7/2"]},toggleWidth:{default:"45px"}},methods:{electronChange(t){this.electrons=t+1,1==this.electrons?(this.j=this.sChoice+this.lChoice,this.coupling="LS"):(this.j=this.s1Choice+this.s2Choice+this.l1Choice+this.l2Choice,this.coupling="jj"),this.mjDisable(),this.electronChanged=!0},jjChange(t){console.log("e"),console.log(t),this.coupling=0==t?"jj":"LS",this.graphUpdate=!0},coneChange(t){this.cones=!t,this.graphUpdate=!0},stopStartChange(t){console.log(t),this.playAnimation=!t,this.stopStartChanged=!0},sChange(t){this.sChoice=(t+1)/2,this.j=this.sChoice+this.lChoice,this.j%1==0?this.jWhole=!0:this.jWhole=!1,this.mjDisable(),this.graphUpdate=!0},mjDisable(){if(1==this.jWhole){let t=Math.abs(this.j-4),e=t+2*this.j,i=[];if(e>8)this.disableList1=[!1,!1,!1,!1,!1,!1,!1,!1];else{for(let n=0;n<9;n++)n>=t&&n<=e?i.push(!1):i.push(!0);this.disableList1=i}}else{let t=Math.abs(this.j-3.5),e=t+2*this.j,i=[];if(e>7)this.disableList1=[!1,!1,!1,!1,!1,!1,!1,!1,!1];else{for(let n=0;n<8;n++)n>=t&&n<=e?i.push(!1):i.push(!0);this.disableList2=i}}},s1Change(t){this.s1Choice=(t+1)/2,this.j=this.s1Choice+this.s2Choice+this.l1Choice+this.l2Choice,this.j%1==0?this.jWhole=!0:this.jWhole=!1,this.mjDisable(),this.graphUpdate=!0},s2Change(t){this.s2Choice=(t+1)/2,this.j=this.s1Choice+this.s2Choice+this.l1Choice+this.l2Choice,this.j%1==0?this.jWhole=!0:this.jWhole=!1,this.mjDisable(),this.graphUpdate=!0},lChange(t){this.lChoice=t,this.j=this.sChoice+this.lChoice,this.j%1==0?this.jWhole=!0:this.jWhole=!1,this.mjDisable(),this.graphUpdate=!0},l1Change(t){this.l1Choice=t,this.j=this.s1Choice+this.s2Choice+this.l1Choice+this.l2Choice,this.j%1==0?this.jWhole=!0:this.jWhole=!1,this.mjDisable(),this.graphUpdate=!0},l2Change(t){this.l2Choice=t,this.j=this.s1Choice+this.s2Choice+this.l1Choice+this.l2Choice,this.j%1==0?this.jWhole=!0:this.jWhole=!1,this.mjDisable(),this.graphUpdate=!0},mjChange(t){1==this.jWhole?this.mjChoice=t-4:this.mjChoice=t-3.5,console.log("mj"),console.log(this.mjChoice),this.graphUpdate=!0}},mounted(){let t=this;function e(t,e,i){this.x=t||0,this.y=e||0,this.z=i||0}e.prototype={negative:function(){return new e(-this.x,-this.y,-this.z)},add:function(t){return t instanceof e?new e(this.x+t.x,this.y+t.y,this.z+t.z):new e(this.x+t,this.y+t,this.z+t)},subtract:function(t){return t instanceof e?new e(this.x-t.x,this.y-t.y,this.z-t.z):new e(this.x-t,this.y-t,this.z-t)},multiply:function(t){return t instanceof e?new e(this.x*t.x,this.y*t.y,this.z*t.z):new e(this.x*t,this.y*t,this.z*t)},divide:function(t){return t instanceof e?new e(this.x/t.x,this.y/t.y,this.z/t.z):new e(this.x/t,this.y/t,this.z/t)},equals:function(t){return this.x==t.x&&this.y==t.y&&this.z==t.z},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){return new e(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},length:function(){return Math.sqrt(this.dot(this))},unit:function(){return this.divide(this.length())},min:function(){return Math.min(Math.min(this.x,this.y),this.z)},max:function(){return Math.max(Math.max(this.x,this.y),this.z)},toAngles:function(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}},angleTo:function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},toArray:function(t){return[this.x,this.y,this.z].slice(0,t||3)},clone:function(){return new e(this.x,this.y,this.z)},init:function(t,e,i){return this.x=t,this.y=e,this.z=i,this},vecToMatrix:function(){return Object(c["a"])([[this.x],[this.y],[this.z]])},linearTransform:function(t){return[].concat.apply([],Object(c["b"])(t,this.vecToMatrix())["_data"])},project:function(t){return t.unit().multiply(this.dot(t.unit()))}},e.negative=function(t,e){return e.x=-t.x,e.y=-t.y,e.z=-t.z,e},e.add=function(t,i,n){return i instanceof e?(n.x=t.x+i.x,n.y=t.y+i.y,n.z=t.z+i.z):(n.x=t.x+i,n.y=t.y+i,n.z=t.z+i),n},e.subtract=function(t,i,n){return i instanceof e?(n.x=t.x-i.x,n.y=t.y-i.y,n.z=t.z-i.z):(n.x=t.x-i,n.y=t.y-i,n.z=t.z-i),n},e.multiply=function(t,i,n){return i instanceof e?(n.x=t.x*i.x,n.y=t.y*i.y,n.z=t.z*i.z):(n.x=t.x*i,n.y=t.y*i,n.z=t.z*i),n},e.divide=function(t,i,n){return i instanceof e?(n.x=t.x/i.x,n.y=t.y/i.y,n.z=t.z/i.z):(n.x=t.x/i,n.y=t.y/i,n.z=t.z/i),n},e.cross=function(t,e,i){return i.x=t.y*e.z-t.z*e.y,i.y=t.z*e.x-t.x*e.z,i.z=t.x*e.y-t.y*e.x,i},e.unit=function(t,e){var i=t.length();return e.x=t.x/i,e.y=t.y/i,e.z=t.z/i,e},e.fromAngles=function(t,i){return new e(Math.cos(t)*Math.cos(i),Math.sin(i),Math.sin(t)*Math.cos(i))},e.randomDirection=function(){return e.fromAngles(Math.random()*Math.PI*2,Math.asin(2*Math.random()-1))},e.min=function(t,i){return new e(Math.min(t.x,i.x),Math.min(t.y,i.y),Math.min(t.z,i.z))},e.max=function(t,i){return new e(Math.max(t.x,i.x),Math.max(t.y,i.y),Math.max(t.z,i.z))},e.lerp=function(t,e,i){return e.subtract(t).multiply(i).add(t)},e.fromArray=function(t){return new e(t[0],t[1],t[2])},e.angleBetween=function(t,e){return t.angleTo(e)};const i={layout:{legend:{x:0,y:0,orientation:"h"},showscale:!1,margin:{l:1,r:0,b:0,t:1,pad:5},scene:{aspectmode:"cube",xaxis:{title:"Lx",titlefont:{family:"Fira Sans",size:18,color:"#7f7f7f"},tickvals:[-4,-3,-2,-1,0,1,2,3,4],ticktext:["-4ħ","-3ħ","-2ħ","-ħ",0,"ħ","2ħ","3ħ","4ħ"]},yaxis:{title:"Ly",titlefont:{family:"Fira Sans",size:18,color:"#7f7f7f"},tickvals:[-4,-3,-2,-1,0,1,2,3,4],ticktext:["-4ħ","-3ħ","-2ħ","-ħ",0,"ħ","2ħ","3ħ","4ħ"]},zaxis:{title:"Lz",titlefont:{family:"Fira Sans",size:18,color:"#7f7f7f"},tickvals:[-4,-3,-2,-1,0,1,2,3,4],ticktext:["-4ħ","-3ħ","-2ħ","-ħ",0,"ħ","2ħ","3ħ","4ħ"]},camera:{eye:{x:1.2,y:1.2,z:1.1}}},hovermode:!1}};var n=0;function a(){2==t.electrons?(u.a.deleteTraces("graph",[-1,-2,-3,-4,-5]),u.a.addTraces("graph",[{},{},{},{},{},{},{},{},{},{}]),t.cones=!0,r()):(u.a.deleteTraces("graph",[-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]),u.a.addTraces("graph",[{},{},{},{},{}]),t.coupling="jj",o())}function o(){"LS"==t.coupling?t.coupling="jj":t.coupling="LS",0==t.playAnimation&&y()}function s(){y()}function r(){0==t.playAnimation&&y()}function h(t){return Math.sqrt(t*(t+1))}function l(t,i,n,a,o){let s=i[1],r=n[1],h=a[1],l=.2*(i[1]-i[0]),u=.2*(n[1]-n[0]),c=.2*(a[1]-a[0]);t.push({type:"cone",colorscale:[[0,o],[1,o]],x:[s],y:[r],z:[h],u:[l],v:[u],w:[c],sizemode:"absolute",sizeref:.3*Math.sqrt(e.fromArray([s,r,h]).length()),showscale:!1})}function m(i,n,a,o){if(1==t.cones)var s=.4;else s=0;let r={x:[],y:[],z:[]},h={x:[],y:[],z:[]},l={x:[],y:[],z:[]},u=new e(0,0,1);for(let t=0;t<50;t++)r.x.push(0),r.y.push(0),r.z.push(0),h.x.push(0),h.y.push(0),h.z.push(0),l.x.push(0),l.y.push(0),l.z.push(0),r.x.push(i.linearTransform(d(t,a))[0]),r.y.push(i.linearTransform(d(t,a))[1]),r.z.push(i.linearTransform(d(t,a))[2]),h.x.push(n.linearTransform(d(t,a))[0]),h.y.push(n.linearTransform(d(t,a))[1]),h.z.push(n.linearTransform(d(t,a))[2]),l.x.push(a.linearTransform(d(t,u))[0]),l.y.push(a.linearTransform(d(t,u))[1]),l.z.push(a.linearTransform(d(t,u))[2]);o.push({type:"mesh3d",color:"#0080FF",opacity:s,x:r.x,y:r.y,z:r.z},{type:"mesh3d",color:"#50C878",opacity:s,x:h.x,y:h.y,z:h.z},{type:"mesh3d",color:"#9400D3",opacity:s,x:l.x,y:l.y,z:l.z})}function d(t,e){let[i,n,a]=e.unit().toArray(),o=Math.cos(t),s=Math.sin(t),r=1-o,h=Object(c["a"])([[i*i*r+o,i*n*r-a*s,i*a*r+n*s],[i*n*r+a*s,n*n*r+o,n*a*r-i*s],[i*a*r-n*s,n*a*r+i*s,a*a*r+o]]);return h}function f(t,i,n,a,o=0){if("number"==typeof t){var s=Math.acos(a/t);t=new e(t*Math.sin(s)*Math.cos(o),t*Math.sin(s)*Math.sin(o),t*Math.cos(s))}else t instanceof e&&(s=Math.acos(a/t.length()),o=Math.atan2(t.y,t.x));let r=Math.acos((t.length()*t.length()-i*i+n*n)/(2*t.length()*n)),h=Math.acos((t.length()*t.length()+i*i-n*n)/(2*t.length()*i)),l=new e(i*Math.sin(s+h)*Math.cos(o),i*Math.sin(s+h)*Math.sin(o),i*Math.cos(s+h)),u=new e(n*Math.sin(s-r)*Math.cos(o),n*Math.sin(s-r)*Math.sin(o),n*Math.cos(s-r));return[t,l,u]}function g(){let a=[],o=t.mjChoice,s=.05,r=.1,u=.2;if(1==t.electrons)var c=t.sChoice,g=t.lChoice;else{var p=t.s1Choice,y=t.l1Choice,v=t.s2Choice,b=t.l2Choice;c=p+v,g=y+b}var x,_,q,j,w,z;if(console.log("made it here"),"LS"==t.coupling){[_,x,q]=f(h(g+c),h(g),h(c),o,s*n),[j,w,z]=_.toArray(3);var[C,M,T]=x.linearTransform(d(r*n,_)),[S,F,A]=q.linearTransform(d(r*n,_));if(x=e.fromArray([C,M,T]),q=e.fromArray([S,F,A]),a.push({name:"Angular momentum",type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#0080FF"},legendgroup:"l",showlegend:!0,x:[0,C],y:[0,M],z:[0,T]},{name:"Spin",type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#50C878"},legendgroup:"s",showlegend:!0,x:[0,S],y:[0,F],z:[0,A]}),l(a,[0,C],[0,M],[0,T],"#0080FF"),l(a,[0,S],[0,F],[0,A],"#50C878"),console.log("L is this"),console.log(x),2==t.electrons){var L,k,E,B;console.log("in if statement"),console.log(x),console.log("displayed"),[x,L,k]=f(x,h(y),h(b),T),[q,E,B]=f(q,h(p),h(v),A);var[W,O,N]=L.linearTransform(d(u*n,x)),[D,P,U]=k.linearTransform(d(u*n,x)),[I,J,H]=E.linearTransform(d(u*n,q)),[R,Z,V]=B.linearTransform(d(u*n,q));console.log("past checkpoint"),a.push({type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#9FCFFF"},legendgroup:"l",showlegend:!1,x:[0,W],y:[0,O],z:[0,N]},{type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#9FCFFF"},legendgroup:"l",showlegend:!1,x:[0,D],y:[0,P],z:[0,U]},{type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#A8E4BB"},legendgroup:"s",showlegend:!1,x:[0,I],y:[0,J],z:[0,H]},{type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#A8E4BB"},legendgroup:"s",showlegend:!1,x:[0,R],y:[0,Z],z:[0,V]}),l(a,[0,W],[0,O],[0,N],"#9FCFFF"),l(a,[0,D],[0,P],[0,U],"#9FCFFF"),l(a,[0,I],[0,J],[0,H],"#A8E4BB"),l(a,[0,R],[0,Z],[0,V],"#A8E4BB")}else m(x,q,_,a)}else{[_,tt,et]=f(h(g+c),h(y+p),h(b+v),o,s*n),[j,w,z]=_.toArray(3);var[$,K,Q]=tt.linearTransform(d(r*n,_)),[G,X,Y]=et.linearTransform(d(r*n,_)),tt=e.fromArray([$,K,Q]),et=e.fromArray([G,X,Y]),[tt,L,E]=f(tt,h(y),h(p),Q),[et,k,B]=f(et,h(b),h(v),Y),[W,O,N]=L.linearTransform(d(u*n,tt)),[D,P,U]=k.linearTransform(d(u*n,et)),[I,J,H]=E.linearTransform(d(u*n,tt)),[R,Z,V]=B.linearTransform(d(u*n,et));a.push({type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#CA80E9"},showlegend:!1,legendgroup:"j",x:[0,$],y:[0,K],z:[0,Q]},{type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#CA80E9"},showlegend:!1,legendgroup:"j",x:[0,G],y:[0,X],z:[0,Y]}),l(a,[0,$],[0,K],[0,Q],"#CA80E9"),l(a,[0,G],[0,X],[0,Y],"#CA80E9"),a.push({name:"Orbital angular momentum",type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#9FCFFF"},legendgroup:"l",showlegend:!0,x:[0,W],y:[0,O],z:[0,N]},{type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#9FCFFF"},legendgroup:"l",showlegend:!1,x:[0,D],y:[0,P],z:[0,U]},{name:"Spin",type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#A8E4BB"},legendgroup:"s",showlegend:!0,x:[0,I],y:[0,J],z:[0,H]},{type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#A8E4BB"},legendgroup:"s",showlegend:!1,x:[0,R],y:[0,Z],z:[0,V]}),l(a,[0,W],[0,O],[0,N],"#9FCFFF"),l(a,[0,D],[0,P],[0,U],"#9FCFFF"),l(a,[0,I],[0,J],[0,H],"#A8E4BB"),l(a,[0,R],[0,Z],[0,V],"#A8E4BB")}return i.layout.scene.xaxis.range=[-_.length(),_.length()],i.layout.scene.yaxis.range=[-_.length(),_.length()],i.layout.scene.zaxis.range=[-_.length(),_.length()],a.push({name:"Total angular momentum",type:"scatter3d",mode:"lines",line:{width:10,dash:"solid",color:"#9400D3"},legendgroup:"j",x:[0,j],y:[0,w],z:[0,z]}),l(a,[0,j],[0,w],[0,z],"#9400D3"),a}function p(){u.a.purge("graph"),u.a.newPlot("graph",g(),i.layout),y()}function y(){u.a.animate("graph",{data:g()},{fromcurrent:!0,frame:{duration:0,redraw:!0},transition:{duration:0},mode:"next"}),1==t.playAnimation&&n++}function v(){requestAnimationFrame(v),1==t.electronChanged&&(a(),t.electronChanged=!1),1==t.stopStartChanged&&(s(),t.stopStartChanged=!1),1==t.stopStartChanged&&(s(),t.stopStartChanged=!1),1==t.playAnimation&&y(),1==t.graphUpdate&&(y(),t.graphUpdate=!1)}p(),v()}},d=m,f=(i("b216"),i("2877")),g=Object(f["a"])(d,o,s,!1,null,null,null),p=g.exports,y=i("5dea");n["a"].config.productionTip=!1,n["a"].use(a["a"]),n["a"].use(y["a"]),new n["a"]({render:t=>t(p)}).$mount("#app")}});
//# sourceMappingURL=spincoupling.06a91aa0.js.map