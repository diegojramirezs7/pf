(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),i=(a(0),a(217)),c={id:"store",title:"Store",hide_title:!0},o={id:"api/store",title:"Store",description:"# Store",source:"@site/../docs/api/Store.md",permalink:"/api/store",sidebar:"docs",previous:{title:"createStore",permalink:"/api/createstore"},next:{title:"combineReducers",permalink:"/api/combinereducers"}},s=[{value:"Store Methods",id:"store-methods",children:[]},{value:"Store Methods",id:"store-methods-1",children:[{value:"getState()",id:"getstate",children:[]},{value:"dispatch(action)",id:"dispatchaction",children:[]},{value:"subscribe(listener)",id:"subscribelistener",children:[]},{value:"replaceReducer(nextReducer)",id:"replacereducernextreducer",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"store"},"Store"),Object(i.b)("p",null,"A store holds the whole ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glossary#state"}),"state tree")," of your application.\nThe only way to change the state inside it is to dispatch an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glossary#action"}),"action")," on it."),Object(i.b)("p",null,"A store is not a class. It's just an object with a few methods on it.\nTo create it, pass your root ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glossary#reducer"}),"reducing function")," to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/createstore"}),Object(i.b)("inlineCode",{parentName:"a"},"createStore")),"."),Object(i.b)("blockquote",null,Object(i.b)("h5",Object(n.a)({parentName:"blockquote"},{id:"a-note-for-flux-users"}),"A Note for Flux Users"),Object(i.b)("p",{parentName:"blockquote"},"If you're coming from Flux, there is a single important difference you need to understand. Redux doesn't have a Dispatcher or support many stores. ",Object(i.b)("strong",{parentName:"p"},"Instead, there is just a single store with a single root ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"/glossary#reducer"}),"reducing function"),".")," As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. You can use a helper like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/combinereducers"}),Object(i.b)("inlineCode",{parentName:"a"},"combineReducers"))," to combine them. This is similar to how there is just one root component in a React app, but it is composed out of many small components.")),Object(i.b)("h3",{id:"store-methods"},"Store Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#getstate"}),Object(i.b)("inlineCode",{parentName:"a"},"getState()"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch(action)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#subscribelistener"}),Object(i.b)("inlineCode",{parentName:"a"},"subscribe(listener)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#replacereducernextreducer"}),Object(i.b)("inlineCode",{parentName:"a"},"replaceReducer(nextReducer)")))),Object(i.b)("h2",{id:"store-methods-1"},"Store Methods"),Object(i.b)("h3",{id:"getstate"},"getState()"),Object(i.b)("p",null,"Returns the current state tree of your application.\nIt is equal to the last value returned by the store's reducer."),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"(any)"),": The current state tree of your application."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dispatchaction"},"dispatch(action)"),Object(i.b)("p",null,"Dispatches an action. This is the only way to trigger a state change."),Object(i.b)("p",null,"The store's reducing function will be called with the current ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getState"}),Object(i.b)("inlineCode",{parentName:"a"},"getState()"))," result and the given ",Object(i.b)("inlineCode",{parentName:"p"},"action")," synchronously. Its return value will be considered the next state. It will be returned from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getState"}),Object(i.b)("inlineCode",{parentName:"a"},"getState()"))," from now on, and the change listeners will immediately be notified."),Object(i.b)("blockquote",null,Object(i.b)("h5",Object(n.a)({parentName:"blockquote"},{id:"a-note-for-flux-users-1"}),"A Note for Flux Users"),Object(i.b)("p",{parentName:"blockquote"},"If you attempt to call ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," from inside the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glossary#reducer"}),"reducer"),", it will throw with an error saying \u201cReducers may not dispatch actions.\u201d This is similar to \u201cCannot dispatch in a middle of dispatch\u201d error in Flux, but doesn't cause the problems associated with it. In Flux, a dispatch is forbidden while Stores are handling the action and emitting updates. This is unfortunate because it makes it impossible to dispatch actions from component lifecycle hooks or other benign places."),Object(i.b)("p",{parentName:"blockquote"},"In Redux, subscriptions are called after the root reducer has returned the new state, so you ",Object(i.b)("em",{parentName:"p"},"may")," dispatch in the subscription listeners. You are only disallowed to dispatch inside the reducers because they must have no side effects. If you want to cause a side effect in response to an action, the right place to do this is in the potentially async ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glossary#action-creator"}),"action creator"),".")),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"action")," (",Object(i.b)("em",{parentName:"li"},"Object"),Object(i.b)("sup",null,"\u2020"),"): A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a ",Object(i.b)("inlineCode",{parentName:"li"},"type")," field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for ",Object(i.b)("inlineCode",{parentName:"li"},"type")," than ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol"}),"Symbols")," because strings are serializable. Other than ",Object(i.b)("inlineCode",{parentName:"li"},"type"),", the structure of an action object is really up to you. If you're interested, check out ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/acdlite/flux-standard-action"}),"Flux Standard Action")," for recommendations on how actions could be constructed.")),Object(i.b)("h4",{id:"returns-1"},"Returns"),Object(i.b)("p",null,"(Object",Object(i.b)("sup",null,"\u2020"),"): The dispatched action (see notes)."),Object(i.b)("h4",{id:"notes"},"Notes"),Object(i.b)("sup",null,"\u2020")," The \u201cvanilla\u201d store implementation you get by calling [`createStore`](/api/createstore) only supports plain object actions and hands them immediately to the reducer.",Object(i.b)("p",null,"However, if you wrap ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/createstore"}),Object(i.b)("inlineCode",{parentName:"a"},"createStore"))," with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/applymiddleware"}),Object(i.b)("inlineCode",{parentName:"a"},"applyMiddleware")),", the middleware can interpret actions differently, and provide support for dispatching ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/glossary#async-action"}),"async actions"),". Async actions are usually asynchronous primitives like Promises, Observables, or thunks."),Object(i.b)("p",null,"Middleware is created by the community and does not ship with Redux by default. You need to explicitly install packages like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gaearon/redux-thunk"}),"redux-thunk")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/acdlite/redux-promise"}),"redux-promise")," to use it. You may also create your own middleware."),Object(i.b)("p",null,"To learn how to describe asynchronous API calls, read the current state inside action creators, perform side effects, or chain them to execute in a sequence, see the examples for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/api/applymiddleware"}),Object(i.b)("inlineCode",{parentName:"a"},"applyMiddleware")),"."),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createStore } from 'redux'\nconst store = createStore(todos, ['Use Redux'])\n\nfunction addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n\nstore.dispatch(addTodo('Read the docs'))\nstore.dispatch(addTodo('Read about the middleware'))\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"subscribelistener"},"subscribe(listener)"),Object(i.b)("p",null,"Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#getState"}),Object(i.b)("inlineCode",{parentName:"a"},"getState()"))," to read the current state tree inside the callback."),Object(i.b)("p",null,"You may call ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," from a change listener, with the following caveats:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The listener should only call ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," either in response to user actions or under specific conditions (e.\xa0g. dispatching an action when the store has a specific field). Calling ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," without any conditions is technically possible, however it leads to an infinite loop as every ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," call usually triggers the listener again.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The subscriptions are snapshotted just before every ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," call. If you subscribe or unsubscribe while the listeners are being invoked, this will not have any effect on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," that is currently in progress. However, the next ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," call, whether nested or not, will use a more recent snapshot of the subscription list.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The listener should not expect to see all state changes, as the state might have been updated multiple times during a nested ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," before the listener is called. It is, however, guaranteed that all subscribers registered before the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#dispatchaction"}),Object(i.b)("inlineCode",{parentName:"a"},"dispatch()"))," started will be called with the latest state by the time it exits."))),Object(i.b)("p",null,"It is a low-level API. Most likely, instead of using it directly, you'll use React (or other) bindings. If you commonly use the callback as a hook to react to state changes, you might want to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux/issues/303#issuecomment-125184409"}),"write a custom ",Object(i.b)("inlineCode",{parentName:"a"},"observeStore")," utility"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"Store")," is also an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zenparsing/es-observable"}),Object(i.b)("inlineCode",{parentName:"a"},"Observable")),", so you can ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe")," to changes with libraries like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ReactiveX/RxJS"}),"RxJS"),"."),Object(i.b)("p",null,"To unsubscribe the change listener, invoke the function returned by ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe"),"."),Object(i.b)("h4",{id:"arguments-1"},"Arguments"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"listener")," (",Object(i.b)("em",{parentName:"li"},"Function"),"): The callback to be invoked any time an action has been dispatched, and the state tree might have changed. You may call ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#getState"}),Object(i.b)("inlineCode",{parentName:"a"},"getState()"))," inside this callback to read the current state tree. It is reasonable to expect that the store's reducer is a pure function, so you may compare references to some deep path in the state tree to learn whether its value has changed.")),Object(i.b)("h5",{id:"returns-2"},"Returns"),Object(i.b)("p",null,"(",Object(i.b)("em",{parentName:"p"},"Function"),"): A function that unsubscribes the change listener."),Object(i.b)("h5",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function select(state) {\n  return state.some.deep.property\n}\n\nlet currentValue\nfunction handleChange() {\n  let previousValue = currentValue\n  currentValue = select(store.getState())\n\n  if (previousValue !== currentValue) {\n    console.log(\n      'Some deep nested property changed from',\n      previousValue,\n      'to',\n      currentValue\n    )\n  }\n}\n\nconst unsubscribe = store.subscribe(handleChange)\nunsubscribe()\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"replacereducernextreducer"},"replaceReducer(nextReducer)"),Object(i.b)("p",null,"Replaces the reducer currently used by the store to calculate the state."),Object(i.b)("p",null,"It is an advanced API. You might need this if your app implements code splitting, and you want to load some of the reducers dynamically. You might also need this if you implement a hot reloading mechanism for Redux."),Object(i.b)("h4",{id:"arguments-2"},"Arguments"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"nextReducer")," (",Object(i.b)("em",{parentName:"li"},"Function"),") The next reducer for the store to use.")))}b.isMDXComponent=!0},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(h,o({ref:t},l,{components:a})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);