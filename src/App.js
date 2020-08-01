import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Form,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: '#40407A'
  },
  strat: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '36px',
    lineHeight: '54px',
    color:'white'
  },
  gg: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '27px',
    color: '#4EFF7F',
    fontWeight:900

  },
  navbar: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#FFFFFF'
  },
  button: {
    color: '#4EFF7F',
    background:' rgb(66,66,124)',
    border: '1px solid #4EFF7F',
    width: '9rem',
    height: '2.2rem',
    fontSize:'14px',
    borderRadius:'5px',
    fontWeight:400
  },
  whiteHeader: {
    color:'white',
    fontWeight: 900,
    fontSize: '36px'
  },
  greenHeader: {
    color:'#4EFF7F',
    fontWeight: 900,
    fontSize: '36px',
    lineHeight: '50px'
  },
  whiteSubHeader: {
    color:'white',
    fontWeight: 600,
    fontSize: '30px'
  },
  greenSubHeader: {
    color:'#4EFF7F',
    fontWeight: 600,
    fontSize: '30px',
    lineHeight: '40px'
  },
  content: {
    color:'white',
    fontWeight:600,
    fontSize:'20px',
    lineHeight:'32px'
  },
  box: {
    border: '1px solid rgba(255, 255, 255, 0.5)',
    maxWidth:'120px',
    maxHeight:'120px',
    padding:'15px'
  },
  boxContent: {
    color:'white',
    fontSize:'10px'
  },
  formHeader: {
    color:'white',
    fontWeight:500,
    fontSize:'18px'
  },
  formHeader2: {
    color:'white',
    fontWeight:500,
    fontSize:'18px',
    cursor:'pointer'
  },
  formHeader2Wrapper: {
    borderBottom:'1px solid silver',
    height:'50px',
    cursor:'pointer'
  },
  formHeaderWrapper: {
    borderBottom:'2px solid #4EFF7F',
    height:'50px',
    cursor:'pointer'
  }
});


class App extends React.Component {
  loginForm = () => {
    document.getElementById('formHeaderWrapper').style.cssText = 'border-bottom:1px solid silver';
    document.getElementById('formHeader2Wrapper').style.cssText = 'border-bottom:2px solid #4EFF7F';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
  }
  signupForm = () => {
    document.getElementById('formHeader2Wrapper').style.cssText = 'border-bottom:1px solid silver';
    document.getElementById('formHeaderWrapper').style.cssText = 'border-bottom:2px solid #4EFF7F';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
  }
  render() {
    
     
    const { classes } = this.props

    return (
      <div className="App"> 
        <Grid container xs={12} direction="row" align='center'>
          {/*Header */}
          <Grid container xs={12}  className={classes.header} style={{padding:'20px'}}>
            <Grid container xs={1}/>
            <Grid container lg={4} md={4} sm={4} xs={12} id="title" className={classes.title}>
              <Typography style={{cursor:'pointer'}}>
                <span className={classes.strat}>STRAT</span><span className={classes.gg}>.GG</span>
              </Typography>
            </Grid>
            <Grid container lg={3} md={3} sm={3} xs={0}/>
            <Grid container xs={12} sm={4} md={4} lg={4}>
              <Grid container xs={12} id="navWrapper">
                <Grid container xs={4} style={{alignItems:'center'}}>
                  <Typography className={classes.navbar}><a style={{color:'white'}} href="#">HOME</a></Typography>
                </Grid>
                <Grid container xs={4} id="about" style={{alignItems:'center'}}>
                  <Typography className={classes.navbar}><a style={{color:'white'}} href="#">ABOUT</a></Typography>
                </Grid>
                <Grid container id="contact" xs={4} style={{alignItems:'center'}}>
                  <Typography className={classes.navbar}><a style={{color:'white'}} href="#">CONTACT</a></Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} id="background" style={{alignContent:'flex-start'}}>
            <Grid container lg={1} md={1} sm={1} xs={0}/>
            <Grid container lg={4} md={4} sm={4} xs={12} id="headerContent" style={{marginTop:'8rem'}}>
              <Grid item lg={12} xs={12} id="mainHeader" align='left' style={{}}>
                <span className={classes.whiteHeader}>JOIN THE</span><span className={classes.greenHeader}>{" LARGEST"}</span>
                <br/>
                <span className={classes.whiteSubHeader}>platform of</span><span className={classes.greenSubHeader}>{" Gamers"}</span>
              </Grid>
              <Grid container xs={12} style={{marginTop:'6rem'}} id="boxes">
                <Grid item xs={12} align='left' style={{}}>
                  <span className={classes.content}>Connect, watch, and befriend</span>
                </Grid>
                <Grid container xs={10} id="boxWrapper"  justify="space-between" style={{marginTop:'3rem',maxWidth:'400px',minWidth:'350px'}}>
                  <Grid container xs={4} md={4} sm={12} className={classes.box}>
                    <Grid item xs={12}>
                      <img width="20" src={(require('./assets/iconperson.png'))}/>
                    </Grid>
                    <Grid item xs={12}>
                      <span style={{color:"white"}}>24,985</span>
                    </Grid>
                    <Grid item xs={12}>
                      <span className={classes.boxContent}>Gamers</span>
                    </Grid>
                  </Grid>
                  <Grid container xs={4} className={classes.box}>
                    <Grid item xs={12}>
                      <img width="20" src={(require('./assets/iconperson.png'))}/>
                    </Grid>
                    <Grid item xs={12}>
                      <span style={{color:"white"}}>1,748</span>
                    </Grid>
                    <Grid item xs={12}>
                      <span className={classes.boxContent}>Streamers</span>
                    </Grid>
                  </Grid>
                  <Grid container xs={4} className={classes.box}>
                    <Grid item xs={12}>
                      <img width="20" src={(require('./assets/iconperson.png'))}/>
                    </Grid>
                    <Grid item xs={12}>
                      <span style={{color:"white"}}>965</span>
                    </Grid>
                    <Grid item xs={12}>
                      <span className={classes.boxContent}>Professionals</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container lg={3} md={3} sm={3} xs={0} />
            <Grid container lg={4} md={4} sm={4} xs={12}>
              <Grid container xs={9} id="formWrapper" style={{marginTop:'8rem',height:'250px'}}>
                <Grid item xs={6} className={classes.formHeaderWrapper} id="formHeaderWrapper" onClick={() => {this.signupForm();}}>
                  <span className={classes.formHeader2} >Sign up</span>
                </Grid>
                <Grid item xs={6} className={classes.formHeader2Wrapper} id="formHeader2Wrapper" onClick={() => {this.loginForm();}}>
                  <span className={classes.formHeader2}>Login</span>
                </Grid>
                <Grid container xs={12} id="signupForm">
                <Grid item xs={12} style={{marginTop:'3rem'}}>
                <div style={{backgroundColor: 'rgb(66,66,124)'}}>
                  <Form>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    
                    <Col xs="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconperson.png')}/>
                    </Col>
                    <Col xs="11" id="textfield" style={{marginLeft:'.5rem'}}>
                      <Form.Control type="text" placeholder="Username"/>
                     
                    </Col>
                    
                  </Form.Group>
                  </Form>
                </div>
                </Grid>
                <Grid item xs={12}>
                <div style={{backgroundColor: 'rgb(66,66,124)'}}>
                  <Form>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    
                    <Col xs="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconemail.png')}/>
                    </Col>
                    <Col xs="11" id="textfield"  style={{marginLeft:'.5rem'}}>
                      <Form.Control type="email" placeholder="email"/>
                     
                    </Col>
                    
                  </Form.Group>
                  </Form>
                </div>
                </Grid>
                <Grid item xs={12}>
                <div style={{backgroundColor: 'rgb(66,66,124)'}}>
                  <Form>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    
                    <Col xs="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconpass.png')}/>
                    </Col>
                    <Col xs="11" id="textfield"  style={{marginLeft:'.5rem'}}>
                      <Form.Control type="password" placeholder="password"/>
                     
                    </Col>
                    
                  </Form.Group>
                  </Form>
                </div>
                </Grid>
                <Grid item xs={12}>
                <div style={{backgroundColor: 'rgb(66,66,124)'}}>
                  <Form>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    
                    <Col xs="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconpass.png')}/>
                    </Col>
                    <Col xs="11" id="textfield"  style={{marginLeft:'.5rem'}}>
                      <Form.Control type="password" placeholder="Confirm Password"/>
                     
                    </Col>
                    
                  </Form.Group>
                  </Form>
                </div>
                </Grid>
                
                <Grid item xs={12} align='right' style={{marginTop:'1rem'}}>   
                  <button className={classes.button}>REGISTER</button>
                </Grid>
                </Grid>
                <Grid container xs={12} id="loginForm" style={{display:"none"}}>
                <Grid item xs={12} style={{marginTop:'3rem'}}>
                <div style={{backgroundColor: 'rgb(66,66,124)'}}>
                  <Form>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    
                    <Col xs="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconperson.png')}/>
                    </Col>
                    <Col xs="11" id="textfield"  style={{marginLeft:'.5rem'}}>
                      <Form.Control type="text" placeholder="Username"/>
                     
                    </Col>
                    
                  </Form.Group>
                  </Form>
                </div>
                </Grid>
                <Grid item xs={12}>
                <div style={{backgroundColor: 'rgb(66,66,124)'}}>
                  <Form>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    
                    <Col xs="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconpass.png')}/>
                    </Col>
                    <Col xs="11" id="textfield"  style={{marginLeft:'.5rem'}}>
                      <Form.Control type="password" placeholder="password"/>
                     
                    </Col>
                    
                  </Form.Group>
                  </Form>
                </div>
                </Grid>
                
                <Grid item xs={12} align='right' style={{marginTop:'1rem'}}>   
                  <button className={classes.button}>LOGIN</button>
                </Grid>
                </Grid>
              </Grid>  
            </Grid> 
            
              
          </Grid>
        </Grid>
       
     
      </div>
    );
  }
}

export default withStyles(styles)(App);
