
export const generateId = () => {
    return Math.random()
        .toString(36)
        .substring(2, 15) + Math.random()
            .toString(36)
            .substring(2, 15);
}


export function filteredBySearchQuery<T extends { name: string }>(
    data: T[],
    searchQuery: string
): T[] {
    if (!searchQuery) {
        return data;
    }

    return data
        .filter(item => item.name.trim().toLowerCase()
            .includes(searchQuery.trim().toLocaleLowerCase()));
}
