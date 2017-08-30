import React, {Component} from 'react';
import CenteredTabs from './components/CenteredTabs';
import RecipeReviewCard from './components/RecipeReviewCard';
import Grid from 'material-ui/Grid';

class App extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid>
                            <CenteredTabs />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item>
                            <RecipeReviewCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        );
    }
}

export default App;
