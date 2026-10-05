const projects=[{"title": "Nuova vita agli esterni", "meta": "ESTERNI · FACCIATE E SUPERFICI", "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85", "alt": "Casa contemporanea con giardino e ampie vetrate", "description": "Esempio illustrativo di ristrutturazione esterna: ripristino delle superfici, finiture di facciata e cura degli spazi di accesso. La foto mostra un riferimento estetico, non un intervento documentato. Nel sito definitivo questa scheda ospiterà fotografie reali, luogo, anno, lavorazioni e descrizione dell’intervento."}, {"title": "Spazi da vivere, ogni giorno", "meta": "INTERNI · RISTRUTTURAZIONE", "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85", "alt": "Soggiorno luminoso con arredi e finiture neutre", "description": "Esempio di ristrutturazione completa di un appartamento, dalla distribuzione interna alle finiture. Immagine illustrativa: sostituire con foto dell’intervento e informazioni verificate."}, {"title": "Interni da riscoprire", "meta": "INTERNI · FINITURE E AMBIENTI", "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", "alt": "Ambiente residenziale contemporaneo con grandi aperture", "description": "Esempio di rinnovo degli ambienti interni, con pavimenti, rivestimenti e finiture coordinati. La fotografia è un riferimento visivo e non documenta un lavoro dell’impresa."}];

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
const mq=window.matchMedia('(max-width:760px)');
function closeMenu(){nav.hidden=mq.matches;toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}
closeMenu();mq.addEventListener('change',closeMenu);
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';nav.hidden=open;toggle.setAttribute('aria-expanded',String(!open));toggle.textContent=open?'Menu':'Chiudi';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mq.matches&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{const p=projects[Number(b.dataset.project)];dialog.querySelector('img').src=p.image;dialog.querySelector('img').alt=p.alt;dialog.querySelector('h2').textContent=p.title;dialog.querySelector('.dialog-meta').textContent=p.meta+' · Progetto dimostrativo';dialog.querySelector('.dialog-description').textContent=p.description;dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('.form-status');status.textContent='Questa è una bozza dimostrativa: la richiesta non è stata inviata e i dati non sono stati salvati. Nel sito definitivo collegheremo il modulo al recapito dell’impresa.';status.focus();});

document.querySelector(".menu-toggle").hidden=false;
