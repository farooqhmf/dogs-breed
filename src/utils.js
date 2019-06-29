import request from 'axios';

export function makeRequest(method, data, api, headers = {}) {
    return request({
      url: api,
      method,
      data,
      headers,
    });
  }