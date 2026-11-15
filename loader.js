/* Golden Generation - Loading Screen 1998 (jendela retro) + transisi halaman. Pasang di <head> SETIAP halaman. */
(function(){
if(window.__ggLoader)return;window.__ggLoader=true;
var doc=document.documentElement,el=document.createElement('div');
el.id='gg-loader';
el.innerHTML='<div class="gg-run">🐎💨</div><div class="gg-win"><b>黄金世代.exe</b><div><span class="gg-t">Memuat mading…</span><div class="gg-bar"><i></i></div><span class="gg-p">0%</span></div></div><small>Mohon tunggu sebentar ya • 1998</small>';
var stl=document.createElement('style');
stl.textContent='#gg-loader{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.7rem;background:#008080;font-family:DotGothic16,monospace;color:#fff;transition:clip-path .9s cubic-bezier(.7,0,.3,1);clip-path:circle(150% at 50% 50%)}#gg-loader.gg-done{clip-path:circle(0% at 50% 50%);pointer-events:none}.gg-win{width:min(23rem,88vw);background:#c0c0c0;border:3px outset #fff;box-shadow:4px 4px 0 #000;color:#000}.gg-win b{display:block;background:linear-gradient(90deg,#000080,#1084d0);color:#fff;padding:.15rem .5rem;font-weight:400}.gg-win div{padding:1rem;text-align:center}.gg-bar{height:20px;border:2px inset #fff;background:#fff;margin:.7rem 0 .3rem;padding:2px}.gg-bar i{display:block;height:100%;width:0;background:repeating-linear-gradient(90deg,#000080 0 10px,transparent 10px 13px)}.gg-run{font-size:2rem}html.gg-lock{overflow:hidden}';
(document.head||doc).appendChild(stl);doc.appendChild(el);doc.classList.add('gg-lock');
var bar=el.querySelector('.gg-bar i'),pct=el.querySelector('.gg-p'),txt=el.querySelector('.gg-t'),run=el.querySelector('.gg-run');
var shown=0,mode='load',t0=performance.now(),on=false,loaded=document.readyState==='complete',fonts=false;
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){fonts=true});else fonts=true;
if(!loaded)addEventListener('load',function(){loaded=true});
function imgs(){var m=document.images,d=0;if(!m.length)return 1;for(var i=0;i<m.length;i++)if(m[i].complete)d++;return d/m.length}
function frame(n){
 var g;
 if(mode==='leave')g=Math.min(96,(n-t0)/450*100);
 else{var r=(n-t0>6000)?100:100*(.2*fonts+.5*imgs()+.3*loaded);g=Math.min(r,(n-t0)/900*100)}
 shown+=(g-shown)*.12;if(shown>99.4)shown=100;
 bar.style.width=shown+'%';pct.textContent=Math.round(shown)+'%';run.style.marginLeft=(shown-50)*1.2+'px';
 txt.textContent=mode==='leave'?'Pindah halaman…':['Memasang paku payung…','Menempel kertas…','Menyapu papan…','Siap!'][Math.min(3,Math.floor(shown/26))];
 if(mode==='load'&&shown>=100){on=false;setTimeout(function(){el.classList.add('gg-done');doc.classList.remove('gg-lock');dispatchEvent(new Event('gg-loaded'))},350);return}
 requestAnimationFrame(frame)}
function go(){if(!on){on=true;requestAnimationFrame(frame)}}go();
function leave(u){if(mode==='leave')return;mode='leave';shown=0;t0=performance.now();doc.classList.add('gg-lock');el.classList.remove('gg-done');go();setTimeout(function(){location.href=u},480)}
document.addEventListener('click',function(e){
 if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
 var a=e.target.closest&&e.target.closest('a[href]');
 if(!a||(a.target&&a.target!=='_self')||a.hasAttribute('download'))return;
 var u;try{u=new URL(a.href,location.href)}catch(_){return}
 if(u.origin!==location.origin||!/^(https?|file):$/.test(u.protocol))return;
 if(u.pathname===location.pathname&&u.search===location.search){if(!u.hash){e.preventDefault();scrollTo({top:0,behavior:'smooth'})}return}
 e.preventDefault();leave(u.href)},true);
addEventListener('pageshow',function(e){if(!e.persisted)return;mode='load';shown=100;el.classList.add('gg-done');doc.classList.remove('gg-lock')});
})();
