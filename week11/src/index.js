import './css/rwd.css';
//import abc from './class.js'

window.onload = function () {
    const [screenW, screenH] = [1024, 768];

    //Aliases 設定別名
    let Application = PIXI.Application,
        loader = PIXI.loader

    // Create a Pixi Application 
    let app = new Application({
        width: screenW,         // default: 1024
        height: screenH,        // default: 768
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1,       // default: 1
        backgroundColor: 0xf0f0f0
    });

    // Add the canvas that Pixi automatically created for you to the HTML document 
    document.body.appendChild(app.view);

    // load an image and run the `loadImage` function when it's done
    loader
        .add('dragon', 'images/spineboy-pro.json')
        //.add('dragon', 'images/spineboy.json')
        .on("progress", loadProgressHandler)
        .load(initial);

    var symbolSpine = null;

    function loadProgressHandler(loader, resource) {
        //顯示進度-------------------------------------------------------------------------
        let resourceName = resource.url;
        console.log(resourceName);
        let loadPercent = loader.progress;
        console.log(loadPercent);
    }

    function initial(loader, res) {
        // instantiate the spine animation
        symbolSpine = new PIXI.spine.Spine(res.dragon.spineData);

        symbolSpine.scale.set(0.4);
        symbolSpine.position.set(app.screen.width / 2, app.screen.height / 2 + 200);

        symbolSpine.skeleton.setToSetupPose();

        app.stage.interactive = true;
        app.stage.addChild(symbolSpine);

        app.stage.on('pointerdown', function () {

            symbolSpine.state.setAnimation(0, 'jump', false, 0);
            symbolSpine.state.addAnimation(0, 'run', true, 0);

        /*    let raiseHandTime = 0.5;
            //symbolSpine.state.setEmptyAnimation(1, 2);

            let entry = symbolSpine.state.setAnimation(1, 'aim', true);
            console.log('TCL: initial -> entry7', entry7)
            entry.mixDuration = raiseHandTime;

            symbolSpine.state.setAnimation(2, 'shoot', false);
            //symbolSpine.state.addAnimation(2, 'shoot', false, 0);
            //symbolSpine.state.addEmptyAnimation(2, 0, 0);
        */
        });

        //symbolSpine.tint = 0xffdddd

        symbolSpine.stateData.setMix('run', 'run-to-idle', 0.2); //設定動作混接的時間
        symbolSpine.stateData.setMix('run-to-idle', 'run', 0.1); //設定動作混接的時間
        symbolSpine.stateData.setMix('run', 'jump', 0.2); //設定動作混接的時間
        symbolSpine.stateData.setMix('jump', 'run', 0.4); //設定動作混接的時間

        symbolSpine.state.addListener({
            start: function (track) { console.log(track.trackIndex + " Start") },
            complete: function (track) { console.log(track.trackIndex + " complete") },
            interrupt: function (track) { console.log(track.trackIndex + " interrupt") },
            end: function (track) { console.log(track.trackIndex + " end") },
            event: function (track, event) { console.log(track.trackIndex + ' ' + event.data.name + " event") }
        });

        // 設置空動畫可以緩慢起跑
        symbolSpine.state.setEmptyAnimation(0, 1.5);
        let entry = symbolSpine.state.addAnimation(0, 'run', true, 0);
        //entry.alpha = 0.5;        
        //entry.timeScale = 2;
        //entry.mixDuration = 1.5;


        //symbolSpine.autoUpdate = false;
        symbolSpine.update(0.8);


        let a = 0;
        app.ticker.add(function () {
            if (symbolSpine.autoUpdate === false) return;
            if (symbolSpine.state.getCurrent(0) === null) return;

            if (a === 450) {
                symbolSpine.state.addAnimation(0, 'run-to-idle', false, 0.2);
            }

            a++;

            if (a > 600) {

                let a1 = symbolSpine.state.getCurrent(0).getAnimationTime();
                console.log('TCL: initial -> a1', a1)

                //symbolSpine.skeleton.setToSetupPose();
                symbolSpine.state.clearTrack(0);
                symbolSpine.state.clearTracks();
                console.log('TCL: initial -> clearTracks')
            }
        });
    }
}