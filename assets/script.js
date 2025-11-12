// Small interactions: year injection and mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;

  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(!expanded){
        nav.setAttribute('aria-hidden','false');
        nav.style.display = 'block';
      } else {
        nav.setAttribute('aria-hidden','true');
        nav.style.display = '';
      }
    });
  }
});
