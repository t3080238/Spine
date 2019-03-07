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

        //symbolSpine.autoUpdate = false;
        symbolSpine.scale.set(0.4);
        symbolSpine.position.set(app.screen.width / 2, app.screen.height / 2 + 200);

        symbolSpine.skeleton.setToSetupPose();

        app.stage.interactive = true;
        app.stage.addChild(symbolSpine);

        // set up the mixes!
        //symbolSpine.stateData.setMix('walk', 'jump', 0.2);
        //symbolSpine.stateData.setMix('jump', 'walk', 0.4);
        /*symbolSpine.stateData.setMix('run', 'run-to-idle', 0.2); //設定動作混接的時間
        symbolSpine.stateData.setMix('run-to-idle', 'run', 0.4); //設定動作混接的時間
        // play animation
        symbolSpine.state.setAnimation(0, 'run', true);*/


        app.stage.on('pointerdown', function () {

            let entry6 = symbolSpine.state.setEmptyAnimation(1, 0);
            entry6.mixDuration = 0.666666;
            console.log('TCL: initial -> entry6', entry6)

            let entry7 = symbolSpine.state.addAnimation(1, 'aim', false);

            console.log('TCL: initial -> entry7', entry7)
            entry7.mixDuration = 0.333333;

            //entry6.alpha=0.5;

            symbolSpine.state.setEmptyAnimation(2, 0);

            symbolSpine.state.addAnimation(2, 'shoot', false, 0);

            symbolSpine.state.addEmptyAnimation(2, 0, 0);

            //console.log('TCL: initial -> entry6', entry6)
            console.log('TCL: initial -> entry.animation', entry.animation)
            //entry.timeScale = 2;

            //let entry2 = symbolSpine.state.addAnimation(0, 'jump', false, 0);

            //symbolSpine.state.setEmptyAnimation(0, 1.5);

            //let entry5 = symbolSpine.state.addEmptyAnimation(1, 0, 0);
            //console.log(entry.animation);
            //entry.alpha=0.1;
            //entry.mixDuration = 0.1;
            //symbolSpine.state.addAnimation(0, 'walk', true, 0);
            //symbolSpine.state.setAnimation(0, 'run-to-idle', false);
            //let entry4 = symbolSpine.state.addAnimation(0, 'run', true, 0);
            //console.log('TCL: initial -> entry4', entry4)
            //entry4.mixDuration=2;
        });

        //symbolSpine.tint = 0xffdddd

        symbolSpine.stateData.setMix('run', 'run-to-idle', 0.2); //設定動作混接的時間
        symbolSpine.stateData.setMix('run-to-idle', 'run', 0.1); //設定動作混接的時間
        symbolSpine.stateData.setMix('run', 'jump', 0.2); //設定動作混接的時間
        symbolSpine.stateData.setMix('jump', 'run', 0.4); //設定動作混接的時間

        symbolSpine.state.addListener({
            start: function (track) {
                console.log(track.trackIndex + ' ' + track.animation.name + " Start")
            },
            complete: function (track) {
                console.log(track.trackIndex + ' ' + track.animation.name + " complete")
            },
            interrupt: function (track) {
                console.log(track.trackIndex + ' ' + track.animation.name + " interrupt")
            },
            end: function (track) {
                console.log(track.trackIndex + ' ' + track.animation.name + " end")
            },
            event: function (track, event) {
                console.log(track.trackIndex + ' ' + event.data.name + " event")
            }
        });
        
    /*symbolSpine.state.addListener({
        start: function (track) { console.log(track.trackIndex + " Start") },
        complete: function (track) { console.log(track.trackIndex + " complete") },
        interrupt: function (track) { console.log(track.trackIndex + " interrupt") },
        end: function (track) { console.log(track.trackIndex + " end") },
        event: function (track, event) { console.log(event.data.name + " event") }
    });*/


        /*symbolSpine.state.queue.complete = (track) => {

            console.log(track+ "COMPLETE COMPLETE COMPLETE COMPLETE COMPLETE COMPLETE ")
            //console.log(symbolSpine.state.getCurrent(1).getAnimationTime());
            if (symbolSpine.state.tracks[0] === null) return;
            console.log(symbolSpine.state.tracks[0].getAnimationTime());
        }
        symbolSpine.state.queue.interrupt = () => {
            console.log("Interrupt Interrupt Interrupt Interrupt Interrupt")
        }
        symbolSpine.state.queue.end = () => {
            console.log("END END END END END END END END END END END END END")
        }
        // symbolSpine.state.queue.start = () => {
        //     console.log("Start Start Start Start Start Start Start Start Start")
        // }
        symbolSpine.state.queue.dispose = () => {
            console.log("Dispose Dispose Dispose Dispose Dispose Dispose Dispose")
        }*/

        // 設置空洞化可以緩慢起跑
        symbolSpine.state.setEmptyAnimation(0, 1.5);

        let entry = symbolSpine.state.addAnimation(0, 'run', true, 0);
        console.log(entry.animation.name);
        entry.alpha = 0.5;
        entry.timeScale = 2;
        entry.mixDuration = 1.5;
        console.log(entry.trackIndex);


        console.log('TCL: initial -> entry', entry)

        /*console.log(entry);
        console.log(symbolSpine.state);*/

        //symbolSpine.state.addAnimation(0, 'run-to-idle', true, 0);


        //symbolSpine.autoUpdate = false;

        //symbolSpine.state.setAnimation(1, 'aim', true);

        //symbolSpine.state.setAnimation(0, 'shoot', true);
        //symbolSpine.update(0.8);

        //console.log(symbolSpine.state.getCurrent(1).getAnimationTime());
        //console.log(symbolSpine.state.tracks[0].getAnimationTime());
        console.log("--------------------------------------------------")

        //dragon.skeleton.setSkinByName('goblin');    //設定整個骨架的皮膚


        let a = 0;
        app.ticker.add(function () {
            if (symbolSpine.autoUpdate === false) return;

            // let a1 = symbolSpine.state.getCurrent(1).getAnimationTime();
            // console.log('TCL: initial -> a1', a1)
            // console.log(symbolSpine.state.getCurrent(1))

            if (a === 300) {
                //symbolSpine.state.addAnimation(0, 'run-to-idle', true, 0.2);
            }


            if (symbolSpine.state.tracks[0] === null) return;
            a++;
            // //console.log('TCL: initial -> a', a)

            // let a0 = symbolSpine.state.tracks[0].getAnimationTime();
            // //if (a0 >= 1.3) symbolSpine.autoUpdate = false;

            /* console.log('TCL: initial -> a2', a0)
             console.log(symbolSpine.state.tracks[0])
             console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
             console.log(symbolSpine)
             console.log(symbolSpine.spineData)
             console.log(symbolSpine.skeleton)
             console.log(symbolSpine.state)
             console.log(symbolSpine.stateData)
             console.log("--------------------------------------------------")*/

            if (a > 600) {

                symbolSpine.skeleton.setToSetupPose();
                symbolSpine.state.clearTrack(0);

                console.log('clearTrack(0)')
            }


        });
    }

}