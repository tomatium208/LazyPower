ServerEvents.recipes(event => {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "oritech:plastic_sheet"
        },
        "loops": 1,
        "results": [
            {
                "id": "oritech:processing_unit"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "tag": "c:ingots/electrum"
                    }
                ],
                "results": [
                    {
                        "id": "create:incomplete_precision_mechanism"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "tag": 'c:carbon_fibre'
                    }
                ],
                "results": [
                    {
                        "id": "create:incomplete_precision_mechanism"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "tag": "c:dusts/redstone"
                    }
                ],
                "results": [
                    {
                        "id": "create:incomplete_precision_mechanism"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "create:incomplete_precision_mechanism"
        }
    }).id("create:sequenced_assembly/processing_unit")

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "c:storage_blocks/plastic"
        },
        "loops": 1,
        "results": [
            {
                "count": 2,
                "id": "create:precision_mechanism"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "item": "create:cogwheel"
                    }
                ],
                "results": [
                    {
                        "id": "create:incomplete_precision_mechanism"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "tag": 'c:silicon'
                    }
                ],
                "results": [
                    {
                        "id": "create:incomplete_precision_mechanism"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "tag": "c:plates/brass"
                    }
                ],
                "results": [
                    {
                        "id": "create:incomplete_precision_mechanism"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "create:incomplete_precision_mechanism"
        }
    }).id("create:sequenced_assembly/precision_mechanism")
})