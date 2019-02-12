export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const beginAjaxCall = () => {
  return {type: BEGIN_AJAX_CALL};
};

export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';
export const ajaxCallError = () => {
  return {type: AJAX_CALL_ERROR};
};
