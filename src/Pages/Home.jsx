import React, { Component } from 'react';
import BackgroundImage from "./background.svg"
import validator from 'validator'
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            botId: '',
            error: '',
            buttonMsg: 'CREATE',
            dissable: false,
            redirect : false,
            token:'',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state)
        })

    }

    handEvent = async () => {
        localStorage.clear()

        let { url, botId } = this.state;
        this.setState({
            dissable: true,
            buttonMsg: 'PLEASE WAIT'
        })
        if (validator.isURL(url) && botId) {
             url = window.btoa(unescape(encodeURIComponent( url )))
                    window.location.replace(`/bot/${botId}/${url}`);
            this.setState({
                error: ''
            })
        } else {
            this.setState({
                dissable: false,
                buttonMsg: 'TRY AGAIN',
                error: "Please enter valid BOT ID or URL"
            })
        }
    }


    componentDidMount() {
        localStorage.clear()
        document.title = "YM Bot Testing"
        document.body.style.backgroundImage = `url(${BackgroundImage})`
    }

    render() {
        return (<>
            <div style={{ top: "50%", left: "50%", position: "absolute", transform: "translate(-50%,-50%)", width: "200px", backgroundColor: "white", boxShadow: "1px 2px 1px grey", borderRadius: "6px", padding: "20px", textAlign: "center" }} className="">
                <img src="https://yellow.ai/images/Logo.svg" alt="yellow.ai" />
                <p>BOT TESTING</p>
                <input style={{ borderRadius: "6px", border: "1px solid rgb(146 146 146)", backgroundColor: "", color: "grey", fontSize: "15px", width: "90%", padding: "6px" }} placeholder="Bot ID" type="text" name="botId" onChange={this.handleChange} />
                <input style={{ marginTop: "20px", borderRadius: "6px", border: "1px solid rgb(146 146 146)", backgroundColor: "", fontSize: "15px", width: "90%", padding: "6px" }} placeholder="Image URL" type="text" name="url" onChange={this.handleChange} />
                {this.state.error && <small style={{ color: "red", textAlign: "left" }}>{this.state.error}</small>}
                <br />
                <button disabled={this.state.dissable} onClick={() => this.handEvent()} style={{ width: "100%", backgroundColor: "yellow", border: "none", padding: "8px", borderRadius: "6px", marginTop: "20px" }}>{this.state.buttonMsg}</button>
            </div>
        </>
        );
    }
}

export default Home;
