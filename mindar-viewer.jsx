import React, { useState, useEffect, useRef } from 'react';
import 'aframe';
import 'aframe-extras';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import TargetTracking from './TargetTracking';


const styles = {
	container: {
		position: 'relative',
		width: '100%',
		height: '100%',
	},
};

export default function MindARViewer() {
	const sceneRef = useRef(null);


	return (
		<div style={styles.container}>
			<TargetTracking sceneRef={sceneRef} />

			<a-scene
				ref={sceneRef}
				log
				mindar-image="imageTargetSrc: assets/official.mind; maxTrack:7; uiScanning:no; filterMinCF:0.0001; filterBeta: 0.001;id:imageTarget"
				color-space="sRGB"
				renderer="colorManagement: true, physicallyCorrectLights"
				vr-mode-ui="enabled: false"
				device-orientation-permission-ui="enabled: false"
			>
				<a-assets>
					<a-asset-item
						id="anim1"
						src="models/AAH_step01.glb"
					></a-asset-item>
					<a-asset-item
						id="anim2"
						src="models/AAH_step02.glb"
					></a-asset-item>
					<a-asset-item
						id="anim4"
						src="models/AAH_step04.glb"
					></a-asset-item>
					<a-asset-item
						id="anim5"
						src="models/AAH_step05.glb"
					></a-asset-item>
					<a-asset-item
						id="anim6"
						src="models/AAH_step06.glb"
					></a-asset-item>
					{/* <a-asset-item
						id="roomModel"
						src="models/darkroom_noceilling01.glb"
					></a-asset-item> */}
					<a-asset-item
						id="cameraModel"
						src="models/AAH_camera.glb"
					></a-asset-item>
					{/* <a-asset-item id="newCamModel" src="models/demo_camerabacking.glb"></a-asset-item> */}
					<a-asset-item
						id="cupModel"
						src="models/demo_graduatedcylinder.glb"
					></a-asset-item>
					<a-asset-item
						id="contactModel"
						src="models/demo_contactprintingeasel.glb"
					></a-asset-item>
					<a-asset-item
						id="tankModel"
						src="models/demo_developingtank.glb"
					></a-asset-item>
					<a-asset-item
						id="trayModel"
						src="models/demo_tray.glb"
					></a-asset-item>
					<a-asset-item
						id="spoonModel"
						src="models/demo_woodenspoon.glb"
					></a-asset-item>
				</a-assets>

				<a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

				{/* Room Model */}
				<a-entity mindar-image-target="targetIndex: 0">
					{/* <a-gltf-model
					rotation="80 0 0"
					position="0 4.9 -7.2"
					scale="0.05 0.05 0.05"
					src="#roomModel"
					animation-mixer
				></a-gltf-model> */}
					<a-gltf-model
						rotation="80 0 0"
						position="0 1.4 0.05"
						scale="0.04 0.04 0.04"
						src="#anim1"
						animation-mixer
					></a-gltf-model>
				</a-entity>

				{/* Camera Model */}
				<a-entity id="example-target" mindar-image-target="targetIndex: 1">
					<a-gltf-model
						rotation="5 95 90"
						position="-1.5 3.15 -2.0"
						scale="0.038 0.038 0.038"
						src="#cameraModel"
						visible="false"
						animation-mixer
					></a-gltf-model>
					<a-gltf-model
						rotation="90 0 0"
						position="0 1.9 -0.5"
						scale="0.04 0.04 0.04"
						src="#anim2"
						animation-mixer
					></a-gltf-model>
				</a-entity>
				{/* <a-entity mindar-image-target="targetIndex: 1">
          <a-gltf-model rotation="0 95 90" position="0 2.85 -1.0" scale="0.28 0.28 0.28" src="#newCamModel" visible="false" animation-mixer></a-gltf-model>
      </a-entity> */}

				{/* Cup Model */}
				<a-entity mindar-image-target="targetIndex: 2">
					<a-gltf-model
						rotation="0 95 90"
						position="-0.12 2.85 -1.0"
						scale="0.16 0.16 0.16"
						src="#cupModel"
						animation-mixer
					></a-gltf-model>
				</a-entity>

				<a-entity mindar-image-target="targetIndex: 3">
					<a-gltf-model
						rotation="0 95 90"
						position="0.6 2.85 -1.0"
						scale="0.2 0.2 0.2"
						src="#contactModel"
						animation-mixer
					></a-gltf-model>
					<a-gltf-model
						rotation="90 0 0"
						position="0 1.8 -0.5"
						scale="0.04 0.04 0.04"
						src="#anim4"
						animation-mixer
					></a-gltf-model>
				</a-entity>

				<a-entity mindar-image-target="targetIndex: 4">
					<a-gltf-model
						rotation="0 95 90"
						position="1.0 2.85 -1.0"
						scale="0.16 0.16 0.16"
						src="#tankModel"
						animation-mixer
					></a-gltf-model>
					<a-gltf-model
						rotation="90 0 0"
						position="0 2.1 -0.5"
						scale="0.052 0.052 0.052"
						src="#anim5"
						animation-mixer
					></a-gltf-model>
				</a-entity>

				<a-entity mindar-image-target="targetIndex: 5">
					<a-gltf-model
						rotation="0 95 90"
						position="1.51 2.35 -1.0"
						scale="0.1 0.1 0.1"
						src="#trayModel"
						animation-mixer
					></a-gltf-model>
					<a-gltf-model
						rotation="80 0 0"
						position="0 1.9 -0.5"
						scale="0.038 0.038 0.038"
						src="#anim6"
						animation-mixer
					></a-gltf-model>
				</a-entity>

				<a-entity mindar-image-target="targetIndex: 6">
					<a-gltf-model
						rotation="10 95 90"
						position="1.45 1.25 -0.86"
						scale="0.13 0.13 0.13"
						src="#spoonModel"
						animation-mixer
					></a-gltf-model>
				</a-entity>
			</a-scene>
		</div>
	);
}
