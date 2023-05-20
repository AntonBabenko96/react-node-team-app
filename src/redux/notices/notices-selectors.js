export const selectNotices = ({ notices }) => notices.items;
export const selectNotice = ({ notices }) => notices.item;
export const selectMyNotices = ({ notices }) => notices.myItems;
export const selectIsLoading = ({ notices }) => notices.isLoading;
export const selectMyFavoriteNotices = ({ notices }) => notices.favorites;
export const selectTotal = ({ notices }) => notices.total;
