// 解放済みの彫刻IDを保存するためのキー
const STORAGE_KEY = "hachiojisiyakusyo-unlocked-area";
let unlockedSet = new Set();

// ページが開かれたら解放フラグを保存
localStorage.setItem("hachiojisiyakusyoUnlocked", "true");

// 彫刻データ
const TOTAL_ITEMS = 14;

const SCULPTURES = [
    {
        id: 1,
        name: "海の鳥と少年",
        audio: "../narration/hachioji_siyakusyo/file_32.mp3",
        image: "../images/archive-hachiojishiyakusyo/20. Sea Bird and Boy.png",
        area: "八王子市役所エリア",
        author: "淀井 敏夫",
        story: "捌王子file.32　捌王子が統一されて、しばらく時が経ちます。捌王子は神様によって創られた、周囲が海に囲まれている島国で、その海の向こう側には大陸はないと考えられていました。ある日、海沿いに家族で住んでいる少年が、海の遠い向こう側から鳥が飛んでくるのを見つけて駆け寄ります。向こう側には何もないはずなのに、いったいこの鳥は、どこからやって来たのでしょうか。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "とり"
    },
    {
        id: 2,
        name: "平和な朝",
        audio: "../narration/hachioji_siyakusyo/file_33_change.mp3",
        image: "../images/archive-hachiojishiyakusyo/19. Peaceful Morning.png",
        area: "八王子市役所エリア",
        author: "圓鍔 勝三",
        story: "捌王子file.33　統一されてからの捌王子はしばらく、とても平和でした。王政になってからは、王を選挙で決ていました。どんな人々にも、選挙に参加する権利が与えられたため、有能な王が統治する国がしばらく続いていたのです。平和な世の中を願いながら朝を迎える様子を刻んだこの彫刻は、国民の幸福度としては全盛の時代の捌王子を示すのに、十分なものとなっています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "あさ"
    },
    {
        id: 3,
        name: "鶴舞",
        audio: "../narration/hachioji_siyakusyo/file_34.mp3",
        image: "../images/archive-hachiojishiyakusyo/28. Crane Dance.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.34　行方不明になっていたある漁師が、なにやらボロボロになって発見されます。彼は語り始めました。ある日、船が大波に流されて、彼は漂流してしまいました。そしてそれから、こことは違う別の場所の少女に助けられたと言うのです。漁師は、海沿いに家族で住まう、その少女に尋ねました。「君たちはいったい何者なのだ」すると、海の向こう側からやって来た鳥と、戯れながら少女は答えます。「私たちはハシモトの民です」これが、ハシモト大陸が発見された日です。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "つる"
    },
    {
        id: 4,
        name: "夕やけ小やけ",
        audio: "../narration/hachioji_siyakusyo/file_35.mp3",
        image: "../images/archive-hachiojishiyakusyo/27. Sunset.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.35　ある夕やけの日、捌王子から船が出発します。それを見つめる二人は、船の乗組員の子供たちです。捌王子では、ハシモト大陸の調査隊が編成され、航海が始まります。冒険の時代の幕開けです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ゆうやけ"
    },
    {
        id: 5,
        name: "桑の都",
        audio: "../narration/hachioji_siyakusyo/file_36.mp3",
        image: "../images/archive-hachiojishiyakusyo/25. City of Mulberry.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.36　ハシモト大陸への長い長い船旅を経て、ハシモト調査隊は、ついに新大陸へと足を踏み入れました。すると、異変を感じて様子を確認しようと、一人の籠を持った女性がハシモト大陸から海沿いへやって来ました。乗組員たちは、どうにか自分達の立場を伝えようと、身振り手振りをしましたが、どうやら、ハシモト大陸の人々は、捌王子と同じ言語を扱うようです。彼女は交流のために手に持った籠のなかを乗組員たちに見せます。なんと、その中には、とても品質の良い蚕の糸が入っていたのです。捌王子でも、我々の世界の、織物の文化的影響から養蚕を行っていましたが、これほど良いものは捌王子にはありませんでした。捌王子が、織物の国『桑都』として呼ばれるのも、遠くない未来かも知れません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "くわ"
    },
    {
        id: 6,
        name: "八王子",
        audio: "../narration/hachioji_siyakusyo/file_37.mp3",
        image: "../images/archive-hachiojishiyakusyo/21. Hachioji.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.37　ハシモト大陸との貿易が始まりました。ハシモトは品質のよい蚕の糸を捌王子へ輸出。捌王子は輸入した糸と、その技術力を用いてとてもよい織物を生産し、ハシモトへ輸出しました。国際的な分業と、健全な貿易を通して、両者の関係はいい方向へと発展していきます。その関係を記念してハシモト側が捌王子へと送ったのが、当時捌王子に存在していた捌王院の執政官八人をかたどった彫刻です。神様が残した八人の王子という背景もとてもよく反映されており、お互いの文化的理解も、相当なものだったと感じ取れます。西捌王子一帯には、同じ彫刻家により寄贈されたものが、他にも多く残されています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "おうじ"
    },
    {
        id: 7,
        name: "由比の牧",
        audio: "../narration/hachioji_siyakusyo/file_38.mp3",
        image: "../images/archive-hachiojishiyakusyo/22. Pasture of Yui.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.38　ハシモトからの恩恵を受けたものが、捌王子には他にもあります。それが『馬』です。ハシモトとの貿易が始まる前の捌王子には、馬が生息していませんでした。ハシモトの大陸から貿易で得た馬は、捌王子で大変活躍します。馬の登場によって捌王子内での輸送や移動、さらに情報のやり取りが加速します。これによりもともと早かった文化の成長がさらに加速していきました。この彫刻は、当時捌王子で作られた馬の牧場にあったものです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ゆい"
    },
    {
        id: 8,
        name: "松姫",
        audio: "../narration/hachioji_siyakusyo/file_39.mp3",
        image: "../images/archive-hachiojishiyakusyo/23. Princess Matsu.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "捌王子file.39　この彫刻は、ハシモトの王の息女で、捌王院に所属する一人の執政官に嫁ぐために、捌王子に渡りました。互いの関係をより深めるためです。そんな中、嫁ぎ先の執政官が、不慮の事故により亡くなります。すると、その娘にたいするよからぬ噂が広がりました。こうした真偽不明の情報が、国の関係に思わぬ不和を招くことになるかもしれません…",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "ひめ"
    },
    {
        id: 9,
        name: "波頭",
        audio: "../narration/hachioji_siyakusyo/file_40.mp3",
        image: "../images/archive-hachiojishiyakusyo/29. Wave Crest.png",
        area: "八王子市役所エリア",
        author: "渡辺 隆根",
        story: "捌王子file.40　当時の捌王子において重要な四大要素のひとつ、水を示した彫刻です。捌王子の人々にとって、海は原動力でもありました。この頃になると捌王子の人口は急速に増え、その需要に対応するために漁業が盛んに行われるようになります。交易だけでなく、民の食を支える生命の源としても海、すなわち水は重要だったのです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "なみ"
    },
    {
        id: 10,
        name: "紺碧の空へ",
        audio: "../narration/hachioji_siyakusyo/file_41.mp3",
        image: "../images/archive-hachiojishiyakusyo/30. To the Deep Blue Sky.png",
        area: "八王子市役所エリア",
        author: "丸山 映",
        story: "捌王子file.41　当時の捌王子において重要な四大要素のひとつ、空を示した彫刻です。この形の元になったのは、ある貿易船の船首に取り付けられていた像だそうで、女性が空を仰ぐ様子は、まるで捌王子とハシモト、二つの国に隔たりがないことを示しているように思えます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "そら"
    },
    {
        id: 11,
        name: "みどりの浮標",
        audio: "../narration/hachioji_siyakusyo/file_42.mp3",
        image: "../images/archive-hachiojishiyakusyo/31. Green Buoy.png",
        area: "八王子市役所エリア",
        author: "大貝 滝雄",
        story: "捌王子file.42　当時の捌王子において重要な四大要素のひとつ、緑を示した彫刻です。古くから捌王子は、自然と共にありました。そして自然との調和、循環が重要であることにもいち早く気がついていたのです。また、その循環は農業にも取り入れられ、自然を人の手で生み出す農業こそが、最もよい職業だと考えられていたそうです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "みどり"
    },
    {
        id: 12,
        name: "風洞No．2",
        audio: "../narration/hachioji_siyakusyo/file_43.mp3",
        image: "../images/archive-hachiojishiyakusyo/32. Wind Tunnel No.2.png",
        area: "八王子市役所エリア",
        author: "大成 浩",
        story: "捌王子file.43　当時の捌王子において重要な四大要素のひとつ、風です。古くから捌王子誕生の源としても強く重んじられてきた風は、造船技術が確立されてからはさらに大切に考えられるようになりました。帆船の動力は帆に受ける風であるためです。風がハシモトとの貿易関係に繋がり、捌王子の商業や工業を発展させたのです。彫刻は、帆にあたっている風の輪郭を取られたものだとされています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "かぜ"
    },
    {
        id: 13,
        name: "千人同心",
        audio: "../narration/hachioji_siyakusyo/other_6.mp3",
        image: "../images/archive-hachiojishiyakusyo/26. Sennin Doshin.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "otherfile.6　当時の捌王子の治安は、民による自警団によって守られていました。その規模は1000人ほどだと言われており、彼らは報酬なしで都市を警備していたとされています。王政府も、その力に頼りきりでした。ですがそのうち、民が大きい武力を持つことに危機を感じた王が、自警団に良い報酬を与え、それを公務としました。武力の手綱を握っておこうと考えたのでしょう。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "せんにん"
    },
    {
        id: 14,
        name: "乙女",
        audio: "../narration/hachioji_siyakusyo/other_7.mp3",
        image: "../images/archive-hachiojishiyakusyo/24. Maiden.png",
        area: "八王子市役所エリア",
        author: "橋本 次郎",
        story: "otherfile.7　捌王子では、彫刻や、織物に関する芸術がよく発展しましたが、他にも音楽が存在しました。捌王子では音楽は若者が担う文化で、メロディーにあわせて自己表現する形態がとても流行ったそうです。しかし多くの大人たちは、奔放な感情を論理的でなく語ることに抵抗があったそうで、こうした文化は秩序にひびを加えるとして反対していました。しかし、世代交代が広がるにつれてこうした文化も受け入れられていくことになります。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000018.html",
        keyword: "おとめ"
    }
];


// 解放済みデータの読み込み
function loadUnlocked() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return new Set(JSON.parse(saved));
        }
    } catch (error) {
        console.error("解放データの読み込みに失敗しました:", error);
    }
    return new Set();
}

// 解放済みデータの保存
function saveUnlocked(set) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
}

// トースト表示
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// 音声ボタンを再生状態に戻す
function resetAudioButton() {
    const button = document.getElementById("audioPlayButton");
    if (!button) return;

    button.textContent = "▶";
    button.classList.remove("is-pause");
    button.classList.add("is-play");
    button.setAttribute("aria-label", "音声ガイドを再生");
}


// ポップアップを開く
function openPopup(id) {
    const item = SCULPTURES.find(s => s.id === id);
    if (!item) return;

    const audio = document.getElementById("popAudio");

    // 前の音声を停止
    if (audio) {
        audio.pause();
        audio.currentTime = 0;

        if (item.audio) {
            audio.src = item.audio;
            audio.load();
        } else {
            audio.removeAttribute("src");
            audio.load();
        }
    }

    // 彫刻情報を表示
    document.getElementById("popNo").textContent = `No.${item.id}`;
    document.getElementById("popTitle").textContent = item.name;
    document.getElementById("popImg").src = item.image;
    document.getElementById("popArea").textContent = item.area;
    document.getElementById("popAuthor").textContent = item.author;
    document.getElementById("popStory").textContent = item.story;
    document.getElementById("popLink").href = item.link;

    resetAudioButton();

    document.getElementById("popupOverlay").classList.add("show");
    document.getElementById("popup").classList.add("show");
}


// ポップアップを閉じる
function closePopup() {
    const audio = document.getElementById("popAudio");

    // 音声を停止して最初に戻す
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    resetAudioButton();

    document.getElementById("popupOverlay").classList.remove("show");
    document.getElementById("popup").classList.remove("show");
}


// 音声再生・一時停止ボタン
document.getElementById("audioPlayButton").addEventListener("click", async () => {
    const audio = document.getElementById("popAudio");
    const button = document.getElementById("audioPlayButton");

    if (!audio || !audio.src) {
        showToast("音声ファイルが設定されていません。");
        return;
    }

    if (audio.paused) {
        try {
            await audio.play();

            button.textContent = "⏸";
            button.classList.remove("is-play");
            button.classList.add("is-pause");
            button.setAttribute("aria-label", "音声ガイドを一時停止");

        } catch (error) {
            console.error("音声の再生に失敗しました:", error);
            showToast("音声を再生できませんでした。");
            resetAudioButton();
        }

    } else {
        audio.pause();
        resetAudioButton();
    }
});


// 音声再生終了時
document.getElementById("popAudio").addEventListener("ended", () => {
    resetAudioButton();
});


// 音声読み込みエラー時
document.getElementById("popAudio").addEventListener("error", () => {
    resetAudioButton();
    console.error("音声ファイルを読み込めませんでした。");
});


// スタンプ一覧を描画
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
                <img
                    src="${s.image}"
                    class="unlocked-img"
                    alt="${s.name}"
                    onerror="this.style.display='none'"
                >
            `;

        } else {
            itemDiv.className = "stamp-item locked";
            itemDiv.onclick = () => showToast("未解放です！");

            itemDiv.innerHTML = `
                <span class="stamp-no">No.${s.id}</span>
                <div class="lock-icon">
                    <img
                        src="../images/archive_lockicon.png"
                        style="width: 114px; height: auto;"
                        alt="鍵アイコン"
                    >
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

    document.getElementById("progressCount").textContent =
        `${count} / ${TOTAL_ITEMS}`;

    progressFill.style.width = `${percentage}%`;


    // 100%達成時
    if (count === TOTAL_ITEMS) {
        progressFill.classList.add("completed");

        if (progressContainer) {
            progressContainer.classList.add("completed");
        }

        const celebratedKey = STORAGE_KEY + "-celebrated";
        const isNew = localStorage.getItem(celebratedKey) !== "true";

        if (isNew) {
            localStorage.setItem(celebratedKey, "true");
        }

        celebrateCompletion(isNew);

    } else {
        progressFill.classList.remove("completed");

        if (progressContainer) {
            progressContainer.classList.remove("completed");
        }

        clearCompletionEffect();
    }
}


// 初期化処理
window.addEventListener("DOMContentLoaded", () => {

    unlockedSet = loadUnlocked();

    // 最初にスタンプ一覧を表示
    renderGrid();


    // URLから解放判定
    const urlParams = new URLSearchParams(window.location.search);
    const unlockId = parseInt(urlParams.get("unlock"), 10);

    if (
        unlockId &&
        !isNaN(unlockId) &&
        unlockId >= 1 &&
        unlockId <= TOTAL_ITEMS
    ) {
        if (!unlockedSet.has(unlockId)) {

            const targetItem = SCULPTURES.find(s => s.id === unlockId);

            if (targetItem && targetItem.keyword) {

                setTimeout(() => {

                    const userInput = window.prompt(
                        `【${targetItem.name}】\n現地にある「ひみつのキーワード」を入力してください：`
                    );

                    if (userInput === targetItem.keyword) {

                        unlockedSet.add(unlockId);
                        saveUnlocked(unlockedSet);

                        renderGrid();

                        setTimeout(() => {
                            showToast(`${targetItem.name} が解放されました！`);
                        }, 300);

                    } else if (
                        userInput !== null &&
                        userInput !== ""
                    ) {
                        alert("キーワードが違います。現地で確認してもう一度お試しください。");
                    }

                }, 100);

            } else {
                unlockedSet.add(unlockId);
                saveUnlocked(unlockedSet);
                renderGrid();

                setTimeout(() => {
                    showToast("解放されました！");
                }, 500);
            }

        } else {
            setTimeout(() => {
                showToast("この彫刻は既に解放されています。");
            }, 500);
        }

        // URLパラメータを削除
        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );
    }
});



/* =========================================================
   コンプリート演出
========================================================= */

(function () {

    const style = document.createElement("style");

    style.textContent = `
        #confettiCanvas {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2000;
        }

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
            transition:
                transform 0.5s cubic-bezier(0.2, 1.2, 0.35, 1),
                opacity 0.4s ease;
        }

        .complete-overlay.show .complete-card {
            transform: scale(1) translateY(0);
            opacity: 1;
        }

        .complete-card::before {
            content: "";
            position: absolute;
            inset: 8px;
            border: 1px solid rgba(13, 139, 128, 0.4);
            border-radius: 10px;
            pointer-events: none;
        }

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
            box-shadow:
                0 0 0 4px #fffdf7,
                0 0 0 6px #0D8B80,
                0 6px 16px rgba(0,0,0,.25);
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
            0% {
                transform: scale(0) rotate(-45deg);
                opacity: 0;
            }
            100% {
                transform: scale(1) rotate(0deg);
                opacity: 1;
            }
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

        .complete-btn:hover {
            background: #0b7a70;
        }

        .complete-btn:active {
            transform: translateY(2px);
        }

        .stamp-grid.all-cleared .stamp-item.unlocked {
            box-shadow:
                0 0 0 2px #0D8B80,
                2px 2px 8px rgba(13, 139, 128, 0.45);
        }

        @media (prefers-reduced-motion: reduce) {
            .complete-card,
            .complete-seal {
                animation: none;
                transition: opacity .3s ease;
            }
        }
    `;

    document.head.appendChild(style);


    // 紙吹雪
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

        const colors = [
            "#0D8B80",
            "#14a99c",
            "#ffd700",
            "#ffffff",
            "#e99a25"
        ];

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

            ctx.clearRect(
                0,
                0,
                window.innerWidth,
                window.innerHeight
            );

            const fade = elapsed > duration - 800
                ? Math.max(0, (duration - elapsed) / 800)
                : 1;

            ctx.globalAlpha = fade;

            pieces.forEach(p => {

                p.y += p.speed;
                p.x += p.drift;
                p.rot += p.rotSpeed;

                if (
                    p.y > window.innerHeight + 20 &&
                    elapsed < duration - 1200
                ) {
                    p.y = -20;
                    p.x = Math.random() * window.innerWidth;
                }

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.color;
                ctx.fillRect(
                    -p.w / 2,
                    -p.h / 2,
                    p.w,
                    p.h
                );
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


    // 達成オーバーレイ
    function showCompleteOverlay() {

        if (document.querySelector(".complete-overlay")) {
            return;
        }

        const banner = document.querySelector(".area-banner");
        const areaName = banner
            ? banner.textContent.trim()
            : "このエリア";

        const overlay = document.createElement("div");
        overlay.className = "complete-overlay";

        overlay.innerHTML = `
            <div class="complete-card">
                <div class="complete-seal">
                    <span class="seal-main">COMPLETE</span>
                    <span class="seal-sub">${TOTAL_ITEMS}/${TOTAL_ITEMS}</span>
                </div>

                <h3>コンプリート！</h3>

                <div class="complete-area">
                    ${areaName}
                </div>

                <p class="complete-desc">
                    このエリアの彫刻をすべて巡りました。<br>
                    捌王子の記憶が、すべて解放されました。
                </p>

                <button type="button" class="complete-btn">
                    記録を見る
                </button>
            </div>
        `;

        document.body.appendChild(overlay);

        function close() {
            overlay.classList.remove("show");
            setTimeout(() => overlay.remove(), 500);
        }

        overlay.querySelector(".complete-btn")
            .addEventListener("click", close);

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                close();
            }
        });

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlay.classList.add("show");
            });
        });
    }


    // 外部から呼び出す関数
    window.celebrateCompletion = function (isNew) {

        const grid = document.getElementById("grid");

        if (grid) {
            grid.classList.add("all-cleared");
        }

        if (!isNew) return;

        launchConfetti();

        setTimeout(showCompleteOverlay, 600);
    };


    window.clearCompletionEffect = function () {

        const grid = document.getElementById("grid");

        if (grid) {
            grid.classList.remove("all-cleared");
        }
    };

})();