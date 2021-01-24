import React, { Props } from "react";
import {
    Reveal, Container,
  } from "semantic-ui-react";

export interface SquareProps {
    size: string;
    className: string;
    children?: any;
}

// const useStyles = makeStyles(theme => ({
//     socialMediaButton: {
//         margin: "4px",
//     },
// }));

export default function YellowSquare(props: SquareProps) {
    // const classes = useStyles();
    return (
        <Container className={props.className}>
        <svg width={props.size} height={props.size} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect  x="0" y="0" width={props.size} height={props.size} stroke="#ffde32" fill=" #ffde32" stroke-width="5"/>
        </svg>
        </Container>
    );
}
