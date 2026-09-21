
// sessionStorage から localStorage へ変更
function loadUnlocked() {
    try {
        const res = localStorage.getItem(STORAGE_KEY);
        if (res) return new Set(JSON.parse(res));
    } catch (e) { }
    return new Set();
}

function saveUnlocked(set) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

function openPopup(id) {
    const item = SCULPTURES.find(s => s.id === id);
    if (!item) return;

    // 添付画像のデザインに沿ってデータを挿入
    document.getElementById("popNo").textContent = `No.${item.id}`;
    document.getElementById("popTitle").textContent = item.name;
    document.getElementById("popImg").src = item.image;
    document.getElementById("popArea").textContent = item.area;
    document.getElementById("popAuthor").textContent = item.author;
    document.getElementById("popStory").textContent = item.story;
    document.getElementById("popLink").href = item.link;

    document.getElementById("popupOverlay").classList.add("show");
    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    document.getElementById("popupOverlay").classList.remove("show");
    document.getElementById("popup").classList.remove("show");
}

function renderGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    SCULPTURES.forEach(s => {
        const isUnlocked = unlockedSet.has(s.id);
        const itemDiv = document.createElement("div");

        if (isUnlocked) {
            itemDiv.className = "stamp-item unlocked";
            itemDiv.onclick = () => openPopup(s.id);
            itemDiv.innerHTML = `
                <span class="stamp-no">No.${s.id}</span>
                <img src="${s.image}" class="unlocked-img" alt="${s.name}" onerror="this.style.display='none'">
            `;
        } else {
            itemDiv.className = "stamp-item locked";
            itemDiv.onclick = () => showToast("未解放です！");
            // 鍵アイコンの画像を114px幅で指定
            itemDiv.innerHTML = `
                <span class="stamp-no">No.${s.id}</span>
                <div class="lock-icon">
                    <img src="../images/archive_lockicon.png" style="width: 114px; height: auto;" alt="鍵アイコン">
                </div>
            `;
        }
        grid.appendChild(itemDiv);
    });

    // プログレスバーとカウントの更新
    const count = unlockedSet.size;
    const progressFill = document.getElementById("progressFill");
    const progressContainer = document.querySelector(".progress-bar-container");
    const percentage = (count / TOTAL_ITEMS) * 100;

    document.getElementById("progressCount").textContent = `${count} / ${TOTAL_ITEMS}`;
    progressFill.style.width = `${percentage}%`;

    // 100%達成時に完成クラスを付与/削除
    if (count === TOTAL_ITEMS) {
        progressFill.classList.add("completed");
        if (progressContainer) progressContainer.classList.add("completed");

        // 初回達成時だけ盛大に祝う（再訪問時は静かに輝かせるだけ）
        const celebratedKey = STORAGE_KEY + "-celebrated";
        const isNew = localStorage.getItem(celebratedKey) !== "true";
        if (isNew) localStorage.setItem(celebratedKey, "true");
        celebrateCompletion(isNew);
    } else {
        progressFill.classList.remove("completed");
        if (progressContainer) progressContainer.classList.remove("completed");
        clearCompletionEffect();
    }
}

// 初期化処理
window.addEventListener("DOMContentLoaded", () => {
    unlockedSet = loadUnlocked();
    renderGrid(); // 入力ダイアログが出る前にまずは画面を描画しておく

    // URLからの解放判定
    const urlParams = new URLSearchParams(window.location.search);
    const unlockId = parseInt(urlParams.get('unlock'));

    if (unlockId && !isNaN(unlockId) && unlockId >= 1 && unlockId <= TOTAL_ITEMS) {
        if (!unlockedSet.has(unlockId)) {
            const targetItem = SCULPTURES.find(s => s.id === unlockId);

            // 対象の彫刻データに keyword が設定されているかチェック
            if (targetItem && targetItem.keyword) {
                // パスワード入力ダイアログを表示
                // 少し遅延させることで、画面の描画が完了してからダイアログを出す
                setTimeout(() => {
                    const userInput = window.prompt(`【${targetItem.name}】\n現地にある「ひみつのキーワード」を入力してください：`);

                    if (userInput === targetItem.keyword) {
                        // 正解の場合
                        unlockedSet.add(unlockId);
                        saveUnlocked(unlockedSet);
                        renderGrid(); // 解放状態を画面に即座に反映
                        setTimeout(() => showToast(`${targetItem.name} が解放されました！`), 300);
                    } else if (userInput !== null && userInput !== "") {
                        // 何か入力したが不正解だった場合（キャンセルボタン以外）
                        alert("キーワードが違います。現地で確認してもう一度お試しください。");
                    }
                }, 100);
            } else {
                // キーワード設定がない作品はそのまま解放（テスト用など）
                unlockedSet.add(unlockId);
                saveUnlocked(unlockedSet);
                renderGrid();
                setTimeout(() => showToast("解放されました！"), 500);
            }
        } else {
            // 既に解放済みの場合は通知
            setTimeout(() => showToast("この彫刻は既に解放されています。"), 500);
        }

        // 処理後にURLパラメータを消去（リロードによる再判定・再入力を防ぐ）
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});



/* =========================================================
    コンプリート演出
========================================================= */
(function () {
    // --- 演出用CSSを<head>に注入 ---
    const style = document.createElement("style");
    style.textContent = `
    /* 紙吹雪のキャンバス */
    #confettiCanvas {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2000;
    }

    /* 達成オーバーレイ */
    .complete-overlay {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.65);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
        z-index: 2001;
        padding: 20px;
    }
    .complete-overlay.show {
        opacity: 1;
        pointer-events: auto;
    }

    /* 認定証カード */
    .complete-card {
        position: relative;
        width: min(100%, 340px);
        padding: 36px 26px 28px;
        text-align: center;
        background: #fffdf7;
        border: 2px solid #0D8B80;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        transform: scale(0.8) translateY(20px);
        opacity: 0;
        transition: transform 0.5s cubic-bezier(0.2, 1.2, 0.35, 1), opacity 0.4s ease;
    }
    .complete-overlay.show .complete-card {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
    /* カードの内側にもう一本の細い罫線（賞状風） */
    .complete-card::before {
        content: "";
        position: absolute;
        inset: 8px;
        border: 1px solid rgba(13, 139, 128, 0.4);
        border-radius: 10px;
        pointer-events: none;
    }

    /* 「COMPLETE」の印章 */
    .complete-seal {
        width: 104px;
        height: 104px;
        margin: 0 auto 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: linear-gradient(135deg, #0D8B80, #14a99c);
        color: #fff;
        box-shadow: 0 0 0 4px #fffdf7, 0 0 0 6px #0D8B80, 0 6px 16px rgba(0,0,0,.25);
        animation: sealPop 0.7s cubic-bezier(0.2, 1.5, 0.4, 1) 0.25s backwards;
    }
    .complete-seal .seal-main {
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 0.04em;
        line-height: 1;
    }
    .complete-seal .seal-sub {
        margin-top: 6px;
        font-size: 26px;
        font-weight: bold;
        line-height: 1;
    }
    @keyframes sealPop {
        0%   { transform: scale(0) rotate(-45deg); opacity: 0; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }

    .complete-card h3 {
        font-family: serif;
        font-size: 21px;
        font-weight: bold;
        letter-spacing: 0.06em;
        color: #111;
        margin-bottom: 10px;
    }
    .complete-area {
        display: inline-block;
        padding: 5px 16px;
        margin-bottom: 16px;
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        background: #0D8B80;
        border-radius: 999px;
    }
    .complete-desc {
        font-size: 13px;
        line-height: 1.8;
        color: #333;
        margin-bottom: 22px;
    }
    .complete-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 13px 16px;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        background: #0D8B80;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: transform 0.1s ease, background-color 0.2s ease;
    }
    .complete-btn:hover { background: #0b7a70; }
    .complete-btn:active { transform: translateY(2px); }

    /* コンプリート後、グリッド全体をほんのり輝かせる */
    .stamp-grid.all-cleared .stamp-item.unlocked {
        box-shadow: 0 0 0 2px #0D8B80, 2px 2px 8px rgba(13, 139, 128, 0.45);
    }

    @media (prefers-reduced-motion: reduce) {
        .complete-card, .complete-seal { animation: none; transition: opacity .3s ease; }
    }
    `;
    document.head.appendChild(style);

    // --- 紙吹雪 ---
    function launchConfetti(duration = 3500) {
        const canvas = document.createElement("canvas");
        canvas.id = "confettiCanvas";
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        function resize() {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();
        window.addEventListener("resize", resize);

        const colors = ["#0D8B80", "#14a99c", "#ffd700", "#ffffff", "#e99a25"];
        const W = window.innerWidth;
        const pieces = [];

        for (let i = 0; i < 140; i++) {
            pieces.push({
                x: Math.random() * W,
                y: Math.random() * -window.innerHeight,
                w: 6 + Math.random() * 6,
                h: 8 + Math.random() * 8,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: 1.5 + Math.random() * 3,
                drift: -1 + Math.random() * 2,
                rot: Math.random() * Math.PI * 2,
                rotSpeed: -0.1 + Math.random() * 0.2
            });
        }

        const start = performance.now();

        function frame(now) {
            const elapsed = now - start;
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // 終盤はフェードアウト
            const fade = elapsed > duration - 800
                ? Math.max(0, (duration - elapsed) / 800)
                : 1;
            ctx.globalAlpha = fade;

            pieces.forEach(p => {
                p.y += p.speed;
                p.x += p.drift;
                p.rot += p.rotSpeed;

                // 画面下に消えたら上から再投入（演出中のみ）
                if (p.y > window.innerHeight + 20 && elapsed < duration - 1200) {
                    p.y = -20;
                    p.x = Math.random() * window.innerWidth;
                }

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });

            if (elapsed < duration) {
                requestAnimationFrame(frame);
            } else {
                window.removeEventListener("resize", resize);
                canvas.remove();
            }
        }
        requestAnimationFrame(frame);
    }

    // --- 達成オーバーレイの表示 ---
    function showCompleteOverlay() {
        // 既に出ている場合は二重表示しない
        if (document.querySelector(".complete-overlay")) return;

        // エリア名はバナーから自動取得
        const banner = document.querySelector(".area-banner");
        const areaName = banner ? banner.textContent.trim() : "このエリア";

        const overlay = document.createElement("div");
        overlay.className = "complete-overlay";
        overlay.innerHTML = `
            <div class="complete-card">
                <div class="complete-seal">
                    <span class="seal-main">COMPLETE</span>
                    <span class="seal-sub">${TOTAL_ITEMS}/${TOTAL_ITEMS}</span>
                </div>
                <h3>コンプリート！</h3>
                <div class="complete-area">${areaName}</div>
                <p class="complete-desc">
                    このエリアの彫刻をすべて巡りました。<br>
                    捌王子の記憶が、すべて解放されました。
                </p>
                <button type="button" class="complete-btn">記録を見る</button>
            </div>
        `;
        document.body.appendChild(overlay);

        function close() {
            overlay.classList.remove("show");
            setTimeout(() => overlay.remove(), 500);
        }
        overlay.querySelector(".complete-btn").addEventListener("click", close);
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) close();
        });

        // 次のフレームでshowを付けてアニメーションさせる
        requestAnimationFrame(() => {
            requestAnimationFrame(() => overlay.classList.add("show"));
        });
    }

    // --- 外部から呼び出す関数 ---
    // isNew: 今まさに達成した瞬間なら true（再訪問時は静かに輝かせるだけ）
    window.celebrateCompletion = function (isNew) {
        const grid = document.getElementById("grid");
        if (grid) grid.classList.add("all-cleared");

        if (!isNew) return;

        launchConfetti();
        setTimeout(showCompleteOverlay, 600);
    };

    window.clearCompletionEffect = function () {
        const grid = document.getElementById("grid");
        if (grid) grid.classList.remove("all-cleared");
    };
})();