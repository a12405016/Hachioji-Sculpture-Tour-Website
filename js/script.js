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

const loadingScreen = document.getElementById('loading-screen');
if (loadingScreen) {
    // スキップ共通処理
    const skipLoading = () => {
        if (!loadingScreen.classList.contains('is-hidden')) {
            loadingScreen.classList.add('is-hidden');
            document.body.classList.remove('is-loading'); // スクロールロック解除
            sessionStorage.setItem('sculptureLoadingShown', 'true'); // フラグ保持
        }
    };

    // 画面タップ・クリックで即座にスキップ
    loadingScreen.addEventListener('click', skipLoading);
}


document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
        1. ハンバーガーメニューのスクロール表示・開閉ロジック
    ========================================================= */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        // スクロールしてアイコンを表示する処理
        const showHamburgerOnScroll = () => {
            if (window.scrollY > 50) {
                hamburger.classList.add('is-visible');
                window.removeEventListener('scroll', showHamburgerOnScroll);
            }
        };

        window.addEventListener('scroll', showHamburgerOnScroll);
        showHamburgerOnScroll(); // ページ読み込み時に既にスクロールされていた場合の対処

        // ボタンクリックでクラスをつけ外しする
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // リンクをクリックしたらメニューを閉じる
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* =========================================================
        2. マップ画像ポップアップ（モーダル）ロジック
    ========================================================= */
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.querySelector('.modal-close');
    const mapImages = document.querySelectorAll('.map-zoom-img');

    if (modal && modalImg) {
        mapImages.forEach(img => {
            img.addEventListener('click', () => {
                modal.classList.add('show');
                modalImg.src = img.src;
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.remove('show');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    /* =========================================================
        3. アーカイブエリアの解放状態チェック・クリック判定
    ========================================================= */
    const toast = document.getElementById('toast');
    let toastTimer = null;

    // トースト通知を表示する関数
    const showToast = (msg) => {
        if (!toast) return;
        if (toastTimer) clearTimeout(toastTimer);
        toast.innerText = msg;
        toast.classList.add('show');
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
    };

    // 各エリアの設定（今後エリアが増えたらここに追加するだけでOKです）
    const archiveAreas = [
        {
            id: 'card-hachioji',
            storageKey: 'hachiojiStationUnlocked',
            url: 'html/archive_hachiojistation.html'
        },
        {
            id: 'card-katakura',
            storageKey: 'katakuraUnlocked',
            url: 'html/archive_katakura.html'
        }
    ];

    // まず、各エリアが解放されているかチェックして設定を反映する
    archiveAreas.forEach(area => {
        const card = document.getElementById(area.id);
        if (card) {
            const isUnlocked = localStorage.getItem(area.storageKey) === 'true';

            if (isUnlocked) {
                // 解放済みの場合は disabled を外し、リンクとして機能させる
                card.classList.remove('disabled');
                card.classList.add('active');
                card.style.cursor = 'pointer';
                card.addEventListener('click', () => {
                    window.location.href = area.url;
                });
            }
        }
    });

    // 次に、未解放（まだ disabled クラスがついている）カードにだけトースト設定をする
    const disabledCards = document.querySelectorAll('.archive-card.disabled');
    disabledCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('未解放エリアです！');
        });
    });

});