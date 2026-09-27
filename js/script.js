const products=[
{id:1,name:"Noir Executive",gender:"men",family:"Amber Woody",price:890,old:1050,tag:"BEST SELLER",new:false,notes:{wood:92,amber:78,fresh:18,sweet:20,spicy:68,leather:84,floral:8,musk:42}},
{id:2,name:"Velvet Rose",gender:"women",family:"Floral Amber",price:820,old:0,tag:"",new:false,notes:{wood:22,amber:56,fresh:35,sweet:82,spicy:18,leather:10,floral:95,musk:58}},
{id:3,name:"Black Atelier",gender:"unisex",family:"Woody Leather",price:980,old:1150,tag:"PRIVATE",new:false,notes:{wood:84,amber:88,fresh:15,sweet:32,spicy:80,leather:94,floral:10,musk:48}},
{id:4,name:"Aurum 01",gender:"unisex",family:"Amber Spicy",price:760,old:0,tag:"",new:true,notes:{wood:58,amber:91,fresh:42,sweet:55,spicy:57,leather:36,floral:22,musk:55}},
{id:5,name:"Imperial Night",gender:"men",family:"Amber Leather",price:1100,old:1250,tag:"BEST SELLER",new:false,notes:{wood:88,amber:95,fresh:10,sweet:26,spicy:89,leather:86,floral:5,musk:40}},
{id:6,name:"Élan",gender:"women",family:"Floral Musk",price:735,old:0,tag:"",new:true,notes:{wood:28,amber:46,fresh:78,sweet:65,spicy:14,leather:8,floral:90,musk:82}},
{id:7,name:"Silver Drive",gender:"men",family:"Fresh Woody",price:690,old:0,tag:"",new:false,notes:{wood:48,amber:30,fresh:94,sweet:15,spicy:22,leather:18,floral:12,musk:52}},
{id:8,name:"Oud Prestige",gender:"unisex",family:"Oud Amber",price:1250,old:1450,tag:"PRIVATE",new:false,notes:{wood:98,amber:98,fresh:8,sweet:42,spicy:90,leather:96,floral:12,musk:45}},
{id:9,name:"Santal Noir",gender:"unisex",family:"Woody Musk",price:940,old:0,tag:"NEW",new:true,notes:{wood:96,amber:62,fresh:24,sweet:28,spicy:35,leather:48,floral:16,musk:88}},
{id:10,name:"Golden Muse",gender:"women",family:"Amber Floral",price:870,old:0,tag:"",new:false,notes:{wood:35,amber:84,fresh:42,sweet:72,spicy:24,leather:14,floral:88,musk:62}},
{id:11,name:"Cedar 24",gender:"men",family:"Woody Fresh",price:780,old:0,tag:"NEW",new:true,notes:{wood:90,amber:42,fresh:72,sweet:12,spicy:36,leather:38,floral:8,musk:45}},
{id:12,name:"Musc Blanc",gender:"women",family:"Musk Floral",price:720,old:0,tag:"",new:false,notes:{wood:20,amber:38,fresh:70,sweet:40,spicy:8,leather:5,floral:72,musk:96}},
{id:13,name:"Rouge Élixir",gender:"women",family:"Amber Gourmand",price:990,old:0,tag:"NEW",new:true,notes:{wood:30,amber:92,fresh:12,sweet:94,spicy:42,leather:18,floral:58,musk:55}},
{id:14,name:"Carbon Reserve",gender:"men",family:"Leather Woody",price:1050,old:1190,tag:"PRIVATE",new:false,notes:{wood:94,amber:72,fresh:15,sweet:12,spicy:76,leather:98,floral:5,musk:38}},
{id:15,name:"Iris Nocturne",gender:"unisex",family:"Powdery Woody",price:930,old:0,tag:"",new:false,notes:{wood:68,amber:52,fresh:32,sweet:45,spicy:20,leather:24,floral:74,musk:86}},
{id:16,name:"Azure Coast",gender:"unisex",family:"Fresh Citrus",price:745,old:0,tag:"",new:true,notes:{wood:35,amber:20,fresh:98,sweet:15,spicy:12,leather:5,floral:30,musk:48}},
{id:17,name:"Royal Tobacco",gender:"men",family:"Tobacco Amber",price:1150,old:1320,tag:"PRIVATE",new:false,notes:{wood:76,amber:96,fresh:8,sweet:62,spicy:86,leather:78,floral:5,musk:58}},
{id:18,name:"Luna Petale",gender:"women",family:"Floral Fresh",price:805,old:0,tag:"",new:false,notes:{wood:12,amber:32,fresh:90,sweet:55,spicy:8,leather:4,floral:96,musk:72}},
{id:19,name:"Onyx 77",gender:"unisex",family:"Dark Spicy",price:1020,old:0,tag:"NEW",new:true,notes:{wood:88,amber:86,fresh:16,sweet:36,spicy:95,leather:88,floral:6,musk:45}},
{id:20,name:"Cashmere Skin",gender:"women",family:"Musk Woody",price:850,old:0,tag:"",new:false,notes:{wood:44,amber:48,fresh:58,sweet:52,spicy:10,leather:9,floral:42,musk:98}},
{id:21,name:"Vértice",gender:"men",family:"Aromatic Woody",price:825,old:0,tag:"NEW",new:true,notes:{wood:78,amber:48,fresh:78,sweet:15,spicy:50,leather:32,floral:8,musk:50}},
{id:22,name:"Amour Sombre",gender:"women",family:"Dark Floral",price:960,old:1100,tag:"",new:false,notes:{wood:42,amber:78,fresh:20,sweet:75,spicy:32,leather:25,floral:94,musk:74}},
{id:23,name:"Atlas",gender:"unisex",family:"Mineral Woody",price:895,old:0,tag:"",new:false,notes:{wood:72,amber:45,fresh:83,sweet:18,spicy:30,leather:40,floral:10,musk:61}},
{id:24,name:"Cuir Royal",gender:"men",family:"Leather Amber",price:1280,old:1490,tag:"PRIVATE",new:false,notes:{wood:96,amber:94,fresh:8,sweet:22,spicy:84,leather:100,floral:4,musk:42}},
{id:25,name:"Fleur d'Or",gender:"women",family:"Floral Gourmand",price:890,old:0,tag:"",new:true,notes:{wood:18,amber:75,fresh:40,sweet:90,spicy:20,leather:8,floral:98,musk:60}},
{id:26,name:"Midnight Vetiver",gender:"men",family:"Woody Aromatic",price:915,old:0,tag:"",new:false,notes:{wood:92,amber:48,fresh:45,sweet:8,spicy:58,leather:42,floral:6,musk:52}},
{id:27,name:"Ivory Bloom",gender:"women",family:"Floral Musk",price:790,old:0,tag:"",new:false,notes:{wood:14,amber:35,fresh:76,sweet:58,spicy:10,leather:4,floral:92,musk:90}},
{id:28,name:"Oud Imperial",gender:"unisex",family:"Oud Leather",price:1390,old:1590,tag:"PRIVATE",new:true,notes:{wood:100,amber:100,fresh:4,sweet:35,spicy:96,leather:100,floral:5,musk:50}},
{id:29,name:"Café Velvet",gender:"unisex",family:"Gourmand Amber",price:875,old:0,tag:"NEW",new:true,notes:{wood:45,amber:88,fresh:12,sweet:96,spicy:40,leather:18,floral:28,musk:66}},
{id:30,name:"L'Éclipse",gender:"unisex",family:"Amber Musk",price:1090,old:1250,tag:"PRIVATE",new:false,notes:{wood:65,amber:96,fresh:18,sweet:62,spicy:52,leather:44,floral:30,musk:92}},
{id:31,name:"Pure Linen",gender:"women",family:"Fresh Musk",price:680,old:0,tag:"",new:true,notes:{wood:10,amber:20,fresh:98,sweet:15,spicy:5,leather:2,floral:42,musk:96}},
{id:32,name:"Granite",gender:"men",family:"Woody Spicy",price:855,old:0,tag:"",new:false,notes:{wood:95,amber:55,fresh:35,sweet:7,spicy:82,leather:55,floral:3,musk:45}},
{id:33,name:"Soleil Rouge",gender:"women",family:"Floral Amber",price:925,old:0,tag:"NEW",new:true,notes:{wood:22,amber:86,fresh:62,sweet:72,spicy:35,leather:8,floral:91,musk:70}},
{id:34,name:"Noctis",gender:"unisex",family:"Dark Amber",price:1175,old:0,tag:"PRIVATE",new:true,notes:{wood:90,amber:98,fresh:9,sweet:40,spicy:92,leather:90,floral:5,musk:75}},
{id:35,name:"Eden Green",gender:"unisex",family:"Green Fresh",price:770,old:0,tag:"",new:false,notes:{wood:48,amber:25,fresh:96,sweet:14,spicy:22,leather:8,floral:45,musk:65}},
{id:36,name:"Velours",gender:"women",family:"Vanilla Musk",price:945,old:1080,tag:"BEST SELLER",new:false,notes:{wood:32,amber:86,fresh:25,sweet:94,spicy:28,leather:12,floral:50,musk:94}}
];

const catalog=document.getElementById("catalog"), featured=document.getElementById("featured");
let activeCategory="all", shown=12, bagItems=[];
const money=n=>"Q"+n.toLocaleString("es-GT",{minimumFractionDigits:2});

function productCard(p){
    const tilt=(p.id%3===0?5:p.id%3===1?-4:2)+"deg";
    return `<article class="product">
        ${p.tag?`<span class="tag">${p.tag}</span>`:""}
        <div class="product-art"><div class="mini-bottle" style="--tilt:${tilt}"></div></div>
        <div class="product-info">
            <span class="brand">INVICTUS PRIVATE</span>
            <h3>${p.name}</h3><p>${p.family.toUpperCase()} · EAU DE PARFUM</p>
            <div class="product-bottom"><div class="price">${money(p.price)}${p.old?`<span class="old">${money(p.old)}</span>`:""}</div><button class="add" onclick="addBag(${p.id})">AÑADIR</button></div>
        </div>
    </article>`;
}
function getFiltered(){
    if(activeCategory==="all") return products;
    if(activeCategory==="niche") return products.filter(p=>p.tag==="PRIVATE");
    if(activeCategory==="new") return products.filter(p=>p.new);
    return products.filter(p=>p.gender===activeCategory);
}
function renderCatalog(){
    catalog.innerHTML=getFiltered().slice(0,shown).map(productCard).join("");
    document.getElementById("loadMore").style.display=shown>=getFiltered().length?"none":"inline-block";
}
function renderFeatured(){
    const picks=[products[7],products[4],products[35]];
    featured.innerHTML=picks.map((p,i)=>`<article class="featured-card">
        <div class="big-bottle"></div><small>${p.tag||"PRIVATE SELECTION"}</small><h3>${p.name}</h3>
        <p>${p.family} · Una composición pensada para dejar presencia.</p>
        <div class="featured-bottom"><b>${money(p.price)}</b><button onclick="addBag(${p.id})">AÑADIR A LA BOLSA →</button></div>
    </article>`).join("");
}
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");
    activeCategory=t.dataset.category;shown=12;renderCatalog();
}));
document.getElementById("loadMore").addEventListener("click",()=>{shown+=8;renderCatalog()});
document.querySelectorAll("[data-jump-category]").forEach(a=>a.addEventListener("click",()=>{
    const cat=a.dataset.jumpCategory;
    activeCategory=cat;shown=12;
    document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.category===cat));
    renderCatalog();
}));

function addBag(id){
    const p=products.find(x=>x.id===id), old=bagItems.find(x=>x.id===id);
    if(old) old.qty++; else bagItems.push({...p,qty:1});
    renderBag();openBag();toast(`${p.name} añadido a tu selección`);
}
function removeBag(id){bagItems=bagItems.filter(x=>x.id!==id);renderBag()}
function renderBag(){
    const box=document.getElementById("bagItems"),count=bagItems.reduce((s,x)=>s+x.qty,0);
    document.getElementById("bagCount").textContent=count;
    if(!bagItems.length){box.innerHTML='<div class="bag-empty">Tu selección está vacía.<br>Explora la colección y encuentra tu próxima firma.</div>';document.getElementById("bagTotal").textContent=money(0);return}
    let total=0;box.innerHTML=bagItems.map(x=>{total+=x.price*x.qty;return `<div class="bag-item"><div class="bag-thumb">IV</div><div><strong>${x.name}</strong><small>${money(x.price)} · ${x.qty} ud.</small></div><button onclick="removeBag(${x.id})">×</button></div>`}).join("");
    document.getElementById("bagTotal").textContent=money(total);
}
const bag=document.getElementById("bag"),dim=document.getElementById("dim");
function openBag(){bag.classList.add("open");dim.classList.add("show");document.body.classList.add("lock")}
function closeBag(){bag.classList.remove("open");dim.classList.remove("show");document.body.classList.remove("lock")}
document.getElementById("bagOpen").addEventListener("click",openBag);document.getElementById("bagClose").addEventListener("click",closeBag);dim.addEventListener("click",closeBag);

const searchLayer=document.getElementById("searchLayer");
document.getElementById("searchOpen").addEventListener("click",()=>{searchLayer.classList.add("open");document.getElementById("globalSearch").focus()});
document.getElementById("searchClose").addEventListener("click",()=>searchLayer.classList.remove("open"));
document.getElementById("globalSearch").addEventListener("input",e=>{
    const q=e.target.value.toLowerCase().trim(),box=document.getElementById("searchResults");
    if(!q){box.innerHTML="";return}
    const found=products.filter(p=>`${p.name} ${p.family} ${p.gender}`.toLowerCase().includes(q)).slice(0,8);
    box.innerHTML=found.length?found.map(p=>`<div class="search-result"><span>${p.name} · ${money(p.price)}</span><button onclick="addBag(${p.id})">AÑADIR</button></div>`).join(""):`<p style="color:#777;padding:20px 0;font-size:10px">No encontramos esa fragancia.</p>`;
});

const noteKeys=["wood","amber","fresh","sweet","spicy","leather","floral","musk"];
function updateFinder(){
    const profile={};let avg=0;
    document.querySelectorAll(".scent-slider").forEach(s=>{profile[s.dataset.note]=+s.value;avg+=+s.value;document.getElementById(s.dataset.note+"Out").textContent=s.value+"%"});
    let best=products[0],bestScore=-1;
    products.forEach(p=>{
        let d=0;noteKeys.forEach(k=>d+=Math.abs(profile[k]-p.notes[k]));
        const score=Math.max(0,Math.round(100-d/(noteKeys.length*1.55)));
        if(score>bestScore){bestScore=score;best=p}
    });
    document.getElementById("finderResult").textContent=best.name.toUpperCase();
    document.getElementById("finderScore").textContent=bestScore+"%";
    document.getElementById("matchValue").textContent=bestScore+"%";
    document.getElementById("matchLine").style.width=bestScore+"%";
}
document.querySelectorAll(".scent-slider").forEach(s=>s.addEventListener("input",updateFinder));
document.getElementById("resetFinder").addEventListener("click",()=>{
    const values={wood:82,amber:72,fresh:32,sweet:35,spicy:66,leather:76,floral:28,musk:45};
    document.querySelectorAll(".scent-slider").forEach(s=>s.value=values[s.dataset.note]);updateFinder();
});

let qStep=1,qAnswers=[];
document.querySelectorAll(".quiz-step button").forEach(btn=>btn.addEventListener("click",()=>{
    qAnswers[qStep-1]=btn.dataset.a;
    if(qStep<3){
        document.querySelector(`[data-q="${qStep}"]`).classList.remove("active");qStep++;
        document.querySelector(`[data-q="${qStep}"]`).classList.add("active");document.getElementById("quizProgress").style.width=(qStep/3*100)+"%";
    }else{
        document.querySelector(`[data-q="3"]`).classList.remove("active");
        let rec=products[0];
        if(qAnswers.includes("fresh"))rec=products[15];
        if(qAnswers.includes("warm"))rec=products[28];
        if(qAnswers.includes("unique"))rec=products[27];
        if(qAnswers.includes("date"))rec=products[35];
        const a=document.getElementById("quizAnswer");a.classList.add("show");a.innerHTML=`<span class="eyebrow">TU SELECCIÓN</span><strong>${rec.name}</strong><p>${rec.family} · ${money(rec.price)}. Una composición seleccionada según tus respuestas.</p><button class="btn gold" onclick="addBag(${rec.id})">AÑADIR A LA BOLSA</button>`;
        document.getElementById("quizProgress").style.width="100%";
    }
}));

function modal(id,open){document.getElementById(id).classList.toggle("open",open)}
document.getElementById("accountOpen").addEventListener("click",()=>modal("accountModal",true));
document.getElementById("accountClose").addEventListener("click",()=>modal("accountModal",false));
document.getElementById("conciergeOpen").addEventListener("click",()=>modal("conciergeModal",true));
document.getElementById("conciergeClose").addEventListener("click",()=>modal("conciergeModal",false));
document.getElementById("checkoutOpen").addEventListener("click",()=>{
    if(!bagItems.length){toast("Tu bolsa está vacía");return}
    const total=bagItems.reduce((s,x)=>s+x.price*x.qty,0);document.getElementById("checkoutTotal").textContent=money(total);modal("checkoutModal",true);
});
document.getElementById("checkoutClose").addEventListener("click",()=>modal("checkoutModal",false));
document.getElementById("checkoutForm").addEventListener("submit",e=>{e.preventDefault();modal("checkoutModal",false);bagItems=[];renderBag();closeBag();toast("Solicitud recibida. Nuestro concierge se pondrá en contacto contigo.");e.target.reset()});
document.getElementById("newsletterForm").addEventListener("submit",e=>{e.preventDefault();e.target.reset();toast("Bienvenido a Private Access")});
document.getElementById("conciergeForm").addEventListener("submit",e=>{e.preventDefault();modal("conciergeModal",false);e.target.reset();toast("Tu solicitud fue enviada a Private Concierge")});

const nav=document.getElementById("mainNav");
document.getElementById("mobileMenu").addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.t);window.t=setTimeout(()=>t.classList.remove("show"),2600)}
renderCatalog();renderFeatured();renderBag();updateFinder();
