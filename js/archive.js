// 彫刻データ
const TOTAL_ITEMS = 11;
const SCULPTURES = [
    {
        id: 1,
        name: "将軍の孫",
        image: "../images/archive-hachiojistation/1Grandchild of the Shogun.png", // "  1Grandchild of the Shogun.png",
        area: "八王子駅エリア",
        author: "北村 西望",
        story: "捌王子の童謡に登場する少年の彫刻です。物語も、日本のものに影響を受けていると言われています。捌王子に生まれた少年が、不作となった捌王子を救うために王子から名を受け、山を登り、太陽には頼み大地を温めてもらい、雲には雨を降らせてもらって、捌王子を救うという物語だそうです。当時捌王子は豊かだった故に不安が広がり、このような物語が生まれたのでしょう。どんな物語がもとになったのか考えてみてもいいかもしれません。少年のモデルは、八人の王子の一人の、捌王子での孫で、着ているのはこちらに来た時にその王子が身に着けていたものだといいます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html"
    },
    {
        id: 2,
        name: "若き日の母",
        image: "../images/archive-hachiojistation/2Mother in Her Youth.png",
        area: "八王子駅エリア",
        author: "北村 西望",
        story: "時が生まれ、生命が自ら命を育むようになると、さらに、その数を増やしていきました。すると文化は広がって成長し、やがて”文明”へと進化します。自然と木でつくられていた集落は、石で建てられた古代の都市へと変化し、その生産性も上昇します。また、八王子からきた八人が統治していたことから、捌王子には日本の文化が流入し、人々が工夫して工業を生み出していったころには、”キモノ”という衣服が広がっていったそうです。こうした日本の影響を受けたものが、捌王子には多くあります。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html"
    }
    // 必要に応じてNo.3以降のデータを追加してください
];

// 足りないデータを自動補完（テスト用）
for (let i = SCULPTURES.length + 1; i <= TOTAL_ITEMS; i++) {
    SCULPTURES.push({
        id: i,
        name: `作品 No.${i}`,
        image: "",
        area: "八王子駅エリア",
        author: "不明",
        story: "この彫刻に関する架空のストーリーです。",
        link: "#"
    });
}

const STORAGE_KEY = "hachioji-unlocked-area1";
let unlockedSet = new Set();

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
    document.getElementById("progressCount").textContent = `${count} / ${TOTAL_ITEMS}`;
    document.getElementById("progressFill").style.width = `${(count / TOTAL_ITEMS) * 100}%`;
}

// 初期化処理
window.addEventListener("DOMContentLoaded", () => {
    unlockedSet = loadUnlocked();

    // URLからの解放判定
    const urlParams = new URLSearchParams(window.location.search);
    const unlockId = parseInt(urlParams.get('unlock'));

    if (unlockId && !isNaN(unlockId) && unlockId >= 1 && unlockId <= TOTAL_ITEMS) {
        if (!unlockedSet.has(unlockId)) {
            unlockedSet.add(unlockId);
            saveUnlocked(unlockedSet);
            // 読み込み直後にトーストを表示
            setTimeout(() => showToast("解放されました！"), 500);
        }
        // URLをクリーンアップ
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    renderGrid();
});