import denji from "@/assets/char-denji.jpg";
import aki from "@/assets/char-aki.jpg";
import akiAction from "@/assets/char-aki-action.jpg";
import makima from "@/assets/char-makima.jpg";
import makimaAction from "@/assets/char-makima-action.jpg";
import power from "@/assets/char-power.jpg";
import powerAction from "@/assets/char-power-action.jpg";
import reze from "@/assets/char-reze.jpg";
import rezeBomb from "@/assets/char-reze-bomb.jpg";
import pochita from "@/assets/char-pochita.jpg";

import gunfiend from "@/assets/char-gunfiend.jpg";
import devilForm from "@/assets/devil-form.jpg";

export type Character = {
  id: string;
  codename: string;
  name: string;
  classification: "HYBRID" | "DEVIL" | "CONTRACTOR" | "PUBLIC SAFETY" | "FIEND";
  rank: "S" | "A" | "B" | "C" | "Ω";
  danger: number;
  status: "ACTIVE" | "DECEASED" | "AT LARGE" | "CLASSIFIED" | "DORMANT";
  image: string;
  devilImage: string;
  fearOrigin: string;
  contract: string;
  abilities: string[];
  summary: string;
  devilForm: string;
  caseLog: string;
  arcs: string[];
  keyMoments: string[];
  relations: { id: string; type: "ALLY" | "ENEMY" | "CONTRACT" | "MANIPULATION" }[];
};

export const characters: Character[] = [
  {
    id: "ch-001",
    codename: "CSM-01",
    name: "DENJI",
    classification: "HYBRID",
    rank: "S",
    danger: 96,
    status: "ACTIVE",
    image: denji,
    devilImage: devilForm,
    fearOrigin: "Chainsaws — the embodied dread of the Chainsaw Devil, Hero of Hell.",
    contract: "Cardiac fusion with Pochita (Chainsaw Devil). Pochita serves as Denji's heart.",
    abilities: [
      "Chainsaw Hybrid transformation (head, arms, legs)",
      "Accelerated regeneration via blood intake",
      "Devil consumption — eaten devils are erased from human memory",
      "Pseudo-Hybrid partial form when low on blood",
    ],
    summary:
      "Titular protagonist. Former Yakuza-indebted Devil Hunter; killed by the Zombie Devil and revived through fusion with Pochita. Recruited by Makima into Tokyo Special Division 4. Currently a Fourth East High School student and adoptive guardian of Nayuta — Makima's reincarnation.",
    devilForm:
      "Pulling the chest cord triggers transformation: chainsaws emerge from the skull, forearms and lower legs. True Devil Form (Pochita ascendant) is plated black with paired chainsaw arms. Combined Form fused with Pochita appears as red-armored humanoid Chainsaw Devil.",
    caseLog:
      "FILE 0451 — Subject demonstrates ruthless, sadistic behavior in Hybrid Form. Notable engagements: Zombie Devil (Yakuza warehouse), Eternity Devil (hotel), Katana Man, Bomb Hybrid (Reze), Gun Fiend, Control Devil. Status: resigned from PSDH; operates publicly as Chainsaw Man.",
    arcs: ["arc-01", "arc-02", "arc-03", "arc-04", "arc-05", "arc-06"],
    keyMoments: [
      "Killed by the Zombie Devil; Pochita becomes his heart — birth of Chainsaw Man.",
      "Joins Tokyo Special Division 4 under Makima.",
      "Eternity Devil arc — drinks devil blood for 3 days to escape the looped hotel.",
      "Reze incident — first love; she is intercepted and killed by Makima.",
      "Forced to terminate the Gun Fiend — Aki Hayakawa's reanimated body.",
      "Defeats Makima by consuming her in cooked form — an act of love, not attack.",
    ],
    relations: [
      { id: "ch-002", type: "ALLY" },
      { id: "ch-003", type: "MANIPULATION" },
      { id: "ch-004", type: "ALLY" },
      { id: "ch-005", type: "ALLY" },
      { id: "ch-006", type: "CONTRACT" },
    ],
  },
  {
    id: "ch-002",
    codename: "PSD-04",
    name: "AKI HAYAKAWA",
    classification: "CONTRACTOR",
    rank: "A",
    danger: 74,
    status: "DECEASED",
    image: aki,
    devilImage: akiAction,
    fearOrigin: "Lost family to the Gun Devil. Vengeance defines all contracts.",
    contract: "Curse Devil (life-toll execution nail). Future Devil (precognition, right eye). Former: Fox Devil (summoning, terminated).",
    abilities: [
      "Curse Sword — drives a spectral nail of bone-fox into a target; kills in three strikes",
      "Future Devil sight — sees 2 seconds ahead, no blind spots",
      "Fox Devil summoning (revoked after Katana Man arc)",
      "Master swordsman, expert marksman",
    ],
    summary:
      "Deuteragonist. Senior operative of Tokyo Special Division 4, partnered originally with Himeno. Stoic façade over deep loyalty; primary motivation: revenge against the Gun Devil for his family's deaths. Killed by the Gun Devil and reanimated as the Gun Fiend (20% Gun Devil possession).",
    devilForm:
      "GUN FIEND — M1911 barrel embedded between the eyes, hammer protruding from the back of the skull, M4 carbine replacing the left forearm. Possesses 20% of the Gun Devil's flesh.",
    caseLog:
      "Multiple devil contracts radically shortened lifespan. Final operational status: KIA during Control Devil engagement; corpse weaponized by Makima as the Gun Fiend. Terminated by CSM-01 in the snow — imagined the duel as a snowball fight with his late brother Taiyo.",
    arcs: ["arc-01", "arc-02", "arc-04", "arc-05", "arc-06"],
    keyMoments: [
      "Family killed by the Gun Devil during childhood — sole survivor.",
      "Partnered with Himeno; mourns her after the Katana Man arc.",
      "Forms a Future Devil contract — sees Denji and Power dying horribly.",
      "Killed during the Gun Devil arc; body taken by Makima as the Gun Fiend.",
      "Executed by Denji in the snow — the series' emotional apex.",
    ],
    relations: [
      { id: "ch-001", type: "ALLY" },
      { id: "ch-004", type: "ALLY" },
      { id: "ch-003", type: "MANIPULATION" },
    ],
  },
  {
    id: "ch-003",
    codename: "PSD-00",
    name: "MAKIMA",
    classification: "DEVIL",
    rank: "Ω",
    danger: 100,
    status: "DECEASED",
    image: makima,
    devilImage: makimaAction,
    fearOrigin: "Control / Conquest — the fear of being ruled. One of the Four Horsemen.",
    contract: "Contract with the Prime Minister of Japan: any fatal injury is transferred to a random Japanese citizen as illness or accident.",
    abilities: [
      "Control — brainwashes any being deemed 'lesser' (humans, animals, devils, fiends, hybrids)",
      "Force Manipulation — invisible 'Bang!' projection, ritual long-range crushing",
      "Channels victims' devil powers via chains (Angel, Future, Snake, Punishment, Princi, Zombie)",
      "Remote hearing through controlled rats, birds, animals",
      "Enhanced strength, smell-based identification, near-immortal regeneration",
    ],
    summary:
      "True identity: the CONTROL DEVIL (支配の悪魔), member of the Four Horsemen. Publicly the Chief Cabinet Secretary's Personal Devil Hunter and director of Tokyo Special Division 4. Killed twenty-six times before the Gun Devil engagement; reincarnated after death as Nayuta in China.",
    devilForm:
      "No fixed devil form; manifests through chains, summoned victims, and ritual control. Engineered the Gun Devil's distribution and the Reze and Aki incidents to break Denji and seize Pochita.",
    caseLog:
      "ALL FILES SEALED. Stated goal: use Chainsaw Man to erase fear, death, and 'bad movies' from the world — and to be with Pochita forever. Defeated by Denji, who killed and consumed her cooked corpse — bypassing her contract by reframing the act as love.",
    arcs: ["arc-01", "arc-02", "arc-03", "arc-04", "arc-05", "arc-06"],
    keyMoments: [
      "Recruits Denji as her 'human pet' under Public Safety.",
      "Personally executes Reze before she can reunite with Denji.",
      "Survives a direct shot from the Gun Devil — Public Safety casualties exceed 1.2 million.",
      "Reveals herself as the Control Devil; kills Power instantly with 'Bang!'.",
      "Consumed by Denji as cooked meals; reincarnated in China as Nayuta.",
    ],
    relations: [
      { id: "ch-001", type: "MANIPULATION" },
      { id: "ch-002", type: "MANIPULATION" },
      { id: "ch-004", type: "ENEMY" },
      { id: "ch-006", type: "ENEMY" },
    ],
  },
  {
    id: "ch-004",
    codename: "CSM-02",
    name: "POWER",
    classification: "FIEND",
    rank: "A",
    danger: 68,
    status: "DECEASED",
    image: power,
    devilImage: powerAction,
    fearOrigin: "Blood — the embodied concept. Tritagonist of the Public Safety Saga.",
    contract: "Single contract with Denji: blood granted in exchange for Denji finding and befriending her reincarnated Blood Devil form.",
    abilities: [
      "Blood Manipulation — weaponizes own blood freely",
      "Blood Hammer (signature), Blood Knife, Blood Spear, Blood Scythe",
      "Manipulation of others' blood through direct contact",
      "Enhanced strength and speed; Fiend regeneration",
    ],
    summary:
      "Blood Fiend (血の魔人) of Tokyo Special Division 4. Inhabits the corpse of an unknown long-haired girl. Bratty, vulgar, narcissistic, and a chronic liar — yet developed genuine love for her cat Meowy and her 'first friend' Denji. Killed by Makima during the Control Devil arc.",
    devilForm:
      "Blood Devil true form — tall four-armed humanoid, red-clawed limbs, exposed ribcage spilling intestines, cat-like tail, cross-pupiled eyes. Manifested briefly during the final battle.",
    caseLog:
      "Hoards bath access; refuses to flush. PTSD following Hell incursion (Darkness Devil) — required Denji and Aki for daily care. Sacrificed herself rather than betray Denji to Makima. Transferred her blood to Denji pre-mortem to enable Makima's defeat.",
    arcs: ["arc-01", "arc-02", "arc-04", "arc-06"],
    keyMoments: [
      "Tricks Denji into a Bat Devil trap to save Meowy — then atones, repays the debt.",
      "Joins Aki's household; bratty-sister dynamic with Aki, sibling bond with Denji.",
      "Eternity Devil hotel — endures 3 looped days alongside the squad.",
      "Survives Hell — develops crippling fear of the Darkness Devil.",
      "Killed by Makima's 'Bang!'. Final pact: blood transferred into Denji.",
    ],
    relations: [
      { id: "ch-001", type: "ALLY" },
      { id: "ch-002", type: "ALLY" },
      { id: "ch-003", type: "ENEMY" },
    ],
  },
  {
    id: "ch-005",
    codename: "BMB-01",
    name: "REZE",
    classification: "HYBRID",
    rank: "A",
    danger: 82,
    status: "DECEASED",
    image: reze,
    devilImage: rezeBomb,
    fearOrigin: "Bombs — sudden, total detonation.",
    contract: "Surgically fused with the Bomb Devil. Soviet-trained intelligence asset deployed to extract the Chainsaw Devil's heart.",
    abilities: [
      "Pull-cord neck transformation — head replaced by a bomb",
      "Body weaponized into propelled explosive limbs",
      "Aerial combat, high-velocity regeneration",
      "Espionage and close-combat training",
    ],
    summary:
      "Foreign hybrid asset disguised as a café waitress. Forms a sincere bond with Denji — promised to run away with him to live a normal life. Mission: capture Chainsaw Man's heart for the USSR. Intercepted and personally killed by Makima at the rendezvous point.",
    devilForm:
      "BOMB HYBRID (爆 (ばく) 弾 (だん) ハイブリッド) — pulls neck cord to detonate; sustained explosive output limited by available organic mass.",
    caseLog:
      "Cross-border infiltration confirmed. Engaged CSM-01 across café, school, aquarium, and HQ. Emotional manipulation nearly succeeded. Body destroyed by DIRECTOR personally; Denji never told the truth.",
    arcs: ["arc-02"],
    keyMoments: [
      "Befriends Denji at the café; offers him a 'normal life' escape.",
      "Reveals Bomb Hybrid form; assaults Public Safety HQ.",
      "Returns to honor the school rendezvous — killed by Makima before reuniting with Denji.",
    ],
    relations: [
      { id: "ch-001", type: "ALLY" },
      { id: "ch-003", type: "ENEMY" },
    ],
  },
  {
    id: "ch-006",
    codename: "POC-00",
    name: "POCHITA",
    classification: "DEVIL",
    rank: "S",
    danger: 99,
    status: "DORMANT",
    image: pochita,
    devilImage: devilForm,
    fearOrigin: "Chainsaws — feared by every devil in Hell. Known as the 'Hero of Hell'.",
    contract: "Cardiac fusion with Denji. Conditional dormancy — Pochita serves as heart so Denji may live a normal life.",
    abilities: [
      "Devil consumption — eaten devils are erased from human memory and existence",
      "Erased concepts include Nazism, nuclear war, AIDS (per canonical fragments)",
      "Massive regeneration; chainsaw-blade manifestation",
      "True form: towering plated chainsaw beast",
    ],
    summary:
      "True identity: the CHAINSAW DEVIL (チェンソーの悪魔). Found dying by Denji and sealed a contract for shared survival in exchange for Denji's simple dreams. Voluntarily became Denji's heart after his murder. Object of Makima's true affection — the entire Public Safety conspiracy was to be with him.",
    devilForm:
      "True Form: black-armored bipedal beast, paired chainsaw arms, towering far above human scale. Manifests when Denji surrenders consciousness. Capable of erasing any devil's name from human memory upon consumption.",
    caseLog:
      "DECLASSIFIED FRAGMENT: 'The devils he eats are forgotten — Nazism, nuclear war, AIDS, all erased by the Hero of Hell.' Defeated Makima in the final confrontation; killed her several times. Currently dormant within CSM-01.",
    arcs: ["arc-01", "arc-06"],
    keyMoments: [
      "Found bleeding by Denji; sealed the heart-contract.",
      "Becomes Denji's heart after his death — birth of Chainsaw Man.",
      "Manifests fully during Control Devil arc; defeats Makima alongside Denji.",
    ],
    relations: [
      { id: "ch-001", type: "CONTRACT" },
      { id: "ch-003", type: "ENEMY" },
    ],
  },
];

export const getCharacter = (id: string) => characters.find((c) => c.id === id);

// ===== STORY ARCS =====
export type Arc = {
  id: string;
  number: string;
  title: string;
  era: string;
  tone: string;
  summary: string;
  keyEvents: string[];
  characters: string[];
  status: "RESOLVED" | "ONGOING" | "REDACTED";
  threat: number;
};

export const arcs: Arc[] = [
  {
    id: "arc-01",
    number: "01",
    title: "INTRODUCTION // BAT DEVIL // ETERNITY DEVIL",
    era: "Public Safety Recruitment — Tokyo Special Division 4",
    tone: "Chaotic. Comedic. Violent bonding.",
    summary:
      "Denji is killed by the Zombie Devil-controlled Yakuza, fused with Pochita, and recruited by Makima. First missions alongside Aki Hayakawa, then the Blood Fiend Power. Concludes with the Eternity Devil's hotel loop — three days of carnage to escape.",
    keyEvents: [
      "Denji dies; Pochita becomes his heart — Chainsaw Man is born.",
      "Makima recruits him into Tokyo Special Division 4.",
      "Power betrays Denji to save Meowy — atones; squad cohabitation begins.",
      "Eternity Devil hotel: 3-day blood loop, Denji escapes by drinking devil blood.",
    ],
    characters: ["ch-001", "ch-002", "ch-003", "ch-004"],
    status: "RESOLVED",
    threat: 55,
  },
  {
    id: "arc-02",
    number: "02",
    title: "KATANA MAN // BOMB GIRL (REZE)",
    era: "Foreign Infiltration",
    tone: "Romance. Betrayal. First emotional wound.",
    summary:
      "Yakuza-aligned Katana Man (grandson of Denji's debt-holder) attacks Division 4; Himeno dies. Foreign hybrid Reze infiltrates Tokyo as a café waitress, attempts to extract Pochita's heart. Personally terminated by Makima before reuniting with Denji.",
    keyEvents: [
      "Katana Man assault — Himeno KIA; Aki loses Fox Devil contract.",
      "Reze befriends Denji at the café — promised escape.",
      "Bomb Hybrid reveal; city-wide engagement; school rendezvous.",
      "Makima personally executes Reze — withheld from Denji.",
    ],
    characters: ["ch-001", "ch-002", "ch-003", "ch-005"],
    status: "RESOLVED",
    threat: 78,
  },
  {
    id: "arc-03",
    number: "03",
    title: "INTERNATIONAL ASSASSINS",
    era: "Global Devil Weaponization",
    tone: "Escalation. Geopolitics. Power scaling.",
    summary:
      "International bounties placed on Chainsaw Man's heart. Quanxi (Crossbow Devil hybrid) leads a multinational squad of Fiend wives. Devils confirmed as state-tier weapons. Makima reveals her ability to chain-summon controlled devils into combat.",
    keyEvents: [
      "USA, USSR, China, Germany, India deploy assassins to Tokyo.",
      "Quanxi & her Fiends versus Division 4 at the hotel.",
      "Makima manifests chained Punishment, Snake, and Spider Devil powers.",
    ],
    characters: ["ch-001", "ch-002", "ch-003", "ch-004"],
    status: "RESOLVED",
    threat: 88,
  },
  {
    id: "arc-04",
    number: "04",
    title: "SANTA CLAUS // DARKNESS DEVIL // HELL",
    era: "Cosmic Horror Incursion",
    tone: "Pure cosmic horror. Existential dread.",
    summary:
      "Santa Claus (a doll-controlling devil) and the Doll Devil engage Division 4. Hell Devil collapses the hotel into Hell itself, where the squad encounters a Primal: the DARKNESS DEVIL. Catastrophic casualties. Power develops permanent PTSD.",
    keyEvents: [
      "Santa Claus and Doll Devil arc — Kobeni betrayed and possessed.",
      "Hell Devil drops the hotel into Hell.",
      "Darkness Devil mutilates Quanxi's Fiends and Power on greeting.",
      "Emergency extraction by CSM-01 only.",
    ],
    characters: ["ch-001", "ch-004"],
    status: "REDACTED",
    threat: 100,
  },
  {
    id: "arc-05",
    number: "05",
    title: "GUN DEVIL // THE BREAKING POINT",
    era: "Government Conspiracy",
    tone: "Tragedy. Betrayal. Loss of innocence.",
    summary:
      "Makima manipulates the Gun Devil's distribution: USA holds 50%, Russia 28%, Japan 20%, the rest scattered. Aki confronts the Gun Devil — killed and reanimated as the Gun Fiend. Denji is forced to terminate his closest friend in a snowfield.",
    keyEvents: [
      "1.2 million civilian deaths attributed to Gun Devil's worldwide passage.",
      "Makima slaughters Public Safety in pursuit of the Gun Devil's flesh.",
      "Aki KIA; reanimated as the Gun Fiend (20% Gun Devil possession).",
      "Denji executes the Gun Fiend in the snow — imagined as a snowball fight.",
    ],
    characters: ["ch-001", "ch-002", "ch-003"],
    status: "RESOLVED",
    threat: 96,
  },
  {
    id: "arc-06",
    number: "06",
    title: "CONTROL DEVIL // MAKIMA REVEAL",
    era: "Final Confrontation",
    tone: "Identity collapse. Liberation through devastation.",
    summary:
      "Makima's true identity confirmed: the CONTROL DEVIL, Four Horsemen. She kills Power instantly with 'Bang!'. Denji surrenders; Pochita ascends to True Devil Form. Final confrontation ends with Denji cooking and eating Makima's corpse — an act of love that bypasses her contract. She reincarnates as Nayuta.",
    keyEvents: [
      "Makima reveals herself; kills Power with 'Bang!'.",
      "Power transfers her blood into Denji as her final pact.",
      "Pochita ascends — True Chainsaw Devil battles the Control Devil.",
      "Denji bypasses Makima's contract by killing her as love, not attack.",
      "Makima reincarnated as Nayuta in China; Denji adopts her.",
    ],
    characters: ["ch-001", "ch-003", "ch-004", "ch-006"],
    status: "RESOLVED",
    threat: 100,
  },
];

export const getArc = (id: string) => arcs.find((a) => a.id === id);
