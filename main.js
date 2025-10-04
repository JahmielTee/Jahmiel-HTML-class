
// main.js - mobile menu and small UX utilities
document.addEventListener('DOMContentLoaded', function(){
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(ham && nav){
    ham.addEventListener('click', ()=> nav.classList.toggle('open'));
  }
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })
});
