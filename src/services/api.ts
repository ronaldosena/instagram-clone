import config from '~/config';
import Axios, { AxiosPromise, AxiosInstance } from 'axios';
import { User } from '~/models/user';
import { Photo } from '~/models/photo';

class ApiClass {
  private _axios: AxiosInstance = Axios.create({
    baseURL: config.baseUrl,
    headers: {
      'x-apikey': config.apiKey,
    },
  });

  public get axios(): AxiosInstance {
    return this._axios;
  }

  // public set axios(v: AxiosInstance) {
  //   this._axios = Axios.create({
  //     baseURL: config.baseUrl,
  //   });
  // }

  setBearerToken(token: string) {
    this._axios.interceptors.request.use(async (c) => {
      c.headers.Authorization = `Bearer ${token}`;
      return c;
    });
  }

  createUser(username: string, password: string): AxiosPromise<User> {
    return this._axios.post(`users`, { username, password });
  }

  userPhotos(userId: string): AxiosPromise<Photo[]> {
    return this._axios.get(`photos?userId_like=${userId}&_sort=created_at&_order=desc`);
  }

  addPhoto(userId: string, photo: Cloudinary.UploadResult): AxiosPromise<void> {
    const photo2updalod = photo as Photo;
    photo2updalod.userId = userId;
    return this._axios.post('photos', photo2updalod);
  }
}

const Api = new ApiClass();

export { Api };
