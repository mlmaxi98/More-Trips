export const AZ = (a, b) => { return a.name > b.name ? 1 : -1 }
export const ZA = (a, b) => { return a.name < b.name ? 1 : -1 }
const Max = (a, b) => { return b.population - a.population }
const Min = (a, b) => { return a.population - b.population }

export const Ordenamiento = (paises, orden) => {
    switch (orden) {
        case 'AZ': return paises.sort(AZ);
        case 'ZA': return paises.sort(ZA);
        case 'MAX': return paises.sort(Max);
        case 'MIN': return paises.sort(Min);
        default: return paises
    }
}