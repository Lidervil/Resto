export default function cta(){
    const cta = document.createElement('div');
    const ctaTitle = document.createElement('h1');
    const ctaDesc = document.createElement('p');
    const ctaBtn = document.createElement('button');

    cta.classList.add('cta');
    ctaTitle.classList.add('cta-title');
    ctaDesc.classList.add('cta-desc');
    ctaBtn.classList.add('cta-btn');

    ctaTitle.textContent = 'Welcome to my homecooking page';
    ctaDesc.textContent = 'Here you can have a look at the things i really enjoy eating from most countries, and what i like to cook for people to taste at least once in a lifetime';
    ctaBtn.textContent = 'Learn more!';

    cta.appendChild(ctaTitle);
    cta.appendChild(ctaDesc);
    cta.appendChild(ctaBtn);

    return cta;
}