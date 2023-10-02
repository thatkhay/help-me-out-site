// import React, { useState, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// function ThreeDModel() {
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load('/3dimg.glb', (gltf) => {
//       setModel(gltf.scene);
//       gltf.scene.scale.set(2, 2, 2);
//     });
//   }, []);

//   return (
//     <Canvas style={{ height: '15rem', width: '10rem' }}>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       {model && <primitive object={model} />}
//     </Canvas>
//   );
// }

// export default ThreeDModel;
