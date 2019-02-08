import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusAction';

export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const loadAuthorsSuccess = authors => {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
};
