export default function menu() {
    const menu = document.createElement('div');
    const menuTitle = document.createElement('h1');

    const food = ['1. Beijing Roasted Duck', '2. Kung Pao Chicken', '3. Sweet and Sour Pork', '4. Hot Pot', '5. Cantonese Dim Sum', '6. Dumplings', '7. Ma Po Tofu', '8. Cantonese Char Siu', '9. Chow Mien', '10. Wonton Soup'];

    menu.classList.add('menu');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent= 'Menu Items';

    menu.appendChild(menuTitle);

    for (let i = 0; i < food.length; i++) {
        const menuItem = document.createElement('div');
        const itemDesc = document.createElement('p');
        const itemPrice = document.createElement('p');
        menuItem.classList.add('menu-item');
        itemDesc.classList.add('item-desc');
        itemPrice.classList.add('item-price');
        itemPrice.textContent='$100';
        itemDesc.textContent= food[i];

        menuItem.appendChild(itemDesc);
        menuItem.appendChild(itemPrice);

        menu.appendChild(menuItem);
    }

    return menu;
}