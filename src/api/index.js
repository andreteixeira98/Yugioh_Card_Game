async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getCardByName(cardName) {
    const url = `https://api.yugioh.com/cards?name=${cardName}`;
    const data = await fetchData(url);
    return data;
}

async function getAllCards() {
    const url = `https://api.yugioh.com/cards`;
    const data = await fetchData(url);
    return data;
}

async function getCardsByArchetype(archetype) {
    const url = `https://api.yugioh.com/cards?archetype=${archetype}`;
    const data = await fetchData(url);
    return data;
}