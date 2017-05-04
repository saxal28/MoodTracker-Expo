import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Button, Icon, Header, Title, Left, Right, Body, Tabs, Tab, ScrollableTab } from 'native-base';

const TabbedNavbar = ({ title, children }) => {
    return (
        <Container>
            <Header 
                hasTabs 
                style={{backgroundColor: "#333"}}
                iosBarStyle="light-content"
                tabStyle={{backgroundColor:"lime"}}
                
            >
                <Left>
                    <Button transparent onPress={() => Actions.home()}>
                        <Icon name='home' style={{color: 'white'}}/>
                    </Button>
                </Left>
                    <Body>
                        <Title style={{color: 'white'}}>{title}</Title>
                    </Body>
                <Right />
            </Header>
            <Tabs activeTabStyle={{backgroundColor:"firebrick"}}>
               {children}
            </Tabs>
        </Container>
    )
}

export { TabbedNavbar };