let dispatch;

export default function (action) {
  return dispatch(action);
};

export function initDispatch(store) {
  dispatch = store.dispatch;
}