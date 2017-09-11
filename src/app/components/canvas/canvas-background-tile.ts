import { Scene } from 'three';
import * as THREE from 'three';
export class CanvasBackgroundTile extends THREE.Mesh {

    public constructor(width = 1980, height = 1024) {
        const geometry = new THREE.PlaneGeometry(width, height);

        const texture = new THREE.TextureLoader().load("/assets/3d/tile.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;


        const material = new THREE.MeshBasicMaterial(
            { color: 0xffffff, side: THREE.DoubleSide, opacity: 0.1, transparent: true, alphaMap: texture }
        );

        super(geometry, material);


        texture.repeat.x = width / 8;
        texture.repeat.y = height / 8;

        this.position.x = 0;
    }


}