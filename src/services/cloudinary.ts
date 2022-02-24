import config from '~/config';
import Axios, { AxiosPromise } from 'axios';

export interface CloudinaryInstance {
  uploadImage(file_path: string): AxiosPromise<Cloudinary.UploadResult>;
}

class Cloudinary {
  static uploadImage(file_path: string): AxiosPromise<Cloudinary.UploadResult> {
    console.log('Cloudinary data = ', config.cloudinary);
    var bodyFormData = new FormData();
    bodyFormData.append('file', { uri: file_path, name: 'anyname.jpg', type: 'image/jpg' });
    bodyFormData.append('upload_preset', config.cloudinary.upload_preset);
    bodyFormData.append('api_key', config.cloudinary.api_key);
    return Axios.post(config.cloudinary.url, bodyFormData);
  }
}

export { Cloudinary };
