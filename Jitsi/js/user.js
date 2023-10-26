var interfaceConfig = {

    TOOLBAR_BUTTONS: [
        // 'microphone',
        // 'camera',
        // 'closedcaptions',
        // 'desktop',
        // 'fullscreen',
        // 'fodeviceselection',
        // 'hangup',                //SAlir
        // 'profile',
        // 'info',               //ver el link
        'chat',
        // 'recording',             //grabar
        // 'livestreaming',      //admin lo puede hacer
        // 'etherpad',
        // 'sharedvideo',        //admin lo puede hacer
        // 'settings',
        // 'raisehand',              //manito
        'videoquality',           //calidad de video
        // 'filmstrip',
        // 'invite',
        // 'feedback',
        // 'stats',
        // 'shortcuts',
        'tileview',
        // 'videobackgroundblur',
        // 'download',
        // 'help',
        // 'mute-everyone',    //administrador
        // 'e2ee'
    ],

    SETTINGS_SECTIONS: [
        'devices',
        'language',
        'moderator',
        'profile',
        // 'calendar'
    ],
    // MOBILE_APP_PROMO: false, // no android
    SHOW_CHROME_EXTENSION_BANNER: false
};

const domain = 'meet.jit.si';
const options = {
    roomName: 'WiwoTech',
    width: '100%',
    height: 500,
    parentNode: document.querySelector('#meet'),
    userInfo: {
        email: "user@gmail.com",
        displayName: "Usuario",
    },
    noSsl: true,
    interfaceConfigOverwrite: interfaceConfig,
};
const api = new JitsiMeetExternalAPI(domain, options);