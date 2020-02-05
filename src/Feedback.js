import React, { Component } from 'react';
import { Header, Accordion, Icon, Grid, Image, Segment } from "semantic-ui-react";

export default class Feedback extends Component {
    state = {
        activeIndex: 0
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }

    render() {
        const { activeIndex } = this.state;
        return(
            <div className="App">
            <br></br>
            <Image src='https://storage.cloud.google.com/dt20-4/assets/logo.svg' centered></Image>
            <Header as="h2">Thank you for your visit!</Header>
            <br></br>
            <Accordion >
                <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    Order Info
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Image 
                                src='https://www.panerabread.com/foundation/menu/grid/chicken-teriyaki-bowl.jpg.transform/foundation-retail-menu-placard-desktop-2x/image.20200204.jpg'
                                size={"small"}
                                />
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                    <p>
                        There are many breeds of dogs. Each breed varies in size and
                        temperament. Owners often select a breed of dog that they find to be
                        compatible with their own lifestyle and desires from a companion.
                    </p>
                </Accordion.Content>
            </Accordion>
            </div>
        );
    }

}