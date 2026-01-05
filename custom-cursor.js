
(function(){
  // Enable only for devices with a fine pointer (desktop/laptop)
  if(!window.matchMedia || !window.matchMedia('(pointer:fine)').matches) return;

  document.documentElement.classList.add('cursor-enabled');

  var cursor = document.createElement('div');
  cursor.className = 'site-cursor';
  document.body.appendChild(cursor);

  var mouseX = 0, mouseY = 0, curX = 0, curY = 0;
  var visible = true;

  // Keep list of hoverable selectors lean and project-friendly
  var hoverSelector = 'a, button, [role="button"], input, textarea, select, summary, .week-tab, .photo-item';
  function refreshHoverables(){
    document.querySelectorAll(hoverSelector).forEach(function(el){
      el.addEventListener('mouseenter', function(){ cursor.classList.add('hover'); }, {passive:true});
      el.addEventListener('mouseleave', function(){ cursor.classList.remove('hover'); }, {passive:true});
    });
  }

  function setPos(x, y){
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  }

  document.addEventListener('mousemove', function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;

    // trail (throttled)
    var now = Date.now();
    if(!setPos._t || now - setPos._t > 32){
      setPos._t = now;
      var t = document.createElement('div');
      t.className = 'cursor-trail';
      t.style.left = mouseX + 'px';
      t.style.top = mouseY + 'px';
      document.body.appendChild(t);
      setTimeout(function(){ t.remove(); }, 600);
    }
  }, {passive:true});

  function animate(){
    curX += (mouseX - curX) * 0.18;
    curY += (mouseY - curY) * 0.18;
    setPos(curX, curY);
    requestAnimationFrame(animate);
  }
  animate();

  document.addEventListener('mouseleave', function(){
    visible = false;
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function(){
    if(!visible){
      visible = true;
      cursor.style.opacity = '1';
    }
  });

  window.addEventListener('DOMContentLoaded', refreshHoverables);
})();
