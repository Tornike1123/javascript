
let strg ;
strg = " i am tornike khatiashvili";
console.log(strg.slice(6, -13)); /* ჭრა წინ და უკან */
console.log(strg.replace("tornike", "toko")); /* ჩანაცვლება სიტყვის */
console.log(strg.split("|")); /* მასივში გადაყვანა */
console.log(strg.search("tornike")); // მოძებნოს სიტყვა ტექსტში
console.log(strg.startsWith(" ")); // რით იწყება სტრინგი ( TRUE OR FALSE)
console.log(strg.toUpperCase()); // დიდი ასოები
console.log(strg.trim());



let picture = 'img-work.jpg';
let title = `Rahul Yaduvanshi`;
let title2 = `Nodia u.pn`;
let title3 = `User interface designer and <br> front-end developer`;
let title4 = `PRO`;
let a1 = `Message`;
let a2 = `Following`;
let title5 = `SKILL`;
let p = `UI/UX`;
let p2 = `Front end development`;
let p3 = `HTML`;
let p4 = `CSS`;
let p5 = `Javascript`;
let p6 = `React`;
let p7 = `Node`;

let crd = `
<div class="card1" id="card2">
<img src="${picture}" id="img-person" alt="">
<h5 id="pro">${title4} </h5>
<h1 class="textrah">${title}</h1>
<h4 class="text">${title2}</h4>
<p class="text">${title3}</p>
<a id="message" href="">${a1}</a>
<a id="message" href="">${a2}</a>
<h5 class="skill">${title5}</h5>

<div class="flex">
<p class="uix">${p}</p>
<p class="uix">${p2}</p>
<p class="uix">${p3}</p>
</div>

<div class="flex">
<p class="uix">${p4}</p>
<p class="uix">${p5}</p>
<p class="uix">${p6}</p>
<p class="uix">${p7}</p>
</div>

</div>

`
card2.innerHTML = crd;