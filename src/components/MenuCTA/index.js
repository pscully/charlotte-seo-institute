import { React } from 'react';

function makeMenuCTA() {
    const menuItems = [
        'Learn More About The Institute',
        'Meet Our Team of Experts',
        'Join Our Free Slack Community'
    ];

    const menuLinks = [
        '/about-us',
        '/about-us#faculty',
        '/contact'
    ]

    var el = document.getElementById('menu-cta');
    var elNav = document.createElement('ul');
    var menuLength = menuItems.length;

    el.appendChild(elNav);


    for (let i = 0; i < menuLength; i++) {
        var elNavItem = document.createElement('li');
        var elNavItemLink = document.createElement('a');

        elNav.appendChild(elNavItem);
        elNavItemLink.setAttribute("class", "link is-info");
        elNavItemLink.setAttribute("href", menuLinks[i]);
        elNavItemLink.innerHTML = menuItems[i];
        elNavItem.appendChild(elNavItemLink);
    };
}

export default makeMenuCTA