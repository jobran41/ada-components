import { createAction } from "redux-actions"


export const toggleTopbar = createAction("APP_TOGGLE_TOPBAR", collapsed => ({
  collapsed,
}))

export const addUserRoles = createAction("APP_ADD_USER_ROLES", roles => ({
  roles,
}))

export const addToast = createAction("APP_ADD_TOAST", (text, action) => {
  return {
    text,
    action,
  }

})

export const dismissToast = createAction("APP_DISMISS_TOAST")