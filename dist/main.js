(()=>{"use strict";!function(e){const t=document.querySelector(".tasks"),c=document.createElement("div"),n=document.createElement("h4");n.textContent=e.title;const o=document.createElement("p");o.textContent=e.desc;const s=document.createElement("p");s.textContent=e.dueDate;const d=document.createElement("p");d.textContent=e.priority;const l=document.createElement("ul");e.checklist.forEach((e=>{const t=document.createElement("li");t.textContent=e,l.appendChild(t)}));const i=document.createElement("input");i.setAttribute("type","checkbox"),i.checked=e.isComplete,c.append(n,o,s,d,l,i),t.appendChild(c)}(new class{constructor(e,t,c,n,o){this.title=e,this.desc=t,this.dueDate=c,this.priority=n,this.checklist=o,this.isComplete=!1}addToChecklist(e){this.checklist.append(e)}}("do stuff","do some things","05-28-3000",1,["do","the","stuff"]));const e=document.querySelector(".new-task-btn"),t=document.querySelector(".cancel-btn"),c=document.querySelector("form"),n=document.querySelector(".checklist-btn"),o=document.getElementById("checklist"),s=document.querySelector(".checklist-items");n.addEventListener("click",(()=>{if(o.value){const e=document.createElement("p");e.classList.add("item"),e.textContent=o.value,s.appendChild(e),o.value=""}})),t.addEventListener("click",(()=>{c.style.display="none"})),e.addEventListener("click",(()=>{c.style.display="block"}))})();
//# sourceMappingURL=main.js.map