import button from './button';
import card from './card';
import confirmpopup from './confirmpopup';
import dialog from './dialog';
import divider from './divider';
import dropdown from './dropdown';
import global from './global';
import inplace from './inplace';
import inputgroup from './inputgroup';
import inputmask from './inputmask';
import inputnumber from './inputnumber';
import inputtext from './inputtext';
import message from './message';
import overlaypanel from './overlaypanel';
import paginator from './paginator';
import panel from './panel';
import password from './password';
import progressbar from './progressbar';
import progressspinner from './progressspinner';
import rating from './rating';
import ripple from './ripple';
import scrollpanel from './scrollpanel';
import scrolltop from './scrolltop';
import selectbutton from './selectbutton';
import sidebar from './sidebar';
import skeleton from './skeleton';
import textarea from './textarea';
import toast from './toast';
import togglebutton from './togglebutton';
import tooltip from './tooltip';

export default {
    global,
    directives: {
        ripple,
        tooltip
    },

    //forms

    dropdown,
    inputnumber,
    inputtext,
    selectbutton,
    rating,
    togglebutton,
    inputgroup,
    inputmask,

    textarea,
    password,

    //buttons
    button,


    //data
    paginator,

    //panels
    panel,
    card,
    divider,
    toolbar,
    scrollpanel,
    overlaypanel,




    menubar,


    //overlays
    dialog,
    sidebar,
    confirmpopup,

    //messages
    message,
    toast,


    //misc

    progressbar,
    skeleton,
    scrolltop,
    inplace,
    progressspinner
};
