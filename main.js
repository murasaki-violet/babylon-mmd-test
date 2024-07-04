import './style.css';
import { Engine, Scene, ArcRotateCamera, SceneLoader, Vector3, HemisphericLight } from '@babylonjs/core';
import '@babylonjs/loaders/glTF';
import { MmdRuntime, VmdLoader } from 'babylon-mmd';
import { VRMLoaderPlugin } from 'babylon-vrm-loader';

const canvas = document.getElementById('renderCanvas');

// Babylon.jsエンジンを作成
const engine = new Engine(canvas, true);

// シーンを作成
const createScene = async () => {
    const scene = new Scene(engine);

    // カメラを作成
    const camera = new ArcRotateCamera('camera1', Math.PI * 3 / 2, Math.PI / 2, 5, new Vector3(-5, 13, -9), scene);
    camera.attachControl(canvas, true);

    // 環境光を作成
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

    try {
        // PMXモデルの読み込み
        const result = await SceneLoader.ImportMeshAsync(undefined, 'model/cat/cat.pmx', '', scene);
        const mmdMesh = result.meshes[0];

        // MMDランタイムの設定
        const mmdRuntime = new MmdRuntime(scene);
        mmdRuntime.register(scene);

        const mmdModel = mmdRuntime.createMmdModel(mmdMesh);

        // VMDモーションの読み込み
        const vmdLoader = new VmdLoader(scene);
        const modelMotion = await vmdLoader.loadAsync("model_motion_1", "motion/Shikanoko.vmd");

        // アニメーションの適用
        mmdModel.addAnimation(modelMotion);
        mmdModel.setAnimation("model_motion_1");

        mmdRuntime.playAnimation();

    } catch (error) {
        console.error("Failed to load the PMX or VMD file:", error);
    }

    let elapsedTime = 0;
    const changeInterval = 8; // 8秒ごとに移動方向を変更
    const initialPosition = camera.position.clone();
    const initialTargetX = camera.target.x;

    scene.onBeforeRenderObservable.add(() => {
        const deltaTime = engine.getDeltaTime() / 1000; // 秒単位での経過時間
        elapsedTime += deltaTime;

        if (elapsedTime <= 4) {
            camera.target.x += deltaTime * 0.5; // 速度を調整
            camera.position.x += deltaTime * 0.5; // カメラの位置を横方向に移動
        } else if (elapsedTime <= 8) {
            camera.target.x += deltaTime * 1.5 * -1; // 速度を調整
            camera.position.x += deltaTime * 1.5 * -1; // カメラの位置を横方向に移動
        } else {
            camera.setPosition(initialPosition);
            camera.target.x = initialTargetX;
            camera.alpha = Math.PI * 3 / 2;
            camera.beta = Math.PI / 2;
            camera.radius = 5;

            // これ以降カメラの移動を停止する
            scene.onBeforeRenderObservable.clear();
        }
    });

    return scene;
};

// シーンを作成
createScene().then((scene) => {
    engine.runRenderLoop(() => {
        scene.render();
    });
});

// ウィンドウサイズの変更に対応
window.addEventListener('resize', () => {
    engine.resize();
});