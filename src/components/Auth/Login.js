import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'

class Login extends React.Component {
    state = {
        email:'',
        password:'',
        errors: '',
        loading: false
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    displayErrors = errors => errors.map((error, i)=><p key={i}>{error.message}</p>)

    isFormEmpty = ({username, email, password, passwordConfirmation})=>{
        return !username.length || !email.length || !password.length || !passwordConfirmation.length;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.isFormValid(this.state)){
            this.setState({errors: [], loading: true})
            console.log("form true")
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(signInUser => {
                    console.log(signInUser)
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        errors: this.state.errors.concat(err),
                        loading: false
                    })
                })
        }
    }
    isFormValid = ({email, password}) => {
        return (email && password)? true : false };
    
    render() {
        const {email, errors, loading} = this.state;
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' icon color='violet' textAlign='center'>
                        <Icon name='code branch' color="violet"/>
                        Login to DevChat
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            
                            <Form.Input 
                            fluid name="email" 
                            icon="mail" 
                            iconPosition="left" 
                            placeholder="Email Address" 
                            value={email} 
                            onChange={this.handleChange} 
                            type="email"
                            />
                            <Form.Input 
                            fluid name="password" 
                            icon="lock" 
                            iconPosition="left" 
                            placeholder="Password" 
                            onChange={this.handleChange} 
                            type="password"/>
                            
                            <Button disabled={loading} className={loading? 'loading':''} color="violet" fluid size="large">Submit</Button>
                        </Segment> 

                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Dont have an account? <Link to="/register">Register</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}
export default Login;