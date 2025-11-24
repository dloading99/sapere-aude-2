import './styles/base.css';
import './styles/tokens.css';

import Alpine from 'alpinejs';
import { studyMethodApp } from './app/studyMethodApp.js';

window.Alpine = Alpine;
Alpine.data('studyMethodApp', studyMethodApp);

Alpine.start();
