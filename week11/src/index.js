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
        .add('dragon', 'images/spineboy.json')
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
        //symbolSpine.scale.set(0.3);
        symbolSpine.position.set(app.screen.width/2, app.screen.height/2);

        symbolSpine.skeleton.setToSetupPose();

        app.stage.addChild(symbolSpine);


        //symbolSpine.autoUpdate = false;

        symbolSpine.state.setAnimation(1, 'walk', true);
        symbolSpine.update(2);
        symbolSpine.state.setAnimation(0, 'jump', true);

        console.log(symbolSpine.state.getCurrent(1).getAnimationTime());
        console.log(symbolSpine.state.tracks[0].getAnimationTime());

        //dragon.skeleton.setSkinByName('goblin');    //設定整個骨架的皮膚

        app.ticker.add(function () {
            console.log(symbolSpine.state.getCurrent(1).getAnimationTime());
            console.log(symbolSpine.state.tracks[0].getAnimationTime());
        });
    }

}