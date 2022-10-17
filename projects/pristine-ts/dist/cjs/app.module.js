"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appModule = void 0;
const aardvark_controller_1 = require("./controllers/aardvark.controller");
const albatross_controller_1 = require("./controllers/albatross.controller");
const alligator_controller_1 = require("./controllers/alligator.controller");
const alpaca_controller_1 = require("./controllers/alpaca.controller");
const ant_controller_1 = require("./controllers/ant.controller");
const anteater_controller_1 = require("./controllers/anteater.controller");
const antelope_controller_1 = require("./controllers/antelope.controller");
const ape_controller_1 = require("./controllers/ape.controller");
const armadillo_controller_1 = require("./controllers/armadillo.controller");
const donkey_controller_1 = require("./controllers/donkey.controller");
const baboon_controller_1 = require("./controllers/baboon.controller");
const badger_controller_1 = require("./controllers/badger.controller");
const barracuda_controller_1 = require("./controllers/barracuda.controller");
const bat_controller_1 = require("./controllers/bat.controller");
const bear_controller_1 = require("./controllers/bear.controller");
const beaver_controller_1 = require("./controllers/beaver.controller");
const bee_controller_1 = require("./controllers/bee.controller");
const bison_controller_1 = require("./controllers/bison.controller");
const boar_controller_1 = require("./controllers/boar.controller");
const buffalo_controller_1 = require("./controllers/buffalo.controller");
const butterfly_controller_1 = require("./controllers/butterfly.controller");
const camel_controller_1 = require("./controllers/camel.controller");
const capybara_controller_1 = require("./controllers/capybara.controller");
const caribou_controller_1 = require("./controllers/caribou.controller");
const cassowary_controller_1 = require("./controllers/cassowary.controller");
const cat_controller_1 = require("./controllers/cat.controller");
const caterpillar_controller_1 = require("./controllers/caterpillar.controller");
const cattle_controller_1 = require("./controllers/cattle.controller");
const chamois_controller_1 = require("./controllers/chamois.controller");
const cheetah_controller_1 = require("./controllers/cheetah.controller");
const chicken_controller_1 = require("./controllers/chicken.controller");
const chimpanzee_controller_1 = require("./controllers/chimpanzee.controller");
const chinchilla_controller_1 = require("./controllers/chinchilla.controller");
const chough_controller_1 = require("./controllers/chough.controller");
const clam_controller_1 = require("./controllers/clam.controller");
const cobra_controller_1 = require("./controllers/cobra.controller");
const cockroach_controller_1 = require("./controllers/cockroach.controller");
const cod_controller_1 = require("./controllers/cod.controller");
const cormorant_controller_1 = require("./controllers/cormorant.controller");
const coyote_controller_1 = require("./controllers/coyote.controller");
const crab_controller_1 = require("./controllers/crab.controller");
const crane_controller_1 = require("./controllers/crane.controller");
const crocodile_controller_1 = require("./controllers/crocodile.controller");
const crow_controller_1 = require("./controllers/crow.controller");
const curlew_controller_1 = require("./controllers/curlew.controller");
const deer_controller_1 = require("./controllers/deer.controller");
const dinosaur_controller_1 = require("./controllers/dinosaur.controller");
const dog_controller_1 = require("./controllers/dog.controller");
const dogfish_controller_1 = require("./controllers/dogfish.controller");
const dolphin_controller_1 = require("./controllers/dolphin.controller");
const dotterel_controller_1 = require("./controllers/dotterel.controller");
const dove_controller_1 = require("./controllers/dove.controller");
const dragonfly_controller_1 = require("./controllers/dragonfly.controller");
const duck_controller_1 = require("./controllers/duck.controller");
const dugong_controller_1 = require("./controllers/dugong.controller");
const dunlin_controller_1 = require("./controllers/dunlin.controller");
const eagle_controller_1 = require("./controllers/eagle.controller");
const echidna_controller_1 = require("./controllers/echidna.controller");
const eel_controller_1 = require("./controllers/eel.controller");
const eland_controller_1 = require("./controllers/eland.controller");
const elephant_controller_1 = require("./controllers/elephant.controller");
const elk_controller_1 = require("./controllers/elk.controller");
const emu_controller_1 = require("./controllers/emu.controller");
const falcon_controller_1 = require("./controllers/falcon.controller");
const ferret_controller_1 = require("./controllers/ferret.controller");
const finch_controller_1 = require("./controllers/finch.controller");
const fish_controller_1 = require("./controllers/fish.controller");
const flamingo_controller_1 = require("./controllers/flamingo.controller");
const fly_controller_1 = require("./controllers/fly.controller");
const fox_controller_1 = require("./controllers/fox.controller");
const frog_controller_1 = require("./controllers/frog.controller");
const gaur_controller_1 = require("./controllers/gaur.controller");
const gazelle_controller_1 = require("./controllers/gazelle.controller");
const gerbil_controller_1 = require("./controllers/gerbil.controller");
const giraffe_controller_1 = require("./controllers/giraffe.controller");
const gnat_controller_1 = require("./controllers/gnat.controller");
const gnu_controller_1 = require("./controllers/gnu.controller");
const goat_controller_1 = require("./controllers/goat.controller");
const goldfinch_controller_1 = require("./controllers/goldfinch.controller");
const goldfish_controller_1 = require("./controllers/goldfish.controller");
const goose_controller_1 = require("./controllers/goose.controller");
const gorilla_controller_1 = require("./controllers/gorilla.controller");
const goshawk_controller_1 = require("./controllers/goshawk.controller");
const grasshopper_controller_1 = require("./controllers/grasshopper.controller");
const grouse_controller_1 = require("./controllers/grouse.controller");
const guanaco_controller_1 = require("./controllers/guanaco.controller");
const gull_controller_1 = require("./controllers/gull.controller");
const hamster_controller_1 = require("./controllers/hamster.controller");
const hare_controller_1 = require("./controllers/hare.controller");
const hawk_controller_1 = require("./controllers/hawk.controller");
const hedgehog_controller_1 = require("./controllers/hedgehog.controller");
const heron_controller_1 = require("./controllers/heron.controller");
const herring_controller_1 = require("./controllers/herring.controller");
const hippopotamus_controller_1 = require("./controllers/hippopotamus.controller");
const hornet_controller_1 = require("./controllers/hornet.controller");
const horse_controller_1 = require("./controllers/horse.controller");
const human_controller_1 = require("./controllers/human.controller");
const hummingbird_controller_1 = require("./controllers/hummingbird.controller");
const hyena_controller_1 = require("./controllers/hyena.controller");
const ibex_controller_1 = require("./controllers/ibex.controller");
const ibis_controller_1 = require("./controllers/ibis.controller");
const jackal_controller_1 = require("./controllers/jackal.controller");
const jaguar_controller_1 = require("./controllers/jaguar.controller");
const jay_controller_1 = require("./controllers/jay.controller");
const jellyfish_controller_1 = require("./controllers/jellyfish.controller");
const kangaroo_controller_1 = require("./controllers/kangaroo.controller");
const kingfisher_controller_1 = require("./controllers/kingfisher.controller");
const koala_controller_1 = require("./controllers/koala.controller");
const kookabura_controller_1 = require("./controllers/kookabura.controller");
const kouprey_controller_1 = require("./controllers/kouprey.controller");
const kudu_controller_1 = require("./controllers/kudu.controller");
const lapwing_controller_1 = require("./controllers/lapwing.controller");
const lark_controller_1 = require("./controllers/lark.controller");
const lemur_controller_1 = require("./controllers/lemur.controller");
const leopard_controller_1 = require("./controllers/leopard.controller");
const lion_controller_1 = require("./controllers/lion.controller");
const llama_controller_1 = require("./controllers/llama.controller");
const lobster_controller_1 = require("./controllers/lobster.controller");
const locust_controller_1 = require("./controllers/locust.controller");
const loris_controller_1 = require("./controllers/loris.controller");
const louse_controller_1 = require("./controllers/louse.controller");
const lyrebird_controller_1 = require("./controllers/lyrebird.controller");
const magpie_controller_1 = require("./controllers/magpie.controller");
const mallard_controller_1 = require("./controllers/mallard.controller");
const manatee_controller_1 = require("./controllers/manatee.controller");
const mandrill_controller_1 = require("./controllers/mandrill.controller");
const mantis_controller_1 = require("./controllers/mantis.controller");
const marten_controller_1 = require("./controllers/marten.controller");
const meerkat_controller_1 = require("./controllers/meerkat.controller");
const mink_controller_1 = require("./controllers/mink.controller");
const mole_controller_1 = require("./controllers/mole.controller");
const mongoose_controller_1 = require("./controllers/mongoose.controller");
const monkey_controller_1 = require("./controllers/monkey.controller");
const moose_controller_1 = require("./controllers/moose.controller");
const mosquito_controller_1 = require("./controllers/mosquito.controller");
const mouse_controller_1 = require("./controllers/mouse.controller");
const mule_controller_1 = require("./controllers/mule.controller");
const narwhal_controller_1 = require("./controllers/narwhal.controller");
const newt_controller_1 = require("./controllers/newt.controller");
const nightingale_controller_1 = require("./controllers/nightingale.controller");
const octopus_controller_1 = require("./controllers/octopus.controller");
const okapi_controller_1 = require("./controllers/okapi.controller");
const opossum_controller_1 = require("./controllers/opossum.controller");
const oryx_controller_1 = require("./controllers/oryx.controller");
const ostrich_controller_1 = require("./controllers/ostrich.controller");
const otter_controller_1 = require("./controllers/otter.controller");
const owl_controller_1 = require("./controllers/owl.controller");
const oyster_controller_1 = require("./controllers/oyster.controller");
const panther_controller_1 = require("./controllers/panther.controller");
const parrot_controller_1 = require("./controllers/parrot.controller");
const partridge_controller_1 = require("./controllers/partridge.controller");
const peafowl_controller_1 = require("./controllers/peafowl.controller");
const pelican_controller_1 = require("./controllers/pelican.controller");
const penguin_controller_1 = require("./controllers/penguin.controller");
const pheasant_controller_1 = require("./controllers/pheasant.controller");
const pig_controller_1 = require("./controllers/pig.controller");
const pigeon_controller_1 = require("./controllers/pigeon.controller");
const pony_controller_1 = require("./controllers/pony.controller");
const porcupine_controller_1 = require("./controllers/porcupine.controller");
const porpoise_controller_1 = require("./controllers/porpoise.controller");
const quail_controller_1 = require("./controllers/quail.controller");
const quelea_controller_1 = require("./controllers/quelea.controller");
const quetzal_controller_1 = require("./controllers/quetzal.controller");
const rabbit_controller_1 = require("./controllers/rabbit.controller");
const raccoon_controller_1 = require("./controllers/raccoon.controller");
const rail_controller_1 = require("./controllers/rail.controller");
const ram_controller_1 = require("./controllers/ram.controller");
const rat_controller_1 = require("./controllers/rat.controller");
const raven_controller_1 = require("./controllers/raven.controller");
const reindeer_controller_1 = require("./controllers/reindeer.controller");
const rhinoceros_controller_1 = require("./controllers/rhinoceros.controller");
const rook_controller_1 = require("./controllers/rook.controller");
const salamander_controller_1 = require("./controllers/salamander.controller");
const salmon_controller_1 = require("./controllers/salmon.controller");
const sandpiper_controller_1 = require("./controllers/sandpiper.controller");
const sardine_controller_1 = require("./controllers/sardine.controller");
const scorpion_controller_1 = require("./controllers/scorpion.controller");
const seahorse_controller_1 = require("./controllers/seahorse.controller");
const seal_controller_1 = require("./controllers/seal.controller");
const shark_controller_1 = require("./controllers/shark.controller");
const sheep_controller_1 = require("./controllers/sheep.controller");
const shrew_controller_1 = require("./controllers/shrew.controller");
const skunk_controller_1 = require("./controllers/skunk.controller");
const snail_controller_1 = require("./controllers/snail.controller");
const snake_controller_1 = require("./controllers/snake.controller");
const sparrow_controller_1 = require("./controllers/sparrow.controller");
const spider_controller_1 = require("./controllers/spider.controller");
const spoonbill_controller_1 = require("./controllers/spoonbill.controller");
const squid_controller_1 = require("./controllers/squid.controller");
const squirrel_controller_1 = require("./controllers/squirrel.controller");
const starling_controller_1 = require("./controllers/starling.controller");
const stingray_controller_1 = require("./controllers/stingray.controller");
const stinkbug_controller_1 = require("./controllers/stinkbug.controller");
const stork_controller_1 = require("./controllers/stork.controller");
const swallow_controller_1 = require("./controllers/swallow.controller");
const swan_controller_1 = require("./controllers/swan.controller");
const tapir_controller_1 = require("./controllers/tapir.controller");
const tarsier_controller_1 = require("./controllers/tarsier.controller");
const termite_controller_1 = require("./controllers/termite.controller");
const tiger_controller_1 = require("./controllers/tiger.controller");
const toad_controller_1 = require("./controllers/toad.controller");
const trout_controller_1 = require("./controllers/trout.controller");
const turkey_controller_1 = require("./controllers/turkey.controller");
const turtle_controller_1 = require("./controllers/turtle.controller");
const viper_controller_1 = require("./controllers/viper.controller");
const vulture_controller_1 = require("./controllers/vulture.controller");
const wallaby_controller_1 = require("./controllers/wallaby.controller");
const walrus_controller_1 = require("./controllers/walrus.controller");
const wasp_controller_1 = require("./controllers/wasp.controller");
const weasel_controller_1 = require("./controllers/weasel.controller");
const whale_controller_1 = require("./controllers/whale.controller");
const wildcat_controller_1 = require("./controllers/wildcat.controller");
const wolf_controller_1 = require("./controllers/wolf.controller");
const wolverine_controller_1 = require("./controllers/wolverine.controller");
const wombat_controller_1 = require("./controllers/wombat.controller");
const woodcock_controller_1 = require("./controllers/woodcock.controller");
const woodpecker_controller_1 = require("./controllers/woodpecker.controller");
const worm_controller_1 = require("./controllers/worm.controller");
const wren_controller_1 = require("./controllers/wren.controller");
const yak_controller_1 = require("./controllers/yak.controller");
const zebra_controller_1 = require("./controllers/zebra.controller");
const networking_1 = require("@pristine-ts/networking");
const core_1 = require("@pristine-ts/core");
exports.appModule = {
    keyname: "pristine-ts-benchmark",
    importServices: [
        aardvark_controller_1.AardvarkController,
        albatross_controller_1.AlbatrossController,
        alligator_controller_1.AlligatorController,
        alpaca_controller_1.AlpacaController,
        ant_controller_1.AntController,
        anteater_controller_1.AnteaterController,
        antelope_controller_1.AntelopeController,
        ape_controller_1.ApeController,
        armadillo_controller_1.ArmadilloController,
        donkey_controller_1.DonkeyController,
        baboon_controller_1.BaboonController,
        badger_controller_1.BadgerController,
        barracuda_controller_1.BarracudaController,
        bat_controller_1.BatController,
        bear_controller_1.BearController,
        beaver_controller_1.BeaverController,
        bee_controller_1.BeeController,
        bison_controller_1.BisonController,
        boar_controller_1.BoarController,
        buffalo_controller_1.BuffaloController,
        butterfly_controller_1.ButterflyController,
        camel_controller_1.CamelController,
        capybara_controller_1.CapybaraController,
        caribou_controller_1.CaribouController,
        cassowary_controller_1.CassowaryController,
        cat_controller_1.CatController,
        caterpillar_controller_1.CaterpillarController,
        cattle_controller_1.CattleController,
        chamois_controller_1.ChamoisController,
        cheetah_controller_1.CheetahController,
        chicken_controller_1.ChickenController,
        chimpanzee_controller_1.ChimpanzeeController,
        chinchilla_controller_1.ChinchillaController,
        chough_controller_1.ChoughController,
        clam_controller_1.ClamController,
        cobra_controller_1.CobraController,
        cockroach_controller_1.CockroachController,
        cod_controller_1.CodController,
        cormorant_controller_1.CormorantController,
        coyote_controller_1.CoyoteController,
        crab_controller_1.CrabController,
        crane_controller_1.CraneController,
        crocodile_controller_1.CrocodileController,
        crow_controller_1.CrowController,
        curlew_controller_1.CurlewController,
        deer_controller_1.DeerController,
        dinosaur_controller_1.DinosaurController,
        dog_controller_1.DogController,
        dogfish_controller_1.DogfishController,
        dolphin_controller_1.DolphinController,
        dotterel_controller_1.DotterelController,
        dove_controller_1.DoveController,
        dragonfly_controller_1.DragonflyController,
        duck_controller_1.DuckController,
        dugong_controller_1.DugongController,
        dunlin_controller_1.DunlinController,
        eagle_controller_1.EagleController,
        echidna_controller_1.EchidnaController,
        eel_controller_1.EelController,
        eland_controller_1.ElandController,
        elephant_controller_1.ElephantController,
        elk_controller_1.ElkController,
        emu_controller_1.EmuController,
        falcon_controller_1.FalconController,
        ferret_controller_1.FerretController,
        finch_controller_1.FinchController,
        fish_controller_1.FishController,
        flamingo_controller_1.FlamingoController,
        fly_controller_1.FlyController,
        fox_controller_1.FoxController,
        frog_controller_1.FrogController,
        gaur_controller_1.GaurController,
        gazelle_controller_1.GazelleController,
        gerbil_controller_1.GerbilController,
        giraffe_controller_1.GiraffeController,
        gnat_controller_1.GnatController,
        gnu_controller_1.GnuController,
        goat_controller_1.GoatController,
        goldfinch_controller_1.GoldfinchController,
        goldfish_controller_1.GoldfishController,
        goose_controller_1.GooseController,
        gorilla_controller_1.GorillaController,
        goshawk_controller_1.GoshawkController,
        grasshopper_controller_1.GrasshopperController,
        grouse_controller_1.GrouseController,
        guanaco_controller_1.GuanacoController,
        gull_controller_1.GullController,
        hamster_controller_1.HamsterController,
        hare_controller_1.HareController,
        hawk_controller_1.HawkController,
        hedgehog_controller_1.HedgehogController,
        heron_controller_1.HeronController,
        herring_controller_1.HerringController,
        hippopotamus_controller_1.HippopotamusController,
        hornet_controller_1.HornetController,
        horse_controller_1.HorseController,
        human_controller_1.HumanController,
        hummingbird_controller_1.HummingbirdController,
        hyena_controller_1.HyenaController,
        ibex_controller_1.IbexController,
        ibis_controller_1.IbisController,
        jackal_controller_1.JackalController,
        jaguar_controller_1.JaguarController,
        jay_controller_1.JayController,
        jellyfish_controller_1.JellyfishController,
        kangaroo_controller_1.KangarooController,
        kingfisher_controller_1.KingfisherController,
        koala_controller_1.KoalaController,
        kookabura_controller_1.KookaburaController,
        kouprey_controller_1.KoupreyController,
        kudu_controller_1.KuduController,
        lapwing_controller_1.LapwingController,
        lark_controller_1.LarkController,
        lemur_controller_1.LemurController,
        leopard_controller_1.LeopardController,
        lion_controller_1.LionController,
        llama_controller_1.LlamaController,
        lobster_controller_1.LobsterController,
        locust_controller_1.LocustController,
        loris_controller_1.LorisController,
        louse_controller_1.LouseController,
        lyrebird_controller_1.LyrebirdController,
        magpie_controller_1.MagpieController,
        mallard_controller_1.MallardController,
        manatee_controller_1.ManateeController,
        mandrill_controller_1.MandrillController,
        mantis_controller_1.MantisController,
        marten_controller_1.MartenController,
        meerkat_controller_1.MeerkatController,
        mink_controller_1.MinkController,
        mole_controller_1.MoleController,
        mongoose_controller_1.MongooseController,
        monkey_controller_1.MonkeyController,
        moose_controller_1.MooseController,
        mosquito_controller_1.MosquitoController,
        mouse_controller_1.MouseController,
        mule_controller_1.MuleController,
        narwhal_controller_1.NarwhalController,
        newt_controller_1.NewtController,
        nightingale_controller_1.NightingaleController,
        octopus_controller_1.OctopusController,
        okapi_controller_1.OkapiController,
        opossum_controller_1.OpossumController,
        oryx_controller_1.OryxController,
        ostrich_controller_1.OstrichController,
        otter_controller_1.OtterController,
        owl_controller_1.OwlController,
        oyster_controller_1.OysterController,
        panther_controller_1.PantherController,
        parrot_controller_1.ParrotController,
        partridge_controller_1.PartridgeController,
        peafowl_controller_1.PeafowlController,
        pelican_controller_1.PelicanController,
        penguin_controller_1.PenguinController,
        pheasant_controller_1.PheasantController,
        pig_controller_1.PigController,
        pigeon_controller_1.PigeonController,
        pony_controller_1.PonyController,
        porcupine_controller_1.PorcupineController,
        porpoise_controller_1.PorpoiseController,
        quail_controller_1.QuailController,
        quelea_controller_1.QueleaController,
        quetzal_controller_1.QuetzalController,
        rabbit_controller_1.RabbitController,
        raccoon_controller_1.RaccoonController,
        rail_controller_1.RailController,
        ram_controller_1.RamController,
        rat_controller_1.RatController,
        raven_controller_1.RavenController,
        reindeer_controller_1.ReindeerController,
        rhinoceros_controller_1.RhinocerosController,
        rook_controller_1.RookController,
        salamander_controller_1.SalamanderController,
        salmon_controller_1.SalmonController,
        sandpiper_controller_1.SandpiperController,
        sardine_controller_1.SardineController,
        scorpion_controller_1.ScorpionController,
        seahorse_controller_1.SeahorseController,
        seal_controller_1.SealController,
        shark_controller_1.SharkController,
        sheep_controller_1.SheepController,
        shrew_controller_1.ShrewController,
        skunk_controller_1.SkunkController,
        snail_controller_1.SnailController,
        snake_controller_1.SnakeController,
        sparrow_controller_1.SparrowController,
        spider_controller_1.SpiderController,
        spoonbill_controller_1.SpoonbillController,
        squid_controller_1.SquidController,
        squirrel_controller_1.SquirrelController,
        starling_controller_1.StarlingController,
        stingray_controller_1.StingrayController,
        stinkbug_controller_1.StinkbugController,
        stork_controller_1.StorkController,
        swallow_controller_1.SwallowController,
        swan_controller_1.SwanController,
        tapir_controller_1.TapirController,
        tarsier_controller_1.TarsierController,
        termite_controller_1.TermiteController,
        tiger_controller_1.TigerController,
        toad_controller_1.ToadController,
        trout_controller_1.TroutController,
        turkey_controller_1.TurkeyController,
        turtle_controller_1.TurtleController,
        viper_controller_1.ViperController,
        vulture_controller_1.VultureController,
        wallaby_controller_1.WallabyController,
        walrus_controller_1.WalrusController,
        wasp_controller_1.WaspController,
        weasel_controller_1.WeaselController,
        whale_controller_1.WhaleController,
        wildcat_controller_1.WildcatController,
        wolf_controller_1.WolfController,
        wolverine_controller_1.WolverineController,
        wombat_controller_1.WombatController,
        woodcock_controller_1.WoodcockController,
        woodpecker_controller_1.WoodpeckerController,
        worm_controller_1.WormController,
        wren_controller_1.WrenController,
        yak_controller_1.YakController,
        zebra_controller_1.ZebraController,
    ],
    importModules: [core_1.CoreModule, networking_1.NetworkingModule],
    providerRegistrations: []
};
//# sourceMappingURL=app.module.js.map