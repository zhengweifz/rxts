import { contentConsumer } from './contentConsumer';
import { contentProvider } from './contentProvider';

let provider = new contentProvider;
let consumer = new contentConsumer(provider);

consumer.logData('create');
