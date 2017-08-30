import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import { FormLabel, FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';

function TabContainer(props) {
    return (
        <div style={{ padding: 20 }}>
            {props.children}
        </div>
    );
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3,
        width: 500,
        justify: 'center',
        align: 'center',
    },
});

class CenteredTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Paper className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="해외여행" />
                        <Tab label="국내/제주여행" />
                        <Tab label="숙박" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                <TabContainer>
                    <FormLabel component="label">상품종류</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedA"
                                />
                            }
                            label="전체"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedA"
                                />
                            }
                            label="패키지여행"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedA"
                                />
                            }
                            label="자유여행"
                        />
                        <Button raised color="primary">
                            검색
                        </Button>
                    </FormGroup>
                </TabContainer>}
                {value === 1 &&
                <TabContainer>
                    {'Item Two'}
                </TabContainer>}
                {value === 2 &&
                <TabContainer>
                    {'Item Three'}
                </TabContainer>}
            </Paper>
        );
    }
}

CenteredTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);