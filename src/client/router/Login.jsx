import React from 'react'
import { Player, BigPlayButton, ControlBar } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import Dropzone from 'react-dropzone';
import request from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="login-container">
        <div className="video-div">
          <Player className="video" muted={true} autoPlay={true} startTime="40" >

            {/*  https://vimeo.com/221171310 is the link of the video. the start time for the video is 40 */}
            <source src="https://my.mixtape.moe/dcavro.mp4" />
            <BigPlayButton position="center" />
            <ControlBar autoHide={true} disableCompletely={true} />

          </Player>

        </div>


        {!this.props.parentState.isAuthenticated
          ? <div className='form-login'>
            <div className='form-inner'>
              <form onSubmit={this.props.handleLoginSubmit} >
                <div className='user-pass'>
                  <input className="login-text" placeholder="user name" type="text" value={this.props.username} onChange={this.props.handleUsername} />
                  <input className="login-text" placeholder="password" type="password" value={this.props.password} onChange={this.props.handlePassword} />
                </div>
                <div className='sumbit'><input className="login-submit" type="submit" value="Submit" /></div>
                {/* <div className='sumbit'><a className="login-submit" href="http://localhost:3000/googleOauth">Login with Google</a></div>
                <div className='sumbit'><a className="login-submit" href="http://localhost:3000/FBOauth">Login with Facebook</a></div> */}
              </form>
              <div className='sumbit'><button className="login-submit" onClick={this.props.handleOASubmit} value="Google" />GOOGLE</div>
              <div className='sumbit'><button className="login-submit" onClick={this.props.handleFBOASubmit} value="Facebook"/>FACEBOOK</div>

            </div>
          </div>
          : <div className="success-login">
            <div className="welcome-text">Welcome Back</div>
            <div className="welcome-user">{this.props.parentState.username}</div>
          </div>
        }

      </div>
    )
  }
}


export default Login;