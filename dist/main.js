!function(){"use strict";!function(){var e=class{constructor(e,t){this.context=e,this.level=t.level,this.xpos=t.xpos,this.ypos=t.ypos*(1+t.level),this.value=t.value,this.drawNode()}drawNode(){this.context.beginPath(),this.context.textAlign="center",this.context.textBaseline="middle",this.context.font="20px Arial",this.context.fillText(this.value,this.xpos,this.ypos),this.context.strokeStyle="blue",this.context.lineWidth=2,this.context.arc(this.xpos,this.ypos,20,0,2*Math.PI),this.context.stroke(),this.context.closePath()}update(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"3";this.context.beginPath(),this.context.strokeStyle=e,this.context.lineWidth=t,this.context.arc(this.xpos,this.ypos,22,0,2*Math.PI),this.context.stroke(),this.context.closePath()}found(){this.context.beginPath(),this.context.strokeStyle="green",this.context.lineWidth=15,this.context.arc(this.xpos,this.ypos,30,0,2*Math.PI),this.context.stroke(),this.context.closePath()}},t=class{constructor(e,t,s){this.parentVal=t.value,this.xstart=t.xpos,this.ystart=t.ypos*(1+t.level),this.childVal=s.value,this.xend=s.xpos,this.yend=s.ypos*(1+s.level),this.context=e,this.drawLine()}drawLine(){let e=Math.sqrt(200);this.parentVal>this.childVal?(this.context.beginPath(),this.context.moveTo(this.xstart-e,this.ystart+e),this.context.lineTo(this.xend+e,this.yend-e),this.context.stroke(),this.context.closePath()):(this.context.beginPath(),this.context.moveTo(this.xstart+e,this.ystart+e),this.context.lineTo(this.xend-e,this.yend-e),this.context.stroke(),this.context.closePath())}update(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"5",s=Math.sqrt(200);this.parentVal>this.childVal?(this.context.beginPath(),this.context.strokeStyle=e,this.context.lineWidth=t,this.context.moveTo(this.xstart-s,this.ystart+s),this.context.lineTo(this.xend+s,this.yend-s),this.context.stroke(),this.context.closePath()):(this.context.beginPath(),this.context.strokeStyle=e,this.context.lineWidth=t,this.context.moveTo(this.xstart+s,this.ystart+s),this.context.lineTo(this.xend-s,this.yend-s),this.context.stroke(),this.context.closePath())}};class s{constructor(e){this.value=e,this.level=0,this.xpos=window.innerWidth/2-50,this.ypos=75,this.left=null,this.right=null,this.circle=null,this.arrow=null}}class i{constructor(){this.root=null,this.circles=[],this.nodeList=[]}getNodeList(){const e=[];return this.nodeList.forEach((t=>{e.push(`${t.value}`)})),e}insert(i){const n=document.getElementById("canvas").getContext("2d"),o=new s(i);if(!this.root)return o.level=0,o.circle=new e(n,o),this.root=o,this.nodeList.push(o),void this.circles.push({circle:o.circle,value:o.value});let l=this.root;for(;;){if(i==l.value)return;if(o.level+=1,i<l.value){if(o.xpos-=300/(1.5*o.level),!l.left)return l.left=o,o.circle=new e(n,o),o.arrow=new t(n,l,l.left),this.nodeList.push(o),void this.circles.push({circle:o.circle,arrow:o.arrow,value:o.value});l=l.left}else{if(o.xpos+=300/(1.5*o.level),!l.right)return l.right=o,o.circle=new e(n,o),o.arrow=new t(n,l,l.right),this.nodeList.push(o),void this.circles.push({circle:o.circle,arrow:o.arrow,value:o.value});l=l.right}}}async remove(e){let t=this.root,s=null,i=null,n=null;const o=document.getElementById("canvas").getContext("2d");for(;;){if(await new Promise((e=>setTimeout(e,500))),t.arrow&&t.arrow.update("red"),await new Promise((e=>setTimeout(e,500))),t.circle.update("red"),t.value==e){if(t.right)for(i=t.right,await new Promise((e=>setTimeout(e,500))),i.arrow&&i.arrow.update("green",10),await new Promise((e=>setTimeout(e,500))),i.circle.update("green",10);i.left;)i=i.left,await new Promise((e=>setTimeout(e,500))),i.arrow&&i.arrow.update("green",10),await new Promise((e=>setTimeout(e,500))),i.circle.update("green",10);else t.left&&(i=t.left,await new Promise((e=>setTimeout(e,500))),i.arrow&&i.arrow.update("green",10),await new Promise((e=>setTimeout(e,500))),i.circle.update("green",10));s&&(t==s.right?s.right=t.right:t.right?s.left=t.right:s.left=null),this.circles.forEach(((s,o)=>{i?s.circle.value==e?(t.value=i.value,s.value=i.value,s.circle.value=i.value):s.circle.value==i.value&&(n=o,s.circle.value=null):s.circle.value==e&&(n=o)})),await new Promise((e=>setTimeout(e,2500))),await this.update(),this.circles.splice(n,1),await new Promise((e=>setTimeout(e,2500))),await this.reset(),await new Promise((e=>setTimeout(e,2500))),o.clearRect(0,0,1800,700),this.nodeList.splice(n,1);let l=this.nodeList;return this.nodeList=[],this.root=null,void l.forEach((e=>{this.insert(e.value)}))}t.value<e?(s=t,t=t.right):(s=t,t=t.left)}}async search(e){let t=this.root;for(;t;){if(await new Promise((e=>setTimeout(e,500))),t.arrow&&t.arrow.update("purple"),await new Promise((e=>setTimeout(e,500))),t.circle.update("purple"),t.value==e)return await new Promise((e=>setTimeout(e,500))),t.circle.update("green",10),await new Promise((e=>setTimeout(e,2500))),await this.update(),!0;t.value>e?t=t.left:t.value<e&&(t=t.right)}return!1}reset(){document.getElementById("canvas").getContext("2d").clearRect(0,0,1800,700);let e=this.circles;this.circles=[],e.forEach((e=>{e.circle.drawNode(),e.arrow&&e.arrow.drawLine()}))}update(){document.getElementById("canvas").getContext("2d").clearRect(0,0,1800,700),this.circles.forEach((e=>{e.circle.drawNode(),e.arrow&&e.arrow.drawLine()}))}}let n=[];for(let e=1;e<100;e++)n.push(`${e}`);class o{static bst=null;constructor(e){this.button=e,this.button.addEventListener("click",this.clickHandle.bind(this))}clickHandle(){if("lessons"===this.button.id)this.lesson();else if("code"===this.button.id)this.code();else if("generate-random"===this.button.id)this.generate();else if("insert"===this.button.id){let e=document.querySelector("input#insert").value;document.querySelector("input#insert").value="",o.bst.getNodeList().includes(e)?window.alert("That number already exists in the tree."):n.includes(e)?this.insert(e):window.alert("Please enter a number between 0-99.")}else if("remove"===this.button.id){let e=document.querySelector("input#remove").value;document.querySelector("input#remove").value="",o.bst.getNodeList().includes(e)&&n.includes(e)?this.remove(e):o.bst.getNodeList().includes(e)?window.alert("Please enter a number between 0-99."):window.alert("That number does not exist in the tree.")}else if("search"===this.button.id){let e=document.querySelector("input#search").value;document.querySelector("input#search").value="",o.bst.getNodeList().includes(e)&&n.includes(e)?this.search(e):o.bst.getNodeList().includes(e)?window.alert("Please enter a number between 0-99."):window.alert("That number does not exist in the tree.")}else"traverse"===this.button.id&&this.traverse()}lesson(){"false"===document.getElementById("lessons").name?(document.getElementById("slide-container").style.display="flex",document.getElementById("lessons").name="true",document.getElementById("canvas-container").style.display="none",document.getElementById("code-container").style.display="none",document.getElementById("code").name="false"):(document.getElementById("slide-container").style.display="none",document.getElementById("lessons").name="false",document.getElementById("canvas-container").style.display="flex")}code(){"false"===document.getElementById("code").name?(document.getElementById("code-container").style.display="flex",document.getElementById("code").name="true",document.getElementById("canvas-container").style.display="none",document.getElementById("slide-container").style.display="none",document.getElementById("lessons").name="false"):(document.getElementById("code-container").style.display="none",document.getElementById("code").name="false",document.getElementById("canvas-container").style.display="flex")}generate(){document.getElementById("canvas").getContext("2d").clearRect(0,0,1800,700);const e=[];for(;e.length<4;){let t=Math.floor(100*Math.random());!e.includes(t)&&t>0&&t>=40&&t<=60&&e.push(t)}for(;e.length<8;){let t=Math.floor(100*Math.random());!e.includes(t)&&t>0&&t<40&&e.push(t)}for(;e.length<12;){let t=Math.floor(100*Math.random());!e.includes(t)&&t>0&&t>60&&e.push(t)}o.bst=new i,e.forEach((e=>o.bst.insert(e)))}insert(e){o.bst.insert(e)}remove(e){o.bst.remove(e)}search(e){o.bst.search(e)}}var l=o;document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementsByTagName("button");for(let t=0;t<e.length;t++)new l(e[t]);const t=document.getElementsByClassName("slide");new class{constructor(e){this.slides=e,this.index=0,this.next=document.getElementById("next"),this.prev=document.getElementById("prev"),this.close=document.getElementById("close"),this.next.addEventListener("click",this.clickHandle.bind(this)),this.prev.addEventListener("click",this.clickHandle.bind(this)),this.close.addEventListener("click",this.clickHandle.bind(this))}showSlide(e){for(let t=0;t<this.slides.length;t++)this.slides[t].style.display=t===e?"flex":"none"}hideSlide(e){document.getElementById("slide-container").style.display="none",document.getElementById(`${this.index}`).style.display="none",document.getElementById("0").style.display="flex",this.index=0,document.getElementById("canvas-container").style.display="flex"}clickHandle(e){"next"===e.target.id?this.index<7&&(this.index+=1,this.showSlide(this.index)):"prev"===e.target.id?this.index>0&&(this.index-=1,this.showSlide(this.index)):"close"===e.target.id&&(this.hideSlide(this.index),document.getElementById("lessons").name="false")}}(t);const s=document.getElementsByClassName("codeslide");new class{constructor(e){this.codeSlides=e,this.javascriptCode=document.getElementById("javascriptCode"),this.pythonCode=document.getElementById("pythonCode"),this.rubyCode=document.getElementById("rubyCode"),this.close=document.getElementById("closecode"),this.javascriptCode.addEventListener("click",this.clickHandle.bind(this)),this.pythonCode.addEventListener("click",this.clickHandle.bind(this)),this.rubyCode.addEventListener("click",this.clickHandle.bind(this)),this.close.addEventListener("click",this.clickHandle.bind(this))}showSlide(e){document.querySelectorAll("pre").forEach((e=>e.style.display="none")),document.getElementById(e).style.display="flex"}hideSlide(){document.getElementById("code-container").style.display="none",document.querySelectorAll("pre").forEach((e=>e.style.display="none")),document.getElementById("java").style.display="flex",document.getElementById("canvas-container").style.display="flex"}clickHandle(e){"javascriptCode"===e.target.id?this.showSlide("java"):"pythonCode"===e.target.id?this.showSlide("python"):"rubyCode"===e.target.id?this.showSlide("ruby"):"closecode"===e.target.id&&(this.hideSlide(),document.getElementById("code").name="false")}}(s);const i=document.getElementById("canvas");i.width=1800,i.height=700,i.style.background="linear-gradient(skyblue, lightgreen)";const n=document.querySelector("button#generate-random");new l(n).generate()}))}()}();
//# sourceMappingURL=main.js.map