// ══ RECIPES.JS — EF Mining Planner ══════════════════════════════
// Auto-généré depuis industry_blueprints.json via convert_to_recipes.mjs
// Pour regénérer : node convert_to_recipes.mjs (dans eve-frontier-tools)

// ─────────────────────────────────────────────────────────────────
// TOUTES LES RECETTES PAR MACHINE
// ─────────────────────────────────────────────────────────────────
const ALL_RECIPES_BY_MACHINE = {
  "Field Printer": {
    "thermal_composites": {
      "name": "Thermal Composites",
      "batch": 14,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Hydrocarbon Residue",
          "qty": 140
        },
        {
          "name": "Silica Grains",
          "qty": 90
        }
      ]
    },
    "heat_exchanger_xs": {
      "name": "Heat Exchanger XS",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 3
        },
        {
          "name": "D1 Fuel",
          "qty": 280
        },
        {
          "name": "Palladium",
          "qty": 2
        }
      ]
    },
    "printed_circuits": {
      "name": "Printed Circuits",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Hydrocarbon Residue",
          "qty": 3
        },
        {
          "name": "Silica Grains",
          "qty": 5
        }
      ]
    },
    "carbon_weave": {
      "name": "Carbon Weave",
      "batch": 14,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Hydrocarbon Residue",
          "qty": 350
        }
      ]
    },
    "reinforced_alloys": {
      "name": "Reinforced Alloys",
      "batch": 8,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Silica Grains",
          "qty": 105
        },
        {
          "name": "Iron-Rich Nodules",
          "qty": 70
        },
        {
          "name": "Palladium",
          "qty": 70
        }
      ]
    },
    "nomad_program_frame": {
      "name": "Nomad Program Frame",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Fossilized Exotronics",
          "qty": 5
        }
      ]
    },
    "base_autocannon_s": {
      "name": "Base Autocannon (S)",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Iron-Rich Nodules",
          "qty": 10
        },
        {
          "name": "Silica Grains",
          "qty": 30
        }
      ]
    },
    "synthetic_mining_lens": {
      "name": "Synthetic Mining Lens",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Silica Grains",
          "qty": 3
        }
      ]
    },
    "small_cutting_laser": {
      "name": "Small Cutting Laser",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Carbon Weave",
          "qty": 3
        }
      ]
    },
    "reflex": {
      "name": "Reflex",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Nomad Program Frame",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 28
        },
        {
          "name": "Hydrocarbon Residue",
          "qty": 40
        }
      ]
    },
    "ac_gyrojet_ammo_1_s": {
      "name": "AC Gyrojet Ammo 1 (S)",
      "batch": 100,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Iron-Rich Nodules",
          "qty": 24
        }
      ]
    },
    "sojourn": {
      "name": "Sojourn",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Hydrocarbon Residue",
          "qty": 10
        }
      ]
    },
    "bulky_armor_plates_ii": {
      "name": "Bulky Armor Plates II",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 4
        }
      ]
    },
    "compressed_coolant": {
      "name": "Compressed Coolant",
      "batch": 10,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "D1 Fuel",
          "qty": 115
        },
        {
          "name": "Iron-Rich Nodules",
          "qty": 1
        }
      ]
    },
    "bulwark_shield_generator_ii": {
      "name": "Bulwark Shield Generator II",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 7
        },
        {
          "name": "Palladium",
          "qty": 150
        }
      ]
    },
    "afterburner_ii": {
      "name": "Afterburner II",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    },
    "hop": {
      "name": "Hop",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 2
        },
        {
          "name": "Printed Circuits",
          "qty": 1
        }
      ]
    },
    "skip": {
      "name": "Skip",
      "batch": 1,
      "machine": "Field Printer",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    }
  },
  "Mini Printer": {
    "thermal_composites": {
      "name": "Thermal Composites",
      "batch": 14,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Silicon Dust",
          "qty": 630
        },
        {
          "name": "Tholin Aggregates",
          "qty": 1260
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 210
        }
      ]
    },
    "printed_circuits": {
      "name": "Printed Circuits",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Silicon Dust",
          "qty": 37
        },
        {
          "name": "Tholin Aggregates",
          "qty": 22
        }
      ]
    },
    "carbon_weave": {
      "name": "Carbon Weave",
      "batch": 14,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Tholin Aggregates",
          "qty": 3150
        }
      ]
    },
    "reinforced_alloys": {
      "name": "Reinforced Alloys",
      "batch": 14,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 1050
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 1050
        }
      ]
    },
    "nomad_program_frame": {
      "name": "Nomad Program Frame",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Fossilized Exotronics",
          "qty": 5
        }
      ]
    },
    "synthetic_mining_lens": {
      "name": "Synthetic Mining Lens",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Silica Grains",
          "qty": 3
        }
      ]
    },
    "ac_gyrojet_ammo_1_s": {
      "name": "AC Gyrojet Ammo 1 (S)",
      "batch": 100,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Iron-Rich Nodules",
          "qty": 24
        }
      ]
    },
    "compressed_coolant": {
      "name": "Compressed Coolant",
      "batch": 10,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "D1 Fuel",
          "qty": 115
        },
        {
          "name": "Iron-Rich Nodules",
          "qty": 1
        }
      ]
    },
    "building_foam": {
      "name": "Building Foam",
      "batch": 10,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 65
        },
        {
          "name": "Carbon Weave",
          "qty": 65
        },
        {
          "name": "Thermal Composites",
          "qty": 65
        }
      ]
    },
    "d2_fuel": {
      "name": "D2 Fuel",
      "batch": 200,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Salt",
          "qty": 1
        },
        {
          "name": "D1 Fuel",
          "qty": 200
        }
      ]
    },
    "echo_chamber": {
      "name": "Echo Chamber",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 120
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 45
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 105
        }
      ]
    },
    "still_knot": {
      "name": "Still Knot",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Salt",
          "qty": 5
        },
        {
          "name": "Feral Echo",
          "qty": 5
        }
      ]
    },
    "radiantium_mining_lens": {
      "name": "Radiantium Mining Lens",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Silicon Dust",
          "qty": 45
        },
        {
          "name": "Radiantium",
          "qty": 1
        }
      ]
    },
    "luminalis_mining_lens": {
      "name": "Luminalis Mining Lens",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Silicon Dust",
          "qty": 45
        },
        {
          "name": "Luminalis",
          "qty": 1
        }
      ]
    },
    "rapid_plasma_ammo_1_s": {
      "name": "Rapid Plasma Ammo 1 (S)",
      "batch": 100,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 400
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 400
        }
      ]
    },
    "coilgun_ammo_1_s": {
      "name": "Coilgun Ammo 1 (S)",
      "batch": 100,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 230
        }
      ]
    },
    "stride_stack": {
      "name": "Stride Stack",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Stack Slice 5DZ",
          "qty": 1
        },
        {
          "name": "Stack Slice 5DK",
          "qty": 1
        },
        {
          "name": "Stack Slice 5C0",
          "qty": 1
        },
        {
          "name": "Stack Slice 31P",
          "qty": 1
        }
      ]
    },
    "carom_stack": {
      "name": "Carom Stack",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Stack Slice 5DW",
          "qty": 1
        },
        {
          "name": "Stack Slice 5DE",
          "qty": 1
        },
        {
          "name": "Stack Slice 5C1",
          "qty": 1
        },
        {
          "name": "Stack Slice 31V",
          "qty": 1
        },
        {
          "name": "Stack Slice 31Q",
          "qty": 1
        },
        {
          "name": "Stack Slice 31F",
          "qty": 1
        }
      ]
    },
    "still_kernel": {
      "name": "Still Kernel",
      "batch": 1,
      "machine": "Mini Printer",
      "inputs": [
        {
          "name": "Brine",
          "qty": 50
        },
        {
          "name": "Tholin Nodules",
          "qty": 5
        }
      ]
    }
  },
  "Refinery": {
    "thermal_composites": {
      "name": "Thermal Composites",
      "batch": 2,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Salvaged Materials",
          "qty": 10
        }
      ]
    },
    "carbon_weave": {
      "name": "Carbon Weave",
      "batch": 1,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Salvaged Materials",
          "qty": 10
        }
      ]
    },
    "reinforced_alloys": {
      "name": "Reinforced Alloys",
      "batch": 6,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Salvaged Materials",
          "qty": 10
        }
      ]
    },
    "salt": {
      "name": "Salt",
      "batch": 1,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Rough Young Crude Matter",
          "qty": 30
        }
      ]
    },
    "d1_fuel": {
      "name": "D1 Fuel",
      "batch": 75,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Water Ice",
          "qty": 275
        }
      ]
    },
    "hydrocarbon_residue": {
      "name": "Hydrocarbon Residue",
      "batch": 20,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Hydrated Sulfide Matrix",
          "qty": 40
        }
      ]
    },
    "silica_grains": {
      "name": "Silica Grains",
      "batch": 10,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Platinum-Palladium Matrix",
          "qty": 40
        }
      ]
    },
    "water_ice": {
      "name": "Water Ice",
      "batch": 200,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Hydrated Sulfide Matrix",
          "qty": 40
        }
      ]
    },
    "iron_rich_nodules": {
      "name": "Iron-Rich Nodules",
      "batch": 40,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Iridosmine Nodules",
          "qty": 40
        }
      ]
    },
    "palladium": {
      "name": "Palladium",
      "batch": 8,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Platinum-Palladium Matrix",
          "qty": 40
        }
      ]
    },
    "troilite_sulfide_grains": {
      "name": "Troilite Sulfide Grains",
      "batch": 20,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Hydrocarbon Residue",
          "qty": 20
        }
      ]
    },
    "tholin_aggregates": {
      "name": "Tholin Aggregates",
      "batch": 126,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Methane Ice Shards",
          "qty": 100
        }
      ]
    },
    "feldspar_crystal_shards": {
      "name": "Feldspar Crystal Shards",
      "batch": 50,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Silica Grains",
          "qty": 20
        }
      ]
    },
    "silicon_dust": {
      "name": "Silicon Dust",
      "batch": 150,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Silica Grains",
          "qty": 20
        }
      ]
    },
    "eu_40_fuel": {
      "name": "EU-40 Fuel",
      "batch": 600,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Eupraxite",
          "qty": 10
        }
      ]
    },
    "platinum_group_veins": {
      "name": "Platinum-Group Veins",
      "batch": 20,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Iron-Rich Nodules",
          "qty": 10
        }
      ]
    },
    "nickel_iron_veins": {
      "name": "Nickel-Iron Veins",
      "batch": 198,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Iron-Rich Nodules",
          "qty": 10
        }
      ]
    },
    "sof_40_fuel": {
      "name": "SOF-40 Fuel",
      "batch": 600,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Sophrogon",
          "qty": 10
        }
      ]
    },
    "aromatic_carbon_weave": {
      "name": "Aromatic Carbon Weave",
      "batch": 8,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Tholin Nodules",
          "qty": 100
        }
      ]
    },
    "kerogen_tar": {
      "name": "Kerogen Tar",
      "batch": 8,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Aromatic Carbon Veins",
          "qty": 100
        }
      ]
    },
    "sophrogon": {
      "name": "Sophrogon",
      "batch": 3,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Fine Old Crude Matter",
          "qty": 30
        }
      ]
    },
    "eupraxite": {
      "name": "Eupraxite",
      "batch": 3,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Fine Young Crude Matter",
          "qty": 30
        }
      ]
    },
    "chitinous_organics": {
      "name": "Chitinous Organics",
      "batch": 1,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Tholin Nodules",
          "qty": 100
        }
      ]
    },
    "brine": {
      "name": "Brine",
      "batch": 26,
      "machine": "Refinery",
      "inputs": [
        {
          "name": "Fine Old Crude Matter",
          "qty": 30
        }
      ]
    }
  },
  "Heavy Refinery": {
    "thermal_composites": {
      "name": "Thermal Composites",
      "batch": 2,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Salvaged Materials",
          "qty": 10
        }
      ]
    },
    "carbon_weave": {
      "name": "Carbon Weave",
      "batch": 1,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Salvaged Materials",
          "qty": 10
        }
      ]
    },
    "reinforced_alloys": {
      "name": "Reinforced Alloys",
      "batch": 6,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Salvaged Materials",
          "qty": 10
        }
      ]
    },
    "salt": {
      "name": "Salt",
      "batch": 1,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Rough Young Crude Matter",
          "qty": 30
        }
      ]
    },
    "d1_fuel": {
      "name": "D1 Fuel",
      "batch": 75,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Water Ice",
          "qty": 275
        }
      ]
    },
    "hydrocarbon_residue": {
      "name": "Hydrocarbon Residue",
      "batch": 60,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Hydrated Sulfide Matrix",
          "qty": 120
        }
      ]
    },
    "silica_grains": {
      "name": "Silica Grains",
      "batch": 30,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Platinum-Palladium Matrix",
          "qty": 120
        }
      ]
    },
    "water_ice": {
      "name": "Water Ice",
      "batch": 600,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Hydrated Sulfide Matrix",
          "qty": 120
        }
      ]
    },
    "iron_rich_nodules": {
      "name": "Iron-Rich Nodules",
      "batch": 120,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Iridosmine Nodules",
          "qty": 120
        }
      ]
    },
    "palladium": {
      "name": "Palladium",
      "batch": 24,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Platinum-Palladium Matrix",
          "qty": 120
        }
      ]
    },
    "troilite_sulfide_grains": {
      "name": "Troilite Sulfide Grains",
      "batch": 60,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Hydrocarbon Residue",
          "qty": 60
        }
      ]
    },
    "tholin_aggregates": {
      "name": "Tholin Aggregates",
      "batch": 540,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Hydrocarbon Residue",
          "qty": 60
        }
      ]
    },
    "feldspar_crystal_shards": {
      "name": "Feldspar Crystal Shards",
      "batch": 150,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Silica Grains",
          "qty": 60
        }
      ]
    },
    "silicon_dust": {
      "name": "Silicon Dust",
      "batch": 450,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Silica Grains",
          "qty": 60
        }
      ]
    },
    "eu_40_fuel": {
      "name": "EU-40 Fuel",
      "batch": 600,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Eupraxite",
          "qty": 10
        }
      ]
    },
    "platinum_group_veins": {
      "name": "Platinum-Group Veins",
      "batch": 60,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Iron-Rich Nodules",
          "qty": 60
        }
      ]
    },
    "nickel_iron_veins": {
      "name": "Nickel-Iron Veins",
      "batch": 594,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Iron-Rich Nodules",
          "qty": 60
        }
      ]
    },
    "sof_40_fuel": {
      "name": "SOF-40 Fuel",
      "batch": 600,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Sophrogon",
          "qty": 10
        }
      ]
    },
    "aromatic_carbon_weave": {
      "name": "Aromatic Carbon Weave",
      "batch": 8,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Tholin Nodules",
          "qty": 100
        }
      ]
    },
    "kerogen_tar": {
      "name": "Kerogen Tar",
      "batch": 8,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Aromatic Carbon Veins",
          "qty": 100
        }
      ]
    },
    "sophrogon": {
      "name": "Sophrogon",
      "batch": 3,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Fine Old Crude Matter",
          "qty": 30
        }
      ]
    },
    "eupraxite": {
      "name": "Eupraxite",
      "batch": 3,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Fine Young Crude Matter",
          "qty": 30
        }
      ]
    },
    "chitinous_organics": {
      "name": "Chitinous Organics",
      "batch": 1,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Tholin Nodules",
          "qty": 100
        }
      ]
    },
    "brine": {
      "name": "Brine",
      "batch": 26,
      "machine": "Heavy Refinery",
      "inputs": [
        {
          "name": "Fine Old Crude Matter",
          "qty": 30
        }
      ]
    }
  },
  "Assembler": {
    "heat_exchanger_xs": {
      "name": "Heat Exchanger XS",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 3
        },
        {
          "name": "D1 Fuel",
          "qty": 280
        },
        {
          "name": "Palladium",
          "qty": 2
        }
      ]
    },
    "base_autocannon_s": {
      "name": "Base Autocannon (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Iron-Rich Nodules",
          "qty": 10
        },
        {
          "name": "Silica Grains",
          "qty": 30
        }
      ]
    },
    "small_cutting_laser": {
      "name": "Small Cutting Laser",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Carbon Weave",
          "qty": 3
        }
      ]
    },
    "sojourn": {
      "name": "Sojourn",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Hydrocarbon Residue",
          "qty": 10
        }
      ]
    },
    "bulky_armor_plates_ii": {
      "name": "Bulky Armor Plates II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 4
        }
      ]
    },
    "bulwark_shield_generator_ii": {
      "name": "Bulwark Shield Generator II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 7
        },
        {
          "name": "Palladium",
          "qty": 150
        }
      ]
    },
    "heat_exchanger_s": {
      "name": "Heat Exchanger S",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 35
        },
        {
          "name": "Reinforced Alloys",
          "qty": 6
        },
        {
          "name": "D1 Fuel",
          "qty": 560
        },
        {
          "name": "Palladium",
          "qty": 35
        }
      ]
    },
    "cryogenic_ejector_s": {
      "name": "Cryogenic Ejector S",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 35
        },
        {
          "name": "Reinforced Alloys",
          "qty": 6
        },
        {
          "name": "D1 Fuel",
          "qty": 560
        },
        {
          "name": "Palladium",
          "qty": 35
        }
      ]
    },
    "celerity_cd03": {
      "name": "Celerity CD03",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 16
        },
        {
          "name": "Reinforced Alloys",
          "qty": 16
        },
        {
          "name": "Thermal Composites",
          "qty": 32
        },
        {
          "name": "Still Kernel",
          "qty": 2
        }
      ]
    },
    "base_coilgun_m": {
      "name": "Base Coilgun (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 120
        },
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Palladium",
          "qty": 120
        }
      ]
    },
    "base_howitzer_m": {
      "name": "Base Howitzer (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 150
        }
      ]
    },
    "xoru_7": {
      "name": "Xoru 7",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 8
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        }
      ]
    },
    "rapid_plasma_m": {
      "name": "Rapid Plasma (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 180
        }
      ]
    },
    "tier_2_coilgun_m": {
      "name": "Tier 2 Coilgun (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 70
        },
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Palladium",
          "qty": 70
        }
      ]
    },
    "xoru_9": {
      "name": "Xoru 9",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 8
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        }
      ]
    },
    "tier_2_howitzer_m": {
      "name": "Tier 2 Howitzer (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 250
        }
      ]
    },
    "tier_2_rapid_plasma_m": {
      "name": "Tier 2 Rapid Plasma (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 300
        }
      ]
    },
    "tier_3_coilgun_m": {
      "name": "Tier 3 Coilgun (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 440
        },
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        }
      ]
    },
    "xoru_s": {
      "name": "Xoru S",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 10
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        }
      ]
    },
    "tier_3_howitzer_m": {
      "name": "Tier 3 Howitzer (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 340
        }
      ]
    },
    "tier_3_rapid_plasma_m": {
      "name": "Tier 3 Rapid Plasma (M)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 420
        }
      ]
    },
    "bulky_armor_plates_v": {
      "name": "Bulky Armor Plates V",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 24
        }
      ]
    },
    "coated_armor_plates_iv": {
      "name": "Coated Armor Plates IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 16
        }
      ]
    },
    "attuned_shield_generator_iv": {
      "name": "Attuned Shield Generator IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 31
        },
        {
          "name": "Carbon Weave",
          "qty": 62
        }
      ]
    },
    "bulwark_shield_generator_iv": {
      "name": "Bulwark Shield Generator IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 31
        },
        {
          "name": "Carbon Weave",
          "qty": 60
        },
        {
          "name": "Palladium",
          "qty": 600
        }
      ]
    },
    "reinforced_shield_generator_iv": {
      "name": "Reinforced Shield Generator IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 31
        },
        {
          "name": "Carbon Weave",
          "qty": 62
        }
      ]
    },
    "adaptive_nanitic_armor_weave_iv": {
      "name": "Adaptive Nanitic Armor Weave IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 12
        },
        {
          "name": "Still Kernel",
          "qty": 6
        }
      ]
    },
    "systematic_armor_restorer_iv": {
      "name": "Systematic Armor Restorer IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 22
        },
        {
          "name": "Reinforced Alloys",
          "qty": 22
        },
        {
          "name": "Still Kernel",
          "qty": 4
        }
      ]
    },
    "shield_restorer_iv": {
      "name": "Shield Restorer IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 13
        },
        {
          "name": "Printed Circuits",
          "qty": 17
        },
        {
          "name": "Carbon Weave",
          "qty": 17
        },
        {
          "name": "Still Kernel",
          "qty": 3
        }
      ]
    },
    "medium_cutting_laser": {
      "name": "Medium Cutting Laser",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 5
        },
        {
          "name": "Carbon Weave",
          "qty": 10
        }
      ]
    },
    "large_cutting_laser": {
      "name": "Large Cutting Laser",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 7
        },
        {
          "name": "Carbon Weave",
          "qty": 15
        }
      ]
    },
    "afterburner_iv": {
      "name": "Afterburner IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 4
        },
        {
          "name": "Thermal Composites",
          "qty": 4
        },
        {
          "name": "Still Kernel",
          "qty": 3
        }
      ]
    },
    "nimble_armor_plates_iv": {
      "name": "Nimble Armor Plates IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 8
        },
        {
          "name": "Carbon Weave",
          "qty": 4
        }
      ]
    },
    "reactive_armor_plates_iv": {
      "name": "Reactive Armor Plates IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 11
        },
        {
          "name": "Thermal Composites",
          "qty": 11
        }
      ]
    },
    "nimble_armor_plates_ii": {
      "name": "Nimble Armor Plates II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Carbon Weave",
          "qty": 1
        }
      ]
    },
    "celerity_cd02": {
      "name": "Celerity CD02",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 8
        },
        {
          "name": "Reinforced Alloys",
          "qty": 8
        },
        {
          "name": "Thermal Composites",
          "qty": 16
        },
        {
          "name": "Still Kernel",
          "qty": 1
        }
      ]
    },
    "cargo_grid_ii": {
      "name": "Cargo Grid II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 7
        }
      ]
    },
    "velocity_cd82": {
      "name": "Velocity CD82",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 8
        },
        {
          "name": "Reinforced Alloys",
          "qty": 8
        },
        {
          "name": "Thermal Composites",
          "qty": 16
        },
        {
          "name": "Still Kernel",
          "qty": 2
        }
      ]
    },
    "tempo_cd42": {
      "name": "Tempo CD42",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 8
        },
        {
          "name": "Reinforced Alloys",
          "qty": 8
        },
        {
          "name": "Thermal Composites",
          "qty": 16
        },
        {
          "name": "Still Kernel",
          "qty": 1
        }
      ]
    },
    "tuho_7": {
      "name": "Tuho 7",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        }
      ]
    },
    "tuho_9": {
      "name": "Tuho 9",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        }
      ]
    },
    "tuho_s": {
      "name": "Tuho S",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 5
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        }
      ]
    },
    "base_coilgun_s": {
      "name": "Base Coilgun (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 60
        },
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Palladium",
          "qty": 60
        }
      ]
    },
    "tier_2_coilgun_s": {
      "name": "Tier 2 Coilgun (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 140
        },
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        }
      ]
    },
    "tier_3_coilgun_s": {
      "name": "Tier 3 Coilgun (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 110
        },
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Palladium",
          "qty": 110
        }
      ]
    },
    "tier_2_autocannon_s": {
      "name": "Tier 2 Autocannon (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 125
        }
      ]
    },
    "tier_3_autocannon_s": {
      "name": "Tier 3 Autocannon (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 170
        }
      ]
    },
    "base_rapid_plasma_s": {
      "name": "Base Rapid Plasma (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 90
        }
      ]
    },
    "tier_2_rapid_plasma_s": {
      "name": "Tier 2 Rapid Plasma (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 150
        }
      ]
    },
    "tier_3_rapid_plasma_s": {
      "name": "Tier 3 Rapid Plasma (S)",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 210
        }
      ]
    },
    "crude_extractor": {
      "name": "Crude Extractor",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 3
        },
        {
          "name": "Carbon Weave",
          "qty": 5
        }
      ]
    },
    "afterburner_ii": {
      "name": "Afterburner II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    },
    "afterburner_iii": {
      "name": "Afterburner III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 1
        },
        {
          "name": "Still Kernel",
          "qty": 1
        }
      ]
    },
    "systematic_armor_restorer_ii": {
      "name": "Systematic Armor Restorer II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        }
      ]
    },
    "systematic_armor_restorer_iii": {
      "name": "Systematic Armor Restorer III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 1
        },
        {
          "name": "Still Kernel",
          "qty": 1
        }
      ]
    },
    "adaptive_nanitic_armor_weave_ii": {
      "name": "Adaptive Nanitic Armor Weave II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    },
    "adaptive_nanitic_armor_weave_iii": {
      "name": "Adaptive Nanitic Armor Weave III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 1
        },
        {
          "name": "Still Kernel",
          "qty": 1
        }
      ]
    },
    "thermal_electro_nanitic_brace_ii": {
      "name": "Thermal-electro Nanitic Brace II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 4
        }
      ]
    },
    "thermal_electro_nanitic_brace_iii": {
      "name": "Thermal-electro Nanitic Brace III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 9
        }
      ]
    },
    "thermal_electro_nanitic_brace_iv": {
      "name": "Thermal-electro Nanitic Brace IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 20
        }
      ]
    },
    "explonetic_electro_nanitic_brace_ii": {
      "name": "Explonetic-electro Nanitic Brace II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    },
    "explonetic_electro_nanitic_brace_iii": {
      "name": "Explonetic-electro Nanitic Brace III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 4
        }
      ]
    },
    "explonetic_electro_nanitic_brace_iv": {
      "name": "Explonetic-electro Nanitic Brace IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 11
        }
      ]
    },
    "explo_electro_nanitic_brace_ii": {
      "name": "Explo-electro Nanitic Brace II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    },
    "explo_electro_nanitic_brace_iii": {
      "name": "Explo-electro Nanitic Brace III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 3
        }
      ]
    },
    "hull_repairer": {
      "name": "Hull Repairer",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        }
      ]
    },
    "explo_electro_nanitic_brace_iv": {
      "name": "Explo-electro Nanitic Brace IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 8
        }
      ]
    },
    "thermalnetic_nanitic_brace_ii": {
      "name": "Thermalnetic Nanitic Brace II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 4
        }
      ]
    },
    "thermalnetic_nanitic_brace_iii": {
      "name": "Thermalnetic Nanitic Brace III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Thermal Composites",
          "qty": 12
        }
      ]
    },
    "thermalnetic_nanitic_brace_iv": {
      "name": "Thermalnetic Nanitic Brace IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Thermal Composites",
          "qty": 24
        }
      ]
    },
    "warp_entangler_ii": {
      "name": "Warp Entangler II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Carbon Weave",
          "qty": 3
        }
      ]
    },
    "warp_entangler_iii": {
      "name": "Warp Entangler III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 3
        },
        {
          "name": "Carbon Weave",
          "qty": 3
        }
      ]
    },
    "warp_entangler_iv": {
      "name": "Warp Entangler IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 3
        },
        {
          "name": "Reinforced Alloys",
          "qty": 3
        },
        {
          "name": "Carbon Weave",
          "qty": 4
        }
      ]
    },
    "warp_entangler_v": {
      "name": "Warp Entangler V",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 3
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 4
        }
      ]
    },
    "warp_entangler_vi": {
      "name": "Warp Entangler VI",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 5
        }
      ]
    },
    "stasis_net_ii": {
      "name": "Stasis Net II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 4
        }
      ]
    },
    "stasis_net_iii": {
      "name": "Stasis Net III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 3
        },
        {
          "name": "Thermal Composites",
          "qty": 4
        }
      ]
    },
    "stasis_net_iv": {
      "name": "Stasis Net IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 3
        },
        {
          "name": "Reinforced Alloys",
          "qty": 3
        },
        {
          "name": "Thermal Composites",
          "qty": 5
        }
      ]
    },
    "stasis_net_v": {
      "name": "Stasis Net V",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 3
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Thermal Composites",
          "qty": 5
        }
      ]
    },
    "stasis_net_vi": {
      "name": "Stasis Net VI",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Thermal Composites",
          "qty": 6
        }
      ]
    },
    "cargo_grid_iii": {
      "name": "Cargo Grid III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 7
        },
        {
          "name": "Carbon Weave",
          "qty": 13
        }
      ]
    },
    "cargo_grid_iv": {
      "name": "Cargo Grid IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 14
        },
        {
          "name": "Carbon Weave",
          "qty": 26
        }
      ]
    },
    "cargo_grid_v": {
      "name": "Cargo Grid V",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 28
        },
        {
          "name": "Carbon Weave",
          "qty": 52
        }
      ]
    },
    "cargo_grid_vi": {
      "name": "Cargo Grid VI",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 56
        },
        {
          "name": "Carbon Weave",
          "qty": 104
        }
      ]
    },
    "bulwark_shield_generator_iii": {
      "name": "Bulwark Shield Generator III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 12
        },
        {
          "name": "Carbon Weave",
          "qty": 21
        },
        {
          "name": "Palladium",
          "qty": 450
        }
      ]
    },
    "attuned_shield_generator_ii": {
      "name": "Attuned Shield Generator II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 8
        }
      ]
    },
    "attuned_shield_generator_iii": {
      "name": "Attuned Shield Generator III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 12
        },
        {
          "name": "Carbon Weave",
          "qty": 24
        }
      ]
    },
    "reinforced_shield_generator_ii": {
      "name": "Reinforced Shield Generator II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 8
        }
      ]
    },
    "reinforced_shield_generator_iii": {
      "name": "Reinforced Shield Generator III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 12
        },
        {
          "name": "Carbon Weave",
          "qty": 24
        }
      ]
    },
    "shield_restorer_ii": {
      "name": "Shield Restorer II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 13
        },
        {
          "name": "Printed Circuits",
          "qty": 17
        },
        {
          "name": "Carbon Weave",
          "qty": 17
        }
      ]
    },
    "shield_restorer_iii": {
      "name": "Shield Restorer III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 15
        },
        {
          "name": "Printed Circuits",
          "qty": 20
        },
        {
          "name": "Carbon Weave",
          "qty": 19
        }
      ]
    },
    "em_field_array_ii": {
      "name": "EM Field Array II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 12
        }
      ]
    },
    "em_field_array_iii": {
      "name": "EM Field Array III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 16
        }
      ]
    },
    "em_field_array_iv": {
      "name": "EM Field Array IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 19
        }
      ]
    },
    "thermal_field_array_ii": {
      "name": "Thermal Field Array II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 12
        }
      ]
    },
    "thermal_field_array_iii": {
      "name": "Thermal Field Array III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 16
        }
      ]
    },
    "thermal_field_array_iv": {
      "name": "Thermal Field Array IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 19
        }
      ]
    },
    "thermal_field_array_v": {
      "name": "Thermal Field Array V",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 22
        }
      ]
    },
    "explosive_field_array_ii": {
      "name": "Explosive Field Array II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 6
        },
        {
          "name": "Thermal Composites",
          "qty": 6
        }
      ]
    },
    "explosive_field_array_iii": {
      "name": "Explosive Field Array III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 7
        },
        {
          "name": "Thermal Composites",
          "qty": 7
        }
      ]
    },
    "explosive_field_array_iv": {
      "name": "Explosive Field Array IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 9
        },
        {
          "name": "Thermal Composites",
          "qty": 8
        }
      ]
    },
    "kinetic_field_array_ii": {
      "name": "Kinetic Field Array II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 8
        }
      ]
    },
    "kinetic_field_array_iii": {
      "name": "Kinetic Field Array III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 10
        }
      ]
    },
    "kinetic_field_array_iv": {
      "name": "Kinetic Field Array IV",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 12
        }
      ]
    },
    "bulky_armor_plates_iii": {
      "name": "Bulky Armor Plates III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 7
        }
      ]
    },
    "coated_armor_plates_ii": {
      "name": "Coated Armor Plates II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 4
        }
      ]
    },
    "coated_armor_plates_iii": {
      "name": "Coated Armor Plates III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 7
        }
      ]
    },
    "reactive_armor_plates_ii": {
      "name": "Reactive Armor Plates II",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 3
        },
        {
          "name": "Thermal Composites",
          "qty": 3
        }
      ]
    },
    "reactive_armor_plates_iii": {
      "name": "Reactive Armor Plates III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 6
        },
        {
          "name": "Thermal Composites",
          "qty": 6
        }
      ]
    },
    "nimble_armor_plates_iii": {
      "name": "Nimble Armor Plates III",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Carbon Weave",
          "qty": 2
        }
      ]
    },
    "embark": {
      "name": "Embark",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 2
        },
        {
          "name": "Reinforced Alloys",
          "qty": 2
        },
        {
          "name": "Thermal Composites",
          "qty": 4
        }
      ]
    },
    "velocity_cd81": {
      "name": "Velocity CD81",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Thermal Composites",
          "qty": 8
        }
      ]
    },
    "tempo_cd41": {
      "name": "Tempo CD41",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Thermal Composites",
          "qty": 8
        }
      ]
    },
    "celerity_cd01": {
      "name": "Celerity CD01",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Thermal Composites",
          "qty": 8
        }
      ]
    },
    "hop": {
      "name": "Hop",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 2
        },
        {
          "name": "Printed Circuits",
          "qty": 1
        }
      ]
    },
    "lunge": {
      "name": "Lunge",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 8
        },
        {
          "name": "Printed Circuits",
          "qty": 16
        },
        {
          "name": "Reinforced Alloys",
          "qty": 16
        }
      ]
    },
    "leap": {
      "name": "Leap",
      "batch": 1,
      "machine": "Assembler",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 4
        },
        {
          "name": "Printed Circuits",
          "qty": 4
        },
        {
          "name": "Reinforced Alloys",
          "qty": 4
        }
      ]
    }
  },
  "Field Refinery": {
    "reinforced_alloys": {
      "name": "Reinforced Alloys",
      "batch": 1,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Salvaged Materials",
          "qty": 3
        }
      ]
    },
    "salt": {
      "name": "Salt",
      "batch": 1,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "D2 Fuel",
          "qty": 200
        }
      ]
    },
    "d1_fuel": {
      "name": "D1 Fuel",
      "batch": 75,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Water Ice",
          "qty": 275
        }
      ]
    },
    "hydrocarbon_residue": {
      "name": "Hydrocarbon Residue",
      "batch": 10,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Hydrated Sulfide Matrix",
          "qty": 20
        }
      ]
    },
    "silica_grains": {
      "name": "Silica Grains",
      "batch": 8,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Platinum-Palladium Matrix",
          "qty": 20
        }
      ]
    },
    "water_ice": {
      "name": "Water Ice",
      "batch": 7,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Mummified Clone",
          "qty": 1
        }
      ]
    },
    "iron_rich_nodules": {
      "name": "Iron-Rich Nodules",
      "batch": 15,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Platinum-Palladium Matrix",
          "qty": 20
        }
      ]
    },
    "palladium": {
      "name": "Palladium",
      "batch": 4,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Platinum-Palladium Matrix",
          "qty": 20
        }
      ]
    },
    "sophrogon": {
      "name": "Sophrogon",
      "batch": 3,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Fine Old Crude Matter",
          "qty": 30
        }
      ]
    },
    "eupraxite": {
      "name": "Eupraxite",
      "batch": 3,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Fine Young Crude Matter",
          "qty": 30
        }
      ]
    },
    "brine": {
      "name": "Brine",
      "batch": 26,
      "machine": "Field Refinery",
      "inputs": [
        {
          "name": "Fine Old Crude Matter",
          "qty": 30
        }
      ]
    }
  },
  "Mini Berth": {
    "reflex": {
      "name": "Reflex",
      "batch": 1,
      "machine": "Mini Berth",
      "inputs": [
        {
          "name": "Nomad Program Frame",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 28
        },
        {
          "name": "Hydrocarbon Residue",
          "qty": 40
        }
      ]
    },
    "reiver": {
      "name": "Reiver",
      "batch": 1,
      "machine": "Mini Berth",
      "inputs": [
        {
          "name": "Nomad Program Frame",
          "qty": 2
        },
        {
          "name": "Carbon Weave",
          "qty": 33
        },
        {
          "name": "Thermal Composites",
          "qty": 33
        },
        {
          "name": "Reinforced Alloys",
          "qty": 78
        }
      ]
    },
    "recurve": {
      "name": "Recurve",
      "batch": 1,
      "machine": "Mini Berth",
      "inputs": [
        {
          "name": "Nomad Program Frame",
          "qty": 2
        },
        {
          "name": "Carbon Weave",
          "qty": 25
        },
        {
          "name": "Thermal Composites",
          "qty": 25
        },
        {
          "name": "Reinforced Alloys",
          "qty": 45
        },
        {
          "name": "Still Kernel",
          "qty": 2
        }
      ]
    },
    "wend": {
      "name": "Wend",
      "batch": 1,
      "machine": "Mini Berth",
      "inputs": [
        {
          "name": "Nomad Program Frame",
          "qty": 1
        },
        {
          "name": "Reinforced Alloys",
          "qty": 34
        },
        {
          "name": "Carbon Weave",
          "qty": 17
        },
        {
          "name": "Thermal Composites",
          "qty": 17
        }
      ]
    },
    "stride": {
      "name": "Stride",
      "batch": 1,
      "machine": "Mini Berth",
      "inputs": [
        {
          "name": "Stride Stack",
          "qty": 1
        },
        {
          "name": "Nomad Program Frame",
          "qty": 2
        },
        {
          "name": "Carbon Weave",
          "qty": 48
        },
        {
          "name": "Thermal Composites",
          "qty": 48
        },
        {
          "name": "Reinforced Alloys",
          "qty": 96
        }
      ]
    },
    "carom": {
      "name": "Carom",
      "batch": 1,
      "machine": "Mini Berth",
      "inputs": [
        {
          "name": "Carom Stack",
          "qty": 1
        },
        {
          "name": "Nomad Program Frame",
          "qty": 2
        },
        {
          "name": "Carbon Weave",
          "qty": 44
        },
        {
          "name": "Thermal Composites",
          "qty": 44
        },
        {
          "name": "Reinforced Alloys",
          "qty": 88
        }
      ]
    }
  },
  "Printer": {
    "echo_chamber": {
      "name": "Echo Chamber",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 120
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 45
        },
        {
          "name": "Feldspar Crystal Shards",
          "qty": 105
        }
      ]
    },
    "still_knot": {
      "name": "Still Knot",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Salt",
          "qty": 5
        },
        {
          "name": "Feral Echo",
          "qty": 5
        }
      ]
    },
    "sof_80_fuel": {
      "name": "SOF-80 Fuel",
      "batch": 600,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Catalytic Dust",
          "qty": 44
        },
        {
          "name": "SOF-40 Fuel",
          "qty": 600
        }
      ]
    },
    "em_disintegrator_charge_m": {
      "name": "EM Disintegrator Charge (M)",
      "batch": 100,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 20
        },
        {
          "name": "Platinum-Group Veins",
          "qty": 60
        }
      ]
    },
    "batched_thermal_composites": {
      "name": "Batched Thermal Composites",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Thermal Composites",
          "qty": 10
        }
      ]
    },
    "batched_printed_circuits": {
      "name": "Batched Printed Circuits",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 10
        }
      ]
    },
    "batched_carbon_weave": {
      "name": "Batched Carbon Weave",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Carbon Weave",
          "qty": 10
        }
      ]
    },
    "batched_reinforced_alloys": {
      "name": "Batched Reinforced Alloys",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 10
        }
      ]
    },
    "em_nanite_sequencer": {
      "name": "EM Nanite Sequencer",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Carbon Weave",
          "qty": 1
        }
      ]
    },
    "thermal_nanite_sequencer": {
      "name": "Thermal Nanite Sequencer",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    },
    "apocalypse_protocol_frame": {
      "name": "Apocalypse Protocol Frame",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Still Knot",
          "qty": 1
        },
        {
          "name": "Echo Chamber",
          "qty": 1
        },
        {
          "name": "Kerogen Tar",
          "qty": 128
        }
      ]
    },
    "bastion_program_frame": {
      "name": "Bastion Program Frame",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Still Knot",
          "qty": 1
        },
        {
          "name": "Echo Chamber",
          "qty": 1
        },
        {
          "name": "Kerogen Tar",
          "qty": 38
        }
      ]
    },
    "kinetic_nanite_sequencer": {
      "name": "Kinetic Nanite Sequencer",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    },
    "explosive_nanite_sequencer": {
      "name": "Explosive Nanite Sequencer",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Printed Circuits",
          "qty": 1
        },
        {
          "name": "Thermal Composites",
          "qty": 1
        }
      ]
    },
    "archangel_protocol_frame": {
      "name": "Archangel Protocol Frame",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Still Knot",
          "qty": 1
        },
        {
          "name": "Echo Chamber",
          "qty": 1
        },
        {
          "name": "Kerogen Tar",
          "qty": 38
        }
      ]
    },
    "exterminata_protocol_frame": {
      "name": "Exterminata Protocol Frame",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Still Knot",
          "qty": 1
        },
        {
          "name": "Echo Chamber",
          "qty": 1
        },
        {
          "name": "Kerogen Tar",
          "qty": 38
        }
      ]
    },
    "gravionite_mining_lens": {
      "name": "Gravionite Mining Lens",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Silicon Dust",
          "qty": 50
        },
        {
          "name": "Gravionite",
          "qty": 1
        }
      ]
    },
    "eclipsite_mining_lens": {
      "name": "Eclipsite Mining Lens",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Silicon Dust",
          "qty": 50
        },
        {
          "name": "Eclipsite",
          "qty": 1
        }
      ]
    },
    "ac_gyrojet_ammo_3_s": {
      "name": "AC Gyrojet Ammo 3 (S)",
      "batch": 100,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 230
        }
      ]
    },
    "rapid_plasma_ammo_2_s": {
      "name": "Rapid Plasma Ammo 2 (S)",
      "batch": 100,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Platinum-Group Veins",
          "qty": 400
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 400
        }
      ]
    },
    "ac_gyrojet_ammo_2_s": {
      "name": "AC Gyrojet Ammo 2 (S)",
      "batch": 100,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 230
        }
      ]
    },
    "em_disintegrator_charge_s": {
      "name": "EM Disintegrator Charge (S)",
      "batch": 100,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 3
        },
        {
          "name": "Platinum-Group Veins",
          "qty": 10
        }
      ]
    },
    "still_kernel": {
      "name": "Still Kernel",
      "batch": 1,
      "machine": "Printer",
      "inputs": [
        {
          "name": "Brine",
          "qty": 50
        },
        {
          "name": "Tholin Nodules",
          "qty": 5
        }
      ]
    }
  },
  "Heavy Printer": {
    "em_disintegrator_charge_m": {
      "name": "EM Disintegrator Charge (M)",
      "batch": 100,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Nickel-Iron Veins",
          "qty": 6
        },
        {
          "name": "Platinum-Group Veins",
          "qty": 20
        }
      ]
    },
    "packaged_thermal_composites": {
      "name": "Packaged Thermal Composites",
      "batch": 1,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Batched Thermal Composites",
          "qty": 10
        }
      ]
    },
    "eu_90_fuel": {
      "name": "EU-90 Fuel",
      "batch": 600,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "EU-40 Fuel",
          "qty": 600
        },
        {
          "name": "Catalytic Dust",
          "qty": 60
        }
      ]
    },
    "packaged_printed_circuits": {
      "name": "Packaged Printed Circuits",
      "batch": 1,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Batched Printed Circuits",
          "qty": 10
        }
      ]
    },
    "packaged_carbon_weave": {
      "name": "Packaged Carbon Weave",
      "batch": 1,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Batched Carbon Weave",
          "qty": 10
        }
      ]
    },
    "packaged_reinforced_alloys": {
      "name": "Packaged Reinforced Alloys",
      "batch": 1,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Batched Reinforced Alloys",
          "qty": 10
        }
      ]
    },
    "equilibrium_program_frame": {
      "name": "Equilibrium Program Frame",
      "batch": 1,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Still Knot",
          "qty": 1
        },
        {
          "name": "Echo Chamber",
          "qty": 1
        },
        {
          "name": "Aromatic Carbon Weave",
          "qty": 1347
        }
      ]
    },
    "coilgun_ammo_1_m": {
      "name": "Coilgun Ammo 1 (M)",
      "batch": 100,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 7
        }
      ]
    },
    "rapid_plasma_ammo_1_m": {
      "name": "Rapid Plasma Ammo 1 (M)",
      "batch": 100,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 4
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 800
        },
        {
          "name": "Nickel-Iron Veins",
          "qty": 1000
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 400
        },
        {
          "name": "Palladium",
          "qty": 700
        },
        {
          "name": "Hydrated Sulfide Matrix",
          "qty": 100
        }
      ]
    },
    "howitzer_ammo_1_m": {
      "name": "Howitzer Ammo 1 (M)",
      "batch": 100,
      "machine": "Heavy Printer",
      "inputs": [
        {
          "name": "Reinforced Alloys",
          "qty": 6
        },
        {
          "name": "Troilite Sulfide Grains",
          "qty": 400
        }
      ]
    }
  },
  "Berth": {
    "lorha": {
      "name": "LORHA",
      "batch": 1,
      "machine": "Berth",
      "inputs": [
        {
          "name": "Bastion Program Frame",
          "qty": 1
        },
        {
          "name": "Batched Reinforced Alloys",
          "qty": 58
        },
        {
          "name": "Batched Carbon Weave",
          "qty": 29
        },
        {
          "name": "Batched Thermal Composites",
          "qty": 29
        }
      ]
    },
    "mcf": {
      "name": "MCF",
      "batch": 1,
      "machine": "Berth",
      "inputs": [
        {
          "name": "Exterminata Protocol Frame",
          "qty": 1
        },
        {
          "name": "Batched Reinforced Alloys",
          "qty": 88
        },
        {
          "name": "Batched Carbon Weave",
          "qty": 48
        },
        {
          "name": "Batched Thermal Composites",
          "qty": 48
        },
        {
          "name": "Still Kernel",
          "qty": 3
        }
      ]
    },
    "tades": {
      "name": "TADES",
      "batch": 1,
      "machine": "Berth",
      "inputs": [
        {
          "name": "Apocalypse Protocol Frame",
          "qty": 1
        },
        {
          "name": "Batched Reinforced Alloys",
          "qty": 124
        },
        {
          "name": "Batched Carbon Weave",
          "qty": 72
        },
        {
          "name": "Batched Thermal Composites",
          "qty": 72
        },
        {
          "name": "Still Kernel",
          "qty": 4
        }
      ]
    },
    "haf": {
      "name": "HAF",
      "batch": 1,
      "machine": "Berth",
      "inputs": [
        {
          "name": "Exterminata Protocol Frame",
          "qty": 1
        },
        {
          "name": "Batched Reinforced Alloys",
          "qty": 160
        },
        {
          "name": "Batched Carbon Weave",
          "qty": 74
        },
        {
          "name": "Batched Thermal Composites",
          "qty": 74
        }
      ]
    },
    "usv": {
      "name": "USV",
      "batch": 1,
      "machine": "Berth",
      "inputs": [
        {
          "name": "Archangel Protocol Frame",
          "qty": 1
        },
        {
          "name": "Batched Reinforced Alloys",
          "qty": 56
        },
        {
          "name": "Batched Carbon Weave",
          "qty": 28
        },
        {
          "name": "Batched Thermal Composites",
          "qty": 28
        }
      ]
    },
    "lai": {
      "name": "LAI",
      "batch": 1,
      "machine": "Berth",
      "inputs": [
        {
          "name": "Exterminata Protocol Frame",
          "qty": 1
        },
        {
          "name": "Batched Reinforced Alloys",
          "qty": 80
        },
        {
          "name": "Batched Carbon Weave",
          "qty": 70
        },
        {
          "name": "Batched Thermal Composites",
          "qty": 70
        },
        {
          "name": "Still Kernel",
          "qty": 4
        }
      ]
    }
  },
  "Heavy Berth": {
    "maul": {
      "name": "MAUL",
      "batch": 1,
      "machine": "Heavy Berth",
      "inputs": [
        {
          "name": "Apocalypse Protocol Frame",
          "qty": 1
        },
        {
          "name": "Packaged Reinforced Alloys",
          "qty": 46
        },
        {
          "name": "Packaged Carbon Weave",
          "qty": 30
        },
        {
          "name": "Packaged Thermal Composites",
          "qty": 30
        },
        {
          "name": "Echo Chamber",
          "qty": 7
        },
        {
          "name": "Still Knot",
          "qty": 2
        }
      ]
    },
    "chumaq": {
      "name": "Chumaq",
      "batch": 1,
      "machine": "Heavy Berth",
      "inputs": [
        {
          "name": "Equilibrium Program Frame",
          "qty": 1
        },
        {
          "name": "Packaged Carbon Weave",
          "qty": 128
        },
        {
          "name": "Packaged Thermal Composites",
          "qty": 128
        },
        {
          "name": "Packaged Reinforced Alloys",
          "qty": 256
        }
      ]
    }
  },
  "Nursery": {
    "aggressive_shell": {
      "name": "Aggressive Shell",
      "batch": 1,
      "machine": "Nursery",
      "inputs": [
        {
          "name": "Nomad Program Frame",
          "qty": 1
        },
        {
          "name": "Salt",
          "qty": 3
        },
        {
          "name": "Still Kernel",
          "qty": 1
        }
      ]
    },
    "rugged_shell": {
      "name": "Rugged Shell",
      "batch": 1,
      "machine": "Nursery",
      "inputs": [
        {
          "name": "Apocalypse Protocol Frame",
          "qty": 1
        },
        {
          "name": "Chitinous Organics",
          "qty": 6
        },
        {
          "name": "Kerogen Tar",
          "qty": 4
        },
        {
          "name": "Salt",
          "qty": 2
        },
        {
          "name": "Still Kernel",
          "qty": 1
        },
        {
          "name": "Water Ice",
          "qty": 4
        }
      ]
    },
    "reaping_shell": {
      "name": "Reaping Shell",
      "batch": 1,
      "machine": "Nursery",
      "inputs": [
        {
          "name": "Exterminata Protocol Frame",
          "qty": 1
        },
        {
          "name": "Sophrogon",
          "qty": 3
        },
        {
          "name": "Still Kernel",
          "qty": 1
        },
        {
          "name": "Water Ice",
          "qty": 8
        }
      ]
    }
  }
};

// ─────────────────────────────────────────────────────────────────
// MACHINES DISPONIBLES
// ─────────────────────────────────────────────────────────────────
const MACHINES = [
  "Assembler",
  "Berth",
  "Field Printer",
  "Field Refinery",
  "Heavy Berth",
  "Heavy Printer",
  "Heavy Refinery",
  "Mini Berth",
  "Mini Printer",
  "Nursery",
  "Printer",
  "Refinery"
];

// ─────────────────────────────────────────────────────────────────
// MATRICES (minées dans les astéroïdes → produisent des intermédiaires)
// ─────────────────────────────────────────────────────────────────
const MATRICES = {
  "Platinum-Palladium Matrix": {
    batch: 40, asteroid: "SLAG", volume: 1,
    outputs: [
      { name: "Silica Grains",     qty: 10 },
      { name: "Iron-Rich Nodules", qty: 30 },
    ]
  },
  "Hydrated Sulfide Matrix": {
    batch: 40, asteroid: "COMET", volume: 1,
    outputs: [
      { name: "Hydrocarbon Residue", qty: 20 },
      { name: "Water Ice",           qty: 200 },
    ]
  },
  "Feldspar Crystals": {
    batch: 40, asteroid: "CHAR", volume: 1,
    outputs: [
      { name: "Hydrocarbon Residue", qty: 10 },
      { name: "Silica Grains",       qty: 30 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// MACHINE ACTIVE
// ─────────────────────────────────────────────────────────────────
let ACTIVE_MACHINE = 'Mini Printer';

function setMachine(machine) {
  ACTIVE_MACHINE = machine;
}

function getRecipesForMachine(machine) {
  return ALL_RECIPES_BY_MACHINE[machine] || {};
}

// ─────────────────────────────────────────────────────────────────
// CALCULATEUR RÉCURSIF
// Résout toute la chaîne de production selon la machine active
// ─────────────────────────────────────────────────────────────────

// Construire la map nom → clé JS pour la recherche rapide
function buildNameToKey(machine) {
  const recipes = getRecipesForMachine(machine);
  const map = {};
  for (const [key, rec] of Object.entries(recipes)) {
    map[rec.name.trim()] = key;
  }
  return map;
}

// Fonctions partagées pour intermédiaires et matrices
function _computeIntermediaires(result, stock) {
  for (const [matName, matData] of Object.entries(result.matieres)) {
    if (matData.manque <= 0) continue;
    for (const [interName, interRec] of Object.entries(INTERMEDIAIRES || {})) {
      const out = interRec.outputs.find(o => o.name === matName);
      if (!out) continue;
      const b = Math.ceil(matData.manque / out.qty);
      const prev = result.intermediaires[interName];
      if (!prev || b > prev.batches) {
        const toUse    = b * interRec.batch;
        const inStock  = stock[interName] || 0;
        const manque   = Math.max(0, toUse - inStock);
        const produces = interRec.outputs.map(o => ({ name: o.name, qty: o.qty * b }));
        result.intermediaires[interName] = { toUse, inStock, manque, batches: b, produces, rec: interRec };
      }
    }
  }
}

function _computeMatrices(result, stock) {
  for (const [interName, interData] of Object.entries(result.intermediaires)) {
    if (interData.manque <= 0) continue;
    let best = null;
    for (const [matrixName, matrixRec] of Object.entries(MATRICES)) {
      const out = matrixRec.outputs.find(o => o.name === interName);
      if (!out) continue;
      const batches = Math.ceil(interData.manque / out.qty);
      if (!best || batches < best.batches) best = { matrixName, batches, rec: matrixRec };
    }
    if (!best) continue;
    const existing = result.matrices[best.matrixName];
    const batches  = existing ? Math.max(existing.batches, best.batches) : best.batches;
    const toMine   = batches * best.rec.batch;
    const inStock  = stock[best.matrixName] || 0;
    const manque   = Math.max(0, toMine - inStock);
    result.matrices[best.matrixName] = { toMine, inStock, manque, batches, asteroid: best.rec.asteroid, volume: best.rec.volume };
  }
  for (const [name, data] of Object.entries(result.matrices)) {
    if (data.manque <= 0) continue;
    const ast = data.asteroid;
    if (!result.byAsteroid[ast]) result.byAsteroid[ast] = [];
    result.byAsteroid[ast].push({ name, toMine: data.manque, volume: data.volume });
  }
}

// Résoudre récursivement les inputs d'une recette
function resolveInputs(recipe, batches, machine, stock, result, visited = new Set()) {
  const recipes   = getRecipesForMachine(machine);
  const nameToKey = buildNameToKey(machine);

  for (const inp of recipe.inputs) {
    const needed  = inp.qty * batches;
    const inStock = stock[inp.name] || 0;
    const manque  = Math.max(0, needed - inStock);

    // Accumuler dans matieres
    if (!result.matieres[inp.name]) {
      result.matieres[inp.name] = { needed: 0, inStock, manque: 0 };
    }
    result.matieres[inp.name].needed += needed;
    result.matieres[inp.name].manque  = Math.max(0, result.matieres[inp.name].needed - inStock);

    if (manque <= 0 || visited.has(inp.name)) continue;

    // Est-ce que cet input a une recette sur cette machine ?
    const subKey = nameToKey[inp.name];
    if (!subKey || !recipes[subKey]) continue;

    // Oui → résoudre récursivement
    const subRecipe = recipes[subKey];
    const subBatches = Math.ceil(manque / subRecipe.batch);
    const subCraft   = subBatches * subRecipe.batch;

    if (!result.composants[inp.name]) {
      result.composants[inp.name] = {
        needed: 0, inStock, manque: 0,
        batches: 0, toCraft: 0, rec: subRecipe
      };
    }
    result.composants[inp.name].needed  += needed;
    result.composants[inp.name].manque   = Math.max(0, result.composants[inp.name].needed - inStock);
    result.composants[inp.name].batches += subBatches;
    result.composants[inp.name].toCraft += subCraft;

    // Supprimer de matieres (sera géré via composants)
    delete result.matieres[inp.name];

    visited.add(inp.name);
    resolveInputs(subRecipe, subBatches, machine, stock, result, visited);
  }
}

function computeCraft(recipeKey, wantedQty) {
  const machine = ACTIVE_MACHINE;
  const recipes = getRecipesForMachine(machine);
  const recipe  = recipes[recipeKey];
  if (!recipe) return null;

  const stock = window.ssuStock || {};

  const result = {
    final: {}, composants: {}, matieres: {},
    intermediaires: {}, matrices: {}, byAsteroid: {},
  };

  // Produit final
  const finalInStock = stock[recipe.name] || 0;
  const finalManque  = Math.max(0, wantedQty - finalInStock);
  const batches      = Math.ceil(finalManque / recipe.batch);
  const toCraft      = batches * recipe.batch;

  result.final = {
    name: recipe.name, needed: wantedQty,
    inStock: finalInStock, manque: finalManque,
    batches, toCraft,
    isSelfCraft: true,
  };

  if (batches === 0) return result;

  // Résoudre récursivement tous les inputs
  resolveInputs(recipe, batches, machine, stock, result, new Set());

  // Résoudre les matrices pour les matieres qui restent
  _computeIntermediaires(result, stock);
  _computeMatrices(result, stock);

  return result;
}
