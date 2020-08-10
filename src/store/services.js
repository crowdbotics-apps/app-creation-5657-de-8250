import axios from "axios"
const appcreation5657API = axios.create({
  baseURL: "https://app-creation-5657-de-8250.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return appcreation5657API.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return appcreation5657API.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return appcreation5657API.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return appcreation5657API.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_fnhgjhjgjh_list() {
  return appcreation5657API.get(`/api/v1/fnhgjhjgjh/`)
}
function api_v1_fnhgjhjgjh_create(requestBody) {
  return appcreation5657API.post(`/api/v1/fnhgjhjgjh/`, requestBody)
}
function api_v1_fnhgjhjgjh_read() {
  return appcreation5657API.get(`/api/v1/fnhgjhjgjh/{id}/`)
}
function api_v1_fnhgjhjgjh_update(requestBody) {
  return appcreation5657API.put(`/api/v1/fnhgjhjgjh/{id}/`, requestBody)
}
function api_v1_fnhgjhjgjh_partial_update(requestBody) {
  return appcreation5657API.patch(`/api/v1/fnhgjhjgjh/{id}/`, requestBody)
}
function api_v1_fnhgjhjgjh_delete() {
  return appcreation5657API.delete(`/api/v1/fnhgjhjgjh/{id}/`)
}
function api_v1_homepage_list() {
  return appcreation5657API.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return appcreation5657API.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return appcreation5657API.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return appcreation5657API.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return appcreation5657API.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return appcreation5657API.post(`/api/v1/signup/`, requestBody)
}
function api_v1_test_list() {
  return appcreation5657API.get(`/api/v1/test/`)
}
function api_v1_test_create(requestBody) {
  return appcreation5657API.post(`/api/v1/test/`, requestBody)
}
function api_v1_test_read() {
  return appcreation5657API.get(`/api/v1/test/{id}/`)
}
function api_v1_test_update(requestBody) {
  return appcreation5657API.put(`/api/v1/test/{id}/`, requestBody)
}
function api_v1_test_partial_update(requestBody) {
  return appcreation5657API.patch(`/api/v1/test/{id}/`, requestBody)
}
function api_v1_test_delete() {
  return appcreation5657API.delete(`/api/v1/test/{id}/`)
}
function rest_auth_login_create(requestBody) {
  return appcreation5657API.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return appcreation5657API.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return appcreation5657API.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return appcreation5657API.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return appcreation5657API.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return appcreation5657API.post(
    `/rest-auth/password/reset/confirm/`,
    requestBody
  )
}
function rest_auth_registration_create(requestBody) {
  return appcreation5657API.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return appcreation5657API.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return appcreation5657API.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return appcreation5657API.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return appcreation5657API.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_fnhgjhjgjh_list,
  api_v1_fnhgjhjgjh_create,
  api_v1_fnhgjhjgjh_read,
  api_v1_fnhgjhjgjh_update,
  api_v1_fnhgjhjgjh_partial_update,
  api_v1_fnhgjhjgjh_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_test_list,
  api_v1_test_create,
  api_v1_test_read,
  api_v1_test_update,
  api_v1_test_partial_update,
  api_v1_test_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
