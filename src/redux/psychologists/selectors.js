export const selectPsychologists = (state) => state.psychologists.items;
export const selectFavorites = (state) => state.psychologists.isFavorite;

export const selectPage = (state) => state.psychologists.page;
export const selectLimit = (state) => state.psychologists.perPage;
