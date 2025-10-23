ServerEvents.tags("item", event => {
    event.add("c:stones", "#minecraft:stone_tool_materials")
})

ServerEvents.recipes(event => {
    function createDeploying(output, input1, input2, recipeid) {
        event.custom({
            "type": "create:deploying",
            "ingredients": [
                {
                    "item": input1
                },
                {
                    "item": input2
                }
            ],
            "results": [
                {
                    "id": output
                }
            ]
        }).id(recipeid)
    }

    event.remove({ id: "ae2:smelting/silicon_from_certus_quartz_dust" })
    event.remove({ id: "ae2:blasting/silicon_from_certus_quartz_dust" })

    event.remove({ id: "create:crafting/kinetics/belt_connector" })
    event.remove({ id: "create:crafting/materials/electron_tube" })
    event.remove({ id: "create:sequenced_assembly/precision_mechanism" })

    event.remove({ id: "oritech:compat/powah/energizing/energite" })
    event.remove({ id: "oritech:compat/powah/energizing/fluxite" })
    event.remove({ id: "oritech:compat/powah/energizing/uranite" })
    event.remove({ id: "oritech:assembler/processingunit" })

    event.remove({ id: "cookingforblockheads:sink" })

    event.remove({ mod: "dankstorage" })

    event.shaped("cookingforblockheads:sink", [
        "S  ",
        "B  ",
        "C  "
    ], {
        S: "#c:ingots/steel",
        B: "minecraft:water_bucket",
        C: "#c:ingots/copper"
    }).id("lazypower:sink")

    event.shaped("aeinfinitybooster:infinity_card", [
        "EWE",
        "WRW",
        "DDD"
    ], {
        E: "oritech:enderic_lens",
        W: "ae2:wireless_booster",
        R: '#powah:energizing_rods',
        D: "#c:ingots/duratium"
    })

    event.shaped("dankstorage:dank_6",[
        "PPP",
        "P P",
        "PPP"
    ],{
        P:'#minecraft:planks'
    })

    event.shaped("dankstorage:dock",[
        "OOO",
        "O O",
        "OIO"
    ],{
        O:"obsidian",
        I:"#c:nuggets/platinum"
    })

    event.shapeless("lazypower:lazyium_block", [
        "9x #c:ingots/lazyium"
    ]).id("lazypower:lazyium_block")

    event.shapeless("9x lazypower:lazyium_ingot", [
        "#c:storage_blocks/lazyium"
    ]).id("lazypower:lazyium_ingot_from_block")

    event.shapeless("lazypower:nitro_valine_alloy_block", [
        "9x #c:ingots/nitro_valine"
    ]).id("lazypower:nitro_valine_alloy_block")

    event.shapeless("9x lazypower:nitro_valine_alloy_ingot", [
        "#c:storage_blocks/nitro_valine"
    ]).id("lazypower:nitro_valine_alloy_ingot_from_block")

    event.shapeless("lazypower:prometheum_valine_alloy_block", [
        "9x #c:ingots/prometheum_valine"
    ]).id("lazypower:prometheum_valine_alloy_block")

    event.shapeless("9x lazypower:prometheum_valine_alloy_ingot", [
        "#c:storage_blocks/prometheum_valine"
    ]).id("lazypower:prometheum_valine_alloy_ingot_from_block")

    event.shapeless("ae2:creative_storage_cell",[
        "ae2:item_cell_housing",
        "lazypower:valine3g_star"
    ]).id("lazypower:creative_storage_cell")

    event.smelting("lazypower:lazyium_ingot", "#c:dusts/lazyium").id("lazypower:smelting/lazyium_ingot_from_dust")

    createDeploying("powah:energy_cell_creative", "powah:energy_cell_nitro", "lazypower:lazy_star", "lazypower:creative_energy_cell")
    createDeploying("create:creative_motor", "create:cogwheel", "lazypower:lazy_star", "lazypower:creative_motor")
    createDeploying("oritech:creative_tank_block", "oritech:small_tank_block", "lazypower:lazy_star", "lazypower:creative_tank")
    createDeploying("create:creative_blaze_cake", "create:blaze_cake", "lazypower:lazy_star", "lazypower:creative_blaze_cake")
    createDeploying("create:creative_crate", "minecraft:barrel", "lazypower:lazy_star", "lazypower:creative_crate")



    event.recipes.powah.energizing(["#c:nuggets/platinum", "#c:gems/quartz"], "64x integrateddynamics:crystalized_menril_chunk", 4000).id("lazypower:energizing/crystalized_menril_chunk")
    event.recipes.powah.energizing(["1x integrateddynamics:crystalized_menril_block", "3x oritech:raw_silicon"], "16x ae2:certus_quartz_crystal", 8000).id("lazypower:energizing/certus_quartz_crystal")
    event.recipes.powah.energizing(["#c:gems/certus_quartz", "#c:dusts/redstone", "#c:gems/quartz"], "3x ae2:fluix_crystal", 8000).id("lazypower:energizing/fluix_crystal")
    event.recipes.powah.energizing(["#c:storage_blocks/emerald"], "lazypower:power_star", 1000000000).id("lazypower:energizing/power_star")

    event.custom({
        "type": "oritech:assembler",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "minecraft:dried_kelp"
            },
            {
                "item": "minecraft:dried_kelp"
            },
            {
                "item": "minecraft:dried_kelp"
            },
            {
                "item": "minecraft:dried_kelp"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "create:belt_connector"
            }
        ],
        "time": 20
    }).id("lazypower:assembler/belt_connector")

    event.custom({
        "type": "oritech:assembler",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "create:polished_rose_quartz"
            },
            {
                "tag": "c:plates/iron"
            },
            {
                "tag": "c:silicon"
            },
            {
                "tag": "c:dusts/redstone"
            }
        ],
        "results": [
            {
                "count": 2,
                "id": "create:electron_tube"
            }
        ],
        "time": 20
    }).id("lazypower:assembler/electron_tube")

    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 100,
            "fluid": "lazypower:ethene"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "lazypower:fissile_fuel"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "lazypower:valine3g"
            }
        ],
        "time": 80
    })

    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 100,
            "fluid": "minecraft:water"
        },
        "fluidOutputs": [
            {
                "amount": 100,
                "fluid": "lazypower:ethene"
            }
        ],
        "ingredients": [
            {
                "tag": "c:plates/plastic"
            }
        ],
        "results": [],
        "time": 80
    })

    event.custom({
        "type": "oritech:foundry",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "lazypower:valine3g"
            },
            {
                "item": "powah:crystal_nitro"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "lazypower:nitro_valine_alloy_ingot"
            }
        ],
        "time": 60
    })

    event.custom({
        "type": "oritech:foundry",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": "lazypower:valine3g"
            },
            {
                "tag": 'c:ingots/prometheum'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "lazypower:prometheum_valine_alloy_ingot"
            }
        ],
        "time": 60
    })

    event.custom({
        "type": "oritech:foundry",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "item": 'lazypower:uranium_yellow_cake'
            },
            {
                "tag": 'c:gems/fluorite'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "lazypower:fissile_fuel"
            }
        ],
        "time": 60
    })

    event.custom({
        "type": "oritech:foundry",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "tag": 'c:dusts/uranium'
            },
            {
                "tag": 'c:dusts/uranium'
            }
        ],
        "results": [
            {
                "count": 4,
                "id": "lazypower:uranium_yellow_cake"
            }
        ],
        "time": 100
    })

    event.custom({
        "type": "oritech:particle_collision",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "tag": "c:gems/fluxite"
            },
            {
                "tag": "c:dusts/iron"
            }
        ],
        "results": [
            {
                "count": 2,
                "id": "lazypower:fluorite"
            }
        ],
        "time": 5000
    })

    event.custom({
        "type": "oritech:particle_collision",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "tag": "c:seeds"
            },
            {
                "tag": "c:seeds"
            }
        ],
        "results": [
            {
                "count": 2,
                "id": "lazypower:yuba_plate"
            }
        ],
        "time": 300
    })
})