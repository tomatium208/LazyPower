StartupEvents.registry("item", event => {
    event.create("lazypower:valine3g_star")
    event.create("lazypower:lazy_star")
    event.create("lazypower:power_star").textures({layer0:"lazypower:item/power_star",layer1:"lazypower:item/power_star_flash"})

    event.create("lazypower:lazyium_ingot").tag("c:ingots/lazyium").tag("c:ingots")
    event.create("lazypower:lazyium_dust").tag("c:dusts/lazyium").tag("c:dusts")
    //event.create("lazypower:raw_lazyium").tag("c:raw_materials/lazyium").tag("c:raw_materials")

    event.create("lazypower:nitro_valine_alloy_ingot").tag("c:ingots/nitro_valine").tag("c:ingots")
    event.create("lazypower:prometheum_valine_alloy_ingot").tag("c:ingots/prometheum_valine").tag("c:ingots")

    event.create("lazypower:valine3g")

    event.create("lazypower:yuba_plate").tag("c:plates/yuba").tag("c:plates")
    event.create("lazypower:fissile_fuel")
    event.create("lazypower:fluorite").tag("c:gems/fluorite").tag("c:gems")
    event.create("lazypower:uranium_yellow_cake")
})
StartupEvents.registry("block", event => {
    event.create("lazypower:lazyium_block").tag("c:storage_blocks/lazyium").tag("c:storage_blocks").displayName("Block of Lazyium")
    .hardness(3.0)
    .tag("minecraft:mineable/pickaxe").tag("minecraft:needs_stone_tool")
    event.create("lazypower:nitro_valine_alloy_block").tag("c:storage_blocks/nitro_valine").tag("c:storage_blocks").displayName("Block of Nitro Valine Alloy")
    .hardness(3.0)
    .tag("minecraft:mineable/pickaxe").tag("minecraft:needs_stone_tool")
    event.create("lazypower:prometheum_valine_alloy_block").tag("c:storage_blocks/prometheum_valine").tag("c:storage_blocks").displayName("Block of Prometheum Valine Alloy")
    .hardness(3.0)
    .tag("minecraft:mineable/pickaxe").tag("minecraft:needs_stone_tool")

    event.create("lazypower:lazyium_ore").tag("c:ores/lazyium").tag("c:ores").displayName("Lazyium Ore")
    .hardness(3.0)
    .tag("minecraft:mineable/pickaxe").tag("minecraft:needs_diamond_tool")

    event.create("lazypower:lazy_trophy")
    event.create("lazypower:valine_trophy")
})
StartupEvents.registry("fluid", event => {
    event.create("lazypower:ethene","thin").tint("#efa5ff").noBucket().noBlock()
})