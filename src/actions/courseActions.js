import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const loadCoursesSuccess = courses => {
  return { type: LOAD_COURSES_SUCCESS, courses };
};

export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const createCourseSuccess = course => {
  return {type: CREATE_COURSE_SUCCESS, course};
};

export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const updateCourseSuccess = course => {
  return {type: UPDATE_COURSE_SUCCESS, course};
};

export const loadCourses = () => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
};

export const saveCourse = course => {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
};
