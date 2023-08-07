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
let shorttext4 = `South Asia`;
let shorttext5 = `Europe`;
let shorttext6 = `Americas`;
let shorttext7 = `Coming Soon`;
let shorttext8 = `Coming Soon`;

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
let mideastText5 = 'Helenistic Period 300 - 50 B.C.E.';
let mideastText6 = 'Parthia 50 B.C.E. - 300 C.E.';
let mideastText7 = 'Sassania - 300 - 650 C.E.';
let mideastText8 = 'Umayyad Caliphate 650 - 750 C.E.';

let mideastTexts =[mideastText1, mideastText2, mideastText3, mideastText4, mideastText5, mideastText6, mideastText7, mideastText8];

let mideastPreHistText = "Göbekli Tepe (Turkish: [ɟœbecˈli teˈpe], 'Potbelly Hill'; known as Girê Mirazan or Xirabreşkê in Kurdish) is a Neolithic archaeological site in the Southeastern Anatolia Region of Turkey. Dated to the Pre-Pottery Neolithic, between c. 9500 and 8000 BCE, the site comprises a number of large circular structures supported by massive stone pillars – the world's oldest known megaliths. Many of these pillars are richly decorated with figurative anthropomorphic details, clothing, and reliefs of wild animals, providing archaeologists rare insights into prehistoric religion and the particular iconography of the period. The 15 m (50 ft)-high, 8 ha (20-acre) tell also includes many smaller buildings, quarries, and stone-cut cisterns from the Neolithic, as well as some traces of activity from later periods. ";
let assyriaText = "Ashur-uballit I was the first native Assyrian ruler to claim the royal title šar ('king'). Shortly after achieving independence, he further claimed the dignity of a great king on the level of the Egyptian pharaohs and the Hittite kings. Assyria's rise was intertwined with the decline and fall of the Mitanni kingdom, its former suzerain, which allowed the early Middle Assyrian kings to expand and consolidate territories in northern Mesopotamia.";
let sumerText = "Sumer (/ˈsuːmər/) is the earliest known civilization in the historical region of southern Mesopotamia (south-central Iraq), emerging during the Chalcolithic and early Bronze Ages between the sixth and fifth millennium BC. It is one of the cradles of civilization in the world, along with ancient Egypt, Elam, the Caral-Supe civilization, Mesoamerica, the Indus Valley civilisation, and ancient China. Living along the valleys of the Tigris and Euphrates rivers, Sumerian farmers grew an abundance of grain and other crops, the surplus from which enabled them to form urban settlements. Proto-writing dates back to c. 4000 – c. 2500 BC. The earliest texts come from the cities of Uruk and Jemdet Nasr, and date to between c. 3350 – c. 2500 BC.";
let persiaText = "The Achaemenid Empire or Achaemenian Empire (/əˈkiːmənɪd/; Old Persian: 𐎧𐏁𐏂, Xšāça, lit. 'The Empire' or 'The Kingdom') was the ancient Iranian empire founded by Cyrus the Great in 550 BC, known also as the First Persian Empire. Based in Western Asia, it was the largest empire the world had ever seen at its time, spanning a total of 5.5 million square kilometres (2.1 million square miles) from the Balkans and Egypt in the west to Central Asia and the Indus Valley in the east.";
let helenisticText = "The period from the death of Alexander the Great in 323 until the death of Cleopatra VII, the last Macedonian ruler of Egypt, is known as the Hellenistic period. In the early part of this period, a new form of kingship developed based on Macedonian and Near Eastern traditions. The first Hellenistic kings were previously Alexander's generals, and took power in the period following his death, though they were not part of existing royal lineages and lacked historic claims to the territories they controlled. The most important of these rulers in the decades after Alexander's death were Antigonus I and his son Demetrius in Macedonia and Greece, Ptolemy in Eygpt, and Seleucus I in Syria and the former Persian empire; smaller Hellenistic kingdoms included the Attalids in Anatolia and the Greco-Bactrian kingdom.";
let parthiaText = "The Parthian Empire (/ˈpɑːrθiən/), also known as the Arsacid Empire (/ˈɑːrsəsɪd/), was a major Iranian political and cultural power in ancient Iran from 247 BC to 224 AD. Its latter name comes from its founder, Arsaces I,who led the Parni tribe in conquering the region of Parthia in Iran's northeast, then a satrapy (province) under Andragoras, who was rebelling against the Seleucid Empire. Mithridates I (r. c. 171 – 132 BC) greatly expanded the empire by seizing Media and Mesopotamia from the Seleucids. At its height, the Parthian Empire stretched from the northern reaches of the Euphrates, in what is now central-eastern Turkey, to present-day Afghanistan and western Pakistan. The empire, located on the Silk Road trade route between the Roman Empire in the Mediterranean Basin and the Han dynasty of China, became a center of trade and commerce.";
let sasaniaText = "The Sasanian Empire (/səˈsɑːniən, səˈseɪniən/), officially known as Eranshahr ('Land/Empire of the Iranians'), was the last Iranian empire before the early Muslim conquests of the 7th–8th centuries AD. Named after the House of Sasan, it endured for over four centuries, from 224 to 651 AD, making it the longest-lived Persian imperial dynasty. The Sasanian Empire succeeded the Parthian Empire, and re-established the Persians as a major power in late antiquity alongside its neighbouring arch-rival, the Roman Empire (after 395 the Byzantine Empire)";
let umayyadText = "The Umayyad Caliphate (661–750 CE) was the second caliphate established after the death of the Islamic prophet Muhammad. The caliphate was ruled by the Umayyad dynasty, also known as the Umayyads (Arabic: ٱلْأُمَوِيُّون, al-ʾUmawīyūn, or بَنُو أُمَيَّة, Banū ʾUmayya, 'Sons of Umayya'). Uthman ibn Affan (r. 644–656), the third of the Rashidun caliphs, was also a member of the clan. The family established dynastic, hereditary rule with Muawiya ibn Abi Sufyan, long-time governor of Greater Syria, who became caliph after the end of the First Fitna in 661. After Mu'awiya's death in 680, conflicts over the succession resulted in the Second Fitna, and power eventually fell to Marwan I, from another branch of the clan. Syria remained the Umayyads' main power base thereafter, with Damascus as their capital.";

let midEastInfoTexts = [mideastPreHistText, sumerText, assyriaText, persiaText, helenisticText, parthiaText, sasaniaText, umayyadText];

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
let eastasiaDate1 = "Prehistory and Xia Dynasty 6000 - 1800 B.C.";
let eastasiaDate2 = "Shang Dynasty and Zhou Dynasty 1800 - 600 B.C.";
let eastasiaDate3 = "Han Dynasty 200 B.C. - 200 A.D.";
let eastasiaDate4 = "Three Kingdoms Period of Korea 50 B.C. - 650 A.D.";
let eastasiaDate5 = "Tang Dynasty 600 - 900 A.D.";
let eastasiaDate6 = "Heian Period 800 - 1200 A.D.";
let eastasiaDate7 = "Song Dynasty 950 - 1300 A.D.";
let eastasiaDate8 = "Kamakura Period and Muromachi Period 1200 - 1550 A.D.";

let eastasiaDates = [eastasiaDate1, eastasiaDate2, eastasiaDate3, eastasiaDate4, eastasiaDate5, eastasiaDate6, eastasiaDate7, eastasiaDate8];

let xiaImg = "url('./assets/images/eastasia/King_Yu_of_Xia_web.jpg')";
let shangImg = "url('./assets/images/eastasia/elephant.jpg')";
// let zhou = "url('./assets/images/eastasia/zhou.jpg')";
// let qin = "url('./assets/images/eastasia/qin.jpg')";
let hanImg = "url('./assets/images/eastasia/han.jpg')";
let threekingdomsImg = "url(./assets/images/eastasia/three-kingdoms.jpg)";
let tangImg = "url('./assets/images/eastasia/tang.jpg')";
let heainImg = "url('./assets/images/eastasia/heian.jpg')";
let songImg = "url('./assets/images/eastasia/song.jpg')";
let feudalJapanImg = "url('./assets/images/eastasia/feudaljapan.jpg')";

let eastasiaImgs = [xiaImg, shangImg, hanImg, threekingdomsImg, tangImg, heainImg, songImg, feudalJapanImg];

let xiaText = "The Xia dynasty (Chinese: 夏朝; pinyin: Xiàcháo; Wade–Giles: Hsia4-ch‘ao2) is the first dynasty in traditional Chinese historiography. According to tradition, the Xia dynasty was established by the legendary Yu the Great, after Shun, the last of the Five Emperors, gave the throne to him. In traditional historiography, the Xia was later succeeded by the Shang dynasty.";
let shangZhouText = "The Shang ruled the plain of the Yellow River in eastern China from the 17th to the 11th century BCE. Their oracle bone script (from c. 1500 BCE) represents the oldest form of Chinese writing yet found[51] and is a direct ancestor of modern Chinese characters. The Shang was conquered by the Zhou, who ruled between the 11th and 5th centuries BCE, though centralized authority was slowly eroded by feudal warlords. Some principalities eventually emerged from the weakened Zhou, no longer fully obeyed the Zhou king, and continually waged war with each other during the 300-year Spring and Autumn period.";
let hanText = "The Han dynasty emerged to rule China between 206 BCE and CE 220, creating a cultural identity among its populace still remembered in the ethnonym of the Han Chinese. The Han expanded the empire's territory considerably, with military campaigns reaching Central Asia, Mongolia, South Korea, and Yunnan, and the recovery of Guangdong and northern Vietnam from Nanyue. Han involvement in Central Asia and Sogdia helped establish the land route of the Silk Road, replacing the earlier path over the Himalayas to India. Han China gradually became the largest economy of the ancient world.";
let threeKingdomsText = "The Three Kingdoms of Korea or Samhan (Goguryeo, Baekje and Silla) competed for hegemony over the Korean Peninsula during the ancient period of Korean history. During the Three Kingdoms period (Korean: 삼국시대; Hanja: 三國時代; RR: Samguk-sidae), many states and statelets consolidated until, after Buyeo was annexed in 494 and Gaya was annexed in 562, only three remained on the Korean Peninsula: Goguryeo, Baekje and Silla. The 'Korean Three Kingdoms' (Goguryeo, Baekje and Silla) contributed to what would become Korea; and the Goguryeo, Baekje and Silla peoples became what we know as the Korean people.";
let tangText = "The Tang capital at Chang'an (present-day Xi'an) was then the world's most populous city. Two censuses of the 7th and 8th centuries estimated the empire's population at about 50 million people, which grew to an estimated 80 million by the dynasty's end. From its numerous subjects, the dynasty raised professional and conscripted armies of hundreds of thousands of troops to contend with nomadic powers for control of Inner Asia and the lucrative trade-routes along the Silk Road. Far-flung kingdoms and states paid tribute to the Tang court, while the Tang also indirectly controlled several regions through a protectorate system. In addition to its political hegemony, the Tang exerted a powerful cultural influence over neighboring East Asian nations such as Japan and Korea.";
let heainText = "The Heian period (平安時代, Heian jidai) is the last division of classical Japanese history, running from 794 to 1185. It followed the Nara period, beginning when the 50th emperor, Emperor Kammu, moved the capital of Japan to Heian-kyō (modern Kyoto). Heian (平安) means 'peace' in Japanese. It is a period in Japanese history when the Chinese influences were in decline and the national culture matured. The Heian period is also considered the peak of the Japanese imperial court and noted for its art, especially poetry and literature. Two types of Japanese script emerged, including katakana, a phonetic script which was abbreviated into hiragana, both unique alphabets distinctive to Japan. This gave rise to Japan's famous vernacular literature, with many of its texts written by court women who were not as educated in Chinese compared to their male counterparts.";
let songText = "Technology, science, philosophy, mathematics, and engineering flourished during the Song era. The Song dynasty was the first in world history to issue banknotes or true paper money and the first Chinese government to establish a permanent standing navy. This dynasty saw the first recorded chemical formula of gunpowder, the invention of gunpowder weapons such as fire arrows, bombs, and the fire lance. It also saw the first discernment of true north using a compass, first recorded description of the pound lock, and improved designs of astronomical clocks.";
let feudalJapanText = "Japan's feudal era was characterized by the emergence and dominance of a ruling class of warriors, the samurai. In 1185, following the defeat of the Taira clan by the Minamoto clan in the Genpei War, samurai Minamoto no Yoritomo established a military government at Kamakura. After Yoritomo's death, the Hōjō clan came to power as regents for the shōgun. The Zen school of Buddhism was introduced from China in the Kamakura period (1185–1333) and became popular among the samurai class. The Kamakura shogunate repelled Mongol invasions in 1274 and 1281 but was eventually overthrown by Emperor Go-Daigo. Go-Daigo was defeated by Ashikaga Takauji in 1336, beginning the Muromachi period (1336–1573). The succeeding Ashikaga shogunate failed to control the feudal warlords (daimyō) and a civil war began in 1467, opening the century-long Sengoku period ('Warring States').";

let eastasiaTexts = [xiaText, shangZhouText, hanText, threeKingdomsText, tangText, heainText, songText, feudalJapanText];

//SOUTH ASIA
let southasiaDate1 = "Indus Valley Civilization 2500 - 2000 B.C.";
let southasiaDate2 = "Vedic Period 1500 - 500 B.C.";
let southasiaDate3 = "Maurya Empire 300 B.C. - 200 A.D.";
let southasiaDate4 = "Gupta Empire 300 - 500 A.D.";
let southasiaDate5 = "Mataram Kingdom 700 - 1000 A.D.";
let southasiaDate6 = "Medieval India 600 - 1400 A.D.";
let southasiaDate7 = "Khmer Empire 800 - 1400 A.D.";
let southasiaDate8 = "Majapahit Empire 1300 - 1550 A.D.";

let southasiaDates = [southasiaDate1, southasiaDate2, southasiaDate3, southasiaDate4, southasiaDate5, southasiaDate6, southasiaDate7, southasiaDate8];

let indusImg = "url('./assets/images/southasia/indus.jpg')";
let vedicImg = "url('./assets/images/southasia/vedic.gif')";
let mauryaImg = "url('./assets/images/southasia/mauryan.jpg')";
let guptaImg = "url('./assets/images/southasia/gupta.jpg')";
let mataramImg = "url('./assets/images/southasia/mataram.jpeg')";
let medIndiaImg = "url('./assets/images/southasia/medIndia.jpg')";
let khmerImg = "url('./assets/images/southasia/angkor.jpg')";
let majapahitImg = "url('./assets/images/southasia/majapahit.jpg')";

let southasiaImgs = [indusImg, vedicImg, mauryaImg, guptaImg, mataramImg, medIndiaImg, khmerImg, majapahitImg];

let indusText = "The cities of the ancient Indus were noted for their urban planning, baked brick houses, elaborate drainage systems, water supply systems, clusters of large non-residential buildings, and techniques of handicraft and metallurgy. Mohenjo-daro and Harappa very likely grew to contain between 30,000 and 60,000 individuals, and the civilisation may have contained between one and five million individuals during its florescence. A gradual drying of the region during the 3rd millennium BCE may have been the initial stimulus for its urbanisation. Eventually it also reduced the water supply enough to cause the civilisation's demise and to disperse its population to the east.";
let vedicText = "The second half of the Vedic period was characterised by the emergence of towns, kingdoms, and a complex social differentiation distinctive to India, and the Kuru Kingdom's codification of orthodox sacrificial ritual. During this time, the central Ganges Plain was dominated by a related but non-Vedic Indo-Aryan culture, of Greater Magadha. The end of the Vedic period witnessed the rise of true cities and large states (called mahajanapadas) as well as śramaṇa movements (including Jainism and Buddhism) which challenged the Vedic orthodoxy.";
let mauryaText = "Under the Mauryas, internal and external trade, agriculture, and economic activities thrived and expanded across South Asia due to the creation of a single and efficient system of finance, administration, and security. The Maurya dynasty built a precursor of the Grand Trunk Road from Patliputra to Taxila. After the Kalinga War, the Empire experienced nearly half a century of centralized rule under Ashoka. Ashoka's embrace of Buddhism and sponsorship of Buddhist missionaries allowed for the expansion of that faith into Sri Lanka, northwest India, and Central Asia.";
let guptaText = "The high points of this period are the great cultural developments which took place primarily during the reigns of Samudragupta, Chandragupta II and Kumaragupta I. Many Hindu epics and literary sources, such as Mahabharata and Ramayana, were canonised during this period. The Gupta period produced scholars such as Kalidasa, Aryabhata, Varahamihira and Vatsyayana, who made great advancements in many academic fields. Science and political administration reached new heights during the Gupta era. The period, sometimes described as Pax Gupta, gave rise to achievements in architecture, sculpture, and painting that 'set standards of form and taste [that] determined the whole subsequent course of art, not only in India but far beyond her borders'.";
let mataramText = "In the period between the late 8th century and the mid-9th century, the kingdom saw the blossoming of classical Javanese art and architecture reflected in the rapid growth of temple construction. Temples dotted the landscape of its heartland in Mataram. The most notable of the temples constructed in Mataram are Kalasan, Sewu, Borobudur and Prambanan, all quite close to present-day city of Yogyakarta. At its peak, the kingdom had become a dominant empire that exercised its power—not only in Java, but also in Sumatra, Bali, southern Thailand, Indianized kingdoms of the Philippines, and the Khmer in Cambodia.";
let medIndiText = "Indian royalty, big and small, and the temples they patronised drew citizens in great numbers to the capital cities, which became economic hubs as well. Temple towns of various sizes began to appear everywhere as India underwent another urbanisation. By the 8th and 9th centuries, the effects were felt in South-East Asia, as South Indian culture and political systems were exported to lands that became part of modern-day Myanmar, Thailand, Laos, Brunei, Cambodia, Vietnam, Philippines, Malaysia, and Indonesia. Indian merchants, scholars, and sometimes armies were involved in this transmission; South-East Asians took the initiative as well, with many sojourning in Indian seminaries and translating Buddhist and Hindu texts into their languages.";
let khmerText = "The site of Angkor is perhaps the empire's most notable legacy, as it was the capital during the empire's zenith. The majestic monuments of Angkor, such as Angkor Wat and Bayon, bear testimony to the Khmer Empire's immense power and wealth, impressive art and culture, architectural technique, aesthetic achievements, and variety of belief systems that it patronised over time. Satellite imaging has revealed that Angkor, during its peak in the 11th to the 13th centuries, was the most extensive pre-industrial urban complex in the world. Researchers have also concluded that the Khmer Empire invented the world's first healthcare system, which included 102 hospitals.";
let majahapitText = "Majapahit (Javanese: ꦩꦗꦥꦲꦶꦠ꧀; Javanese pronunciation: [madʒapaɪt]), also known as Wilwatikta (Javanese: ꦮꦶꦭ꧀ꦮꦠꦶꦏ꧀ꦠ; Javanese pronunciation: [wɪlwatɪkta]), was a Javanese Hindu-Buddhist thalassocratic empire in Southeast Asia that was based on the island of Java (in modern-day Indonesia). It existed from 1293 to circa 1527 and reached its peak of glory during the era of Hayam Wuruk, whose reign from 1350 to 1389 was marked by conquests that extended throughout Southeast Asia. His achievement is also credited to his prime minister, Gajah Mada. According to the Nagarakretagama (Desawarñana) written in 1365, Majapahit was an empire of 98 tributaries, stretching from Sumatra to New Guinea";

let southasiaTexts = [indusText, vedicText, mauryaText, guptaText, mataramText, medIndiText, khmerText, majahapitText];

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

let europeDate1 = 'Prehistory 8000 - 3000 B.C.';
let europeDate2 = 'Minoa and Mycenae 2000 - 1300 B.C.';
let europeDate3 = 'Classical Greece 500 - 300 B.C.';
let europeDate4 = 'Roman Republic and Empire 250 B.C. - 500 A.D.';
let europeDate5 = 'Eastern Roman Empire 400 - 1500 A.D.';
let europeDate6 = 'Early Middle Ages 500 - 1000 A.D.';
let europeDate7 = 'High Middle Ages 1000 - 1400 A.D.';
let europeDate8 = 'Rennaisance 1400 - 1700 A.D.';

let europeDates = [europeDate1, europeDate2, europeDate3, europeDate4, europeDate5, europeDate6, europeDate7, europeDate8];

let beakerText = "In its mature phase, the Bell Beaker culture is understood as not only a collection of characteristic artefact types, but a complex cultural phenomenon involving metalwork in copper and gold, long-distance exchange networks, archery, specific types of ornamentation, and (presumably) shared ideological, cultural and religious ideas, as well as social stratification and the emergence of regional elites.";
let minoanText = "The Minoans built large, complex palaces up to four stories high, featuring elaborate plumbing systems and decorated with frescoes. The largest Minoan palace is that of Knossos, followed by that of Phaistos. The function of the palaces, like most aspects of Minoan governance and religion, remains unclear. The Minoan period saw extensive trade by Crete with Aegean and Mediterranean settlements, particularly those in the Near East. Through traders and artists, Minoan cultural influence reached beyond Crete to the Cyclades, the Old Kingdom of Egypt, copper-bearing Cyprus, Canaan and the Levantine coast and Anatolia.";
let greeceText = "Classical Greece was a period of around 200 years (the 5th and 4th centuries BC) in Ancient Greece, marked by much of the eastern Aegean and northern regions of Greek culture (such as Ionia and Macedonia) gaining increased autonomy from the Persian Empire; the peak flourishing of democratic Athens; the First and Second Peloponnesian Wars; the Spartan and then Theban hegemonies; and the expansion of Macedonia under Philip II. Much of the early defining politics, artistic thought (architecture, sculpture), scientific thought, theatre, literature and philosophy of Western civilization derives from this period of Greek history, which had a powerful influence on the later Roman Empire.";
let romeText = "The Roman Empire was the post-Republican state of ancient Rome. It included territory around the Mediterranean in Europe, North Africa, and Western Asia, and was ruled by emperors. The adoption of Christianity as the state church in 380 and the fall of the Western Roman Empire conventionally marks the end of classical antiquity and the beginning of the Middle Ages.";
let eastRomeText = "The Byzantine Empire, also referred to as the Eastern Roman Empire, was the continuation of the Roman Empire primarily in its eastern provinces during Late Antiquity and the Middle Ages, when its capital city was Constantinople. It survived the fall of the Western Roman Empire in the 5th century AD and continued to exist until the fall of Constantinople to the Ottoman Empire in 1453. During most of its existence, the empire remained the most powerful economic, cultural, and military force in the Mediterranean world. Its citizens continued to refer to their empire as the Roman Empire and to themselves as Romans—a term which Greeks continued to use for themselves into Ottoman times. Modern historians distinguish the Byzantine Empire from the earlier Roman Empire due to the imperial seat moving from Rome to Byzantium, the Empire's integration of Christianity, and the predominance of Greek instead of Latin.";
let earlyMidText = "From around 780, Europe saw the last of the barbarian invasions and became more socially and politically organized. The Carolingian Renaissance stimulated scientific and philosophical activity in Northern Europe. The first universities started operating in Bologna, Oxford, Paris, Salamanca, Cambridge and Modena. The Vikings settled in the British Isles, France and elsewhere, and Norse Christian kingdoms started developing in their Scandinavian homelands. The Magyars ceased their expansion in the 10th century, and by the year 1000, a Christian Kingdom of Hungary had become a recognized state in Central Europe that was forming alliances with regional powers.";
let highMidText = "The High Middle Ages produced many different forms of intellectual, spiritual and artistic works. The age also saw the rise of ethnocentrism, which evolved later into modern national identities in most of Europe, the ascent of the great Italian city-states and the rise and fall of the Islamic civilization of Al-Andalus. The rediscovery of the works of Aristotle, at first indirectly through medieval Jewish and Islamic philosophy, led Maimonides, Ibn Sina, Ibn Rushd, Thomas Aquinas and other thinkers of the period to expand Scholasticism, a combination of Judeo-Islamic and Catholic ideologies with the ancient philosophy. For much of this period, Constantinople remained Europe's most populous city, and Byzantine art reached a peak in the 12th century. In architecture, many of the most notable Gothic cathedrals were built or completed around this period.";
let rennaisanceText = "As a cultural movement, the Renaissance encompassed innovative flowering of Latin and vernacular literatures, beginning with the 14th-century resurgence of learning based on classical sources, which contemporaries credited to Petrarch; the development of linear perspective and other techniques of rendering a more natural reality in painting; and gradual but widespread educational reform. In politics, the Renaissance contributed to the development of the customs and conventions of diplomacy, and in science to an increased reliance on observation and inductive reasoning. Although the Renaissance saw revolutions in many intellectual and social scientific pursuits, as well as the introduction of modern banking and the field of accounting, it is perhaps best known for its artistic developments and the contributions of such polymaths as Leonardo da Vinci and Michelangelo, who inspired the term 'Renaissance man'.";

let europeTexts = [beakerText, minoanText, greeceText, romeText, eastRomeText, earlyMidText, highMidText, rennaisanceText];

//AMERICAS
let olmecImg = "url('./assets/images/americas/olmec.jpg')";
let nazcaImg = "url('./assets/images/americas/nazca.jpg')";
let tiwanakuImg = "url('./assets/images/americas/tiwanaku.jpg')";
let mayaImg = "url('./assets/images/americas/mayan.jpg')";
let teotihuacanImg = "url('./assets/images/americas/teotihuacan.jpg')";
let cahokiaImg = "url('./assets/images/americas/cahokia.jpg')";
let aztecImg = "url('./assets/images/americas/aztec.jpg')";
let incaImg = "url('./assets/images/americas/inca.jpg')";

let americasImgs = [olmecImg, nazcaImg, teotihuacanImg, tiwanakuImg, mayaImg, cahokiaImg, aztecImg, incaImg];

let olmecDate = "Olmec Civilization 1600 - 400 B.C.";
let nazcaDate = "Nazca Culture 100 B.C. - 800 A.D.";
let teotihuacanDate = "Teotihuacan 100 B.C. - 500 A.D.";
let tiwanakuDate = "Tiwanaku 100 - 1000 A.D.";
let mayaDate = "Maya Civilization 250 - 1700 A.D.";
let cahokiaDate = "Cahokia 1050 - 1350 A.D.";
let aztecDate = "Aztec Civilization 1300 - 1500 A.D.";
let incaDate = "Inca Empire 1450 - 1550 A.D.";

let americasDates = [olmecDate, nazcaDate, teotihuacanDate, tiwanakuDate, mayaDate, cahokiaDate, aztecDate, incaDate];

let olmecText = "The Olmecs flourished during Mesoamerica's formative period, dating roughly from as early as 1500 BCE to about 400 BCE. Pre-Olmec cultures had flourished since about 2500 BCE, but by 1600–1500 BCE, early Olmec culture had emerged, centered on the San Lorenzo Tenochtitlán site near the coast in southeast Veracruz. They were the first Mesoamerican civilization, and laid many of the foundations for the civilizations that followed. Among other 'firsts', the Olmec appeared to practice ritual bloodletting and played the Mesoamerican ballgame, hallmarks of nearly all subsequent Mesoamerican societies. The aspect of the Olmecs most familiar now is their artwork, particularly the aptly named 'colossal heads'.";
let nazcaText = "The Nazca culture (also Nasca) was the archaeological culture that flourished from c. 100 BC to 800 AD beside the arid, southern coast of Peru in the river valleys of the Rio Grande de Nazca drainage and the Ica Valley. Strongly influenced by the preceding Paracas culture, which was known for extremely complex textiles, the Nazca produced an array of crafts and technologies such as ceramics, textiles, and geoglyphs. They are known for two extensive construction projects that would have required the coordination of large groups of laborers: the Nazca Lines, immense designs in the desert whose purpose is unknown, and puquios, underground aqueducts for providing water for irrigation and domestic purposes in the arid environment. Several dozen still function today. The Nazca Province in the Ica Region was named for this people.";
let teotihuacanText = "Teotihuacan is known today as the site of many of the most architecturally significant Mesoamerican pyramids built in the pre-Columbian Americas, namely the Pyramid of the Sun and the Pyramid of the Moon. At its zenith, perhaps in the first half of the first millennium (1 CE to 500 CE), Teotihuacan was the largest city in the Americas, considered as the first advanced civilization on the North American continent, with a population estimated at 125,000 or more, making it at least the sixth-largest city in the world during its epoch.";
let tiwanakuText = "Tiwanaku began its steady growth in the early centuries of the common era. From approximately 375 to 700 AD, the city grew to significance in the Andes. At its height, the city of Tiwanaku spanned an area of roughly 4 square kilometers (1.5 square miles) and had a population greater than 10,000 individuals. The growth of the city was due to its complex agropastoral economy, supported by trade.";
let mayaText = "The Maya civilization (/ˈmaɪə/) was a Mesoamerican civilization that existed from antiquity to the early modern period. It is known by its ancient temples and glyphs (script). The Maya script is the most sophisticated and highly developed writing system in the pre-Columbian Americas. The civilization is also noted for its art, architecture, mathematics, calendar, and astronomical system.";
let cahokiaText = "Cahokia was the largest and most influential urban settlement of the Mississippian culture, which developed advanced societies across much of what is now the Central and the Southeastern United States, beginning more than 1,000 years before European contact. Today, the Cahokia Mounds are considered to be the largest and most complex archaeological site north of the great pre-Columbian cities in Mexico.";
let aztecText = "From the 13th century, the Valley of Mexico was the heart of dense population and the rise of city-states. The Mexica were late-comers to the Valley of Mexico, and founded the city-state of Tenochtitlan on unpromising islets in Lake Texcoco, later becoming the dominant power of the Aztec Triple Alliance or Aztec Empire. It was an empire that expanded its political hegemony far beyond the Valley of Mexico, conquering other city states throughout Mesoamerica in the late post-classic period.";
let incaText = "The Inca Empire was unique in that it lacked many of the features associated with civilization in the Old World. Anthropologist Gordon McEwan wrote that the Incas were able to construct 'one of the greatest imperial states in human history' without the use of the wheel, draft animals, knowledge of iron or steel, or even a system of writing.[6] Notable features of the Inca Empire included its monumental architecture, especially stonework, extensive road network reaching all corners of the empire, finely-woven textiles, use of knotted strings (quipu) for record keeping and communication, agricultural innovations and production in a difficult environment, and the organization and management fostered or imposed on its people and their labor.";

let americasTexts = [olmecText, nazcaText, teotihuacanText, tiwanakuText, mayaText, cahokiaText, aztecText, incaText];


//main text display variable
let maintextDisplay = document.querySelector('#maintextdisplay');

let centerPrompt = document.querySelector('#centerprompt');

//create a variable that stores the 'page' id
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
function eastasia() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = eastasiaImgs[i];
    centerPrompt.textContent = "East Asia";
    texts[i].textContent = eastasiaDates[i];
    pageId = "eastasia";
    backgroundImg.setAttribute('class', 'backgroundeastasia');
  };
};

//SOUTH ASIA PAGE
function southAsia() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = southasiaImgs[i];
    centerPrompt.textContent = "South Asia";
    texts[i].textContent = southasiaDates[i];
    pageId = "southasia";
    backgroundImg.setAttribute('class', 'backgroundsouthasia');
  };
}

//EUROPE PAGE
function europe() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = europeImgs[i];
    centerPrompt.textContent = "Europe";
    texts[i].textContent = europeDates[i];
    pageId = "europe";
    backgroundImg.setAttribute('class', 'backgroundeurope');
  };
};

//AMERICAS PAGE

//For background image for americas, need to make a new image that has the pacific ocean stitched together, can be for the americas and oceania
function americas() {
  for (var i = 0; i < textCards.length; i++) {
    textCards[i].style.backgroundImage = americasImgs[i];
    centerPrompt.textContent = "Americas";
    texts[i].textContent = americasDates[i];
    pageId = "americas";
    backgroundImg.setAttribute('class', 'backgroundamericas');
  };
};

//Sets display for individual society's info
//uses pageId to choose correct array
//uses infoId to itirate to the right position of the array
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
  } else if (pageId === "eastasia") {
    centerPrompt.textContent = eastasiaTexts[infoId];
  } else if (pageId === "southasia") {
    centerPrompt.textContent = southasiaTexts[infoId];
  } else if (pageId === "europe") {
    centerPrompt.textContent = europeTexts[infoId];
  } else if (pageId === "americas") {
    centerPrompt.textContent = americasTexts[infoId];
  }
};


siteTitle.addEventListener('click', function() {
  console.log('are you there');
  homePage();
})

seeMoreBtn.addEventListener('click', function(event) {
  event.preventDefault();

})

//variable that will tell the infoDisplay function which position in the info-text array to use
let infoId

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
    eastasia();
  } else {
    infoDisplay(infoId);
  }
});

text4Card.addEventListener('click', function(event) {
  event.preventDefault();
  infoId = 3;
  if (pageId === "homepage") {
    southAsia();
  } else {
    infoDisplay(infoId);
  }
});

text5Card.addEventListener('click', function (event) {
  event.preventDefault();
  infoId = 4;
  if (pageId === "homepage") {
    europe();
  } else {
    infoDisplay(infoId);
  }
});

text6Card.addEventListener('click', function (event) {
  event.preventDefault();
  infoId = 5;
  if (pageId === "homepage") {
    americas();
  } else {
    infoDisplay(infoId);
  }
});

text7Card.addEventListener('click', function (event) {
  event.preventDefault();
  infoId = 6;
  if (pageId === "homepage") {
    oceania();
  } else {
    infoDisplay(infoId);
  }
});

text8Card.addEventListener('click', function (event) {
  event.preventDefault();
  infoId = 7;
  if (pageId === "homepage") {
    thesteppe();
  } else {
    infoDisplay(infoId);
  }
});
