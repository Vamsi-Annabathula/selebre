import banner from './assests/images/banner.jpg';
import bg from './assests/images/bg3.jpg';

export default (theme) => ({
    app: {
        textAlign: 'center',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        fontSize: 'calc(10px + 2vmin)'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundImage: `url(${banner})`
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    // container:{
    //     margin: 30
    // }
})