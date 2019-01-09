export const CREATE_COURSE = 'CREATE_COURSE';
export const createCourse = course => {
  return { type: CREATE_COURSE, course };
}
