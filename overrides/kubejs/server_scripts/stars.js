ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "R": {
                "tag": 'c:storage_blocks/lazyium'
            },
            "Y": {
                "tag": "c:plates/yuba"
            },
            "S": {
                "item": "lazypower:power_star"
            },
            "N": {
                "item": "oritech:nuke"
            },
            "r": {
                "item": "powah:reactor_nitro"
            },
            "D": {
                "item": "aeinfinitybooster:dimension_card"
            },
            "s": {
                "item": "ae2:singularity"
            },
            "d": {
                "item": 'minecraft:dragon_egg'
            },
            "m": {
                "item": "minecraft:mace"
            },
            "E": {
                "item": "minecraft:enchanted_golden_apple"
            },
            "C": {
                "item": "oritech:machine_core_7"
            }
        },
        "pattern": [
            "    R    ",
            "   RYR   ",
            "   RYR   ",
            "RRRNrDRRR",
            "RYYCSsYYR",
            " RYEmdYR ",
            " RYYYYYR ",
            "RYYRRRYYR",
            "RRR   RRR"
        ],
        "result": {
            "count": 1,
            "id": "lazypower:lazy_star"
        },
        "show_notification": false
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "R": {
                "tag": "c:storage_blocks/prometheum_valine"
            },
            "Y": {
                "tag": 'c:storage_blocks/nitro_valine'
            },
            "S": {
                "item": "lazypower:lazy_star"
            },
            "P": {
                "item": 'oritechthings:addon_block_processing_tier_9'
            },
            "A": {
                "item": 'oritechthings:addon_block_acceptor_tier_9'
            },
            "C": {
                "item": 'oritechthings:addon_block_capacitor_tier_9'
            },
            "E": {
                "item": 'oritechthings:addon_block_efficient_speed_tier_9'
            },
            "e": {
                "item": 'oritechthings:addon_block_efficiency_tier_9'
            },
            "s": {
                "item": 'oritechthings:addon_block_speed_tier_9'
            },
            "m": {
                "item": 'create:creative_motor'
            },
            "p": {
                "item": 'powah:energy_cell_creative'
            },
            "t": {
                "item": 'oritech:creative_tank_block'
            },
            "c": {
                "item": 'create:creative_crate'
            },
            "b": {
                "item": 'create:creative_blaze_cake'
            }
        },
        "pattern": [
            "    R    ",
            "   RYR   ",
            "   RmR   ",
            "RRRPACRRR",
            "RYp S tYR",
            " RYseEYR ",
            " RYcYbYR ",
            "RYYRRRYYR",
            "RRR   RRR"
        ],
        "result": {
            "count": 1,
            "id": "lazypower:valine3g_star"
        },
        "show_notification": false
    })
})