import ky from 'ky';
import qs from 'qs';
import { CompilerResponse } from './types';
import { notification } from 'antd';

const agent = ky.create({
  hooks: {
    beforeError: [
      (error) => {
        notification.error({
          type: 'error',
          placement: 'bottomLeft',
          message: error.response.status,
          description: error.response.statusText,
        });
        return error;
      },
    ],
  },
})

export class api {
  static async compile(code: string) {
    const body = qs.stringify({
      'code': code,
      'language': 'java',
      'input': ''
    });
    try {
      const res = await agent.post('https://api.codex.jaagrav.in', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body,
      }).json<CompilerResponse>();
      return res;
    } catch(error) {
      notification.error({
        type: 'error',
        placement: 'bottomLeft',
        message: '500',
        description: 'Ошибка работы компилятора',
      });
    }
  }
}