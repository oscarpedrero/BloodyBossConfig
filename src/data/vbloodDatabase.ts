// Auto-generated VBlood Database for BloodyBoss Configuration Tool
// Generated from VBloodDatabase.cs
// Total VBloods with abilities: 459
// Total entries in source: 514
// Generated on: 2025-07-13 17:41:20

export interface VBloodAbility {
  slot: number;
  guid: number;
  category: string;
  castTime?: number;
  cooldown?: number;
  behaviorType?: string;
}

export interface VBloodInfo {
  prefabGuid: number;
  name: string;
  level: number;
  comment: string;
  canFly: boolean;
  features: string[];
  abilityCount: number;
  abilities: VBloodAbility[];
}

export const VBLOOD_DATABASE: VBloodInfo[] = [
  {
    prefabGuid: -2122682556,
    name: "Finn the Fisherman",
    level: 32,
    comment: "Finn the Fisherman",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 13,
    abilities: [
      {
        slot: 0,
        guid: 1516349451,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 1,
        guid: 643209588,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 2,
        guid: -1807544727,
        category: "BasicAttack",
        castTime: 2.2,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 571532506,
        category: "Special",
        castTime: 1.6,
        behaviorType: "Hover"
      },
      {
        slot: 4,
        guid: -2096565232,
        category: "Special",
        behaviorType: "Hover"
      },
      {
        slot: 5,
        guid: -1601441951,
        category: "Special",
        behaviorType: "Hover"
      },
      {
        slot: 6,
        guid: -82547339,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 7,
        guid: 647582679,
        category: "Movement",
        behaviorType: "Hover"
      },
      {
        slot: 8,
        guid: 396802528,
        category: "Movement",
        behaviorType: "Hover"
      },
      {
        slot: 9,
        guid: -1657698157,
        category: "Movement",
        behaviorType: "Hover"
      },
      {
        slot: 10,
        guid: -228936316,
        category: "Unknown",
        behaviorType: "Hover"
      },
      {
        slot: 11,
        guid: 514628041,
        category: "Unknown",
        behaviorType: "Hover"
      },
      {
        slot: 12,
        guid: -405467076,
        category: "Unknown",
        castTime: 1.6,
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: -2114140065,
    name: "Slave Master",
    level: 65,
    comment: "Slave Master",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -1969627539,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: 1423169435,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -725150213,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 3,
        guid: 401195214,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -2110724275,
    name: "Wolf",
    level: 10,
    comment: "Wolf",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      }
    ]
  },
  {
    prefabGuid: -2092246077,
    name: "Stone Golem",
    level: 48,
    comment: "Stone Golem",
    canFly: false,
    features: ["Demon"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1272395899,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: -2092104425,
    name: "Giant Bat",
    level: 90,
    comment: "Giant Bat",
    canFly: false,
    features: ["Demon"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1099406988,
        category: "Special",
        castTime: 1.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -2089362645,
    name: "Carver",
    level: 73,
    comment: "Carver",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1074626555,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -1472848281,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -1698228064,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 628133433,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -2086433846,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -2086044081,
    name: "Deadeye",
    level: 26,
    comment: "Deadeye",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1336193986,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -2085282780,
    name: "Villager",
    level: 52,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1055785998,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -1617717290,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -2080231735,
    name: "Blood Prophet",
    level: 57,
    comment: "Blood Prophet",
    canFly: false,
    features: ["Demon"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -347082762,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1717961213,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -2046268156,
    name: "Night Lurker",
    level: 62,
    comment: "Night Lurker",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -195118922,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -413591328,
        category: "BasicAttack",
        castTime: 0.2
      },
      {
        slot: 2,
        guid: -14207169,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 3,
        guid: 1708209167,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -2039908510,
    name: "Nibbles the Putrid Rat",
    level: 30,
    comment: "Nibbles the Putrid Rat",
    canFly: false,
    features: ["Beast", "VBlood"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -1199198217,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1450204157,
        category: "Buff",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: -70575944,
        category: "BasicAttack",
        castTime: 0.2
      },
      {
        slot: 3,
        guid: -1024883556,
        category: "Special",
        castTime: 2.4
      },
      {
        slot: 4,
        guid: 830495620,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: -2039670689,
    name: "Miner",
    level: 14,
    comment: "Miner",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 2039677643,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1340319300,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 900927411,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -2037006512,
    name: "Blood Treant",
    level: 60,
    comment: "Blood Treant",
    canFly: false,
    features: ["Demon"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1671419025,
        category: "BasicAttack",
        castTime: 2.2
      },
      {
        slot: 1,
        guid: -968756307,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -573678829,
        category: "BasicAttack",
        castTime: 2.5
      },
      {
        slot: 3,
        guid: 761844990,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -2025921616,
    name: "Villager",
    level: 52,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1055785998,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -2025101517,
    name: "Errol the Stonebreaker",
    level: 20,
    comment: "Errol the Stonebreaker",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: -331113507,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1684865572,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -96620724,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: 2078583785,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: -47403235,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: 1267543813,
        category: "Special",
        castTime: 0.3
      },
      {
        slot: 6,
        guid: 593979922,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 7,
        guid: 1688748795,
        category: "Movement",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: -2020619708,
    name: "Ghost Assassin",
    level: 60,
    comment: "Ghost Assassin",
    canFly: false,
    features: ["Demon", "Cursed"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1323999965,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 3,
        guid: -1058201566,
        category: "Movement",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -2018710724,
    name: "Zapper",
    level: 78,
    comment: "Zapper",
    canFly: false,
    features: ["Mechanical", "Gloomrot"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -1081890077,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1126624947,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -730217983,
        category: "BasicAttack",
        castTime: 2.5,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: -568845499,
        category: "Special",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -2013903325,
    name: "Mairwyn the Elementalist",
    level: 70,
    comment: "Mairwyn the Elementalist",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 10,
    abilities: [
      {
        slot: 0,
        guid: 1520734123,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 1187623532,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 91941562,
        category: "BasicAttack",
        castTime: 3.5
      },
      {
        slot: 3,
        guid: -1897317770,
        category: "Special",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 1217615468,
        category: "Special",
        castTime: 1.8,
        behaviorType: "Projectile"
      },
      {
        slot: 5,
        guid: -2025881745,
        category: "Special",
        castTime: 3.0
      },
      {
        slot: 6,
        guid: 886063983,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: 1365358996,
        category: "Movement",
        castTime: 0.8
      },
      {
        slot: 8,
        guid: -1232816408,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 9,
        guid: -139137314,
        category: "Movement",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -2002658567,
    name: "Crow",
    level: 14,
    comment: "Crow",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 898033701,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -2125818102,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 1333250097,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -1988959460,
    name: "Miner",
    level: 42,
    comment: "Miner",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 2013132333,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: -1968372384,
    name: "Jade the Vampire Hunter",
    level: 57,
    comment: "Jade the Vampire Hunter",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood", "Vampire"],
    abilityCount: 12,
    abilities: [
      {
        slot: 0,
        guid: 688350142,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1783782358,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1884688827,
        category: "BasicAttack",
        castTime: 1.6,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: 1372353064,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 4,
        guid: -1294182358,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: -1030552412,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: -526118698,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 76767983,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: 501615608,
        category: "Movement"
      },
      {
        slot: 9,
        guid: -453760177,
        category: "Movement",
        castTime: 1.1,
        behaviorType: "Channeling"
      },
      {
        slot: 10,
        guid: -2013216961,
        category: "Unknown",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 11,
        guid: 1196517991,
        category: "Unknown",
        castTime: 0.8,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1967480038,
    name: "Undead Guardian",
    level: 42,
    comment: "Undead Guardian",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1254118139,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -313746247,
        category: "Defensive",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: -955554663,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 124368471,
        category: "Movement",
        castTime: 0.2
      }
    ]
  },
  {
    prefabGuid: -1942352521,
    name: "Beatrice the Tailor",
    level: 40,
    comment: "Beatrice the Tailor",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: 1637511208,
        category: "Ultimate",
        castTime: 5.5
      },
      {
        slot: 1,
        guid: -915929892,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: 701450949,
        category: "BasicAttack",
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: 1741189817,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 1460741503,
        category: "Defensive",
        castTime: 1.5,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: -382913708,
        category: "Special",
        castTime: 0.9,
        behaviorType: "Travel"
      },
      {
        slot: 6,
        guid: 1563014858,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: 88850785,
        category: "Defensive",
        castTime: 0.1
      },
      {
        slot: 8,
        guid: 183752077,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 9,
        guid: -382913708,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "Travel"
      },
      {
        slot: 10,
        guid: 1551140710,
        category: "Unknown",
        castTime: 0.1,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: -1936575244,
    name: "Gorecrusher the Behemoth",
    level: 84,
    comment: "Gorecrusher the Behemoth",
    canFly: false,
    features: ["Beast", "Cursed", "VBlood"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: -1771783202,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 756139644,
        category: "Buff"
      },
      {
        slot: 2,
        guid: 2067796423,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 3,
        guid: -130931989,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 556335075,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: 1221980502,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 6,
        guid: -749389155,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "Dash"
      },
      {
        slot: 7,
        guid: -430375110,
        category: "Movement",
        castTime: 0.3
      },
      {
        slot: 8,
        guid: 1439273397,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 9,
        guid: -453331838,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 10,
        guid: -1574537639,
        category: "Unknown",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1928607398,
    name: "Fallen Angel",
    level: 0,
    comment: "Fallen Angel",
    canFly: false,
    features: ["Demon"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1629569043,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -1643450845,
        category: "Special",
        castTime: 0.7,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: -1336700473,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: -1925881340,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1917548708,
    name: "Barrel Disguise",
    level: 62,
    comment: "Barrel Disguise",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1252510507,
        category: "Summon",
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1915060856,
    name: "Corrupted Mantrap",
    level: 72,
    comment: "Corrupted Mantrap",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 544237275,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 1033948100,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 998806487,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 3,
        guid: 1026449575,
        category: "Summon",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1914181232,
    name: "Tazer",
    level: 43,
    comment: "Tazer",
    canFly: false,
    features: ["Beast", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -680710725,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 1,
        guid: -1630648333,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1905691330,
    name: "Alpha the White Wolf",
    level: 16,
    comment: "Alpha the White Wolf",
    canFly: false,
    features: ["Beast", "VBlood"],
    abilityCount: 10,
    abilities: [
      {
        slot: 0,
        guid: -1654954396,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: 1558429115,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 2,
        guid: 920051497,
        category: "Movement",
        castTime: 1.7,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 280173050,
        category: "Movement",
        castTime: 1.7,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: -1161539168,
        category: "Movement",
        castTime: 1.7,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: 2145136774,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Dash"
      },
      {
        slot: 6,
        guid: -821573025,
        category: "Movement",
        castTime: 0.7,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: 1456629565,
        category: "Movement",
        castTime: 0.8
      },
      {
        slot: 8,
        guid: 247740796,
        category: "Movement",
        castTime: 1.3
      },
      {
        slot: 9,
        guid: 544754926,
        category: "Buff",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: -1897484769,
    name: "Ace Incinerator",
    level: 74,
    comment: "Ace Incinerator",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -297165667,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1954926268,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: -1462866563,
        category: "BasicAttack",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -1884553416,
    name: "Crimson Maiden",
    level: 83,
    comment: "Crimson Maiden",
    canFly: false,
    features: ["Mechanical", "Vampire"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1636251764,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: -885902431,
        category: "Buff",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: -1221546136,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 3,
        guid: 560207432,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 4,
        guid: 566224334,
        category: "Special",
        castTime: 1.6
      }
    ]
  },
  {
    prefabGuid: -1875351031,
    name: "Ruffian",
    level: 63,
    comment: "Ruffian",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -983491078,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 2122592609,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: 506072916,
        category: "BasicAttack",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -1846851895,
    name: "Harpy Dasher",
    level: 66,
    comment: "Harpy Dasher",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 191219781,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 1524767753,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: 437523703,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 705089395,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: -1832935107,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1822337177,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: 780432315,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -323939446,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1272200774,
        category: "BasicAttack",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      },
      {
        slot: 3,
        guid: 1971375367,
        category: "Special",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      },
      {
        slot: 4,
        guid: 2145809434,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: 622287046,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: -184530068,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 7,
        guid: 852659329,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -1810631919,
    name: "Shady Goods Dealer",
    level: 34,
    comment: "Shady Goods Dealer",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1844993528,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: 787005490,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -1805216630,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 787702249,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 651637774,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1795148379,
        category: "Special",
        castTime: 1.6
      },
      {
        slot: 3,
        guid: 1325722355,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 461701172,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 5,
        guid: 1583944483,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: -1799461404,
    name: "Militia Crossbow",
    level: 42,
    comment: "Militia Crossbow",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -1802963726,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1843850355,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 3,
        guid: -342380924,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 4,
        guid: 262116525,
        category: "Special",
        castTime: 1.1
      },
      {
        slot: 5,
        guid: 1660777757,
        category: "Special",
        castTime: 1.1
      }
    ]
  },
  {
    prefabGuid: -1794508086,
    name: "Blood Golem",
    level: 80,
    comment: "Blood Golem",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -2060534730,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1660458588,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1749064378,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 3,
        guid: 1510954952,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -793376955,
        category: "Special",
        castTime: 2.5
      }
    ]
  },
  {
    prefabGuid: -1789347076,
    name: "Skeleton Mage",
    level: 22,
    comment: "Skeleton Mage",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -20539715,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1788957652,
    name: "Nun",
    level: 46,
    comment: "Nun",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1199987827,
        category: "Special",
        castTime: 1.3,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 919394375,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: 22263894,
        category: "BasicAttack",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: -1786031969,
    name: "Villager",
    level: 52,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1055785998,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -1617717290,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -1779239433,
    name: "Skeleton",
    level: 2,
    comment: "Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1772194590,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -1773935659,
    name: "Militia Veteran",
    level: 54,
    comment: "Militia Veteran",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1528770669,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 951831242,
        category: "Defensive",
        castTime: 0.7
      },
      {
        slot: 2,
        guid: 892342913,
        category: "Movement",
        castTime: 1.3,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1750347680,
    name: "Scarecrow",
    level: 54,
    comment: "Scarecrow",
    canFly: false,
    features: ["Demon"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -1436929556,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 382761265,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: 741783094,
        category: "Defensive",
        castTime: 0.1,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 594778109,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1737346940,
    name: "Divine Angel",
    level: 80,
    comment: "Divine Angel",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -105601189,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 124285667,
        category: "Movement",
        castTime: 0.7,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 31826871,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 1927100043,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 985669672,
        category: "Special",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: -1733829912,
    name: "Lurker",
    level: 73,
    comment: "Lurker",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1115417829,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -1728284448,
    name: "Priest",
    level: 76,
    comment: "Priest",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -292542362,
        category: "Special",
        castTime: 1.7,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1282606238,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: 943885425,
        category: "Summon",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -1722506709,
    name: "Rotting Ghoul",
    level: 4,
    comment: "Rotting Ghoul",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 32629003,
        category: "BasicAttack",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -1722278689,
    name: "Giant Rat",
    level: 22,
    comment: "Giant Rat",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1007898441,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1719944550,
    name: "Footman",
    level: 65,
    comment: "Footman",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 979394873,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -153669671,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 2,
        guid: 30220474,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 3,
        guid: 680715401,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 4,
        guid: 530843430,
        category: "Special",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: -1719333743,
    name: "Militia Crossbow",
    level: 36,
    comment: "Militia Crossbow",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1418783710,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1707267769,
    name: "Batoon",
    level: 58,
    comment: "Batoon",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1311267272,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -1697944553,
    name: "Corrupted Bear",
    level: 78,
    comment: "Corrupted Bear",
    canFly: false,
    features: ["Beast"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1745337333,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1241654227,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 2,
        guid: -193432841,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -388636006,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 369886705,
        category: "Special",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -1671572471,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1670130821,
    name: "Bell Ringer",
    level: 36,
    comment: "Bell Ringer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1276793139,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: 2073002423,
        category: "BasicAttack",
        castTime: 7.0
      }
    ]
  },
  {
    prefabGuid: -1669199769,
    name: "Stavros the Carver",
    level: 75,
    comment: "Stavros the Carver",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 12,
    abilities: [
      {
        slot: 0,
        guid: -1457510412,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: -1796211602,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: 1798105602,
        category: "BasicAttack",
        castTime: 1.3,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 964878669,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 4,
        guid: 2102431676,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 5,
        guid: 1147924409,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 6,
        guid: -833255541,
        category: "Movement",
        castTime: 0.8
      },
      {
        slot: 7,
        guid: -1592003626,
        category: "Summon",
        castTime: 0.7
      },
      {
        slot: 8,
        guid: 684024768,
        category: "Movement",
        castTime: 0.6
      },
      {
        slot: 9,
        guid: 1705726981,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 10,
        guid: 2103931135,
        category: "Unknown",
        castTime: 2.0
      },
      {
        slot: 11,
        guid: -1808411682,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: -1659842473,
    name: "Woodcutter",
    level: 34,
    comment: "Woodcutter",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 845410366,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -1659822956,
    name: "Quincey the Bandit King",
    level: 37,
    comment: "Quincey the Bandit King",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: 455219779,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -453755281,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 2,
        guid: 2003603501,
        category: "Special",
        castTime: 1.6
      },
      {
        slot: 3,
        guid: 840159262,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 69086718,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 5,
        guid: 82350674,
        category: "Special",
        castTime: 0.6,
        behaviorType: "Dash"
      },
      {
        slot: 6,
        guid: 1452056926,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Channeling"
      },
      {
        slot: 7,
        guid: 358187796,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 8,
        guid: -3835897,
        category: "Special",
        castTime: 1.4
      }
    ]
  },
  {
    prefabGuid: -1653554504,
    name: "Skeleton Priest",
    level: 27,
    comment: "Skeleton Priest",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1047491293,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1742500275,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -1642110920,
    name: "Armoured Skeleton",
    level: 40,
    comment: "Armoured Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 138513891,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -1618703048,
    name: "Ghost Warrior",
    level: 61,
    comment: "Ghost Warrior",
    canFly: false,
    features: ["Undead", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1967657578,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -1610391169,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1584807109,
    name: "Skeleton",
    level: 1,
    comment: "Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 138513891,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -1562098554,
    name: "Peon",
    level: 73,
    comment: "Peon",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 2107551739,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 651647554,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: -1554428547,
    name: "Bandit Wolf",
    level: 14,
    comment: "Bandit Wolf",
    canFly: false,
    features: ["Beast", "Bandit"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: -744145902,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1509286426,
    name: "Tazer",
    level: 46,
    comment: "Tazer",
    canFly: false,
    features: ["Beast", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -715615220,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Hover"
      },
      {
        slot: 1,
        guid: 325658714,
        category: "Movement",
        castTime: 1.6,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1508046438,
    name: "Carver",
    level: 73,
    comment: "Carver",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1074626555,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -1472848281,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -1698228064,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 628133433,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1505705712,
    name: "Willfred the Village Elder",
    level: 64,
    comment: "Willfred the Village Elder",
    canFly: false,
    features: ["Human", "Humanoid", "Werewolf", "VBlood"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: 1916767891,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -988264305,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: -566065717,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 1445822330,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: -192549213,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: -174926399,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 6,
        guid: -67893977,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 7,
        guid: 2030404176,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 8,
        guid: 1001804923,
        category: "Buff",
        castTime: 1.0,
        behaviorType: "Hover"
      },
      {
        slot: 9,
        guid: 1113171592,
        category: "Movement",
        castTime: 0.3
      },
      {
        slot: 10,
        guid: 149010586,
        category: "BasicAttack",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: -1476015811,
    name: "Giant Crow",
    level: 54,
    comment: "Giant Crow",
    canFly: false,
    features: ["Beast"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 898033701,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -2125818102,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 1333250097,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 6,
        guid: 1854645901,
        category: "Movement",
        castTime: 1.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1464869978,
    name: "Cleric",
    level: 68,
    comment: "Cleric",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -587604072,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 100549683,
        category: "Defensive",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -819795639,
        category: "Defensive",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -923957888,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 1817985064,
        category: "Special",
        castTime: 0.9,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1449631170,
    name: "Tristan the Vampire Hunter",
    level: 44,
    comment: "Tristan the Vampire Hunter",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood", "Vampire"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: 1552780633,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: -1417141477,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 2,
        guid: -343320686,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 3,
        guid: 224496996,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 4,
        guid: 1501188283,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: -175257190,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 6,
        guid: -737556373,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: -23281706,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 8,
        guid: 985201241,
        category: "Special",
        castTime: 1.2,
        behaviorType: "TargetAOE"
      },
      {
        slot: 9,
        guid: -1503146131,
        category: "Movement",
        castTime: 8.0
      },
      {
        slot: 10,
        guid: -1330984343,
        category: "Unknown",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1447279513,
    name: "Militia Guard",
    level: 40,
    comment: "Militia Guard",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 994921501,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: -485166585,
        category: "Defensive",
        castTime: 0.2
      }
    ]
  },
  {
    prefabGuid: -1438710930,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1433235567,
    name: "Bell Ringer",
    level: 36,
    comment: "Bell Ringer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1276793139,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: 2073002423,
        category: "BasicAttack",
        castTime: 7.0
      }
    ]
  },
  {
    prefabGuid: -1420322422,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["Bandit", "GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: -331113507,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1684865572,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -96620724,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: 2078583785,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: -47403235,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: 1267543813,
        category: "Special",
        castTime: 0.3
      },
      {
        slot: 6,
        guid: 593979922,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 7,
        guid: 1688748795,
        category: "Movement",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: -1418430647,
    name: "Wolf",
    level: 10,
    comment: "Wolf",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: -744145902,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1416355128,
    name: "Ruffian",
    level: 63,
    comment: "Ruffian",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -983491078,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -1399273168,
    name: "Mosquito",
    level: 60,
    comment: "Mosquito",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1451199905,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -1979483677,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1391546313,
    name: "Kodia the Ferocious Bear",
    level: 35,
    comment: "Kodia the Ferocious Bear",
    canFly: false,
    features: ["Beast", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: 1814567660,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: -1972594588,
        category: "BasicAttack",
        castTime: 2.2
      },
      {
        slot: 2,
        guid: -1709055711,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -1559349374,
        category: "Special",
        castTime: 1.7
      },
      {
        slot: 4,
        guid: -193432841,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: -388636006,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 6,
        guid: -217583794,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 7,
        guid: -1748125028,
        category: "Movement",
        behaviorType: "Hover"
      },
      {
        slot: 8,
        guid: -1155840114,
        category: "Movement"
      }
    ]
  },
  {
    prefabGuid: -1388651766,
    name: "Rock Elemental",
    level: 76,
    comment: "Rock Elemental",
    canFly: false,
    features: ["Demon"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 1903010945,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: 1262525269,
        category: "BasicAttack",
        castTime: 1.3,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 488481150,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 261951503,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -992391256,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 5,
        guid: 2110769437,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1387838833,
    name: "Ruffian",
    level: 63,
    comment: "Ruffian",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -983491078,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 2122592609,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: 506072916,
        category: "BasicAttack",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -1383529374,
    name: "Jakira the Shadow Huntress",
    level: 75,
    comment: "Jakira the Shadow Huntress",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 15,
    abilities: [
      {
        slot: 0,
        guid: 139802405,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -407341422,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 1920281924,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -1372642162,
        category: "Special",
        castTime: 0.7
      },
      {
        slot: 4,
        guid: -385314771,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 5,
        guid: -1337706250,
        category: "Special",
        castTime: 1.8
      },
      {
        slot: 6,
        guid: -315621824,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 1318543111,
        category: "Movement",
        castTime: 0.5
      },
      {
        slot: 8,
        guid: 1584749067,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 9,
        guid: 987540308,
        category: "Movement"
      },
      {
        slot: 10,
        guid: 1261373899,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Dash"
      },
      {
        slot: 11,
        guid: -1518495336,
        category: "Unknown"
      },
      {
        slot: 12,
        guid: -140727030,
        category: "Unknown"
      },
      {
        slot: 13,
        guid: -941466362,
        category: "Unknown",
        behaviorType: "Hover"
      },
      {
        slot: 14,
        guid: 168833229,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: -1381375644,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -914903899,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -321651703,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1795809188,
        category: "BasicAttack",
        castTime: 0.2
      },
      {
        slot: 3,
        guid: -939006306,
        category: "Special",
        castTime: 1.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 4,
        guid: -1036943907,
        category: "Special",
        castTime: 0.3
      },
      {
        slot: 5,
        guid: 2033547790,
        category: "Special",
        castTime: 0.2,
        behaviorType: "Hover"
      },
      {
        slot: 6,
        guid: -595482115,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -1380216646,
    name: "Corpse Pile",
    level: 38,
    comment: "Corpse Pile",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -1104043123,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 2095802125,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: 937561987,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -386396572,
        category: "Special",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -1373413273,
    name: "Brutus the Watcher",
    level: 48,
    comment: "Brutus the Watcher",
    canFly: false,
    features: ["Beast", "Militia", "VBlood"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 340577476,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -1055527085,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -215712550,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 2031950279,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 1707593926,
        category: "Special"
      },
      {
        slot: 5,
        guid: -1280459867,
        category: "Special",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: -1365931036,
    name: "Kriig the Undead General",
    level: 47,
    comment: "Kriig the Undead General",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 346834991,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: 234226418,
        category: "Special",
        castTime: 1.6
      },
      {
        slot: 2,
        guid: 948587795,
        category: "Movement",
        castTime: 1.6,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 211628325,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: -1504629350,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: -1365627158,
    name: "Undead Assassin",
    level: 35,
    comment: "Undead Assassin",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -776694525,
        category: "BasicAttack"
      },
      {
        slot: 1,
        guid: 561623729,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: -163679409,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -1651089042,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 1805214524,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: -1553594984,
        category: "BasicAttack",
        castTime: 0.3
      }
    ]
  },
  {
    prefabGuid: -1363137425,
    name: "Miner",
    level: 40,
    comment: "Miner",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -2107123661,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1340319300,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 1599972576,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1353870145,
    name: "Villager",
    level: 28,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 446999227,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1347412392,
    name: "Terrorclaw the Ogre",
    level: 76,
    comment: "Terrorclaw the Ogre",
    canFly: false,
    features: ["Beast", "VBlood"],
    abilityCount: 16,
    abilities: [
      {
        slot: 0,
        guid: -905574209,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -1568811754,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: 1387986806,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 3,
        guid: -1839296163,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 4,
        guid: 151283351,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 5,
        guid: -544868559,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: 1910986910,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 7,
        guid: 1205896854,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: 1253708985,
        category: "Movement",
        castTime: 0.5
      },
      {
        slot: 9,
        guid: -1321161639,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Dash"
      },
      {
        slot: 10,
        guid: 430166804,
        category: "Unknown",
        behaviorType: "Hover"
      },
      {
        slot: 11,
        guid: -1571128781,
        category: "Unknown",
        castTime: 0.7,
        behaviorType: "Projectile"
      },
      {
        slot: 12,
        guid: -252663641,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 13,
        guid: 320434570,
        category: "Unknown",
        castTime: 0.5
      },
      {
        slot: 14,
        guid: 691162066,
        category: "Buff"
      },
      {
        slot: 15,
        guid: -1126887871,
        category: "Unknown",
        castTime: 0.3
      }
    ]
  },
  {
    prefabGuid: -1342764880,
    name: "Farmer",
    level: 34,
    comment: "Farmer",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1850515789,
        category: "BasicAttack",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: -1308100049,
    name: "Rascal",
    level: 10,
    comment: "Rascal",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1970983747,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -1301144178,
    name: "Poacher",
    level: 16,
    comment: "Poacher",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -39311902,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 564244811,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -1880729304,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -976938930,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: -937443015,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: 1067834426,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: -1292194494,
    name: "Treasure Hunter",
    level: 80,
    comment: "Treasure Hunter",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1844993528,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: 922686381,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 2,
        guid: 787005490,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -1287507270,
    name: "Skeleton Mage",
    level: 44,
    comment: "Skeleton Mage",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 822633768,
        category: "Special",
        castTime: 1.6,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 379001645,
        category: "Special",
        castTime: 1.3,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -1287013240,
    name: "Sentinel",
    level: 81,
    comment: "Sentinel",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: -2067963108,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -123334608,
        category: "Defensive",
        castTime: 0.6,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -1138991224,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -100357751,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 481790231,
        category: "Special",
        castTime: 1.7
      },
      {
        slot: 5,
        guid: 170206690,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 6,
        guid: -637041016,
        category: "Defensive",
        castTime: 0.6
      },
      {
        slot: 7,
        guid: -838311342,
        category: "Movement",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -1266036232,
    name: "Nightfall Edge",
    level: 57,
    comment: "Nightfall Edge",
    canFly: false,
    features: ["Mechanical"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1115425417,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 1,
        guid: -1430256354,
        category: "BasicAttack"
      }
    ]
  },
  {
    prefabGuid: -1252779334,
    name: "Talzur the Winged Horror",
    level: 83,
    comment: "Talzur the Winged Horror",
    canFly: true,
    features: ["Beast", "CanFly"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -500071289,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -1224027101,
    name: "Villager",
    level: 52,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -119427343,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -1213645419,
    name: "Sentry Officer",
    level: 60,
    comment: "Sentry Officer",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1971068020,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 2052063970,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: -466422619,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -1208888966,
    name: "Foulrot the Soultaker",
    level: 63,
    comment: "Foulrot the Soultaker",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -116587794,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -280574043,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 2,
        guid: -1784566500,
        category: "Summon",
        castTime: 1.5
      },
      {
        slot: 3,
        guid: -281508142,
        category: "Special",
        castTime: 0.4,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: -1441325084,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: -597391921,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: -1208066429,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1200074387,
    name: "Shadowkin",
    level: 55,
    comment: "Shadowkin",
    canFly: false,
    features: ["Demon"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1617928948,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 530484088,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1194643220,
    name: "Rascal",
    level: 10,
    comment: "Rascal",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -1970983747,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1880729304,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -976938930,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -937443015,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 1067834426,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: -1192403515,
    name: "Villager",
    level: 52,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -119427343,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: 1397338806,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -1189707552,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -116587794,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -280574043,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 2,
        guid: -1784566500,
        category: "Summon",
        castTime: 1.5
      },
      {
        slot: 3,
        guid: -281508142,
        category: "Special",
        castTime: 0.4,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: -1441325084,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: -597391921,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: -1168705805,
    name: "Shady Gem Dealer",
    level: 34,
    comment: "Shady Gem Dealer",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1110054537,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: 1487412876,
        category: "Movement",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1160778038,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["Cursed", "GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -127603789,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -1512616160,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -1137336047,
        category: "BasicAttack",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: -1146194149,
    name: "Banshee",
    level: 63,
    comment: "Banshee",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 633696135,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -1398375841,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: -930815588,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: -1160883278,
        category: "Special",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1140588645,
    name: "Dreadhorn",
    level: 57,
    comment: "Dreadhorn",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -1362226779,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: -1924032736,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -1670440585,
        category: "BasicAttack",
        castTime: 3.0,
        behaviorType: "Hover"
      },
      {
        slot: 3,
        guid: -2081714952,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 4,
        guid: -1450279612,
        category: "Special",
        behaviorType: "Hover"
      },
      {
        slot: 5,
        guid: 1236214928,
        category: "Special",
        castTime: 3.0,
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: -1128238456,
    name: "Bomber",
    level: 32,
    comment: "Bomber",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1743551272,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -1117581429,
    name: "Withered Vampire",
    level: 52,
    comment: "Withered Vampire",
    canFly: false,
    features: ["Undead", "Humanoid", "Vampire"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -593875444,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -2125818102,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -1115032717,
    name: "Blood Corpse Pile",
    level: 80,
    comment: "Blood Corpse Pile",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -1104043123,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 2095802125,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: 937561987,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -386396572,
        category: "Special",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -1108748448,
    name: "Viper",
    level: 74,
    comment: "Viper",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -317345251,
        category: "BasicAttack",
        castTime: 1.6,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 381862924,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: 1142040823,
        category: "BasicAttack",
        castTime: 1.1,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1106602776,
    name: "Unstable Spider",
    level: 58,
    comment: "Unstable Spider",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1031367685,
        category: "Special",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -1101874342,
    name: "Domina the Blade Dancer",
    level: 60,
    comment: "Domina the Blade Dancer",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot", "VBlood"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: 1878838878,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1853889696,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: 1191517048,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 3,
        guid: -177268000,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 4,
        guid: 2016544872,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: 788963695,
        category: "Special",
        castTime: 0.9
      },
      {
        slot: 6,
        guid: -1243386667,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Channeling"
      },
      {
        slot: 7,
        guid: -1548349308,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 8,
        guid: 1851411882,
        category: "Movement",
        castTime: 0.4
      },
      {
        slot: 9,
        guid: -1143650386,
        category: "Movement",
        castTime: 1.0
      },
      {
        slot: 10,
        guid: -1372140488,
        category: "Unknown",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -1099451233,
    name: "Ghost Assassin",
    level: 60,
    comment: "Ghost Assassin",
    canFly: false,
    features: ["Demon", "Cursed"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1700777111,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: -1099047820,
    name: "Night Maiden",
    level: 57,
    comment: "Night Maiden",
    canFly: false,
    features: ["Demon"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -324538848,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 1941093851,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: -2036638378,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 951198708,
        category: "Special",
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: -1262881470,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: 175670852,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1089337069,
    name: "Treant",
    level: 36,
    comment: "Treant",
    canFly: false,
    features: ["Demon"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1671419025,
        category: "BasicAttack",
        castTime: 2.2
      },
      {
        slot: 1,
        guid: -968756307,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -573678829,
        category: "BasicAttack",
        castTime: 2.5
      },
      {
        slot: 3,
        guid: 761844990,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -1084690188,
    name: "Pixie",
    level: 35,
    comment: "Pixie",
    canFly: false,
    features: ["Undead", "Humanoid", "GateBoss"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -259433272,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1082044089,
    name: "Sentry Turret",
    level: 60,
    comment: "Sentry Turret",
    canFly: false,
    features: ["Mechanical", "Gloomrot"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1024156492,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 342417296,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -325335847,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 3,
        guid: -1060298293,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -1076780215,
    name: "Exsanguinator",
    level: 83,
    comment: "Exsanguinator",
    canFly: false,
    features: ["Demon"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: -2049927912,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -55735320,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: -1762655324,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 352570759,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: 329043640,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 5,
        guid: 2138222166,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: -53726244,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: -294731102,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: -1401138411,
        category: "Movement",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -1075824048,
    name: "Megara the Serpent Queen",
    level: 91,
    comment: "Megara the Serpent Queen",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 62301155,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 1,
        guid: 690549364,
        category: "Movement",
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: -2140645618,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Hover"
      },
      {
        slot: 3,
        guid: 438919203,
        category: "Movement",
        castTime: 1.0
      },
      {
        slot: 4,
        guid: -1859321594,
        category: "Special",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      },
      {
        slot: 5,
        guid: 29969582,
        category: "Special",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -1074322242,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -1072754152,
    name: "Miner",
    level: 40,
    comment: "Miner",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -2107123661,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1340319300,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 1599972576,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1070366200,
    name: "Railgunner",
    level: 58,
    comment: "Railgunner",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1779758273,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 101220113,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 286182923,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1065970933,
    name: "Terah the Geomancer",
    level: 53,
    comment: "Terah the Geomancer",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 12,
    abilities: [
      {
        slot: 0,
        guid: -1635892700,
        category: "Special",
        castTime: 1.7,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 1925592126,
        category: "Ultimate",
        castTime: 4.0
      },
      {
        slot: 2,
        guid: 1500843923,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 3,
        guid: -221719333,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 4,
        guid: 2106422510,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: -1148606177,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 6,
        guid: 1079488801,
        category: "Buff",
        castTime: 0.6,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: -1204505053,
        category: "Buff",
        castTime: 2.0
      },
      {
        slot: 8,
        guid: -394948183,
        category: "Movement",
        castTime: 2.5
      },
      {
        slot: 9,
        guid: -716557249,
        category: "Ultimate",
        castTime: 2.0,
        behaviorType: "Travel"
      },
      {
        slot: 10,
        guid: -598112885,
        category: "Unknown",
        castTime: 0.8
      },
      {
        slot: 11,
        guid: -2084016434,
        category: "Ultimate",
        castTime: 4.0
      }
    ]
  },
  {
    prefabGuid: -1055380229,
    name: "Giant Bat",
    level: 55,
    comment: "Giant Bat",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 5164221,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -292632051,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1493606342,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: 417450031,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 1407801281,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -1034892278,
    name: "Labworker",
    level: 58,
    comment: "Labworker",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -749335766,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -1030822544,
    name: "Deadeye",
    level: 26,
    comment: "Deadeye",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1336193986,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -1025552087,
    name: "Abomination",
    level: 61,
    comment: "Abomination",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -736079997,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 340686786,
        category: "BasicAttack",
        castTime: 3.0
      },
      {
        slot: 2,
        guid: 1459248190,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 3,
        guid: -1766338327,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 4,
        guid: -79098693,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 5,
        guid: -1485105952,
        category: "Special",
        castTime: 0.4
      }
    ]
  },
  {
    prefabGuid: -1009917656,
    name: "Nightmare",
    level: 83,
    comment: "Nightmare",
    canFly: false,
    features: ["Demon"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -1526010521,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -740078985,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -2125818102,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -1004061470,
    name: "Unstable Spider",
    level: 56,
    comment: "Unstable Spider",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -891106318,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 1790377808,
        category: "BasicAttack",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -989493184,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 346834991,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: 234226418,
        category: "Special",
        castTime: 1.6
      },
      {
        slot: 2,
        guid: 948587795,
        category: "Movement",
        castTime: 1.6,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 211628325,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: -1504629350,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: -982850914,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: 1456136938,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 1,
        guid: -1422240708,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 2,
        guid: -664569083,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -1532726733,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 1621601748,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Projectile"
      },
      {
        slot: 5,
        guid: 94933870,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 6,
        guid: 1986068244,
        category: "Special",
        castTime: 2.5
      },
      {
        slot: 7,
        guid: -39228843,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -981051151,
    name: "Nightmare",
    level: 57,
    comment: "Nightmare",
    canFly: false,
    features: ["Demon"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -1526010521,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -740078985,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -2125818102,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -951976780,
    name: "Villager",
    level: 60,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Werewolf"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 446999227,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -831562637,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 2,
        guid: 797495975,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 3,
        guid: 1063690361,
        category: "Movement",
        castTime: 0.7,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: -1789525825,
        category: "BasicAttack",
        castTime: 0.3
      }
    ]
  },
  {
    prefabGuid: -943858353,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: 1274762079,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 1,
        guid: 2130811227,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -1586810476,
        category: "Special",
        castTime: 2.2
      },
      {
        slot: 3,
        guid: 1573712465,
        category: "Special",
        castTime: 1.8,
        behaviorType: "TargetAOE"
      },
      {
        slot: 4,
        guid: -2109003637,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: 1499629710,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: 193592408,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: -1448118517,
        category: "Summon",
        castTime: 1.0
      },
      {
        slot: 8,
        guid: 1132262199,
        category: "Movement",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -935560085,
    name: "Gorecrusher Spirit",
    level: 82,
    comment: "Gorecrusher Spirit",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -1771783202,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 756139644,
        category: "Buff"
      },
      {
        slot: 2,
        guid: 1221980502,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -749389155,
        category: "Special",
        castTime: 0.9,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 2091042632,
        category: "Special"
      },
      {
        slot: 5,
        guid: 556335075,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -932793458,
    name: "Giant Bat",
    level: 90,
    comment: "Giant Bat",
    canFly: false,
    features: ["Demon"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1869894099,
        category: "Special",
        castTime: 1.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -930333806,
    name: "Knight",
    level: 71,
    comment: "Knight",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -557111974,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -1330909978,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: -1462154593,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -1175617299,
        category: "Special",
        castTime: 0.9
      },
      {
        slot: 4,
        guid: 349423116,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: -1449279362,
        category: "Special",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -924080115,
    name: "Tazer",
    level: 58,
    comment: "Tazer",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 73467714,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -915884427,
    name: "Archer",
    level: 56,
    comment: "Archer",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -751119210,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -910296704,
    name: "Matka the Curse Weaver",
    level: 76,
    comment: "Matka the Curse Weaver",
    canFly: false,
    features: ["Human", "Humanoid", "Cursed", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 1511001063,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 1294766036,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: 1860769470,
        category: "Special",
        castTime: 4.0
      },
      {
        slot: 3,
        guid: 1603735911,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 4,
        guid: 1898980277,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 5,
        guid: -1729075022,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Hover"
      },
      {
        slot: 6,
        guid: 1628136011,
        category: "Movement",
        castTime: 2.5
      }
    ]
  },
  {
    prefabGuid: -893091615,
    name: "Woodcutter",
    level: 34,
    comment: "Woodcutter",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 845410366,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -884401089,
    name: "Gattler",
    level: 78,
    comment: "Gattler",
    canFly: false,
    features: ["Mechanical", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -633982282,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Channeling"
      },
      {
        slot: 1,
        guid: 257841890,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -878541676,
    name: "Mantrap",
    level: 20,
    comment: "Mantrap",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 105274396,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 780372716,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -872078546,
    name: "Thief",
    level: 18,
    comment: "Thief",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1734839687,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: -1956103113,
        category: "BasicAttack"
      },
      {
        slot: 2,
        guid: -691814641,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 3,
        guid: -2106739571,
        category: "BasicAttack",
        castTime: 0.4
      }
    ]
  },
  {
    prefabGuid: -864975423,
    name: "Villager",
    level: 28,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 477397109,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -861407720,
    name: "Skeleton Crossbow",
    level: 38,
    comment: "Skeleton Crossbow",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1601771862,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -837329073,
    name: "Armoured Skeleton",
    level: 20,
    comment: "Armoured Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 138513891,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -831097925,
    name: "Moose",
    level: 16,
    comment: "Moose",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1883230955,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -825299465,
    name: "Labworker",
    level: 58,
    comment: "Labworker",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -749335766,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1485838951,
        category: "BasicAttack",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: -823557242,
    name: "Devoted",
    level: 56,
    comment: "Devoted",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 2034438314,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -1204182143,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: 1214148146,
        category: "Defensive",
        castTime: 0.2
      },
      {
        slot: 3,
        guid: 474075607,
        category: "Special",
        castTime: 2.5,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -784265984,
    name: "Boyo",
    level: 48,
    comment: "Boyo",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 1219885177,
        category: "BasicAttack",
        castTime: 0.5,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -367310449,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 2,
        guid: 1648996357,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -1416105872,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 4,
        guid: 479773974,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: -91811178,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 6,
        guid: -1449494345,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -779632831,
    name: "Moose",
    level: 52,
    comment: "Moose",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 250913160,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Dash"
      },
      {
        slot: 1,
        guid: -764767694,
        category: "BasicAttack",
        castTime: 1.8
      }
    ]
  },
  {
    prefabGuid: -779411607,
    name: "Stone Golem",
    level: 36,
    comment: "Stone Golem",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1272395899,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 418002062,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1045581646,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -352214814,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -793376955,
        category: "Special",
        castTime: 2.5
      }
    ]
  },
  {
    prefabGuid: -775762125,
    name: "Technician",
    level: 58,
    comment: "Technician",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -749335766,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -767167590,
    name: "Talzur the Winged Horror",
    level: 83,
    comment: "Talzur the Winged Horror",
    canFly: true,
    features: ["Beast", "CanFly"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -500071289,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -764515001,
    name: "Unstable Spider",
    level: 56,
    comment: "Unstable Spider",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -891106318,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 1790377808,
        category: "BasicAttack",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -753453016,
    name: "Gaius the Cursed Champion",
    level: 55,
    comment: "Gaius the Cursed Champion",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood", "Cursed"],
    abilityCount: 16,
    abilities: [
      {
        slot: 0,
        guid: -1781725233,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -547251580,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -1253650402,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 3,
        guid: -887581044,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 4,
        guid: -2023636973,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 5,
        guid: -1175912131,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 6,
        guid: 2136656017,
        category: "BasicAttack",
        castTime: 0.5,
        behaviorType: "TargetAOE"
      },
      {
        slot: 7,
        guid: -1810214745,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 8,
        guid: -1756717462,
        category: "Movement",
        castTime: 0.6
      },
      {
        slot: 9,
        guid: 341647784,
        category: "Movement",
        behaviorType: "Hover"
      },
      {
        slot: 10,
        guid: -89125940,
        category: "Buff"
      },
      {
        slot: 11,
        guid: 821808685,
        category: "Unknown",
        castTime: 0.8
      },
      {
        slot: 12,
        guid: 1322698651,
        category: "Unknown",
        castTime: 0.6
      },
      {
        slot: 13,
        guid: -1357375516,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Channeling"
      },
      {
        slot: 14,
        guid: -782050236,
        category: "Unknown",
        castTime: 0.4
      },
      {
        slot: 15,
        guid: -725828654,
        category: "Unknown",
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: -744966291,
    name: "Mosquito",
    level: 60,
    comment: "Mosquito",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1451199905,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -1979483677,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -740796338,
    name: "Solarus the Immaculate",
    level: 86,
    comment: "Solarus the Immaculate",
    canFly: false,
    features: ["Human", "Humanoid", "Church", "VBlood"],
    abilityCount: 13,
    abilities: [
      {
        slot: 0,
        guid: 1673497547,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 1,
        guid: -1720407974,
        category: "Movement",
        castTime: 1.6,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 998464144,
        category: "Special"
      },
      {
        slot: 3,
        guid: -422683973,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: -1852467646,
        category: "Special",
        castTime: 1.8
      },
      {
        slot: 5,
        guid: 834886466,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: 1825130923,
        category: "Summon",
        castTime: 2.2
      },
      {
        slot: 7,
        guid: 922419960,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 8,
        guid: 1145861576,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 9,
        guid: -552723816,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 10,
        guid: 51772774,
        category: "Unknown",
        castTime: 1.2
      },
      {
        slot: 11,
        guid: -1172099204,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 12,
        guid: 699013677,
        category: "Special",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: -732208863,
    name: "Villager",
    level: 40,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1055785998,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -700632469,
    name: "Nun",
    level: 46,
    comment: "Nun",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1199987827,
        category: "Special",
        castTime: 1.3,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 919394375,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: 22263894,
        category: "BasicAttack",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: -699233841,
    name: "Peon",
    level: 73,
    comment: "Peon",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 2107551739,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -459395643,
        category: "BasicAttack",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -694393029,
    name: "Young Sea Serpent",
    level: 28,
    comment: "Young Sea Serpent",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -938355432,
        category: "BasicAttack",
        castTime: 1.7
      },
      {
        slot: 1,
        guid: -1470096516,
        category: "BasicAttack",
        castTime: 1.7
      },
      {
        slot: 2,
        guid: 163224625,
        category: "BasicAttack",
        castTime: 1.7
      },
      {
        slot: 3,
        guid: -1287271443,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: -694328454,
    name: "Knight",
    level: 71,
    comment: "Knight",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -1900214847,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -386968650,
        category: "Defensive",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: 157070105,
        category: "Defensive",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -2012449382,
        category: "Defensive",
        castTime: 0.4
      },
      {
        slot: 4,
        guid: 1703351456,
        category: "Defensive",
        castTime: 0.4
      },
      {
        slot: 5,
        guid: 377144854,
        category: "Defensive",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -680831417,
    name: "Raziel the Shepherd",
    level: 57,
    comment: "Raziel the Shepherd",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: 368122726,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -88118341,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: 296313928,
        category: "Summon",
        castTime: 0.3
      },
      {
        slot: 3,
        guid: -545560531,
        category: "Special",
        castTime: 0.7
      },
      {
        slot: 4,
        guid: 1611191665,
        category: "Special",
        castTime: 0.7,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: -1957047297,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 6,
        guid: -1049539886,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 7,
        guid: 1674395967,
        category: "Summon",
        castTime: 0.3
      }
    ]
  },
  {
    prefabGuid: -671059374,
    name: "Grim",
    level: 4,
    comment: "Grim",
    canFly: false,
    features: ["Beast", "Bandit"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: -744145902,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -669027288,
    name: "Sanguinary Guard",
    level: 83,
    comment: "Sanguinary Guard",
    canFly: false,
    features: ["Demon"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -2042076580,
        category: "Summon",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -639471262,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: -809908964,
        category: "Summon",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -653348998,
    name: "Slaughterbeast",
    level: 84,
    comment: "Slaughterbeast",
    canFly: false,
    features: ["Demon"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 523087989,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: -634705694,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 1166812757,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -1229087512,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 86533405,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Projectile"
      },
      {
        slot: 5,
        guid: -968445725,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 6,
        guid: -1915922151,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -625375348,
    name: "Carver",
    level: 73,
    comment: "Carver",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1074626555,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -1472848281,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -1698228064,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 628133433,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -603934060,
    name: "Armoured Skeleton",
    level: 60,
    comment: "Armoured Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 138513891,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -589412777,
    name: "Trapper",
    level: 20,
    comment: "Trapper",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1400073690,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: -309308308,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -581295882,
    name: "Forest Dweller",
    level: 26,
    comment: "Forest Dweller",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1841930998,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1713280509,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "TargetAOE"
      },
      {
        slot: 2,
        guid: 858891748,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 3,
        guid: -1425167877,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -578677530,
    name: "Black Wolf",
    level: 40,
    comment: "Black Wolf",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: -744145902,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -572568236,
    name: "Skeleton Bishop",
    level: 46,
    comment: "Skeleton Bishop",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 2021815703,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 1687310776,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -1800699406,
        category: "Summon",
        castTime: 1.5,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: -559819989,
    name: "Cursed Bear",
    level: 62,
    comment: "Cursed Bear",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 1745337333,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1241654227,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 2,
        guid: 160063059,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 3,
        guid: -193432841,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -388636006,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: -730437928,
        category: "Movement",
        castTime: 1.3,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -558928562,
    name: "Shadow Soldier",
    level: 50,
    comment: "Shadow Soldier",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1621601748,
        category: "BasicAttack",
        castTime: 0.5,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -548489519,
    name: "Ungora the Spider Queen",
    level: 63,
    comment: "Ungora the Spider Queen",
    canFly: false,
    features: ["Beast", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: 1274762079,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 1,
        guid: 2130811227,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -1586810476,
        category: "Special",
        castTime: 2.2
      },
      {
        slot: 3,
        guid: 1573712465,
        category: "Special",
        castTime: 1.8,
        behaviorType: "TargetAOE"
      },
      {
        slot: 4,
        guid: -2109003637,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: 1499629710,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: 193592408,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: -1779071085,
        category: "Summon",
        castTime: 1.0
      },
      {
        slot: 8,
        guid: 1132262199,
        category: "Movement",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -496360395,
    name: "General Cassius the Betrayer",
    level: 57,
    comment: "General Cassius the Betrayer",
    canFly: false,
    features: ["Vampire", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: -328302080,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1006960825,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: 851287157,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 3,
        guid: -2126197617,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 938684260,
        category: "BasicAttack",
        castTime: 0.2,
        behaviorType: "TargetAOE"
      },
      {
        slot: 5,
        guid: -1139777657,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 6,
        guid: -604910466,
        category: "Special",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: 416744805,
        category: "Movement",
        castTime: 1.0
      },
      {
        slot: 8,
        guid: -1298764600,
        category: "Special",
        castTime: 0.7,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -494298686,
    name: "Dark Temptress",
    level: 84,
    comment: "Dark Temptress",
    canFly: false,
    features: ["Demon"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -324538848,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -1498306516,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: -2036638378,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 951198708,
        category: "Special",
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: -1262881470,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: 175670852,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -484556888,
    name: "Polora the Feywalker",
    level: 35,
    comment: "Polora the Feywalker",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -914903899,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -321651703,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1795809188,
        category: "BasicAttack",
        castTime: 0.2
      },
      {
        slot: 3,
        guid: -939006306,
        category: "Special",
        castTime: 1.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 4,
        guid: -1036943907,
        category: "Special",
        castTime: 0.3
      },
      {
        slot: 5,
        guid: 2033547790,
        category: "Special",
        castTime: 0.2,
        behaviorType: "Hover"
      },
      {
        slot: 6,
        guid: -595482115,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -458883491,
    name: "Ghost Guardian",
    level: 63,
    comment: "Ghost Guardian",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -2092537748,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: 948504723,
        category: "Defensive",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: 955484879,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 1059734295,
        category: "Movement",
        castTime: 0.2
      }
    ]
  },
  {
    prefabGuid: -450600397,
    name: "Bomber",
    level: 32,
    comment: "Bomber",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1743551272,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -444945115,
    name: "Villager",
    level: 20,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -119427343,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: 1397338806,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -442412464,
    name: "Slave Master",
    level: 65,
    comment: "Slave Master",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 80712753,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 97206555,
        category: "BasicAttack",
        castTime: 0.4,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -1879864480,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 3,
        guid: -1255881274,
        category: "Special",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -440174408,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["Gloomrot", "GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 15,
    abilities: [
      {
        slot: 0,
        guid: 936625846,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1672126097,
        category: "Defensive",
        castTime: 0.4,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: 1425686238,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 3,
        guid: 1189720448,
        category: "Special",
        castTime: 0.3
      },
      {
        slot: 4,
        guid: -41022254,
        category: "Defensive",
        castTime: 0.4,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: 1228457971,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 6,
        guid: 698366326,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Dash"
      },
      {
        slot: 7,
        guid: 62042854,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: 1922493152,
        category: "Movement",
        castTime: 1.5
      },
      {
        slot: 9,
        guid: 718360189,
        category: "Movement",
        castTime: 0.6
      },
      {
        slot: 10,
        guid: -1567787423,
        category: "Unknown",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 11,
        guid: 1343651850,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 12,
        guid: -825962514,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 13,
        guid: 973636261,
        category: "Unknown",
        castTime: 0.1
      },
      {
        slot: 14,
        guid: -675519112,
        category: "Buff"
      }
    ]
  },
  {
    prefabGuid: -436956599,
    name: "Viper",
    level: 74,
    comment: "Viper",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -317345251,
        category: "BasicAttack",
        castTime: 1.6,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 381862924,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: 1142040823,
        category: "BasicAttack",
        castTime: 1.1,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -427888732,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["Gloomrot", "GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: 1878838878,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1853889696,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: 1191517048,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 3,
        guid: -177268000,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 4,
        guid: 2016544872,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: 788963695,
        category: "Special",
        castTime: 0.9
      },
      {
        slot: 6,
        guid: -1243386667,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Channeling"
      },
      {
        slot: 7,
        guid: -1548349308,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 8,
        guid: 1851411882,
        category: "Movement",
        castTime: 0.4
      },
      {
        slot: 9,
        guid: -1143650386,
        category: "Movement",
        castTime: 1.0
      },
      {
        slot: 10,
        guid: -1372140488,
        category: "Unknown",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -393555055,
    name: "Talzur the Winged Horror",
    level: 86,
    comment: "Talzur the Winged Horror",
    canFly: true,
    features: ["Beast", "CanFly", "VBlood"],
    abilityCount: 19,
    abilities: [
      {
        slot: 0,
        guid: -627924949,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: 486569900,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -418737686,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 3,
        guid: -722759857,
        category: "Special",
        castTime: 0.9,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 475860611,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: -500071289,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 6,
        guid: -808215778,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: 995945059,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: 1690919489,
        category: "Movement",
        castTime: 1.3
      },
      {
        slot: 9,
        guid: 1686895005,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 10,
        guid: -1744671763,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 11,
        guid: -1547108554,
        category: "Unknown",
        castTime: 0.8
      },
      {
        slot: 12,
        guid: 1373056433,
        category: "Unknown",
        castTime: 0.8
      },
      {
        slot: 13,
        guid: 45443379,
        category: "Unknown",
        castTime: 1.2
      },
      {
        slot: 14,
        guid: 2115527946,
        category: "Unknown",
        castTime: 2.0
      },
      {
        slot: 15,
        guid: 1625958933,
        category: "Unknown",
        castTime: 1.2
      },
      {
        slot: 16,
        guid: -298983941,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Dash"
      },
      {
        slot: 17,
        guid: 1806701827,
        category: "Unknown",
        castTime: 4.0
      },
      {
        slot: 18,
        guid: 1254689969,
        category: "Unknown",
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: -392776091,
    name: "Gargoyle",
    level: 83,
    comment: "Gargoyle",
    canFly: false,
    features: ["Demon"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: -915929892,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 701450949,
        category: "BasicAttack",
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1741189817,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 1460741503,
        category: "Defensive",
        castTime: 1.5,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: -382913708,
        category: "Special",
        castTime: 0.9,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: 1563014858,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 6,
        guid: 88850785,
        category: "Defensive",
        castTime: 0.1
      },
      {
        slot: 7,
        guid: 183752077,
        category: "Buff",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -383158562,
    name: "Lightweaver",
    level: 76,
    comment: "Lightweaver",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -839571202,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 1761660947,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -281576382,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 1891756809,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: -284360089,
        category: "Movement",
        castTime: 0.4
      },
      {
        slot: 5,
        guid: 1876841142,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: -375581934,
    name: "Rat Horror",
    level: 60,
    comment: "Rat Horror",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -650383304,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -2125818102,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 306615743,
        category: "Special",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -375258845,
    name: "Shady Herb & Potion Dealer",
    level: 34,
    comment: "Shady Herb & Potion Dealer",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1110054537,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: 1487412876,
        category: "Movement",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -371347062,
    name: "Young Sea Serpent",
    level: 28,
    comment: "Young Sea Serpent",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1115346958,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 1506479890,
        category: "Special",
        castTime: 1.4
      }
    ]
  },
  {
    prefabGuid: -370708253,
    name: "Poacher",
    level: 16,
    comment: "Poacher",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -39311902,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 564244811,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -1880729304,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -976938930,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: -937443015,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: 1067834426,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: -340923989,
    name: "Dark Temptress",
    level: 84,
    comment: "Dark Temptress",
    canFly: false,
    features: ["Demon"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -324538848,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -1498306516,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: -2036638378,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 951198708,
        category: "Special",
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: -1262881470,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: 175670852,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -327335305,
    name: "Dracula the Immortal King",
    level: 91,
    comment: "Dracula the Immortal King",
    canFly: false,
    features: ["Vampire", "VBlood"],
    abilityCount: 37,
    abilities: [
      {
        slot: 0,
        guid: 364141768,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -459642635,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 2,
        guid: 532210332,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 3,
        guid: 1888098383,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 4,
        guid: 837193552,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: 1128466169,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: 403738972,
        category: "Movement",
        castTime: 0.8
      },
      {
        slot: 7,
        guid: 411852610,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Dash"
      },
      {
        slot: 8,
        guid: -412600077,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Dash"
      },
      {
        slot: 9,
        guid: -1031474651,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Hover"
      },
      {
        slot: 10,
        guid: 797450963,
        category: "Special",
        castTime: 3.0
      },
      {
        slot: 11,
        guid: 727824809,
        category: "Unknown",
        castTime: 0.4
      },
      {
        slot: 12,
        guid: 1915068828,
        category: "Unknown",
        castTime: 0.2,
        behaviorType: "Dash"
      },
      {
        slot: 13,
        guid: -618038480,
        category: "Unknown",
        castTime: 0.2,
        behaviorType: "Dash"
      },
      {
        slot: 14,
        guid: -7407393,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 15,
        guid: -2005193286,
        category: "Unknown",
        castTime: 1.0,
        behaviorType: "Hover"
      },
      {
        slot: 16,
        guid: 27585400,
        category: "Unknown",
        castTime: 2.0
      },
      {
        slot: 17,
        guid: -1940289109,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 18,
        guid: -847327302,
        category: "Unknown",
        castTime: 1.4
      },
      {
        slot: 19,
        guid: -986547656,
        category: "Movement",
        castTime: 0.7
      },
      {
        slot: 20,
        guid: -703291679,
        category: "Movement",
        castTime: 0.3
      },
      {
        slot: 21,
        guid: -1765846328,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Projectile"
      },
      {
        slot: 22,
        guid: 841757706,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 23,
        guid: -130280994,
        category: "Unknown",
        castTime: 0.2,
        behaviorType: "Dash"
      },
      {
        slot: 24,
        guid: 543365747,
        category: "Unknown",
        castTime: 0.2,
        behaviorType: "Dash"
      },
      {
        slot: 25,
        guid: -1589312992,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 26,
        guid: -1406000418,
        category: "Summon",
        castTime: 1.5
      },
      {
        slot: 27,
        guid: -377463117,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 28,
        guid: 2121218473,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Hover"
      },
      {
        slot: 29,
        guid: -2146217789,
        category: "Unknown",
        castTime: 0.7
      },
      {
        slot: 30,
        guid: -1473399128,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 31,
        guid: 1270706044,
        category: "Ultimate",
        castTime: 1.8
      },
      {
        slot: 32,
        guid: -2036664505,
        category: "Ultimate",
        castTime: 0.4,
        behaviorType: "Hover"
      },
      {
        slot: 33,
        guid: -1161896955,
        category: "Unknown",
        castTime: 0.7,
        behaviorType: "Hover"
      },
      {
        slot: 34,
        guid: -2103202975,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 35,
        guid: -1362190512,
        category: "Unknown",
        castTime: 0.7
      },
      {
        slot: 36,
        guid: -1287837541,
        category: "Movement",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -322293503,
    name: "Pyro",
    level: 56,
    comment: "Pyro",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 288608511,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 1,
        guid: -635085409,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: -309264723,
    name: "Stalker",
    level: 30,
    comment: "Stalker",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1969189808,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -1250624804,
        category: "Movement",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -1997657671,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -301730941,
    name: "Thug",
    level: 16,
    comment: "Thug",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -1970983747,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1880729304,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -976938930,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -937443015,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 1067834426,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: -293507834,
    name: "Tractor Beamer",
    level: 58,
    comment: "Tractor Beamer",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -607666302,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1653116246,
        category: "Defensive",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: 2100724308,
        category: "Defensive",
        castTime: 0.3,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: -349738324,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -274383877,
    name: "Striker",
    level: 74,
    comment: "Striker",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1126476370,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: -2096054164,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: 1125833271,
        category: "BasicAttack",
        behaviorType: "Hover"
      },
      {
        slot: 3,
        guid: 1105771640,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 4,
        guid: 1213228171,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -268935837,
    name: "Rifleman",
    level: 65,
    comment: "Rifleman",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1622839653,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -259591573,
    name: "Skeleton",
    level: 1,
    comment: "Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 138513891,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: -253226787,
    name: "Dartflinger",
    level: 73,
    comment: "Dartflinger",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1167502816,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1629729690,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 2,
        guid: -865776841,
        category: "BasicAttack",
        castTime: 0.3
      }
    ]
  },
  {
    prefabGuid: -249647316,
    name: "Hound",
    level: 36,
    comment: "Hound",
    canFly: false,
    features: ["Beast", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      }
    ]
  },
  {
    prefabGuid: -242295780,
    name: "Militia Archer",
    level: 42,
    comment: "Militia Archer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -351745987,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1102042167,
        category: "Special",
        castTime: 1.7,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -240536861,
    name: "Slave Master",
    level: 65,
    comment: "Slave Master",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 80712753,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 97206555,
        category: "BasicAttack",
        castTime: 0.4,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -1276648449,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -1879864480,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 4,
        guid: -1255881274,
        category: "Special",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -236166535,
    name: "Flying Skull",
    level: 32,
    comment: "Flying Skull",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 381103028,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 304835919,
        category: "BasicAttack",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -235172198,
    name: "Militia Crossbow",
    level: 42,
    comment: "Militia Crossbow",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -1077139800,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1162366175,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 2,
        guid: -1843850355,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 3,
        guid: -342380924,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 4,
        guid: 262116525,
        category: "Special",
        castTime: 1.1
      },
      {
        slot: 5,
        guid: 1660777757,
        category: "Special",
        castTime: 1.1
      }
    ]
  },
  {
    prefabGuid: -223185284,
    name: "Frost Wolf",
    level: 50,
    comment: "Frost Wolf",
    canFly: false,
    features: ["Beast", "Werewolf"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1267641072,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -83187650,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -221278041,
    name: "Giant Crow",
    level: 27,
    comment: "Giant Crow",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 898033701,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -2125818102,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 1333250097,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: -218175217,
    name: "Cursed Wolf",
    level: 62,
    comment: "Cursed Wolf",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1601666166,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -1317017789,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 1910899893,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -208499374,
    name: "Shady Book Dealer",
    level: 34,
    comment: "Shady Book Dealer",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1844993528,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: 787005490,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -203043163,
    name: "Albert the Duke of Balaton",
    level: 64,
    comment: "Albert the Duke of Balaton",
    canFly: false,
    features: ["Beast", "Cursed", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: 1718898538,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -514415940,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: 1790744720,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 1808492070,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: -1864096491,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: 1292896032,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: -1238687119,
        category: "Movement",
        castTime: 0.7
      },
      {
        slot: 7,
        guid: 1421967280,
        category: "Movement",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: -198252716,
    name: "Thug",
    level: 16,
    comment: "Thug",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -1970983747,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1880729304,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -976938930,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -937443015,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 1067834426,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: -195077008,
    name: "Skeleton Crossbow",
    level: 18,
    comment: "Skeleton Crossbow",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1601771862,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -175381832,
    name: "Quincey the Marauder",
    level: 30,
    comment: "Quincey the Marauder",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -589722860,
        category: "BasicAttack",
        castTime: 2.5
      },
      {
        slot: 1,
        guid: 138056981,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -1854347593,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: 1550497814,
        category: "Special",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      },
      {
        slot: 4,
        guid: 1567999366,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 5,
        guid: 920868547,
        category: "Special",
        castTime: 0.2,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: -67405040,
        category: "Movement",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: -164116132,
    name: "Villager",
    level: 28,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1691591896,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -143994147,
    name: "Giant Bat",
    level: 90,
    comment: "Giant Bat",
    canFly: false,
    features: ["Demon"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -2064327511,
        category: "Special",
        castTime: 1.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: -99012450,
    name: "Christina the Sun Priestess",
    level: 44,
    comment: "Christina the Sun Priestess",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 10,
    abilities: [
      {
        slot: 0,
        guid: 607644390,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 1,
        guid: 605530795,
        category: "Special",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: 1267698255,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "TargetAOE"
      },
      {
        slot: 3,
        guid: -1754021382,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 4,
        guid: -1725804558,
        category: "Defensive",
        castTime: 0.6,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: -1581417695,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 6,
        guid: 397860291,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 7,
        guid: 54266570,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 8,
        guid: 1090673078,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 9,
        guid: -1756529149,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -85729652,
    name: "Ghost Crossbowman",
    level: 61,
    comment: "Ghost Crossbowman",
    canFly: false,
    features: ["Undead", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -932485064,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: -81727312,
    name: "Villager",
    level: 28,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 2136688539,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1850527627,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -76116724,
    name: "Fallen Angel",
    level: 80,
    comment: "Fallen Angel",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -8655403,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1364891068,
        category: "Movement",
        castTime: 0.7,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: -1847055470,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 1309712000,
        category: "Special",
        castTime: 4.0,
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: 985669672,
        category: "Special",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: -65981941,
    name: "Gargoyle",
    level: 85,
    comment: "Gargoyle",
    canFly: false,
    features: ["Demon"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: -915929892,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 701450949,
        category: "BasicAttack",
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1741189817,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 1460741503,
        category: "Defensive",
        castTime: 1.5,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: -382913708,
        category: "Special",
        castTime: 0.9,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: 1563014858,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 6,
        guid: 88850785,
        category: "Defensive",
        castTime: 0.1
      },
      {
        slot: 7,
        guid: 183752077,
        category: "Buff",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: -63435588,
    name: "Militia Skirmisher",
    level: 36,
    comment: "Militia Skirmisher",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 994921501,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -56441915,
    name: "Witch",
    level: 72,
    comment: "Witch",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1915605718,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 2025233638,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: 429807295,
        category: "BasicAttack",
        castTime: 1.3,
        behaviorType: "TargetAOE"
      },
      {
        slot: 3,
        guid: 2107853915,
        category: "Special",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -55245645,
    name: "Ghost Assassin",
    level: 60,
    comment: "Ghost Assassin",
    canFly: false,
    features: ["Demon", "Cursed"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 558343424,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -1713640367,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: -54072010,
    name: "Blood Witch",
    level: 80,
    comment: "Blood Witch",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1915605718,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 2025233638,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: 429807295,
        category: "BasicAttack",
        castTime: 1.3,
        behaviorType: "TargetAOE"
      },
      {
        slot: 3,
        guid: 2107853915,
        category: "Special",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: -39008356,
    name: "Peon",
    level: 73,
    comment: "Peon",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 2107551739,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -38041784,
    name: "Cursed Slime Toad",
    level: 62,
    comment: "Cursed Slime Toad",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 736733073,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 2015521421,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: -1684997624,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 750606882,
        category: "Special",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: -29797003,
    name: "Vincent the Frostbringer",
    level: 44,
    comment: "Vincent the Frostbringer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -841402173,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: -1110188840,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: 308360499,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -743963442,
        category: "Special",
        castTime: 0.8
      },
      {
        slot: 4,
        guid: 1624827356,
        category: "Special",
        castTime: 3.5
      },
      {
        slot: 5,
        guid: 1607170837,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 6,
        guid: -1634136571,
        category: "Special",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -26105228,
    name: "Sir Magnus the Overseer",
    level: 66,
    comment: "Sir Magnus the Overseer",
    canFly: false,
    features: ["Human", "Humanoid", "Church", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: 613355091,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -985136954,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 2,
        guid: 1792964134,
        category: "BasicAttack",
        castTime: 2.2
      },
      {
        slot: 3,
        guid: -1973550282,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 493409764,
        category: "Movement",
        castTime: 0.7
      },
      {
        slot: 5,
        guid: 1823825002,
        category: "Special",
        behaviorType: "Hover"
      },
      {
        slot: 6,
        guid: 1964067196,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 1541929232,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: -19416663,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: -19165577,
    name: "Wicked Rat",
    level: 3,
    comment: "Wicked Rat",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1007898441,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: -18289884,
    name: "Spiderling",
    level: 56,
    comment: "Spiderling",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1655641312,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 17367048,
    name: "Knight",
    level: 71,
    comment: "Knight",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -557111974,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -1330909978,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: -1462154593,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -1175617299,
        category: "Special",
        castTime: 0.9
      },
      {
        slot: 4,
        guid: 349423116,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: -1449279362,
        category: "Special",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 17609984,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["Bandit", "GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 13,
    abilities: [
      {
        slot: 0,
        guid: -2010697707,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 2130985273,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      },
      {
        slot: 2,
        guid: -1773431654,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 3,
        guid: 1914101495,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 4,
        guid: -892431821,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: -1100933071,
        category: "Special",
        castTime: 1.3,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: -1326540020,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 1187864883,
        category: "Movement",
        castTime: 2.5,
        behaviorType: "TargetAOE"
      },
      {
        slot: 8,
        guid: -871701576,
        category: "Movement",
        castTime: 3.0
      },
      {
        slot: 9,
        guid: -1696612225,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Projectile"
      },
      {
        slot: 10,
        guid: -1568783706,
        category: "Unknown",
        castTime: 2.4
      },
      {
        slot: 11,
        guid: 46962343,
        category: "Unknown",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 12,
        guid: -1432555386,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 20817667,
    name: "Rock Elemental",
    level: 50,
    comment: "Rock Elemental",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -560639220,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -150520781,
        category: "BasicAttack",
        castTime: 1.3,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 294532069,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -1924288461,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -2050883182,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 24378719,
    name: "Frostmaw the Mountain Terror",
    level: 53,
    comment: "Frostmaw the Mountain Terror",
    canFly: false,
    features: ["Beast", "VBlood"],
    abilityCount: 12,
    abilities: [
      {
        slot: 0,
        guid: 1568904735,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: -1683730497,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1238313774,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -496233120,
        category: "Movement",
        castTime: 1.1
      },
      {
        slot: 4,
        guid: 203761859,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: 495259674,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Channeling"
      },
      {
        slot: 6,
        guid: -2090815764,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 7,
        guid: 54541608,
        category: "Movement"
      },
      {
        slot: 8,
        guid: 1390611238,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Channeling"
      },
      {
        slot: 9,
        guid: -2029387940,
        category: "Movement",
        castTime: 0.7
      },
      {
        slot: 10,
        guid: 929369353,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 11,
        guid: -1986179833,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 37713289,
    name: "Militia Torchbearer",
    level: 36,
    comment: "Militia Torchbearer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 471046053,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: -116877786,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 40217214,
    name: "Lurker",
    level: 73,
    comment: "Lurker",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1115417829,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: 48283616,
    name: "Gatherer",
    level: 14,
    comment: "Gatherer",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1826323796,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1340319300,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 51737727,
    name: "Woodcutter",
    level: 14,
    comment: "Woodcutter",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 2039677643,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1340319300,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 55100532,
    name: "Heart of Dracula",
    level: 90,
    comment: "Heart of Dracula",
    canFly: false,
    features: ["Demon"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1767074088,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: 57255106,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: 106480588,
    name: "Angram the Purifier",
    level: 61,
    comment: "Angram the Purifier",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot", "VBlood"],
    abilityCount: 15,
    abilities: [
      {
        slot: 0,
        guid: 936625846,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1672126097,
        category: "Defensive",
        castTime: 0.4,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: 1425686238,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 3,
        guid: 1189720448,
        category: "Special",
        castTime: 0.3
      },
      {
        slot: 4,
        guid: -41022254,
        category: "Defensive",
        castTime: 0.4,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: 1228457971,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 6,
        guid: 698366326,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Dash"
      },
      {
        slot: 7,
        guid: 62042854,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: 1922493152,
        category: "Movement",
        castTime: 1.5
      },
      {
        slot: 9,
        guid: 718360189,
        category: "Movement",
        castTime: 0.6
      },
      {
        slot: 10,
        guid: -1567787423,
        category: "Unknown",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 11,
        guid: 1343651850,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 12,
        guid: -825962514,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 13,
        guid: 973636261,
        category: "Unknown",
        castTime: 0.1
      },
      {
        slot: 14,
        guid: -675519112,
        category: "Buff"
      }
    ]
  },
  {
    prefabGuid: 109969450,
    name: "Ben the Old Wanderer",
    level: 63,
    comment: "Ben the Old Wanderer",
    canFly: false,
    features: ["Human", "Humanoid", "Cursed", "VBlood"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -127603789,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -1512616160,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -1137336047,
        category: "BasicAttack",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: 114912615,
    name: "Azariel the Sunbringer",
    level: 79,
    comment: "Azariel the Sunbringer",
    canFly: false,
    features: ["Human", "Humanoid", "Church", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 194868388,
        category: "BasicAttack",
        castTime: 1.6
      },
      {
        slot: 1,
        guid: -1015165123,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -1301873763,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 1172834223,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Hover"
      },
      {
        slot: 4,
        guid: 114484622,
        category: "Special",
        castTime: 1.7,
        behaviorType: "Projectile"
      },
      {
        slot: 5,
        guid: -16930230,
        category: "Summon",
        castTime: 1.0
      },
      {
        slot: 6,
        guid: -1381729810,
        category: "Summon",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 128488545,
    name: "Banshee",
    level: 63,
    comment: "Banshee",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1912093062,
        category: "BasicAttack",
        castTime: 3.5,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 134039094,
    name: "Frost Wolf",
    level: 50,
    comment: "Frost Wolf",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1267641072,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -83187650,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 153390636,
    name: "Nicholaus the Fallen",
    level: 35,
    comment: "Nicholaus the Fallen",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: 14728131,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1125894381,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: 1988754598,
        category: "Special",
        castTime: 3.0,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: -2034290170,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: 1414167161,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: -1153380978,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 6,
        guid: 1338374909,
        category: "Movement",
        castTime: 1.5
      },
      {
        slot: 7,
        guid: 1619461812,
        category: "Special",
        castTime: 3.0,
        behaviorType: "Channeling"
      },
      {
        slot: 8,
        guid: 1837385563,
        category: "Special",
        castTime: 1.3,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 153561250,
    name: "Banshee",
    level: 85,
    comment: "Banshee",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1966260928,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Dash"
      },
      {
        slot: 1,
        guid: -930815588,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 169329980,
    name: "Militia Skirmisher",
    level: 36,
    comment: "Militia Skirmisher",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 994921501,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 172235178,
    name: "Ziva the Engineer",
    level: 60,
    comment: "Ziva the Engineer",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot", "VBlood"],
    abilityCount: 21,
    abilities: [
      {
        slot: 0,
        guid: 1450987113,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: -580940152,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -247423777,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 1517447626,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 4,
        guid: -786900742,
        category: "Special",
        castTime: 2.5
      },
      {
        slot: 5,
        guid: 1524772628,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Channeling"
      },
      {
        slot: 6,
        guid: 870237772,
        category: "Movement",
        castTime: 1.5
      },
      {
        slot: 7,
        guid: 891644945,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 8,
        guid: -639593760,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 9,
        guid: -2020699185,
        category: "Movement",
        castTime: 2.5
      },
      {
        slot: 10,
        guid: -420570478,
        category: "Unknown",
        castTime: 2.5
      },
      {
        slot: 11,
        guid: -1409019914,
        category: "Unknown",
        castTime: 2.5
      },
      {
        slot: 12,
        guid: 948730951,
        category: "Unknown",
        castTime: 2.5
      },
      {
        slot: 13,
        guid: 49364370,
        category: "Unknown",
        castTime: 1.5
      },
      {
        slot: 14,
        guid: -680856467,
        category: "Unknown",
        castTime: 1.2
      },
      {
        slot: 15,
        guid: 2013545793,
        category: "Unknown",
        castTime: 2.0
      },
      {
        slot: 16,
        guid: 1149489416,
        category: "Unknown",
        castTime: 2.0
      },
      {
        slot: 17,
        guid: -1715136284,
        category: "Unknown",
        behaviorType: "Hover"
      },
      {
        slot: 18,
        guid: -309871879,
        category: "Unknown",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 19,
        guid: -1770586075,
        category: "Unknown",
        castTime: 2.0,
        behaviorType: "Travel"
      },
      {
        slot: 20,
        guid: -577179884,
        category: "Unknown",
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 173259239,
    name: "Dantos the Forgebinder",
    level: 82,
    comment: "Dantos the Forgebinder",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 12,
    abilities: [
      {
        slot: 0,
        guid: 68363809,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: 140047325,
        category: "BasicAttack",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: -1015932492,
        category: "Buff",
        castTime: 0.8
      },
      {
        slot: 3,
        guid: -9078612,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: -1329409686,
        category: "Special",
        behaviorType: "TargetAOE"
      },
      {
        slot: 5,
        guid: 1633132226,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 6,
        guid: -845442935,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 7,
        guid: -405003450,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      },
      {
        slot: 8,
        guid: 221530600,
        category: "Movement",
        castTime: 4.5
      },
      {
        slot: 9,
        guid: 1590188261,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 10,
        guid: -98135680,
        category: "Unknown",
        behaviorType: "TargetAOE"
      },
      {
        slot: 11,
        guid: -1574580061,
        category: "Unknown",
        castTime: 0.1,
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: 173817657,
    name: "Mantrap",
    level: 30,
    comment: "Mantrap",
    canFly: false,
    features: ["Beast"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1238529741,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 780372716,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -359326766,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 192051202,
    name: "Baron du Bouchon the Sommelier",
    level: 70,
    comment: "Baron du Bouchon the Sommelier",
    canFly: false,
    features: ["Human", "Humanoid", "Church", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: 1078822594,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Hover"
      },
      {
        slot: 1,
        guid: 22199616,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 215933642,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: -1537007486,
        category: "Special",
        castTime: 0.2
      },
      {
        slot: 4,
        guid: 1074442576,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: -616794756,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 6,
        guid: -1157907958,
        category: "BasicAttack",
        castTime: 0.9,
        behaviorType: "Hover"
      },
      {
        slot: 7,
        guid: 1168210403,
        category: "Movement",
        castTime: 2.4,
        behaviorType: "Hover"
      },
      {
        slot: 8,
        guid: 1129782597,
        category: "Movement",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 192241915,
    name: "Gold Golem",
    level: 79,
    comment: "Gold Golem",
    canFly: false,
    features: ["Demon"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 1770841962,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 92820140,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -963623992,
        category: "Buff",
        castTime: 1.0
      },
      {
        slot: 3,
        guid: -685952199,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -1656534946,
        category: "Special",
        castTime: 2.5
      },
      {
        slot: 5,
        guid: -645101263,
        category: "Buff",
        castTime: 0.8
      },
      {
        slot: 6,
        guid: 72734316,
        category: "Movement",
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: 203103783,
    name: "Militia Archer",
    level: 42,
    comment: "Militia Archer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -351745987,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1102042167,
        category: "Special",
        castTime: 1.7,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 218843465,
    name: "Rat Horror",
    level: 60,
    comment: "Rat Horror",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -822790233,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -2125818102,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 306615743,
        category: "Special",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: 232701971,
    name: "Militia Demolisher",
    level: 47,
    comment: "Militia Demolisher",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1232856473,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 233127264,
    name: "Ghost Assassin",
    level: 60,
    comment: "Ghost Assassin",
    canFly: false,
    features: ["Demon", "Cursed"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 793860757,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1166337981,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 280858720,
    name: "Gargoyle",
    level: 85,
    comment: "Gargoyle",
    canFly: false,
    features: ["Demon"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: -915929892,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 701450949,
        category: "BasicAttack",
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1741189817,
        category: "Movement",
        castTime: 0.8,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 1460741503,
        category: "Defensive",
        castTime: 1.5,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: -382913708,
        category: "Special",
        castTime: 0.9,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: 1563014858,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 6,
        guid: 88850785,
        category: "Defensive",
        castTime: 0.1
      },
      {
        slot: 7,
        guid: 183752077,
        category: "Buff",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 282791819,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 12,
    abilities: [
      {
        slot: 0,
        guid: 688350142,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1783782358,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1884688827,
        category: "BasicAttack",
        castTime: 1.6,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: 1372353064,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 4,
        guid: -1294182358,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: -1030552412,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: -526118698,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 76767983,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: 501615608,
        category: "Movement"
      },
      {
        slot: 9,
        guid: -453760177,
        category: "Movement",
        castTime: 1.1,
        behaviorType: "Channeling"
      },
      {
        slot: 10,
        guid: -2013216961,
        category: "Unknown",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 11,
        guid: 1196517991,
        category: "Unknown",
        castTime: 0.8,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 286320185,
    name: "Villager",
    level: 14,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1806163577,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 302393064,
    name: "Rock Elemental",
    level: 64,
    comment: "Rock Elemental",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -560639220,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -150520781,
        category: "BasicAttack",
        castTime: 1.3,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 294532069,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -1924288461,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -2050883182,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 304726480,
    name: "Spectral Guardian",
    level: 1,
    comment: "Spectral Guardian",
    canFly: false,
    features: ["Demon"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1130939687,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 326378955,
    name: "Cyril the Cursed Smith",
    level: 65,
    comment: "Cyril the Cursed Smith",
    canFly: false,
    features: ["Human", "Humanoid", "Cursed", "VBlood"],
    abilityCount: 12,
    abilities: [
      {
        slot: 0,
        guid: 1700777111,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -1502523453,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: -943061757,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: -668888775,
        category: "Movement",
        castTime: 1.5
      },
      {
        slot: 4,
        guid: -329078808,
        category: "Movement",
        castTime: 1.5
      },
      {
        slot: 5,
        guid: 340003308,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Dash"
      },
      {
        slot: 6,
        guid: 151173850,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 7,
        guid: 546685538,
        category: "Summon",
        castTime: 1.8
      },
      {
        slot: 8,
        guid: -332863103,
        category: "Summon",
        castTime: 1.8
      },
      {
        slot: 9,
        guid: 1162725480,
        category: "Summon",
        castTime: 1.8
      },
      {
        slot: 10,
        guid: -1889094547,
        category: "Summon",
        castTime: 1.8
      },
      {
        slot: 11,
        guid: 847476786,
        category: "Summon",
        castTime: 0.8,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: 326501064,
    name: "Alchemist",
    level: 74,
    comment: "Alchemist",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 516384057,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 1,
        guid: -1573201851,
        category: "BasicAttack",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: -1641231517,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 3,
        guid: 1846642290,
        category: "Special",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 336560131,
    name: "Simon Belmont the Vampire Hunter",
    level: 80,
    comment: "Simon Belmont the Vampire Hunter",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood", "Vampire"],
    abilityCount: 25,
    abilities: [
      {
        slot: 0,
        guid: -499397494,
        category: "Special",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: 626219559,
        category: "Special",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: -1272535312,
        category: "Special",
        castTime: 0.8
      },
      {
        slot: 3,
        guid: -460221305,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 4,
        guid: -650079140,
        category: "Special",
        castTime: 0.8,
        behaviorType: "TargetAOE"
      },
      {
        slot: 5,
        guid: 112329675,
        category: "Special",
        castTime: 0.2
      },
      {
        slot: 6,
        guid: 504586218,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 7,
        guid: -1736553762,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 8,
        guid: 761680482,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 9,
        guid: 1022054621,
        category: "Special",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 10,
        guid: 1122774146,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 11,
        guid: -296227812,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 12,
        guid: 874909393,
        category: "Special",
        castTime: 1.8
      },
      {
        slot: 13,
        guid: 1797118698,
        category: "Special",
        castTime: 0.7
      },
      {
        slot: 14,
        guid: 1302295192,
        category: "Special",
        castTime: 0.4,
        behaviorType: "Projectile"
      },
      {
        slot: 15,
        guid: 1945392759,
        category: "Special",
        castTime: 0.9
      },
      {
        slot: 16,
        guid: -1068854418,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 17,
        guid: 1771330790,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 18,
        guid: -64218175,
        category: "Special",
        castTime: 2.5
      },
      {
        slot: 19,
        guid: 207057426,
        category: "Special",
        behaviorType: "Projectile"
      },
      {
        slot: 20,
        guid: 109607953,
        category: "Special",
        castTime: 5.0
      },
      {
        slot: 21,
        guid: -653938456,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 22,
        guid: 906463896,
        category: "Special",
        castTime: 1.8,
        behaviorType: "Projectile"
      },
      {
        slot: 23,
        guid: 8807466,
        category: "Special",
        castTime: 0.9
      },
      {
        slot: 24,
        guid: 583436571,
        category: "Special",
        castTime: 1.8,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 342127250,
    name: "Broodmother",
    level: 60,
    comment: "Broodmother",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 983916408,
        category: "Summon",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 343676339,
    name: "Poacher",
    level: 16,
    comment: "Poacher",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -39311902,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 564244811,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -1880729304,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -976938930,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: -937443015,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: 1067834426,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: 343833814,
    name: "Armoured Skeleton",
    level: 20,
    comment: "Armoured Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 138513891,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: 345283594,
    name: "Vampire Merchant",
    level: 60,
    comment: "Vampire Merchant",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1981491221,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 348038236,
    name: "Ghost Crossbowman",
    level: 61,
    comment: "Ghost Crossbowman",
    canFly: false,
    features: ["Undead", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1802963726,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 358623979,
    name: "Corrupted Sapling",
    level: 80,
    comment: "Corrupted Sapling",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -802865471,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 407089231,
    name: "Wolf",
    level: 80,
    comment: "Wolf",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: -744145902,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 407967118,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: 414648299,
    name: "Banshee",
    level: 63,
    comment: "Banshee",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 633696135,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -1398375841,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: -930815588,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: -1160883278,
        category: "Special",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 426583055,
    name: "Archer",
    level: 56,
    comment: "Archer",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -751119210,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 468179469,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 12,
    abilities: [
      {
        slot: 0,
        guid: 1568904735,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: -1683730497,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1238313774,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -496233120,
        category: "Movement",
        castTime: 1.1
      },
      {
        slot: 4,
        guid: 203761859,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: 495259674,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Channeling"
      },
      {
        slot: 6,
        guid: -2090815764,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 7,
        guid: 54541608,
        category: "Movement"
      },
      {
        slot: 8,
        guid: 1390611238,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Channeling"
      },
      {
        slot: 9,
        guid: -2029387940,
        category: "Movement",
        castTime: 0.7
      },
      {
        slot: 10,
        guid: 929369353,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 11,
        guid: -1986179833,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 470753758,
    name: "Hungry Piranha",
    level: 26,
    comment: "Hungry Piranha",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1059091794,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -1763951497,
        category: "BasicAttack",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 478580792,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["Bandit", "GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: 455219779,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -453755281,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 2,
        guid: 2003603501,
        category: "Special",
        castTime: 1.6
      },
      {
        slot: 3,
        guid: 840159262,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 69086718,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 5,
        guid: 82350674,
        category: "Special",
        castTime: 0.6,
        behaviorType: "Dash"
      },
      {
        slot: 6,
        guid: 1452056926,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Channeling"
      },
      {
        slot: 7,
        guid: 358187796,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 8,
        guid: -3835897,
        category: "Special",
        castTime: 1.4
      }
    ]
  },
  {
    prefabGuid: 495971434,
    name: "General Valencia the Depraved",
    level: 84,
    comment: "General Valencia the Depraved",
    canFly: false,
    features: ["Vampire", "VBlood"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: 992015964,
        category: "Special",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: -1638937811,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: 1199769322,
        category: "Special",
        castTime: 0.6,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: -503137581,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 4,
        guid: -1069881409,
        category: "Special",
        castTime: 0.7
      },
      {
        slot: 5,
        guid: 1295370119,
        category: "Special",
        castTime: 1.8,
        behaviorType: "Channeling"
      },
      {
        slot: 6,
        guid: 1730729556,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 7,
        guid: -1730693034,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 8,
        guid: -1920828971,
        category: "Special",
        castTime: 0.5,
        behaviorType: "TargetAOE"
      },
      {
        slot: 9,
        guid: 1826128809,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 10,
        guid: -1759227484,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 516718373,
    name: "Farmer",
    level: 34,
    comment: "Farmer",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1850515789,
        category: "BasicAttack",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: 525027204,
    name: "Villager",
    level: 26,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -119427343,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 565869317,
    name: "Tractor Beamer",
    level: 58,
    comment: "Tractor Beamer",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: -607666302,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1653116246,
        category: "Defensive",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: 2100724308,
        category: "Defensive",
        castTime: 0.3,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: -349738324,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: 572729167,
    name: "Mutated Wolf",
    level: 70,
    comment: "Mutated Wolf",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1869011274,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 2000340068,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 574276383,
    name: "Forest Spawnling",
    level: 20,
    comment: "Forest Spawnling",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -292254536,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 575918722,
    name: "Cursed Slime Toad",
    level: 62,
    comment: "Cursed Slime Toad",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 736733073,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 2015521421,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: -1684997624,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 750606882,
        category: "Special",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 577478542,
    name: "Goreswine the Ravager",
    level: 27,
    comment: "Goreswine the Ravager",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: 780432315,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -323939446,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1272200774,
        category: "BasicAttack",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      },
      {
        slot: 3,
        guid: 1971375367,
        category: "Special",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      },
      {
        slot: 4,
        guid: 2145809434,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: 622287046,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: -184530068,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 7,
        guid: 852659329,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 577495705,
    name: "Blood Elemental",
    level: 60,
    comment: "Blood Elemental",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -560639220,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -150520781,
        category: "BasicAttack",
        castTime: 1.3,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 294532069,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -1924288461,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -2050883182,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 591725925,
    name: "Megara the Serpent Queen",
    level: 88,
    comment: "Megara the Serpent Queen",
    canFly: false,
    features: ["Beast", "VBlood"],
    abilityCount: 30,
    abilities: [
      {
        slot: 0,
        guid: 2134120100,
        category: "BasicAttack",
        castTime: 1.9
      },
      {
        slot: 1,
        guid: 1173842428,
        category: "BasicAttack",
        castTime: 2.3
      },
      {
        slot: 2,
        guid: -918633640,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Hover"
      },
      {
        slot: 3,
        guid: 1485893437,
        category: "Special",
        castTime: 0.2
      },
      {
        slot: 4,
        guid: 1684080967,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 5,
        guid: -195933675,
        category: "Summon",
        castTime: 0.1
      },
      {
        slot: 6,
        guid: -1736482208,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 7,
        guid: -63677606,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 8,
        guid: 1185642044,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Projectile"
      },
      {
        slot: 9,
        guid: -668068170,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "TargetAOE"
      },
      {
        slot: 10,
        guid: 2099754785,
        category: "Unknown",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 11,
        guid: 1673956324,
        category: "Movement",
        castTime: 1.6
      },
      {
        slot: 12,
        guid: 1990869093,
        category: "Buff",
        castTime: 1.0
      },
      {
        slot: 13,
        guid: 846291757,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 14,
        guid: -1241930020,
        category: "Unknown",
        castTime: 0.9,
        behaviorType: "TargetAOE"
      },
      {
        slot: 15,
        guid: -1980019894,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Hover"
      },
      {
        slot: 16,
        guid: -135866689,
        category: "Unknown",
        castTime: 0.3,
        behaviorType: "Projectile"
      },
      {
        slot: 17,
        guid: -616120746,
        category: "Unknown",
        castTime: 0.7
      },
      {
        slot: 18,
        guid: -690426342,
        category: "Ultimate",
        castTime: 2.0
      },
      {
        slot: 19,
        guid: 1298623256,
        category: "Unknown",
        castTime: 0.8,
        behaviorType: "Hover"
      },
      {
        slot: 20,
        guid: 1326530647,
        category: "Unknown",
        castTime: 1.0
      },
      {
        slot: 21,
        guid: 898624706,
        category: "Unknown",
        castTime: 1.2,
        behaviorType: "TargetAOE"
      },
      {
        slot: 22,
        guid: 1946293901,
        category: "Unknown",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 23,
        guid: 1242557903,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 24,
        guid: -95450612,
        category: "Unknown",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 25,
        guid: 325438116,
        category: "Unknown",
        castTime: 0.8,
        behaviorType: "Hover"
      },
      {
        slot: 26,
        guid: -1681336728,
        category: "Unknown",
        castTime: 1.4
      },
      {
        slot: 27,
        guid: 734658196,
        category: "Unknown",
        castTime: 2.0,
        behaviorType: "Hover"
      },
      {
        slot: 28,
        guid: 345561766,
        category: "Unknown",
        castTime: 0.7
      },
      {
        slot: 29,
        guid: 1278045964,
        category: "Unknown",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: 593505050,
    name: "Giant Bat",
    level: 83,
    comment: "Giant Bat",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 5164221,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -292632051,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1493606342,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: 417450031,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 1407801281,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 597386568,
    name: "Skeleton Crossbow",
    level: 0,
    comment: "Skeleton Crossbow",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1601771862,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 613251918,
    name: "Bane the Shadowblade",
    level: 50,
    comment: "Bane the Shadowblade",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: 1456136938,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 1,
        guid: -1422240708,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 2,
        guid: -664569083,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -1532726733,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 1621601748,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Projectile"
      },
      {
        slot: 5,
        guid: 94933870,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 6,
        guid: 1986068244,
        category: "Special",
        castTime: 2.5
      },
      {
        slot: 7,
        guid: -39228843,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 616274140,
    name: "Corrupted Wolf",
    level: 74,
    comment: "Corrupted Wolf",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: -744145902,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: -1720952746,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 4,
        guid: 1369843173,
        category: "Movement",
        castTime: 1.1
      }
    ]
  },
  {
    prefabGuid: 619948378,
    name: "Sir Erwin the Gallant Cavalier",
    level: 46,
    comment: "Sir Erwin the Gallant Cavalier",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -618550771,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -1379598377,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 2,
        guid: -1623080868,
        category: "BasicAttack",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -409778117,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 4,
        guid: 1631838527,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 657708566,
    name: "Batoon",
    level: 58,
    comment: "Batoon",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1311267272,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 658578725,
    name: "Worm Terror",
    level: 63,
    comment: "Worm Terror",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1105185654,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -1789897775,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "TargetAOE"
      },
      {
        slot: 2,
        guid: 1938535864,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 666177656,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 16,
    abilities: [
      {
        slot: 0,
        guid: -905574209,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -1568811754,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: 1387986806,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 3,
        guid: -1839296163,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 4,
        guid: 151283351,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 5,
        guid: -544868559,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: 1910986910,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 7,
        guid: 1205896854,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: 1253708985,
        category: "Movement",
        castTime: 0.5
      },
      {
        slot: 9,
        guid: -1321161639,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Dash"
      },
      {
        slot: 10,
        guid: 430166804,
        category: "Unknown",
        behaviorType: "Hover"
      },
      {
        slot: 11,
        guid: -1571128781,
        category: "Unknown",
        castTime: 0.7,
        behaviorType: "Projectile"
      },
      {
        slot: 12,
        guid: -252663641,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 13,
        guid: 320434570,
        category: "Unknown",
        castTime: 0.5
      },
      {
        slot: 14,
        guid: 691162066,
        category: "Buff"
      },
      {
        slot: 15,
        guid: -1126887871,
        category: "Unknown",
        castTime: 0.3
      }
    ]
  },
  {
    prefabGuid: 674807351,
    name: "Tazer",
    level: 58,
    comment: "Tazer",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 73467714,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 685266977,
    name: "Morian the Stormwing Matriarch",
    level: 70,
    comment: "Morian the Stormwing Matriarch",
    canFly: false,
    features: ["Beast", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: 341041700,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -1389186216,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: -12917778,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 494176178,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: -514516956,
        category: "Special",
        castTime: 1.1,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: -424388071,
        category: "Special",
        castTime: 1.2,
        behaviorType: "TargetAOE"
      },
      {
        slot: 6,
        guid: 1212947823,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: 1088363798,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 709450349,
    name: "Driller",
    level: 60,
    comment: "Driller",
    canFly: false,
    features: ["Mechanical", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 2142399697,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: -892447725,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: 722671522,
    name: "Skeleton Mage",
    level: 10,
    comment: "Skeleton Mage",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 604882732,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 729746981,
    name: "Villager",
    level: 28,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 664138263,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 761646020,
    name: "Striker",
    level: 74,
    comment: "Striker",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1126476370,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: -2096054164,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: 1125833271,
        category: "BasicAttack",
        behaviorType: "Hover"
      },
      {
        slot: 3,
        guid: 1105771640,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 4,
        guid: 1213228171,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 763273073,
    name: "Lidia the Chaos Archer",
    level: 30,
    comment: "Lidia the Chaos Archer",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -1230681995,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 403340165,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -912372242,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 3,
        guid: 1996370390,
        category: "Buff",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: -836774616,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 5,
        guid: 642767950,
        category: "Buff",
        castTime: 2.0
      },
      {
        slot: 6,
        guid: -1181691042,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 763796308,
    name: "Iron Golem",
    level: 57,
    comment: "Iron Golem",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -2060534730,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1660458588,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1749064378,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 3,
        guid: 1510954952,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -793376955,
        category: "Special",
        castTime: 2.5
      }
    ]
  },
  {
    prefabGuid: 769910415,
    name: "Ghost Assassin",
    level: 60,
    comment: "Ghost Assassin",
    canFly: false,
    features: ["Demon", "Cursed"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -544864084,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 794228023,
    name: "Knight",
    level: 71,
    comment: "Knight",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -1900214847,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -386968650,
        category: "Defensive",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: 157070105,
        category: "Defensive",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -2012449382,
        category: "Defensive",
        castTime: 0.4
      },
      {
        slot: 4,
        guid: 1703351456,
        category: "Defensive",
        castTime: 0.4
      },
      {
        slot: 5,
        guid: 377144854,
        category: "Defensive",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 795262842,
    name: "General Elena the Hollow",
    level: 53,
    comment: "General Elena the Hollow",
    canFly: false,
    features: ["Vampire", "VBlood"],
    abilityCount: 14,
    abilities: [
      {
        slot: 0,
        guid: -1770479364,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 765386506,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 2,
        guid: -354379679,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -1454951943,
        category: "Buff",
        castTime: 1.0
      },
      {
        slot: 4,
        guid: -926355648,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Channeling"
      },
      {
        slot: 5,
        guid: 953519927,
        category: "Special",
        castTime: 0.7,
        behaviorType: "TargetAOE"
      },
      {
        slot: 6,
        guid: 1431473799,
        category: "Special",
        castTime: 2.1,
        behaviorType: "TargetAOE"
      },
      {
        slot: 7,
        guid: 1766924388,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "Projectile"
      },
      {
        slot: 8,
        guid: 2057952818,
        category: "Special",
        castTime: 2.1,
        behaviorType: "TargetAOE"
      },
      {
        slot: 9,
        guid: 1691254929,
        category: "Movement",
        castTime: 0.7,
        behaviorType: "TargetAOE"
      },
      {
        slot: 10,
        guid: -808864212,
        category: "Unknown",
        castTime: 1.6
      },
      {
        slot: 11,
        guid: -1710744334,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 12,
        guid: 1064969109,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 13,
        guid: -336633586,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 805231073,
    name: "Mairwyn the Elementalist",
    level: 70,
    comment: "Mairwyn the Elementalist",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 10,
    abilities: [
      {
        slot: 0,
        guid: 1520734123,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 1187623532,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 91941562,
        category: "BasicAttack",
        castTime: 3.5
      },
      {
        slot: 3,
        guid: -1897317770,
        category: "Special",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 1217615468,
        category: "Special",
        castTime: 1.8,
        behaviorType: "Projectile"
      },
      {
        slot: 5,
        guid: -2025881745,
        category: "Special",
        castTime: 3.0
      },
      {
        slot: 6,
        guid: 886063983,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: 1365358996,
        category: "Movement",
        castTime: 0.8
      },
      {
        slot: 8,
        guid: -1232816408,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 9,
        guid: -139137314,
        category: "Movement",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 814083983,
    name: "Henry Blackbrew the Doctor",
    level: 74,
    comment: "Henry Blackbrew the Doctor",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot", "VBlood"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: -506564570,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Hover"
      },
      {
        slot: 1,
        guid: 922412053,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1142491430,
        category: "BasicAttack",
        castTime: 3.0,
        behaviorType: "Channeling"
      },
      {
        slot: 3,
        guid: 98352404,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: -559662270,
        category: "Movement",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 1957366402,
        category: "Special"
      },
      {
        slot: 6,
        guid: -727882902,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 7,
        guid: -1904011556,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Channeling"
      },
      {
        slot: 8,
        guid: -841469184,
        category: "Movement"
      },
      {
        slot: 9,
        guid: 1379672205,
        category: "Movement"
      },
      {
        slot: 10,
        guid: -2097618568,
        category: "Unknown",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 820492683,
    name: "Technician",
    level: 58,
    comment: "Technician",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -749335766,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1485838951,
        category: "BasicAttack",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: 823276204,
    name: "Abomination",
    level: 64,
    comment: "Abomination",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -736079997,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 340686786,
        category: "BasicAttack",
        castTime: 3.0
      },
      {
        slot: 2,
        guid: 1459248190,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 3,
        guid: -1766338327,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 4,
        guid: -79098693,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 5,
        guid: -1485105952,
        category: "Special",
        castTime: 0.4
      }
    ]
  },
  {
    prefabGuid: 826666431,
    name: "Tazer",
    level: 46,
    comment: "Tazer",
    canFly: false,
    features: ["Beast", "Militia"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -469608333,
        category: "BasicAttack",
        castTime: 0.9,
        behaviorType: "Hover"
      },
      {
        slot: 1,
        guid: 1246326726,
        category: "Movement",
        castTime: 1.6,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 1220301459,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -715615220,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Hover"
      },
      {
        slot: 4,
        guid: 325658714,
        category: "Movement",
        castTime: 1.6,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 834333879,
    name: "Unstable Spider",
    level: 58,
    comment: "Unstable Spider",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1356470853,
        category: "Special",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 847893333,
    name: "Militia Demolisher",
    level: 47,
    comment: "Militia Demolisher",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1232856473,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 849891426,
    name: "Ghost Assassin",
    level: 63,
    comment: "Ghost Assassin",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 575048784,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 1,
        guid: 57588514,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 2,
        guid: 1365714615,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: 1791635791,
        category: "Special",
        castTime: 0.8
      },
      {
        slot: 4,
        guid: -923762386,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: 236831977,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 850622034,
    name: "Meredith the Bright Archer",
    level: 50,
    comment: "Meredith the Bright Archer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: 764619540,
        category: "BasicAttack",
        castTime: 1.6,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 1181965808,
        category: "BasicAttack",
        castTime: 2.5,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1574404388,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 3,
        guid: -1286987800,
        category: "Special",
        castTime: 2.5,
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: -202704002,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: -494771621,
        category: "Special",
        castTime: 1.4,
        behaviorType: "TargetAOE"
      },
      {
        slot: 6,
        guid: -1282136902,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 336380612,
        category: "Summon",
        castTime: 0.5
      },
      {
        slot: 8,
        guid: -1509483896,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 891705701,
    name: "Slave Master",
    level: 65,
    comment: "Slave Master",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -1969627539,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: 1423169435,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -725150213,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 3,
        guid: -1276648449,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 4,
        guid: 401195214,
        category: "Movement",
        castTime: 0.6,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 910988233,
    name: "Grethel the Glassblower",
    level: 50,
    comment: "Grethel the Glassblower",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: -29584300,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 317399990,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: -212014657,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 3,
        guid: -225237355,
        category: "Movement",
        castTime: 1.8,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: -719487446,
        category: "Special"
      },
      {
        slot: 5,
        guid: -1174644772,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 6,
        guid: 800186323,
        category: "Movement",
        castTime: 1.5
      },
      {
        slot: 7,
        guid: 890007919,
        category: "Defensive",
        castTime: 0.7
      },
      {
        slot: 8,
        guid: -348862907,
        category: "Movement",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 923140362,
    name: "Thief",
    level: 18,
    comment: "Thief",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1734839687,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: -1956103113,
        category: "BasicAttack"
      },
      {
        slot: 2,
        guid: -691814641,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 3,
        guid: -2106739571,
        category: "BasicAttack",
        castTime: 0.4
      }
    ]
  },
  {
    prefabGuid: 924132254,
    name: "Miner",
    level: 42,
    comment: "Miner",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 2013132333,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: 937597711,
    name: "Undying Ghoul",
    level: 30,
    comment: "Undying Ghoul",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1382585346,
        category: "BasicAttack",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 939467639,
    name: "Leandra the Shadow Priestess",
    level: 47,
    comment: "Leandra the Shadow Priestess",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 787702249,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 651637774,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1795148379,
        category: "Special",
        castTime: 1.6
      },
      {
        slot: 3,
        guid: 1325722355,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 461701172,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 5,
        guid: 1583944483,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 952695804,
    name: "Armoured Skeleton",
    level: 40,
    comment: "Armoured Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 138513891,
        category: "BasicAttack",
        castTime: 0.7
      }
    ]
  },
  {
    prefabGuid: 956965183,
    name: "Militia Crossbow",
    level: 36,
    comment: "Militia Crossbow",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1802963726,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 981369753,
    name: "Dreadhorn",
    level: 84,
    comment: "Dreadhorn",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -1362226779,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: -1924032736,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -1670440585,
        category: "BasicAttack",
        castTime: 3.0,
        behaviorType: "Hover"
      },
      {
        slot: 3,
        guid: -2081714952,
        category: "Special",
        castTime: 1.4
      },
      {
        slot: 4,
        guid: -1450279612,
        category: "Special",
        behaviorType: "Hover"
      },
      {
        slot: 5,
        guid: 1236214928,
        category: "Special",
        castTime: 3.0,
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: 986768339,
    name: "Militia Torchbearer",
    level: 36,
    comment: "Militia Torchbearer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 471046053,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: -116877786,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 1029047051,
    name: "Corrupted Crow",
    level: 75,
    comment: "Corrupted Crow",
    canFly: false,
    features: ["Beast"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: -1884419467,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1333250097,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 2,
        guid: 1589627808,
        category: "Movement",
        castTime: 1.1,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 61265236,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: -1095356108,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 5,
        guid: 1918468442,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 6,
        guid: -195896692,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: 304685414,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: 304685414,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 1043643344,
    name: "Bear",
    level: 18,
    comment: "Bear",
    canFly: false,
    features: ["Beast"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1745337333,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1241654227,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 2,
        guid: 160063059,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 3,
        guid: -193432841,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -388636006,
        category: "Special",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: 1050151632,
    name: "Militia Guard",
    level: 40,
    comment: "Militia Guard",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 931534835,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -668603830,
        category: "Defensive",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: -485166585,
        category: "Defensive",
        castTime: 0.2
      }
    ]
  },
  {
    prefabGuid: 1069072707,
    name: "Villager",
    level: 14,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 394173239,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 1078424589,
    name: "Spiderling",
    level: 56,
    comment: "Spiderling",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1655641312,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1083647444,
    name: "Militia Archer",
    level: 42,
    comment: "Militia Archer",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -351745987,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1102042167,
        category: "Special",
        castTime: 1.7,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1092792896,
    name: "Mutant Spitter",
    level: 58,
    comment: "Mutant Spitter",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1771061239,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: -1038102898,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: 1271143604,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 3,
        guid: 1388701732,
        category: "Special",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1094898203,
    name: "Scout",
    level: 10,
    comment: "Scout",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -39311902,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1105583702,
    name: "Bear",
    level: 80,
    comment: "Bear",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1745337333,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -190598145,
        category: "BasicAttack",
        castTime: 1.8
      }
    ]
  },
  {
    prefabGuid: 1106149033,
    name: "Grayson the Armourer",
    level: 27,
    comment: "Grayson the Armourer",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: -66951019,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 65616384,
        category: "Special",
        castTime: 2.2
      },
      {
        slot: 2,
        guid: 226929260,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -2121210997,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Channeling"
      },
      {
        slot: 4,
        guid: -1749428209,
        category: "Special",
        castTime: 0.2
      },
      {
        slot: 5,
        guid: 19031114,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Channeling"
      },
      {
        slot: 6,
        guid: -146108512,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 7,
        guid: -609538743,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Channeling"
      },
      {
        slot: 8,
        guid: -1865487078,
        category: "Special",
        castTime: 1.4
      }
    ]
  },
  {
    prefabGuid: 1107541186,
    name: "Copper Golem",
    level: 42,
    comment: "Copper Golem",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1272395899,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 418002062,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -1045581646,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -352214814,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -793376955,
        category: "Special",
        castTime: 2.5
      }
    ]
  },
  {
    prefabGuid: 1112903312,
    name: "Miner",
    level: 14,
    comment: "Miner",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 2039677643,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1340319300,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 900927411,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1112948824,
    name: "Lord Styx the Night Champion",
    level: 84,
    comment: "Lord Styx the Night Champion",
    canFly: false,
    features: ["Vampire", "VBlood"],
    abilityCount: 10,
    abilities: [
      {
        slot: 0,
        guid: -1965562520,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -66831677,
        category: "BasicAttack",
        castTime: 0.2,
        behaviorType: "TargetAOE"
      },
      {
        slot: 2,
        guid: 1450902136,
        category: "BasicAttack",
        castTime: 0.2,
        behaviorType: "TargetAOE"
      },
      {
        slot: 3,
        guid: 716346677,
        category: "Special",
        castTime: 1.5,
        behaviorType: "Hover"
      },
      {
        slot: 4,
        guid: 1416508240,
        category: "Movement",
        castTime: 0.7,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: -254080557,
        category: "Special",
        castTime: 2.5
      },
      {
        slot: 6,
        guid: -1648920159,
        category: "Movement",
        castTime: 0.7,
        behaviorType: "Dash"
      },
      {
        slot: 7,
        guid: -597709516,
        category: "Summon",
        castTime: 1.8,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: -1698981316,
        category: "Movement",
        castTime: 1.7,
        behaviorType: "Channeling"
      },
      {
        slot: 9,
        guid: 1146467217,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 1124739990,
    name: "Keely the Frost Archer",
    level: 20,
    comment: "Keely the Frost Archer",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 2134585360,
        category: "Special",
        castTime: 2.3
      },
      {
        slot: 1,
        guid: 403340165,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -912372242,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 3,
        guid: 766284586,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 4,
        guid: -1871956083,
        category: "Special",
        castTime: 1.6
      },
      {
        slot: 5,
        guid: -328617085,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 6,
        guid: 1015070299,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 1144208724,
    name: "Hand of Dracula",
    level: 53,
    comment: "Hand of Dracula",
    canFly: false,
    features: ["Demon"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -2042076580,
        category: "Summon",
        castTime: 1.1
      },
      {
        slot: 1,
        guid: -639471262,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: -809908964,
        category: "Summon",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1148936156,
    name: "Rifleman",
    level: 65,
    comment: "Rifleman",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1622839653,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1157537604,
    name: "Villager",
    level: 52,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -119427343,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: 1397338806,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: 1185952775,
    name: "Lightweaver",
    level: 76,
    comment: "Lightweaver",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -839571202,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 1761660947,
        category: "Special",
        castTime: 0.5,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -281576382,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 1891756809,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: -284360089,
        category: "Movement",
        castTime: 0.4
      },
      {
        slot: 5,
        guid: 1876841142,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Hover"
      }
    ]
  },
  {
    prefabGuid: 1193263017,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: 1209580976,
    name: "Dartflinger",
    level: 73,
    comment: "Dartflinger",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1167502816,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1629729690,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 2,
        guid: -865776841,
        category: "BasicAttack",
        castTime: 0.3
      }
    ]
  },
  {
    prefabGuid: 1216169364,
    name: "Villager",
    level: 40,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -119427343,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 1218339832,
    name: "Cleric",
    level: 68,
    comment: "Cleric",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -587604072,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 100549683,
        category: "Defensive",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -819795639,
        category: "Defensive",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -923957888,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 1817985064,
        category: "Special",
        castTime: 0.9,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 1220569089,
    name: "Scout",
    level: 10,
    comment: "Scout",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -39311902,
        category: "BasicAttack",
        castTime: 1.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1880729304,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -976938930,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -937443015,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 1067834426,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: 1224283123,
    name: "Harpy Sorceress",
    level: 68,
    comment: "Harpy Sorceress",
    canFly: false,
    features: ["Beast"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1075000607,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 725170243,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 2,
        guid: -420953378,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 1233988687,
    name: "Adam the Firstborn",
    level: 88,
    comment: "Adam the Firstborn",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot", "VBlood"],
    abilityCount: 21,
    abilities: [
      {
        slot: 0,
        guid: 1853611622,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: 764489448,
        category: "BasicAttack",
        castTime: 1.7
      },
      {
        slot: 2,
        guid: -2054557525,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 164595507,
        category: "Special",
        castTime: 0.6,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: 1693720077,
        category: "Special",
        castTime: 0.7
      },
      {
        slot: 5,
        guid: -1659620404,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 6,
        guid: 723715376,
        category: "Movement",
        castTime: 0.9
      },
      {
        slot: 7,
        guid: -2066895745,
        category: "Movement",
        castTime: 0.7
      },
      {
        slot: 8,
        guid: 1065629794,
        category: "Defensive",
        castTime: 0.2,
        behaviorType: "Channeling"
      },
      {
        slot: 9,
        guid: 1795073911,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 10,
        guid: 1492585365,
        category: "Unknown",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 11,
        guid: -2127334043,
        category: "Summon",
        castTime: 0.7
      },
      {
        slot: 12,
        guid: -741006712,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 13,
        guid: -820078889,
        category: "Unknown",
        castTime: 2.0
      },
      {
        slot: 14,
        guid: 927872126,
        category: "Unknown",
        behaviorType: "Projectile"
      },
      {
        slot: 15,
        guid: 1808542763,
        category: "Unknown",
        behaviorType: "Travel"
      },
      {
        slot: 16,
        guid: -570933441,
        category: "Unknown",
        behaviorType: "Travel"
      },
      {
        slot: 17,
        guid: -1503327574,
        category: "Unknown",
        castTime: 1.8
      },
      {
        slot: 18,
        guid: 1484650418,
        category: "Unknown",
        castTime: 0.6,
        behaviorType: "Hover"
      },
      {
        slot: 19,
        guid: -1280314509,
        category: "Unknown",
        behaviorType: "Travel"
      },
      {
        slot: 20,
        guid: 540661576,
        category: "Unknown",
        castTime: 1.4
      }
    ]
  },
  {
    prefabGuid: 1239832946,
    name: "Giant Crow",
    level: 54,
    comment: "Giant Crow",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: 898033701,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -447578631,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -2125818102,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 3,
        guid: -1357699119,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: 903306477,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: 1333250097,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 1250474035,
    name: "Skeleton Crossbow",
    level: 20,
    comment: "Skeleton Crossbow",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1601771862,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1254601307,
    name: "Jakira the Shadow Huntress",
    level: 75,
    comment: "Jakira the Shadow Huntress",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 15,
    abilities: [
      {
        slot: 0,
        guid: 139802405,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -407341422,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 1920281924,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -1372642162,
        category: "Special",
        castTime: 0.7
      },
      {
        slot: 4,
        guid: -385314771,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 5,
        guid: -1337706250,
        category: "Special",
        castTime: 1.8
      },
      {
        slot: 6,
        guid: -315621824,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 1318543111,
        category: "Movement",
        castTime: 0.5
      },
      {
        slot: 8,
        guid: 1584749067,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 9,
        guid: 987540308,
        category: "Movement"
      },
      {
        slot: 10,
        guid: 1261373899,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Dash"
      },
      {
        slot: 11,
        guid: -1518495336,
        category: "Unknown"
      },
      {
        slot: 12,
        guid: -140727030,
        category: "Unknown"
      },
      {
        slot: 13,
        guid: -941466362,
        category: "Unknown",
        behaviorType: "Hover"
      },
      {
        slot: 14,
        guid: 168833229,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: 1295855316,
    name: "Lucile the Venom Alchemist",
    level: 76,
    comment: "Lucile the Venom Alchemist",
    canFly: false,
    features: ["Human", "Humanoid", "VBlood"],
    abilityCount: 13,
    abilities: [
      {
        slot: 0,
        guid: 2053056011,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 973975627,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: 1310557060,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "TargetAOE"
      },
      {
        slot: 3,
        guid: 1501543883,
        category: "Special",
        castTime: 0.8,
        behaviorType: "TargetAOE"
      },
      {
        slot: 4,
        guid: 1628835400,
        category: "Defensive",
        castTime: 1.2
      },
      {
        slot: 5,
        guid: 846507754,
        category: "Special",
        castTime: 0.5,
        behaviorType: "TargetAOE"
      },
      {
        slot: 6,
        guid: 2041625587,
        category: "Movement",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 385165207,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 8,
        guid: 505640659,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Hover"
      },
      {
        slot: 9,
        guid: -1358113706,
        category: "Movement",
        castTime: 0.5
      },
      {
        slot: 10,
        guid: 550876706,
        category: "Unknown",
        castTime: 0.1,
        behaviorType: "Hover"
      },
      {
        slot: 11,
        guid: -1617880256,
        category: "Unknown",
        castTime: 1.5,
        behaviorType: "Hover"
      },
      {
        slot: 12,
        guid: -2029137394,
        category: "Unknown",
        castTime: 0.3,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 1304434816,
    name: "Pyro",
    level: 56,
    comment: "Pyro",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 288608511,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      },
      {
        slot: 1,
        guid: -635085409,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: 1309418594,
    name: "Woodcutter",
    level: 14,
    comment: "Woodcutter",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 2039677643,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1340319300,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 1318855899,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 2134585360,
        category: "Special",
        castTime: 2.3
      },
      {
        slot: 1,
        guid: 403340165,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -912372242,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 3,
        guid: 766284586,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 4,
        guid: -1871956083,
        category: "Special",
        castTime: 1.6
      },
      {
        slot: 5,
        guid: -328617085,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 6,
        guid: 1015070299,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 1395549638,
    name: "Skeleton Crossbow",
    level: 2,
    comment: "Skeleton Crossbow",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1601771862,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1401026468,
    name: "Sentry Officer",
    level: 60,
    comment: "Sentry Officer",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1971068020,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 2052063970,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: -466422619,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 1405099312,
    name: "Blood Harpy",
    level: 60,
    comment: "Blood Harpy",
    canFly: false,
    features: ["Beast"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1075000607,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 725170243,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 2,
        guid: -420953378,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 1406266284,
    name: "Blood Soul",
    level: 90,
    comment: "Blood Soul",
    canFly: false,
    features: ["Demon"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1768784526,
        category: "Special",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: 1406393857,
    name: "Priest",
    level: 76,
    comment: "Priest",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -292542362,
        category: "Special",
        castTime: 1.7,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1282606238,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: 943885425,
        category: "Summon",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 1426964824,
    name: "Villager",
    level: 26,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1055785998,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -1617717290,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: 1434914085,
    name: "Pixie",
    level: 35,
    comment: "Pixie",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -259433272,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1451256919,
    name: "Peon",
    level: 73,
    comment: "Peon",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 936609695,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 1453520986,
    name: "Stalker",
    level: 30,
    comment: "Stalker",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1969189808,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -1250624804,
        category: "Movement",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -1997657671,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1462269123,
    name: "Harpy Scratcher",
    level: 66,
    comment: "Harpy Scratcher",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1245308829,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 769558056,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: -265839081,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -738502538,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: 1466015976,
    name: "Thug",
    level: 16,
    comment: "Thug",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -1970983747,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1880729304,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -976938930,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 3,
        guid: -937443015,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: 1067834426,
        category: "Special",
        castTime: 3.0
      }
    ]
  },
  {
    prefabGuid: 1478790879,
    name: "Cursed Spitter Toad",
    level: 61,
    comment: "Cursed Spitter Toad",
    canFly: false,
    features: ["Beast", "Cursed"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -2117925151,
        category: "Special",
        castTime: 1.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 193936844,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 2,
        guid: -1684997624,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 1479720323,
    name: "Footman",
    level: 65,
    comment: "Footman",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 979394873,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -153669671,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 2,
        guid: 30220474,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 3,
        guid: 680715401,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 4,
        guid: 530843430,
        category: "Special",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: 1481842114,
    name: "Militia Crossbow",
    level: 36,
    comment: "Militia Crossbow",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1802963726,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1494126678,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["Militia", "GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -841402173,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: -1110188840,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: 308360499,
        category: "Special",
        castTime: 0.4
      },
      {
        slot: 3,
        guid: -743963442,
        category: "Special",
        castTime: 0.8
      },
      {
        slot: 4,
        guid: 1624827356,
        category: "Special",
        castTime: 3.5
      },
      {
        slot: 5,
        guid: 1607170837,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 6,
        guid: -1634136571,
        category: "Special",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1496810447,
    name: "Corrupted Treant",
    level: 80,
    comment: "Corrupted Treant",
    canFly: false,
    features: ["Demon"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 680554094,
        category: "BasicAttack",
        castTime: 1.7
      },
      {
        slot: 1,
        guid: -891864538,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -1858935493,
        category: "BasicAttack",
        castTime: 2.5
      },
      {
        slot: 3,
        guid: 1957509060,
        category: "Special",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 1502148822,
    name: "Exsanguinator",
    level: 83,
    comment: "Exsanguinator",
    canFly: false,
    features: ["Demon"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: -2049927912,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -55735320,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: -1762655324,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 352570759,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: 329043640,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 5,
        guid: 2138222166,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 6,
        guid: -53726244,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 7,
        guid: -294731102,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Travel"
      },
      {
        slot: 8,
        guid: -1401138411,
        category: "Movement",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 1527640414,
    name: "Corrupted Mantrap",
    level: 72,
    comment: "Corrupted Mantrap",
    canFly: false,
    features: ["Beast"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 544237275,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 998806487,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: 1026449575,
        category: "Summon",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1531777139,
    name: "Sentinel",
    level: 81,
    comment: "Sentinel",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: -2067963108,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: -123334608,
        category: "Defensive",
        castTime: 0.6,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: -1138991224,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 4,
        guid: -100357751,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: 481790231,
        category: "Special",
        castTime: 1.7
      },
      {
        slot: 6,
        guid: 170206690,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 7,
        guid: -637041016,
        category: "Defensive",
        castTime: 0.6
      },
      {
        slot: 8,
        guid: -838311342,
        category: "Movement",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 1532829342,
    name: "Villager",
    level: 26,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -119427343,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: 1397338806,
        category: "BasicAttack",
        castTime: 0.6
      }
    ]
  },
  {
    prefabGuid: 1570140219,
    name: "Mutated Moose",
    level: 56,
    comment: "Mutated Moose",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1883230955,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 1576267559,
    name: "Villager",
    level: 28,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -650192545,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1604500740,
    name: "Armoured Skeleton",
    level: 10,
    comment: "Armoured Skeleton",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 537620937,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 1626314708,
    name: "Voltatia the Power Master",
    level: 79,
    comment: "Voltatia the Power Master",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: -1187406748,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Channeling"
      },
      {
        slot: 1,
        guid: 1623874343,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -900859351,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 3,
        guid: -1308520526,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: -1220318405,
        category: "Special",
        castTime: 3.0,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: -1717533555,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: -1733128159,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 7,
        guid: 978386280,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "TargetAOE"
      },
      {
        slot: 8,
        guid: -948735477,
        category: "Movement",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: 1631713257,
    name: "Vampire Merchant",
    level: 80,
    comment: "Vampire Merchant",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1981491221,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1635780151,
    name: "Harpy Dasher",
    level: 66,
    comment: "Harpy Dasher",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 191219781,
        category: "Movement",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 1524767753,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: 437523703,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: 705089395,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      }
    ]
  },
  {
    prefabGuid: 1640311129,
    name: "Undying Ghoul",
    level: 25,
    comment: "Undying Ghoul",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1382585346,
        category: "BasicAttack",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 1649578802,
    name: "Paladin",
    level: 76,
    comment: "Paladin",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1212343160,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1926314891,
        category: "Special",
        castTime: 3.0
      },
      {
        slot: 2,
        guid: 413176017,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -448018551,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 4,
        guid: -626021308,
        category: "Special",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: 1655577903,
    name: "Lightning Protector",
    level: 76,
    comment: "Lightning Protector",
    canFly: false,
    features: ["Mechanical", "Gloomrot"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1537394790,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 574933909,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Channeling"
      }
    ]
  },
  {
    prefabGuid: 1660801216,
    name: "Devoted",
    level: 56,
    comment: "Devoted",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 2034438314,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -1204182143,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 2,
        guid: 1214148146,
        category: "Defensive",
        castTime: 0.2
      },
      {
        slot: 3,
        guid: 474075607,
        category: "Special",
        castTime: 2.5,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 1684831595,
    name: "Ghost Warrior",
    level: 61,
    comment: "Ghost Warrior",
    canFly: false,
    features: ["Undead", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 994921501,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 1688478381,
    name: "Octavian the Militia Captain",
    level: 58,
    comment: "Octavian the Militia Captain",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 14,
    abilities: [
      {
        slot: 0,
        guid: -241312231,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 1,
        guid: 2142000031,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -930424159,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -213757827,
        category: "Special",
        castTime: 10.0
      },
      {
        slot: 4,
        guid: 1870073064,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: -1802655130,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 6,
        guid: -2015856259,
        category: "Movement",
        castTime: 0.7
      },
      {
        slot: 7,
        guid: 976341724,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 8,
        guid: -1228302737,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Hover"
      },
      {
        slot: 9,
        guid: -746972983,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 10,
        guid: -735966107,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Projectile"
      },
      {
        slot: 11,
        guid: -2003945269,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Travel"
      },
      {
        slot: 12,
        guid: 1946568656,
        category: "Unknown",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 13,
        guid: -1843696472,
        category: "Unknown",
        castTime: 0.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 1703325932,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: 1706319681,
    name: "Skeleton Crossbow",
    level: 18,
    comment: "Skeleton Crossbow",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1601771862,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1727426580,
    name: "Mugger",
    level: 20,
    comment: "Mugger",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1281316565,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 616797239,
        category: "Defensive",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 2034763818,
        category: "BasicAttack"
      }
    ]
  },
  {
    prefabGuid: 1728773109,
    name: "Paladin",
    level: 76,
    comment: "Paladin",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 1212343160,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1926314891,
        category: "Special",
        castTime: 3.0
      },
      {
        slot: 2,
        guid: 413176017,
        category: "Movement",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -448018551,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 4,
        guid: -626021308,
        category: "Special",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: 1730498275,
    name: "Militia Guard",
    level: 40,
    comment: "Militia Guard",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 931534835,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -668603830,
        category: "Defensive",
        castTime: 1.2
      },
      {
        slot: 2,
        guid: -485166585,
        category: "Defensive",
        castTime: 0.2
      }
    ]
  },
  {
    prefabGuid: 1732477970,
    name: "Railgunner",
    level: 58,
    comment: "Railgunner",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1779758273,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 101220113,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 286182923,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1743532914,
    name: "Gatherer",
    level: 14,
    comment: "Gatherer",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1826323796,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1340319300,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 1745498602,
    name: "Cardinal Aide",
    level: 77,
    comment: "Cardinal Aide",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 2108112601,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: 116066962,
        category: "Defensive",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: -1378417368,
        category: "Special",
        castTime: 1.7,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1756241788,
    name: "Ace Incinerator",
    level: 74,
    comment: "Ace Incinerator",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -297165667,
        category: "BasicAttack",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1954926268,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "Travel"
      },
      {
        slot: 2,
        guid: -1462866563,
        category: "BasicAttack",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 1767714956,
    name: "Spiderling",
    level: 56,
    comment: "Spiderling",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1655641312,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 1772451421,
    name: "Militia Skirmisher",
    level: 36,
    comment: "Militia Skirmisher",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 994921501,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 1772642154,
    name: "Villager",
    level: 20,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -119427343,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 1786690263,
    name: "Pufferfish",
    level: 26,
    comment: "Pufferfish",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 177071276,
        category: "BasicAttack",
        castTime: 2.2
      }
    ]
  },
  {
    prefabGuid: 1787640747,
    name: "Emery Golem",
    level: 80,
    comment: "Emery Golem",
    canFly: false,
    features: ["Demon"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -705534828,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1882115765,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 2,
        guid: 107764414,
        category: "BasicAttack",
        castTime: 1.1
      },
      {
        slot: 3,
        guid: 2080406227,
        category: "Buff",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -793376955,
        category: "Special",
        castTime: 2.5
      }
    ]
  },
  {
    prefabGuid: 1807491570,
    name: "Slicer",
    level: 60,
    comment: "Slicer",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1512916174,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -2095410919,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 2,
        guid: 249896389,
        category: "BasicAttack",
        castTime: 0.3
      }
    ]
  },
  {
    prefabGuid: 1809382006,
    name: "Shadow Soldier",
    level: 92,
    comment: "Shadow Soldier",
    canFly: false,
    features: ["Undead", "Humanoid", "Vampire"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -847327302,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 1,
        guid: 403738972,
        category: "BasicAttack",
        castTime: 0.8
      }
    ]
  },
  {
    prefabGuid: 1825512527,
    name: "Wolf",
    level: 10,
    comment: "Wolf",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 556902791,
        category: "BasicAttack",
        castTime: 1.3
      }
    ]
  },
  {
    prefabGuid: 1854211210,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["Bandit", "GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -1230681995,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 403340165,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: -912372242,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 3,
        guid: 1996370390,
        category: "Buff",
        castTime: 2.0
      },
      {
        slot: 4,
        guid: -836774616,
        category: "Special",
        castTime: 1.2
      },
      {
        slot: 5,
        guid: 642767950,
        category: "Buff",
        castTime: 2.0
      },
      {
        slot: 6,
        guid: -1181691042,
        category: "Movement",
        castTime: 0.9,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1864177126,
    name: "Dreadcleaver",
    level: 74,
    comment: "Dreadcleaver",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 323806214,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1944086996,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1797731340,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 71067886,
        category: "Special",
        castTime: 0.8
      },
      {
        slot: 4,
        guid: 940071564,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: 1887807944,
    name: "Villager",
    level: 26,
    comment: "Villager",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1055785998,
        category: "BasicAttack",
        castTime: 0.5
      }
    ]
  },
  {
    prefabGuid: 1896428751,
    name: "Clive the Firestarter",
    level: 30,
    comment: "Clive the Firestarter",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -444905742,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      },
      {
        slot: 1,
        guid: 192866635,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 1479036818,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1906792990,
    name: "Corrupted Sapling",
    level: 72,
    comment: "Corrupted Sapling",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -581209791,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -267258900,
        category: "BasicAttack",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: 1906807803,
    name: "Dreadcleaver",
    level: 74,
    comment: "Dreadcleaver",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 323806214,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 1944086996,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1797731340,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 71067886,
        category: "Special",
        castTime: 0.8
      },
      {
        slot: 4,
        guid: 940071564,
        category: "BasicAttack",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: 1912966420,
    name: "Blood Prophet",
    level: 84,
    comment: "Blood Prophet",
    canFly: false,
    features: ["Demon"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -347082762,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: -1717961213,
        category: "Special",
        castTime: 1.5
      }
    ]
  },
  {
    prefabGuid: 1917502536,
    name: "Militia Skirmisher",
    level: 70,
    comment: "Militia Skirmisher",
    canFly: false,
    features: ["Mechanical", "Church", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 2005435470,
        category: "BasicAttack",
        castTime: 0.1,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 1924724671,
    name: "Peon",
    level: 73,
    comment: "Peon",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 596395337,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 112453727,
        category: "BasicAttack"
      },
      {
        slot: 2,
        guid: -1869018808,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 1938756250,
    name: "Mutated Bear",
    level: 74,
    comment: "Mutated Bear",
    canFly: false,
    features: ["Beast"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -77977745,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 1,
        guid: -1241654227,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 2,
        guid: -44955695,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 3,
        guid: 616732424,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 4,
        guid: -193432841,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 5,
        guid: -388636006,
        category: "Special",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: 1945956671,
    name: "Maja the Dark Savant",
    level: 47,
    comment: "Maja the Dark Savant",
    canFly: false,
    features: ["Human", "Humanoid", "Militia", "VBlood"],
    abilityCount: 8,
    abilities: [
      {
        slot: 0,
        guid: -186690512,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 2019689688,
        category: "BasicAttack",
        castTime: 0.3,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -592301846,
        category: "BasicAttack",
        castTime: 2.5
      },
      {
        slot: 3,
        guid: -1922948406,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Hover"
      },
      {
        slot: 4,
        guid: -1008562275,
        category: "Movement",
        castTime: 2.5
      },
      {
        slot: 5,
        guid: -198012170,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: -1104025162,
        category: "Movement",
        castTime: 1.7,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: -1332977411,
        category: "Movement"
      }
    ]
  },
  {
    prefabGuid: 1971653132,
    name: "Ghost Assassin",
    level: 60,
    comment: "Ghost Assassin",
    canFly: false,
    features: ["Demon", "Cursed"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: 1835500377,
        category: "BasicAttack",
        castTime: 0.5,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1974733695,
    name: "Weaver",
    level: 58,
    comment: "Weaver",
    canFly: false,
    features: ["Beast"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1694480301,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1072715636,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 2,
        guid: 464665677,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1980594081,
    name: "Shadowkin",
    level: 83,
    comment: "Shadowkin",
    canFly: false,
    features: ["Demon"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1617928948,
        category: "BasicAttack",
        castTime: 1.2
      },
      {
        slot: 1,
        guid: 530484088,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 1990744594,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["Militia", "GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 14,
    abilities: [
      {
        slot: 0,
        guid: -241312231,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 1,
        guid: 2142000031,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -930424159,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -213757827,
        category: "Special",
        castTime: 10.0
      },
      {
        slot: 4,
        guid: 1244670975,
        category: "Special",
        castTime: 2.0
      },
      {
        slot: 5,
        guid: -1802655130,
        category: "Special",
        castTime: 1.0
      },
      {
        slot: 6,
        guid: -2015856259,
        category: "Movement",
        castTime: 0.7
      },
      {
        slot: 7,
        guid: 976341724,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Hover"
      },
      {
        slot: 8,
        guid: -1228302737,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Hover"
      },
      {
        slot: 9,
        guid: -746972983,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 10,
        guid: -735966107,
        category: "BasicAttack",
        castTime: 0.7,
        behaviorType: "Projectile"
      },
      {
        slot: 11,
        guid: -2003945269,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Travel"
      },
      {
        slot: 12,
        guid: 1946568656,
        category: "Unknown",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 13,
        guid: -1843696472,
        category: "Unknown",
        castTime: 0.1,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 2005508157,
    name: "Militia Veteran",
    level: 54,
    comment: "Militia Veteran",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1528770669,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 1,
        guid: 951831242,
        category: "Defensive",
        castTime: 0.7
      },
      {
        slot: 2,
        guid: 892342913,
        category: "Movement",
        castTime: 1.3,
        behaviorType: "Dash"
      }
    ]
  },
  {
    prefabGuid: 2009018555,
    name: "Lesser Blood Soul",
    level: 57,
    comment: "Lesser Blood Soul",
    canFly: false,
    features: ["GateBoss", "GateBoss_Minor", "VBlood"],
    abilityCount: 11,
    abilities: [
      {
        slot: 0,
        guid: 1552780633,
        category: "BasicAttack",
        castTime: 1.3
      },
      {
        slot: 1,
        guid: -1417141477,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 2,
        guid: -343320686,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 3,
        guid: 224496996,
        category: "BasicAttack",
        castTime: 1.0
      },
      {
        slot: 4,
        guid: 1501188283,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: -175257190,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 6,
        guid: -737556373,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: -23281706,
        category: "Movement",
        castTime: 1.5,
        behaviorType: "Projectile"
      },
      {
        slot: 8,
        guid: 985201241,
        category: "Special",
        castTime: 1.2,
        behaviorType: "TargetAOE"
      },
      {
        slot: 9,
        guid: -1503146131,
        category: "Movement",
        castTime: 8.0
      },
      {
        slot: 10,
        guid: -1330984343,
        category: "Unknown",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 2016963774,
    name: "Mantrap",
    level: 30,
    comment: "Mantrap",
    canFly: false,
    features: ["Beast"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1238529741,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 780372716,
        category: "Special",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 2,
        guid: -359326766,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 2018586909,
    name: "Vampire Cultist",
    level: 50,
    comment: "Vampire Cultist",
    canFly: false,
    features: ["Human", "Humanoid", "Vampire"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: -839386508,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: 1210884829,
        category: "BasicAttack",
        castTime: 0.1
      },
      {
        slot: 2,
        guid: 1983112426,
        category: "BasicAttack"
      },
      {
        slot: 3,
        guid: -2059612596,
        category: "Special"
      },
      {
        slot: 4,
        guid: 657450547,
        category: "Special"
      },
      {
        slot: 5,
        guid: 1814959003,
        category: "Special"
      },
      {
        slot: 6,
        guid: -501371757,
        category: "Special"
      }
    ]
  },
  {
    prefabGuid: 2025660438,
    name: "Skeleton Bishop",
    level: 46,
    comment: "Skeleton Bishop",
    canFly: false,
    features: ["Undead", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 2021815703,
        category: "Special",
        castTime: 1.2,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 1687310776,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 2036785949,
    name: "Militia Crossbow",
    level: 36,
    comment: "Militia Crossbow",
    canFly: false,
    features: ["Human", "Humanoid", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1802963726,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 2041915372,
    name: "Arctic Bear",
    level: 53,
    comment: "Arctic Bear",
    canFly: false,
    features: ["Beast"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: -1041059859,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1241654227,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 2,
        guid: -1385141321,
        category: "BasicAttack",
        castTime: 1.8
      },
      {
        slot: 3,
        guid: -193432841,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -388636006,
        category: "Special",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: 2049379982,
    name: "Ripperbeast",
    level: 57,
    comment: "Ripperbeast",
    canFly: false,
    features: ["Demon"],
    abilityCount: 7,
    abilities: [
      {
        slot: 0,
        guid: 523087989,
        category: "BasicAttack",
        castTime: 0.7
      },
      {
        slot: 1,
        guid: 1131137826,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 1166812757,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: -1229087512,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: 86533405,
        category: "Special",
        castTime: 0.1,
        behaviorType: "Projectile"
      },
      {
        slot: 5,
        guid: -968445725,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 6,
        guid: -1915922151,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 2054432370,
    name: "Voltatia the Power Master",
    level: 79,
    comment: "Voltatia the Power Master",
    canFly: false,
    features: ["Human", "Humanoid", "Gloomrot", "VBlood"],
    abilityCount: 9,
    abilities: [
      {
        slot: 0,
        guid: -1187406748,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Channeling"
      },
      {
        slot: 1,
        guid: 1623874343,
        category: "BasicAttack",
        castTime: 2.0
      },
      {
        slot: 2,
        guid: -900859351,
        category: "BasicAttack",
        castTime: 1.4
      },
      {
        slot: 3,
        guid: -1308520526,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 4,
        guid: -1220318405,
        category: "Special",
        castTime: 3.0,
        behaviorType: "Travel"
      },
      {
        slot: 5,
        guid: -1717533555,
        category: "Special",
        castTime: 0.3,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: -1733128159,
        category: "Movement",
        castTime: 2.0
      },
      {
        slot: 7,
        guid: 978386280,
        category: "Movement",
        castTime: 0.5,
        behaviorType: "TargetAOE"
      },
      {
        slot: 8,
        guid: -948735477,
        category: "Movement",
        castTime: 2.0
      }
    ]
  },
  {
    prefabGuid: 2055824593,
    name: "Flame Fanatic",
    level: 60,
    comment: "Flame Fanatic",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1238091894,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 14947666,
        category: "Special",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 2057508774,
    name: "Mugger",
    level: 20,
    comment: "Mugger",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: 1281316565,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: 616797239,
        category: "Defensive",
        castTime: 0.5
      },
      {
        slot: 2,
        guid: 2034763818,
        category: "BasicAttack"
      }
    ]
  },
  {
    prefabGuid: 2065149172,
    name: "Militia Guard",
    level: 60,
    comment: "Militia Guard",
    canFly: false,
    features: ["Mechanical", "Militia"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -1298478938,
        category: "Special",
        castTime: 0.8,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 2079933370,
    name: "Primal Blood Soul",
    level: 85,
    comment: "Primal Blood Soul",
    canFly: false,
    features: ["Werewolf", "GateBoss", "GateBoss_Major", "VBlood"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -988264305,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -566065717,
        category: "Special",
        castTime: 1.0,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: 1445822330,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Dash"
      },
      {
        slot: 3,
        guid: -192549213,
        category: "Special",
        castTime: 0.1
      },
      {
        slot: 4,
        guid: -174926399,
        category: "BasicAttack",
        castTime: 0.3
      },
      {
        slot: 5,
        guid: -67893977,
        category: "BasicAttack",
        castTime: 1.2
      }
    ]
  },
  {
    prefabGuid: 2090982759,
    name: "Ink Demon",
    level: 38,
    comment: "Ink Demon",
    canFly: false,
    features: ["Undead", "Humanoid", "Militia"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -117718548,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: 338593632,
        category: "BasicAttack",
        castTime: 0.1
      }
    ]
  },
  {
    prefabGuid: 2097040330,
    name: "Angry Moose",
    level: 16,
    comment: "Angry Moose",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 250913160,
        category: "Movement",
        castTime: 2.0,
        behaviorType: "Dash"
      },
      {
        slot: 1,
        guid: -764767694,
        category: "BasicAttack",
        castTime: 1.8
      }
    ]
  },
  {
    prefabGuid: 2103131615,
    name: "Weaver",
    level: 58,
    comment: "Weaver",
    canFly: false,
    features: ["Beast"],
    abilityCount: 3,
    abilities: [
      {
        slot: 0,
        guid: -1694480301,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -1072715636,
        category: "BasicAttack",
        castTime: 0.4
      },
      {
        slot: 2,
        guid: 464665677,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 2107764370,
    name: "Corrupted Sapling",
    level: 80,
    comment: "Corrupted Sapling",
    canFly: false,
    features: ["Beast"],
    abilityCount: 1,
    abilities: [
      {
        slot: 0,
        guid: -802865471,
        category: "BasicAttack",
        castTime: 1.4,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 2111003460,
    name: "Night Maiden",
    level: 57,
    comment: "Night Maiden",
    canFly: false,
    features: ["Demon"],
    abilityCount: 6,
    abilities: [
      {
        slot: 0,
        guid: -324538848,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 1,
        guid: 1941093851,
        category: "BasicAttack",
        castTime: 1.7,
        behaviorType: "Hover"
      },
      {
        slot: 2,
        guid: -2036638378,
        category: "Movement",
        castTime: 0.3,
        behaviorType: "Travel"
      },
      {
        slot: 3,
        guid: 951198708,
        category: "Special",
        behaviorType: "Projectile"
      },
      {
        slot: 4,
        guid: -1262881470,
        category: "Movement",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 5,
        guid: 175670852,
        category: "BasicAttack",
        castTime: 1.0
      }
    ]
  },
  {
    prefabGuid: 2112911542,
    name: "Trapper",
    level: 20,
    comment: "Trapper",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: 1400073690,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 1,
        guid: -309308308,
        category: "BasicAttack",
        castTime: 0.8,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 2119230788,
    name: "Crawler",
    level: 58,
    comment: "Crawler",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1820645555,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -915534386,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: 792257682,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 3,
        guid: 1693120911,
        category: "BasicAttack",
        castTime: 0.2
      }
    ]
  },
  {
    prefabGuid: 2122229952,
    name: "Rufus the Foreman",
    level: 20,
    comment: "Rufus the Foreman",
    canFly: false,
    features: ["Human", "Humanoid", "Bandit", "VBlood"],
    abilityCount: 13,
    abilities: [
      {
        slot: 0,
        guid: -2010697707,
        category: "BasicAttack",
        castTime: 2.0,
        behaviorType: "Projectile"
      },
      {
        slot: 1,
        guid: 2130985273,
        category: "BasicAttack",
        castTime: 1.0,
        behaviorType: "TargetAOE"
      },
      {
        slot: 2,
        guid: -1773431654,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 3,
        guid: 1914101495,
        category: "Special",
        castTime: 1.5
      },
      {
        slot: 4,
        guid: -892431821,
        category: "Special",
        castTime: 0.5
      },
      {
        slot: 5,
        guid: -1100933071,
        category: "Special",
        castTime: 1.3,
        behaviorType: "Projectile"
      },
      {
        slot: 6,
        guid: -1326540020,
        category: "Movement",
        castTime: 0.4,
        behaviorType: "Projectile"
      },
      {
        slot: 7,
        guid: 1187864883,
        category: "Movement",
        castTime: 2.5,
        behaviorType: "TargetAOE"
      },
      {
        slot: 8,
        guid: -871701576,
        category: "Movement",
        castTime: 3.0
      },
      {
        slot: 9,
        guid: -1696612225,
        category: "Movement",
        castTime: 0.2,
        behaviorType: "Projectile"
      },
      {
        slot: 10,
        guid: -1568783706,
        category: "Unknown",
        castTime: 2.4
      },
      {
        slot: 11,
        guid: 46962343,
        category: "Unknown",
        castTime: 1.4,
        behaviorType: "Projectile"
      },
      {
        slot: 12,
        guid: -1432555386,
        category: "Special",
        castTime: 1.4,
        behaviorType: "Projectile"
      }
    ]
  },
  {
    prefabGuid: 2128996433,
    name: "Footman",
    level: 65,
    comment: "Footman",
    canFly: false,
    features: ["Human", "Humanoid", "Church"],
    abilityCount: 5,
    abilities: [
      {
        slot: 0,
        guid: 979394873,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -153669671,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 2,
        guid: 30220474,
        category: "BasicAttack",
        castTime: 0.6
      },
      {
        slot: 3,
        guid: 680715401,
        category: "Special",
        castTime: 0.6
      },
      {
        slot: 4,
        guid: 530843430,
        category: "Special",
        castTime: 0.9
      }
    ]
  },
  {
    prefabGuid: 2136899683,
    name: "Crawler",
    level: 58,
    comment: "Crawler",
    canFly: false,
    features: ["Beast"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 1820645555,
        category: "BasicAttack",
        castTime: 0.8
      },
      {
        slot: 1,
        guid: -915534386,
        category: "BasicAttack",
        castTime: 1.2,
        behaviorType: "Channeling"
      },
      {
        slot: 2,
        guid: 792257682,
        category: "BasicAttack",
        castTime: 0.5
      },
      {
        slot: 3,
        guid: 1693120911,
        category: "BasicAttack",
        castTime: 0.2
      }
    ]
  },
  {
    prefabGuid: 2142021685,
    name: "Alchemist",
    level: 74,
    comment: "Alchemist",
    canFly: false,
    features: ["Human", "Humanoid"],
    abilityCount: 4,
    abilities: [
      {
        slot: 0,
        guid: 516384057,
        category: "BasicAttack",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      },
      {
        slot: 1,
        guid: -1573201851,
        category: "BasicAttack",
        castTime: 0.1,
        behaviorType: "Dash"
      },
      {
        slot: 2,
        guid: -1641231517,
        category: "BasicAttack",
        castTime: 1.5
      },
      {
        slot: 3,
        guid: 1846642290,
        category: "Special",
        castTime: 0.6,
        behaviorType: "TargetAOE"
      }
    ]
  },
  {
    prefabGuid: 2145471156,
    name: "Frost Wolf",
    level: 50,
    comment: "Frost Wolf",
    canFly: false,
    features: ["Beast"],
    abilityCount: 2,
    abilities: [
      {
        slot: 0,
        guid: -1267641072,
        category: "BasicAttack",
        castTime: 0.9
      },
      {
        slot: 1,
        guid: -83187650,
        category: "Movement",
        castTime: 1.4,
        behaviorType: "Dash"
      }
    ]
  }
];
