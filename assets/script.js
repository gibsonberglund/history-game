//Middle East
//Africa
//East Asia
//Central Asia
//Europe
//Americas
//Oceania
//The Steppe


let siteTitle = document.querySelector('#sitetitle');

let backgroundImg = document.querySelector('#backgroundimg');

//HOMEPAGE

let homePagePrompt = "Choose A Realm";

let mideastThumb = "url('./assets/images/mideast-thumbnail.jpg')";
let americaThumb = "url('./assets/images/inca-thumbnail.jpg')";
let eastAsiaThumb = "url('./assets/images/chinese-thumbnail.jpg')";
let africaThumb = "url('./assets/images/yoruba-thumbnail.jpg')";
let euroThumb = "url('./assets/images/europe-thumbnail.jpg')";
let centralAsiaThumb = "url('./assets/images/seuna-thumbnail.jpg')";
let oceaniaThumb = "url('./assets/images/oceania-thumbnail.jpg')";
let steppeThumb = "url('./assets/images/steppe-thumbnail.jpg')";

let homePageThumbs = [mideastThumb, africaThumb, eastAsiaThumb, centralAsiaThumb, euroThumb, americaThumb, oceaniaThumb, steppeThumb];

let shorttext1 = `Middle East`;
let shorttext2 = `Africa`;
let shorttext3 = `East Asia`;
let shorttext4 = `Central Asia`;
let shorttext5 = `Europe`;
let shorttext6 = `Americas`;
let shorttext7 = `Oceania`;
let shorttext8 = `The Steppe`;

//MIDDLE EAST

let gobekli = "url('./assets/images/mideast/gobekli.jpg')";
let sumer = "url('./assets/images/mideast/sumer.jpg')";
let assyria = "url('./assets/images/mideast/assyria.jpg')";
let persia = "url('./assets/images/mideast/persia.jpg')";
let seleucid = "url('./assets/images/mideast/seleucid.jpg')";
let parthia = "url('./assets/images/mideast/parthia.jpg')";
let sassanid = "url('./assets/images/mideast/sassanid.jpg')";
let umayyad = "url('./assets/images/mideast/umayyad.jpg')";

let mideastImgs = [gobekli, sumer, assyria, persia, seleucid, parthia, sassanid, umayyad];

//Mideast page text
let mideastText1 = 'Prehistory 8000 - 3000 B.C.E.';
let mideastText2 = 'Sumeria 3000 - 2000 B.C.E.';
let mideastText3 = 'Assyria 2000 - 650 B.C.E.';
let mideastText4 = 'Persia 650 - 330 B.C.E.';
let mideastText5 = 'Seleucid 300 - 50 B.C.E.';
let mideastText6 = 'Parthia 50 B.C.E. - 300 C.E.';
let mideastText7 = 'Sassania - 300 - 650 C.E.';
let mideastText8 = 'Umayyad Caliphate 650 - 750 C.E.';

let mideastTexts =[mideastText1, mideastText2, mideastText3, mideastText4, mideastText5, mideastText6, mideastText7, mideastText8];

let mideastPreHistText = "Göbekli Tepe (Turkish: [ɟœbecˈli teˈpe], 'Potbelly Hill'; known as Girê Mirazan or Xirabreşkê in Kurdish) is a Neolithic archaeological site in the Southeastern Anatolia Region of Turkey. Dated to the Pre-Pottery Neolithic, between c. 9500 and 8000 BCE, the site comprises a number of large circular structures supported by massive stone pillars – the world's oldest known megaliths. Many of these pillars are richly decorated with figurative anthropomorphic details, clothing, and reliefs of wild animals, providing archaeologists rare insights into prehistoric religion and the particular iconography of the period. The 15 m (50 ft)-high, 8 ha (20-acre) tell also includes many smaller buildings, quarries, and stone-cut cisterns from the Neolithic, as well as some traces of activity from later periods. ";
let assyriaText = "Ashur-uballit I was the first native Assyrian ruler to claim the royal title šar ('king'). Shortly after achieving independence, he further claimed the dignity of a great king on the level of the Egyptian pharaohs and the Hittite kings. Assyria's rise was intertwined with the decline and fall of the Mitanni kingdom, its former suzerain, which allowed the early Middle Assyrian kings to expand and consolidate territories in northern Mesopotamia.";
let sumerText = "Sumer (/ˈsuːmər/) is the earliest known civilization in the historical region of southern Mesopotamia (south-central Iraq), emerging during the Chalcolithic and early Bronze Ages between the sixth and fifth millennium BC. It is one of the cradles of civilization in the world, along with ancient Egypt, Elam, the Caral-Supe civilization, Mesoamerica, the Indus Valley civilisation, and ancient China. Living along the valleys of the Tigris and Euphrates rivers, Sumerian farmers grew an abundance of grain and other crops, the surplus from which enabled them to form urban settlements. Proto-writing dates back to c. 4000 – c. 2500 BC. The earliest texts come from the cities of Uruk and Jemdet Nasr, and date to between c. 3350 – c. 2500 BC.";
let persiaText = "The Achaemenid Empire or Achaemenian Empire (/əˈkiːmənɪd/; Old Persian: 𐎧𐏁𐏂, Xšāça, lit. 'The Empire' or 'The Kingdom') was the ancient Iranian empire founded by Cyrus the Great in 550 BC, known also as the First Persian Empire. Based in Western Asia, it was the largest empire the world had ever seen at its time, spanning a total of 5.5 million square kilometres (2.1 million square miles) from the Balkans and Egypt in the west to Central Asia and the Indus Valley in the east.";
let seleucidText = "The Seleucid Empire (/sɪˈljuːsɪd/; Ancient Greek: Βασιλεία τῶν Σελευκιδῶν, romanized: Basileía tōn Seleukidōn, lit. 'Kingdom of the Seleucids') was a Hellenistic power in West Asia. It was founded in 312 BC by the Macedonian general Seleucus I Nicator, following the division of the Macedonian Empire founded by Alexander the Great, and ruled by the Seleucid dynasty until its annexation by the Roman Republic under Pompey in 63 BC."
let parthiaText = "The Parthian Empire (/ˈpɑːrθiən/), also known as the Arsacid Empire (/ˈɑːrsəsɪd/), was a major Iranian political and cultural power in ancient Iran from 247 BC to 224 AD. Its latter name comes from its founder, Arsaces I,who led the Parni tribe in conquering the region of Parthia in Iran's northeast, then a satrapy (province) under Andragoras, who was rebelling against the Seleucid Empire. Mithridates I (r. c. 171 – 132 BC) greatly expanded the empire by seizing Media and Mesopotamia from the Seleucids. At its height, the Parthian Empire stretched from the northern reaches of the Euphrates, in what is now central-eastern Turkey, to present-day Afghanistan and western Pakistan. The empire, located on the Silk Road trade route between the Roman Empire in the Mediterranean Basin and the Han dynasty of China, became a center of trade and commerce.";
let sasaniaText = "The Sasanian Empire (/səˈsɑːniən, səˈseɪniən/), officially known as Eranshahr ('Land/Empire of the Iranians'), was the last Iranian empire before the early Muslim conquests of the 7th–8th centuries AD. Named after the House of Sasan, it endured for over four centuries, from 224 to 651 AD, making it the longest-lived Persian imperial dynasty. The Sasanian Empire succeeded the Parthian Empire, and re-established the Persians as a major power in late antiquity alongside its neighbouring arch-rival, the Roman Empire (after 395 the Byzantine Empire)";
let umayyadText = "The Umayyad Caliphate (661–750 CE) was the second caliphate established after the death of the Islamic prophet Muhammad. The caliphate was ruled by the Umayyad dynasty, also known as the Umayyads (Arabic: ٱلْأُمَوِيُّون, al-ʾUmawīyūn, or بَنُو أُمَيَّة, Banū ʾUmayya, 'Sons of Umayya'). Uthman ibn Affan (r. 644–656), the third of the Rashidun caliphs, was also a member of the clan. The family established dynastic, hereditary rule with Muawiya ibn Abi Sufyan, long-time governor of Greater Syria, who became caliph after the end of the First Fitna in 661. After Mu'awiya's death in 680, conflicts over the succession resulted in the Second Fitna, and power eventually fell to Marwan I, from another branch of the clan. Syria remained the Umayyads' main power base thereafter, with Damascus as their capital.";

let midEastInfoTexts = [mideastPreHistText, sumerText, assyriaText, persiaText, seleucidText, parthiaText, sasaniaText, umayyadText];

//AFRICA
let sphinx = "url('./assets/images/africa/sphinx.jpg')";
let tichitt = "url('./assets/images/africa/dhartichitt.png')";
let kush = "url('./assets/images/africa/Kush_civilization.jpg')";
let carthage = "url('./assets/images/africa/Grand-Port-of-Carthage.jpg')";
let numidia = "url('./assets/images/africa/numidia.png')";
let aksum = "url('./assets/images/africa/aksum.jpg')";
let sungbo = "url('./assets/images/africa/SungboEredo.jpg')";
let songhay = "url('./assets/images/africa/songhay.jpg')";

let africaImgs = [sphinx, tichitt, kush, carthage, numidia, aksum, sungbo, songhay];

let africaDate1 = "Egypt 3000 - 800 B.C.";
let africaDate2 = "Tichitt culture 2500 - 500 B.C.";
let africaDate3 = "Kingdom of Kush 1000 B.C. - 500 A.D.";
let africaDate4 = "Carthage 1000 - 150 B.C.";
let africaDate5 = "Numidia 200 - 50 B.C.";
let africaDate6 = "Kingdom of Aksum 150 B.C. - 950 A.D.";
let africaDate7 = "Oyo (Yoruba) Empire 1300 - 1700 A.D.";
let africaDate8 = "Songhay Empire 1450 - 1600 A.D.";

let africaDates = [africaDate1, africaDate2, africaDate3, africaDate4, africaDate5, africaDate6, africaDate7, africaDate8];

let egyptText = "Ancient Egypt was a civilization in Northeast Africa situated in the Nile Valley. Ancient Egyptian civilization followed prehistoric Egypt and coalesced around 3100 BC (according to conventional Egyptian chronology) with the political unification of Upper and Lower Egypt under Menes (often identified with Narmer). The history of ancient Egypt occurred as a series of stable kingdoms, separated by periods of relative instability known as Intermediate Periods: the Old Kingdom of the Early Bronze Age, the Middle Kingdom of the Middle Bronze Age and the New Kingdom of the Late Bronze Age.";
let tichittText = "The Tichitt Culture, or Tichitt Tradition, was created by proto-Mande peoples. In 4000 BCE, the start of sophisticated social structure (e.g., trade of cattle as valued assets) developed among herders amid the Pastoral Period of the Sahara. Saharan pastoral culture (e.g., fields of tumuli, lustrous stone rings, axes) was intricate. By 1800 BCE, Saharan pastoral culture expanded throughout the Saharan and Sahelian regions. The initial stages of sophisticated social structure among Saharan herders served as the segue for the development of sophisticated hierarchies found in African settlements, such as Dhar Tichitt After migrating from the Central Sahara, proto-Mande peoples established their civilization in the Tichitt region of the Western Sahara. The Tichitt Tradition of eastern Mauritania dates from 2200 BCE to 200 BCE.";
let kushText = "The region of Nubia was an early cradle of civilization, producing several complex societies that engaged in trade and industry. The city-state of Kerma emerged as the dominant political force between 2450 and 1450 BC, controlling the Nile Valley between the first and fourth cataracts, an area as large as Egypt. The Egyptians were the first to identify Kerma as 'Kush' and over the next several centuries the two civilizations engaged in intermittent warfare, trade, and cultural exchange."
let carthageText = "The Punic people, or Carthaginians, also known as Western Phoenicians, were a Semitic people in the Western Mediterranean who migrated from Tyre, Phoenicia to North Africa during the Early Iron Age. In modern scholarship, the term Punic, the Latin equivalent of the Greek-derived term Phoenician, is exclusively used to refer to Phoenicians in the western Mediterranean, following the line of the Greek East and Latin West.";
let numidiaText = "Numidia was the ancient kingdom of the Numidians located in northwest Algeria, but later expanding across what is today known as Tunisia, Libya, and some parts of Morocco. Numidia is considered to be the first State of Algeria . The polity was originally divided between the Massylii in the east and the Masaesyli in the west. During the Second Punic War (218–201 BC), Masinissa, king of the Massylii, defeated Syphax of the Masaesyli to unify Numidia into one kingdom. The kingdom began as a sovereign state and later alternated between being a Roman province and a Roman client state.";
let askumText = "The Kingdom of Aksum (Ge'ez: መንግሥተ አኵስም, Sabaean: 𐩱𐩫𐩪𐩣, Ancient Greek: Ἀξωμίτης), also known as the Kingdom of Axum , the City-State of Axum, or the Aksumite Empire, was centered in Northeast Africa and South Arabia from Classical antiquity to the Middle Ages. Based primarily in what is now northern Ethiopia, and spanning modern-day Eritrea, Djibouti and Sudan, it extended at its height into much of Southern Arabia during the reign of Saint Elesbaan, King of Axum.";
let yorubaText = "The historical Yoruba develop in ṣitu, out of earlier Mesolithic Volta-Niger populations, by the 1st millennium BCE. Oral history recorded under the Oyo Empire derives the Yoruba as an ethnic group from the population of the older kingdom of Ile-Ife. The Yoruba were the dominant cultural force in southern and northwestern Nigeria as far back as the 11th century";
let songhayText = "The Songhai Empire (also transliterated as Songhay) was a state located in the western part of the Sahel during the 15th and 16th centuries. At its peak, it was one of the largest African empires in history. The state is known by its historiographical name, derived from its largest ethnic group and ruling elite, the Songhai people. Sonni Ali established Gao as the empire's capital, although a Songhai state had existed in and around Gao since the 11th century. Other important cities in the kingdom were Timbuktu and Djenné, where urban-centred trade flourished; they were conquered in 1468 and 1475, respectively. The Akan state of Bonoman was located to the south of the empire. Initially, the Songhai Empire was ruled by the Sonni dynasty (c. 1464–1493), but it was later replaced by the Askia dynasty (1493–1901).";

let africaTexts = [egyptText, tichittText, kushText, carthageText, numidiaText, askumText, yorubaText, songhayText];

//NORTH ASIA
let northasiaDate1 = "Prehistory and Xia Dynasty 6000 - 1800 B.C.";
let northasiaDate2 = "Shang Dynasty and Zhou Dynasty 1800 - 600 B.C.";
let northasiaDate3 = "Han Dynasty 200 B.C. - 200 A.D.";
let northasiaDate4 = "Three Kingdoms Period of Korea 50 B.C. - 650 A.D.";
let northasiaDate5 = "Tang Dynasty 600 - 900 A.D.";
let northasiaDate6 = "Heian Period 800 - 1200 A.D.";
let northasiaDate7 = "Song Dynasty 950 - 1300 A.D.";
let northasiaDate8 = "Kamakura Period and Muromachi Period 1200 - 1550 A.D.";

let northasiaDates = [northasiaDate1, northasiaDate2, northasiaDate3, northasiaDate4, northasiaDate5, northasiaDate6, northasiaDate7, northasiaDate8];

let xiaImg = "url('./assets/images/northasia/King_Yu_of_Xia_web.jpg')";
let shangImg = "url('./assets/images/northasia/elephant.jpg')";
// let zhou = "url('./assets/images/eastasia/zhou.jpg')";
// let qin = "url('./assets/images/eastasia/qin.jpg')";
let hanImg = "url('./assets/images/northasia/han.jpg')";
let threekingdomsImg = "url(./assets/images/northasia/three-kingdoms.jpg)";
let tangImg = "url('./assets/images/northasia/tang.jpg')";
let heainImg = "url('./assets/images/northasia/heian.jpg')";
let songImg = "url('./assets/images/northasia/song.jpg')";
let feudalJapanImg = "url('./assets/images/northasia/feudaljapan.jpg')";

let northasiaImgs = [xiaImg, shangImg, hanImg, threekingdomsImg, tangImg, heainImg, songImg, feudalJapanImg];

let xiaText = "The Xia dynasty (Chinese: 夏朝; pinyin: Xiàcháo; Wade–Giles: Hsia4-ch‘ao2) is the first dynasty in traditional Chinese historiography. According to tradition, the Xia dynasty was established by the legendary Yu the Great, after Shun, the last of the Five Emperors, gave the throne to him. In traditional historiography, the Xia was later succeeded by the Shang dynasty.";
let shangZhouText = "The Shang ruled the plain of the Yellow River in eastern China from the 17th to the 11th century BCE. Their oracle bone script (from c. 1500 BCE) represents the oldest form of Chinese writing yet found[51] and is a direct ancestor of modern Chinese characters. The Shang was conquered by the Zhou, who ruled between the 11th and 5th centuries BCE, though centralized authority was slowly eroded by feudal warlords. Some principalities eventually emerged from the weakened Zhou, no longer fully obeyed the Zhou king, and continually waged war with each other during the 300-year Spring and Autumn period.";
let hanText = "The Han dynasty emerged to rule China between 206 BCE and CE 220, creating a cultural identity among its populace still remembered in the ethnonym of the Han Chinese. The Han expanded the empire's territory considerably, with military campaigns reaching Central Asia, Mongolia, South Korea, and Yunnan, and the recovery of Guangdong and northern Vietnam from Nanyue. Han involvement in Central Asia and Sogdia helped establish the land route of the Silk Road, replacing the earlier path over the Himalayas to India. Han China gradually became the largest economy of the ancient world.";
let threeKingdomsText = "The Three Kingdoms of Korea or Samhan (Goguryeo, Baekje and Silla) competed for hegemony over the Korean Peninsula during the ancient period of Korean history. During the Three Kingdoms period (Korean: 삼국시대; Hanja: 三國時代; RR: Samguk-sidae), many states and statelets consolidated until, after Buyeo was annexed in 494 and Gaya was annexed in 562, only three remained on the Korean Peninsula: Goguryeo, Baekje and Silla. The 'Korean Three Kingdoms' (Goguryeo, Baekje and Silla) contributed to what would become Korea; and the Goguryeo, Baekje and Silla peoples became what we know as the Korean people.";
let tangText = "The Tang capital at Chang'an (present-day Xi'an) was then the world's most populous city. Two censuses of the 7th and 8th centuries estimated the empire's population at about 50 million people, which grew to an estimated 80 million by the dynasty's end. From its numerous subjects, the dynasty raised professional and conscripted armies of hundreds of thousands of troops to contend with nomadic powers for control of Inner Asia and the lucrative trade-routes along the Silk Road. Far-flung kingdoms and states paid tribute to the Tang court, while the Tang also indirectly controlled several regions through a protectorate system. In addition to its political hegemony, the Tang exerted a powerful cultural influence over neighboring East Asian nations such as Japan and Korea.";
let heainText = "The Heian period (平安時代, Heian jidai) is the last division of classical Japanese history, running from 794 to 1185. It followed the Nara period, beginning when the 50th emperor, Emperor Kammu, moved the capital of Japan to Heian-kyō (modern Kyoto). Heian (平安) means 'peace' in Japanese. It is a period in Japanese history when the Chinese influences were in decline and the national culture matured. The Heian period is also considered the peak of the Japanese imperial court and noted for its art, especially poetry and literature. Two types of Japanese script emerged, including katakana, a phonetic script which was abbreviated into hiragana, both unique alphabets distinctive to Japan. This gave rise to Japan's famous vernacular literature, with many of its texts written by court women who were not as educated in Chinese compared to their male counterparts.";
let songText = "Technology, science, philosophy, mathematics, and engineering flourished during the Song era. The Song dynasty was the first in world history to issue banknotes or true paper money and the first Chinese government to establish a permanent standing navy. This dynasty saw the first recorded chemical formula of gunpowder, the invention of gunpowder weapons such as fire arrows, bombs, and the fire lance. It also saw the first discernment of true north using a compass, first recorded description of the pound lock, and improved designs of astronomical clocks.";
let feudalJapanText = "Japan's feudal era was characterized by the emergence and dominance of a ruling class of warriors, the samurai. In 1185, following the defeat of the Taira clan by the Minamoto clan in the Genpei War, samurai Minamoto no Yoritomo established a military government at Kamakura. After Yoritomo's death, the Hōjō clan came to power as regents for the shōgun. The Zen school of Buddhism was introduced from China in the Kamakura period (1185–1333) and became popular among the samurai class. The Kamakura shogunate repelled Mongol invasions in 1274 and 1281 but was eventually overthrown by Emperor Go-Daigo. Go-Daigo was defeated by Ashikaga Takauji in 1336, beginning the Muromachi period (1336–1573). The succeeding Ashikaga shogunate failed to control the feudal warlords (daimyō) and a civil war began in 1467, opening the century-long Sengoku period ('Warring States').";

let northasiaTexts = [xiaText, shangZhouText, hanText, threeKingdomsText, tangText, heainText, songText, feudalJapanText];

//SOUTH ASIA
let southasiaDate6 = "Khmer Empire 800 - 1400 A.D.";
let southasiaDate8 = "Majapahit Empire 1300 - 1550 A.D.";

let khmerImg = "url('./assets/images/eastasia/han.jpg')";
let majapahitImg = "url('./assets/images/eastasia/han.jpg')";

let khmerText = "The Khmer Empire was a Hindu-Buddhist empire in Southeast Asia, centered around hydraulic cities in what is now northern Cambodia. Known as Kambuja by its inhabitants, it grew out of the former civilisation of Chenla and lasted from 802 to 1431. Historians call this period of Cambodian history the Angkor period, after the empire's most well-known capital, Angkor. The Khmer Empire ruled or vassalised most of mainland Southeast Asia and stretched as far north as southern China. At its peak, the Empire was larger than the Byzantine Empire, which existed around the same time.";
let majahapitText = "Majapahit (Javanese: ꦩꦗꦥꦲꦶꦠ꧀; Javanese pronunciation: [madʒapaɪt]), also known as Wilwatikta (Javanese: ꦮꦶꦭ꧀ꦮꦠꦶꦏ꧀ꦠ; Javanese pronunciation: [wɪlwatɪkta]), was a Javanese Hindu-Buddhist thalassocratic empire in Southeast Asia that was based on the island of Java (in modern-day Indonesia). It existed from 1293 to circa 1527 and reached its peak of glory during the era of Hayam Wuruk, whose reign from 1350 to 1389 was marked by conquests that extended throughout Southeast Asia. His achievement is also credited to his prime minister, Gajah Mada. According to the Nagarakretagama (Desawarñana) written in 1365, Majapahit was an empire of 98 tributaries, stretching from Sumatra to New Guinea";

//EUROPE

let stonehenge = "url('./assets/images/europe/stonehenge.jpg')";
let minoa = "url('./assets/images/europe/minoan.jpg')";
let athens = "url('./assets/images/europe/athens.jpg')";
let macedon = "url('./assets/images/europe/macedon.jpg')";
let rome = "url('./assets/images/europe/rome.jpg')";
let viking = "url('./assets/images/europe/viking.jpg')";
let medieval = "url('./assets/images/europe/castle.jpg')";
let rennaisance = "url('./assets/images/europe/ships.jpg')";

let europeImgs = [stonehenge, minoa, athens, macedon, rome, viking, medieval, rennaisance];

let europeText1 = 'Prehistory 8000 - 3000 B.C.';
let europeText2 = 'Minoa and Mycenae 2000 - 1300 B.C.';
let europeText3 = 'Penelopesian States 800 - 330 B.C.';
let europeText4 = 'Helenistic Period 330 - 50 B.C.';
let europeText5 = 'Roman Republic and Empire 250 B.C. - 400 A.D.';
let europeText6 = 'The Dark Age 500 - 1000 A.D.';
let europeText7 = 'Medieval Age 1000 - 1500 A.D.';
let europeText8 = 'Age Of Exploration 1500 - 1800 A.D.';

let europeTexts = [europeText1, europeText2, europeText3, europeText4, europeText5, europeText6, europeText7, europeText8];

let euroPreHistText = "The New Stone Age, or Neolithic era, began with the introduction of farming, ultimately from the Middle East, around 4000 BC. It is not known whether this was caused by a substantial folk movement or native adoption of foreign practices or both. People began to lead a more settled lifestyle. Monumental collective tombs were built for the dead in the form of chambered cairns and long barrows. Towards the end of the period, other kinds of monumental stone alignments begin to appear, such as Stonehenge; their cosmic alignments show a preoccupation with the sky and planets. Flint technology produced a number of highly artistic pieces as well as purely pragmatic. More extensive woodland clearance was done for fields and pastures. The Sweet Track in the Somerset Levels is one of the oldest timber trackways known in Northern Europe and among the oldest roads in the world, dated by dendrochronology to the winter of 3807–3806 BC; it too is thought to have been a primarily religious structure.[7] Archaeological evidence from North Yorkshire indicates that salt was being manufactured there in the Neolithic.[9]";

let euroRomeText = "The Roman Empire[a] was the post-Republican state of ancient Rome. It included territory around the Mediterranean in Europe, North Africa, and Western Asia, and was ruled by emperors. The adoption of Christianity as the state church in 380 and the fall of the Western Roman Empire conventionally marks the end of classical antiquity and the beginning of the Middle Ages.";

//main text display variable
let maintextDisplay = document.querySelector('#maintextdisplay');

let centerPrompt = document.querySelector('#centerprompt');
// let aboutAuthorBtn = document.querySelector('#aboutauthorbtn');

//Author page
// let authorInfo = document.querySelector('#authorinfo'); 
// let authorPage = document.querySelector('#authorpage');
// let profilePic = document.querySelector('#profilepic');
// let contactBtn = document.querySelector('#contactbtn');
// let webDevLink = document.querySelector('#webdevlink');


//create a variable that stores the 'page' id
//when a button is clicked, update the page id
//use if/else loop to choose which function (to replace the content in the buttons) will fire


let pageId = "homepage";

let text1Card = document.querySelector('#text1card');
let text2Card = document.querySelector('#text2card');
let text3Card = document.querySelector('#text3card');
let text4Card = document.querySelector('#text4card');
let text5Card = document.querySelector('#text5card');
let text6Card = document.querySelector('#text6card');
let text7Card = document.querySelector('#text7card');
let text8Card = document.querySelector('#text8card');

let textCards = [text1Card, text2Card, text3Card, text4Card, text5Card, text6Card, text7Card, text8Card];

let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let text3 = document.querySelector('#text3');
let text4 = document.querySelector('#text4');
let text5 = document.querySelector('#text5');
let text6 = document.querySelector('#text6');
let text7 = document.querySelector('#text7');
let text8 = document.querySelector('#text8');

let texts = [text1, text2, text3, text4, text5, text6, text7, text8];

let seeMoreBtn = document.querySelector("#seemorebtn");

let shorttexts = [shorttext1, shorttext2, shorttext3, shorttext4, shorttext5, shorttext6, shorttext7, shorttext8];

window.onload = homePage();


//HOMEPAGE
function homePage() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = homePageThumbs[i];
    textCards[i].setAttribute('class', 'textcard');
    texts[i].textContent = shorttexts[i];
    centerPrompt.textContent = homePagePrompt;
    centerPrompt.setAttribute('style', 'inherit');
    seeMoreBtn.style.display = "none";
    backgroundImg.setAttribute('class', 'backgroundimg');
    pageId = "homepage";
  };

};

//MIDDLE EAST PAGE
function midEast() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = mideastImgs[i];
    centerPrompt.textContent = "Middle East";
    texts[i].textContent = mideastTexts[i];
    pageId = "mideast";
    backgroundImg.setAttribute('class', 'backgroundmideast');
  };
};

//AFRICA PAGE
function africa() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = africaImgs[i];
    centerPrompt.textContent = "Africa";
    texts[i].textContent = africaDates[i];
    pageId = "africa";
    backgroundImg.setAttribute('class', 'backgroundafrica');
  };
};

//NORTH ASIA PAGE
function northAsia() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = northasiaImgs[i];
    centerPrompt.textContent = "North Asia";
    texts[i].textContent = northasiaDates[i];
    pageId = "northasia";
    backgroundImg.setAttribute('class', 'backgroundnorthasia');
  };
};

//EUROPE PAGE
function europe() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = europeImgs[i];
    centerPrompt.textContent = "Europe";
    texts[i].textContent = europeTexts[i];
    pageId = "europe";
    backgroundImg.setAttribute('class', 'backgroundeurope');
  };
};

function euroPreHist() {
  infoDisplay();
  text1Card.setAttribute('class', 'infocard');
  centerPrompt.textContent = euroPreHistText;
};

function romeInfo() {
  infoDisplay();
  text5Card.setAttribute('class', 'infocard');
  centerPrompt.textContent = euroRomeText;
};


//Sets display for individual society's info
function infoDisplay(infoId) {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].setAttribute('class', 'smallbubble');
  };
  centerPrompt.setAttribute('style', 'font-size: 18px;');
  textCards[infoId].setAttribute('class', 'infocard');

  if (pageId === "mideast") {
    centerPrompt.textContent = midEastInfoTexts[infoId];
  } else if (pageId === "africa") {
    centerPrompt.textContent = africaTexts[infoId];
  } else if (pageId === "northasia") {
    centerPrompt.textContent = northasiaTexts[infoId];
  } else if (pageId === "europe") {
    centerPrompt.textContent = europeTexts[infoId];
  }

//TO REFACTOR
//If else inside of infoDisplay
//uses pageId to choose correct array
//uses infoId to itirate to the right position of the array

};


//textCARD 1
//set variables



// let modal1 = document.querySelector('#modal1');
// let modalContent1 = document.querySelector('#modalcontent1');
// let text1Button = document.querySelector('#text1button');

// let aboutButton1 = document.querySelector('#aboutbutton1');

siteTitle.addEventListener('click', function() {
  console.log('are you there');
  homePage();
})

seeMoreBtn.addEventListener('click', function(event) {
  event.preventDefault();

})

let infoId

//listens for click on one of the text cards
text1Card.addEventListener('click', function(event) {
    event.preventDefault();
    infoId = 0;
    if (pageId === "homepage") {
      midEast();
    } else {
      infoDisplay(infoId)
    }
});

text2Card.addEventListener('click', function(event) {
  event.preventDefault();
  infoId = 1;
  if (pageId === "homepage") {
    africa();
  } else {
    infoDisplay(infoId);
  }
});

text3Card.addEventListener('click', function(event) {
  event.preventDefault();
  infoId = 2;
  if (pageId === "homepage") {
    northAsia();
  } else {
    infoDisplay(infoId);
    // if (pageId === "mideast") {
    //   centerPrompt.textContent = assyriaText;
    // } else if (pageId === "europe") {
    //   euroPreHist();
    // }
  }
});

text4Card.addEventListener('click', function(event) {
  event.preventDefault();
  infoId = 3;
  if (pageId === "homepage") {
    centralAsia();
  } else {
    infoDisplay(infoId);
    // if (pageId === "mideast") {
    //   centerPrompt.textContent = persiaText;
    // } else if (pageId === "europe") {
    //   helenistic();
    // }
  }
});

text5Card.addEventListener('click', function (event) {
  event.preventDefault();
  infoId = 4;
  if (pageId === "homepage") {
    europe();
  } else {
    infoDisplay(infoId);
    // if (pageId === "mideast") {
    //   centerPrompt.textContent = seleucidText;
    // } else if (pageId === "europe") {
    //   romeInfo();
    // }
  }
});

text6Card.addEventListener('click', function (event) {
  event.preventDefault();
  infoId = 5;
  if (pageId === "homepage") {
    americaInfo();
  } else {
    infoDisplay(infoId);
    // if (pageId === "mideast") {
    //   centerPrompt.textContent = parthiaText;
    // } else if (pageId === "europe") {
    //   darkageInfo();
    // }
  }
});

text7Card.addEventListener('click', function (event) {
  event.preventDefault();
  infoId = 6;
  if (pageId === "homepage") {
    oceania();
  } else {
    infoDisplay(infoId);
    // if (pageId === "mideast") {
    //   centerPrompt.textContent = sasaniaText;
    // } else if (pageId === "europe") {
    //   medievalInfo();
    // }
  }
});

text8Card.addEventListener('click', function (event) {
  event.preventDefault();
  infoId = 7;
  if (pageId === "homepage") {
    thesteppe();
  } else {
    infoDisplay(infoId);
    // if (pageId === "mideast") {
    //   centerPrompt.textContent = umayyadText;
    // } else if (pageId === "europe") {
    //   colonizationInfo();
    // }
  }
});


//listens on 'Keep Reading' button
// text1Button.addEventListener('click', function() {
//     openModal();
//     window.onclick = function(event) {
//       if (event.target == modal1) {
//         modal1.style.display = "none";
//         centerPrompt.setAttribute('class', 'inherit');
//       }
//     }
// });

// aboutButton1.addEventListener('click', function() {
//   abouttext();
// });

//textCARD 2

let modal2 = document.querySelector('#modal2');
let modalContent2 = document.querySelector('#modalcontent2');
let text2Button = document.querySelector('#text2button');

let aboutButton2 = document.querySelector('#aboutbutton2');




  text2Card.addEventListener('click', function(event) {
    closeAnyOpen();
    midtext(event.target);
});

text2Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

  aboutButton2.addEventListener('click', function() {
    abouttext();
  });
  
//textCARD 3

let modal3 = document.querySelector('#modal3');
let modalContent3 = document.querySelector('#modalcontent3');
let text3Button = document.querySelector('#text3button');

let aboutButton3 = document.querySelector('#aboutbutton3');




  text3Card.addEventListener('click', function(event) {
    closeAnyOpen();
    midtext(event.target);
});

text3Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton3.addEventListener('click', function() {
  abouttext();
});


//textCARD 4

let modal4 = document.querySelector('#modal4');
let modalContent4 = document.querySelector('#modalcontent4');
let text4Button = document.querySelector('#text4button');

let aboutButton4 = document.querySelector('#aboutbutton4');



  text4Card.addEventListener('click', function(event) {
    closeAnyOpen();
    midtext(event.target);
});

text4Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal4) {
        modal4.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton4.addEventListener('click', function() {
  abouttext();
});

//textCARD 5

let modal5 = document.querySelector('#modal5');
let modalContent5 = document.querySelector('#modalcontent5');
let text5Button = document.querySelector('#text5button');

let aboutButton5 = document.querySelector('#aboutbutton5');



  text5Card.addEventListener('click', function(event) {
    closeAnyOpen();
    midtext(event.target);
});

text5Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal5) {
        modal5.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton5.addEventListener('click', function() {
  abouttext();
});

//text 6

let modal6 = document.querySelector('#modal6');
let modalContent6 = document.querySelector('#modalcontent6');
let text6Button = document.querySelector('#text6button');

let aboutButton6 = document.querySelector('#aboutbutton6');



//listens for click on one of the text cards
text6Card.addEventListener('click', function(event) {
//changes size and content when clicked
    closeAnyOpen();
    midtext(event.target);
});

//listens for click on 'keep reading' button
text6Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton6.addEventListener('click', function() {
  abouttext();
});

//textCARD 7
//set variables

let modal7 = document.querySelector('#modal7');
let modalContent7 = document.querySelector('#modalcontent7');
let text7Button = document.querySelector('#text7button');

let aboutButton7 = document.querySelector('#aboutbutton7');




//listens for click on one of the text cards
text7Card.addEventListener('click', function(event) {
//changes size and content when clicked
    closeAnyOpen();
    midtext(event.target);
});

//listens for click on 'keep reading' button
text7Button.addEventListener('click', function() {
    openModal();
    window.onclick = function(event) {
      if (event.target == modal7) {
        modal7.style.display = "none";
        centerPrompt.setAttribute('class', 'inherit');
      }
    }
});

aboutButton7.addEventListener('click', function() {
  abouttext();
});

//textCARD 8
//set variables

let modal8 = document.querySelector('#modal8');
let modalContent8 = document.querySelector('#modalcontent8');
let text8Button = document.querySelector('#text8button');

let aboutButton8 = document.querySelector('#aboutbutton8');




//listens for click on one of the text cards
text8Card.addEventListener('click', function(event) {
//changes size and content when clicked
    closeAnyOpen();
    if (text8.textContent === 'CONTACT ME') {
      contactMe();
    } else {
    midtext(event.target);
    }
});

//listens for click on 'keep reading' button
text8Button.addEventListener('click', function() {
  openModal();
  window.onclick = function(event) {
    if (event.target == modal8) {
      modal8.style.display = "none";
      centerPrompt.setAttribute('class', 'inherit');
    }
  }
});

aboutButton8.addEventListener('click', function() {
  abouttext();
});

// var shufflePuzzle = document.querySelector('#shufflepuzzle');

// $('.shufflepuzzle').sortable({
//   grid: [1, 4]
// });




let modals = [modal1, modal2, modal3, modal4, modal5, modal6, modal7, modal8];
let modalContents = [modalContent1, modalContent2, modalContent3, modalContent4, modalContent5, modalContent6, modalContent7, modalContent8];
let midtexts = [midtext1, midtext2, midtext3, midtext4, midtext5, midtext6, midtext7, midtext8];

let longtexts = [longtext1, longtext2, longtext3, longtext4, longtext5, longtext6, longtext7, longtext8];
let textButtons = [text1Button, text2Button, text3Button, text4Button, text5Button, text6Button, text7Button, text8Button];
let aboutButtons = [aboutButton1, aboutButton2, aboutButton3, aboutButton4, aboutButton5, aboutButton6, aboutButton7, aboutButton8];
let abouttexts = [abouttext1, abouttext2, abouttext3, abouttext4, abouttext5, abouttext6, abouttext7, abouttext8];

//FOR REFACTOR: REUSE THE SAME text BTN AND ABOUT BTN

function closeAnyOpen() {
  for(var i=0; i < texts.length; i++) {
    if (texts[i].textContent === midtexts[i]) {
      texts[i].textContent = shorttexts[i];
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
      texts[i].setAttribute('style', 'color: inherit');
    } else if (texts[i].textContent === abouttexts[i]) {
      texts[i].textContent = shorttexts[i];
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
      texts[i].setAttribute('style', 'color: inherit');
    } else if (texts[i].textContent === authorBlurb) {
      texts[i].textContent = shorttexts[i];
      texts[i].setAttribute('style', 'color: inherit');
      profilePic.setAttribute('class', 'hidden');
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
      contactBtn.setAttribute('class', 'hidden');
    };
  }
};


//DON'T NEED TO USE A NEW MODAL FOR EACH ONE
//REUSE THE SAME MODAL AND SWITCH THE TEXTCONTENT
function openModal() {
  for(var i=0; i < texts.length; i++) {
    if (texts[i].textContent === midtexts[i]) {
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
    //displays modal with text content
      modals[i].style.display = "flex";
      modalContents[i].textContent = longtexts[i];
    //reverts text card to original state
      texts[i].textContent = shorttexts[i];
      textCards[i].setAttribute('style', 'max-width: 250px');
    }
  }
};

function abouttext() {
  for(var i=0; i < texts.length; i++) {
    if (texts[i].textContent === midtexts[i]) {
      textButtons[i].setAttribute('class', 'hidden');
      aboutButtons[i].setAttribute('class', 'hidden');
      textCards[i].setAttribute('style', 'max-width: 400px');
      texts[i].setAttribute('style', 'color: black');
      texts[i].textContent = abouttexts[i];
      aboutAuthorBtn.setAttribute('class', 'button');
    }
  }
};

function midtext(event) {
  for(var i=0; i < texts.length; i++) {
    if (event === textCards[i] || event === texts[i]) {
    centerPrompt.setAttribute('class', 'hidden');
    texts[i].textContent = midtexts[i];
    textButtons[i].setAttribute('class', 'button');
    aboutButtons[i].setAttribute('class', 'button');
    textCards[i].setAttribute('style', 'max-width: 550px');
    texts[i].setAttribute('style', 'color: black');
    }
  }
};

let formEmail = document.querySelector('#formemail');
let formName = document.querySelector('#formname');
let formMessage = document.querySelector('#formmessage');
let contactSubBtn = document.querySelector('#formsubmit');

function contactMe() {
  for(var i=0; i < textCards.length; i++) {
    textCards[i].setAttribute('class', 'hidden');
  }
  formEmail.setAttribute('class', 'contactform');
  formEmail.textContent = 'Email';
  formName.setAttribute('class', 'contactform');
  formName.textContent = 'Name';
  formMessage.setAttribute('class', 'contactform');
  formMessage.textContent = 'Message';
  contactSubBtn.setAttribute('class', 'button');
  //displayForm();
};


//Start the game


let question1texts = [text1Q1, text2Q2];

