import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class Todo extends Component {
    state={
        Title:"",
        Description:"",
        date:"",
        remark:""
    }
    onSubmit=()=>
    {
        console.log(this.state)
    }
    onRead=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div>
                <Typography align="center" color="secondary">Todo App</Typography>
                <TextField 
                variant="outlined"
                margin="normal"
                fullWidth
                required
                type="text"
                label="Title"
                name="Title"
                onChange={this.onRead}
                />

                <TextField 
                variant="outlined"
                fullWidth
                required
                margin="normal"
                label="Description"
                type="text"
                name="Description"
                onChange={this.onRead}
                />

                <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Date"
                name="date"
                type="date"
                onChange={this.onRead}
                />

                <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                label="Remarks"
                name="remark"
                onChange={this.onRead}
                />

                <Button variant="contained"
                margin="normal"
                type="button"
                color="inherit"
                fullWidth
                required
                onClick={this.onSubmit}
                >Submit</Button>
                
            </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
                
            </Grid>
        )
    }
}
