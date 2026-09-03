
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
    } else {
        progressFill.classList.remove("completed");
        if (progressContainer) progressContainer.classList.remove("completed");
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