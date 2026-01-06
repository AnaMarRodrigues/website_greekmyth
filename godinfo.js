
// Dados dos deuses para as paginas pessoais 

const gods = {
  athena: {
    name: "Athena",
    title: "goddess of wisdom, warfare and handicraft",
    description: "ATHENE (Athena) was the Olympian goddess of wisdom and good counsel, war, the defence of towns, heroic endeavour, weaving, pottery and various other crafts. She was depicted as a stately woman armed with a shield and spear, and wearing a long robe, crested helm, and the famed aigis--a snake-trimmed cape adorned with the monstrous visage of the Gorgon Medousa (Medusa).",
    trivia: "-  Roman name is Minerva;<br>- Born fully armored from Zeus’s forehead;<br>- Associated with the owl, symbolizing wisdom;<br>- She was known for protecting the city, which is how present-day Athens got its name;<br>- Athena helped Hercules complete his dangerous and difficult twelve labors, specifically his 6th labor.",
    image: "images/gods_nobg/athena_full.png",
    background: "#E6EEFF"
  },
  ares: {
    name: "Ares",
    title: "god of war, courage and battlelust",
    description: "ARES was the Olympian god of war, battlelust, courage and civil order. In ancient Greek art he was depicted as either a mature, bearded warrior armed for battle, or a nude, beardless youth with a helm and spear. Ares, is nothing but the personification of bold force and strength, and not so much the god of war as of its tumult, confusion, and horrors. His sister Eris calls forth war, Zeus directs its course, but Ares loves war for its own sake, and delights in the din and roar of battles, in the slaughter of men, and the destruction of towns. This savage and sanguinary character of Ares makes him hated by the other gods and his own parents. In the Iliad, he appears surrounded by the personifications of all the fearful phenomena and effects of war. ",
    trivia: "- Romans identified him with Mars;<br>- Represents the violent and chaotic side of war;<br>- Had a famous affair with Aphrodite;<br>- Ares had two children that would accompany him to war: Phobos and Deimos.<br>",
    image: "images/gods_nobg/ares_full.png",
    background: "#E6C9C9"
  },
  hermes: {
    name: "Hermes",
    title: "god of travel, trade, and communication",
    description: "HERMES was the Olympian god of herds and flocks, travellers and hospitality, roads and trade, thievery and cunning, heralds and diplomacy, language and writing, athletic contests and gymnasiums, astronomy and astrology. He was the herald and personal messenger of Zeus, King of the Gods, and also the guide of the dead who led souls down into the underworld. Hermes was depicted as either a handsome and athletic, beardless youth or as an older, bearded man, with winged boots and a herald's wand. As a new-born infant Hermes snuck out of his crib, stole the cattle of the god Apollo, and crafted the first lyre from a tortoise-shell. Zeus was so amused by the young god's antics that he granted him a place as one of the twelve supreme gods of Olympos.",
    trivia: "-Roman equivalent is Mercury;<br>- Wears winged sandals that allow him to fly swiftly;<br>- Known for his cleverness and trickery;",
    image: "images/gods_nobg/hermes_full.png",
    background: "#DBF1FF"
  },
  artemis: {
    name: "Artemis",
    title: "goddess of the hunt, wilderness, and the moon",
    description: "ARTEMIS was the Olympian goddess of hunting, the wilderness and wild animals. She was also a goddess of childbirth, and the protectress of the girl child up to the age of marriage - her twin brother Apollo was similarly the protector of the boy child. Together the two gods were also bringers of sudden death and disease - Artemis targetted women and girls, Apollon men and boys. In ancient art Artemis was usually depicted as a girl or young maiden with a hunting bow and quiver of arrows. Artemis' mother Leto was hounded throughout her pregnancy by the jealous goddess Hera but eventually found refuge on the floating island of Delos. There she gave birth to Artemis who assisted her mother as midwife with the birth of her younger twin-brother Apollon. ",
    trivia: "- Roman name Diana;<br>- Twin sister of Apollo;<br>- One of the major three virgin goddesses.<br>",
    image: "images/gods_nobg/artemis_full.png",
    background: "#C9DED9"
  },
  hera: {
    name: "Hera",
    title: "queen of the gods, goddess of marriage and family",
    description: "HERA was the Olympian queen of the gods, and the goddess of marriage, women, the sky and the stars of heaven. She was usually depicted as a beautiful woman wearing a crown and holding a royal, lotus-tipped sceptre, and sometimes accompanied by a lion, cuckoo or hawk. Married with Zeus, she was treated by the Olympian gods with the same reverence as her husband. Zeus himself, according to Homer, listened to her counsels, and communicated his secrets to her rather than to other gods (xvi. 458, i. 547). Hera also thinks herself justified in censuring Zeus when he consults others without her knowing it (i. 540, &c.).",
    trivia: "- Hera roman equivalent is Juno; <br>- Protector of marriage and married women;<br>- Queen of Mount Olympus;<br>- Known for her jealous and vengeful nature;",
    image: "images/gods_nobg/hera_full.png",
    background: "#DDF3F1"
  },
  apollo: {
    name: "Apollo",
    title: "God of the Sun, Music, and Prophecy",
    description: "APOLLON (Apollo) was the Olympian god of prophecy and oracles, music, song and poetry, archery, healing, plague and disease, and the protection of the young. He was depicted as a handsome, beardless youth with long hair and attributes such as a wreath and branch of laurel, bow and quiver of arrows, raven, and lyre. Later traditions ascribed to Apollo even the invention of the flute and lyre (Callim. Hymn. in Del. 253; Plut. de Mus.), while the more common tradition was, that he received the lyre from Hermes. The god of prophecy. Apollo exercised this power in his numerous oracles, and especially in that of Delphi. (Dict. of Ant. s. v. Oraculum) The source of all his prophetic powers was Zeus himself, and Apollo is accordingly called 'the prophet of his father Zeus.' (Aeschyl. Eum. 19).",
    trivia: "- Apollo as the same name in both greek and roman mythology; <br>- His most notable child would be his son, Orpheus, who was thought to be able to play the lyre better than Apollo himself;<br>- Associated with the Oracle of Delphi;<br>- Twin brother of Artemis;",
    image: "images/gods_nobg/apollo_full.png",
    background: "#F6E2C8"
  },
  aphrodite: {
    name: "Aphrodite",
    title: "Goddess of Love, Beauty, and Desire",
    description: "APHRODITE was the Olympian goddess of love, beauty, pleasure and procreation. She was depicted as a beautiful woman often accompanied by the winged godling Eros (Love). Her attributes included a dove, apple, scallop shell and mirror. In classical sculpture and fresco she was usually depicted nude.Some traditions stated that she had sprung from the foam (aphros) of the sea, which had gathered around the mutilated parts of Uranus, that had been thrown into the sea by Kronos (Hesiod. Theog. 190). According to the most common accounts of the ancients, Aphrodite was married to Hephaestus (Odyss. viii. 270). Her faithlessness to Hephaestus in her amour with Ares, and the manner in which she was caught by the ingenuity of her husband, are described in the Odyssey. (viii. 266, &c.)",
    trivia: "- Roman name is Venus;<br>- Born from sea foam;<br>- Often depicted with doves, shells, and pearls;<br>- Eros is one of her and Ares sons.",
    image: "images/gods_nobg/aphrodite_full.png",
    background: "#F7E2E9"
  },
   dionysus: {
  name: "Dionysus",
  title: "God of Wine, Festivity, and Ecstasy",
  description: "DIONYSOS (Dionysus) was the Olympian god of wine, vegetation, pleasure, festivity, madness and wild frenzy. He was depicted as either an older, bearded god or an effeminate, long-haired youth. His attributes included the thyrsos (a pine-cone tipped staff), a drinking cup and a crown of ivy. Son of Zeus and the princess Semele of Thebes. During the course of her pregnancy, the god's jealous wife Hera tricked Semele into asking Zeus to appear before her in his full glory. Bound by oath, the god was forced to comply and she was consumed by the heat of his lightning-bolts. Zeus recovered their unborn child from her body, sewed him up in his own thigh, and carried him to term.",
  trivia: "- Roman name is Liber or Bacchus;<br>- Associated with theatre and ecstatic rituals;<br>- Often accompanied by satyrs and maenads;<br> - He was the only god who had a mortal parent.",
  image: "images/gods_nobg/dionysus_full.png",
  background: "#EDE0F8"
},
 demeter: {
  name: "Demeter",
  title: "Goddess of Agriculture, Harvest, and Fertility",
  description: "DEMETER was the Olympian goddess of agriculture, grain and bread who sustained mankind with the earth's rich bounty. She presided over the foremost of the Mystery Cults which promised its intiates the path to a blessed afterlife in the realm of Elysium. Demeter was depicted as a mature woman, often wearing a crown and bearing sheafs of wheat or a cornucopia (horn of plenty), and a torch. The mythus of Demeter and her daughter embodies the idea, that the productive powers of the earth or nature rest or are concealed during the winter season; the goddess then rules in the depth of the earth mournful, but striving upwards to the all-animating light.",
  trivia: "- Roman equivalent is Ceres;<br>- Mother of Persephone, queen of the Underworld;<br>- Central figure in the Eleusinian Mysteries, symbolizing life, death, and rebirth;",
  image: "images/gods_nobg/demeter_full.png",
  background: "#FBE7C0"
},
hades: {
  name: "Hades",
  title: "God of the Underworld and the Dead",
  description: "Hades is the Greek god of the Underworld, ruling over the realm of the dead. Though often misunderstood as malevolent, Hades is a just and stern deity who ensures balance between life and death. He governs the riches beneath the earth, including precious metals and fertile soil. His abduction of Persephone, daughter of Demeter, explains the origin of the seasons in Greek mythology.",
  trivia: "- Son of the Titans Cronus and Rhea;<br>- Brother of Zeus and Poseidon;<br>- Husband of Persephone, queen of the Underworld;<br>- Associated with the Helm of Darkness, the bident, and the cypress tree;<br>- His Roman equivalent is Pluto, god of wealth and the underworld;",
  image: "images/gods_nobg/hades_full.png",
  background: "#DBD9F3",
},
persephone: {
  name: "Persephone",
  title: "Goddess of spring, queen of the underworld",
  description: "PERSEPHONE was the goddess queen of the underworld, wife of the god Haides (Hades). She was also the goddess of spring growth, who was worshipped alongside her mother Demeter in the Eleusinian Mysteries. This agricultural-based cult promised its initiates passage to a blessed afterlife. Persephone was usually depicted as a young goddess holding sheafs of grain and a flaming torch. Sometimes she was shown in the company of her mother Demeter, and the hero Triptolemos, the teacher of agriculture. At other times she appears enthroned beside Hades.",
  trivia: "- Daughter of Zeus and Demeter;<br>- Abducted by Hades to become his queen;<br>- Her return to the surface marks the arrival of spring;<br>- Represents both death and rebirth in Greek mythology;<br>- Her Roman equivalent is Proserpina;",
  image: "images/gods_nobg/persephone_full.png",
  background: "#FFDBDD"
},
poseidon: {
  name: "Poseidon",
  title: "God of the Sea, Earthquakes, and Horses",
  description: "POSEIDON was the Olympian god of the sea, earthquakes, floods, drought and horses. He was depicted as a mature man with a sturdy build and dark beard holding a trident (a three-pronged fisherman's spear). During the War of the Titanes, the Kyklopes (Cyclopes) crafted a magical trident for Poseidon, and together with his brothers Zeus and Haides he defeated the elder gods and imprisoned them in Tartaros.   He was further regarded as the creator of the horse, and was accordingly believed to have taught men the art of managing horses by the bridle, and to have been the originator and protector of horse races. (Hom. Il. xxiii. 307, 584; Pind. Pyth. vi.50 ; Soph. Oed. Col. 712, &c.)",
  trivia: "- His Roman equivalent is Neptune, god of the sea;<br>- Poseidon had Children with Medusa;<br>- Wields the trident, symbol of his dominion over the sea;<br>- When Poseidon rides in his chariot, he is pulled by horses; a symbolic connection to the animal that he spent so much time creating.<br>",
  image: "images/gods_nobg/poseidon_full.png",
  background: "#D6F4FF",
},
hestia: {
  name: "Hestia",
  title: "Goddess of the Hearth, Home, and Family",
  description: "HESTIA was the virgin goddess of the hearth (both private and municipal) and the home. Hestia was also the goddess of the sacrificial flame and received a share of every sacrifice to the gods. The cooking of the communal feast of sacrificial meat was naturally a part of her domain. In myth Hestia was the first born child of Kronos (Cronus) and Rhea who was swallowed by her father at birth. As the first to be swallowed she was also the last to be disgorged, and so was named as both the eldest and youngest of the six Kronides. When the gods Apollon and Poseidon sought for her hand in marriage, Hestia refused and asked Zeus to let her remain an eternal virgin. He agreed and she took her place at his royal hearth.",
  trivia: "- Daughter of the Titans Cronus and Rhea;<br>- Sister of Zeus, Poseidon, Hades, Hera, and Demeter;<br>- One of the virgin goddesses of Olympus;<br>- Associated with the hearth flame and domestic life;<br>- Her Roman equivalent is Vesta, guardian of the sacred fire;",
  image: "images/gods_nobg/hestia_full.png",
  background: "#E9C6BF",
},
zeus: {
  name: "Zeus",
  title: "King of the Gods, God of the Sky and Thunder",
  description: "ZEUS was the King of the Gods and the god of the sky, weather, law and order, destiny and fate, and kingship. He was depicted as a regal, mature man with a sturdy figure and dark beard. His usual attributes were a lightning bolt, a royal sceptre and an eagle. According to the Homeric account Zeus, like the other Olympian gods, dwelt on Mount Olympus in Thessaly, which was believed to penetrate with its lofty summit into heaven itself (Il. i. 221, &c., 354, 609, xxi. 438). He is called the father of gods and men (i. 514, v. 33; comp. Aeschyl. Sept. 512), the most high and powerful among the immortals, whom all others obey (Il. xix. 258, viii. 10, &c.)",
  trivia: "- Youngest son of Cronus and Rhea;<br>- Overthrew the Titans with the help of his siblings;<br>- Married to Hera, though known for many affairs;<br>- Wields the thunderbolt, his signature weapon;<br>- His Roman equivalent is Jupiter;",
  image: "images/gods_nobg/zeus_full.png",
  background: "#FFF7DF",
},
hephaestus: {
  name: "Hephaestus",
  title: "God of Fire, Metalworking, and Craftsmanship",
  description: "HEPHAESTUS was the Olympian god of fire, metalworking, craftsmanship, and invention. He was the divine smith of the gods, forging their weapons, armor, and magnificent works of art. Unlike the other Olympians, Hephaestus was physically imperfect and was cast from Olympus, either by Hera or by Zeus, which left him lame. Despite this, his skill and ingenuity were unmatched. He dwelled in fiery forges beneath volcanoes, where he worked with the help of the Cyclopes or mechanical assistants of his own creation. Hephaestus was later restored to Olympus and was married to Aphrodite.",
  trivia: "- Olympian god of fire, smithing, and craftsmanship;<br>- Son of Hera (and sometimes Zeus, depending on the tradition);<br>- Thrown from Olympus, which caused his lameness;<br>- Forged the weapons of the gods, including Zeus’ thunderbolts and Achilles’ armor;<br>- Associated with volcanoes and subterranean forges;",
  image: "images/gods_nobg/hephaestus_full.png",
  background: "#EFC0AC",
},

kronos: {
  name: "Kronos",
  title: "King of the Titans, God of Time and the Harvest",
  description: "KRONOS (Cronus) was the King of the Titans and the god associated with time, the harvest, and the destructive passage of ages. He ruled the cosmos during the Golden Age, a mythical era of prosperity and peace. Kronos was depicted as a powerful, mature man wielding a curved sickle or scythe, the weapon he used to overthrow his father Uranus. Fearing a prophecy that he would be overthrown by one of his own children, Kronos swallowed each of them at birth. This cycle of tyranny ended when his youngest son Zeus forced him to disgorge his siblings and led the Olympians in a war that ultimately defeated the Titans.",
  trivia: "- Youngest of the twelve Titans, born to Uranus (Sky) and Gaia (Earth);<br>- Castrated Uranus with a sickle, ending his rule;<br>- Ruled during the Golden Age of mankind;<br>- Swallowed his children to prevent being overthrown;<br>- His Roman equivalent is Saturn;",
  image: "images/gods_nobg/kronos_full.png",
  background: "#D2DDE5",
},
rhea: {
  name: "Rhea",
  title: "Queen of the Titans, Mother of the Olympian Gods",
  description: "RHEA was the Queen of the Titans and a goddess associated with motherhood, fertility, and the generative forces of nature. She was the wife of Kronos and reigned alongside him during the Golden Age. Rhea was commonly depicted as a majestic maternal figure, often enthroned, and sometimes accompanied by lions or shown riding a chariot. When Kronos swallowed their children to prevent a prophecy of his downfall, Rhea saved her youngest son Zeus by hiding him on Crete and giving Kronos a stone wrapped in swaddling clothes instead. Through her actions, the line of the Olympian gods was preserved.",
  trivia: "- One of the twelve Titans, daughter of Uranus and Gaia;<br>- Saved Zeus by hiding him on Crete;<br>- Helped Zeus force Kronos to release his swallowed siblings;<br>- Closely associated with Cybele in later traditions;",
  image: "images/gods_nobg/rhea_full.png",
  background: "#CFCFCF",
},






  //,hephaestus 
  
  // adicionar mais deuses aqui...
};


// ================================
function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}


// Preencher conteúdo

const godName = getParam('name');

if (gods[godName]) {
  document.getElementById('god-name').textContent = gods[godName].name;
  document.getElementById('god-title').textContent = gods[godName].title;
  document.getElementById('god-description').textContent = gods[godName].description;
  document.getElementById('god-trivia').innerHTML = gods[godName].trivia;
  document.getElementById('god-image').src = gods[godName].image;
  document.getElementById('god-image').alt = gods[godName].name;

  // Muda o título da página
  document.title = gods[godName].name;

  // Cor de fundo
  if (gods[godName].background) {
    document.body.style.backgroundColor = gods[godName].background;
  } else {
    document.body.style.backgroundColor = '#D9E3EA';
  }

//
const mythsButton = document.querySelector('.god-btn[href="myths.html"]');
if (mythsButton) {
    const godName = document.getElementById('god-name').textContent;
    mythsButton.href = `myths.html?god=${encodeURIComponent(godName)}`;
}
  // -----------------------Animações GSAP


  // Anima entrada do conteúdo principal
  gsap.from('.god-info', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  // Flutuação da imagem do deus
  gsap.to('#god-image', {
    y: "+=8",
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
  });

} else {
  document.querySelector('.god-text').innerHTML = "<h1>God not found!</h1>";
}
