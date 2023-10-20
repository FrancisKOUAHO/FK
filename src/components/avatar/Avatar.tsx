import {useGLTF} from "@react-three/drei";

const Avatar = (props: any) => {
    const avatar: any = useGLTF("/65290bb77abcdfa5c77afc3a.glb");
    return (
        <group {...props} dispose={null}>
            <primitive object={avatar.avatar.nodes.Hips}/>
            <skinnedMesh
                name="EyeLeft"
                geometry={avatar.nodes.EyeLeft.geometry}
                material={avatar.materials.Wolf3D_Eye}
                skeleton={avatar.nodes.EyeLeft.skeleton}
                morphTargetDictionary={avatar.nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={avatar.nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={avatar.nodes.EyeRight.geometry}
                material={avatar.materials.Wolf3D_Eye}
                skeleton={avatar.nodes.EyeRight.skeleton}
                morphTargetDictionary={avatar.nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={avatar.nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={avatar.nodes.Wolf3D_Head.geometry}
                material={avatar.materials.Wolf3D_Skin}
                skeleton={avatar.nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={avatar.nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={avatar.nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={avatar.nodes.Wolf3D_Teeth.geometry}
                material={avatar.materials.Wolf3D_Teeth}
                skeleton={avatar.nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={avatar.nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={avatar.nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={avatar.nodes.Wolf3D_Glasses.geometry}
                material={avatar.materials.Wolf3D_Glasses}
                skeleton={avatar.nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                name="Wolf3D_Outfit_Top"
                geometry={avatar.nodes.Wolf3D_Outfit_Top.geometry}
                material={avatar.materials.Wolf3D_Outfit_Top}
                skeleton={avatar.nodes.Wolf3D_Outfit_Top.skeleton}
                morphTargetDictionary={avatar.nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
                morphTargetInfluences={avatar.nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Outfit_Bottom"
                geometry={avatar.nodes.Wolf3D_Outfit_Bottom.geometry}
                material={avatar.materials.Wolf3D_Outfit_Bottom}
                skeleton={avatar.nodes.Wolf3D_Outfit_Bottom.skeleton}
                morphTargetDictionary={avatar.nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
                morphTargetInfluences={avatar.nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Outfit_Footwear"
                geometry={avatar.nodes.Wolf3D_Outfit_Footwear.geometry}
                material={avatar.materials.Wolf3D_Outfit_Footwear}
                skeleton={avatar.nodes.Wolf3D_Outfit_Footwear.skeleton}
                morphTargetDictionary={
                    avatar.nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
                }
                morphTargetInfluences={
                    avatar.nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
                }
            />
            <skinnedMesh
                name="Wolf3D_Body"
                geometry={avatar.nodes.Wolf3D_Body.geometry}
                material={avatar.materials.Wolf3D_Body}
                skeleton={avatar.nodes.Wolf3D_Body.skeleton}
                morphTargetDictionary={avatar.nodes.Wolf3D_Body.morphTargetDictionary}
                morphTargetInfluences={avatar.nodes.Wolf3D_Body.morphTargetInfluences}
            />
        </group>
    );
}

useGLTF.preload("/65290bb77abcdfa5c77afc3a.glb");


export default Avatar;
