import{c as O,r as g}from"./common/index-cbf49666.js";var C="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",z=C;function E(){}function K(){}K.resetWarningCache=E;var N=function(){function i(u,e,t,a,n,r){if(r!==z){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}i.isRequired=i;function p(){return i}var o={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:p,element:i,elementType:i,instanceOf:p,node:i,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p,checkPropTypes:K,resetWarningCache:E};return o.PropTypes=o,o},I=O(function(i){i.exports=N()}),S="/Users/brians/git/react-slider/src/components/ReactSlider/ReactSlider.jsx";function y(){return y=Object.assign||function(i){for(var p=1;p<arguments.length;p++){var o=arguments[p];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(i[u]=o[u])}return i},y.apply(this,arguments)}function _(i,p){i.prototype=Object.create(p.prototype),i.prototype.constructor=i,T(i,p)}function T(i,p){return T=Object.setPrototypeOf||function(u,e){return u.__proto__=e,u},T(i,p)}function x(i){return i&&i.stopPropagation&&i.stopPropagation(),i&&i.preventDefault&&i.preventDefault(),!1}function R(i){i.stopPropagation&&i.stopPropagation()}function P(i){return i==null?[]:Array.isArray(i)?i.slice():[i]}function b(i){return i!==null&&i.length===1?i[0]:i.slice()}function V(i,p,o,u){for(var e=0;e<i;e+=1){var t=u-e*o;p[i-1-e]>t&&(p[i-1-e]=t)}}function F(i,p,o,u){for(var e=0;e<i;e+=1){var t=u+e*o;p[e]<t&&(p[e]=t)}}function M(i){Object.keys(i).forEach(function(p){typeof document!="undefined"&&document.addEventListener(p,i[p],!1)})}function B(i){Object.keys(i).forEach(function(p){typeof document!="undefined"&&document.removeEventListener(p,i[p],!1)})}function v(i,p){return k(A(i,p),p)}function k(i,p){var o=(i-p.min)%p.step,u=i-o;return Math.abs(o)*2>=p.step&&(u+=o>0?p.step:-p.step),parseFloat(u.toFixed(5))}function A(i,p){var o=i;return o<=p.min&&(o=p.min),o>=p.max&&(o=p.max),o}var m=function(i){_(p,i);function p(u){var e;e=i.call(this,u)||this,e.onKeyUp=function(){e.onEnd()},e.onMouseUp=function(){e.onEnd(e.getMouseEventMap())},e.onTouchEnd=function(){e.onEnd(e.getTouchEventMap())},e.onBlur=function(){e.setState({index:-1},e.onEnd(e.getKeyDownEventMap()))},e.onMouseMove=function(r){e.setState({pending:!0});var s=e.getMousePosition(r),l=e.getDiffPosition(s[0]),c=e.getValueFromPosition(l);e.move(c)},e.onTouchMove=function(r){if(!(r.touches.length>1)){e.setState({pending:!0});var s=e.getTouchPosition(r);if(typeof e.isScrolling=="undefined"){var l=s[0]-e.startPosition[0],c=s[1]-e.startPosition[1];e.isScrolling=Math.abs(c)>Math.abs(l)}if(e.isScrolling){e.setState({index:-1});return}var h=e.getDiffPosition(s[0]),d=e.getValueFromPosition(h);e.move(d)}},e.onKeyDown=function(r){if(!(r.ctrlKey||r.shiftKey||r.altKey||r.metaKey))switch(e.setState({pending:!0}),r.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":r.preventDefault(),e.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":r.preventDefault(),e.moveUpByStep();break;case"Home":r.preventDefault(),e.move(e.props.min);break;case"End":r.preventDefault(),e.move(e.props.max);break;case"PageDown":r.preventDefault(),e.moveDownByStep(e.props.pageFn(e.props.step));break;case"PageUp":r.preventDefault(),e.moveUpByStep(e.props.pageFn(e.props.step));break}},e.onSliderMouseDown=function(r){if(!(e.props.disabled||r.button===2)){if(e.setState({pending:!0}),!e.props.snapDragDisabled){var s=e.getMousePosition(r);e.forceValueFromPosition(s[0],function(l){e.start(l,s[0]),M(e.getMouseEventMap())})}x(r)}},e.onSliderClick=function(r){if(!e.props.disabled&&e.props.onSliderClick&&!e.hasMoved){var s=e.getMousePosition(r),l=v(e.calcValue(e.calcOffsetFromPosition(s[0])),e.props);e.props.onSliderClick(l)}},e.createOnKeyDown=function(r){return function(s){e.props.disabled||(e.start(r),M(e.getKeyDownEventMap()),x(s))}},e.createOnMouseDown=function(r){return function(s){if(!(e.props.disabled||s.button===2)){e.setState({pending:!0});var l=e.getMousePosition(s);e.start(r,l[0]),M(e.getMouseEventMap()),x(s)}}},e.createOnTouchStart=function(r){return function(s){if(!(e.props.disabled||s.touches.length>1)){e.setState({pending:!0});var l=e.getTouchPosition(s);e.startPosition=l,e.isScrolling=void 0,e.start(r,l[0]),M(e.getTouchEventMap()),R(s)}}},e.handleResize=function(){var r=window.setTimeout(function(){e.pendingResizeTimeouts.shift(),e.resize()},0);e.pendingResizeTimeouts.push(r)},e.renderThumb=function(r,s){var l=e.props.thumbClassName+" "+e.props.thumbClassName+"-"+s+" "+(e.state.index===s?e.props.thumbActiveClassName:""),c={ref:function(f){e["thumb"+s]=f},key:e.props.thumbClassName+"-"+s,className:l,style:r,onMouseDown:e.createOnMouseDown(s),onTouchStart:e.createOnTouchStart(s),onFocus:e.createOnKeyDown(s),tabIndex:0,role:"slider","aria-orientation":e.props.orientation,"aria-valuenow":e.state.value[s],"aria-valuemin":e.props.min,"aria-valuemax":e.props.max,"aria-label":Array.isArray(e.props.ariaLabel)?e.props.ariaLabel[s]:e.props.ariaLabel,"aria-labelledby":Array.isArray(e.props.ariaLabelledby)?e.props.ariaLabelledby[s]:e.props.ariaLabelledby},h={index:s,value:b(e.state.value),valueNow:e.state.value[s]};return e.props.ariaValuetext&&(c["aria-valuetext"]=typeof e.props.ariaValuetext=="string"?e.props.ariaValuetext:e.props.ariaValuetext(h)),e.props.renderThumb(c,h)},e.renderTrack=function(r,s,l){var c={key:e.props.trackClassName+"-"+r,className:e.props.trackClassName+" "+e.props.trackClassName+"-"+r,style:e.buildTrackStyle(s,e.state.upperBound-l)},h={index:r,value:b(e.state.value)};return e.props.renderTrack(c,h)};var t=P(u.value);t.length||(t=P(u.defaultValue)),e.pendingResizeTimeouts=[];for(var a=[],n=0;n<t.length;n+=1)t[n]=v(t[n],u),a.push(n);return e.state={index:-1,upperBound:0,sliderLength:0,value:t,zIndices:a},e}var o=p.prototype;return o.componentDidMount=function(){typeof window!="undefined"&&(window.addEventListener("resize",this.handleResize),this.resize())},p.getDerivedStateFromProps=function(e,t){var a=P(e.value);return!a.length||t.pending?null:{value:a.map(function(n){return v(n,e)})}},o.componentDidUpdate=function(){this.state.upperBound===0&&this.resize()},o.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),typeof window!="undefined"&&window.removeEventListener("resize",this.handleResize)},o.onEnd=function(e){e&&B(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},o.getValue=function(){return b(this.state.value)},o.getClosestIndex=function(e){for(var t=Number.MAX_VALUE,a=-1,n=this.state.value,r=n.length,s=0;s<r;s+=1){var l=this.calcOffset(n[s]),c=Math.abs(e-l);c<t&&(t=c,a=s)}return a},o.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},o.getTouchPosition=function(e){var t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},o.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},o.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},o.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},o.getValueFromPosition=function(e){var t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return v(this.state.startValue+t,this.props)},o.getDiffPosition=function(e){var t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},o.resize=function(){var e=this.slider,t=this.thumb0;if(!(!e||!t)){var a=this.sizeKey(),n=e.getBoundingClientRect(),r=e[a],s=n[this.posMaxKey()],l=n[this.posMinKey()],c=t.getBoundingClientRect(),h=c[a.replace("client","").toLowerCase()],d=r-h,f=Math.abs(s-l);(this.state.upperBound!==d||this.state.sliderLength!==f||this.state.thumbSize!==h)&&this.setState({upperBound:d,sliderLength:f,thumbSize:h})}},o.calcOffset=function(e){var t=this.props.max-this.props.min;if(t===0)return 0;var a=(e-this.props.min)/t;return a*this.state.upperBound},o.calcValue=function(e){var t=e/this.state.upperBound;return t*(this.props.max-this.props.min)+this.props.min},o.calcOffsetFromPosition=function(e){var t=this.slider,a=t.getBoundingClientRect(),n=a[this.posMaxKey()],r=a[this.posMinKey()],s=window["page"+this.axisKey()+"Offset"],l=s+(this.props.invert?n:r),c=e-l;return this.props.invert&&(c=this.state.sliderLength-c),c-=this.state.thumbSize/2,c},o.forceValueFromPosition=function(e,t){var a=this,n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),s=v(this.calcValue(n),this.props),l=this.state.value.slice();l[r]=s;for(var c=0;c<l.length-1;c+=1)if(l[c+1]-l[c]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:l},function(){t(r),a.fireChangeEvent("onChange")})},o.clearPendingResizeTimeouts=function(){do{var e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},o.start=function(e,t){var a=this["thumb"+e];a&&a.focus();var n=this.state.zIndices;n.splice(n.indexOf(e),1),n.push(e),this.setState(function(r){return{startValue:r.value[e],startPosition:t!==void 0?t:r.startPosition,index:e,zIndices:n}})},o.moveUpByStep=function(e){e===void 0&&(e=this.props.step);var t=this.state.value[this.state.index],a=v(t+e,this.props);this.move(Math.min(a,this.props.max))},o.moveDownByStep=function(e){e===void 0&&(e=this.props.step);var t=this.state.value[this.state.index],a=v(t-e,this.props);this.move(Math.max(a,this.props.min))},o.move=function(e){var t=this.state,a=t.index,n=t.value,r=n.length,s=n[a];if(e!==s){this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;var l=this.props,c=l.pearling,h=l.max,d=l.min,f=l.minDistance;if(!c){if(a>0){var w=n[a-1];e<w+f&&(e=w+f)}if(a<r-1){var D=n[a+1];e>D-f&&(e=D-f)}}n[a]=e,c&&r>1&&(e>s?(this.pushSucceeding(n,f,a),V(r,n,f,h)):e<s&&(this.pushPreceding(n,f,a),F(r,n,f,d))),this.setState({value:n},this.fireChangeEvent.bind(this,"onChange"))}},o.pushSucceeding=function(e,t,a){var n,r;for(n=a,r=e[n]+t;e[n+1]!==null&&r>e[n+1];n+=1,r=e[n]+t)e[n+1]=k(r,this.props)},o.pushPreceding=function(e,t,a){for(var n=a,r=e[n]-t;e[n-1]!==null&&r<e[n-1];n-=1,r=e[n]-t)e[n-1]=k(r,this.props)},o.axisKey=function(){return this.props.orientation==="vertical"?"Y":"X"},o.orthogonalAxisKey=function(){return this.props.orientation==="vertical"?"X":"Y"},o.posMinKey=function(){return this.props.orientation==="vertical"?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},o.posMaxKey=function(){return this.props.orientation==="vertical"?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},o.sizeKey=function(){return this.props.orientation==="vertical"?"clientHeight":"clientWidth"},o.fireChangeEvent=function(e){this.props[e]&&this.props[e](b(this.state.value),this.state.index)},o.buildThumbStyle=function(e,t){var a={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():"",zIndex:this.state.zIndices.indexOf(t)+1};return a[this.posMinKey()]=e+"px",a},o.buildTrackStyle=function(e,t){var a={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():""};return a[this.posMinKey()]=e,a[this.posMaxKey()]=t,a},o.buildMarkStyle=function(e){var t;return t={position:"absolute"},t[this.posMinKey()]=e,t},o.renderThumbs=function(e){for(var t=e.length,a=[],n=0;n<t;n+=1)a[n]=this.buildThumbStyle(e[n],n);for(var r=[],s=0;s<t;s+=1)r[s]=this.renderThumb(a[s],s);return r},o.renderTracks=function(e){var t=[],a=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(var n=0;n<a;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(a+1,e[a],this.state.upperBound)),t},o.renderMarks=function(){var e=this,t=this.props.marks,a=this.props.max-this.props.min+1;return typeof t=="boolean"?t=Array.from({length:a}).map(function(n,r){return r}):typeof t=="number"&&(t=Array.from({length:a}).map(function(n,r){return r}).filter(function(n){return n%t==0})),t.map(parseFloat).sort(function(n,r){return n-r}).map(function(n){var r=e.calcOffset(n),s={key:n,className:e.props.markClassName,style:e.buildMarkStyle(r)};return e.props.renderMark(s)})},o.render=function(){for(var e=this,t=[],a=this.state.value,n=a.length,r=0;r<n;r+=1)t[r]=this.calcOffset(a[r],r);var s=this.props.withTracks?this.renderTracks(t):null,l=this.renderThumbs(t),c=this.props.marks?this.renderMarks():null;return g.createElement("div",{ref:function(d){e.slider=d},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},s,l,c)},p}(g.Component);m.displayName="ReactSlider",m.defaultProps={min:0,max:100,step:1,pageFn:function(p){return p*10},minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:function(p){return g.createElement("div",y({},p,{__self:m,__source:{fileName:S,lineNumber:353,columnNumber:31}}))},renderTrack:function(p){return g.createElement("div",y({},p,{__self:m,__source:{fileName:S,lineNumber:354,columnNumber:31}}))},renderMark:function(p){return g.createElement("span",y({},p,{__self:m,__source:{fileName:S,lineNumber:355,columnNumber:30}}))}},m.propTypes={};export default m;