import courseApi from '../api/mockCourseApi';

export const CREATE_COURSE = 'CREATE_COURSE';
export const createCourse = course => {
  return { type: CREATE_COURSE, course };
}

export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const loadCoursesSuccess = courses => {
  return { type: LOAD_COURSES_SUCCESS, courses };
}

export const loadCourses = () => {
  return dispatch => {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  }
}
