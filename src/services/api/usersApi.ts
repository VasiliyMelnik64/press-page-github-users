import createInstance from './common/config';
import { getUsersListFromServer } from '../utils/mapping';

const API = createInstance();

export const getAllUsers = async (config: any): Promise<any> => {
  const response = await API.get('', config);

  return getUsersListFromServer(response);
};
