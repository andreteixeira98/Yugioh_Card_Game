export async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getCardByName(cardName) {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`;
    const data = await fetchData(url);
    return data;
}

export  async function getAllCards() {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
    const data = await fetchData(url);
    return data;
}

export async function getCardsByArchetype(archetype) {
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}`;
    const data = await fetchData(url);
    return data;
}