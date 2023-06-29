import axios from 'axios'
import { error } from 'jquery'

// Base url
const BASE_URL = 'https://api.outer.media/api';

// End-Points
// Super admin
const SuperAdminUrl = `${BASE_URL}/login`

/**
 * Extract the CSRF token from the response headers
 * @param {object} header - Response headers object
 * @return {string} - CSRF token
 */

function extractCsrfTokenFromHeaders(headers) {
  // Extract the CSRF token from the response headers
  const crsfToken = headers['csrf-token']
  return crsfToken
}

export default {
  /**
   * Obtain the CSRF token by making a GET request to the '/api/csrf-cookie'.
   * @return {Promise<string} - Promise resolving to the CSRF token.
   * @throw {Error} - If CSRF token retrieval fails.
   */
  async obtainCsrfToken() {
    try {
      const response = await axios.get(`${BASE_URL}/csrf-cookie'`)
      const csrfToken = extractCsrfTokenFromHeaders(response.headers)
      return csrfToken
    } catch (error) {
      throw new Error('CSRF token retrieval failed')
    }
  },

/**
   * Logs in a user by making a POST request to '/api/login'.
   * @param {string} csrfToken - CSRF token obtained from obtainCsrfToken().
   * @param {Object} credentials - User login credentials (e.g., username, password).
   * @returns {Promise<string>} - Promise resolving to the bearer token.
   * @throws {Error} - If login fails.
   * 
   */

  async login(csrfToken, credentials) {
  try {
    const response = await axios.post(SuperAdminUrl, credentials, {
      headers: {
        'X-CSRF-TOKEN': csrfToken
      }
    })
    const bearerToken = response.data.token
    return bearerToken
  } catch (error) {
    throw new Error('Login failed')
  }
},

  /**m
   * Makes an authenticated GET request to the specified URL.
   * @param {string} url - The URL for the API request.
   * @param {string} bearerToken - Bearer token for authentication.
   * @returns {Promise<any>} - Promise resolving to the response data.
   * @throws {Error} - If the request fails.   
   */
  async makeAuthenticatedRequest(url, bearerToken){
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      })
      return response.data
    } catch (error) {
      throw error
    }
  },

  
}
