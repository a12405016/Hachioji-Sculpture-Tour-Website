
// 解放済みの彫刻IDを保存するためのキー　各エリアで修正する必要あり
const STORAGE_KEY = "kitano-unlocked-area";
let unlockedSet = new Set();


// ページが開かれたら解放フラグを保存　各エリアの彫刻についても修正する必要あり
localStorage.setItem('kitanoUnlocked', 'true');
// 彫刻データ
const TOTAL_ITEMS = 4;
const SCULPTURES = [
    {
        id: 1,
        audio: "../narration/kitano/file_48.mp3",
        name: "肖像",
        image: "../images/archive-kitano/57. Portrait.png",
        area: "北野エリア",
        author: "丸山 映",
        story: "捌王子file.48　これはいったいどういうことでしょう…この彫刻は、捌王子において、近代に当たる時代につくられた作品です。その形状は、あきらかに日本列島を模しており、それは、彼らが我々の住む日本をはっきりと認知していることを意味します。おそらく、初代八人の王子から伝えられたきたことのなかに、日本列島に関することがあったのでしょう。でも、なぜ今になって、このような彫刻をつくるに至ったのでしょうか。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "しょうぞう"
    },
    {
        id: 2,
        audio: "../narration/kitano/file_49.mp3",
        name: "階段 －柱－",
        image: "../images/archive-kitano/58. Stairs -Pillar-.png",
        area: "北野エリア",
        author: "岩崎 幸之助",
        story: "捌王子file.49　近代化は進んでいきます。彼らは、より良い暮らしや発展を求め、立ち止まることを知らず生産し、築きあげてきました。高みを目指し、挑戦することをやめません。彫刻は、その道筋を表しています。そしてどうやら捌王子の民たちには理想像があるようで、それは我々もよく知る世界のことです。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "かいだん"
    },
        {
        id: 3,
        audio: "../narration/kitano/file_50.mp3",
        name: "大気の底",
        image: "../images/archive-kitano/60. Bottom of the Atmosphere.png",
        area: "北野エリア",
        author: "前田 耕成",
        story: "捌王子file.50　突然現れたある老人が残していった石碑とされています。老人は語りました。「私は全てを知っている」だれも、その言葉に耳を貸すことはありません。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "そこ"
    },
    {
        id: 4,
        audio: "../narration/kitano/other_8.mp3",
        name: "横たわる女4.",
        image: "../images/archive-kitano/59. Reclining Woman 4.png",
        area: "北野エリア",
        author: "桜井 敏生",
        story: "other file.8　ある日作品を作ろうと一人の彫刻家が石と向き合います。すると、石の声が聞こえてきました。言うとおりに掘ると、一人の横たわった女性の姿が現れました。それ以降彼は、石一つ一つに本当の姿があるのではないかと考えるようになったといいます。",
        link: "https://www.city.hachioji.tokyo.jp/kurashi/shimin/005/002/002/p000015.html",
        keyword: "やすらぎ"
    },
];
// 音声ガイド共通処理
(function(){const folder='kitano';const a=document.getElementById('popAudio'),b=document.getElementById('audioPlayButton');if(!a||!b)return;const special={'kitano/27':'file_27_change.mp3','kitano/33':'file_33_change.mp3','other/1':'file_1a.mp3','other/2':'file_2a.mp3','other/3':'fie_3a.mp3','other/4':'file_4a_rewrite.mp3','other/5':'file_5a.mp3'};const reset=()=>{a.pause();a.currentTime=0;b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play');};const original=window.openPopup;window.openPopup=function(id){original(id);const s=SCULPTURES.find(x=>x.id===id),m=(s.story||'').match(/file\.?\s*(\d+)/i);if(!m)return;let n=s.audio||'../narration/'+folder+'/file_'+m[1]+'.mp3';if(special[folder+'/'+m[1]])n='../narration/'+folder+'/'+special[folder+'/'+m[1]];if(folder==='hachioji_kita'&&m[1]==='46')n='../narration/hachioji_kita/filer_46.mp3';reset();a.src=n;a.load();};b.onclick=async()=>{if(!a.src)return;if(a.paused){try{await a.play()}catch(e){console.error('音声の再生に失敗しました:',a.src,e)}}else a.pause()};a.onplay=()=>{b.textContent='Ⅱ';b.classList.remove('is-play');b.classList.add('is-pause')};a.onpause=()=>{if(!a.ended){b.textContent='▶';b.classList.remove('is-pause');b.classList.add('is-play')}};a.onended=reset;a.onerror=()=>console.error('音声ファイルを読み込めませんでした:',a.src);const close=window.closePopup;window.closePopup=function(){reset();close()}})();