import './template/define.css';
import './template/main.css';

$(() => {
    const text = 'Javasript simple project.';
    console.log(text);
    $('#page').prepend(`${text}<br><br>`);

    $('#one').on('click', () => {
        console.info('click on #one');
    });

    $('#two').on('click', () => {
        console.info('click on #two');
    });

    $('#three').on('click', () => {
        console.info('click on #three 2');
    });
});
