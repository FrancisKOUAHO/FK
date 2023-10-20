import {ContactShadows, Environment} from "@react-three/drei";
import Avatar from "../avatar/Avatar.tsx";

const Experience = () => {

    return (
        <>
            <Environment preset="sunset"/>
            <Avatar/>
            <ContactShadows opacity={0.7}/>
        </>
    );
};

export default Experience;