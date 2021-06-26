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
        script.innerHTML = `window.ymConfig = { bot: '${id}', host: 'https://app.yellow.ai' };  (function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://app.yellowmessenger.com/widget/main.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();`
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (<>
            <iframe title="bot" src={this.state.url} scrolling="yes" border='0' style={{ border: "0px", margin: "0px", height: "100vh", overflow: "hidden" }} width="100%"></iframe>
        </>
        );
    }
}

export default withRouter(Bot);;
