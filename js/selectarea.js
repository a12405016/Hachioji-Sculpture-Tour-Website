document.addEventListener('DOMContentLoaded', () => {
    // マップ上のすべてのエリアボタンを取得
    const mapButtons = document.querySelectorAll('.map-area');

    // ポップアップ全体と閉じるボタン
    const areaPopupOverlay = document.getElementById('areaPopupOverlay');
    const closeAreaPopupBtn = document.getElementById('closeAreaPopupBtn');

    // 書き換え先の要素を取得
    const popupTitle = document.getElementById('popupTitle');
    const popupMap = document.getElementById('popupMap');
    const popupLevel = document.getElementById('popupLevel');
    const popupInfo = document.getElementById('popupInfo');
    const popupCount = document.getElementById('popupCount');
    const popupLink = document.getElementById('popupLink');
    const popupStation = document.getElementById('popupStation');

    let currentActiveBtn = null;

    // 各ボタンにクリックイベントを追加
    mapButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // data-title が設定されていないボタン（準備中のエリアなど）は無視する
            if (!btn.dataset.title) return;

            // 1. ボタンに仕込んだデータをポップアップのHTMLに流し込む
            popupTitle.textContent = btn.dataset.title;
            popupMap.src = btn.dataset.map;
            popupLevel.textContent = `難易度：${btn.dataset.level}`;
            popupInfo.textContent = `目安時間 / 距離：${btn.dataset.info}`;
            popupCount.textContent = `彫刻数：${btn.dataset.count}`;
            popupLink.href = btn.dataset.link;
            popupStation.textContent = btn.dataset.station;

            // 2. ポップアップを表示する
            areaPopupOverlay.classList.add('active');

            // 3. 押したボタンをハイライト（緑枠）状態にする
            btn.classList.add('is-active');
            currentActiveBtn = btn;
        });
    });

    // ▼ ポップアップを閉じる処理 ▼
    const closePopup = () => {
        areaPopupOverlay.classList.remove('active');
        if (currentActiveBtn) {
            currentActiveBtn.classList.remove('is-active');
            currentActiveBtn = null;
        }
    };

    if (closeAreaPopupBtn && areaPopupOverlay) {
        closeAreaPopupBtn.addEventListener('click', closePopup);
    }

    if (areaPopupOverlay) {
        areaPopupOverlay.addEventListener('click', (e) => {
            if (e.target === areaPopupOverlay) closePopup();
        });
    }
});