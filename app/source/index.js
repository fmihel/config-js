import '../template/define.css';
import '../template/main.css';
import { client } from './page-reload';

client({ port: 3000 });
$(() => {
    console.log('Hello');
    console.log('ws', ws);
    $('#page').text('Javasript simple project...');
});
