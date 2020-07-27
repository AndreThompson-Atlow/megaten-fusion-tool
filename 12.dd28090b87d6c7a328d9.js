(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+wh5":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(n,l){this.compConfig=n,this.gameAbbr=l,this.specialRecipes={},this.dlcDemons={},this.initImportedData(),this.updateDerivedData()}return n.prototype.initImportedData=function(){var n=this,l={},e={},t={},i={},u={};this._inheritTypes={};for(var o=0,r=this.compConfig.demonData[this.gameAbbr];o<r.length;o++)for(var s=0,a=Object.entries(r[o]);s<a.length;s++){var c=a[s],p=c[0];l[p]={name:p,race:(j=c[1]).race,lvl:j.lvl,price:Math.pow(j.stats.reduce(function(n,l){return l+n},0),2)+2e3,inherit:j.inherits,stats:j.stats,resists:j.resists.split("").map(function(l){return n.compConfig.resistCodes[l]}),skills:j.skills,fusion:j.fusion||"normal",prereq:j.prereq||""}}for(var m=0,g=this.compConfig.enemyData[this.gameAbbr];m<g.length;m++)for(var f=0,d=Object.entries(g[m]);f<d.length;f++){var b=d[f],h=b[0],v=b[1],k=[];v.material&&"-"!==v.material&&k.push(v.material),v.gem&&"-"!==v.gem&&k.push(v.gem),v.drops&&(k=k.concat(v.drops)),k.length||k.push("-"),e[h]={name:h,race:v.race,lvl:v.lvl,price:0,stats:v.stats.slice(0,2),estats:v.stats.slice(2),resists:v.resists.toLowerCase().split("").map(function(l){return n.compConfig.resistCodes[l]}),skills:v.skills.reduce(function(n,l){return n[l]=0,n},{}),fusion:"normal",area:v.area,drop:k.join(", "),isEnemy:!0}}for(var C=0,y=this.compConfig.skillData[this.gameAbbr];C<y.length;C++)for(var O=0,I=Object.entries(y[C]);O<I.length;O++){var w=I[O],H=w[0],D=(j=w[1]).power||0,L=j.target||"",S=j.effect,J=j.effect;D?(J=D?j.damage+" ("+D.toString()+") dmg":"",J+=L?" to "+L.toLowerCase():"",J+=S?", "+S:""):L&&(J+=("support"===j.element?" for ":" to ")+L.toLowerCase()),t[H]={name:H,element:j.element,cost:j.cost||0,rank:j.rank||99,effect:J,learnedBy:[],transfer:[],level:0},j.card&&(t[H].transfer=j.card.split(", ").map(function(n){return{demon:n,level:l[n]?0:-100}}))}for(var F=0,T=Object.entries(this.compConfig.specialRecipes[this.gameAbbr]);F<T.length;F++){var j,A=T[F],R=A[0];i[R]=j=A[1],l[R].fusion="special"}for(var E=0,Y=this.compConfig.races;E<Y.length;E++)u[Y[E]]={};for(var _=0,x=Object.entries(l);_<x.length;_++){var N=x[_],G=N[0],$=N[1];"party"!==$.fusion&&(u[$.race][$.lvl]=G);for(var W=0,z=Object.entries($.skills);W<z.length;W++){var P=z[W];t[P[0]].learnedBy.push({demon:G,level:P[1]})}}this.demons=l,this.enemies=e,this.skills=t,this.specialRecipes=i,this.invertedDemons=u,this._inheritTypes=this.compConfig.inheritTypes},n.prototype.updateDerivedData=function(){for(var n=this,l={},e={},t=[],i=0,u=Object.values(this.skills);i<u.length;i++){var o=u[i];o.learnedBy.length<1?o.rank=99:t.push(o)}for(var r=0,s=this.compConfig.races;r<s.length;r++)l[b=s[r]]=[],e[b]=[];for(var a=0,c=Object.entries(this.demons);a<c.length;a++){var p=c[a],m=p[0],g=p[1];"party"!==g.fusion&&(l[g.race].push(g.lvl),this.specialRecipes.hasOwnProperty(m)||e[g.race].push(g.lvl))}for(var f=0,d=this.compConfig.races;f<d.length;f++){var b;l[b=d[f]].sort(function(n,l){return n-l}),e[b].sort(function(n,l){return n-l})}var h=Object.keys(this.demons).map(function(l){return n.demons[l]}),v=Object.keys(this.enemies).map(function(l){return n.enemies[l]});this._allDemons=v.concat(h),this._allSkills=t,this.allIngredients=l,this.allResults=e},Object.defineProperty(n.prototype,"allDemons",{get:function(){return this._allDemons},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allSkills",{get:function(){return this._allSkills},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"specialDemons",{get:function(){var n=this;return Object.keys(this.specialRecipes).map(function(l){return n.demons[l]})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inheritHeaders",{get:function(){return this.compConfig.inheritElems},enumerable:!0,configurable:!0}),n.prototype.getDemon=function(n){return this.demons[n]||this.enemies[n]},n.prototype.getSkill=function(n){return this.skills[n]},n.prototype.getSkills=function(n){var l=this,e=this.compConfig.elemOrder,t=n.map(function(n){return l.skills[n]});return t.sort(function(n,l){return 1e4*(e[n.element]-e[l.element])+n.rank-l.rank}),t},n.prototype.getIngredientDemonLvls=function(n){return this.allIngredients[n]||[]},n.prototype.getResultDemonLvls=function(n){return this.allResults[n]||[]},n.prototype.getSpecialNameEntries=function(n){return this.specialRecipes[n]||[]},n.prototype.getSpecialNamePairs=function(n){return[]},n.prototype.getInheritElems=function(n){return this._inheritTypes[n]},n.prototype.reverseLookupDemon=function(n,l){return this.invertedDemons[n][l]},n.prototype.reverseLookupSpecial=function(n){return[]},n.prototype.isElementDemon=function(n){return!1},n}()},"3oXS":function(n,l,e){"use strict";e.d(l,"a",function(){return f});var t=e("CcnG"),i=e("dXIv"),u=e("DUID"),o=e("h6dA"),r=e("Ip0R"),s=e("n6IH"),a=e("ZYjt"),c=e("afYW"),p=t.nb({encapsulation:2,styles:[],data:{}});function m(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,3,"app-smt-skill-list",[],null,null,null,i.c,i.a)),t.Eb(4608,null,u.a,u.a,[[3,u.a]]),t.ob(2,8503296,null,0,o.a,[],{rowData:[0,"rowData"],elemOrder:[1,"elemOrder"],isPersona:[2,"isPersona"],transferTitle:[3,"transferTitle"]},null),t.Bb(131072,r.b,[t.h])],function(n,l){var e=l.component;n(l,2,0,t.Ib(l,2,0,t.zb(l,3).transform(e.skills)),e.compConfig.elemOrder,!0,e.transferTitle)},null)}function g(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-skill-list-container",[],null,null,null,m,p)),t.ob(1,245760,null,0,s.a,[a.h,t.h,c.a],null,null)],function(n,l){n(l,1,0)},null)}var f=t.lb("app-skill-list-container",s.a,g,{},{},[])},ApX8:function(n,l,e){"use strict";e.d(l,"a",function(){return d});var t=e("CcnG"),i=e("FAMI"),u=e("DUID"),o=e("cEcl"),r=e("Ip0R"),s=e("gO3W"),a=e("ZYjt"),c=e("ZYCi"),p=e("afYW"),m=t.nb({encapsulation:2,styles:[],data:{}});function g(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,3,"app-smt-demon-list",[],null,null,null,i.b,i.a)),t.Eb(4608,null,u.a,u.a,[[3,u.a]]),t.ob(2,8503296,null,0,o.a,[],{rowData:[0,"rowData"],raceOrder:[1,"raceOrder"],inheritOrder:[2,"inheritOrder"],statHeaders:[3,"statHeaders"],resistHeaders:[4,"resistHeaders"],isEnemy:[5,"isEnemy"]},null),t.Bb(131072,r.b,[t.h])],function(n,l){var e=l.component;n(l,2,0,t.Ib(l,2,0,t.zb(l,3).transform(e.demons)),e.compConfig.raceOrder,e.inheritOrder,e.statHeaders,e.resistHeaders,e.showEnemies)},null)}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-demon-list-container",[],null,null,null,g,m)),t.ob(1,245760,null,0,s.a,[a.h,c.a,t.h,p.a],null,null)],function(n,l){n(l,1,0)},null)}var d=t.lb("app-demon-list-container",s.a,f,{},{},[])},IlY5:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){this.inheritHeaders=[],this.inherits=[],this.hasChance=!1,this.hasIcons=!0,this.hasLvls=!1}}()},LXGR:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n.forRoot=function(){return{ngModule:n}},n}()},Q28Q:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var t=e("mrSG"),i=e("QlaI"),u=function(n){function l(l,e,t){var i=n.call(this)||this;return i.elementDemons=[],i.lvlModifier=.5,i.initCharts(l,t),i}return t.c(l,n),l.prototype.initCharts=function(n,l){for(var e=n.races,t=n.table,u=[],o=0;o<e.length;o++)u.push(t[o].slice(l?0:o,l?o+1:e.length)),l||(u[o][0]="-");this.races=e,this.lvlModifier=l?4.25:.5,this.fissionChart=i.a.loadFissionTableJson(e,this.elementDemons,u),this.fusionChart=i.a.loadFusionTableJson(e,u),this.elementChart={}},l}(i.a)},W7vE:function(n,l,e){"use strict";var t=e("CcnG"),i=e("aq7X"),u=e("DUID"),o=e("Ip0R"),r=e("Lx9e"),s=e("ZYCi"),a=e("sA97"),c=e("afYW");e.d(l,"a",function(){return f});var p=t.nb({encapsulation:2,styles:[[".p3 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:center;color:transparent}.p3 div.element-icon.slash{background-image:url(/megaten-fusion-tool/assets/images/p5/sword.png)}.p3 div.element-icon.strike{background-image:url(/megaten-fusion-tool/assets/images/p5/phys.png)}.p3 div.element-icon.pierce{background-image:url(/megaten-fusion-tool/assets/images/p5/gun.png)}.p3 div.element-icon.fire{background-image:url(/megaten-fusion-tool/assets/images/p5/fire.png)}.p3 div.element-icon.ice{background-image:url(/megaten-fusion-tool/assets/images/p5/ice.png)}.p3 div.element-icon.elec{background-image:url(/megaten-fusion-tool/assets/images/p5/elec.png)}.p3 div.element-icon.wind{background-image:url(/megaten-fusion-tool/assets/images/p5/wind.png)}.p3 div.element-icon.light{background-image:url(/megaten-fusion-tool/assets/images/p5/bless.png)}.p3 div.element-icon.dark{background-image:url(/megaten-fusion-tool/assets/images/p5/curse.png)}.p3 div.element-icon.lidark{background-image:url(/megaten-fusion-tool/assets/images/p5/trait.png)}.p3 div.element-icon.ailment{background-image:url(/megaten-fusion-tool/assets/images/p5/ailment.png)}.p3 div.element-icon.recovery{background-image:url(/megaten-fusion-tool/assets/images/p5/healing.png)}.p3 div.element-icon.all,.p3 div.element-icon.almighty{background-image:url(/megaten-fusion-tool/assets/images/p5/almighty.png)}.p3 div.element-icon.special,.p3 div.element-icon.support{background-image:url(/megaten-fusion-tool/assets/images/p5/support.png)}.p3 div.element-icon.passive{background-image:url(/megaten-fusion-tool/assets/images/p5/passive.png)}.p3 th{color:#000;background-color:#4372aa}.p3 th.sortable:hover{background-color:#65adff}.p3 th.nav{color:#fff;cursor:pointer;background-color:#26405c}.p3 th.nav.active,.p3 th.nav:hover{color:#000;background-color:#4372aa}.p3 th.nav.active a,.p3 th.nav:hover a{color:#000}.p4 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:center;color:transparent}.p4 div.element-icon.phys{background-image:url(/megaten-fusion-tool/assets/images/p5/phys.png)}.p4 div.element-icon.fire{background-image:url(/megaten-fusion-tool/assets/images/p5/fire.png)}.p4 div.element-icon.ice{background-image:url(/megaten-fusion-tool/assets/images/p5/ice.png)}.p4 div.element-icon.elec{background-image:url(/megaten-fusion-tool/assets/images/p5/elec.png)}.p4 div.element-icon.wind{background-image:url(/megaten-fusion-tool/assets/images/p5/wind.png)}.p4 div.element-icon.light{background-image:url(/megaten-fusion-tool/assets/images/p5/bless.png)}.p4 div.element-icon.dark{background-image:url(/megaten-fusion-tool/assets/images/p5/curse.png)}.p4 div.element-icon.ailment{background-image:url(/megaten-fusion-tool/assets/images/p5/ailment.png)}.p4 div.element-icon.recovery{background-image:url(/megaten-fusion-tool/assets/images/p5/healing.png)}.p4 div.element-icon.almighty{background-image:url(/megaten-fusion-tool/assets/images/p5/almighty.png)}.p4 div.element-icon.special,.p4 div.element-icon.support{background-image:url(/megaten-fusion-tool/assets/images/p5/support.png)}.p4 div.element-icon.passive{background-image:url(/megaten-fusion-tool/assets/images/p5/passive.png)}.p4 th{color:#000;background-color:#ffe600}.p4 th.sortable:hover{background-color:#fffbd6}.p4 th.nav{color:#fff;cursor:pointer;background-color:#272300}.p4 th.nav.active,.p4 th.nav:hover{color:#000;background-color:#ffe600}.p4 th.nav.active a,.p4 th.nav:hover a{color:#000}.p5 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:center;color:transparent}.p5 div.element-icon.phys{background-image:url(/megaten-fusion-tool/assets/images/p5/phys.png)}.p5 div.element-icon.gun{background-image:url(/megaten-fusion-tool/assets/images/p5/gun.png)}.p5 div.element-icon.fire{background-image:url(/megaten-fusion-tool/assets/images/p5/fire.png)}.p5 div.element-icon.ice{background-image:url(/megaten-fusion-tool/assets/images/p5/ice.png)}.p5 div.element-icon.elec{background-image:url(/megaten-fusion-tool/assets/images/p5/elec.png)}.p5 div.element-icon.wind{background-image:url(/megaten-fusion-tool/assets/images/p5/wind.png)}.p5 div.element-icon.psy{background-image:url(/megaten-fusion-tool/assets/images/p5/psy.png)}.p5 div.element-icon.nuke{background-image:url(/megaten-fusion-tool/assets/images/p5/nuke.png)}.p5 div.element-icon.bless{background-image:url(/megaten-fusion-tool/assets/images/p5/bless.png)}.p5 div.element-icon.curse{background-image:url(/megaten-fusion-tool/assets/images/p5/curse.png)}.p5 div.element-icon.almighty{background-image:url(/megaten-fusion-tool/assets/images/p5/almighty.png)}.p5 div.element-icon.ailment{background-image:url(/megaten-fusion-tool/assets/images/p5/ailment.png)}.p5 div.element-icon.healing,.p5 div.element-icon.recovery{background-image:url(/megaten-fusion-tool/assets/images/p5/healing.png)}.p5 div.element-icon.support{background-image:url(/megaten-fusion-tool/assets/images/p5/support.png)}.p5 div.element-icon.passive{background-image:url(/megaten-fusion-tool/assets/images/p5/passive.png)}.p5 th{color:#fff;background-color:#f41000}.p5 th.sortable:hover{background-color:#f46e00}.p5 th.nav{background-color:#5f0503}.p5 th.nav.active,.p5 th.nav:hover{background-color:#f41000}.p5 th.nav.active a,.p5 th.nav:hover a{color:#fff}"]],data:{}});function m(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,5,"app-demon-compendium",[],null,null,null,i.b,i.a)),t.Eb(4608,null,u.a,u.a,[[3,u.a]]),t.ob(2,278528,null,0,o.i,[t.s,t.t,t.k,t.D],{ngClass:[0,"ngClass"]},null),t.ob(3,245760,null,0,r.a,[s.a],{mainList:[0,"mainList"],hasSettings:[1,"hasSettings"],otherLinks:[2,"otherLinks"]},null),t.Cb(4,{title:0,link:1}),t.Ab(5,1)],function(n,l){n(l,2,0,l.component.appCssClasses);var e=n(l,5,0,n(l,4,0,"Shadow List","shadows"));n(l,3,0,"persona",!1,e)},null)}function g(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-p4-compendium",[],null,null,null,m,p)),t.ob(1,49152,null,0,a.a,[c.a],null,null)],null,null)}var f=t.lb("app-p4-compendium",a.a,g,{},{},[])},afYW:function(n,l,e){"use strict";e.d(l,"a",function(){return r});var t=e("26FU"),i=e("+wh5"),u=e("Q28Q"),o=e("uoMG"),r=function(){function n(n,l){this.fissionCalculator=o.d,this.fusionCalculator=o.e,this.triFissionCalculator=o.f,this.triFusionCalculator=o.g;var e=l.url.split("/")[1],r=n.demonData[e]?e:"p4";this.appName=n.gameTitles[r]+" Fusion Calculator",this.compConfig=n,this.gameAbbr=r,this._compendium=new i.a(n,r),this._compendium$=new t.a(this._compendium),this.compendium=this._compendium$.asObservable(),this._fusionChart=new u.a(n.normalTable[r],n.races),this._fusionChart$=new t.a(this._fusionChart),this.fusionChart=this._fusionChart$.asObservable(),this._tripleChart=new u.a(n.normalTable[r],n.races,!0),this._squareChart$=new t.a({normalChart:this._fusionChart,tripleChart:this._tripleChart,raceOrder:n.raceOrder}),this.squareChart=this._squareChart$.asObservable()}return n.prototype.nextDlcDemons=function(n){},n}()},cFTR:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(n,l){this.changeDetectorRef=n,this.fusionTrioService=l,this.subscriptions=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.fusionTrioService.squareChart.subscribe(function(l){n.normChart=l.normalChart,n.tripChart=l.tripleChart}))},n.prototype.ngOnDestroy=function(){for(var n=0,l=this.subscriptions;n<l.length;n++)l[n].unsubscribe()},n}()},emSM:function(n,l,e){"use strict";e.d(l,"a",function(){return g});var t=e("CcnG"),i=e("7gfQ"),u=e("Ck8i"),o=e("ZYjt"),r=e("ZYCi"),s=e("cFTR"),a=e("uoMG"),c=t.nb({encapsulation:2,styles:[],data:{}});function p(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,1,"app-fusion-chart",[],null,null,null,i.b,i.a)),t.ob(1,770048,null,0,u.a,[o.h,r.a],{normChart:[0,"normChart"],tripChart:[1,"tripChart"],normTitle:[2,"normTitle"],tripTitle:[3,"tripTitle"]},null)],function(n,l){var e=l.component;n(l,1,0,e.normChart,e.tripChart,"Normal Fusions","Triple Fusions")},null)}function m(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-triple-fusion-chart",[],null,null,null,p,c)),t.ob(1,245760,null,0,s.a,[t.h,a.c],null,null)],function(n,l){n(l,1,0)},null)}var g=t.lb("app-triple-fusion-chart",s.a,m,{},{},[])},g74h:function(n,l,e){"use strict";var t=e("CcnG"),i=e("cg0H"),u=e("0ZaJ"),o=e("secp"),r=e("d6X+"),s=e("gkkx"),a=e("IlY5"),c=e("rFU4"),p=e("wdG2"),m=e("LVD6"),g=e("DUID"),f=e("Hz2L"),d=e("qUFX"),b=e("Fhsl"),h=e("Ip0R"),v=e("wH70"),k=(e("+wh5"),function(){return function(){}}()),C=t.nb({encapsulation:2,styles:[],data:{}});function y(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,2,"app-demon-stats",[],null,null,null,i.b,i.a)),t.ob(1,49152,null,0,u.a,[],{title:[0,"title"],statHeaders:[1,"statHeaders"],stats:[2,"stats"]},null),t.Ab(2,2),(n()(),t.pb(3,0,null,null,15,"table",[],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,8,"thead",[],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,1,"th",[["colspan","2"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Appearances"])),(n()(),t.pb(8,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),t.pb(9,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Areas"])),(n()(),t.pb(11,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Drops"])),(n()(),t.pb(13,0,null,null,5,"tbody",[],null,null,null,null,null)),(n()(),t.pb(14,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),t.pb(15,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),t.Hb(16,null,["",""])),(n()(),t.pb(17,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),t.Hb(18,null,["",""])),(n()(),t.pb(19,0,null,null,1,"app-demon-resists",[],null,null,null,o.b,o.a)),t.ob(20,49152,null,0,r.a,[],{resistHeaders:[0,"resistHeaders"],resists:[1,"resists"]},null),(n()(),t.pb(21,0,null,null,1,"app-demon-skills",[],null,null,null,c.b,c.a)),t.ob(22,638976,null,0,p.a,[],{compendium:[0,"compendium"],elemOrder:[1,"elemOrder"],skillLevels:[2,"skillLevels"]},null)],function(n,l){var e=l.component,t="Lvl "+e.demon.lvl+" "+e.demon.race+" "+e.demon.name,i=n(l,2,0,"HP","MP").concat(e.compConfig.baseStats);n(l,1,0,t,i,e.demon.stats.concat(e.demon.estats)),n(l,20,0,e.compConfig.enemyResists,e.demon.resists),n(l,22,0,e.compendium,e.compConfig.elemOrder,e.demon.skills)},function(n,l){var e=l.component;n(l,16,0,e.demon.area),n(l,18,0,e.demon.drop)})}var O=e("ZYCi"),I=e("ZYjt"),w=e("veAJ"),H=e("afYW");e.d(l,"a",function(){return E});var D=t.nb({encapsulation:2,styles:[],data:{}});function L(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,11,null,null,null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"app-demon-stats",[],null,null,null,i.b,i.a)),t.ob(2,49152,null,0,u.a,[],{title:[0,"title"],statHeaders:[1,"statHeaders"],stats:[2,"stats"],inherit:[3,"inherit"],price:[4,"price"]},null),(n()(),t.pb(3,0,null,null,1,"app-demon-resists",[],null,null,null,o.b,o.a)),t.ob(4,49152,null,0,r.a,[],{resistHeaders:[0,"resistHeaders"],resists:[1,"resists"]},null),(n()(),t.pb(5,0,null,null,1,"app-demon-inherits",[],null,null,null,s.b,s.a)),t.ob(6,49152,null,0,a.a,[],{inheritHeaders:[0,"inheritHeaders"],inherits:[1,"inherits"],hasChance:[2,"hasChance"]},null),(n()(),t.pb(7,0,null,null,1,"app-demon-skills",[],null,null,null,c.b,c.a)),t.ob(8,638976,null,0,p.a,[],{compendium:[0,"compendium"],elemOrder:[1,"elemOrder"],skillLevels:[2,"skillLevels"]},null),(n()(),t.pb(9,0,null,null,2,"app-smt-fusions",[],null,null,null,m.b,m.a)),t.Eb(4608,null,g.a,g.a,[[3,g.a]]),t.ob(11,638976,null,0,f.a,[],{hasTripleFusion:[0,"hasTripleFusion"]},null)],function(n,l){var e=l.component;n(l,2,0,"Lvl "+e.demon.lvl+" "+e.demon.race+" "+e.demon.name,e.compConfig.baseStats,e.demon.stats,e.demon.inherit,e.demon.price),n(l,4,0,e.compConfig.resistElems,e.demon.resists),n(l,6,0,e.compendium.inheritHeaders,e.compendium.getInheritElems(e.demon.inherit),!0),n(l,8,0,e.compendium,e.compConfig.elemOrder,e.demon.skills),n(l,11,0,!0)},null)}function S(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-demon-missing",[],null,null,null,d.b,d.a)),t.ob(1,49152,null,0,b.a,[],{name:[0,"name"]},null)],function(n,l){n(l,1,0,l.component.name)},null)}function J(n){return t.Jb(2,[(n()(),t.gb(16777216,null,null,1,null,L)),t.ob(1,16384,null,0,h.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,S)),t.ob(3,16384,null,0,h.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.demon),n(l,3,0,!e.demon)},null)}var F=t.nb({encapsulation:2,styles:[],data:{}});function T(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-demon-entry",[],null,null,null,J,D)),t.ob(1,49152,null,0,v.a,[],{name:[0,"name"],demon:[1,"demon"],compendium:[2,"compendium"],compConfig:[3,"compConfig"]},null)],function(n,l){var e=l.component;n(l,1,0,e.name,e.demon,e.compendium,e.compConfig)},null)}function j(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-enemy-entry",[],null,null,null,y,C)),t.ob(1,49152,null,0,k,[],{name:[0,"name"],demon:[1,"demon"],compendium:[2,"compendium"],compConfig:[3,"compConfig"]},null)],function(n,l){var e=l.component;n(l,1,0,e.name,e.demon,e.compendium,e.compConfig)},null)}function A(n){return t.Jb(2,[(n()(),t.gb(16777216,null,null,1,null,T)),t.ob(1,16384,null,0,h.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,j)),t.ob(3,16384,null,0,h.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,!e.demon||!e.demon.isEnemy),n(l,3,0,e.demon&&e.demon.isEnemy)},null)}function R(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-demon-entry-container",[],null,null,null,A,F)),t.ob(1,245760,null,0,v.b,[O.a,I.h,w.a,H.a],null,null)],function(n,l){n(l,1,0)},null)}var E=t.lb("app-demon-entry-container",v.b,R,{},{},[])},gO3W:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var t=e("mrSG"),i=e("i4tJ"),u=(e("afYW"),function(n){function l(l,e,t,i){var u=n.call(this,l,t,i)||this;return u.showAllies=!e.snapshot.data.showShadows,u.showEnemies=!u.showAllies,u.compConfig=i.compConfig,u.defaultSortFun=function(n,l){return 200*(u.compConfig.raceOrder[n.race]-u.compConfig.raceOrder[l.race])+l.lvl-n.lvl},u.appName="List of Personas - "+i.appName,u.statHeaders=u.compConfig.baseStats,u.resistHeaders=u.compConfig.resistElems,u.inheritOrder=u.compConfig.elemOrder,u.showEnemies&&(u.appName="List of Shadows - "+i.appName,u.statHeaders=u.compConfig.enemyStats,u.resistHeaders=u.compConfig.enemyResists,u.inheritOrder=null),u}return t.c(l,n),l}(i.a))},gkkx:function(n,l,e){"use strict";e.d(l,"a",function(){return o}),e.d(l,"b",function(){return v});var t=e("CcnG"),i=e("Ip0R"),u=e("b7/z"),o=(e("IlY5"),t.nb({encapsulation:2,styles:[],data:{}}));function r(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[],[[1,"colspan",0]],null,null,null,null)),(n()(),t.Hb(-1,null,["Inheritable Skills"]))],null,function(n,l){n(l,0,0,l.component.inheritHeaders.length)})}function s(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[],[[1,"colspan",0]],null,null,null,null)),(n()(),t.Hb(-1,null,["Skill Affinities"]))],null,function(n,l){n(l,0,0,l.component.inheritHeaders.length)})}function a(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit)})}function c(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){n(l,0,0,t.rb(1,"element-icon ",l.parent.context.$implicit,"")),n(l,1,0,l.parent.context.$implicit)})}function p(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,4,"th",[],[[4,"width","%"]],null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,a)),t.ob(2,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,c)),t.ob(4,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,!e.hasIcons),n(l,4,0,e.hasIcons)},function(n,l){n(l,0,0,100/l.component.inheritHeaders.length)})}function m(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"td",[],[[4,"color",null]],null,null,null,null)),(n()(),t.Hb(1,null,[" "," "]))],null,function(n,l){n(l,0,0,l.context.$implicit?null:"transparent"),n(l,1,0,l.context.$implicit?"yes":"no")})}function g(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,m)),t.ob(2,278528,null,0,i.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.inherits)},null)}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"td",[],[[8,"className",0]],null,null,null,null)),t.Db(1,1),(n()(),t.Hb(2,null,[" ","% "]))],null,function(n,l){var e=t.rb(1,"affinity",t.Ib(l,0,0,n(l,1,0,t.zb(l.parent.parent,0),100*l.context.$implicit)),"");n(l,0,0,e),n(l,2,0,100*l.context.$implicit)})}function d(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,f)),t.ob(2,278528,null,0,i.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.inherits)},null)}function b(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"td",[],[[8,"className",0]],null,null,null,null)),(n()(),t.Hb(1,null,[" "," "])),t.Db(2,1)],null,function(n,l){n(l,0,0,t.rb(1,"affinity",l.context.$implicit,""));var e=t.Ib(l,1,0,n(l,2,0,t.zb(l.parent.parent,1),l.context.$implicit));n(l,1,0,e)})}function h(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,b)),t.ob(2,278528,null,0,i.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.inherits)},null)}function v(n){return t.Jb(2,[t.Bb(0,u.d,[]),t.Bb(0,u.a,[]),(n()(),t.pb(2,0,null,null,16,"table",[],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,8,"thead",[],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,r)),t.ob(6,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,s)),t.ob(8,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(9,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,p)),t.ob(11,278528,null,0,i.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(12,0,null,null,6,"tbody",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,g)),t.ob(14,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,d)),t.ob(16,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,h)),t.ob(18,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,6,0,!e.hasLvls),n(l,8,0,e.hasLvls&&e.inheritHeaders.length),n(l,11,0,e.inheritHeaders),n(l,14,0,!e.hasLvls&&!e.hasChance),n(l,16,0,e.hasChance),n(l,18,0,e.hasLvls)},null)}},n6IH:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var t=e("mrSG"),i=e("z0S9"),u=(e("afYW"),function(n){function l(l,e,t){var i=n.call(this,l,e,t)||this;return i.compConfig=t.compConfig,i.appName="List of Skills - "+t.appName,i.transferTitle=i.compConfig.hasSkillCards[t.gameAbbr]?"Skill Card":"",i.defaultSortFun=function(n,l){return 1e4*(i.compConfig.elemOrder[n.element]-i.compConfig.elemOrder[l.element])+n.rank-l.rank},i}return t.c(l,n),l}(i.a))},sA97:function(n,l,e){"use strict";e.d(l,"a",function(){return t}),e("afYW");var t=function(){return function(n){this.appCssClasses=["smtnes","smt1"],this.appCssClasses=n.compConfig.appCssClasses}}()},wH70:function(n,l,e){"use strict";e.d(l,"a",function(){return u}),e.d(l,"b",function(){return o});var t=e("mrSG"),i=e("VNUm"),u=(e("+wh5"),e("veAJ"),e("afYW"),function(){return function(){}}()),o=function(n){function l(l,e,t,i){var u=n.call(this,l,e,t,i)||this;return u.route=l,u.title=e,u.currentDemonService=t,u.fusionDataService=i,u.appName=i.appName,u.compConfig=i.compConfig,u}return t.c(l,n),l}(i.a)},zZvO:function(n,l,e){"use strict";e.d(l,"a",function(){return u}),e.d(l,"b",function(){return t}),e.d(l,"c",function(){return i}),e("sA97"),e("gO3W"),e("n6IH"),e("wH70"),e("TVja"),e("GVDr"),e("31bM"),e("U2KI"),e("cFTR");var t={fusionTool:"chart"},i={showShadows:!0},u=function(){return function(){}}()}}]);