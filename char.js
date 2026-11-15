/* Template scrapbook karakter: membaca window.D (data) */
(function(){
const D=window.D,T=D.theme,X=D.deco,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const fb=n=>'https://placehold.co/400x520/fde/333?text='+encodeURIComponent(n),R=document.documentElement;
R.style.setProperty('--p',T.p);R.style.setProperty('--s',T.s);R.style.setProperty('--acc',T.p);
const st=document.createElement('style');
st.textContent=`.note:not(.y):not(.b):not(.g):not(.p){background-image:${X.pat}}
.hero{display:grid;gap:2rem;grid-template-columns:minmax(240px,.8fr) 1.3fr;align-items:start;margin-bottom:3rem;position:relative}
@media(max-width:820px){.hero{grid-template-columns:1fr}}
.wm{position:absolute;right:.5rem;top:-.4rem;font:900 clamp(2.5rem,9vw,6rem)/1 var(--f3);color:var(--p);opacity:.12;writing-mode:vertical-rl;pointer-events:none}
html[data-t=night] .wm{opacity:.28;text-shadow:0 0 18px var(--p)}
.nm{font:clamp(2rem,6vw,3.6rem)/1.05 var(--f3);color:var(--p);text-shadow:3px 3px 0 #fff}
.tabs{display:flex;gap:.3rem;flex-wrap:wrap;margin-bottom:-4px;position:relative;z-index:4}
.tabs button{font:.95rem var(--f2);padding:.5rem 1.1rem;border:3px solid var(--ink);border-bottom:0;background:#ddd;color:var(--ink);cursor:pointer;border-radius:10px 10px 0 0;transition:.2s}
.tabs button.on{background:var(--p);color:#fff;translate:0 -6px;padding-top:.8rem}
.pan{display:none;border:3px solid var(--ink);background:var(--paper);padding:1.6rem 1.2rem;position:relative;transition:background .8s}
.pan.on{display:block;animation:pop .5s cubic-bezier(.2,1.3,.4,1)}@keyframes pop{from{opacity:0;transform:translateY(24px) rotate(1deg)}}
.g2{display:grid;gap:1.6rem;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}
.row{display:flex;justify-content:space-between;gap:.6rem;border-bottom:1px dashed #0004;padding:.3rem 0}
.apt{display:flex;gap:1rem;flex-wrap:wrap}.apt div{text-align:center;font-size:.8rem}.apt b{display:grid;place-items:center;width:62px;height:62px;border-radius:50%;border:4px double var(--p);color:var(--p);font:1.8rem var(--f3);rotate:-8deg;margin:0 auto .2rem;background:#fff9}
.tag{display:inline-block;margin:.15rem;padding:.1rem .6rem;border:2px solid var(--p);font-size:.75rem;border-radius:99px;background:#fff9;color:#333}
.nav2{display:flex;gap:.6rem;justify-content:center;margin-top:1rem}
.ico{font-size:1.8rem;color:var(--p);margin-bottom:.4rem}
details{margin-bottom:1rem}summary{cursor:pointer;font:1.05rem var(--f3);list-style:none}summary::before{content:"✂ ";color:var(--p)}details[open] summary::before{content:"📖 "}
details[open] p{animation:pop .4s}
.tk{border-left:10px dotted var(--p);padding-left:1.3rem}
.slide{animation:pop .5s}`;
document.head.appendChild(st);
const pages=[['specialweek','Special Week'],['grasswonder','Grass Wonder'],['elcondorpasa','El Condor Pasa'],['seiunsky','Seiun Sky'],['kinghalo','King Halo']];
const sec=(t,id)=>`<h2 class="sign rv" ${id?`id="${id}"`:''} style="background:linear-gradient(var(--p),#0007),var(--p)">${t}</h2>`;
document.body.insertAdjacentHTML('afterbegin',`<header class="plank"><a class="logo" href="index.html">← 掲示板</a>${pages.filter(p=>p[0]+'.html'!==D.file).map(p=>`<a class="l hm" href="${p[0]}.html">${p[1]}</a>`).join('')}<button class="tg"></button></header>
<main class="board" id="b"><section class="hero">
<span class="wm">${D.jpBg}</span>
<div class="rv" style="--r:-3deg"><div class="note tp" style="padding:.8rem .8rem 1.2rem;--r:-3deg;--pin:var(--p)"><div class="polaroid" style="padding:.4rem .4rem 2.8rem"><div class="ph" style="--bg:linear-gradient(160deg,${T.p}66,${T.s}33,#fff)"><img id="hi" src="${D.heroImg}" alt="${D.name}" onerror="this.onerror=null;this.src='${fb(D.name)}'"></div><span class="cap">${D.name}</span></div></div>
<span class="sticker" style="left:-1rem;bottom:2rem;--sz:3rem;--r:-12deg">${X.st[0]}</span><span class="sticker" style="right:-.6rem;top:-1.4rem;--sz:2.6rem;--r:14deg">${X.st[1]}</span></div>
<div style="display:grid;gap:1.2rem">
<div class="note tp rv" style="--r:1deg;--d:.1s;padding:1.6rem"><p class="hand" style="color:var(--p)">${D.tagline}</p><h1 class="nm" data-type="${D.name}">${D.name}</h1><p class="stamp" style="margin:.5rem 0">${D.motto}</p><p style="margin-top:.6rem">${D.intro}</p><p style="margin-top:.8rem"><span class="tag">${D.attire[0]}</span><span class="tag">${D.attire[1]}</span><span class="tag">${D.attire[2]}</span></p></div>
<div class="g2"><div class="note y rv" style="--r:-2deg;--d:.25s"><p class="hand" style="font-size:1.15rem">“${D.quote}”</p><small>${D.quoteSrc}</small></div>
<div class="note b rv" style="--r:2deg;--d:.35s" id="vibe"><h3 class="tt" id="vh"></h3><p class="hand" id="vp"></p></div></div>
<div style="display:flex;gap:.8rem;flex-wrap:wrap">${D.badges.map((b,i)=>`<div class="note ${['p','g','b','y'][i%4]} rv" style="--r:${[-3,2,-1.5,3][i%4]}deg;--d:${.4+i*.1}s;padding:.5rem .9rem"><small>${b[0]}</small><br><b class="hand">${b[1]}</b></div>`).join('')}</div></div></section>
<section><div class="tabs" id="tabs">${D.tabs.map((t,i)=>`<button class="${i?'':'on'}" data-i="${i}">${t}</button>`).join('')}</div>
<div class="pan on rv"><div class="g2"><div class="note lined" style="--r:-.8deg"><h3 class="tt">${D.specTitle}</h3>${D.stats.map(s=>`<div class="row"><span>${s[0]}</span><b>${s[1]}</b></div>`).join('')}</div>
<div class="note p" style="--r:.8deg"><h3 class="tt">${D.bioTitle}</h3>${D.bio.map(b=>`<p style="margin:.5rem 0">${b}</p>`).join('')}</div>
<div class="note g" style="--r:-.5deg"><h3 class="tt">${D.aptTitle}</h3><div class="apt" style="margin-top:.8rem">${D.apt.map(a=>`<div><b>${a[1]}</b>${a[0]}</div>`).join('')}</div></div></div>
<h3 class="tt" style="margin:1.8rem 0 1rem">${D.appTitle}</h3><div class="g2">${D.features.map((f,i)=>`<div class="note ${['y','b','p','g'][i%4]} rv" style="--r:${[-1.8,1.4,-1,2][i%4]}deg;--d:${i*.1}s"><div class="ico"><i class="${f.i}"></i></div><h4 class="hand" style="font-size:1.1rem">${f.t}</h4><p style="font-size:.88rem">${f.d}</p></div>`).join('')}</div></div>
<div class="pan"><h3 class="tt">${D.varTitle}</h3><p class="hand">${D.varSub}</p><div class="g2" style="margin-top:1.2rem;align-items:center"><div style="max-width:320px;margin:auto"><div class="note tp" style="--r:2deg;padding:.6rem"><div class="polaroid" style="padding:.4rem .4rem 2.6rem"><div class="ph" style="--bg:linear-gradient(160deg,${T.p}55,#fff)"><img id="oi" src="" alt=""></div><span class="cap" id="oc"></span></div></div><div class="nav2"><button class="chip" id="pv">◀ Sebelumnya</button><button class="chip" id="nx">Lanjut ▶</button></div></div>
<div class="note lined slide" id="od" style="--r:-1deg"></div></div></div>
<div class="pan"><div class="g2"><div class="note lined" style="--r:-1deg"><h3 class="tt">${D.irlTitle}</h3><p style="margin-top:.6rem">${D.irl}</p></div><div class="note y" style="--r:1.5deg"><h3 class="tt">🏇 Catatan Balap</h3>${D.irlStats.map(s=>`<div class="row"><span>${s[0]}</span><b>${s[1]}</b></div>`).join('')}</div></div></div></section>
<section>${sec(D.relTitle)}<div class="g2">${D.rels.map((r,i)=>`<div class="note tp rv ${['y','b','p','g'][i%4]}" style="--r:${[-2,1.6,-1,2.2][i%4]}deg;--d:${i*.1}s"><small class="hand">${r.label}</small><h3 class="tt">${r.name}</h3><p style="font-size:.88rem;margin:.4rem 0">${r.desc}</p><p class="stamp" style="font-size:.75rem">${r.rel||'Teman'}</p><p style="margin-top:.5rem">${r.links.map(l=>`<a class="chip" style="text-decoration:none;display:inline-block;margin:.15rem" href="${l[1]}">${l[0]}</a>`).join('')}</p></div>`).join('')}</div></section>
<section>${sec(D.mediaTitle)}<div class="g2">${D.media.map((m,i)=>`<div class="note rv tk" style="--r:${[1.5,-1.5,1][i%3]}deg;--d:${i*.1}s"><div class="ico"><i class="${m.icon}"></i></div><h3 class="tt">${m.label}</h3><span class="tag">${m.badge}</span><p style="margin-top:.4rem;font-size:.9rem">${m.text}</p></div>`).join('')}</div></section>
<section>${sec(D.triviaTitle)}<div class="g2">${D.trivia.map((t,i)=>`<details class="note rv ${['y','p','b','g'][i%4]}" style="--r:${[-1.5,1.2,-.8,1.8][i%4]}deg;--d:${i*.08}s"><summary>${t.q}</summary><p style="margin-top:.6rem">${t.a}</p></details>`).join('')}</div></section>
<div style="text-align:center;margin-top:1rem"><div class="sign" style="background:linear-gradient(var(--p),#0007),var(--p)">${D.footer[1]}</div><p class="hand" style="color:#fff7dc;text-shadow:2px 2px #0007">${D.footer[2]}<br><small>${D.footer[3]}</small><br>${D.footer[4]}</p></div></main>`);
/* stiker karakter menyebar di tepi papan */
const b=$('#b'),n=X.st.length;
for(let i=0;i<14;i++){const e=document.createElement('span');e.className='sticker';e.textContent=X.st[i%n];const l=i%2?Math.random()*3+.5:Math.random()*3+95;
 e.style.cssText=`left:${l}%;top:${6+i*6.4}%;--sz:${1.6+Math.random()*1.4}rem;--r:${Math.random()*40-20}deg;--sd:${3+Math.random()*3}s;opacity:.85`;b.appendChild(e)}
/* tab */
$('#tabs').onclick=e=>{const t=e.target.closest('button');if(!t)return;$$('#tabs button').forEach(x=>x.classList.toggle('on',x===t));$$('.pan').forEach((p,i)=>{p.classList.toggle('on',i==t.dataset.i);p.classList.add('in')})};
/* galeri kostum */
let k=0;const O=D.outfits;
function show(){const o=O[k],i=$('#oi');i.src=o.img;i.onerror=()=>{i.onerror=null;i.src=fb(o.title)};$('#oc').textContent=o.title;
 $('#od').innerHTML=`<span class="stamp">${o.badge}</span><h3 class="tt" style="margin:.4rem 0">${o.jpTitle}</h3><p class="hand">${o.type} • ${o.rarity}</p><p style="margin:.6rem 0">${o.description}</p>${o.tags.map(t=>`<span class="tag">${t}</span>`).join('')}`;
 const c=$('#od');c.classList.remove('slide');void c.offsetWidth;c.classList.add('slide')}
$('#pv').onclick=()=>{k=(k+O.length-1)%O.length;show()};$('#nx').onclick=()=>{k=(k+1)%O.length;show()};show();
addEventListener('keydown',e=>{if($('.pan.on #pv')){if(e.key==='ArrowLeft')$('#pv').click();if(e.key==='ArrowRight')$('#nx').click()}});
/* vibe siang/malam */
function vibe(){const n=R.dataset.t==='night';$('#vh').textContent=n?'🌙 Vibes Malam':'☀️ Vibes Siang';$('#vp').textContent=n?X.night:X.day}
vibe();new MutationObserver(vibe).observe(R,{attributes:true,attributeFilter:['data-t']});
})();
