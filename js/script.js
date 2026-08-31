document.addEventListener('DOMContentLoaded', () => {
    const disabledCards = document.querySelectorAll('.archive-card.disabled');
    const toast = document.getElementById('toast');
    let toastTimer = null;

    disabledCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();

            // 連打された場合にタイマーをリセット
            if (toastTimer) clearTimeout(toastTimer);

            // トーストを表示
            toast.classList.add('show');

            // 2.5秒後に自動で隠す
            toastTimer = setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        });
    });
});

/* =========================================================
    Loading Screen
    ・タブを閉じるまで1回だけ表示（sessionStorageで判定）
========================================================= */
(function () {
    const loadingScreen = document.getElementById('loading-screen');
    const bar = document.getElementById('loadingBar');
    const percentText = document.getElementById('loadingPercent');
    if (!loadingScreen || !bar || !percentText) return;

    const STORAGE_KEY = 'sculptureLoadingShown';

    // すでにこのタブ内で表示済みなら、アニメーションせず何もしない
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
        return;
    }

    const DURATION = 2000; // 2秒で0→100%
    document.body.classList.add('is-loading');

    const startTime = performance.now();

    function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        const percent = Math.floor(progress * 100);

        bar.style.width = percent + '%';
        percentText.innerHTML = percent + '<span>%</span>';

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            sessionStorage.setItem(STORAGE_KEY, 'true');

            setTimeout(() => {
                loadingScreen.classList.add('is-hidden');
                document.body.classList.remove('is-loading');
                setTimeout(() => loadingScreen.remove(), 700);
            }, 200);
        }
    }
    requestAnimationFrame(tick);
})();