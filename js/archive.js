// ページが開かれたら解放フラグを保存
localStorage.setItem('hachiojiStationUnlocked', 'true');
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
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "しょうぐん"
    },
    {
        id: 2,
        name: "若き日の母",
        image: "../images/archive-hachiojistation/2Mother in Her Youth.png",
        area: "八王子駅エリア",
        author: "北村 西望",
        story: "時が生まれ、生命が自ら命を育むようになると、さらに、その数を増やしていきました。すると文化は広がって成長し、やがて”文明”へと進化します。自然と木でつくられていた集落は、石で建てられた古代の都市へと変化し、その生産性も上昇します。また、八王子からきた八人が統治していたことから、捌王子には日本の文化が流入し、人々が工夫して工業を生み出していったころには、”キモノ”という衣服が広がっていったそうです。こうした日本の影響を受けたものが、捌王子には多くあります。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "はは"
    },
    // 必要に応じてNo.3以降のデータを追加してください
    {
        id: 3,
        name: "立つ女",
        image: "../images/archive-hachiojistation/3Standing Woman.png",
        area: "八王子駅エリア",
        author: "黒田 嘉治",
        story: "捌王子にて、最初に生まれた女性を模った彫刻です。自身以外に生命が生まれておらず、ただ砂漠ばかりが広がる捌王子で、その人は、世界の生みの親である神々に命の誕生を祈りました。するとたちまち地面を草が覆い、彼女の近くには3本の木が育ったといいます。これが、捌王子の生命誕生の伝説です。では、生命が誕生するよりも前、捌王子の神々はどのようにしてその世界を創造したのでしょうか？",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "たちまち"
    },
    {
        id: 4,
        name: "風拓No.3",
        image: "../images/archive-hachiojistation/4Fuutaku.png",
        area: "八王子駅エリア",
        author: "大成 浩",
        story: "捌王子を最初に創造したのは、八人の息子の父の神様です。真っ白で何もない空間に神様が一番最初に作ったのは、風でした。一つの輪っかを手にした神様は、その中に息を吹き込んで風をつくりました。風が吹くことで、捌王子には“大気“がうまれ、万物の源となったのです。一番力強く吹いた風が今では、石のように固くなって残っています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "ふう"
    },
    {
        id: 5,
        name: "箱の中",
        image: "../images/archive-hachiojistation/5Inside the Box.png",
        area: "八王子駅エリア",
        author: "増田 正和",
        story: "八王子駅は、捌王子では、神様の宮殿が立っていました。そんな、神様のお膝元の創造を任されたのは八人の兄弟の長男でした。そんな長男のために神様は仕事の助けになる特別な道具の入った箱を渡したのです。しかし長男は空から誤って箱を落としてしまいました。道の真ん中に落ちたその箱を神様からの賜り物だと勘違いした人々はその箱を祀り始めました。その様子を見た長男は捌王子の人々をまとめ上げるのにちょうど良いと考え、その場所に箱を置いておくことにしたのです。箱の中身を知ろうにも、重すぎて我々に開けることはできません。その中身は想像するしかないようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "はこ"
    },
    {
        id: 6,
        name: "空間の面",
        image: "../images/archive-hachiojistation/6Surface of Space.png",
        area: "八王子駅エリア",
        author: "秋山 礼巳",
        story: "神様はかつて、我々の世界の八王子の人を何人か、自分の世界に招いたことがありました。その際に使われたのがこの作品だと言われています。この輪を通ると捌王子の民はみんな、神様が直々に招待したお客だと言って大変歓迎されたそうです。その際、次男、三男、四男の木が立つ広場が宴会場となったそうな。しかし、今では向こうの状況もわかりません。昔とは人々も全く異なり、我々がどのような扱いを受けるのかも検討がつきません。二つの世界のつながりが少ないとはいえ、潜るのを非常に無謀な行為です。もしかしたら、危険目に遭うかも……今、何かしようとしていました？",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "くうかん"
    },
    {
        id: 7,
        name: "ひざし",
        image: "../images/archive-hachiojistation/7Sunlight.png",
        area: "八王子駅エリア",
        author: "高橋 洋",
        story: "しかし、捌王子に行きたくなくても、突然放り込まれてしまった人もいます。この少女の彫刻は、ある捌王子の彫刻家の、自身の体験をもとに造られました。彫刻家が家を出た時、家の向かい側に聳える丘のてっぺんの木下に何やら見慣れ服をきた少女が見えました。驚いて近づいていくと、なんとそれは、我々の世界のベンチや、人形と一緒に捌王子に飛ばされた少女だったのです。しばらくの間、2人は暮らしました。お気に入りの公園のベンチを家の前の木の下へ動かし、毎日そのベンチに腰かけて話したり、歌ったり、遊んだりしました。この作品は、その彫刻家が神様の計らいで元の世界へ帰った少女を思い出しながら作られた物です。ベンチには、誰かが腰掛けていた跡が残っています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "ひざし"
    },
    {
        id: 8,
        name: "自然と時",
        image: "../images/archive-hachiojistation/8Nature and Time.png",
        area: "八王子駅エリア",
        author: "ヤネツ・レナーシィ（JANEZ LENASSI）",
        story: "時は創世期0年に戻ります。捌王子に大気が生まれて間も無く、神様はその空間に水がないことに気が付きます。水大気に並ぶほど生命にとって大切で、その地で生命が生まれ、育つかどうかは、水の良し悪しと量によって決まると言っても過言ではないのです。そこで神様は、多摩川に倣って、大きな川を作って人々に与えました。そうした限られた水を工夫して無駄なく使うことで、捌王子の人々は頭を使い文明を発展させることを覚えたのです。この経験から捌王子では、水を万物の根源として、重要視しています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "しき"
    },
    {
        id: 9,
        name: "友の顔（達々）1.",
        image: "../images/archive-hachiojistation/9A Friend's Face1.png",
        area: "八王子駅エリア",
        author: "酒井 良",
        story: "捌王子での神様の仕事は、もうすぐ終わろうとしていました。大気を産み、大地をつくり、生命を芽吹かせた神ですが、もはや捌王子の民たちは、自らの手で生み出せるようになったのです。時を発見し、都市を生み出し、物語までも作って見せたのですから。しかし、自分たちを作った神への敬いを彼らは忘れません。彼らは神様の胸像をつくりだそうとしました。ですが、実際に神様の顔を見た人は限られていたので、出来上がったそれは本当の神様の顔を示すものではありませんでした。しかしそれを見ることで、彼らは外面以上に神様の神秘に触れようとしたのです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "とも"
    },
    {
        id: 10,
        name: "和の角笛",
        image: "../images/archive-hachiojistation/10Japanese Horn.png",
        area: "八王子駅エリア",
        author: "井上 久照",
        story: "ある日、神様が地上に降り立ち角笛を吹きます。そして、捌王子の人々に向けて言いました。「捌王子は十分に発展した。これからはあなたたち自身が捌王子を作る時代です。我々は去るが、いつまでもこの世界の行く末を見守っています。」この角笛は、創世の終焉と、新たな時代の幕開けの合図でもありました。世界が人々の手に渡ると、捌王子はさらに急速に発展していくことになります。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "わ"
    },
    {
        id: 11,
        name: "四つの形",
        image: "../images/archive-hachiojistation/11Four Forms.png",
        area: "八王子駅エリア",
        author: "渡辺 隆根",
        story: "other file.1　神が捌王子の大地を創造する様子が彫刻された作品です。八王子をもとにつくられた捌王子にも、多くの山や丘が創られており、まず、平野のような平たい地面を用意した神は、そこから、盛りあげるようにして山を作ったと言い伝えられています。この彫刻の作者は、彫る、という行為とは対照的なこの天地創造の場面を再現するために、実際に神のもとに石板を持っていき、同じく石を盛りあげてもらおうとしたようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000016.html",
        keyword: "よん"
    }
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

// 解放済みの彫刻IDを保存するためのキー
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
    （CSSもこの中で注入するので、archive.cssの編集は不要です）
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
        width: 90px;
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
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 0.12em;
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