try {
    require('electron-reloader')(module);
    require('./index');
} catch (_) {}