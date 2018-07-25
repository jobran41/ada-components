import { handleActions } from "redux-actions"
import update from "immutability-helper"
import {
  addUserRoles,
  toggleTopbar,
  addToast,
  dismissToast
} from "modules/app/actions"

const initialState = {
  topbarCollapsed: true,
  toasts: []
}

update.extend("$auto", (value, object) => {
  return object ? update(object, value) : update({}, value)
})

export default handleActions(
  {
    [toggleTopbar](state, { payload }) {
      return update(state, {
        topbarCollapsed: {
          $set:
            payload.collapsed === undefined
              ? !state.topbarCollapsed
              : payload.topbarCollapsed,
        },
      })
    },
    [addUserRoles](state, { payload }) {
      return update(state, {
        userRoles: { $merge: payload.roles },
      })
    },

    [addToast](state, { payload }) {
      return update(state, {
        toasts: { $push: [payload] },
      })
    },

    [dismissToast](state) {
      return update(state, {
        toasts: { $splice: [[0, 1]] },
      })
    },
  },
  initialState,
)
