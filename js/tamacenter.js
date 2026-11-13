// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "tamacenter-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('tamacenterUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 4;
const SCULPTURES = [
    {
        id: 1,
        audio: "../narration/tama_keiou/file_56.mp3",
        name: "八王子`88発芽",
        image: "../images/archive-tamacenter/70. Hachioji _88 Germination.png",
        area: "多摩センターエリア",
        author: "五十嵐芳三",
        story: "捌王子file.56　捌王子はすでに、大きな産業と大きな経済のもとに成り立っていました。かつては本当に存在したこの世界の神様の存在もうすれ、自然はないがしろにされてしまいました。彫刻家たちは、近代化していく捌王子のなかで考えます。どうすれば世界はより良い方向へ向かっていくのか。自然との共存を、自然の一部である石を利用して訴えたのがこの作品です。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "はつが"
    },
    {
        id: 2,
        audio: "../narration/tama_keiou/file_57.mp3",
        name: "作品`88",
        image: "../images/archive-tamacenter/72. Artwork _88.png",
        area: "多摩センターエリア",
        author: "田中康二郎",
        story: "捌王子file.57　捌王子で初めて開通した鉄道のレールを使った作品です。製作者がレールを手に入れる際には、その日の運行が終了した真夜中に、駅潜り込み、その一部を切り取って入手したそうです。幸い、駅員が気付いて、大きな事故には至りませんでしたが、修理のために運行は大きく遅れたといいます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "はちはち"
    },
    {
        id: 3,
        audio: "../narration/tama_keiou/other_9.mp3",
        name: "生",
        image: "../images/archive-tamacenter/71. Life.png",
        area: "多摩センターエリア",
        author: "酒井良",
        story: "other file.9　ある日、石の持つ不思議な力を感じ取った彫刻家は、石には生命が宿っていて、なにかを訴え掛けているのではないかという考えを強めました。そこで石に簡単な足、体、頭を与え、コミュニケーションを図ろうとしたそうです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "いのち"
    },
    {
        id: 4,
        audio: "../narration/tama_keiou/other_10.mp3",        name: "史雲`80",
        image: "../images/archive-tamacenter/73. Historical Cloud _80.png",
        area: "多摩センターエリア",
        author: "鈴木徹",
        story: "other file.10　一人の彫刻家が、古代においてつくられた、手足のない彫刻を参考に制作したものです。しかし、頭部もついていない様式に挑戦するのはかつてないことで、人体のパーツを絞ることによって、感じられる美を追求したといいます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000021.html",
        keyword: "しうん"
    }
];
// 音声ガイド共通処理
(function(){const folder='tama_keiou';const a=document.getElementById('popAudio'),b=document.getElementById('audioPlayButton');if(!a||!b)return;const special={'tama_keiou/27':'file_27_change.mp3','tama_keiou/33':'file_33_change.mp3','other/1':'file_1a.mp3','other/2':'file_2a.mp3','other/3':'fie_3a.mp3','other/4':'file_4a_rewrite.mp3','other/5':'file_5a.mp3'};const reset=()=>{a.pause();a.currentTime=0;b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play');};const original=window.openPopup;window.openPopup=function(id){original(id);const s=SCULPTURES.find(x=>x.id===id),m=(s.story||'').match(/file\.?\s*(\d+)/i);if(!m)return;let n=s.audio||'../narration/'+folder+'/file_'+m[1]+'.mp3';if(special[folder+'/'+m[1]])n='../narration/'+folder+'/'+special[folder+'/'+m[1]];if(folder==='hachioji_kita'&&m[1]==='46')n='../narration/hachioji_kita/filer_46.mp3';reset();a.src=n;a.load();};b.onclick=async()=>{if(!a.src)return;if(a.paused){try{await a.play()}catch(e){console.error('音声の再生に失敗しました:',a.src,e)}}else a.pause()};a.onplay=()=>{b.textContent='Ⅱ';b.classList.remove('is-play');b.classList.add('is-pause')};a.onpause=()=>{if(!a.ended){b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play')}};a.onended=reset;a.onerror=()=>console.error('音声ファイルを読み込めませんでした:',a.src);const close=window.closePopup;window.closePopup=function(){reset();close()}})();