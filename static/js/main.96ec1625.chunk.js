(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{141:function(n,e,t){n.exports=t.p+"static/media/ava.9eadc42b.svg"},142:function(n,e,t){n.exports=t.p+"static/media/arrow.82509b24.svg"},144:function(n,e,t){n.exports=t(257)},157:function(n,e){},159:function(n,e){},169:function(n,e){},171:function(n,e){},198:function(n,e){},199:function(n,e){},204:function(n,e){},206:function(n,e){},230:function(n,e){},257:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(36),c=t.n(i),o=t(2),u=t(3),l=t(8),d=t(6);function s(){var n=Object(o.a)(["\n  margin-right: 4px;\n"]);return s=function(){return n},n}function f(){var n=Object(o.a)(["\n  background-color: inherit;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.2rem;\n  transition: 0.2s ease;\n  color: ",";\n  padding: 6px;\n  &:hover {\n    background-color: ",";\n    cursor: ",";\n    color: #5E6C84;\n  };\n  margin: 7px 11px;\n  margin-top: ",";\n"]);return f=function(){return n},n}var m=u.b.button(f(),(function(n){return n.light?"#FFFFFF":"#5E6C84"}),(function(n){return n.disabled?"inherit":n.dark?"#EBECF0":"#FFFFFF"}),(function(n){return n.disabled?"inherit":"pointer"}),(function(n){return n.top&&n.top})),p=u.b.i(s()),b=function(n){var e=n.onHandleClick,t=n.disabled,r=n.name,i=n.light,c=n.clear,o=n.top,u=n.dark;return a.a.createElement(m,{onClick:e,disabled:t,light:i,top:o,dark:u},!c&&a.a.createElement(p,{className:"fas fa-plus",light:i}),r)},g=t(7),h=t(141),v=t.n(h),x=t(142),O=t.n(x);var k=function(n){var e,t,i=Object(r.useRef)(null);return e=i,t=n.onHandleOutsideClicks,Object(r.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t]),a.a.createElement("div",{ref:i},n.children)};function j(){var n=Object(o.a)(["\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4rem;\n  padding: 8px;\n  display: block;\n  cursor: pointer;\n  border-radius: 5px;\n\n  &:hover { background-color: #DEDEDE }\n"]);return j=function(){return n},n}function E(){var n=Object(o.a)(["\n  position: absolute;\n  background-color: #FFFFFF;\n  min-width: 258px;\n  min-height: 70px;\n  max-height: 170px;\n  right: ",";\n  transform: translateX(",");\n  top: ",";\n\n  border-radius: 5px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n  padding: 5px;\n  overflow-y: auto;\n"]);return E=function(){return n},n}var w=u.b.ul(E(),(function(n){return n.right}),(function(n){return n.right}),(function(n){return n.top})),I=u.b.li(j()),y=function(n){var e=n.onSubmit,t=n.onHandleLeave,r=n.mappingData,i=n.right,c=n.top,o=function(n){return e(n.currentTarget)},u=r.map((function(n){return a.a.createElement(I,{key:n.id,id:n.id,onClick:o},n.content)}));return a.a.createElement(w,{onMouseLeave:t,right:i,top:c},a.a.createElement(k,{onHandleOutsideClicks:t},u))};function C(){var n=Object(o.a)(["\n  height: 8px;\n  transform: ",";\n  margin-left: 8px;\n"]);return C=function(){return n},n}function F(){var n=Object(o.a)(["\n  height: 33px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return F=function(){return n},n}function S(){var n=Object(o.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #FFFFFF;\n  background-color: #FFFFFF;\n  position: relative;\n"]);return S=function(){return n},n}function T(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.2s ease;\n  &:hover { opacity: 0.8 }\n"]);return T=function(){return n},n}function D(){var n=Object(o.a)(["\n  margin-left: 20px;\n  display: inline-block;\n"]);return D=function(){return n},n}var z=u.b.div(D()),H=u.b.div(T()),B=u.b.div(S()),M=u.b.img(F()),L=u.b.img(C(),(function(n){return n.open?"matrix(1, 0, 0, -1, 0, 0)":"unset"})),P=function(){var n=Object(r.useState)(!1),e=Object(g.a)(n,2),t=e[0],i=e[1],c=function(){return i(!1)};return a.a.createElement(z,null,a.a.createElement(H,{onClick:function(){return i(!0)}},a.a.createElement(B,null,a.a.createElement(M,{src:v.a,alt:"avatar"})),a.a.createElement(L,{src:O.a,alt:"arrow",open:t})),t&&a.a.createElement(y,{mappingData:[{id:"profile",content:"Profile"},{id:"logout",content:"Log Out"}],onSubmit:function(n){console.log('Hey! This is currently unavailable. You pressed "'.concat(n.id,'" item. Good for you! :)')),c()},onHandleLeave:c,right:"1%",top:"50px"}))},R=t(76),N=t(50),A=t(51),J=Object(N.b)({name:"kanban",initialState:{steps:{},tasks:{"task-1":{id:"task-1",content:"One",steps:[]},"task-2":{id:"task-2",content:"Two",steps:[]},"task-3":{id:"task-3",content:"Three",steps:[]},"task-4":{id:"task-4",content:"Four",steps:[]}},columns:{"column-1":{id:"column-1",title:"Backlog",taskIds:["task-1","task-2","task-3","task-4"]},"column-2":{id:"column-2",title:"Ready",taskIds:[]},"column-3":{id:"column-3",title:"In Progress",taskIds:[]},"column-4":{id:"column-4",title:"Finished",taskIds:[]}},columnOrder:["column-1","column-2","column-3","column-4"]},reducers:{setHomeIndex:function(n,e){n.homeIndex=e.payload},setColumnOrder:function(n,e){n.columnOrder=e.payload},createColumn:function(n){var e=Object(A.v4)();n.columns[e]={id:e,title:"",taskIds:[]},n.columnOrder.splice(1,0,e)},setColumn:function(n,e){var t=Object.keys(e.payload)[0],r=Object.values(e.payload)[0];n.columns[t].taskIds=r},deleteColumn:function(n,e){var t=e.payload,r=n.columns[t].taskIds;0===n.columnOrder.indexOf(t)?r.forEach((function(e){return delete n.tasks[e]})):n.columns[t].taskIds.forEach((function(e){return n.columns[n.columnOrder[0]].taskIds.push(e)})),delete n.columns[t],n.columnOrder.splice(n.columnOrder.indexOf(t),1)},setColumnTitle:function(n,e){var t=e.payload,r=t.columnId,a=t.newTitle;n.columns[r].title=a},createTask:function(n,e){var t=e.payload,r=Object(A.v4)();n.tasks[r]={id:r,content:"",steps:[],created:t};var a=n.columnOrder[0];n.columns[a].taskIds.push(r)},deleteTask:function(n,e){var t=e.payload;for(var r in n.columns){var a=n.columns[r].taskIds.findIndex((function(n){return n===t}));a>=0&&n.columns[r].taskIds.splice(a,1)}delete n.tasks[t]},setTaskTitle:function(n,e){var t=e.payload,r=t.id,a=t.newTitle;n.tasks[r].content=a},createStep:function(n,e){var t=e.payload,r=Object(A.v4)();n.steps[r]={id:r,content:"",isCompleted:!1},n.tasks[t].steps.push(r)},updateStep:function(n,e){var t=e.payload.id;n.steps[t]=Object(R.a)(Object(R.a)({},n.steps[t]),e.payload)},deleteStep:function(n,e){var t=e.payload,r=t.taskId,a=t.stepId;n.tasks[r].steps.splice(n.tasks[r].steps.indexOf(a),1),delete n.steps[a]}}}),W=J.actions,K=W.setHomeIndex,X=W.setColumnOrder,G=W.setColumn,Y=W.createTask,q=W.createColumn,Q=W.deleteColumn,U=W.setColumnTitle,V=W.setTaskTitle,Z=W.createStep,$=W.updateStep,_=W.deleteStep,nn=W.deleteTask,en=function(n){return n.kanban.homeIndex&&Object.values(n.kanban.homeIndex)[0]},tn=function(n){return n.kanban.columnOrder},rn=function(n){return n.kanban.columns},an=function(n){return n.kanban.tasks},cn=function(n){return n.kanban.steps},on=J.reducer,un=function(){var n=Object(r.useState)([0,0]),e=Object(g.a)(n,2),t=e[0],a=e[1];return Object(r.useLayoutEffect)((function(){var n=function(){return a([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t};function ln(){var n=Object(o.a)(["\n  background: #0079BF;\n  width: 100%;\n  display: block;\n  text-align: right;\n  padding: 10px 20px;\n"]);return ln=function(){return n},n}function dn(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return dn=function(){return n},n}function sn(){var n=Object(o.a)(["\n  font-size: 1.8rem;\n  color: #FFFFFF;\n"]);return sn=function(){return n},n}function fn(){var n=Object(o.a)(["\n  background: #0067A3;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  padding: 5px 30px;\n"]);return fn=function(){return n},n}var mn=u.b.header(fn(),(function(n){return n.width>600?"space-between":"flex-end"})),pn=u.b.h2(sn()),bn=u.b.div(dn()),gn=u.b.div(ln());var hn=Object(l.j)((function(){var n=un()[0],e=Object(l.h)().pathname.startsWith("/editor"),t=Object(d.c)();return n<480?a.a.createElement(gn,null,a.a.createElement(P,null)):a.a.createElement(mn,{width:n},n>600&&a.a.createElement(pn,null,"Awesome Kanban Board"),a.a.createElement(bn,null,e||a.a.createElement(b,{onHandleClick:function(){return t(q())},name:"Create new list",light:!0}),a.a.createElement(P,null)))})),vn=t(22),xn=t(79),On=function(n,e,t,r,a){var i=Object(xn.a)(r);i.splice(n,1);var c=a?Object(xn.a)(a):i;return c.splice(e,0,t),[i,c]},kn=t(21);function jn(){var n=Object(o.a)(["\n  line-height: 2.5rem;\n  font-size: 1.1rem;\n"]);return jn=function(){return n},n}function En(){var n=Object(o.a)(["\n  width: 100%;\n  border: none;\n  line-height: 2.4rem;\n  font-size: 1.1rem;\n"]);return En=function(){return n},n}function wn(){var n=Object(o.a)(["\n  background: #FFFFFF;\n  border-radius: 5px;\n  width: 100%;\n  padding: 0 8px;\n  height: 2.5rem;\n  margin: 0 auto 15px auto;\n  background-color: ",";\n  outline: none;\n"]);return wn=function(){return n},n}var In=u.b.div(wn(),(function(n){return n.isDragging?"#9ae455":"white"})),yn=u.b.input(En()),Cn=u.b.h3(jn()),Fn=function(n){var e=n.task,t=n.index,i=Object(d.c)(),c=Object(r.useState)(""===e.content),o=Object(g.a)(c,2),u=o[0],s=o[1],f=Object(r.useState)(e.content),m=Object(g.a)(f,2),p=m[0],b=m[1],h=function(n){return b(n.currentTarget.value)},v=function(){i(V({id:e.id,newTitle:p||"New Task"})),s(!1)},x=Object(l.g)(),O=function(){return x.push("/editor/".concat(e.id))};return a.a.createElement(kn.b,{draggableId:e.id,index:t},(function(n,t){return a.a.createElement(In,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,isDragging:t.isDragging}),u?a.a.createElement(yn,{autoFocus:!0,onBlur:v,onChange:h,value:p,name:e.content}):a.a.createElement(Cn,{onDoubleClick:O},e.content))}))},Sn=function(n){return n.tasks.map((function(n,e){return a.a.createElement(Fn,{key:n.id,task:n,index:e})}))};function Tn(){var n=Object(o.a)(["\n  margin-left: 12px;\n  font-size: 1.2rem;\n  width: 160px;\n  line-height: 21px;\n  border: none;\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(o.a)(["\n  position: relative;\n"]);return Dn=function(){return n},n}function zn(){var n=Object(o.a)(["\n  padding: 12px;\n  font-size: 1.2rem;\n"]);return zn=function(){return n},n}var Hn=u.b.h3(zn()),Bn=u.b.div(Dn()),Mn=u.b.input(Tn()),Ln=function(n){var e=n.title,t=n.thisColId,i=Object(d.c)(),c=Object(r.useState)(""===e),o=Object(g.a)(c,2),u=o[0],l=o[1],s=function(){return l(!0)},f=Object(r.useState)(e),m=Object(g.a)(f,2),p=m[0],h=m[1],v=Object(r.useState)(!1),x=Object(g.a)(v,2),O=x[0],k=x[1];return a.a.createElement(a.a.Fragment,null,u?a.a.createElement(Mn,{autoFocus:!0,onBlur:function(){i(U({newTitle:p||"New Column",columnId:t})),l(!1)},onChange:function(n){return h(n.currentTarget.value.substring(0,18))},value:p,name:e}):a.a.createElement(Hn,{onDoubleClick:s},e),O?a.a.createElement(Bn,null,a.a.createElement(y,{mappingData:[{id:"delete column",content:"Delete Column"},{id:"rename column",content:"Rename column"}],onSubmit:function(n){switch(n.id){case"delete column":i(Q(t)),k(!1);break;case"rename column":s(),k(!1);break;default:return}},onHandleLeave:function(){return k(!1)},right:"-4%",top:"15px"})):a.a.createElement(b,{onHandleClick:function(){return k(!0)},name:" ... ",clear:!0}))};function Pn(){var n=Object(o.a)(["\n  position: relative;\n  height: 48px;\n"]);return Pn=function(){return n},n}var Rn=u.b.div(Pn()),Nn=function(n){var e=n.thisColumn,t=n.prevColumn,i=n.index,c=Object(d.c)(),o=Object(d.d)(an),u=i>0&&t.taskIds.length<1,l=Object(r.useState)(u),s=Object(g.a)(l,2),f=s[0],m=s[1];Object(r.useEffect)((function(){m(u)}),[u]);var p=Object(r.useState)(!1),h=Object(g.a)(p,2),v=h[0],x=h[1],O=function(){return x(!1)},k=i>0&&t.taskIds.map((function(n){return o[n]}));return a.a.createElement(Rn,null,v?a.a.createElement(y,{mappingData:k,onSubmit:function(n){var r=n.id,a=t,i=e,o=t.taskIds.indexOf(r),u=e.taskIds.length,l=On(o,u,r,a.taskIds,i.taskIds),d=Object(g.a)(l,2),s=d[0],f=d[1];c(G(Object(vn.a)({},a.id,s))),c(G(Object(vn.a)({},i.id,f))),O()},onHandleLeave:O,right:"50%",top:"-120px"}):a.a.createElement(b,{onHandleClick:0===i?function(){var n=(new Date).toISOString().split(".")[0].replace(/-/g,".").replace(/t/gi," at ");c(Y(n))}:function(){return x(!0)},disabled:f,name:0===i?"Create new task":"Add task"}))};function An(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 44px;\n  width: 100%;\n  outline: none;\n"]);return An=function(){return n},n}function Jn(){var n=Object(o.a)(["\n  padding: 12px;\n  align-self: stretch;\n  flex-grow: 1;\n  min-height: 140px;\n  max-width: 280px;\n  transition: background-color 0.1s ease;\n  background-color: ",";\n  overflow-y: auto;\n"]);return Jn=function(){return n},n}function Wn(){var n=Object(o.a)(["\n  border: 1px solid lightgrey;\n  min-width: 282px;\n  max-height: 78vh;\n  background-color: #EBECF0;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  text-align: left;\n  margin: 20px;\n"]);return Wn=function(){return n},n}var Kn=u.b.div(Wn()),Xn=u.b.div(Jn(),(function(n){return n.isDraggingOver?"#add8e6c4":"inherit"})),Gn=u.b.div(An()),Yn=function(n){var e=n.column,t=n.tasks,r=n.index,i=n.isDropDisabled,c=n.columns,o=n.columnOrder,u=c[o[r-1]],l=c[o[r]];return a.a.createElement(kn.b,{draggableId:e.id,index:r},(function(n){return a.a.createElement(Kn,Object.assign({ref:n.innerRef},n.draggableProps),a.a.createElement(Gn,n.dragHandleProps,a.a.createElement(Ln,{title:e.title,thisColId:o[r]})),a.a.createElement(kn.c,{droppableId:e.id,isDropDisabled:i,type:"task",top:"100px"},(function(n,e){return a.a.createElement(Xn,Object.assign({ref:n.innerRef},n.droppableProps,{isDraggingOver:e.isDraggingOver}),a.a.createElement(Sn,{tasks:t}),n.placeholder)})),a.a.createElement(Nn,{thisColumn:l,prevColumn:u,index:r}))}))},qn=function(n){var e=n.column,t=n.index,r=n.isDropDisabled,i=n.columns,c=n.columnOrder,o=Object(d.d)(an),u=e.taskIds.map((function(n){return o[n]}));return a.a.createElement(Yn,{column:e,tasks:u,taskMap:o,index:t,isDropDisabled:r,columns:i,columnOrder:c})},Qn=function(n){var e=n.columnOrder,t=n.columns,r=n.homeIndex;return e.map((function(n,i){var c=t[n],o=i<r||i>r+1;return a.a.createElement(qn,{key:c.id,column:c,isDropDisabled:o,index:i,columns:t,columnOrder:e})}))};function Un(){var n=Object(o.a)(["\n  overflow-x: auto;\n  background-color: #0079BF;\n  height: 100%;\n  text-align: center;\n"]);return Un=function(){return n},n}function Vn(){var n=Object(o.a)(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: ",";\n  justify-content: ",";\n  padding: 20px 0;\n"]);return Vn=function(){return n},n}var Zn=u.b.main(Vn(),(function(n){return n.width<780?"wrap":"nowrap"}),(function(n){return n.isOverflow?"start":"center"})),$n=u.b.div(Un()),_n=function(n){var e=n.columnOrder,t=n.columns,i=n.homeIndex,c=un()[0],o=Object(r.useRef)(null),u=Object(r.useState)(!1),l=Object(g.a)(u,2),s=l[0],f=l[1];Object(r.useEffect)((function(){return o.current&&f(o.current.getBoundingClientRect().width<o.current.scrollWidth)}),[c,e.length]);var m=Object(r.useState)(e.length>0),p=Object(g.a)(m,2),h=p[0],v=p[1];Object(r.useEffect)((function(){return v(!(e.length>0))}),[e]);var x=Object(d.c)();return a.a.createElement($n,{ref:o},h?a.a.createElement(b,{onHandleClick:function(){return x(q())},name:"Create new list",light:!0,top:"40vh"}):a.a.createElement(kn.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(n){return a.a.createElement(Zn,Object.assign({ref:n.innerRef},n.droppableProps,{isOverflow:s,width:c}),a.a.createElement(Qn,{columnOrder:e,columns:t,homeIndex:i}),n.placeholder)})))},ne=function(){var n=Object(d.c)(),e=Object(d.d)(tn),t=Object(d.d)(rn),i=Object(d.d)(en),c=Object(r.useCallback)((function(t){var r=e.indexOf(t.source.droppableId);n(K({homeIndex:r}))}),[e,n]),o=Object(r.useCallback)((function(r){n(K({homeIndex:null}));var a=r.destination,i=r.source,c=r.draggableId,o=r.type;if(a&&(a.droppableId!==i.droppableIs||a.index!==i.index))if("column"!==o){var u=t[i.droppableId],l=t[a.droppableId];if(u!==l){var d=On(i.index,a.index,c,u.taskIds,l.taskIds),s=Object(g.a)(d,2),f=s[0],m=s[1];n(G(Object(vn.a)({},u.id,f))),n(G(Object(vn.a)({},l.id,m)))}else{var p=On(i.index,a.index,c,u.taskIds)[0];n(G(Object(vn.a)({},u.id,p)))}}else{var b=On(i.index,a.index,c,e)[0];n(X(b))}}),[e,t,n]);return a.a.createElement(kn.a,{onDragStart:c,onDragEnd:o},a.a.createElement(_n,{columnOrder:e,columns:t,homeIndex:i}))};function ee(){var n=Object(o.a)(["\n  font-size: 1.2rem;\n  display: inline-block;\n  color: #FFFFFF;\n  margin: 0 10px;\n  text-align: center;\n"]);return ee=function(){return n},n}function te(){var n=Object(o.a)(["\n  padding: 5px;\n"]);return te=function(){return n},n}function re(){var n=Object(o.a)(["\n  height: 55px;\n  background: #0067A3;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n  max-width: 100%;\n"]);return re=function(){return n},n}var ae=u.b.footer(re(),(function(n){return n.width>700?"space-between":"center"})),ie=u.b.div(te()),ce=u.b.div(ee()),oe=(new Date).toISOString().split("T")[0].replace(/-/g,"."),ue=function(){var n=un()[0],e=Object(d.d)(tn),t=Object(d.d)(rn),r=0===e.length?0:t[e[0]].taskIds.length,i=0===e.length?0:t[e[e.length-1]].taskIds.length;return a.a.createElement(ae,{width:n},a.a.createElement(ie,null,a.a.createElement(ce,null,"Active tasks:  ",r),a.a.createElement(ce,null,"Finished tasks:  ",i)),n>700&&a.a.createElement(ie,null,a.a.createElement(ce,null,"Kanban board by:  ","NAME"),a.a.createElement(ce,null,oe)))},le=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1440;return"".concat(n/e*100,"vw")};function de(){var n=Object(o.a)(["\n*, body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  \n  &::-webkit-scrollbar {\n    height: 9px;\n    width: 9px;\n    }\n  &::-webkit-scrollbar-track {\n    border-radius: 6px;\n    background-color: rgb(14, 43, 38, 0.4);\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background-color: rgba(255, 254, 214, 0.6);\n  }\n}\n\n:root {\n    font-size: ",";\n\n    @media (min-width: 400px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 500px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 600px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 700px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 800px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 900px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 1200px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 1400px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 1600px) {\n      font-size: ",";\n    }\n} \n\ninput {\n  outline: thin;\n}\n"]);return de=function(){return n},n}var se=Object(u.a)(de(),le(48),le(40),le(34),le(28),le(24),le(22),le(20),le(18),le(16),le(14),le(12));function fe(){var n=Object(o.a)(["\n  width: 100%;\n  flex: 1;\n  line-height: 2rem;\n  padding: 0;\n  font-size: 1.2rem;\n  border: none;\n  margin: 0;\n  text-decoration: underline;\n"]);return fe=function(){return n},n}function me(){var n=Object(o.a)(["\n  font-size: 1.2rem;\n  line-height: 2rem;\n  margin: 0;\n  padding: 0;\n  text-decoration: ",";\n"]);return me=function(){return n},n}function pe(){var n=Object(o.a)(["\n  -ms-transform: scale(1.5); /* IE */\n  -moz-transform: scale(1.5); /* FF */\n  -webkit-transform: scale(1.5); /* Safari and Chrome */\n  -o-transform: scale(1.5); /* Opera */\n  transform: scale(1.5);\n  margin: 0;\n"]);return pe=function(){return n},n}function be(){var n=Object(o.a)(["\n  min-height: 40px;\n  width: 100%;\n  padding-left: 10px;\n"]);return be=function(){return n},n}function ge(){var n=Object(o.a)(["\n  min-height: 40px;\n"]);return ge=function(){return n},n}function he(){var n=Object(o.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  padding: 2px;\n"]);return he=function(){return n},n}function ve(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 6px;\n"]);return ve=function(){return n},n}var xe=u.b.div(ve()),Oe=u.b.div(he()),ke=u.b.div(ge()),je=u.b.div(be()),Ee=u.b.input(pe()),we=u.b.p(me(),(function(n){return n.isCompleted&&"line-through #0000ffa9"})),Ie=u.b.input(fe()),ye=function(n){var e=n.onHandleToggle,t=n.updateThisStep,r=n.onHandleChange,i=n.activateEditMode,c=n.deleteThisStep,o=n.newContent,u=n.isCompleted,l=n.content,d=n.editMode;return a.a.createElement(xe,null,a.a.createElement(Oe,null,a.a.createElement(ke,null,a.a.createElement(Ee,{type:"checkbox",onChange:e,name:"checkbox",checked:u})),a.a.createElement(je,null,d?a.a.createElement(Ie,{autoFocus:!0,onBlur:t,onChange:r,value:o,name:"content"}):a.a.createElement(we,{onDoubleClick:i,isCompleted:u},l))),a.a.createElement(b,{onHandleClick:c,name:"Delete step",clear:!0,dark:!0}))},Ce=function(n){var e=n.stepId,t=n.taskId,i=Object(d.c)(),c=Object(d.d)(cn)[e],o=c.content,u=c.isCompleted,l=Object(r.useState)(""===o),s=Object(g.a)(l,2),f=s[0],m=s[1],p=Object(r.useState)(o),b=Object(g.a)(p,2),h=b[0],v=b[1];Object(r.useEffect)((function(){return v(o)}),[o]);return a.a.createElement(ye,{onHandleToggle:function(){return i($({id:c.id,isCompleted:!u}))},updateThisStep:function(){i($({id:c.id,content:h||"new step"})),m(!1)},onHandleChange:function(n){return v(n.currentTarget.value)},activateEditMode:function(){return m(!0)},deleteThisStep:function(){return i(_({taskId:t,stepId:e}))},newContent:h,isCompleted:u,content:o,editMode:f})},Fe=function(n){var e=n.stepIds,t=n.taskId;return e.map((function(n){return a.a.createElement(Ce,{key:n,stepId:n,taskId:t})}))};function Se(){var n=Object(o.a)(["\n  width: 90%;\n  height: 75%;\n  margin: 20px auto;\n  padding: 20px 30px;\n  font-size: 22px;\n  display: block;\n  border: 1px solid grey;\n  border-radius: 5px;\n  background-color: white;\n  overflow-y: auto;\n"]);return Se=function(){return n},n}function Te(){var n=Object(o.a)(["\n  border: 1px solid grey;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  max-width: 40%;\n"]);return Te=function(){return n},n}function De(){var n=Object(o.a)(["\n  margin-top: 12px;\n  font-weight: 400;\n  font-size: 0.8rem;\n  padding-left: 10px;\n"]);return De=function(){return n},n}function ze(){var n=Object(o.a)(["\n  line-height: 1.4rem;\n  font-size: 1.3rem;\n  padding-left: 10px;\n  border: none;\n"]);return ze=function(){return n},n}function He(){var n=Object(o.a)(["\n  font-size: 1.3rem;\n  height: 1.5rem;\n  font-weight: 700;\n  padding-left: 10px;\n"]);return He=function(){return n},n}function Be(){var n=Object(o.a)(["\n  max-width: 50%;\n  height: 55px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return Be=function(){return n},n}function Me(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 5% 10px 5%;\n"]);return Me=function(){return n},n}function Le(){var n=Object(o.a)(["\n  border: 1px solid lightgrey;\n  width: 100%;\n  height: 100%;\n  background-color: #EBECF0;\n  border-radius: 10px;\n  text-align: left;\n"]);return Le=function(){return n},n}function Pe(){var n=Object(o.a)(["\n  background-color: #0079BF;\n  width: 100%;\n  min-width: 400px;\n  height: 100%;\n  min-height: 600px;\n  padding: 2%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Pe=function(){return n},n}var Re,Ne=u.b.div(Pe()),Ae=u.b.div(Le()),Je=u.b.div(Me()),We=u.b.div(Be()),Ke=u.b.h3(He()),Xe=u.b.input(ze()),Ge=u.b.h4(De()),Ye=u.b.div(Te()),qe=u.b.div(Se()),Qe=function(n){var e=n.updateTaskTitle,t=n.onInputHandleChange,r=n.activateEditMode,i=n.createNewStep,c=n.deleteThisTask,o=n.closeEditPage,u=n.editMode,l=n.created,d=n.newTitle,s=n.title,f=n.stepIds,m=n.taskId;return a.a.createElement(Ne,null,a.a.createElement(Ae,null,a.a.createElement(Je,null,a.a.createElement(We,null,u?a.a.createElement(Xe,{autoFocus:!0,onBlur:e,onChange:t,value:d,name:"title"}):a.a.createElement(Ke,{onDoubleClick:r},s),l&&a.a.createElement(Ge,null,l)),a.a.createElement(Ye,null,a.a.createElement(b,{onHandleClick:i,name:"Add step",clear:!0}),a.a.createElement(b,{onHandleClick:c,name:"Delete task",clear:!0}),a.a.createElement(b,{onHandleClick:o,name:"Close edit",clear:!0}))),a.a.createElement(qe,null,a.a.createElement(Fe,{stepIds:f,taskId:m}))))},Ue=(Re=Object(l.j)((function(){var n=Object(d.c)(),e=Object(l.i)(),t=Object(d.d)(an)[e.taskId],i=t.id,c=t.content,o=t.steps,u=t.created,s=Object(l.g)(),f=function(){return s.push("/")},m=Object(r.useState)(!1),p=Object(g.a)(m,2),b=p[0],h=p[1],v=Object(r.useState)(c),x=Object(g.a)(v,2),O=x[0],k=x[1];return a.a.createElement(Qe,{updateTaskTitle:function(){n(V({newTitle:O||"New Task",id:i})),h(!1)},onInputHandleChange:function(n){return k(n.currentTarget.value)},activateEditMode:function(){return h(!0)},createNewStep:function(){return n(Z(i))},deleteThisTask:function(){f(),n(nn(i))},closeEditPage:f,editMode:b,created:u,newTitle:O,title:c,stepIds:o,taskId:i})})),function(){var n=Object(l.i)();return Object(d.d)(an)[n.taskId]?a.a.createElement(Re,null):a.a.createElement(l.a,{to:"/"})});function Ve(){var n=Object(o.a)(["\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]);return Ve=function(){return n},n}var Ze=u.b.div(Ve()),$e=Object(l.j)((function(){var n=un()[0];return a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null),a.a.createElement(Ze,null,a.a.createElement(hn,null),a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/editor/:taskId?",render:function(){return a.a.createElement(Ue,null)}}),a.a.createElement(l.b,{path:"/",render:function(){return a.a.createElement(ne,null)}})),n>480&&a.a.createElement(ue,null)))})),_e=t(143),nt=t.n(_e),et=function(){try{var n=localStorage.getItem("state");if(null===n)return;return JSON.parse(n)}catch(e){return}}(),tt=Object(N.a)({reducer:{kanban:on},preloadedState:et});tt.subscribe(nt()((function(){!function(n){try{var e=JSON.stringify(n);localStorage.setItem("state",e)}catch(t){}}(tt.getState())})),1e3);var rt=t(28);t(256);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(rt.a,null,a.a.createElement(d.a,{store:tt},a.a.createElement($e,null)))),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.96ec1625.chunk.js.map