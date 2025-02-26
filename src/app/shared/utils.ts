export const getTypeColor = (type: string): string => {
    return typeColorMap.get(type);
}

export const typeColorMap: Map<string, string> = new Map([
    ['normal', '#A8A87B'],
    ['water', '#559EDF'],
    ['fire', '#EE803B'],
    ['grass', '#88BE5D'],
    ['electric', '#F7CF43'],
    ['ice', '#9AD8D8'],
    ['fight', '#BE322E'],
    ['poison', '#B563CE'],
    ['ground', '#DFBF6E'],
    ['flying', '#A893ED'],
    ['psychic', '#EC5C89'],
    ['bug', '#A8B732'],
    ['rock', '#B89F41'],
    ['ghost', '#705A97'],
    ['dark', '#705849'],
    ['dragon', '#7043F4'],
    ['street', '#B8B9CF'],
    ['fairy', '#EFB7BD']
]);
