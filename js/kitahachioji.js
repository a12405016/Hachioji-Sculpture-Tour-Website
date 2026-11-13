
// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "kitahachioji-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('kitahachiojiUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 4;
const SCULPTURES = [
    {
        id: 1,
        audio: "../narration/hachioji_kita/file_44.mp3",
        name: "二つの笑い",
        image: "../images/archive-kitahachioji/74. Two Smiles.png",
        area: "北八王子エリア",
        author: "岡野 裕",
        story: "捌王子file.44　捌王子の彫刻家たちは、この時代に入ると、歴史の記録としてだけでなく、より自由な表現も行うようになってきます。この彫刻はその一端です。石が笑うという表現は、かねてより彫刻との深い関わりを持っ捌王子の民だからこそ出たアイデアと言えるかもしれません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "わらい"
    },
    {
        id: 2,
        audio: "../narration/hachioji_kita/file_45.mp3",
        name: "石の歌",
        image: "../images/archive-kitahachioji/75. Song of Stone.png",
        area: "北八王子エリア",
        author: "マーティン・シュナイダー（MARTIN SCHENIDER）",
        story: "捌王子file.45　ある一人の彫刻家が、石と長い時間向き合っていると、突然石の声が聴こえ、一気に彫り上げた作品と言われています。捌王子では、石は特に重要視されているもののひとつで、不思議な力を持っているとされています。今こうして我々があちらの世界のことを、彫刻を通して知れるのは、そのお陰かもしれません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "うたごえ"
    },
        {
        id: 3,
        audio: "../narration/hachioji_kita/filer_46.mp3",
        name: "デッサン",
        image: "../images/archive-kitahachioji/77. Dessin.png",
        area: "北八王子エリア",
        author: "マチエ・スザンコフスキー（MACIEJ SZANKOWSKI）",
        story: "捌王子file.46　歴史の記録のために作られてきた捌王子の彫刻彫刻ですが、ここにきて、いままでの歴史全てを振り返る表現を持った彫刻が作られます。使われたのは、この地が生まれた当初から捌王子にあった岩で、石を半分に割ることで、その石の持つ記憶と共に捌王子の歴史を想起させます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "デッサン"
    },
    {
        id: 4,
        audio: "../narration/hachioji_kita/file_47.mp3",
        name: "慈",
        image: "../images/archive-kitahachioji/76. Mercy.png",
        area: "北八王子エリア",
        author: "千野 茂",
        story: "捌王子file.47　彫刻家たちがその表現を広げていく一方、捌王子の近代化は進んでいきました。工業や産業を心がないものとして、その反発としてつくられたのが、母子の愛を表現したこの作品です。しかし、捌王子の発展は、や彫刻家たちの思いもむなしく、さらに成長の一途をたどります。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000022.html",
        keyword: "めぐみ"
    },
];
// 音声ガイド共通処理
(function(){const folder='hachioji_kita';const a=document.getElementById('popAudio'),b=document.getElementById('audioPlayButton');if(!a||!b)return;const special={'hachioji_kita/27':'file_27_change.mp3','hachioji_kita/33':'file_33_change.mp3','other/1':'file_1a.mp3','other/2':'file_2a.mp3','other/3':'fie_3a.mp3','other/4':'file_4a_rewrite.mp3','other/5':'file_5a.mp3'};const reset=()=>{a.pause();a.currentTime=0;b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play');};const original=window.openPopup;window.openPopup=function(id){original(id);const s=SCULPTURES.find(x=>x.id===id),m=(s.story||'').match(/file\.?\s*(\d+)/i);if(!m)return;let n=s.audio||'../narration/'+folder+'/file_'+m[1]+'.mp3';if(special[folder+'/'+m[1]])n='../narration/'+folder+'/'+special[folder+'/'+m[1]];if(folder==='hachioji_kita'&&m[1]==='46')n='../narration/hachioji_kita/filer_46.mp3';reset();a.src=n;a.load();};b.onclick=async()=>{if(!a.src)return;if(a.paused){try{await a.play()}catch(e){console.error('音声の再生に失敗しました:',a.src,e)}}else a.pause()};a.onplay=()=>{b.textContent='Ⅱ';b.classList.remove('is-play');b.classList.add('is-pause')};a.onpause=()=>{if(!a.ended){b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play')}};a.onended=reset;a.onerror=()=>console.error('音声ファイルを読み込めませんでした:',a.src);const close=window.closePopup;window.closePopup=function(){reset();close()}})();