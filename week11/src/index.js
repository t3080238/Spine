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
        .add('symbol', 'images/symbol.json')
        .on("progress", loadProgressHandler)
        .load(initial);

    var dragon = null;

    function loadProgressHandler(loader, resource) {
        //顯示進度-------------------------------------------------------------------------
        let resourceName = resource.url;
        console.log(resourceName);
        let loadPercent = loader.progress;
        console.log(loadPercent);
    }

    function initial(loader, res) {
        // instantiate the spine animation
        dragon = new PIXI.spine.Spine(res.symbol.spineData);
        dragon.skeleton.setToSetupPose();
        dragon.update(0);
        dragon.autoUpdate = false;

        // create a container for the spine animation and add the animation to it
        var dragonCage = new PIXI.Container();
        dragonCage.addChild(dragon);

        // measure the spine animation and position it inside its container to align it to the origin
        var localRect = dragon.getLocalBounds();
        dragon.position.set(-localRect.x, -localRect.y);

        // now we can scale, position and rotate the container as any other display object
        var scale = Math.min(
            (app.screen.width * 0.7) / dragonCage.width,
            (app.screen.height * 0.7) / dragonCage.height
        );
        dragonCage.scale.set(scale, scale);
        dragonCage.position.set(
            (app.screen.width - dragonCage.width) * 0.5,
            (app.screen.height - dragonCage.height) * 0.5
        );

        // add the container to the stage
        app.stage.addChild(dragonCage);

        // once position and scaled, set the animation to play
        //dragon.state.setAnimation(0, 'animation', true);

        app.ticker.add(function () {
            // update the spine animation, only needed if dragon.autoupdate is set to false
            dragon.update(0.01666667); // HARDCODED FRAMERATE!
        });
    }

}