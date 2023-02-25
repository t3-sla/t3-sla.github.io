var typed = new Typed('.multiple-text', {
    strings: ['Junior Frontend Developer', 'CS Student', 'Tech Lover and cyberunk dreamer'],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

const nav = document.querySelector('nav');

// const home = document.getElementById('homeBtn');
// const about = document.getElementById('aboutBtn');
// const skills = document.getElementById('skillsBtn');
// const portfolio = document.getElementById('portfolioBtn');
// const contact = document.getElementById('contactBtn');
const buttons = document.querySelectorAll('nav.navbar > a');
const blocks = document.querySelectorAll('body > section');

console.log(buttons);
console.log(blocks);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //Blocks
        const blockId = button.getAttribute('id').replace('Btn', 'Block');
        const currentBlock = document.querySelector('secttion, .slideIn');
        const newBlock = document.querySelector(`#${blockId}`);

        //Buttons
        const btnId = button.getAttribute('id');
        const currentBtn = document.querySelector('nav.navbar > a.active');
        const newBtn = document.querySelector(`#${btnId}`);

        console.log(currentBlock);
        if (newBlock !== currentBlock) {
            currentBlock.classList.remove('slideIn');
            currentBlock.classList.add('slideOut');

            currentBtn.classList.remove('active'); //Move btn .active class
            newBtn.classList.add('active');

            window.setTimeout(() => {
                currentBlock.classList.add('hidden');
                newBlock.classList.remove('hidden');
                newBlock.classList.remove('slideOut');
                newBlock.classList.add('slideIn');
            }, '1500');
        }
    });
});

// const homeBlock = document.getElementById('homeBlock');
// const aboutBlock = document.getElementById('aboutBlock');
// const skillsBlock = document.getElementById('skillsBlock');
// const portfolioBlock = document.getElementById('portfolioBlock');
// const contactBlock = document.getElementById('contactBlock');

// const blockHash = {
//     homeBtn: homeBlock,
//     aboutBtn: aboutBlock,
//     skillsBtn: skillsBlock,
//     portfolioBtn: portfolioBlock,
//     contactBtn: contactBlock,

//     get homeBtn() {
//         return this[homeBtn];
//     },
// };

// let currentBlock = 'homeBtn';

// nav.addEventListener('click', function (e) {
//     const clicked = e.target;

//     if (clicked.id === 'aboutBtn') {
//         // console.log('aboutBtn clicked');
//         swap(asd(currentBlock), aboutBlock);
//         currentBlock = 'aboutBtn';
//     }
//     if (clicked.id === 'homeBtn') {
//         swap(asd(currentBlock), homeBlock);
//         currentBlock = 'homeBtn';
//     }
//     if (clicked.id === 'skillsBtn') {
//         swap(asd(currentBlock), skillsBlock);
//         currentBlock = 'skillsBtn';
//     }
//     if (clicked.id === 'portfolioBtn') {
//         // console.log('PortfolioBtn clicked');
//         swap(asd(currentBlock), portfolioBlock);
//         currentBlock = 'portfolioBtn';
//     }
//     if (clicked.id === 'contactBtn') {
//         // console.log('ContactBtn clicked');
//         swap(asd(currentBlock), contactBlock);
//         currentBlock = 'contactBtn';
//     }
//     console.log(currentBlock);
// });

// const swap = (block, newblock) => {
//     block.classList.add('slideOut');
//     block.addEventListener('animationend', () => {
//         console.log('ended 1');
//     });
//     block.classList.remove('slideOut');
//     block.style.display = 'none';

//     newblock.style.display = 'flex';
//     newblock.classList.add('slideIn');
//     newblock.addEventListener('animationend', () => {});
//     newblock.classList.remove('slideIn');
// };

// const asd = (currBlock) => {
//     switch (currBlock) {
//         case 'homeBtn':
//             return homeBlock;

//         case 'aboutBtn':
//             return aboutBlock;

//         case 'skillsBtn':
//             return skillsBlock;

//         case 'portfolioBtn':
//             return portfolioBlock;

//         case 'contactBtn':
//             return contactBlock;

//         default:
//             console.log('oops');
//     }
// };
