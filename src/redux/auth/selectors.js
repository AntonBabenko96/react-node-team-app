import { createSelector } from 'reselect';

const selectAuth = state => state.user;

export const selectUser = createSelector(selectAuth, auth => auth.user);

export const selectIsLogin = createSelector(selectAuth, auth => auth.isLogin);

export const selectLoading = createSelector(selectAuth, auth => auth.loading);

export const selectError = createSelector(selectAuth, auth => auth.error);

export const selectNewUser = createSelector(selectAuth, auth => auth.newUser);

export const selectFavorite = createSelector(selectAuth, auth => auth.favorite);
