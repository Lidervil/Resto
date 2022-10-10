export function navbar(){
    const navbar = document.createElement('div');
    const left = document.createElement('div');
    const right = document.createElement('div');
    const icon = document.createElement('i');
    const logoname = document.createElement('p');
    const linkone = document.createElement('a');
    const linktwo = document.createElement('a');
    const linkthree = document.createElement('a');
    
    navbar.classList.add('navbar');
    
    left.classList.add('left');
    right.classList.add('right');
    
    icon.classList.add('icon');
    logoname.classList.add('logoname');
    
    linkone.classList.add('linkone');
    linktwo.classList.add('linktwo');
    linkthree.classList.add('linkthree');
    linkone.textContent = 'Home';
    linktwo.textContent = 'Menu';
    linkthree.textContent = 'Contact';

    left.appendChild(icon);
    left.appendChild(logoname);

    right.appendChild(linkone);
    right.appendChild(linktwo);
    right.appendChild(linkthree);

    navbar.appendChild(left);
    navbar.appendChild(right);

    return navbar;
}

export function main() {
    const main = document.createElement('div');
    main.classList.add('main');

    return main;
}

export function footer() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.innerHTML = `Made with love by&nbsp;<a href="http://github.com/lidervil" target="_blank">Lidervil!</a>`

    footer.appendChild(footerText);

    return footer;
}