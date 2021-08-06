import "reflect-metadata";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosInstance, AxiosStatic } from 'axios';

class AuthInterceptor {
  async setInterceptors(axios: AxiosInstance | AxiosStatic) {
    const accessToken = await AsyncStorage.getItem('@accessToken');
    axios.interceptors.request.use(request => {
      if (accessToken) {
        request.headers.common.Authorization = `Bearer ${accessToken}`;
      }
      return request;
    });

    axios.interceptors.response.use(response => {
      return response;
    }, error => {
      const response = error.response;
      if (response && response.status === 401) {
        // do something here...
      } else {
        throw error;
      }
    });
  }
}

export default AuthInterceptor;