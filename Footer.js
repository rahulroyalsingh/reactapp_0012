import React from 'react';

const Footer = (props) => {
    console.log('in footer', props)

    return (
        <React.Fragment>

            <hr />
            <center>
                <h3>@bottom bar of app{props.year} {props.month}</h3>
 
            </center>
        </React.Fragment>

    )
}
export default Footer;