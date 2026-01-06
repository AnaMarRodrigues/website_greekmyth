// Esperar o DOM carregar
window.addEventListener('DOMContentLoaded', () => {

  const isMobile = window.innerWidth < 768;

// Data de gods existentes na galeria(godinfo)
const availableGods = {
  athena: "Athena",
  ares: "Ares",
  hermes: "Hermes",
  artemis: "Artemis",
  hera: "Hera",
  apollo: "Apollo",
  aphrodite: "Aphrodite",
  dionysus: "Dionysus",
  demeter:"Demeter",
  hades:"Hades",
  zeus:"Zeus",
  persephone:"Persephone",
  poseidon:"Poseidon",
  hestia:'Hestia',
  kronos:'Kronos',
  rhea:'Rhea',
  hephaestus:'Hephaestus'
};

// Pop-up com funcionalidade "Don't show again"
const popupOverlay = document.getElementById('popupOverlay');
const popupWrapper = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const dontShowBtn = document.getElementById('dontShowBtn');

// Verificar se o utilizador escolheu não mostrar o popup
const dontShowPopup = localStorage.getItem('dontShowTreePopup');

if (dontShowPopup === 'true') {
  popupOverlay.style.display = 'none';
}

// Botão de fechar normal
closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Botão "Don't show again"
dontShowBtn.addEventListener('click', () => {
  localStorage.setItem('dontShowTreePopup', 'true');
  popupOverlay.style.display = 'none';
});

// Fechar ao clicar fora do popup
popupOverlay.addEventListener('click', (e) => {
  if (!popupWrapper.contains(e.target)) {
    popupOverlay.style.display = 'none';
  }
});

// inicio familia tree . Gods data - inicio com Kronos e Rhea
const godsData = [
  {
    name: "Kronos",
    key: "kronos",
    type: "titan",
    title: "Titan of Time",
    image: "images/carta kronos.png",
    children: [
      {
        name: "Hera",
        key: "hera",
        type: "olympian",
        title: "Queen of the Gods",
        image: "images/hera_front.png"
      },
      {
        name: "Zeus",
        key: "zeus",
        type: "olympian",
        title: "King of the Gods",
        image: "images/carta zeus.png"
      },
      {
        name: "Poseidon",
        key: "poseidon",
        type: "olympian",
        title: "God of the Seas",
        image: "images/carta\ poseidon.png"
      },
      {
        name: "Hades",
        key: "hades",
        type: "olympian",
        title: "God of the Underworld",
        image: "images/carta hades.png"
      },
      {
        name: "Hestia",
        key: "hestia",
        type: "olympian",
        title: "Goddess of the Hearth",
        image: "images/carta\ hestia.png"
      },
      {
        name: "Demeter",
        key: "demeter",
        type: "olympian",
        title: "Goddess of Harvest",
        image: "images/carta demeter.png"
      },
    ]
  },
  {
    name: "Rhea",
    key: "rhea",
    type: "titan",
    title: "Titan of Fertility",
    image: "images/carta rhea.png"
  }
];

// Adicionar gods
function addMissingGods(nodes) {
  nodes.forEach(node => {
    if (node.name === "Zeus") {
      if (!node.children) node.children = [];
      node.children.push({
        name: "Athena",
        key: "athena",
        title: "Goddess of Wisdom",
        image: "images/svg/carta athena.svg"
      });
      node.children.push({
        name: "Hephaestus",
        key: "hephaestus",
        title: "God of Fire",
        image: "images/carta hefesto.png"
      });
      node.children.push({
        name: "Ares",
        key: "ares",
        title: "God of War",
        image: "images/arescarta_front.png"
      });
      node.children.push({
        name: "Apollo",
        key: "apollo",
        type: "olympian",
        title: "God of the Sun",
        image: "images/svg/carta apollo.svg"
      });
      node.children.push({
        name: "Artemis",
        key: "artemis",
        type: "olympian",
        title: "Goddess of the Hunt",
        image: "images/artemis_front.png"
      });
      node.children.push({
        name: "Aphrodite",
        key: "aphrodite",
        type: "olympian",
        title: "Goddess of Love",
        image: "images/aphrodite_front.png"
      });
      node.children.push({
        name: "Hermes",
        key: "hermes",
        type: "olympian",
        title: "Messenger of the Gods",
        image: "images/hermescarta_front.png"
      });
      node.children.push({
        name: "Dionysus",
        key: "dionysus",
        type: "olympian",
        title: "God of Wine and Theatre",
        image: "images/dionisio.png"
      });
    }
    if (node.name === "Demeter") {
      if (!node.children) node.children = [];
      node.children.push({
        name: "Persephone",
        key: "persephone",
        type: "olympian",
        title: "Goddess of Spring and the Underworld",
        image: "images/carta\ persephone.png"
      });
    }
    if (node.children) {
      addMissingGods(node.children);
    }
  });
}

addMissingGods(godsData);

// diferentes tipos de relações com o texto dos mitos (rever!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
const relationships = {
  family: [],
  sibling: [
    { source: "apollo", target: "artemis", reason: "twins", detail: "Apollo and Artemis are twin gods, born to Zeus and Leto. They share a deep bond as siblings." },
  ],
  marriage: [
    { source: "kronos", target: "rhea", reason: "Marriage", detail: "Kronos and Rhea were Titans who ruled before the Olympians. Together they had six children who would become the first Olympians." },
    { source: "zeus", target: "hera", reason: "Marriage", detail: "Zeus and Hera's marriage symbolizes the union of sky and earth. Despite Zeus's infidelities, Hera remained his queen and protector of marriage." },
    { source: "hades", target: "persephone", reason: "Married", detail: "Hades abducted Persephone to be his queen in the Underworld. Her mother Demeter's grief created winter, and her return brings spring." },
    { source: "hermes", target: "aphrodite", reason: "Love affair", detail: "Hermes and Aphrodite's union produced Hermaphroditus, a deity embodying dual nature." },
    { source: "ares", target: "aphrodite", reason: "Love affair", detail: "Ares and Aphrodite carried on a passionate affair despite her marriage to Hephaestus. Their union produced several children including Eros and Harmonia." },

  ],
  rivalry: [
    { source: "zeus", target: "kronos", reason: "Overthrew his father", detail: "Zeus led his siblings in the Titanomachy, a great war against Kronos and the Titans. After defeating his father, Zeus freed his siblings and became king of the gods." },
    { source: "ares", target: "athena", reason: "War beliefs", detail: "Ares represents brutal warfare while Athena embodies strategic warfare and wisdom. They often clashed, with Athena typically outsmarting the war god." },
    { source: "poseidon", target: "athena", reason: "Athens patronage dispute", detail: "Poseidon and Athena competed to be the patron of Athens. Poseidon offered a saltwater spring, but Athena's gift of the olive tree won the city's favor." },
    { source: "hades", target: "zeus", reason: "Underworld vs Sky", detail: "After defeating the Titans, the brothers drew lots. Zeus got the sky, Poseidon the seas, and Hades the Underworld - a realm he didn't choose but came to rule absolutely." },
    { source: "demeter", target: "hades", reason: "Kidnapping Persephone", detail: "Demeter's fury at Hades for abducting her daughter Persephone caused the earth to become barren. This led to the compromise where Persephone spends part of the year in the Underworld." },
    { source: "athena", target: "hephaestus", reason: "Attempted assault", detail: "Hephaestus tried to force himself upon Athena, but she escaped. From his seed that fell on the earth, Erichthonius was born, whom Athena raised as her own." },
    { source: "artemis", target: "hera", reason: "Trojan war", detail: "After the death of Patroklos, Akhilleus' returned to the war, and Zeus again allowed the gods to return to Troy in support of their favourites. The divine factions then broke out into open conflict: Artemis stood against Hera and was beaten by the goddess." }
  ],
  alliance: [
    { source: "zeus", target: "athena", reason: "Favourite daughter", detail: "Athena was born from Zeus's head, fully armed. She became his favorite child and trusted advisor, often sitting by his throne in council." },
    { source: "artemis", target: "apollo", reason: "Twin gods alliance", detail: "The twin archers share dominion over different realms - Apollo over the sun and prophecy, Artemis over the moon and hunt - working in harmony." },
    { source: "zeus", target: "hermes", reason: "Messenger loyalty", detail: "Hermes serves as Zeus's personal messenger and most reliable agent, carrying out his will across all realms with speed and cunning." },
    { source: "poseidon", target: "zeus", reason: "Brothers' alliance", detail: "Despite occasional disagreements, Poseidon and Zeus maintained their alliance as the two most powerful Olympian brothers, ruling sea and sky." },
    {source: "athena",target: "hera",reason: "Trojan War",detail: "The Trojan War began with a quarrel among Hera, Athena, and Aphrodite, instigated by Eris and culminating in the Judgment of Paris, where Aphrodite was chosen as the fairest. In response to this shared humiliation, Hera and Athena formed a lasting alliance."},
    {source: "rhea",target: "zeus",reason: "Alliance against Kronos",detail: "Rhea aided Zeus by deceiving Kronos and later helping him free his swallowed siblings, enabling the Olympians to overthrow the Titans."},
   {source: "hermes",target: "apollo", reason: "Reconciliation",detail: "After stealing Apollo's cattle as an infant, Hermes gifted him the lyre. In return, Apollo gave Hermes the caduceus, forming a lasting alliance."},
  ]
};

let currentRelationshipType = 'all';
let linksSelection;

// D3.js configuration
const width = window.innerWidth * 1.9;
const height = window.innerHeight * 1.8; 
const cardWidth = 230;
const cardHeight = 260;

const svg = d3.select("#tree-svg")
  .attr("viewBox", `0 0 ${width} ${height}`);

const g = svg.append("g");

// Criar containers separados para links e nodes para controlar z-index
const linksContainer = g.append("g").attr("class", "links-container");
const nodesContainer = g.append("g").attr("class", "nodes-container");

const zoom = d3.zoom()
  .scaleExtent([0.3, 3])
  .on("zoom", (event) => {
    g.attr("transform", event.transform);
  });

svg.call(zoom);

// distancia entre deuses
const tree = d3.tree()
  .size([
    isMobile ? width * 2.0 : width,
    isMobile ? height * 1.1 : height
  ])
  .separation((a, b) => {
    if (isMobile) {
      return a.parent === b.parent ? 65 : 75;
    }
    return a.parent === b.parent ? 31 : 36;
  });


// Criar uma raiz virtual para lidar com múltiplas raízes
const virtualRoot = {
  name: "root",
  key: "root",
  children: godsData
};

const root = d3.hierarchy(virtualRoot);
const treeData = tree(root);

// Remover a raiz virtual da visualização
const actualNodes = treeData.descendants().filter(d => d.data.key !== "root");

// Preencher relações familiares da hierarquia
relationships.family = treeData.links()
  .filter(link => link.source.data.key !== "root")
  .map(link => ({
    source: link.source.data.key,
    target: link.target.data.key,
    reason: "Parent-child relation"
  }));

// Criar relações entre irmãos
function createSiblingRelationships() {
  const siblings = [];
  const parentGroups = {};
  
  actualNodes.forEach(node => {
    if (node.parent && node.parent.data.key !== "root") {
      const parentKey = node.parent.data.key;
      if (!parentGroups[parentKey]) {
        parentGroups[parentKey] = [];
      }
      parentGroups[parentKey].push(node);
    }
  });

  Object.values(parentGroups).forEach(siblingGroup => {
    if (siblingGroup.length > 1) {
      for (let i = 0; i < siblingGroup.length - 1; i++) {
        siblings.push({
          source: siblingGroup[i].data.key,
          target: siblingGroup[i + 1].data.key,
          reason: "Siblings"
        });
      }
    }
  });

  return siblings;
}

relationships.sibling = createSiblingRelationships();

// Linhas ligações verticais (parent-child)
function calculatePathAroundCards(source, target) {
  const padding = 20;

  const sx = source.x + cardWidth / 2;
const sy = source.y + (verticalOffsets[source.data.key] || 0) + cardHeight + padding;

  const tx = target.x + cardWidth / 2;
  const ty = target.y + (verticalOffsets[target.data.key] || 0) - padding;

  const midY = sy + 80;

  return `
    M${sx},${source.y + cardHeight}
    L${sx},${sy}
    L${sx},${midY}
    L${tx},${midY}
    L${tx},${ty}
    L${tx},${target.y}
  `;
}




// Função auxiliar para obter links de irmãos
function getSiblingLinks() {
  const nodeMap = new Map();
  actualNodes.forEach(d => {
    nodeMap.set(d.data.key, d);
  });

  return relationships.sibling
    .filter(rel => nodeMap.has(rel.source) && nodeMap.has(rel.target))
    .map(rel => ({
      source: nodeMap.get(rel.source),
      target: nodeMap.get(rel.target),
      data: rel,
      isSibling: true
    }));
}

// Função auxiliar para obter links de casamentos
function getMarriageLinks() {
  const nodeMap = new Map();
  actualNodes.forEach(d => {
    nodeMap.set(d.data.key, d);
  });

  return relationships.marriage
    .filter(rel => nodeMap.has(rel.source) && nodeMap.has(rel.target))
    .map(rel => ({
      source: nodeMap.get(rel.source),
      target: nodeMap.get(rel.target),
      data: rel,
      isMarriage: true
    }));
}

// Função auxiliar para obter links de rivalidades
function getRivalryLinks() {
  const nodeMap = new Map();
  actualNodes.forEach(d => {
    nodeMap.set(d.data.key, d);
  });

  return relationships.rivalry
    .filter(rel => nodeMap.has(rel.source) && nodeMap.has(rel.target))
    .map(rel => ({
      source: nodeMap.get(rel.source),
      target: nodeMap.get(rel.target),
      data: rel,
      isRivalry: true
    }));
}

// Função auxiliar para obter links de alianças
function getAllianceLinks() {
  const nodeMap = new Map();
  actualNodes.forEach(d => {
    nodeMap.set(d.data.key, d);
  });

  return relationships.alliance
    .filter(rel => nodeMap.has(rel.source) && nodeMap.has(rel.target))
    .map(rel => ({
      source: nodeMap.get(rel.source),
      target: nodeMap.get(rel.target),
      data: rel,
      isAlliance: true
    }));
}

// Função para criar linhas de co-parenting (Kronos + Rhea -> filhos)
function calculateCoParentPathSimple(parent1, parent2, child) {
  const padding = 20;
  
  // Pontos de saída dos pais
  const p1x = parent1.x + cardWidth / 2;
  const p1y = parent1.y + cardHeight;
  
  const p2x = parent2.x + cardWidth / 2;
  const p2y = parent2.y + cardHeight;
  
  // Ponto médio entre os pais (onde se juntam)
  const meetX = (p1x + p2x) / 2;
  const meetY = Math.max(p1y, p2y) + padding + 20;
  
  // Ponto de chegada no filho
  const cx = child.x + cardWidth / 2;
  const cy = child.y;
  
  // Ponto intermédio vertical
  const midY = (meetY + cy) / 2;
  
  return `
    M${p1x},${p1y}
    L${p1x},${meetY}
    L${meetX},${meetY}
    M${p2x},${p2y}
    L${p2x},${meetY}
    M${meetX},${meetY}
    L${meetX},${midY}
    L${cx},${midY}
    L${cx},${cy}
  `;
}

// Função para obter links de co-parenting (Kronos + Rhea)
function getCoParentLinks() {
  const nodeMap = new Map();
  actualNodes.forEach(d => {
    nodeMap.set(d.data.key, d);
  });
  
  const kronos = nodeMap.get("kronos");
  const rhea = nodeMap.get("rhea");
  
  if (!kronos || !rhea) return [];
  
  const childrenKeys = ["hera", "zeus", "poseidon", "hades", "hestia", "demeter"];
  const coParentLinks = [];
  
  childrenKeys.forEach(childKey => {
    const child = nodeMap.get(childKey);
    if (child) {
      coParentLinks.push({
        parent1: kronos,
        parent2: rhea,
        target: child,
        isCoParent: true,
        data: { reason: "Children of Kronos & Rhea", detail: "Kronos and Rhea were Titans who ruled before the Olympians. Together they had six children who would become the first Olympians." }
      });
    }
  });
  
  return coParentLinks;
}

// Botão ℹ para voltar a abrir o popup
const showInfoBtn = document.getElementById('showInfo');

if (showInfoBtn) {
  showInfoBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
  });
}

// SUBSTITUIR a função getCurrentRelationships() existente por esta:
function getCurrentRelationships() {
  const childrenKeys = ["hera", "zeus", "poseidon", "hades", "hestia", "demeter"];
  
  if (currentRelationshipType === 'all') {
    // Filtrar para REMOVER as linhas diretas de Kronos para os 6 deuses
    const familyLinks = treeData.links()
      .filter(link => link.source.data.key !== "root")
      .filter(link => {
        // Remover linhas diretas de Kronos para os 6 deuses
        return !(link.source.data.key === "kronos" && childrenKeys.includes(link.target.data.key));
      });
    
    const coParentLinks = getCoParentLinks();
    const siblingLinks = getSiblingLinks();
    const marriageLinks = getMarriageLinks();
    const rivalryLinks = getRivalryLinks();
    const allianceLinks = getAllianceLinks();
    
    return [...familyLinks, ...coParentLinks, ...siblingLinks, ...marriageLinks, ...rivalryLinks, ...allianceLinks];
  } else if (currentRelationshipType === 'family') {
    const familyLinks = treeData.links()
      .filter(link => link.source.data.key !== "root")
      .filter(link => {
        return !(link.source.data.key === "kronos" && childrenKeys.includes(link.target.data.key));
      });
    
    const coParentLinks = getCoParentLinks();
    const siblingLinks = getSiblingLinks();
    const marriageLinks = getMarriageLinks();
    
    return [...familyLinks, ...coParentLinks, ...siblingLinks, ...marriageLinks];
  } else if (currentRelationshipType === 'rivalry') {
    return getRivalryLinks();
  } else if (currentRelationshipType === 'alliance') {
    return getAllianceLinks();
  }
  
  return [];
}

// SUBSTITUIR a função updateRelationships() existente por esta:
function updateRelationships() {
  linksContainer.selectAll(".link").remove();
  linksContainer.selectAll(".link-label-group").remove();

  const currentLinks = getCurrentRelationships();

  linksSelection = linksContainer.selectAll(".link")
    .data(currentLinks)
    .enter().append("path")
    .attr("class", d => {
      if (d.isCoParent) return `link family coparent`;
      if (d.isMarriage) return `link marriage`;
      if (d.isSibling) return `link sibling`;
      if (d.isRivalry) return `link rivalry`;
      if (d.isAlliance) return `link alliance`;
      return `link family`;
    })
    .attr("d", d => {
      // Co-parent links (Kronos + Rhea)
      if (d.isCoParent) {
        return calculateCoParentPathSimple(d.parent1, d.parent2, d.target);
      }
      // Links horizontais
      else if (d.isSibling || d.isMarriage || d.isRivalry || d.isAlliance) {
        let linkType = 'sibling';
        if (d.isMarriage) linkType = 'marriage';
        else if (d.isRivalry) linkType = 'rivalry';
        else if (d.isAlliance) linkType = 'alliance';
        
        return calculateHorizontalPath(d.source, d.target, linkType);
      }
      // Links verticais normais
      else {
        return calculatePathAroundCards(d.source, d.target);
      }
    })
    .attr("fill", "none")
    .attr("stroke-width", 2);

  const labelGroups = createInlineLabels(currentLinks);

  linksSelection.each(function(d, i) {
    const link = d3.select(this);
    const correspondingLabel = d3.select(labelGroups.nodes()[i]);
    
    link.on("mouseover", function(event) {

       if (d.isSibling) return;
      event.stopPropagation();
      linksContainer.classed("has-hover", true);
      correspondingLabel.classed("show", true);
      
      nodesContainer.selectAll(".node-card").style("opacity", 0.4);
      
      // Para co-parent links, destacar ambos os pais e o filho
      if (d.isCoParent) {
        nodesContainer.selectAll(".node-card").each(function(node) {
          if (node.data.key === d.parent1.data.key || 
              node.data.key === d.parent2.data.key || 
              node.data.key === d.target.data.key) {
            d3.select(this).style("opacity", 1);
          }
        });
      } else {
        nodesContainer.selectAll(".node-card").each(function(node) {
          if (node.data.key === d.source.data.key || node.data.key === d.target.data.key) {
            d3.select(this).style("opacity", 1);
          }
        });
      }
      
      if (d.data && d.data.detail) {
        showTooltip(event, d.data.reason, d.data.detail);
      }
    })
    .on("mousemove", function(event) {
      updateTooltipPosition(event);
    })
    .on("mouseout", function(event) {
      event.stopPropagation();
      linksContainer.classed("has-hover", false);
      correspondingLabel.classed("show", false);
      
      nodesContainer.selectAll(".node-card").style("opacity", 1);
      
      hideTooltip();
    });
  });

  updateLegend();
}

function createInlineLabels(currentLinks) {
  linksContainer.selectAll(".link-label-group").remove();
  
 const labelGroups = linksContainer.selectAll(".link-label-group")
  .data(currentLinks.filter(d => d.data && d.data.reason)) // só os links com reason
  .enter().append("g")
  .attr("class", "link-label-group");

labelGroups.append("rect")
  .attr("class", d => {
    if (d.isCoParent) return "link-label-rect family";
    if (d.isMarriage) return "link-label-rect marriage";
    if (d.isSibling) return "link-label-rect sibling";
    if (d.isRivalry) return "link-label-rect rivalry";
    if (d.isAlliance) return "link-label-rect alliance";
    return "link-label-rect family";
  })
  .style("pointer-events", "all");

labelGroups.append("text")
  .attr("class", "link-label-text")
  .text(d => d.data.reason)
  .style("pointer-events", "all");

  
  labelGroups.each(function(d) {
    const labelGroup = d3.select(this);
    const text = labelGroup.select(".link-label-text");
    const rect = labelGroup.select(".link-label-rect");
    
    let midX, midY;
    
    // Co-parent links
    if (d.isCoParent) {
      const p1x = d.parent1.x + cardWidth / 2;
      const p1y = d.parent1.y + cardHeight;
      const p2x = d.parent2.x + cardWidth / 2;
      const p2y = d.parent2.y + cardHeight;
      const cx = d.target.x + cardWidth / 2;
      const cy = d.target.y;
      
      const meetX = (p1x + p2x) / 2;
      const meetY = Math.max(p1y, p2y) + 40;
      
      midX = meetX;
      midY = (meetY + cy) / 2;
    }
    // Conexões verticais parente-filho
    else if (!d.isSibling && !d.isMarriage && !d.isRivalry && !d.isAlliance) {
      const sx = d.source.x + cardWidth/2;
      const sy = d.source.y + cardHeight + 20;
      const tx = d.target.x + cardWidth/2;
      const ty = d.target.y;
      
      midX = sx;
      midY = (sy + ty) / 2;
    }
    // Conexões horizontais COM OFFSETS
   else {
  const sx = d.source.x + cardWidth/2;
  const sy = d.source.y + (verticalOffsets[d.source.data.key] || 0) + cardHeight/2; // ADICIONA offset
  const tx = d.target.x + cardWidth/2;
  const ty = d.target.y + (verticalOffsets[d.target.data.key] || 0) + cardHeight/2; // ADICIONA offset
  
  let offset = 0;
  if (d.isSibling) {
    offset = 0;
  } else if (d.isMarriage) {
    offset = 50;
  } else if (d.isRivalry) {
    offset = -80;
  } else if (d.isAlliance) {
    offset = 100;
  }
  
  midX = (sx + tx) / 2;
  midY = sy + offset;  // sy já tem o verticalOffset aplicado
}
    
    text.attr("x", midX).attr("y", midY);
    
    setTimeout(() => {
      const bbox = text.node().getBBox();
      const padding = 5;
      rect
        .attr("x", bbox.x - padding)
        .attr("y", bbox.y - padding)
        .attr("width", bbox.width + padding * 2)
        .attr("height", bbox.height + padding * 2)
        .attr("rx", 4)
        .attr("ry", 4);
    }, 10);
  });
  
  return labelGroups;
}

        
// Linhas ligações horizontais com offsets diferentes para cada tipo
function calculateHorizontalPath(source, target, linkType) {
  const padding = 20;

  const sx = source.x + cardWidth / 2;
const sy = source.y + (verticalOffsets[source.data.key] || 0) + cardHeight / 2;



  const tx = target.x + cardWidth / 2;
  const ty = target.y + (verticalOffsets[target.data.key] || 0) + cardHeight / 2;

  // offsets por tipo de ligação
  let offset = 0;
  if (linkType === 'sibling') offset = 0;      // No meio
  if (linkType === 'marriage') offset = 50;    // Acima (aumentado de 30 para 50)
  if (linkType === 'rivalry') offset = -80;    // Abaixo (aumentado de -50 para -80)
  if (linkType === 'alliance') offset = 100; 

  const startY = sy + offset;
  const endY   = ty + offset;

  //ponto onde a linha sai da carta
  const startX = sx < tx
    ? source.x + cardWidth + padding   // sai pela direita
    : source.x - padding;              // sai pela esquerda

  //ponto onde entra na carta destino
  const endX = sx < tx
    ? target.x - padding               // entra pela esquerda
    : target.x + cardWidth + padding;  // entra pela direita

  const midX = (startX + endX) / 2;

  return `
    M${sx},${startY}
    L${startX},${startY}
    L${midX},${startY}
    L${midX},${endY}
    L${endX},${endY}
    L${tx},${endY}
    
  `;
}




// Função legenda baseada no tipo de relação
function updateLegend() {
  const legendContainer = document.getElementById('relationship-legend');
  
  if (currentRelationshipType === 'all') {
    legendContainer.innerHTML = `
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #4a6c48; border-radius: 18px;"></div>
        <span>Parent-child</span>
      </div>
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #679256; border-radius: 18px;"></div>
        <span>Siblings</span>
      </div>
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #c967a7; border-radius: 18px;"></div>
        <span>Marriage</span>
      </div>
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #a44c56; border-radius: 18px;"></div>
        <span>Rivalries</span>
      </div>
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #4f5aa9; border-radius: 18px;"></div>
        <span>Alliances</span>
      </div>
    `;
  } else if (currentRelationshipType === 'family') {
    legendContainer.innerHTML = `
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #4a6c48; border-radius: 18px;"></div>
        <span>Parent-child</span>
      </div>
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #679256; border-radius: 18px;"></div>
        <span>Siblings</span>
      </div>
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #d270afff; border-radius: 18px;"></div>
        <span>Marriage</span>
      </div>
    `;
  } else if (currentRelationshipType === 'rivalry') {
    legendContainer.innerHTML = `
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #a44c56; border-radius: 18px;"></div>
        <span>Rivalries</span>
      </div>
    `;
  } else if (currentRelationshipType === 'alliance') {
    legendContainer.innerHTML = `
      <div class="legend-item">
        <div style="width: 25px; height: 3px; background-color: #4f5aa9; border-radius: 18px;"></div>
        <span>Alliances</span>
      </div>
    `;
  }
}

// Funções para tooltip
const tooltip = document.getElementById('relationshipTooltip');
const tooltipTitle = document.getElementById('tooltipTitle');
const tooltipDetail = document.getElementById('tooltipDetail');

function showTooltip(event, title, detail) {
  tooltipTitle.textContent = title;
  tooltipDetail.textContent = detail;
  tooltip.classList.add('show');
  updateTooltipPosition(event);
}

function updateTooltipPosition(event) {
  const x = event.clientX;
  const y = event.clientY;
  const tooltipRect = tooltip.getBoundingClientRect();

 const offset = 35; // Distância do cursor

  // Tooltip aparece ACIMA do cursor por padrão
  let left = x - (tooltipRect.width / 2); // Centrado horizontalmente
  let top = y - tooltipRect.height - offset; // Acima do cursor

  if (left + tooltipRect.width > window.innerWidth) {
    left = x - tooltipRect.width - 15;
  }
  if (top < 10) top = 10;
  if (top + tooltipRect.height > window.innerHeight) {
    top = window.innerHeight - tooltipRect.height - 10;
  }

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

function hideTooltip() {
  tooltip.classList.remove('show');
}

// Criar defs
const defs = svg.append("defs");

//offsets oara cartas estarem em posições diferentes
const verticalOffsets = {
  zeus: 0,
  hera: -80,
  poseidon: 60,
  hades: -40,
  hestia: 60,
  demeter: -80,

  athena: -80,
  ares: 40,
  apollo: -80,
  artemis: 30,
  aphrodite: 60,
  hermes: -80,
  dionysus: 20,
  persephone: -40
};

// Criar nodes
const nodes = nodesContainer.selectAll(".node")
  .data(actualNodes)
  .enter().append("g")
  .attr("class", d => {
    let classes = `node-card ${d.data.type}`;
    if (availableGods[d.data.key]) {
      classes += " available-god";
    }
    return classes;
  })
.attr("transform", d => {
  const offsetY = verticalOffsets[d.data.key] || 0;
  return `translate(${d.x}, ${d.y + offsetY})`;
});



// Imagem do deus
nodes.append("image")
  .attr("class", "card-image")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", cardWidth)
  .attr("height", cardHeight)
  .attr("href", d => d.data.image)
  .attr("clip-path", "url(#rounded-corner)");

// Nome do deus
nodes.append("text")
  .attr("class", "card-name")
  .attr("x", cardWidth/2)
  .attr("y", 295)
  .text(d => d.data.name);

// Título do deus
nodes.append("text")
  .attr("class", "card-title")
  .attr("x", cardWidth/2)
  .attr("y", 305)
  .text(d => d.data.title);

// Event handlers (UMA VEZ SÓ!)
nodes
  .on("click", function(event, d) {
    if (availableGods[d.data.key]) {
      window.location.href = `godinfo.html?name=${d.data.key}`;
    } else {
      alert(`${d.data.name} doesn't have a detailed page yet.`);
    }
  })
  .on("mouseenter", function(event, d) {
    nodesContainer.classed("has-hover", true);
    linksContainer.classed("has-hover", true);
    
    nodesContainer.selectAll(".node-card").style("opacity", 0.5);
    d3.select(this).style("opacity", 1);
    
    const connectedNodeKeys = new Set();
    connectedNodeKeys.add(d.data.key);
    
    linksSelection.each(function(linkData) {
      let isConnected = false;
      
      if (linkData.isCoParent) {
        isConnected = linkData.parent1.data.key === d.data.key || 
                     linkData.parent2.data.key === d.data.key || 
                     linkData.target.data.key === d.data.key;
        
        if (isConnected) {
          connectedNodeKeys.add(linkData.parent1.data.key);
          connectedNodeKeys.add(linkData.parent2.data.key);
          connectedNodeKeys.add(linkData.target.data.key);
        }
      } else {
        isConnected = linkData.source.data.key === d.data.key || 
                     linkData.target.data.key === d.data.key;
        
        if (isConnected) {
          connectedNodeKeys.add(linkData.source.data.key);
          connectedNodeKeys.add(linkData.target.data.key);
        }
      }
      
      if (isConnected) {
        d3.select(this).classed("highlighted", true);
        
        const linkIndex = linksSelection.nodes().indexOf(this);
        const labelGroups = linksContainer.selectAll(".link-label-group");
        d3.select(labelGroups.nodes()[linkIndex]).classed("show", true);
      }
    });
    
    nodesContainer.selectAll(".node-card").each(function(nodeData) {
      if (connectedNodeKeys.has(nodeData.data.key)) {
        d3.select(this).style("opacity", 1);
      }
    });
  })
  .on("mouseleave", function(event, d) {
    nodesContainer.classed("has-hover", false);
    linksContainer.classed("has-hover", false);
    
    nodesContainer.selectAll(".node-card").style("opacity", 1);
    linksSelection.classed("highlighted", false);
    linksContainer.selectAll(".link-label-group").classed("show", false);
  });

// Visualização inicial
updateRelationships();

// Toggle de relações
document.querySelectorAll('.relationship-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.relationship-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentRelationshipType = btn.dataset.type;
    updateRelationships();
  });
});


function roundedCornerPath(points, radius = 15) {
  let d = `M${points[0].x},${points[0].y}`;

  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    // Direction vectors
    const v1x = curr.x - prev.x;
    const v1y = curr.y - prev.y;
    const v2x = next.x - curr.x;
    const v2y = next.y - curr.y;

    // Normalize
    const len1 = Math.hypot(v1x, v1y);
    const len2 = Math.hypot(v2x, v2y);

    const r = Math.min(radius, len1 / 2, len2 / 2);

    const p1x = curr.x - (v1x / len1) * r;
    const p1y = curr.y - (v1y / len1) * r;

    const p2x = curr.x + (v2x / len2) * r;
    const p2y = curr.y + (v2y / len2) * r;

    d += ` L${p1x},${p1y} Q${curr.x},${curr.y} ${p2x},${p2y}`;
  }

  const last = points[points.length - 1];
  d += ` L${last.x},${last.y}`;

  return d;
}

//------------- Controlos de zoom

//zoom in
document.getElementById('zoomIn').addEventListener('click', () => {
  svg.transition().call(zoom.scaleBy, 1.2);
});

//zoom out
document.getElementById('zoomOut').addEventListener('click', () => {
  svg.transition().call(zoom.scaleBy, 0.75);
});

document.getElementById('resetZoom').addEventListener('click', () => {
  const bounds = g.node().getBBox();
  const scale = 0.8;  // Reduzir um pouco o zoom inicial
  const centerX = (width - bounds.width * scale) / 2 - bounds.x * scale;
  const centerY = (height - bounds.height * scale) / 2 - bounds.y * scale + 100; // Ajustar Y
  svg.call(zoom.transform, d3.zoomIdentity.translate(centerX, centerY).scale(scale));
});


// Centrar a árvore inicialmente
setTimeout(() => {
  const bounds = g.node().getBBox();
  const scale = isMobile ? 0.45 : 0.9; // Ajustar zoom inicial
  const centerX = (width - bounds.width * scale) / 2 - bounds.x * scale;
  const centerY = (height - bounds.height * scale) / 2 - bounds.y * scale -50;
  svg.call(zoom.transform, d3.zoomIdentity.translate(centerX, centerY).scale(scale));
}, 100);

// GSAP footer animation
gsap.timeline()
  .fromTo('.footerhome .star', 
    { opacity: 0, scale: 0 }, 
    { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
  )
  .to('.footerhome .line', {
    scaleX: 1,
    duration: 1,
    ease: "power2.out",
    stagger: 0.15
  });

});