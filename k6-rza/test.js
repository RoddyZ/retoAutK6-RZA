import http from 'k6/http';
import { sleep, check } from 'k6';

export let opciones = {
    vus: 20, // cantidad Users
    duration: '10m',
    summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(90)', 'p(95)'],
};

export default function () {
    // 1. Página principal
    let res = http.get('https://petstore.octoperf.com/actions/Catalog.action');
    check(res, {
        'status was 200': (r) => r.status === 200,
    });
    sleep(1);

    // 2. Sección Fish
    res = http.get('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    check(res, {
        'status was 200': (r) => r.status === 200,
    });
    sleep(1);

    // 3. Producto FI-SW-01
    res = http.get('https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01');
    check(res, {
        'status was 200': (r) => r.status === 200,
    });
    sleep(1);
}
