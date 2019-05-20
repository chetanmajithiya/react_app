import React from 'react';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Deals extends React.Component {

    state = {
        Drawer: false,
        labelWidth: 0,
        title: '',
        vendors: '',
        price: '',
        requiretime: '',
        status: '',
        payment: '',
        allDeals: [
            {
                title: 'Feather River 36 in. x 80 in',
                vendor: 'Asoft',
                price: '585',
                requiretime: '7 Day',
                status: 'In Progress',
                payment: 'Paid'
            },
            {
                title: 'Builders Choice 36 in. x 80 in',
                vendor: 'D-Design',
                price: '430',
                requiretime: '3 Day',
                status: 'Complete',
                payment: 'Pending'
            },
            {
                title: 'Feather River 36 in. x 80 in',
                vendor: 'Soft-World',
                price: '983',
                requiretime: '5 Day',
                status: 'In Progress',
                payment: 'Paid'
            },
            {
                title: 'JELD-WEN Statement Collection Customizable',
                vendor: 'Asoft',
                price: '350',
                requiretime: '2 Day',
                status: 'Complete',
                payment: 'Pending'
            }
        ],
        Tabvalue: 0
    }
    closeDrawer = ()=> {
        this.setState({ Drawer: false });
    }
    openDrawer = ()=> {
        this.setState({ Drawer: true });
    }
    handleChangeSelect = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    CreatDeal = () => {
        this.setState({
            allDeals: [
                ...this.state.allDeals,
                {
                    title: this.state.title,
                    vendor:this.state.vendors,
                    price: this.state.price,
                    requiretime: this.state.requiretime,
                    status: this.state.status,
                    payment: this.state.payment
                }
            ]
        });
        this.closeDrawer();
        this.setState({
                    title: '',
                    vendors: '',
                    price: '',
                    requiretime: '',
                    status: '',
                    payment: ''
        });
    }
    handleChangeTab = (event, value) => {
        this.setState({ Tabvalue: value });
    };

    render() {
        return (
            <div>
                <h1>Deals</h1>



                <Button onClick={this.openDrawer} size="large" variant="contained" color="primary">
                    <Icon style={{fontSize: '20px', marginRight: '5px'}}>add_circle</Icon>
                    New Deal
                </Button> <br/><br/>

                <div style={{width: '70%', overflow: 'auto', borderRadius: '7px'}}>
                        <Table style={{width: '100%', backgroundColor: 'white'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Title</TableCell>
                                    <TableCell align="center">Vendor</TableCell>
                                    <TableCell align="center">Price ($)</TableCell>
                                    <TableCell align="center">Require Time</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Payment</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.allDeals.map((data, key) => (
                                        data.title === '' &&
                                        data.vendor === '' &&
                                        data.price === '' &&
                                        data.requiretime === '' &&
                                        data.status === '' &&
                                        data.payment === ''
                                    ) ? <div style={{display: 'none'}}/> : (

                                            <TableRow key={key}>
                                                <TableCell align="center">{data.title}</TableCell>
                                                <TableCell align="center">{data.vendor}</TableCell>
                                                <TableCell align="center">{data.price}</TableCell>
                                                <TableCell align="center">{data.requiretime}</TableCell>
                                                <TableCell align="center" style={(data.status === 'Complete' ? {color: 'green'} : {color: 'blue'})}>{data.status}</TableCell>
                                                <TableCell align="center" style={(data.payment === 'Paid' ? {color: 'green'} : {color: 'red'})}>{data.payment}</TableCell>
                                            </TableRow>

                                    ))
                                }
                            </TableBody>
                        </Table>
                </div>

                <div> {/*Tab View Start*/}

                <br/>
                    <Paper square
                           style={{
                               width: '400px'
                           }}>
                        <Tabs
                            value={this.state.Tabvalue}
                            onChange={this.handleChangeTab}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                        >
                            <Tab icon={<Icon>group</Icon>} label="Deals" />
                            <Tab icon={<Icon>poll</Icon>} label="Vendors" />
                        </Tabs>

                        <div>
                            {this.state.Tabvalue === 0 && (
                                <div style={{paddingBottom: '5px'}}>
                                    <h4 className="TabHeadValue"> contact@asoft.com </h4>
                                    <h4 className="TabHeadValue"> info@world.com </h4>
                                    <h4 className="TabHeadValue"> info@d-design.com </h4>
                                    <h4 className="TabHeadValue"> something@new.com </h4>
                                </div>
                            ) }
                            {this.state.Tabvalue === 1 && (
                                <div style={{paddingBottom: '5px'}}>
                                    <h4 className="TabHeadValue"> Asoft.com </h4>
                                    <h4 className="TabHeadValue"> World.com </h4>
                                    <h4 className="TabHeadValue"> D-design.com </h4>
                                    <h4 className="TabHeadValue"> Something </h4>
                                </div>
                            ) }
                            {this.state.Tabvalue === 2 && (<h1>2 hello</h1>) }
                        </div>
                    </Paper> <br/>
                </div> {/*Tab View End*/}

                <Drawer anchor="right" open={this.state.Drawer} onClose={this.closeDrawer}>
                    <div
                        tabIndex={0}
                        role="button">
                        <div className="DealDrawer" style={{backgroundColor: 'white'}}>

                            <form className="DealForm"  noValidate autoComplete="off">

                                <TextField
                                    label="Title"
                                    value={this.state.title}
                                    name="title"
                                    onChange={this.handleChangeSelect}
                                    margin="normal"
                                    variant="outlined"
                                    style={{width:'95%'}}
                                />
                                <br/> <br/>
                                <FormControl variant="outlined">
                                    <InputLabel
                                        htmlFor="outlined-age-simple">
                                        Vendor
                                    </InputLabel>
                                    <Select
                                        style={{width: '220px'}}
                                        value={this.state.vendors}
                                        onChange={this.handleChangeSelect}
                                        input={
                                            <OutlinedInput
                                                labelWidth={100}
                                                name="vendors"
                                                id="outlined-age-simple"
                                            />
                                        }>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Asoft'}>Asoft</MenuItem>
                                        <MenuItem value={'Soft-Word'}>Soft-World</MenuItem>
                                        <MenuItem value={'D-Designs'}>D-Designs</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    value={this.state.price}
                                    name="price"
                                    onChange={this.handleChangeSelect}
                                    label="$ Price"
                                    className="DealPriceText"
                                    variant="outlined"
                                /> <br/> <br/>

                                <TextField
                                    style={{width: '95%'}}
                                    id="standard-name"
                                    value={this.state.requiretime}
                                    name="requiretime"
                                    onChange={this.handleChangeSelect}
                                    label="Require time"
                                    variant="outlined"
                                /> <br/> <br/>

                                <FormControl variant="outlined">
                                    <InputLabel
                                        htmlFor="outlined-age-simple">
                                        Status
                                    </InputLabel>
                                    <Select
                                        style={{width: '300px'}}
                                        value={this.state.status}
                                        onChange={this.handleChangeSelect}
                                        input={
                                            <OutlinedInput
                                                labelWidth={100}
                                                name="status"
                                                id="outlined-age-simple"
                                            />
                                        }>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Complete'}>Complete</MenuItem>
                                        <MenuItem value={'In Progress'}>In Progress</MenuItem>
                                    </Select>
                                </FormControl> <br/> <br/>

                                <FormControl variant="outlined">
                                    <InputLabel
                                        htmlFor="outlined-age-simple">
                                        Payment
                                    </InputLabel>
                                    <Select
                                        style={{width: '300px'}}
                                        value={this.state.payment}
                                        onChange={this.handleChangeSelect}
                                        input={
                                            <OutlinedInput
                                                labelWidth={100}
                                                name="payment"
                                                id="outlined-age-simple"
                                            />
                                        }>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Paid'}>Paid</MenuItem>
                                        <MenuItem value={'Pending'}>Pending</MenuItem>
                                    </Select>
                                </FormControl> <br/><br/>

                                <Button onClick={this.CreatDeal} size="large" variant="contained" color="primary">
                                    <Icon style={{fontSize: '20px', marginRight: '5px'}}>add_circle</Icon>
                                    Make Deal
                                </Button>

                                <Button onClick={this.closeDrawer} size="large" variant="contained" color="secondary" style={{marginLeft: '20px'}}>
                                    <Icon style={{fontSize: '20px', marginRight: '5px'}}>cancel</Icon>
                                    Close
                                </Button>

                            </form>

                        </div>
                    </div>

                </Drawer>
            </div>
        )
    }
}

export default Deals