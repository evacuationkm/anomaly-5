// === ВИДЕО НА ОКНЕ ===
window.initWindowVideo = function() {
    if (!window.worldGroup) return;
    
    let vid = document.getElementById('bgWindowVideo');
    if (!vid) {
        vid = document.createElement('video');
        vid.id = 'bgWindowVideo';
        vid.src = '../wind1.mp4';
        vid.loop = true;
        vid.muted = true;
        vid.playsInline = true;
        vid.style.display = 'none';
        document.body.appendChild(vid);
    }

    const videoTexture = new THREE.VideoTexture(vid);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    // Ищем окно по размеру 2.6 x 1.6
    let found = false;
    window.worldGroup.traverse(function(child) {
        if (child.isMesh && child.geometry && child.geometry.parameters) {
            const p = child.geometry.parameters;
            if (Math.abs(p.width - 2.6) < 0.1 && Math.abs(p.height - 1.6) < 0.1) {
                child.material.map = videoTexture;
                child.material.needsUpdate = true;
                found = true;
                console.log("[window] Видео натянуто на окно!");
            }
        }
    });

    if (!found) console.warn("[window] Окно не найдено в сцене!");

    // Запуск видео
    const playVid = () => {
        if (vid.paused) vid.play().catch(e => console.warn("[window] Autoplay:", e));
    };
    playVid();
    document.body.addEventListener('click', playVid, { once: true });
};

// Ждем, пока игра загрузит мир, и применяем
setTimeout(window.initWindowVideo, 2000);
