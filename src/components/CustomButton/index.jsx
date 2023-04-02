import { Button } from "@chakra-ui/react";

export default function CustomButton(props){
    return(
        <Button {...props} variant="dsButton">{props.children}</Button>
    )
}