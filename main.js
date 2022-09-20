const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {

    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}


const textNodes = [{
    id: 1,
    text: "You're exploring the universe in your Spacemobile. Unfortunately, you're running out of fuel. What are you going to do?",
    options: [{
        text: "Just keep going, it will last me longer than the gauge reads.",
        nextText: 2
    },
    {
        text: "I have a can of something lying around in the Spacemobile, perhaps that'll work.",
        nextText: 3
    },
    {
        text: "I'm looking for the nearest planet to make an emergency landing and call for help.",
        nextText: 4
    }
    ]
},

{
    id: 2,
    text: "You were overconfident: you ran out of fuel before you could refill. As a result, you now float meaningless through the universe and get hit by an inpatient meteor. This unfortunete occurrence leads to your early demise.",
    options: [{
        text: "Game over. Restart?",
        nextText: -1
    }
    ]
},

{
    id: 3,
    text: "Boom!!! Whoops-a-daisy, perhaps that wasn't the most thought-out idea... The Spacemobile and its contents (yes, including yourself) have been fragmented into uncountable pieces.",
    options: [{
        text: "Game over. Restart?",
        nextText: -1
    }
    ]
},

{
    id: 4,
    text: "You make a successfull emergency landing on a, by the looks of it, deserted planet. It's very cold and you put on your warm comfy jacket before setting foot on the solid ground. You look around and see that you're surrounded by picturesque mountains, covered with snow. Amazed by the beauty of it all, you suddenly see two curious eyes staring at you. It's a snow leopard! You",
    options: [{
        text: "quickly grab your lasergun and shoot the snow leopard.",
        nextText: 5
    },
    {
        text: "are intrigued and take a closer look.",
        nextText: 12
    }
    ]
},

{
    id: 5,
    text: "The snow leopard quickly drops to the ground. You then see that she was already wounded. She looks deeply and sadly in your eyes and at that moment you hear a tiny shriek from the bush to your left. After this distraction you take another look at the snow leopard and see that she's not breathing anymore. The snow leopard is dead. Once again, you hear a tiny shriek. You",
    options: [{
        text: "decide to investigate the bush.",
        nextText: 6
    },
    {
        text: "ignore the tiny shriek and call for help. You want to leave this planet as soon as possible.",
        nextText: 11
    }
    ]
},

{
    id: 6,
    text: "To your surprise there's a snow leopard cub. You offer it a piece of meat and it approaches you with care. It starts to eat it and meanwhile you call for help. While you wait, you",
    options: [{
        text: "play with the cub.",
        nextText: 7
    },
    {
        text: "sit still and look at the cub.",
        nextText: 7
    }
    ]
},

{
    id: 7,
    text: "The cub seems to like you and thinks your his new parent. The little one needs a name. You decide to call her/him",
    options: [{
        text: "Wynn, which means 'friend.'",
        nextText: 8
    },
    {
        text: "Tomoko, which means 'One who is friendly.'",
        nextText: 9
    },
    {
        text: "Xami, which means 'Listener.'",
        nextText: 10
    },
    ]
},

{
    id: 8,
    text: "Help arrives and you're all fueled up. You can't bear to leave Wynn behind and take him with you. He becomes your loyal sidekick and have many adventures together.",
    options: [{
        text: "Congratulations, you've reached the end! Play again?",
        nextText: -1
    }
    ]
},

{
    id: 9,
    text: "Help arrives and you're all fueled up. You can't bear to leave Tomoko behind and take her with you. She becomes your loyal sidekick and have many adventures together.",
    options: [{
        text: "Congratulations, you've reached the end! Play again?",
        nextText: -1
    }
    ]
},

{
    id: 10,
    text: "Help arrives and you're all fueled up. You can't bear to leave Xami behind and take her with you. She becomes your loyal sidekick and have many adventures together.",
    options: [{
        text: "Congratulations, you've reached the end! Play again?",
        nextText: -1
    }
    ]
},

{
    id: 11,
    text: "Help arrives and you're refueled. While back in the air, you can't stop thinking about the death of the snow leopard and the tiny shriek you heard. What was it?",
    options: [{
        text: "The end. Play again?",
        nextText: -1
    }
    ]
},

{
    id: 12,
    text: "When you take a closer look you see that the snow leopard is wounded. You suddendly hear a tiny shriek from the bush to your left. The snow leopard looks frightened at the bush. A little snow leopard cub rushes from the bush to its mother. You",
    options: [{
        text: "give the mother and cub some meat. Meanwhile you call for help.",
        nextText: 13
    },
    {
        text: "Let them be. You hurry back in the Spacemobile and call for help, so you can leave this planet as soon as possible.",
        nextText: 14
    },
    ]
},

{
    id: 13,
    text: "Help arrives and you're refueled. A vet has come along and helps the mother. A few months later you revisit them. They come running towards you and seem very grateful for your help. You bond with them and visit them as often as you can.",
    options: [{
        text: "Congratulations, you've reached the end! Play again?",
        nextText: -1
    }
    ]
},

{
    id: 14,
    text: "Help arrives and you're refueled. While back in the air, you can't stop thinking about the snow leopard and her cub. Will they make it or die?",
    options: [{
        text: "The end. Play again?",
        nextText: -1
    }
    ]
}

]


startGame()