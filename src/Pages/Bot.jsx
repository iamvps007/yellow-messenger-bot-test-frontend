import React, { Component } from 'react';
import { withRouter } from "react-router";

class Bot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            botId: '',
            error: '',
            dissable: false
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        let url = this.props.match.params.url;
        console.log(url)
        url = decodeURIComponent(escape(window.atob(url)))
        this.setState({
            url
        })
        document.title = `YM Bot ${id}`
        const script = document.createElement("script");
        script.innerHTML = `window.ymConfig = { bot: '${id}', host: 'https://app.yellow.ai', view: 'compact' };  (function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();`
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        const id =  this.state.id
        return (<>
            <div style={{backgroundImage:`url(${id})`,backgroundRepeat: "no-repeat",backgroundSize: "100% 100vh;"}}></div>
        </>
        );
    }
}

export default withRouter(Bot);
