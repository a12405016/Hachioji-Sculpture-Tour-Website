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

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
        1. ハンバーガーメニューのスクロール表示・開閉ロジック
    ========================================================= */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {

        // 【追加】スクロールしてアイコンを表示する処理
        const showHamburgerOnScroll = () => {
            // 例: 50px以上スクロールしたら表示
            if (window.scrollY > 50) {
                hamburger.classList.add('is-visible');
                // 一度表示されたら監視を終了する（リロードまで表示されたまま）
                window.removeEventListener('scroll', showHamburgerOnScroll);
            }
        };

        // スクロールイベントを監視
        window.addEventListener('scroll', showHamburgerOnScroll);

        // ページ読み込み時に既にスクロールされていた場合の対処
        showHamburgerOnScroll();


        // 既存：ボタンクリックでクラスをつけ外しする
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // 既存：リンクをクリックしたらメニューを閉じる
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* =========================================================
        マップ画像ポップアップ（モーダル）ロジック
    ========================================================= */
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.querySelector('.modal-close');

    // HTMLでマップ画像に class="map-zoom-img" を付けた想定
    const mapImages = document.querySelectorAll('.map-zoom-img');

    if (modal && modalImg) {
        // 画像をクリックしたらモーダルを表示
        mapImages.forEach(img => {
            img.addEventListener('click', () => {
                modal.classList.add('show');
                modalImg.src = img.src; // クリックした画像のパスをモーダルに渡す
            });
        });

        // ×ボタンで閉じる
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.remove('show');
            });
        }

        // モーダルの背景（黒い部分）をクリックしても閉じる
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});