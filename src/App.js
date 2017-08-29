import React, {Component} from 'react';
import CenteredTabs from './components/CenteredTabs';
import Grid from 'material-ui/Grid';

class App extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                        <CenteredTabs />
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
