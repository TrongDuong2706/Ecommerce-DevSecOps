import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '10s',
};

export default function () {
    // NOSONAR
    const BASE_URL = 'http://192.168.252.161:3000/';
    let res = http.get(BASE_URL);
    check(res, {
        'homepage status is 200': (r) => r.status === 200,
    });
    sleep(1);
}
