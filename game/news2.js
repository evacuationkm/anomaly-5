// Функция запуска второй новости
window.startNews2 = function() {
  var overlay = document.getElementById('videoOverlay2');
  if (!overlay) { console.warn('Оверлей не найден'); return; }
  overlay.style.display = 'flex';
  
  var v = document.getElementById('newsVideo2');
  var a = document.getElementById('newsAudio2');
  var t = document.getElementById('news2Text');
  
  if (v) { v.currentTime = 0; v.play().catch(function(e){console.warn(e);}); }
  if (a) { a.currentTime = 0; a.volume = 0.6; a.play().catch(function(e){console.warn(e);}); }
  
  var text = 'ВНИМАНИЕ. Мы прерываем вещание для экстренного сообщения. Поступают тревожные кадры из района трамвайного депо. По словам очевидцев, неизвестный, чьё тело полностью покрыто красной субстанцией, совершил нападение на граждан. Есть погибшие и раненые. Время инцидента совпадает с моментом провала в памяти местного жителя Сергея. Связь между этими событиями пока не установлена. Рядом с путями рухнул бетонный столб. Трамвай заблокирован. Слышны крики.';
  
  t.textContent = '';
  var i = 0;
  function type() { if(i < text.length) { t.textContent += text.charAt(i); i++; setTimeout(type, 35); } }
  setTimeout(type, 500);
  
  document.getElementById('skipVideoBtn2').onclick = function() {
    overlay.style.display = 'none';
    if(v) v.pause();
    if(a) a.pause();
    if(typeof gameState !== 'undefined') gameState = 1;
    if(typeof flags !== 'undefined') flags.heardNews2 = true;
  };
};


// Автозапуск удален (перенесен в сюжет)
