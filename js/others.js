// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "others-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('othersUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 5;
const SCULPTURES = [
        {
        id: 1,
        audio: "../narration/other/file_1a.mp3",
        name: "燈標",
        image: "../images/archive-others/79. Light Beacon.png",
        area: "その他エリア",
        author: "古島 実",
        story: "file.1　捌王子の世界は切迫していました。人口が増加し、捌王子、ハシモト、二つの大陸では、全ての消費を賄いきることができない状況でした。そんな不安定ななかで、ひとつ燈標を、彼らは見つけます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "ともしび"
    },
    {
        id: 2,
        audio: "../narration/other/file_2a.mp3",
        name: "地平線の記憶",
        image: "../images/archive-others/78. Memory of the Horizon.png",
        area: "その他エリア",
        author: "菊地 伸治",
        story: "file.2　あるひとつの作品が完成します。はるか昔につくられた、空間と空間を繋げる作品をもとにつくられました。この作品で、捌王子の人口問題を解決しようというのです。いったい彼らはどんな世界にたどり着こうというのでしょうか。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "きおく"
    },
    {
        id: 3,
        audio: "../narration/other/fie_3a.mp3",
        name: "時間塊",
        image: "../images/archive-others/80. Time Mass.png",
        area: "その他エリア",
        author: "原 透",
        story: "file.3　彼らが目指す世界をモデル化したものだとされています。ある一点を起点に時間が動き出し、文明が育ち、また立ち返るという循環の流れです。長い時間をかけて行われるひとつのサイクルは、立ち返りの時期に達しようとしているようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "とき"
    },
        {
        id: 4,
        audio: "../narration/other/file_4a_rewrite.mp3",        name: "太陽の風景－9.",
        image: "../images/archive-others/82. Landscape of the Sun -9.png",
        area: "その他エリア",
        author: "藁谷 収",
        story: "file.４　彼らが目指す世界をモデル化したものだとされています。ある一点を起点に時間が動き出し、文明が育ち、また立ち返るという循環の流れです。長い時間をかけて行われるひとつのサイクルは、立ち返りの時期に達しようとしているようです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "たいよう"
    },
    {
        id: 5,
        audio: "../narration/other/file_5a.mp3",
        name: "風の中の母子",
        image: "../images/archive-others/81. Mother and Child in the Wind.png",
        area: "その他エリア",
        author: "坂井 彰夫",
        story: "file.5　ただ砂漠ばかりが広がる世界で彼らは祈りました。すると、強く風が吹いて、たちまち地面を緑が覆ったといいます。今でも同じ風が吹いています。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000019.html",
        keyword: "おやこ"
    },
];
// 音声ガイド共通処理
(function(){const folder='other';const a=document.getElementById('popAudio'),b=document.getElementById('audioPlayButton');if(!a||!b)return;const special={'other/27':'file_27_change.mp3','other/33':'file_33_change.mp3','other/1':'file_1a.mp3','other/2':'file_2a.mp3','other/3':'fie_3a.mp3','other/4':'file_4a_rewrite.mp3','other/5':'file_5a.mp3'};const reset=()=>{a.pause();a.currentTime=0;b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play');};const original=window.openPopup;window.openPopup=function(id){original(id);const s=SCULPTURES.find(x=>x.id===id),m=(s.story||'').match(/file\.?\s*(\d+)/i);if(!m)return;let n=s.audio||'../narration/'+folder+'/file_'+m[1]+'.mp3';if(special[folder+'/'+m[1]])n='../narration/'+folder+'/'+special[folder+'/'+m[1]];if(folder==='hachioji_kita'&&m[1]==='46')n='../narration/hachioji_kita/filer_46.mp3';reset();a.src=n;a.load();};b.onclick=async()=>{if(!a.src)return;if(a.paused){try{await a.play()}catch(e){console.error('音声の再生に失敗しました:',a.src,e)}}else a.pause()};a.onplay=()=>{b.textContent='Ⅱ';b.classList.remove('is-play');b.classList.add('is-pause')};a.onpause=()=>{if(!a.ended){b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play')}};a.onended=reset;a.onerror=()=>console.error('音声ファイルを読み込めませんでした:',a.src);const close=window.closePopup;window.closePopup=function(){reset();close()}})();