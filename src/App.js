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
  }
});
class App extends React.Component {
  
  render() {
    const { classes } = this.props

    return (
      <div className="App"> 
        <Grid container xs={12} align='center'>
          {/*Header */}
          <Grid container xs={12}  className={classes.header} style={{padding:'20px'}}>
            <Grid container xs={1}/>
            <Grid container xs={4} className={classes.title}>
              <Typography>
                <span className={classes.strat}>STRAT</span><span className={classes.gg}>.GG</span>
              </Typography>
            </Grid>
            <Grid container xs={3}/>
            <Grid container xs={4}>
              <Grid container xs={12}>
                <Grid container xs={4} style={{alignItems:'center'}}>
                  <Typography className={classes.navbar}>HOME</Typography>
                </Grid>
                <Grid container xs={4} style={{alignItems:'center'}}>
                  <Typography className={classes.navbar}>ABOUT</Typography>
                </Grid>
                <Grid container xs={4} style={{alignItems:'center'}}>
                  <Typography className={classes.navbar}>CONTACT</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={12} id="background">
            <Grid item xs={1}/>
            <Grid container xs={4} style={{marginTop:'8rem'}}>
              <Grid item xs={12} align='left' style={{height:'50px'}}>
                <span style={{color:'white',fontWeight: 900,fontSize: '42px'}}>JOIN THE</span><span style={{color:'#4EFF7F',fontWeight: 900,fontSize: '42px',lineHeight: '50px'}}>{" LARGEST"}</span>
                <br/>
                <span style={{color:'white',fontWeight: 900,fontSize: '30px'}}>platform of</span><span style={{color:'#4EFF7F',fontWeight: 900,fontSize: '30px',lineHeight: '40px'}}>{" Gamers"}</span>
              </Grid>
              <Grid item xs={12} align='left' style={{height:'50px'}}>
                <span style={{color:'white',fontWeight:600,fontSize:'20px',lineHeight:'32px'}}>Connect, watch, and befriend</span>
              </Grid>
              <Grid container xs={10}  justify="space-between" style={{marginTop:'-7rem'}}>
                <Grid container xs={4} style={{border: '1px solid rgba(255, 255, 255, 0.5)',maxWidth:'120px',maxHeight:'120px',padding:'15px'}}>
                  <Grid item xs={12}>
                    <img width="20" src={(require('./assets/iconperson.png'))}/>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{color:"white"}}>24,985</span>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{color:'white',fontSize:'10px'}}>Gamers</span>
                  </Grid>
                </Grid>
                <Grid container xs={4} style={{border: '1px solid rgba(255, 255, 255, 0.5)',maxWidth:'120px',maxHeight:'120px',padding:'15px'}}>
                  <Grid item xs={12}>
                    <img width="20" src={(require('./assets/iconperson.png'))}/>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{color:"white"}}>1,748</span>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{color:'white',fontSize:'10px'}}>Streamers</span>
                  </Grid>
                </Grid>
                <Grid container xs={4} style={{border: '1px solid rgba(255, 255, 255, 0.5)',maxWidth:'120px',maxHeight:'120px',padding:'15px'}}>
                  <Grid item xs={12}>
                    <img width="20" src={(require('./assets/iconperson.png'))}/>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{color:"white"}}>965</span>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{color:'white',fontSize:'10px'}}>Professionals</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={3}/>
            <Grid container xs={4}>
              <Grid container xs={8} style={{marginTop:'5rem',height:'250px'}}>
                <Grid item xs={6} style={{borderBottom:'2px solid #4EFF7F',height:'50px'}}>
                  <span style={{color:'white',fontWeight:500,fontSize:'18px'}}>Sign up</span>
                </Grid>
                <Grid item xs={6} style={{borderBottom:'1px solid silver',height:'50px'}}>
                  <span style={{color:'white',fontWeight:500,fontSize:'18px'}}>Login</span>
                </Grid>
                <Grid item xs={12} style={{marginTop:'3rem'}}>
                <div style={{backgroundColor: 'rgb(66,66,124)'}}>
                  <Form>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    
                    <Col sm="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconperson.png')}/>
                    </Col>
                    <Col style={{marginLeft:'.5rem'}}>
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
                    
                    <Col sm="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconemail.png')}/>
                    </Col>
                    <Col style={{marginLeft:'.5rem'}}>
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
                    
                    <Col sm="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconpass.png')}/>
                    </Col>
                    <Col style={{marginLeft:'.5rem'}}>
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
                    
                    <Col sm="1" style={{marginTop:'.4rem',marginLeft:'1rem'}}>
                    <img width="15" src={require('./assets/iconpass.png')}/>
                    </Col>
                    <Col style={{marginLeft:'.5rem'}}>
                      <Form.Control type="password" placeholder="Confirm Password"/>
                     
                    </Col>
                    
                  </Form.Group>
                  </Form>
                </div>
                </Grid>
                <Grid item xs={12} align='right' style={{marginTop:'1rem'}}>   
                  <button style={{color: '#4EFF7F',background:' rgb(66,66,124)',border: '1px solid #4EFF7F',width: '9rem',height: '2.2rem',fontSize:'14px',borderRadius:'5px',fontWeight:400}}>REGISTER</button>
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
