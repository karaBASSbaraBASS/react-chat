import React from 'react';
import firebase from '../../firebase';
import {connect} from 'react-redux';
import {Grid, Header, Icon, Dropdown, Image} from 'semantic-ui-react';
// import { spawn } from 'child_process';

class UserPanel extends React.Component {

    state = {
        user: this.props.currentUser
    }

    // old desigion
    // componentDidMount(){
    //     this.setState({ user: this.props.currentUser})
    // }
    // return -> <strong>{this.state.user && this.state.user.displayName}</strong>

    // old desigion2
    // componentWillReceiveProps(nextProps) {
    //     this.setState({ user: nextProps.currentUser });
    // }


    dropdownOptions = () =>[
        {
            key: "user",
            text: <span>Signed in as <strong>{this.state.user.displayName}</strong></span>,
            disabled: true
        },
        {
            key: "avatar",
            text: <span>Change Avatar</span>
        },
        {
            key: "signout",
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ]

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log("signed out!"));
    }
     
    render() {
        console.log(this.props.currentUser)
        const { user } = this.state;

        return (
            <Grid style={{ background:'#4c3c4c'}}>
                <Grid.Column>
                    {/* App header */}
                    <Grid.Row style={{padding:'1.2em', margin:0}}>
                        <Header
                            inverted
                            floated="left"
                            as="h2"
                        >
                            <Icon name="code"/>
                            <Header.Content>
                                DevChat
                            </Header.Content>
                        </Header>
                    
                    {/* App header end*/}
                    {/* User Dropdoen*/}
                        <Header 
                            style={{ padding: '0.25em'}}
                            as="h4"
                            inverted
                        >
                            <Dropdown
                                trigger={ 
                                    <span>
                                        <Image scr={user.photoURL} spaced="right" avatar/>
                                        {user.displayName}
                                    </span> }
                                options={ this.dropdownOptions() }
                            />
                        </Header>
                    </Grid.Row>
                    {/* User Dropdoen end*/}
                </Grid.Column>
            </Grid>
        )
    }
}

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })
// export default connect(mapStateToProps)(UserPanel);

export default UserPanel;