const menus={
dagtid:{heading:"Något gott mitt i dagen.",intro:"Husmanskost, pasta, sallader och grillade smörgåsar.",groups:[
["Varmrätter","",[["Köttbullar i gräddsås","149","Kokt potatis, pressgurka och lingon."],["Stekt lax med citronsås","155","Med kokt potatis."],["Stekt fläsk med löksås","149","Med kokt potatis."]]],
["Pasta","Alla pastarätter innehåller grädde, paprika, lök och vitlök.",[["Kyckling i currysås","149",""],["Kyckling i pestosås","149",""],["Mozzarella i pestosås","149",""],["Räkpasta","149",""]]],
["Sallader","",[["Caesarsallad","149",""],["Chèvresallad","149",""],["Räksallad","149",""]]],
["Grillade smörgåsar","Serveras med sallad och dressing.",[["Ost och skinka","129",""],["Salami och brie","129",""],["Kyckling och tryffelmajo","129","Med soltorkad tomat."],["Kyckling och pesto","129","Med soltorkad tomat."],["Chèvreost och valnötter","129","Med soltorkad tomat."],["Mozzarella och pesto","129","Med soltorkad tomat."],["Jalapeños popper","129","Salami, jalapeños, srirachamajo och mozzarella."]]]
]},
kvall:{heading:"Låt kvällen ta sin tid.",intro:"Serveras från klockan 16.",groups:[
["Pasta","",[["Pasta Alfredo","189","Grillad kyckling, vitlök, gul lök, grädde, färskost, parmesan och dragon."],["Pasta Carbonara","189","Bacon, äggula, parmesan och nymalen svartpeppar."]]],
["Burgare","Välj chèvre eller halloumi i stället för kött för ett vegetariskt alternativ.",[["Captain’s Choice","198","160 g högrev, senap, ketchup, silverlök, salladgurka, dubbel cheddarost, bacon och majonnäs. Med pommes."],["Lucy’s Eriksberg","198","160 g högrev, sallad, tomat, dijonnäs, honungsgratinerad chèvre och rotfruktschips. Med pommes."]]],
["Klassiker","",[["BBQ-revben","245","BBQ-glaserade revben med pommes, coleslaw och BBQ-sås."],["Caesarsallad","149","Sallad, caesardressing, parmesan, tomat, bacon och krutonger. Välj kyckling eller räkor."]]],
["Snacks","",[["Korean Fried Chicken Bites","139","Friterad kyckling med gochujangsås, vårlök och rostade sesamfrön."],["Chili Cheese","89","Med sweet chili-dipp."],["Oliver","49","Gröna italienska oliver."]]]
]},
drinkar:{heading:"Ett glas, ditt sällskap.",intro:"Cocktails: 4 cl 138 kr · 6 cl 168 kr.",groups:[
["Spritz","",[["Aperol Spritz","","Aperol, prosecco, soda, apelsin."],["Hugo Spritz","","Fläderlikör, prosecco, soda, lime, mynta."],["Limoncello Spritz","","Limoncello, prosecco, soda, citron."]]],
["Gin","",[["Gin Tonic","","Gin, tonic, lime."],["Gin Fizz","","Gin, citronjuice, sockerlag, soda."],["Tom Collins","","Gin, citronjuice, sockerlag, soda."],["Fläder Collins","","Gin, flädersirap, citronjuice, soda."]]],
["Sour","",[["Whisky Sour","","Whisky, citronjuice, sockerlag, äggvita."],["Amaretto Sour","","Amaretto, citronjuice, sockerlag, äggvita."]]],
["Martini","",[["Espresso Martini","","Vodka, kaffelikör, espresso, sockerlag."],["Porn Star Martini","","Vodka, passionsfrukt, vaniljsocker, lime, prosecco."]]]
]},
dryck:{heading:"Något att skåla i.",intro:"Öl, vin, cider och alkoholfria alternativ.",groups:[
["Fatöl","40 cl.",[["Staropramen","89",""],["Eriksberg","85",""],["Pripps Blå","55",""]]],
["Flasköl","",[["Brooklyn","89",""],["Brooklyn Stonewall Inn IPA","82",""],["Kronenbourg Blanc","79",""],["Carlsberg Hof","69",""],["Eriksberg, 50 cl","79",""],["Falcon Export, 50 cl","82",""],["Glutenfri öl","79",""]]],
["Vin","Priser per glas / flaska.",[["Cava Brut","89 / 409",""],["Riesling","98 / 399",""],["Côtes du Rhône","98 / 399","Rött vin."],["Husets röda","89 / 389",""],["Husets vita","89 / 389",""],["Husets rosé","89 / 389",""]]],
["Alkoholfritt","",[["Alkoholfritt vin","79",""],["Alkoholfri cider","69",""],["Carlsberg, 0,5 %","49",""]]]
]}}
function renderMenu(id){const m=menus[id];const root=document.querySelector("#menu-content");root.innerHTML='<div class="menu-intro"><h3>'+m.heading+'</h3><p>'+m.intro+'</p></div>'+m.groups.map(g=>'<section class="menu-group"><h4>'+g[0]+'</h4>'+(g[1]?'<p class="menu-group-note">'+g[1]+'</p>':'')+g[2].map(d=>'<div class="dish"><span class="dish-name">'+d[0]+'</span><span class="dish-price">'+d[1]+'</span>'+(d[2]?'<span class="dish-desc">'+d[2]+'</span>':'')+'</div>').join('')+'</section>').join('')}
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(x=>{x.classList.remove("active");x.setAttribute("aria-selected","false")});btn.classList.add("active");btn.setAttribute("aria-selected","true");renderMenu(btn.dataset.menu)}))
renderMenu("dagtid")