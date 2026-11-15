/* Golden Generation 1998 - tema siang/malam, animasi scroll */
(function(){
var R=document.documentElement,$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,rnd=function(a,b){return a+Math.random()*(b-a)};
var saved;try{saved=localStorage.getItem('gg-theme')}catch(e){}
var h=new Date().getHours();
function setT(t,save){R.dataset.t=t;if(save)try{localStorage.setItem('gg-theme',t)}catch(e){}
 $$('.tg').forEach(function(b){b.textContent=t==='night'?'🌙 Malam':'☀️ Siang';b.title='Ganti suasana siang / malam'})}
setT(saved||((h<6||h>=18)?'night':'day'));
/* langit */
var sky=document.createElement('div');sky.id='sky';
var s='<div class="orb"></div>';
for(var i=0;i<7;i++)s+='<span class="cl" style="--y:'+rnd(2,55)+'vh;--d:'+rnd(70,140)+'s;animation-delay:-'+rnd(0,120)+'s;font-size:'+rnd(40,90)+'px">☁️</span>';
for(i=0;i<70;i++)s+='<span class="st" style="left:'+rnd(0,100)+'%;top:'+rnd(0,70)+'%;animation-delay:-'+rnd(0,3)+'s"></span>';
for(i=0;i<12;i++)s+='<span class="ff" style="left:'+rnd(5,95)+'%;top:'+rnd(40,95)+'%;--dx:'+rnd(-90,90)+'px;--dy:'+rnd(-70,70)+'px;--d:'+rnd(3,7)+'s"></span>';
sky.innerHTML=s;document.body.prepend(sky);
var bar=document.createElement('div');bar.id='prog';document.body.prepend(bar);
var top=document.createElement('button');top.className='top';top.textContent='⬆';top.setAttribute('aria-label','Ke atas');document.body.appendChild(top);
top.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
document.addEventListener('click',function(e){var b=e.target.closest('.tg');if(!b)return;
 var n=R.dataset.t==='night'?'day':'night';setT(n,1);
 var o=$('#sky .orb');if(o&&!rm)o.animate([{transform:'translateY(60px) scale(.7)'},{transform:'none'}],{duration:900,easing:'cubic-bezier(.2,1.3,.4,1)'});
});
/* lampu malam mengikuti kursor */
addEventListener('pointermove',function(e){R.style.setProperty('--mx',e.clientX+'px');R.style.setProperty('--my',e.clientY+'px')},{passive:true});
/* scroll */
function sc(){var m=R.scrollHeight-innerHeight;bar.style.width=(m>0?scrollY/m*100:0)+'%';top.classList.toggle('on',scrollY>500)}
addEventListener('scroll',sc,{passive:true});sc();
/* reveal + mesin ketik */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');io.unobserve(t);if(t.dataset.type)typeIt(t)})},{threshold:.12});
function typeIt(t){var x=t.dataset.type;t.dataset.type='';t.textContent='';t.classList.add('cur');var i=0;
 (function k(){t.textContent=x.slice(0,++i);if(i<x.length)setTimeout(k,rm?0:28);else setTimeout(function(){t.classList.remove('cur')},900)})()}
window.ggObserve=function(r){$$('.rv,[data-type]',r).forEach(function(e){if(e.dataset.type&&!e.classList.contains('rv')){var x=e.dataset.type;e.dataset.full=x}io.observe(e)})};
if(document.readyState==='loading')addEventListener('DOMContentLoaded',function(){window.ggObserve()});else window.ggObserve();
/* hitung naik */
window.ggCount=function(e,to){var t0=performance.now();(function f(n){var p=Math.min(1,(n-t0)/1400);e.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)};
})();
